function clickActions() {
  const reviewCards = document.querySelectorAll('.review-card');
  let activeCard = null;
  reviewCards.forEach((card) => {
    card.addEventListener('click', () => {
      toggleActive(card);
    });
  });

  function toggleActive(card) {
    card.classList.toggle('review-card-active');
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('review-card-active');
    }
    activeCard = card;
  }
}

export default clickActions;