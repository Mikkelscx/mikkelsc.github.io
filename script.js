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
		
		console.log('Initializing brain animations...');
		console.log('Found nodes:', nodes.length);
		console.log('Node elements:', nodes);
		
		if (!brain || !nodes.length) {
			console.log('Missing brain or nodes. Brain:', brain, 'Nodes count:', nodes.length);
			return;
		}

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
		console.log('Creating connecting lines...');
		
		// Get fresh references to elements
		const currentSvg = document.querySelector('.connecting-lines');
		const currentBrain = document.querySelector('.brain');
		const currentNodes = document.querySelectorAll('.project-node');
		
		console.log('SVG element:', currentSvg);
		console.log('Brain element:', currentBrain);
		console.log('Nodes found:', currentNodes.length);
		
		if (!currentSvg || !currentBrain || !currentNodes.length) {
			console.log('Missing elements for line creation');
			return;
		}
		
		// Clear existing lines (keep the defs and static line images, but NOT circles - they will be recreated by createHandDrawnFrames)
		const defs = currentSvg.querySelector('defs');
		const linje1Images = currentSvg.querySelectorAll('image[href*="linje 1"], image[xlink\\:href*="linje 1"], image[href*="Linje 1"], image[xlink\\:href*="Linje 1"]');
		const linje2Image = currentSvg.querySelector('image[href*="linje 2"], image[xlink\\:href*="linje 2"], image[href*="Linje 2"], image[xlink\\:href*="Linje 2"]');
		const linje3Image = currentSvg.querySelector('image[href*="linje 3"], image[xlink\\:href*="linje 3"]');
		const linje4Images = currentSvg.querySelectorAll('image[href*="linje 4"], image[xlink\\:href*="linje 4"], image[href*="Linje 4"], image[xlink\\:href*="Linje 4"]');
		const linje8Images = currentSvg.querySelectorAll('image[href*="linje 8"], image[xlink\\:href*="linje 8"], image[href*="Linje 8"], image[xlink\\:href*="Linje 8"]');
		
		// Clone nodes before clearing to preserve them (only lines, not circles - circles will be recreated fresh)
		const defsClone = defs ? defs.cloneNode(true) : null;
		const linje1Clones = Array.from(linje1Images).map(img => img.cloneNode(true));
		const linje2Clone = linje2Image ? linje2Image.cloneNode(true) : null;
		const linje3Clone = linje3Image ? linje3Image.cloneNode(true) : null;
		const linje4Clones = Array.from(linje4Images).map(img => img.cloneNode(true));
		const linje8Clones = Array.from(linje8Images).map(img => img.cloneNode(true));
		
		currentSvg.innerHTML = '';
		if (defsClone) {
			currentSvg.appendChild(defsClone);
		}
		// Preserve all linje 1 images (multiple instances) - static HTML lines
		linje1Clones.forEach(img => {
			currentSvg.appendChild(img);
		});
		if (linje2Clone) {
			currentSvg.appendChild(linje2Clone);
		}
		if (linje3Clone) {
			currentSvg.appendChild(linje3Clone);
		}
		// Preserve all linje 4 images (multiple instances) - this includes KØ-BAJER line
		linje4Clones.forEach(img => {
			currentSvg.appendChild(img);
		});
		// Preserve all linje 8 images (TWISTER) - static HTML lines
		linje8Clones.forEach(img => {
			currentSvg.appendChild(img);
		});
		// Note: Circles are NOT preserved here - they will be recreated fresh by createHandDrawnFrames() with correct positions
		
		// Note: All existing lines are cleared above, so we start with a clean slate
		
		const container = document.querySelector('.brainstorm-container');
		const brainRect = currentBrain.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();
		
		// Calculate center of brain relative to container
		const centerX = brainRect.left - containerRect.left + brainRect.width / 2;
		const centerY = brainRect.top - containerRect.top + brainRect.height / 2;
		
		// Calculate brain radius to create gap
		const brainRadius = Math.min(brainRect.width, brainRect.height) / 2;
		const gapDistance = brainRadius * 1.0; // 100% of brain radius as gap - balanced gap
		
		console.log('Brain center:', centerX, centerY);
		console.log('Container dimensions:', containerRect.width, containerRect.height);
		
		// Create hand-drawn lines to each project node
		currentNodes.forEach((node, index) => {
			const nodeRect = node.getBoundingClientRect();
			const nodeX = nodeRect.left - containerRect.left + nodeRect.width / 2;
			const nodeY = nodeRect.top - containerRect.top + nodeRect.height / 2;
			
			console.log(`Node ${index} (${node.textContent.trim()}):`, nodeX, nodeY);
			
			// Check if node has valid dimensions
			if (nodeRect.width === 0 || nodeRect.height === 0) {
				console.log(`Node ${index} has zero dimensions! Skipping line creation.`);
				return;
			}
			
			// Skip BRAINFARTS - no line to brain
			const nodeText = node.textContent.trim();
			const nodeHref = node.getAttribute('href') || '';
			if (nodeText === 'BRAINFARTS' || index === 4 || nodeHref.includes('brainfarts') || nodeHref.includes('project1')) {
				console.log(`BRAINFARTS detected - skipping line creation`);
				return; // Skip line creation for BRAINFARTS
			}
			
			// Special case: KØ-BAJER - render linje 4.webp asset line from brain center to node
			const nodeTextKobajer = node.textContent.trim();
			const nodeHrefKobajer = node.getAttribute('href') || '';
			if (nodeTextKobajer === 'KØ-BAJER' || nodeHrefKobajer.includes('kobajer')) {
				console.log(`✓ KØ-BAJER detected at index ${index} - creating Linje 4.webp asset line`);
				
				// Start from the center of the brain
				const brainStartX = centerX;
				const brainStartY = centerY;
				
				// Calculate end point - extend closer to/past the KØ-BAJER node
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const deltaX = nodeX - brainStartX;
				const deltaY = nodeY - brainStartY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
				// Extend past the node center for a longer line (negative gap means extend beyond)
				const extensionAmount = nodeRadius * 0.6; // Extend 60% of node radius past the center
				const lineEndX = nodeX + (deltaX / distance) * extensionAmount;
				const lineEndY = nodeY + (deltaY / distance) * extensionAmount;
				
				// Calculate rotation and length for the image asset
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				console.log('KØ-BAJER Linje 4 details (from center):', { brainStartX, brainStartY, lineEndX, lineEndY, angle, lineLength });
				
				// Create image element for the line - use same pattern as BRAINFARTS
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/Linje 4.webp');
				lineImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/Linje 4.webp'); // xlink:href for compatibility
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 200); // Offset by half height (400/2 = 200) to center on rotation point
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '400');
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none');
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				lineImage.style.pointerEvents = 'auto';
				lineImage.style.display = 'block';
				lineImage.style.visibility = 'visible';
				lineImage.style.imageRendering = 'crisp-edges';
				lineImage.style.filter = 'none';
				
				currentSvg.appendChild(lineImage);
				console.log('✓ KØ-BAJER Linje 4.webp asset line created and added to SVG');
				
				return; // Skip further hand-drawn processing for KØ-BAJER
			}
			
			// Special case: DUREX X GUESS WHO - render linje 6.webp asset line from brain center to node
			const nodeTextDurex = node.textContent.trim();
			const nodeHrefDurex = node.getAttribute('href') || '';
			if (nodeTextDurex === 'DUREX X GUESS WHO' || nodeHrefDurex.includes('durex')) {
				console.log(`✓ DUREX X GUESS WHO detected at index ${index} - creating linje 6.webp asset line`);
				
				// Start from the center of the brain
				const brainCenterX = centerX;
				const brainCenterY = centerY;
				
				// Calculate end point - extend closer to/past the DUREX node
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const deltaX = nodeX - brainCenterX;
				const deltaY = nodeY - brainCenterY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
				// Extend past the node center for a longer line
				const extensionAmount = nodeRadius * 0.1; // Extend 10% of node radius past the center
				const lineEndX = nodeX + (deltaX / distance) * extensionAmount;
				const lineEndY = nodeY + (deltaY / distance) * extensionAmount;
				
				// Add gap from brain center to make line shorter toward brain
				const brainGapDistance = nodeRadius * 0.4; // Gap from brain center
				const brainStartX = brainCenterX + (deltaX / distance) * brainGapDistance;
				const brainStartY = brainCenterY + (deltaY / distance) * brainGapDistance;
				
				// Calculate rotation and length for the image asset
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				console.log('DUREX linje 6 details (from center):', { brainStartX, brainStartY, lineEndX, lineEndY, angle, lineLength });
				
				// Create image element for the line
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/linje 6.webp');
				lineImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/linje 6.webp'); // xlink:href for compatibility
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 150); // Offset by half height (300/2 = 150) to center on rotation point
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '300'); // Reduced height to make line thinner
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none');
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				lineImage.style.pointerEvents = 'auto';
				lineImage.style.display = 'block';
				lineImage.style.visibility = 'visible';
				lineImage.style.imageRendering = 'crisp-edges';
				lineImage.style.filter = 'none';
				
				currentSvg.appendChild(lineImage);
				console.log('✓ DUREX linje 6.webp asset line created and added to SVG');
				
				return; // Skip further hand-drawn processing for DUREX
			}
			
			// Special case: UNGE MOD UV - render linje 5.webp asset line from brain center to node (down to the right)
			const nodeTextUngeModUv = node.textContent.trim();
			const nodeHrefUngeModUv = node.getAttribute('href') || '';
			if (nodeTextUngeModUv === 'UNGE MOD UV' || nodeHrefUngeModUv.includes('unge-mod-uv')) {
				console.log(`✓ UNGE MOD UV detected at index ${index} - creating linje 5.webp asset line (down to the right)`);
				
				// Start from the center of the brain
				const brainCenterX = centerX;
				const brainCenterY = centerY;
				
				// Calculate end point - extend closer to/past the UNGE MOD UV node
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const deltaX = nodeX - brainCenterX;
				const deltaY = nodeY - brainCenterY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
				// Extend past the node center for a longer line (same as KØ-BAJER)
				const extensionAmount = nodeRadius * 0.6; // Extend 60% of node radius past the center
				const lineEndX = nodeX + (deltaX / distance) * extensionAmount;
				const lineEndY = nodeY + (deltaY / distance) * extensionAmount;
				
				// Add gap from brain center to make line shorter toward brain
				const brainGapDistance = nodeRadius * 0.4; // Gap from brain center
				const brainStartX = brainCenterX + (deltaX / distance) * brainGapDistance;
				const brainStartY = brainCenterY + (deltaY / distance) * brainGapDistance;
				
				// Calculate rotation and length for the image asset
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				console.log('UNGE MOD UV linje 5 details (from center, down to the right):', { brainStartX, brainStartY, lineEndX, lineEndY, angle, lineLength });
				
				// Create image element for the line - use same pattern as KØ-BAJER
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/linje 5.webp');
				lineImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/linje 5.webp'); // xlink:href for compatibility
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 150); // Offset by half height (300/2 = 150) to center on rotation point
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '300'); // Reduced height to make line thinner
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none');
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				lineImage.style.pointerEvents = 'auto';
				lineImage.style.display = 'block';
				lineImage.style.visibility = 'visible';
				lineImage.style.imageRendering = 'crisp-edges';
				lineImage.style.filter = 'none';
				
				currentSvg.appendChild(lineImage);
				console.log('✓ UNGE MOD UV linje 5.webp asset line created and added to SVG (down to the right)');
				
				return; // Skip further hand-drawn processing for UNGE MOD UV
			}
			
			// Special case: Use image for BYENS LANDHANDEL (check by text/href)
			const nodeTextByens = node.textContent.trim();
			const nodeHrefByens = node.getAttribute('href') || '';
			if (nodeTextByens === 'Byens Landhandel' || nodeHrefByens.includes('byens-landhandel')) {
				console.log('Creating line for BYENS LANDHANDEL', {nodeX, nodeY, centerX, centerY});
				
				// Start from below the top of the brain
				const brainStartX = centerX;
				const brainStartY = brainRect.top - containerRect.top + 50; // Below top of brain
				
				// End closer to the tab (smaller gap)
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const tabGapDistance = nodeRadius * 0.1;
				const deltaX = nodeX - brainStartX;
				const deltaY = nodeY - brainStartY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const lineEndX = nodeX - (deltaX / distance) * tabGapDistance;
				const lineEndY = nodeY - (deltaY / distance) * tabGapDistance;
				
				// Calculate angle for rotation
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				console.log('Line details:', {brainStartX, brainStartY, lineEndX, lineEndY, angle, lineLength});
				
				// Create image element for the line
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/linje 1.webp');
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 200); // Center vertically
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '400');
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none'); // Force stretching
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				
				currentSvg.appendChild(lineImage);
				console.log(`Line image created for BYENS LANDHANDEL`);
				return; // Skip the hand-drawn line creation for BYENS LANDHANDEL
			}
			
			// Special case: Use image for REPOP BY DEPOP (check by text/href)
			const nodeTextRepop = node.textContent.trim();
			const nodeHrefRepop = node.getAttribute('href') || '';
			if (nodeTextRepop === 'REPOP BY DEPOP' || nodeHrefRepop.includes('repop')) {
				// Start from below the top of the brain
				const brainStartX = centerX;
				const brainStartY = brainRect.top - containerRect.top + 50; // Below top of brain
				
				// End closer to the tab (smaller gap)
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const tabGapDistance = nodeRadius * 0.1;
				const deltaX = nodeX - brainStartX;
				const deltaY = nodeY - brainStartY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const lineEndX = nodeX - (deltaX / distance) * tabGapDistance;
				const lineEndY = nodeY - (deltaY / distance) * tabGapDistance;
				
				// Calculate angle for rotation
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				// Create image element for the line
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/Linje 2.webp');
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 200); // Center vertically
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '400');
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none'); // Force stretching
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				
				currentSvg.appendChild(lineImage);
				console.log(`Line image created for REPOP BY DEPOP`);
				return; // Skip the hand-drawn line creation for REPOP BY DEPOP
			}
			
			// Special case: NATURLI' - render linje 7.webp asset line from brain center to node
			const nodeTextNaturli = node.textContent.trim();
			const nodeHrefNaturli = node.getAttribute('href') || '';
			if (nodeTextNaturli === 'NATURLI\'' || nodeHrefNaturli.includes('Naturli') || index === 2) {
				console.log(`✓ NATURLI' detected at index ${index} - creating linje 7.webp asset line`);
				
				// Start from the center of the brain
				const brainCenterX = centerX;
				const brainCenterY = centerY;
				
				// Calculate end point - extend closer to/past the NATURLI' node
				const nodeRadius = Math.min(nodeRect.width, nodeRect.height) / 2;
				const deltaX = nodeX - brainCenterX;
				const deltaY = nodeY - brainCenterY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
				// Small gap from node
				const tabGapDistance = nodeRadius * 0.1;
				const lineEndX = nodeX - (deltaX / distance) * tabGapDistance;
				const lineEndY = nodeY - (deltaY / distance) * tabGapDistance;
				
				// Add gap from brain center to make line shorter toward brain
				const brainGapDistance = nodeRadius * 0.4; // Gap from brain center
				const brainStartX = brainCenterX + (deltaX / distance) * brainGapDistance;
				const brainStartY = brainCenterY + (deltaY / distance) * brainGapDistance;
				
				// Calculate rotation and length for the image asset
				const angle = Math.atan2(lineEndY - brainStartY, lineEndX - brainStartX) * 180 / Math.PI;
				const lineLength = Math.sqrt((lineEndX - brainStartX) ** 2 + (lineEndY - brainStartY) ** 2);
				
				console.log('NATURLI\' linje 7 details (from center):', { brainStartX, brainStartY, lineEndX, lineEndY, angle, lineLength });
				
				// Create image element for the line
				const lineImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				lineImage.setAttribute('href', 'assets/linje 7.webp');
				lineImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/linje 7.webp'); // xlink:href for compatibility
				lineImage.setAttribute('x', brainStartX);
				lineImage.setAttribute('y', brainStartY - 100); // Offset by half height (200/2 = 100) to center on rotation point
				lineImage.setAttribute('width', lineLength);
				lineImage.setAttribute('height', '200'); // Further reduced height to make line thinner
				lineImage.setAttribute('opacity', '1');
				lineImage.setAttribute('preserveAspectRatio', 'none');
				lineImage.setAttribute('transform', `rotate(${angle} ${brainStartX} ${brainStartY})`);
				lineImage.classList.add('mindmap-line');
				lineImage.style.pointerEvents = 'auto';
				lineImage.style.display = 'block';
				lineImage.style.visibility = 'visible';
				lineImage.style.imageRendering = 'crisp-edges';
				lineImage.style.filter = 'none';
				
				currentSvg.appendChild(lineImage);
				console.log(`✓ NATURLI' linje 7.webp asset line created and added to SVG`);
				return; // Skip the hand-drawn line creation for NATURLI'
			}
			
			// Special case: TWISTER - render linje 8.webp asset line from brain center to node
			// NOTE: TWISTER line is now created statically in HTML, so skipping JavaScript creation
			const nodeTextTwister = node.textContent.trim();
			const nodeHrefTwister = node.getAttribute('href') || '';
			if (nodeTextTwister === 'TWISTER' || nodeHrefTwister.includes('twister')) {
				console.log(`✓ TWISTER detected at index ${index} - skipping (using static HTML line)`);
				return; // Skip further processing for TWISTER - using static HTML line instead
			}
			
			// Skip hand-drawn lines for BRAINFARTS (should have been caught earlier, but double-check)
			const nodeTextCheck = node.textContent.trim();
			const nodeHrefCheck = node.getAttribute('href') || '';
			if (nodeTextCheck === 'BRAINFARTS' || nodeHrefCheck.includes('brainfarts') || nodeHrefCheck.includes('project1')) {
				console.log(`Skipping additional hand-drawn line for BRAINFARTS (no line created)`);
				return;
			}
			
			// DISABLED: Only use asset images, no hand-drawn paths - but asset images are created above
			return;
			
			// Create curved path with gaps at both ends
			const pathData = `M${startX},${startY} Q${midX + randomOffsetX},${midY + randomOffsetY} ${endX},${endY}`;
			
			// Create multiple overlapping paths with different textures
			const textures = [
				{ filter: 'url(#charcoalTexture)', stroke: '#1a1a1a', width: '5', opacity: '0.4' },
				{ filter: 'url(#roughEdges)', stroke: '#2a2a2a', width: '3.5', opacity: '0.3' },
				{ filter: 'url(#grainyTexture)', stroke: '#333', width: '2.5', opacity: '0.25' },
				{ filter: 'none', stroke: '#1a1a1a', width: '4', opacity: '0.35' }
			];
			
			textures.forEach((texture, i) => {
				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				
				// Add slight variations to each path for more organic look
				const variationX = (Math.random() - 0.5) * 8;
				const variationY = (Math.random() - 0.5) * 8;
				const variedPathData = `M${startX + variationX},${startY + variationY} Q${midX + randomOffsetX + variationX},${midY + randomOffsetY + variationY} ${endX + variationX},${endY + variationY}`;
				
				path.setAttribute('d', variedPathData);
				path.setAttribute('stroke', texture.stroke);
				path.setAttribute('stroke-width', texture.width);
				path.setAttribute('opacity', texture.opacity);
				path.setAttribute('fill', 'none');
				path.setAttribute('stroke-linecap', 'round');
				path.setAttribute('stroke-linejoin', 'round');
				path.classList.add('mindmap-line');
				
				if (texture.filter !== 'none') {
					path.setAttribute('filter', texture.filter);
				}
				
				currentSvg.appendChild(path);
			});
			
			// Add additional rough texture layers
			for (let j = 0; j < 2; j++) {
				const roughPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				const roughVariationX = (Math.random() - 0.5) * 15;
				const roughVariationY = (Math.random() - 0.5) * 15;
				const roughPathData = `M${startX + roughVariationX},${startY + roughVariationY} Q${midX + randomOffsetX + roughVariationX},${midY + randomOffsetY + roughVariationY} ${endX + roughVariationX},${endY + roughVariationY}`;
				
				roughPath.setAttribute('d', roughPathData);
				roughPath.setAttribute('stroke', j === 0 ? '#444' : '#555');
				roughPath.setAttribute('stroke-width', j === 0 ? '1.5' : '1');
				roughPath.setAttribute('opacity', j === 0 ? '0.2' : '0.15');
				roughPath.setAttribute('fill', 'none');
				roughPath.setAttribute('stroke-linecap', 'round');
				roughPath.setAttribute('stroke-linejoin', 'round');
				roughPath.setAttribute('filter', 'url(#roughEdges)');
				roughPath.classList.add('mindmap-line');
				
				currentSvg.appendChild(roughPath);
			}
			
			console.log(`Hand-drawn line ${index} created to (${nodeX}, ${nodeY})`);
		});
		
		console.log('All hand-drawn lines created. SVG children:', currentSvg.children.length);
	}

	// Create hand-drawn circles around project tabs
	function createHandDrawnFrames() {
		console.log('Creating hand-drawn circles...');
		
		const currentSvg = document.querySelector('.connecting-lines');
		const currentNodes = document.querySelectorAll('.project-node');
		const container = document.querySelector('.brainstorm-container');
		
		if (!currentSvg || !currentNodes.length || !container) {
			console.error('Missing elements for frame creation:', {currentSvg, currentNodes: currentNodes.length, container});
			return;
		}
		
		// Remove existing circles to avoid duplicates when this function runs again (e.g., on resize)
		const existingCircles = currentSvg.querySelectorAll('.hand-drawn-frame, [class*="hand-drawn"], circle.brainfarts-overlay, image[href*="cirkel"], image[href*="circle"], image[xlink\\:href*="cirkel"], image[xlink\\:href*="circle"], image[href*="brainfarts"], image[href*="repop"], image[href*="kobajer"], image[href*="naturli"], image[href*="twister"], image[href*="durex"], image[href*="unge"]');
		existingCircles.forEach(el => {
			// Only remove if it's a circle/frame element, not a line
			const href = el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '';
			if (el.classList.contains('hand-drawn-frame') || el.classList.contains('brainfarts-overlay') || 
			    href.includes('cirkel') || href.includes('circle') || href.includes('brainfarts') || 
			    href.includes('repop') || href.includes('kobajer') || href.includes('naturli') || 
			    href.includes('twister') || href.includes('durex') || href.includes('unge')) {
				el.remove();
			}
		});
		
		const containerRect = container.getBoundingClientRect();
		console.log('Container rect:', containerRect);
		
		currentNodes.forEach((node, index) => {
			const nodeRect = node.getBoundingClientRect();
			const nodeText = node.textContent.trim();
			
			// Get the center of the text node
			const centerX = nodeRect.left - containerRect.left + (nodeRect.width / 2);
			const centerY = nodeRect.top - containerRect.top + (nodeRect.height / 2);
			
			console.log(`Processing node ${index}: "${nodeText}" at (${centerX}, ${centerY})`);
			
			// Special case: BRAINFARTS uses the image instead of hand-drawn circle
			if (nodeText === 'BRAINFARTS') {
				console.log('Creating BRAINFARTS circle image...');
				// Create an image element for BRAINFARTS
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/cirkel om brainfarts.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 120); // Center the image (assuming 240px width)
				image.setAttribute('y', centerY - 100); // Center the image (assuming 200px height)
				image.setAttribute('width', '240');
				image.setAttribute('height', '200');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.style.pointerEvents = 'auto'; // Make image visible
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'brainfarts-image');
				console.log('Creating BRAINFARTS circle image at:', centerX, centerY, 'with path:', imagePath);
				
				// Create a pencil-colored overlay circle for hover effect
				const overlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				overlay.setAttribute('cx', centerX);
				overlay.setAttribute('cy', centerY);
				overlay.setAttribute('r', '80');
				overlay.setAttribute('fill', '#667eea');
				overlay.setAttribute('opacity', '0');
				overlay.setAttribute('mix-blend-mode', 'multiply');
				overlay.classList.add('brainfarts-overlay');
				
				// Add hover effect to make it feel clickable
				image.addEventListener('mouseenter', function() {
					this.setAttribute('opacity', '1.0');
					this.setAttribute('filter', 'brightness(1.1)');
					overlay.setAttribute('opacity', '0.6');
				});
				
				image.addEventListener('mouseleave', function() {
					this.setAttribute('opacity', '0.8');
					this.setAttribute('filter', 'none');
					overlay.setAttribute('opacity', '0');
				});
				
				currentSvg.appendChild(image);
				currentSvg.appendChild(overlay);
				console.log(`✓ BRAINFARTS circle image appended to SVG. SVG children count:`, currentSvg.children.length);
				return; // Skip the hand-drawn circle creation for BRAINFARTS
			}
			
			// Special case: REPOP BY DEPOP uses the image instead of hand-drawn circle
			if (nodeText === 'REPOP BY DEPOP') {
				console.log('Creating REPOP BY DEPOP circle image...');
				// Create an image element for REPOP BY DEPOP
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/circle around repop by depop.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 187); // Slightly slightly move (assuming 380px width)
				image.setAttribute('y', centerY - 102); // Move the circle slightly down (assuming 220px height)
				image.setAttribute('width', '380');
				image.setAttribute('height', '220');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.setAttribute('transform', `rotate(180 ${centerX} ${centerY})`);
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'repop-image');
				currentSvg.appendChild(image);
				console.log(`✓ REPOP BY DEPOP circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for REPOP BY DEPOP
			}
			
			// Special case: KØ-BAJER uses the image instead of hand-drawn circle
			if (nodeText === 'KØ-BAJER') {
				console.log('Creating KØ-BAJER circle image...');
				// Create an image element for KØ-BAJER
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/cirkel købajer.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 100); // Move slightly to the left (assuming 200px width)
				image.setAttribute('y', centerY - 90); // Move down (assuming 200px height)
				image.setAttribute('width', '200');
				image.setAttribute('height', '200');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.setAttribute('transform', `rotate(180 ${centerX} ${centerY})`);
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'kobajer-image');
				currentSvg.appendChild(image);
				console.log(`✓ KØ-BAJER circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for KØ-BAJER
			}
			
			// Special case: NATURLI' uses the image instead of hand-drawn circle
			if (nodeText === 'NATURLI\'') {
				console.log('Creating NATURLI\' circle image...');
				// Create an image element for NATURLI'
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/cirkel omkring naturli'.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 120); // Center the image (assuming 240px width)
				image.setAttribute('y', centerY - 65); // Move down slightly (assuming 140px height)
				image.setAttribute('width', '240');
				image.setAttribute('height', '140');
				image.setAttribute('preserveAspectRatio', 'none'); // Prevent aspect ratio from scaling width
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.setAttribute('transform', `rotate(180 ${centerX} ${centerY})`);
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'naturli-image');
				currentSvg.appendChild(image);
				console.log(`✓ NATURLI' circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for NATURLI'
			}
			
			// Special case: UNGE MOD UV uses the image instead of hand-drawn circle
			if (nodeText === 'UNGE MOD UV') {
				console.log('Creating UNGE MOD UV circle image...');
				// Create an image element for UNGE MOD UV
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/unge mod uv cirkel.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 140); // Move slightly to the right (assuming 280px width)
				image.setAttribute('y', centerY - 100); // Center the image (assuming 200px height)
				image.setAttribute('width', '280');
				image.setAttribute('height', '200');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'unge-mod-uv-image');
				currentSvg.appendChild(image);
				console.log(`✓ UNGE MOD UV circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for UNGE MOD UV
			}
			
			// Special case: TWISTER uses the image instead of hand-drawn circle
			if (nodeText === 'TWISTER') {
				console.log('Creating TWISTER circle image...');
				// Create an image element for TWISTER
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/cirkel omkring twister.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 140); // Center the image (assuming 280px width)
				image.setAttribute('y', centerY - 120); // Center the image (assuming 240px height)
				image.setAttribute('width', '280');
				image.setAttribute('height', '240');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'twister-image');
				currentSvg.appendChild(image);
				console.log(`✓ TWISTER circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for TWISTER
			}
			
			// Special case: BYENS LANDHANDEL uses the image instead of hand-drawn circle
			if (nodeText === 'Byens Landhandel') {
				console.log('Creating Byens Landhandel circle image...');
				// Create an image element for BYENS LANDHANDEL
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/circle omkring byens landhandel.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 200); // Center the image (assuming 400px width)
				image.setAttribute('y', centerY - 100); // Center the image (assuming 200px height)
				image.setAttribute('width', '400');
				image.setAttribute('height', '200');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.setAttribute('preserveAspectRatio', 'none'); // Force stretching
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'byens-landhandel-image');
				currentSvg.appendChild(image);
				console.log(`✓ BYENS LANDHANDEL circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for BYENS LANDHANDEL
			}
			
			// Special case: DUREX X GUESS WHO uses the image instead of hand-drawn circle
			if (nodeText === 'DUREX X GUESS WHO') {
				console.log('Creating DUREX X GUESS WHO circle image...');
				// Create an image element for DUREX X GUESS WHO
				const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
				const imagePath = "assets/circle omkring durex x guess who.webp";
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
				image.setAttribute('href', imagePath);
				image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
				image.setAttribute('x', centerX - 220); // Center the image (assuming 440px width)
				image.setAttribute('y', centerY - 100); // Center the image (assuming 200px height)
				image.setAttribute('width', '440');
				image.setAttribute('height', '200');
				image.setAttribute('opacity', '0.8');
				image.setAttribute('visibility', 'visible');
				image.setAttribute('preserveAspectRatio', 'none'); // Force stretching
				image.style.pointerEvents = 'auto';
				image.style.display = 'block';
				image.style.visibility = 'visible';
				image.style.opacity = '0.8';
				image.classList.add('hand-drawn-frame', 'durex-image');
				currentSvg.appendChild(image);
				console.log(`✓ DUREX X GUESS WHO circle image appended to SVG`);
				return; // Skip the hand-drawn circle creation for DUREX X GUESS WHO
			}
			
			// Create soft hand-drawn circle with smooth curves for other nodes
			let baseRadius = 50 + Math.random() * 30; // 50-80px radius variation (normal size)
			
			const numPoints = 12 + Math.floor(Math.random() * 8); // 12-20 points for smoother curves
			let pathData = '';
			
			for (let p = 0; p < numPoints; p++) {
				const angle = (p / numPoints) * 2 * Math.PI;
				
				// Add gentle irregularity to the radius for each point
				const radiusVariation = (Math.random() - 0.5) * 10; // ±5px variation (normal)
				const angleVariation = (Math.random() - 0.5) * 0.2; // ±0.1 radians (normal)
				
				let currentRadius = baseRadius + radiusVariation;
				const currentAngle = angle + angleVariation;
				
				const x = centerX + Math.cos(currentAngle) * currentRadius;
				const y = centerY + Math.sin(currentAngle) * currentRadius;
				
				if (p === 0) {
					pathData += `M${x},${y}`;
				} else {
					// Use quadratic curves for smooth, soft transitions
					const prevAngle = ((p - 1) / numPoints) * 2 * Math.PI;
					const midAngle = (prevAngle + currentAngle) / 2;
					const controlRadius = baseRadius + (Math.random() - 0.5) * 8; // Control point radius
					const controlX = centerX + Math.cos(midAngle) * controlRadius;
					const controlY = centerY + Math.sin(midAngle) * controlRadius;
					pathData += ` Q${controlX},${controlY} ${x},${y}`;
				}
			}
			// Sometimes add a "tail" - like the person drew too fast and continued past the circle
			const hasTail = Math.random() < 0.4;
			
			if (hasTail) {
				// Don't close the circle, instead extend it with a tail well outside the circle
				const tailAngle = Math.random() * 2 * Math.PI; // Random direction for tails
				const tailLength = 40 + Math.random() * 40; // 40-80px tail length (much longer to go well outside)
				
				// Start the tail from the last point of the circle
				const lastAngle = ((numPoints - 1) / numPoints) * 2 * Math.PI;
				const lastX = centerX + Math.cos(lastAngle) * baseRadius;
				const lastY = centerY + Math.sin(lastAngle) * baseRadius;
				
				// Extend the tail well beyond the circle's edge - make it go much further out
				const tailEndX = lastX + Math.cos(tailAngle) * tailLength;
				const tailEndY = lastY + Math.sin(tailAngle) * tailLength;
				
				// Create a smooth curve for the tail that goes well outside the circle
				const tailControlX = lastX + Math.cos(tailAngle) * (tailLength * 0.6);
				const tailControlY = lastY + Math.sin(tailAngle) * (tailLength * 0.6);
				
				pathData += ` Q${tailControlX},${tailControlY} ${tailEndX},${tailEndY}`;
			} else {
				pathData += ' Z'; // Close the path normally
			}
			
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			circle.setAttribute('d', pathData);
			
			// Normal styling for other circles
			circle.setAttribute('stroke', '#2a2a2a'); // Softer color
			circle.setAttribute('stroke-width', 1.5 + Math.random() * 1.5); // 1.5-3px stroke width (thinner for softness)
			circle.setAttribute('opacity', 0.4 + Math.random() * 0.3); // 0.4-0.7 opacity (more visible)
			circle.setAttribute('fill', 'none');
			circle.setAttribute('fill-opacity', '0');
			circle.setAttribute('stroke-linecap', 'round');
			circle.setAttribute('stroke-linejoin', 'round');
			circle.setAttribute('filter', 'url(#charcoalTexture)');
			circle.classList.add('hand-drawn-frame');
			
			currentSvg.appendChild(circle);
			
			console.log(`Hand-drawn circle ${index} created for ${node.textContent.trim()}`);
		});
		
		console.log('All hand-drawn circles created. Total SVG children:', currentSvg.children.length);
		const allImages = currentSvg.querySelectorAll('image');
		console.log('Circle images in SVG:', allImages.length);
		
		// Verify each image is actually in the DOM and visible
		allImages.forEach((img, idx) => {
			const href = img.getAttribute('href') || img.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
			console.log(`Image ${idx}: href="${href}", x=${img.getAttribute('x')}, y=${img.getAttribute('y')}, width=${img.getAttribute('width')}, height=${img.getAttribute('height')}, opacity=${img.getAttribute('opacity')}`);
			console.log(`  - In DOM:`, img.parentNode === currentSvg);
			console.log(`  - Computed display:`, window.getComputedStyle(img).display);
			console.log(`  - Computed visibility:`, window.getComputedStyle(img).visibility);
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
		
		// Create connecting lines dynamically
		createConnectingLines();
		
		// Create hand-drawn frames around project tabs
		createHandDrawnFrames();
		
		document.addEventListener('mousemove', updatePupilPosition);
		
		// Recreate lines and frames on window resize
		window.addEventListener('resize', function() {
			setTimeout(() => {
				createConnectingLines();
				createHandDrawnFrames();
			}, 100);
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