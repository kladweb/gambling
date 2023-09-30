function scrollbar() {
  const scrollArea = document.querySelector('.area_card');
  const scrollBar = document.querySelector('.scrollbar');
  const scrollBarActive = document.querySelector('.scrollbar_active');
  scrollArea.addEventListener('scroll', moveScroll);

  function moveScroll() {
    const scrollPercentage = scrollArea.scrollTop / (scrollArea.scrollHeight - scrollArea.clientHeight);
    const maxTop = scrollBar.offsetHeight - scrollBarActive.offsetHeight;
    scrollBarActive.style.marginTop = `${maxTop * scrollPercentage}px`;
  }
}

export default scrollbar;