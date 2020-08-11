function handleScroll(e) {
    document.querySelector('.nav-bar').classList.toggle('scrolled', window.scrollY > 0)
}
window.addEventListener('scroll', handleScroll)

function showVideo() {
    const videoPlayer = document.querySelector('.videoPlayer')
    const media = videoPlayer.querySelector('video')
    videoPlayer.style.display = 'flex'
    videoPlayer.addEventListener('click', hideVideo)
    media.play()
    document.body.style.overflow = 'hidden'
}

function hideVideo(e) {
    if(e.target.tagName !== 'VIDEO') {
        const videoPlayer = document.querySelector('.videoPlayer')
        const media = videoPlayer.querySelector('video')
        videoPlayer.style.display = 'none'
        videoPlayer.removeEventListener('click', hideVideo)
        media.pause()
        document.body.style.overflow = 'unset'
    }
}

function scrollTo(id) {
    document.getElementById(id).scrollIntoView({behavior:'smooth'})
}