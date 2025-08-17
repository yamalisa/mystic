'use strict' ;

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    });

    close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
     });

}

{
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.querySelector('.container2 ul');
    const slides = ul.children;
    let currentIndex = 0;

    function updateButtons() {
     prev.classList.remove('hidden');
     next.classList.remove('hidden');

      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
     if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }

    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }

    updateButtons();


  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });

  window.addEventListener('resize', () => {
   moveSlides();
});
}

