function handleScroll(e) {
    document.querySelector('.nav-bar').classList.toggle('scrolled', window.scrollY > 0)
}
window.addEventListener('scroll', handleScroll)