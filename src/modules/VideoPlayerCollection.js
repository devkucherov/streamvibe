const rootSelector = '[data-js-video-player]'

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]'
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElemtnt = this.rootElement.querySelector(this.selectors.playButton)
    this.bindEvents()
  }

  onPlayButtonClick = () => {
    this.videoElement.play()
    this.videoElement.requestFullscreen()
    this.videoElement.controls = true
    this.playButtonElemtnt.classList.remove(this.stateClasses.isActive)
  }

  onVideoPause = () => {
    this.videoElement.controls = false
    this.playButtonElemtnt.classList.add(this.stateClasses.isActive)
  }

  onVideoFullScreenChange = () => {
    const isFullScreenEnabled = document.fullscreenElement === this.videoElement

    if (!isFullScreenEnabled) {
      this.videoElement.pause()
    }
  }

  bindEvents() {
    this.playButtonElemtnt.addEventListener('click', this.onPlayButtonClick)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.videoElement.addEventListener('fullscreenchange', this.onVideoFullScreenChange)
  }
}

class VideoPlayerCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element)
    })
  }
}

export default VideoPlayerCollection