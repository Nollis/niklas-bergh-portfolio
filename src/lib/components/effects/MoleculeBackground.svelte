<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		if (!browser || !canvas) return;

		// Fullscreen canvas setup - behind content but in front of base background
		Object.assign(canvas.style, {
			position: 'fixed',
			inset: '0',
			zIndex: '-5',
			pointerEvents: 'none'
		});

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true
		});

		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x02040a, 0.08);

		const camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			100
		);
		camera.position.z = 20;

		// Lighting
		const ambient = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambient);
		const directional = new THREE.DirectionalLight(0xffffff, 0.8);
		directional.position.set(5, 10, 7);
		scene.add(directional);

		// Helpers for a simple cartoon outline look in brand green
		const brandGreen = 0x98e594;
		const lineMaterial = new THREE.LineBasicMaterial({
			color: brandGreen,
			transparent: true,
			opacity: 0.85
		});

		function createAtomTexture() {
			const size = 128;
			const c = document.createElement('canvas');
			c.width = c.height = size;
			const ctx = c.getContext('2d');
			if (!ctx) return null;

			ctx.clearRect(0, 0, size, size);
			ctx.strokeStyle = '#98e594';
			ctx.lineWidth = 6;
			ctx.shadowColor = 'rgba(152, 229, 148, 0.35)';
			ctx.shadowBlur = 8;
			ctx.beginPath();
			ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
			ctx.stroke();

			const tex = new THREE.CanvasTexture(c);
			tex.needsUpdate = true;
			return tex;
		}

		const atomTexture = createAtomTexture();
		const atomMaterial = atomTexture
			? new THREE.SpriteMaterial({
					map: atomTexture,
					color: brandGreen,
					transparent: true,
					opacity: 0.9,
					depthWrite: false
				})
			: null;

		type MoleculeGroup = THREE.Group & {
			userData: {
				rotSpeed: number;
				drift: THREE.Vector3;
			};
		};

		const molecules: MoleculeGroup[] = [];

		function createMolecule() {
			const group = new THREE.Group() as MoleculeGroup;

			// Simple "molecule": 3 flat atoms with connecting lines
			const atoms: THREE.Sprite[] = [];
			for (let i = 0; i < 3; i++) {
				const atom = new THREE.Sprite(atomMaterial ?? undefined);
				atom.scale.set(1.1, 1.1, 1.1);
				atom.position.set(
					(Math.random() - 0.5) * 2,
					(Math.random() - 0.5) * 2,
					(Math.random() - 0.5) * 2
				);
				group.add(atom);
				atoms.push(atom);
			}

			// Connect atoms with bonds
			function makeBond(a: THREE.Sprite, b: THREE.Sprite) {
				const points = [a.position.clone(), b.position.clone()];
				const bondGeo = new THREE.BufferGeometry().setFromPoints(points);
				const bond = new THREE.Line(bondGeo, lineMaterial);
				group.add(bond);
			}

			makeBond(atoms[0], atoms[1]);
			makeBond(atoms[1], atoms[2]);

			group.position.set(
				(Math.random() - 0.5) * 25,
				(Math.random() - 0.5) * 15,
				(Math.random() - 0.5) * 10
			);

			group.userData = {
				rotSpeed: (Math.random() * 0.4 - 0.2) * 0.002,
				drift: new THREE.Vector3(
					(Math.random() - 0.5) * 0.003,
					(Math.random() - 0.5) * 0.003,
					(Math.random() - 0.5) * 0.001
				)
			};

			scene.add(group);
			molecules.push(group);
		}

		// Create 20 molecules
		for (let i = 0; i < 20; i++) createMolecule();

		function resize() {
			const w = window.innerWidth;
			const h = window.innerHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		}
		window.addEventListener('resize', resize);
		resize();

		// Mouse parallax
		let mouseX = 0;
		let mouseY = 0;

		function handleMouseMove(e: MouseEvent) {
			const x = (e.clientX / window.innerWidth) * 2 - 1;
			const y = (e.clientY / window.innerHeight) * 2 - 1;
			mouseX = x * 0.5;
			mouseY = y * 0.3;
		}
		window.addEventListener('mousemove', handleMouseMove);

		function animate() {
			animationId = requestAnimationFrame(animate);

			camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
			camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
			camera.lookAt(0, 0, 0);

			molecules.forEach((m) => {
				m.rotation.y += m.userData.rotSpeed;
				m.position.add(m.userData.drift);

				// Wrap around when out of bounds
				if (m.position.x > 15) m.position.x = -15;
				if (m.position.x < -15) m.position.x = 15;
				if (m.position.y > 10) m.position.y = -10;
				if (m.position.y < -10) m.position.y = 10;
			});

			renderer.render(scene, camera);
		}
		animate();

		return () => {
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', handleMouseMove);
			renderer.dispose();
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});
</script>

<canvas bind:this={canvas} id="molecule-bg" aria-hidden="true"></canvas>
