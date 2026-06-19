document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-btn');

    // Gather all item card grids
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retrieve data fields from the clicked HTML element attributes
            const imgSrc = item.querySelector('img').src;
            const titleText = item.getAttribute('data-title');
            const descText = item.getAttribute('data-desc');

            // Map data parameters inside lightbox frame structure
            lightboxImg.src = imgSrc;
            lightboxTitle.innerText = titleText;
            lightboxDesc.innerText = descText;

            // Remove hidden display classes to trigger pop-up animations
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        });
    });

    // Close window execution click binding rule
    const closeLightbox = () => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = ''; // Restore structural window scroll active properties
    };

    closeBtn.addEventListener('click', closeLightbox);

    // Dynamic background click logic rule checking click boundaries
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Native structural escape keyboard dynamic button event handlers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });
});