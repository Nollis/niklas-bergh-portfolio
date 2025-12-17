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

		// Materials for a simple 3D toon look
		const brandGreen = 0x98e594;
		const brandTeal = 0x4db0a2;
		const coreMaterial = new THREE.MeshToonMaterial({
			color: brandGreen,
			emissive: brandGreen,
			emissiveIntensity: 0.25
		});
		const smallAtomMaterial = new THREE.MeshToonMaterial({
			color: brandTeal,
			emissive: brandTeal,
			emissiveIntensity: 0.3
		});
		const bondMaterial = new THREE.MeshToonMaterial({
			color: brandGreen,
			emissive: brandGreen,
			emissiveIntensity: 0.15
		});

		type MoleculeGroup = THREE.Group & {
			userData: {
				rotSpeed: number;
				drift: THREE.Vector3;
			};
		};

		const molecules: MoleculeGroup[] = [];

		function createMolecule() {
			const group = new THREE.Group() as MoleculeGroup;

			// Geometry shared across molecules
			const coreGeo = new THREE.SphereGeometry(0.55, 28, 28);
			const smallGeo = new THREE.SphereGeometry(0.35, 22, 22);
			const bondGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 12);

			// CO2-style layout: 1 larger core, 2 smaller ends (linear or bent variant)
			const core = new THREE.Mesh(coreGeo, coreMaterial);
			core.position.set(0, 0, 0);
			group.add(core);

			const atoms: THREE.Mesh[] = [];
			const variant = Math.random() > 0.5 ? 'linear' : 'bent';
			const offset = 1.1 + Math.random() * 0.4;
			const bend = THREE.MathUtils.degToRad(30 + Math.random() * 15);

			const left = new THREE.Mesh(smallGeo, smallAtomMaterial);
			const right = new THREE.Mesh(smallGeo, smallAtomMaterial);

			if (variant === 'linear') {
				left.position.set(-offset, 0, 0.1 * (Math.random() - 0.5));
				right.position.set(offset, 0, -0.1 * (Math.random() - 0.5));
			} else {
				const dist = 0.9 + Math.random() * 0.4;
				left.position.set(-Math.cos(bend) * dist, Math.sin(bend) * dist, 0.12);
				right.position.set(Math.cos(bend) * dist, Math.sin(bend) * dist, -0.12);
			}

			atoms.push(left, right);
			group.add(left);
			group.add(right);

			// Connect atoms with bonds
			function makeBond(a: THREE.Mesh, b: THREE.Mesh) {
				const bond = new THREE.Mesh(bondGeo, bondMaterial);
				group.add(bond);

				const mid = new THREE.Vector3().addVectors(a.position, b.position).multiplyScalar(0.5);
				bond.position.copy(mid);

				const dir = new THREE.Vector3().subVectors(b.position, a.position);
				const len = dir.length();
				const visualLen = Math.max(len - 0.6, 0.3);
				bond.scale.set(1, visualLen, 1);
				bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
			}

			makeBond(core, left);
			makeBond(core, right);

			group.position.set(
				(Math.random() - 0.5) * 25,
				(Math.random() - 0.5) * 15,
				(Math.random() - 0.5) * 10
			);

			// Make the whole molecule a bit smaller overall
			group.scale.setScalar(0.8 + Math.random() * 0.1);

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
