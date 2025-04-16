let portfolioBtns = document.querySelectorAll('.portfolio-btn');

portfolioBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let id = btn.getAttribute('data-id');
        let image = btn.getAttribute('data-src');
        let title = btn.getAttribute('data-title');
        let involvement = btn.getAttribute('data-involvement');
        let role = btn.getAttribute('data-role');
        let factors = btn.getAttribute('data-factors');
        let link = btn.getAttribute('data-link');
       
        localStorage.setItem('image', image);
        localStorage.setItem('title', title);
        localStorage.setItem('involvement', involvement);
        localStorage.setItem('role', role);
        localStorage.setItem('factors', factors);
        localStorage.setItem('link', link);

        let url = 'pages/portfolio-detail.html';
        url.searchParams.append('id', id);
        window.location.href = url;
    });
});