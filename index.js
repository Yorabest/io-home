const images = document.querySelectorAll('img')

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;

            image.src = image.dataset.lazy
            image.classList.add('appear');

            observer.unobserve(image)
        }
    })
})

images.forEach(image=> io.observe(image))