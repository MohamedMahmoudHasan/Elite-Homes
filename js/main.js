const barsIcon = document.querySelector(".bars-icon");
const closeIcon = document.querySelector(".close-icon");

barsIcon.addEventListener("click" , ()=>{
    barsIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener("click" , ()=>{
    barsIcon.style.display = "block";
    closeIcon.style.display = "none";
})

const myCarousel = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarousel);

document.getElementById('prevBtn').addEventListener('click', () => {
    carousel.prev();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    carousel.next();
});