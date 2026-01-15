// --- Mobile Menu Logic ---
    function toggleMenu() {
        var nav = document.getElementById("nav-list");
        nav.classList.toggle("active");
    }

    // --- Mobile Dropdown Logic ---
    document.addEventListener('DOMContentLoaded', function() {
        const dropdown = document.querySelector('.dropdown');
        const dropbtn = document.querySelector('.dropbtn');
        
        if (dropdown && dropbtn) {
            dropbtn.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
        
        // Reset dropdown state on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                dropdown.classList.remove('active');
            }
        });
    });