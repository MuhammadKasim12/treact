let currTestimonial = 0;
let testimonials = [];

async function fetchTestimonials() {
  try {
    const response = await fetch("testimonials.json"); // Path to the JSON file
    testimonials = await response.json();
    updateTestimonials(0); // Initial setup with no movement
  } catch (error) {
    console.error("Error fetching testimonials:", error);
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
            ${[...Array(rating)]
              .map(
                (_, i) =>
                  `<use xlink:href="#star" x="${
                    i * 30
                  }" y="0" width="24" height="24" />`
              )
              .join("")}
        </svg>
    `;
  return starSvg;
}

function updateTestimonials(direction) {
  const container = document.querySelector(
    ".TwoColumnWithImageAndRating__Container"
  );

  container.innerHTML = `
        <div class="TwoColumnWithImageAndRating__Content">
            ${renderStars(testimonials[currTestimonial].starRating)}
            <div id="testimonialHeading" class="TwoColumnWithImageAndRating__TestimonialHeading">${
              testimonials[currTestimonial].testimonialHeading
            }</div>
            <blockquote id="testimonialQuote" class="TwoColumnWithImageAndRating__Quote">${
              testimonials[currTestimonial].testimonialQuote
            }</blockquote>
            <div class="testimonial">
                <div class="TwoColumnWithImageAndRating__CustomerInfo">
                    <img id="customerPhoto" class="TwoColumnWithImageAndRating__CustomerProfilePicture OFCMQ" src="${
                      testimonials[currTestimonial].customerPhoto
                    }" alt="${testimonials[currTestimonial].customerName}">
                    <div class="TwoColumnWithImageAndRating__CustomerTextInfo njskE">
                        <h5 id="customerName" class="TwoColumnWithImageAndRating__CustomerName bZMVMM">${
                          testimonials[currTestimonial].customerName
                        }</h5>
                        <p id="customerTitle" class="TwoColumnWithImageAndRating__CustomerTitle irwjEX">${
                          testimonials[currTestimonial].customerTitle
                        }</p>
                    </div>
                </div>
                <div class="TwoColumnWithImageAndRating__Controls">
                    <button class="TwoColumnWithImageAndRating__ControlButton fHLbhy" onclick="changeTestimonial_new(-1)">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </button>
                    <button class="TwoColumnWithImageAndRating__ControlButton fHLbhy" onclick="changeTestimonial_new(1)">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

  const contentContainer = document.querySelector(
    ".TwoColumnWithImageAndRating__ContentContainer_New"
  );

  // Reset the transform to the initial position
  contentContainer.style.transition = "none";
  contentContainer.style.transform = `translateX(${
    direction > 0 ? 100 : -100
  }%)`;

  // Trigger the reflow to apply the transform before the transition
  requestAnimationFrame(() => {
    contentContainer.style.transition = "transform 0.5s ease-in-out";
    contentContainer.style.transform = "translateX(0)";
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

document.querySelectorAll(".SingleCol__FAQ").forEach(function (faq) {
  faq
    .querySelector(".SingleCol__Question")
    .addEventListener("click", function () {
      const answer = faq.querySelector(".SingleCol__Answer");
      const icon = faq.querySelector(".SingleCol__QuestionToggleIcon svg");

      // Toggle the answer's visibility
      if (answer.style.height === "0px" || answer.style.height === "") {
        answer.style.height = answer.scrollHeight + "px";
        answer.style.opacity = 1;
        answer.style.marginTop = "10px";
        icon.style.transform = "rotate(180deg)";
      } else {
        answer.style.height = "0px";
        answer.style.opacity = 0;
        answer.style.marginTop = "0px";
        icon.style.transform = "rotate(0deg)";
      }
    });
});

document.addEventListener("DOMContentLoaded", fetchTestimonials);

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".hamburger-button");
  const navLinks = document.querySelector(".nav__links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
