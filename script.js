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

	// Brain animations and connecting lines
	function initBrainAnimations() {
		const brain = document.querySelector('.brain');
		const nodes = document.querySelectorAll('.project-node');
		const pupils = document.querySelectorAll('.pupil');
		const mouth = document.querySelector('.brain-mouth');
		const svg = document.querySelector('.connecting-lines');
		const fartLayer = document.querySelector('.fart-layer');
		
		if (!brain || !nodes.length) return;

		// Create fart clouds
		function createFartClouds() {
			if (!fartLayer) return;
			
			for (let i = 0; i < 3; i++) {
				const cloud = document.createElement('div');
				cloud.className = 'fart-cloud';
				cloud.style.cssText = `
					position: absolute;
					width: 20px;
					height: 20px;
					background: radial-gradient(circle, rgba(139, 69, 19, 0.6) 0%, rgba(139, 69, 19, 0.3) 50%, transparent 100%);
					border-radius: 50%;
					animation: fartFloat ${3 + Math.random() * 2}s ease-in-out infinite;
					animation-delay: ${Math.random() * 2}s;
					left: ${50 + Math.random() * 20}%;
					top: ${60 + Math.random() * 20}%;
				`;
				fartLayer.appendChild(cloud);
			}
		}

		// Create asset elements
		function createAssets() {
			console.log('Creating assets...');
			
			// Condom asset for Durex
			const condomAsset = document.createElement('img');
			condomAsset.src = 'assets/kondom asset.webp';
			condomAsset.className = 'condom-asset';
			condomAsset.style.cssText = `
				position: absolute;
				width: 60px;
				height: auto;
				top: 40%;
				left: 60%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(condomAsset);
			console.log('Condom asset created');

			// Korn asset for Byens Landhandel
			const kornAsset = document.createElement('img');
			kornAsset.src = 'assets/korn asset.webp';
			kornAsset.className = 'korn-asset';
			kornAsset.style.cssText = `
				position: absolute;
				width: 80px;
				height: auto;
				top: 20%;
				left: 50%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(kornAsset);

			// Kasket asset for Repop
			const kasketAsset = document.createElement('img');
			kasketAsset.src = 'assets/Kasket asset.webp';
			kasketAsset.className = 'kasket-asset';
			kasketAsset.style.cssText = `
				position: absolute;
				width: 70px;
				height: auto;
				top: 10%;
				left: 50%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(kasketAsset);

			// Øldåse asset for Købajer
			const oldaseAsset = document.createElement('img');
			oldaseAsset.src = 'assets/øldåse asset.webp';
			oldaseAsset.className = 'oldase-asset';
			oldaseAsset.style.cssText = `
				position: absolute;
				width: 50px;
				height: auto;
				top: 50%;
				left: 20%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(oldaseAsset);

			// Naturli' asset
			const naturliAsset = document.createElement('img');
			naturliAsset.src = 'assets/Naturli\' asset.webp';
			naturliAsset.className = 'naturli-asset';
			naturliAsset.style.cssText = `
				position: absolute;
				width: 60px;
				height: auto;
				top: 30%;
				right: 20%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(naturliAsset);

			// Naturli' drops asset
			const dropsAsset = document.createElement('img');
			dropsAsset.src = 'asset drops naturlig.png';
			dropsAsset.className = 'naturli-drops-asset';
			dropsAsset.style.cssText = `
				position: absolute;
				width: 40px;
				height: auto;
				top: 15%;
				right: 25%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(dropsAsset);

			// Twister asset
			const twisterAsset = document.createElement('img');
			twisterAsset.src = 'assets/Twister asset.webp';
			twisterAsset.className = 'twister-asset';
			twisterAsset.style.cssText = `
				position: absolute;
				width: 70px;
				height: auto;
				top: 60%;
				right: 30%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(twisterAsset);

			// Unge mod UV asset
			const ungeModUvAsset = document.createElement('img');
			ungeModUvAsset.src = 'assets/Unge mod UV asset.webp';
			ungeModUvAsset.className = 'unge-mod-uv-asset';
			ungeModUvAsset.style.cssText = `
				position: absolute;
				width: 80px;
				height: auto;
				top: 25%;
				left: 30%;
				opacity: 0;
				display: none;
				z-index: 10;
			`;
			brain.appendChild(ungeModUvAsset);
		}

		// Create connecting lines from brain to nodes
		function createConnectingLines() {
			if (!svg) return;
			
			// Clear existing lines
			svg.innerHTML = '';
			
			const container = document.querySelector('.brainstorm-container');
			const brainRect = brain.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();
			
			// Calculate center of brain relative to container
			const centerX = brainRect.left - containerRect.left + brainRect.width / 2;
			const centerY = brainRect.top - containerRect.top + brainRect.height / 2;
			
			nodes.forEach(node => {
				const nodeRect = node.getBoundingClientRect();
				const nodeX = nodeRect.left - containerRect.left + nodeRect.width / 2;
				const nodeY = nodeRect.top - containerRect.top + nodeRect.height / 2;
				
				// Create line element
				const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				line.setAttribute('x1', centerX);
				line.setAttribute('y1', centerY);
				line.setAttribute('x2', nodeX);
				line.setAttribute('y2', nodeY);
				line.setAttribute('stroke', '#333');
				line.setAttribute('stroke-width', '2');
				line.setAttribute('opacity', '0.6');
				
				svg.appendChild(line);
			});
		}

		// Mouse follow for pupils - ULTRA CONSERVATIVE fixed range
		function updatePupilPosition(e) {
			pupils.forEach(pupil => {
				const eye = pupil.parentElement;
				const eyeRect = eye.getBoundingClientRect();
				const eyeCenterX = eyeRect.left + eyeRect.width / 2;
				const eyeCenterY = eyeRect.top + eyeRect.height / 2;
				
				// FIXED small movement range - only 3 pixels maximum
				const maxMoveDistance = 3; // Fixed 3 pixel limit
				
				const deltaX = e.clientX - eyeCenterX;
				const deltaY = e.clientY - eyeCenterY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				
				// ULTRA CONSERVATIVE - pupils can only move 3 pixels maximum
				let moveX, moveY;
				if (distance <= maxMoveDistance) {
					// Mouse is within tiny safe zone
					moveX = deltaX;
					moveY = deltaY;
				} else {
					// Mouse is outside tiny safe zone - constrain to 3 pixel edge
					const angle = Math.atan2(deltaY, deltaX);
					moveX = Math.cos(angle) * maxMoveDistance;
					moveY = Math.sin(angle) * maxMoveDistance;
				}
				
				// Apply movement with ULTRA CONSERVATIVE bounds
				pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
			});
		}

		// Node hover effects
		nodes.forEach(node => {
			node.addEventListener('mouseenter', function() {
				const href = this.getAttribute('href');
				console.log('Hovering over:', href);
				const condomAsset = document.querySelector('.condom-asset');
				const kornAsset = document.querySelector('.korn-asset');
				const kasketAsset = document.querySelector('.kasket-asset');
				const oldaseAsset = document.querySelector('.oldase-asset');
				const naturliAsset = document.querySelector('.naturli-asset');
				const dropsAsset = document.querySelector('.naturli-drops-asset');
				const twisterAsset = document.querySelector('.twister-asset');
				const ungeModUvAsset = document.querySelector('.unge-mod-uv-asset');
				
				// Different expressions and assets for different projects
				if (href.includes('durex')) {
					// Durex - show condom asset
					console.log('Durex hover detected, showing condom asset');
					if (condomAsset) {
						condomAsset.style.display = 'block';
						condomAsset.style.animation = 'condomAppear 0.5s ease-in-out forwards';
						console.log('Condom asset should be visible now');
					} else {
						console.log('Condom asset not found');
					}
				} else if (href.includes('byens-landhandel')) {
					// Byens Landhandel - show korn asset
					if (kornAsset) {
						kornAsset.style.display = 'block';
						kornAsset.style.animation = 'kornCircle 2s ease-in-out infinite';
					}
				} else if (href.includes('repop')) {
					// Repop - show kasket asset
					if (kasketAsset) {
						kasketAsset.style.display = 'block';
						kasketAsset.style.animation = 'kasketFall 0.8s ease-in-out forwards';
					}
				} else if (href.includes('kobajer')) {
					// Købajer - show øldåse asset
					if (oldaseAsset) {
						oldaseAsset.style.display = 'block';
						oldaseAsset.style.animation = 'oldaseAppear 0.5s ease-in-out forwards';
					}
				} else if (href.includes('Naturli')) {
					// Naturli' - show bottle and drops
					if (naturliAsset) {
						naturliAsset.style.display = 'block';
						naturliAsset.style.animation = 'naturliAppear 0.5s ease-in-out forwards';
					}
					if (dropsAsset) {
						dropsAsset.style.display = 'block';
						dropsAsset.style.animation = 'dropsAppear 0.5s ease-in-out forwards';
					}
				} else if (href.includes('twister')) {
					// Twister - show twister asset
					if (twisterAsset) {
						twisterAsset.style.display = 'block';
						twisterAsset.style.animation = 'twisterAppear 0.5s ease-in-out forwards';
					}
					// Playful expression
					if (mouth) {
						mouth.setAttribute('d', 'M35,58 Q50,63 65,58');
					}
				} else if (href.includes('unge-mod-uv')) {
					// Unge mod UV - show asset
					if (ungeModUvAsset) {
						ungeModUvAsset.style.display = 'block';
						ungeModUvAsset.style.animation = 'ungeModUvAppear 0.5s ease-in-out forwards';
					}
					// Happy expression
					if (mouth) {
						mouth.setAttribute('d', 'M35,58 Q50,65 65,58');
					}
				} else if (href.includes('brainfarts') || href.includes('project1')) {
					// BRAINFARTS - embarrassed expression
					if (mouth) {
						mouth.setAttribute('d', 'M35,58 Q50,55 65,58');
					}
				}
			});

			node.addEventListener('mouseleave', function() {
				const href = this.getAttribute('href');
				const condomAsset = document.querySelector('.condom-asset');
				const kornAsset = document.querySelector('.korn-asset');
				const kasketAsset = document.querySelector('.kasket-asset');
				const oldaseAsset = document.querySelector('.oldase-asset');
				const naturliAsset = document.querySelector('.naturli-asset');
				const dropsAsset = document.querySelector('.naturli-drops-asset');
				const twisterAsset = document.querySelector('.twister-asset');
				const ungeModUvAsset = document.querySelector('.unge-mod-uv-asset');
				
				// Hide all assets
				[condomAsset, kornAsset, kasketAsset, oldaseAsset, naturliAsset, dropsAsset, twisterAsset, ungeModUvAsset].forEach(asset => {
					if (asset) {
						asset.style.display = 'none';
						asset.style.animation = 'none';
					}
				});
				
				// Reset to normal expression
				if (mouth) {
					mouth.setAttribute('d', 'M38,58 Q50,61 62,58');
				}
			});
		});

		// Initialize
		createFartClouds();
		createAssets();
		createConnectingLines();
		document.addEventListener('mousemove', updatePupilPosition);
		
		// Recalculate on window resize
		window.addEventListener('resize', () => {
			setTimeout(createConnectingLines, 100);
		});
	}

	// Initialize brain animations
	initBrainAnimations();
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