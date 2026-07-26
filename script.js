         // Smooth scrolling for navigation links
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {anchor.addEventListener('click', function(e) {e.preventDefault();
         document.querySelector(this.getAttribute('href')).
         scroollIntoView({behavior: 'smooth'
       });
    });
});

         // Product haver animations//
         const productCard = document.querySelectorAll('.product-card');
         productCard.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
            });
        card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
