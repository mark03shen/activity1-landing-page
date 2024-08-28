document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
