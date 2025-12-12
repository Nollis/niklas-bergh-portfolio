<script lang="ts">
	// Generate unique IDs for each instance
	const uniqueId = Math.random().toString(36).substring(2, 9);
</script>

<div class="circuit-container" aria-hidden="true">
	<svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" class="circuit-svg">
		<defs>
			<!-- Glow filter -->
			<filter id="glow-{uniqueId}" x="-50%" y="-50%" width="200%" height="200%">
				<feGaussianBlur stdDeviation="3" result="coloredBlur"/>
				<feMerge>
					<feMergeNode in="coloredBlur"/>
					<feMergeNode in="SourceGraphic"/>
				</feMerge>
			</filter>
		</defs>
		
		<!-- Sparse circuit traces - scattered here and there with more complexity -->
		<g class="circuit-traces" stroke="#25d0ab" stroke-width="2" fill="none" opacity="0.25">
			<!-- Top-left corner cluster - more complex -->
			<path d="M0,120 H180 L200,140 V220 L180,240 H100" />
			<path d="M80,0 V80 L100,100 H200 L220,120 V180" />
			<path d="M0,180 H60 L80,160 V100" />
			<path d="M150,140 V200 L170,220" />
			<path d="M200,180 H260" />
			<rect x="195" y="135" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="200" cy="140" r="4" fill="#25d0ab" />
			<circle cx="100" cy="100" r="3" fill="#25d0ab" />
			<circle cx="80" cy="160" r="3" fill="#25d0ab" />
			<circle cx="220" cy="120" r="3" fill="#25d0ab" />
			<circle cx="150" cy="200" r="2" fill="#25d0ab" />
			
			<!-- Top-right area - more complex -->
			<path d="M1600,80 H1750 L1770,100 V180 L1750,200 H1650" />
			<path d="M1700,0 V60 L1720,80 H1850 L1870,100 V150" />
			<path d="M1800,80 V140 L1820,160 H1920" />
			<path d="M1650,100 H1700" />
			<path d="M1770,140 H1830" />
			<rect x="1745" y="75" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="1750" cy="80" r="4" fill="#25d0ab" />
			<circle cx="1720" cy="80" r="3" fill="#25d0ab" />
			<circle cx="1800" cy="140" r="3" fill="#25d0ab" />
			<circle cx="1870" cy="100" r="3" fill="#25d0ab" />
			<circle cx="1650" cy="100" r="2" fill="#25d0ab" />
			
			<!-- Middle-left - more complex -->
			<path d="M0,480 H120 L140,500 H280 L300,480 H380" />
			<path d="M60,440 V480" />
			<path d="M140,500 V560 L160,580 H240" />
			<path d="M200,480 V520" />
			<path d="M280,500 V540" />
			<path d="M0,540 H80 L100,520 H140" />
			<rect x="135" y="495" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="140" cy="500" r="4" fill="#25d0ab" />
			<circle cx="280" cy="500" r="3" fill="#25d0ab" />
			<circle cx="60" cy="440" r="3" fill="#25d0ab" />
			<circle cx="200" cy="520" r="2" fill="#25d0ab" />
			<circle cx="160" cy="580" r="2" fill="#25d0ab" />
			
			<!-- Center-right cluster - more complex -->
			<path d="M1400,400 H1550 L1570,420 V520 L1550,540 H1400" />
			<path d="M1500,350 V400" />
			<path d="M1450,400 V460 L1470,480 H1550" />
			<path d="M1570,470 H1650 L1670,490 V550" />
			<path d="M1500,540 V600 L1520,620 H1600" />
			<path d="M1620,420 V380 L1640,360 H1700" />
			<rect x="1545" y="395" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<rect x="1545" y="535" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="1550" cy="400" r="4" fill="#25d0ab" />
			<circle cx="1550" cy="540" r="4" fill="#25d0ab" />
			<circle cx="1500" cy="350" r="3" fill="#25d0ab" />
			<circle cx="1470" cy="480" r="3" fill="#25d0ab" />
			<circle cx="1670" cy="490" r="3" fill="#25d0ab" />
			<circle cx="1520" cy="620" r="2" fill="#25d0ab" />
			
			<!-- Bottom-left corner - more complex -->
			<path d="M100,900 V980 L120,1000 H250 L270,1020 V1080" />
			<path d="M0,950 H80 L100,970" />
			<path d="M60,900 V940 L80,960" />
			<path d="M150,960 V1000" />
			<path d="M180,1000 V1040 L200,1060 H280" />
			<path d="M0,1020 H50 L70,1000 H120" />
			<rect x="95" y="965" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="100" cy="970" r="4" fill="#25d0ab" />
			<circle cx="120" cy="1000" r="3" fill="#25d0ab" />
			<circle cx="60" cy="940" r="3" fill="#25d0ab" />
			<circle cx="150" cy="960" r="2" fill="#25d0ab" />
			<circle cx="200" cy="1060" r="2" fill="#25d0ab" />
			
			<!-- Bottom-center - more complex -->
			<path d="M800,920 H950 L970,940 V1080" />
			<path d="M900,880 V920" />
			<path d="M850,920 V980 L870,1000 H940" />
			<path d="M970,1000 H1050 L1070,1020 V1080" />
			<path d="M1000,920 V960 L1020,980 H1080" />
			<path d="M920,960 H970" />
			<rect x="945" y="915" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="950" cy="920" r="4" fill="#25d0ab" />
			<circle cx="900" cy="880" r="3" fill="#25d0ab" />
			<circle cx="870" cy="1000" r="3" fill="#25d0ab" />
			<circle cx="1020" cy="980" r="3" fill="#25d0ab" />
			<circle cx="1070" cy="1020" r="2" fill="#25d0ab" />
			
			<!-- Bottom-right - more complex -->
			<path d="M1650,850 H1800 L1820,870 V950 L1800,970 H1700" />
			<path d="M1750,800 V850" />
			<path d="M1820,950 H1920" />
			<path d="M1700,850 V900 L1720,920 H1780" />
			<path d="M1850,870 H1920" />
			<path d="M1780,920 V980 L1800,1000 H1880" />
			<rect x="1795" y="845" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="1800" cy="850" r="4" fill="#25d0ab" />
			<circle cx="1750" cy="800" r="3" fill="#25d0ab" />
			<circle cx="1820" cy="870" r="3" fill="#25d0ab" />
			<circle cx="1720" cy="920" r="3" fill="#25d0ab" />
			<circle cx="1800" cy="1000" r="2" fill="#25d0ab" />
			
			<!-- Floating middle piece - more complex -->
			<path d="M600,600 H720 L740,620 H850 L870,640 V700" />
			<path d="M680,560 V600" />
			<path d="M740,620 V680 L760,700 H820" />
			<path d="M800,600 V640 L820,660" />
			<path d="M650,640 H700 L720,660 V700" />
			<rect x="735" y="615" width="10" height="10" fill="none" stroke="#25d0ab" stroke-width="1.5" />
			<circle cx="720" cy="600" r="4" fill="#25d0ab" />
			<circle cx="740" cy="620" r="4" fill="#25d0ab" />
			<circle cx="680" cy="560" r="3" fill="#25d0ab" />
			<circle cx="870" cy="640" r="3" fill="#25d0ab" />
			<circle cx="760" cy="700" r="2" fill="#25d0ab" />
			<circle cx="720" cy="660" r="2" fill="#25d0ab" />
		</g>
		
		<!-- Animated pulses - traveling along the more complex paths -->
		<g class="animated-pulses" filter="url(#glow-{uniqueId})">
			<!-- Pulse on top-left main -->
			<circle r="4" fill="#25d0ab">
				<animateMotion dur="5s" repeatCount="indefinite">
					<mpath href="#sparse-path-1-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-1-{uniqueId}" d="M0,120 H180 L200,140 V220 L180,240 H100" fill="none" stroke="none" />
			
			<!-- Pulse on top-left secondary -->
			<circle r="3" fill="#98e594">
				<animateMotion dur="4s" repeatCount="indefinite" begin="2s">
					<mpath href="#sparse-path-1b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-1b-{uniqueId}" d="M80,0 V80 L100,100 H200 L220,120 V180" fill="none" stroke="none" />
			
			<!-- Pulse on top-right main -->
			<circle r="4" fill="#98e594">
				<animateMotion dur="6s" repeatCount="indefinite" begin="1s">
					<mpath href="#sparse-path-2-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-2-{uniqueId}" d="M1600,80 H1750 L1770,100 V180 L1750,200 H1650" fill="none" stroke="none" />
			
			<!-- Pulse on top-right secondary -->
			<circle r="3" fill="#4db0a2">
				<animateMotion dur="5s" repeatCount="indefinite" begin="3s">
					<mpath href="#sparse-path-2b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-2b-{uniqueId}" d="M1700,0 V60 L1720,80 H1850 L1870,100 V150" fill="none" stroke="none" />
			
			<!-- Pulse on middle-left main -->
			<circle r="4" fill="#4db0a2">
				<animateMotion dur="5s" repeatCount="indefinite" begin="0.5s">
					<mpath href="#sparse-path-3-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-3-{uniqueId}" d="M0,480 H120 L140,500 H280 L300,480 H380" fill="none" stroke="none" />
			
			<!-- Pulse on middle-left secondary -->
			<circle r="3" fill="#a6c8b5">
				<animateMotion dur="4s" repeatCount="indefinite" begin="2.5s">
					<mpath href="#sparse-path-3b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-3b-{uniqueId}" d="M140,500 V560 L160,580 H240" fill="none" stroke="none" />
			
			<!-- Pulse on center-right cluster main -->
			<circle r="4" fill="#25d0ab">
				<animateMotion dur="7s" repeatCount="indefinite" begin="2s">
					<mpath href="#sparse-path-4-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-4-{uniqueId}" d="M1400,400 H1550 L1570,420 V520 L1550,540 H1400" fill="none" stroke="none" />
			
			<!-- Pulse on center-right secondary -->
			<circle r="3" fill="#98e594">
				<animateMotion dur="5s" repeatCount="indefinite" begin="4s">
					<mpath href="#sparse-path-4b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-4b-{uniqueId}" d="M1570,470 H1650 L1670,490 V550" fill="none" stroke="none" />
			
			<!-- Pulse on center-right tertiary -->
			<circle r="3" fill="#4db0a2">
				<animateMotion dur="4s" repeatCount="indefinite" begin="1s">
					<mpath href="#sparse-path-4c-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-4c-{uniqueId}" d="M1500,540 V600 L1520,620 H1600" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-left main -->
			<circle r="4" fill="#a6c8b5">
				<animateMotion dur="5s" repeatCount="indefinite" begin="1.5s">
					<mpath href="#sparse-path-5-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-5-{uniqueId}" d="M0,950 H80 L100,970 V980 L120,1000 H250 L270,1020 V1080" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-left secondary -->
			<circle r="3" fill="#25d0ab">
				<animateMotion dur="4s" repeatCount="indefinite" begin="3.5s">
					<mpath href="#sparse-path-5b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-5b-{uniqueId}" d="M180,1000 V1040 L200,1060 H280" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-center main -->
			<circle r="4" fill="#98e594">
				<animateMotion dur="5s" repeatCount="indefinite" begin="3s">
					<mpath href="#sparse-path-6-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-6-{uniqueId}" d="M800,920 H950 L970,940 V1080" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-center secondary -->
			<circle r="3" fill="#4db0a2">
				<animateMotion dur="4s" repeatCount="indefinite" begin="0s">
					<mpath href="#sparse-path-6b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-6b-{uniqueId}" d="M970,1000 H1050 L1070,1020 V1080" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-right main -->
			<circle r="4" fill="#4db0a2">
				<animateMotion dur="6s" repeatCount="indefinite" begin="2.5s">
					<mpath href="#sparse-path-7-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-7-{uniqueId}" d="M1650,850 H1800 L1820,870 V950 L1800,970 H1700" fill="none" stroke="none" />
			
			<!-- Pulse on bottom-right secondary -->
			<circle r="3" fill="#a6c8b5">
				<animateMotion dur="4s" repeatCount="indefinite" begin="0.5s">
					<mpath href="#sparse-path-7b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-7b-{uniqueId}" d="M1780,920 V980 L1800,1000 H1880" fill="none" stroke="none" />
			
			<!-- Pulse on floating middle main -->
			<circle r="4" fill="#25d0ab">
				<animateMotion dur="5s" repeatCount="indefinite" begin="0s">
					<mpath href="#sparse-path-8-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-8-{uniqueId}" d="M600,600 H720 L740,620 H850 L870,640 V700" fill="none" stroke="none" />
			
			<!-- Pulse on floating middle secondary -->
			<circle r="3" fill="#98e594">
				<animateMotion dur="4s" repeatCount="indefinite" begin="2s">
					<mpath href="#sparse-path-8b-{uniqueId}" />
				</animateMotion>
			</circle>
			<path id="sparse-path-8b-{uniqueId}" d="M740,620 V680 L760,700 H820" fill="none" stroke="none" />
		</g>
	</svg>
</div>

<style>
	.circuit-container {
		position: fixed;
		inset: 0;
		z-index: -4;
		pointer-events: none;
		overflow: hidden;
	}
	
	.circuit-svg {
		width: 100%;
		height: 100%;
	}
	
	.animated-pulses circle {
		filter: drop-shadow(0 0 6px currentColor);
	}
</style>

