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