let currTestimonial = 0;
let testimonials = [];

async function fetchTestimonials() {
    try {
        const response = await fetch('testimonials.json'); // Path to the JSON file
        testimonials = await response.json();
        updateTestimonials(0); // Initial setup with no movement
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }
}

function renderStars(rating) {
    const starSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" viewBox="0 0 150 30">
            <defs>
                <symbol id="star" viewBox="0 0 24 24" fill="#f1a952">
                    <path d="M12 .587l3.668 7.431L24 9.587l-6 5.853 1.417 8.261L12 18.902l-7.417 4.799L6 15.44 0 9.587l8.332-1.569z"/>
                </symbol>
            </defs>
            ${[...Array(rating)].map((_, i) => `<use xlink:href="#star" x="${i * 30}" y="0" width="24" height="24" />`).join('')}
        </svg>
    `;
    return starSvg;
}

function updateTestimonials(direction) {
    const contentContainer = document.querySelector(".TwoColumnWithImageAndRating__ContentContainer_New");

    contentContainer.innerHTML = `
        <div class="TwoColumnWithImageAndRating__Content">
            ${renderStars(testimonials[currTestimonial].starRating)}
            <div id="testimonialHeading" class="TwoColumnWithImageAndRating__TestimonialHeading">${testimonials[currTestimonial].testimonialHeading}</div>
            <blockquote id="testimonialQuote" class="TwoColumnWithImageAndRating__Quote">${testimonials[currTestimonial].testimonialQuote}</blockquote>
            <div class="TwoColumnWithImageAndRating__CustomerInfo">
                <img id="customerPhoto" class="TwoColumnWithImageAndRating__CustomerProfilePicture OFCMQ" src="${testimonials[currTestimonial].customerPhoto}" alt="${testimonials[currTestimonial].customerName}">
                <div class="TwoColumnWithImageAndRating__CustomerTextInfo njskE">
                    <h5 id="customerName" class="TwoColumnWithImageAndRating__CustomerName bZMVMM">${testimonials[currTestimonial].customerName}</h5>
                    <p id="customerTitle" class="TwoColumnWithImageAndRating__CustomerTitle irwjEX">${testimonials[currTestimonial].customerTitle}</p>
                </div>
            </div>
        </div>
    `;

    // Reset the transform to the initial position
    contentContainer.style.transition = 'none';
    contentContainer.style.transform = `translateX(${direction > 0 ? 100 : -100}%)`;

    // Trigger the reflow to apply the transform before the transition
    requestAnimationFrame(() => {
        contentContainer.style.transition = 'transform 0.5s ease-in-out';
        contentContainer.style.transform = 'translateX(0)';
    });
}

function changeTestimonial_new(direction) {
    currTestimonial += direction;

    if (currTestimonial < 0) {
        currTestimonial = testimonials.length - 1;
    } else if (currTestimonial >= testimonials.length) {
        currTestimonial = 0;
    }

    updateTestimonials(direction);
}

document.addEventListener('DOMContentLoaded', fetchTestimonials);
