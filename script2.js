document.querySelectorAll(".slider-container").forEach((container) => {
    const slider = container.querySelector(".slider");
    const slides = slider.children;
    const prevButton = container.querySelector(".prev");
    const nextButton = container.querySelector(".next");
    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });
});