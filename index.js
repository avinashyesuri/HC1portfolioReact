var typed = new Typed(".text",{
    strings:["Frontend Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// document.addEventListener("DOMContentLoaded", function() {
//     const servicesList = document.getElementById('services-list');
//     const toggleButton = document.getElementById('toggle-services');
    
//     // Function to toggle visibility
//     function toggleServices() {
//         if (servicesList.style.display === 'none') {
//             servicesList.style.display = 'block';
//             toggleButton.textContent = 'Hide Services';
//         } else {
//             servicesList.style.display = 'none';
//             toggleButton.textContent = 'Show Services';
//         }
//     }
    
//     // Initialize state
//     servicesList.style.display = 'block'; // Ensure the services are visible initially

//     // Add click event listener to the toggle button
//     toggleButton.addEventListener('click', toggleServices);
// });





// // Slick Carousel initialization
// $(document).ready(function(){
//     $('.services-list').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });
$('.slider_a').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const offset = 502 - (502 * percentage) / 100;
        bar.style.strokeDashoffset = offset;
    });
});

$(document).ready(function() {
    // Initially show the services section
    $('#services').show();

    // Handle the toggle button click event
    $('#toggle-services').click(function() {
        // Check if the services section is visible
        if ($('#services').is(':visible')) {
            // Hide the services section
            $('#services').hide();
        } else {
            // Show the services section
            $('#services').show();
        }
    });
});


$(document).ready(function() {
    $('#toggle-contact-form').click(function() {
        var $contactForm = $('.contact-form');
        
        if ($contactForm.hasClass('fade-in')) {
            $contactForm.removeClass('fade-in').addClass('fade-out');
            setTimeout(function() {
                $contactForm.hide(); // Hide element after animation
            }, 1000); // Match the CSS animation duration
        } else {
            $contactForm.show(); // Show element before animation
            $contactForm.removeClass('fade-out').addClass('fade-in');
        }
    });
});
