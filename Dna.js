document.addEventListener("DOMContentLoaded", function() {
   
    const searchInput = document.querySelector('.search_input');
    const searchIcon = document.querySelector('.search_icon');
 
    searchIcon.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            console.log("Searching for:", query);
            
        } else {
            alert("Please enter a search term!");
        }
    });
 
    const navLinks = document.querySelectorAll('.nav_bar a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.borderBottom = '4px solid #f54e77';  
        });
        link.addEventListener('mouseleave', () => {
            link.style.borderBottom = '5px solid #fff';  
        });
    });
 
    const profileIcon = document.querySelector('.action_container:nth-child(1)');
    const wishlistIcon = document.querySelector('.action_container:nth-child(2)');
    const shoppingBagIcon = document.querySelector('.action_container:nth-child(3)');
    
    profileIcon.addEventListener('click', () => {
        console.log("Profile clicked");
         
    });
    wishlistIcon.addEventListener('click', () => {
        console.log("Wishlist clicked"); 
    });
    shoppingBagIcon.addEventListener('click', () => {
        console.log("Shopping bag clicked"); 
    }); 
    let currentIndex = 0;
    const bannerImages = [
        "https://th.bing.com/th/id/OIP.l6iuPq1F2VqoaElABO3cdAHaFL?rs=1&pid=ImgDetMain",
         
    ];
    const bannerContainer = document.querySelector('.banner_container img');

    function changeBannerImage() {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerContainer.src = bannerImages[currentIndex];
    }

    setInterval(changeBannerImage, 5000); 
    const navBar = document.querySelector('.nav_bar');
    const menuToggle = document.querySelector('.menu-toggle');  
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navBar.classList.toggle('show');  
        });
    }
});
