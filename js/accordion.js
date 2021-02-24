document.querySelectorAll('.accordion__item--trigger').forEach((item) => 
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        parent.classList.toggle('accordion__item--active');
    })
)