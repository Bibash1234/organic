// toggle menu and search bar

const selectElement = function (element) {

    return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');

let searchBox = selectElement('.search-btn');

let signUpBox = selectElement('.pop-up');

let shoppingCart = selectElement('.pop-up1');

let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
})

searchBox.addEventListener('click', function () {
    body.classList.toggle('search');
})

signUpBox.addEventListener('click', function () {
    body.classList.toggle('sign-up-box');
})

shoppingCart.addEventListener('click', function () {
    body.classList.toggle('shopping-cart-toggle');
})


// sign in sign up 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const containers = document.getElementById('containers');

signUpButton.addEventListener('click', () => {
    containers.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    containers.classList.remove("right-panel-active");
});





// fixed nav bar 

var height = $('#hero').height();

$(window).scroll(function () {

        if (

            $(this).scrollTop() > height
        ) {
            $('.nav-content').addClass('fixed');
        } else {
            $('.nav-content').removeClass('fixed');
        }
    }


);






// image slider 

const slideshowImages = document.querySelectorAll('.slideshow .slideshow-item');

const nextImageDelay = 3000;

let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = "1";

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = "0";

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.opacity = "1";
}



// owl carousel

$(document).ready(function () {


    // catagories slide
    $("#slide .owl-carousel").owlCarousel(

        {

            loop: true,
            nav: true,
            dots: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            responsive: {

                0: {
                    items: 3
                },

                600: {
                    items: 5
                },


                1000: {
                    items: 5,
                    nav: true
                }
            }


        }
    );

    // product slide

    $("#special-item .owl-carousel").owlCarousel(

        {

            loop: true,

            nav: true,

            dots: false,

            center: true,

            responsiveClass: true,

            responsive: {


                0: {
                    items: 1

                },

                768: {
                    items: 2

                },

                1000: {
                    items: 3

                }
            }
        }

    );



    $("#our-partner .owl-carousel").owlCarousel(

        {

            loop: true,

            nav: true,

            dots: false,

            center: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,

            responsiveClass: true,

            responsive: {


                0: {
                    items: 1
                },

                600: {
                    items: 3

                },

                1000: {
                    items: 3

                }
            }
        }

    );





    $('#testimonial-slider').owlCarousel(



        {



            items: 1,

            autoplay: true,

            smartSpeed: 700,

            look: true,

            autoplayHoverPause: true
        }
    );









});