import sound from './images/wrong.mp3'

export default function WrongAudio() {
    let audio = new Audio(sound)
      return audio.play()
}