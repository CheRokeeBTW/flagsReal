import sound from './images/correct.mp3'

export default function CorrectAudio() {
    let audio = new Audio(sound)
      return audio.play()
}