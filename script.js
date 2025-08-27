// Simple JavaScript for any interactive functionality
document.addEventListener('DOMContentLoaded', function() {
	// Add smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});

	// Bigger and happier smile effect when hovering over project nodes
	const projectNodes = document.querySelectorAll('.project-node');
	const brainMouth = document.querySelector('.brain-mouth');
	const eyesGroup = document.querySelector('.eyes-group');
	
	if (brainMouth && projectNodes.length > 0) {
		projectNodes.forEach((node) => {
			node.addEventListener('mouseenter', function() {
				// Check if this is the BRAINFARTS node
				if (node.textContent.trim() === 'BRAINFARTS') {
					// Smile for BRAINFARTS and emit fart clouds
					brainMouth.setAttribute('d', 'M38,58 Q50,75 62,58');
					brainMouth.style.transition = 'd 300ms ease';
					if (eyesGroup) {
						eyesGroup.classList.add('eyes-smile');
					}
					emitFartClouds();
				} else {
					// Normal smile animation for other nodes
					brainMouth.setAttribute('d', 'M38,58 Q50,75 62,58');
					brainMouth.style.transition = 'd 300ms ease';
					if (eyesGroup) {
						eyesGroup.classList.add('eyes-smile');
					}
				}
			});
			node.addEventListener('mouseleave', function() {
				// Return to neutral expression
				brainMouth.setAttribute('d', 'M38,58 Q50,61 62,58');
				brainMouth.style.transition = 'd 300ms ease';
				if (eyesGroup) {
					eyesGroup.classList.remove('eyes-smile');
				}
			});
		});
	}

	// Pupils follow cursor
	const brainSvg = document.querySelector('.brain svg');
	const leftPupil = document.querySelector('.brain svg .pupil.left');
	const rightPupil = document.querySelector('.brain svg .pupil.right');

	// Centers in SVG viewBox units (match initial cx/cy in HTML)
	const leftCenter = { x: 36, y: 44 };
	const rightCenter = { x: 66, y: 44 };
	const maxOffset = 2.5; // how far pupils can move from center

	let rafId = null;
	let targetMouse = null;

	function updatePupils(mouse) {
		if (!brainSvg || !leftPupil || !rightPupil || !mouse) return;

		const rect = brainSvg.getBoundingClientRect();
		// Convert mouse to SVG viewBox coordinates (0..100)
		const mouseX = ((mouse.clientX - rect.left) / rect.width) * 100;
		const mouseY = ((mouse.clientY - rect.top) / rect.height) * 100;

		function computeOffset(center) {
			const dx = mouseX - center.x;
			const dy = mouseY - center.y;
			const dist = Math.hypot(dx, dy) || 1;
			const scale = Math.min(maxOffset, dist) / dist;
			return { x: dx * scale, y: dy * scale };
		}

		const leftOffset = computeOffset(leftCenter);
		const rightOffset = computeOffset(rightCenter);

		leftPupil.setAttribute('cx', (leftCenter.x + leftOffset.x).toFixed(2));
		leftPupil.setAttribute('cy', (leftCenter.y + leftOffset.y).toFixed(2));
		rightPupil.setAttribute('cx', (rightCenter.x + rightOffset.x).toFixed(2));
		rightPupil.setAttribute('cy', (rightCenter.y + rightOffset.y).toFixed(2));
	}

	function onMouseMove(e) {
		targetMouse = e;
		if (rafId === null) {
			rafId = requestAnimationFrame(() => {
				updatePupils(targetMouse);
				rafId = null;
			});
		}
	}

	if (brainSvg && leftPupil && rightPupil) {
		window.addEventListener('mousemove', onMouseMove);
		// Return pupils to center when leaving the brain area
		brainSvg.addEventListener('mouseleave', () => {
			leftPupil.setAttribute('cx', leftCenter.x);
			leftPupil.setAttribute('cy', leftCenter.y);
			rightPupil.setAttribute('cx', rightCenter.x);
			rightPupil.setAttribute('cy', rightCenter.y);
		});
	}

	// Fallback subtle movement if SVG eyes (sclera) exist but not pupils
	const brainEyes = document.querySelectorAll('.brain svg circle[cx="35"], .brain svg circle[cx="65"]');
	const brain = document.querySelector('.brain');
	if (brainEyes.length > 0 && brain && !(leftPupil && rightPupil)) {
		let time = 0;
		function animateEyes() {
			time += 0.02;
			const moveX = Math.sin(time) * 0.5;
			const moveY = Math.cos(time * 0.7) * 0.3;
			const leftEye = document.querySelector('.brain svg circle[cx="35"]');
			if (leftEye) {
				leftEye.setAttribute('cx', 35 + moveX);
				leftEye.setAttribute('cy', 32 + moveY);
			}
			const rightEye = document.querySelector('.brain svg circle[cx="65"]');
			if (rightEye) {
				rightEye.setAttribute('cx', 65 + moveX);
				rightEye.setAttribute('cy', 32 + moveY);
			}
			requestAnimationFrame(animateEyes);
		}
		animateEyes();
	}

	// Emit fart clouds behind the brain when hovering BRAINFARTS
	function emitFartClouds() {
		const layer = document.querySelector('.fart-layer');
		if (!layer) return;
		for (let i = 0; i < 8; i++) {
			const cloud = document.createElement('div');
			cloud.className = 'fart-cloud ' + (i % 2 === 0 ? 'light' : 'dark') + (i % 3 === 0 ? ' v2' : i % 5 === 0 ? ' v3' : '');
			// Random starting position slightly to the left-back of brain center
			const startX = -40 - Math.random() * 30; // left
			const startY = 20 - Math.random() * 40;  // around middle
			cloud.style.left = `calc(50% + ${startX}px)`;
			cloud.style.top = `calc(50% + ${startY}px)`;
			cloud.style.animationDelay = `${Math.random() * 0.2}s`;
			cloud.style.transform = `translate(-50%, -50%)`;
			layer.appendChild(cloud);
			// Cleanup after animation
			setTimeout(() => {
				cloud.remove();
			}, 1600);
		}
	}

	// Arrange project nodes in an equal-spaced circle around the brain (projects page)
	const container = document.querySelector('.brainstorm-container');
	if (container && projectNodes.length > 0) {
		function layoutNodesInCircle() {
			const rect = container.getBoundingClientRect();
			const cx = rect.width / 2;
			const cy = rect.height / 2;
			// Radius based on container size, leaving room for the 200px brain and node size
			const radius = Math.max(180, Math.min(cx, cy) - 160);
			projectNodes.forEach((node, index) => {
				const angle = (index / projectNodes.length) * Math.PI * 2 - Math.PI / 2; // start at top
				const x = cx + radius * Math.cos(angle);
				const y = cy + radius * Math.sin(angle);
				node.style.position = 'absolute';
				node.style.left = `${x}px`;
				node.style.top = `${y}px`;
				node.style.transform = 'translate(-50%, -50%)';
			});
			// Recreate lines after positioning nodes
			if (typeof createConnectingLines === 'function') {
				createConnectingLines();
			}
		}
		layoutNodesInCircle();
		window.addEventListener('resize', layoutNodesInCircle);
	}

	// Create connecting lines for mindmap effect
	function createConnectingLines() {
		const connectingLines = document.querySelector('.connecting-lines');
		const brain = document.querySelector('.brain');
		const projectNodes = document.querySelectorAll('.project-node');
		
		if (!connectingLines || !brain || projectNodes.length === 0) return;
		
		// Clear existing lines
		connectingLines.innerHTML = '';
		
		// Get brain center and radius
		const brainRect = brain.getBoundingClientRect();
		const brainCenterX = brainRect.left + brainRect.width / 2;
		const brainCenterY = brainRect.top + brainRect.height / 2;
		const brainRadius = brainRect.width / 2; // Brain is 200px, so radius is 100px
		
		// Create line for each project node
		projectNodes.forEach((node, index) => {
			const nodeRect = node.getBoundingClientRect();
			const nodeCenterX = nodeRect.left + nodeRect.width / 2;
			const nodeCenterY = nodeRect.top + nodeRect.height / 2;
			
			// Calculate direction from brain to node
			const dx = nodeCenterX - brainCenterX;
			const dy = nodeCenterY - brainCenterY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			
			// Normalize direction
			const dirX = dx / distance;
			const dirY = dy / distance;
			
			// Calculate brain edge point (start of line)
			const brainEdgeX = brainCenterX + dirX * brainRadius;
			const brainEdgeY = brainCenterY + dirY * brainRadius;
			
			// Calculate node edge point (end of line) - connect to the actual node edge
			const nodeRadius = Math.max(nodeRect.width, nodeRect.height) / 2;
			const nodeEdgeX = nodeCenterX - dirX * nodeRadius;
			const nodeEdgeY = nodeCenterY - dirY * nodeRadius;
			
			// Calculate line coordinates relative to SVG
			const svgRect = connectingLines.getBoundingClientRect();
			const startX = brainEdgeX - svgRect.left;
			const startY = brainEdgeY - svgRect.top;
			const endX = nodeEdgeX - svgRect.left;
			const endY = nodeEdgeY - svgRect.top;
			
			// Create SVG line
			const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			line.setAttribute('x1', startX);
			line.setAttribute('y1', startY);
			line.setAttribute('x2', endX);
			line.setAttribute('y2', endY);
			line.setAttribute('stroke', '#667eea');
			line.setAttribute('stroke-width', '2');
			line.setAttribute('stroke-dasharray', '5,5');
			line.setAttribute('opacity', '0.6');
			line.classList.add('mindmap-line');
			
			connectingLines.appendChild(line);
		});
	}

	// Update connecting lines on window resize
	window.addEventListener('resize', createConnectingLines);

	// Create connecting lines when page loads
	setTimeout(createConnectingLines, 500); // Longer delay to ensure elements are positioned









	// Initialize lazy YouTube players
	(function initLazyVideos() {
		const lazyContainers = document.querySelectorAll('.video-lazy');
		lazyContainers.forEach((container) => {
			container.addEventListener('click', function () {
				const videoId = container.getAttribute('data-video-id');
				if (!videoId) return;
				const iframe = document.createElement('iframe');
				iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`);
				iframe.setAttribute('title', 'Twister Video');
				iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
				iframe.style.position = 'absolute';
				iframe.style.inset = '0';
				iframe.style.width = '100%';
				iframe.style.height = '100%';
				iframe.style.border = '0';
				container.innerHTML = '';
				container.appendChild(iframe);
			});
		});
	})();



	console.log('Portfolio website loaded successfully!');
});

// Ensure lazy video init runs after DOM is ready
window.addEventListener('load', function () {
	const lazyContainers = document.querySelectorAll('.video-lazy');
	lazyContainers.forEach((container) => {
		if (container.getAttribute('data-bound') === 'true') return;
		container.setAttribute('data-bound', 'true');
		container.addEventListener('click', function () {
			const videoId = container.getAttribute('data-video-id');
			if (!videoId) return;
			const iframe = document.createElement('iframe');
			iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
			iframe.title = 'Twister Video';
			iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
			iframe.allowFullscreen = true;
			iframe.referrerPolicy = 'strict-origin-when-cross-origin';
			iframe.style.position = 'absolute';
			iframe.style.inset = '0';
			iframe.style.width = '100%';
			iframe.style.height = '100%';
			iframe.style.border = '0';
			container.innerHTML = '';
			container.appendChild(iframe);
		});
	});
}); 