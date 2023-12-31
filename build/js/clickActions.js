function clickActions() {
  const reviewCards = document.querySelectorAll('.review-card');
  const buttonLang = document.querySelector('.language_button');
  const buttonEn = document.querySelector('.lang_en');
  const buttonRu = document.querySelector('.lang_ru');

  const closeModal = document.querySelector('.modal_close');
  const iconOpen = document.querySelector('.icon_open');
  const iconClose = document.querySelector('.icon_close');
  const pageMenu = document.querySelector('.page_menu');
  const pageButtons = document.querySelector('.page_buttons');
  let activeLanguage = "EN";

  let activeCard = null;
  reviewCards.forEach((card) => {
    card.addEventListener('click', () => {
      toggleActive(card);
    });
  });

  function toggleActive(card) {
    if (card === activeCard) {
      return;
    }
    if (activeCard) {
      activeCard.classList.remove('review-card-active');
    }
    card.classList.add('review-card-active');
    activeCard = card;
  }

  buttonLang.addEventListener('click', changeLanguage);

  function changeLanguage() {
    if (window.innerWidth < 700) {
      return;
    }
    if (buttonEn.style.display === 'none') {
      buttonEn.style.display = 'inline-block';
      buttonRu.style.display = 'none';
      activeLanguage = "EN";
    } else {
      buttonEn.style.display = 'none';
      buttonRu.style.display = 'inline-block';
      activeLanguage = "RU";
    }
  }

  closeModal.addEventListener('click', openCloseModal);

  function openCloseModal() {
    if (iconOpen.classList.contains('close')) {
      iconOpen.classList.remove('close');
      iconClose.classList.add('close');
      pageButtons.style.visibility = 'hidden';
      pageMenu.classList.remove('open-flex');
    } else {
      iconOpen.classList.add('close');
      iconClose.classList.remove('close');
      pageButtons.style.visibility = 'visible';
      pageMenu.classList.add('open-flex');
    }
  }

  // проверяем, чтобы меню не оставалось в состоянии "display: none" при изменении разрешения экрана (например поворот
  // телефона):
  window.addEventListener('resize', checkMenu);

  function checkMenu() {
    if (pageButtons.style.visibility === 'hidden' && window.innerWidth > 700) {
      pageButtons.style.visibility = 'visible';
      pageMenu.classList.add('open-flex');
    }
    if (pageButtons.style.visibility === 'visible' && window.innerWidth <= 700) {
      pageButtons.style.visibility = 'hidden';
      pageMenu.classList.remove('open-flex');
      iconOpen.classList.remove('close');
      iconClose.classList.add('close');
      buttonRu.style.display = 'none';
      buttonEn.style.display = 'none';
    }
    if (getComputedStyle(buttonRu).display !== 'none' && window.innerWidth <= 700) {
      buttonRu.style.display = 'none';
      activeLanguage = "RU";
    }
    if (getComputedStyle(buttonEn).display !== 'none' && window.innerWidth <= 700) {
      buttonEn.style.display = 'none';
      activeLanguage = "EN";
    }
    if (activeLanguage === "EN" && window.innerWidth > 700) {
      buttonEn.style.display = 'inline-block';
    }
    if (activeLanguage === "RU" && window.innerWidth > 700) {
      buttonRu.style.display = 'inline-block';
    }
  }
}

export default clickActions;