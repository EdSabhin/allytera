import React, { useRef, useState } from "react"

import optionsProps from "../component-props/optionsProps"

import { songData } from "../service/songData"

import {
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
} from "react-icons/tb"

import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx"

type Props = {
  theme: string
}

const MusicPlayer = ({ theme }: Props) => {
  /* Audio Player */
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef<any>(null)

  // const attemptPlay = () => {
  //   audioRef &&
  //     audioRef.current &&
  //     audioRef.current.play().catch((error: any) => {
  //       console.error("Error attempting to play music.", error)
  //     })
  // }

  // useEffect(() => {
  //   attemptPlay()
  // }, [])

  const handleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      audioRef.current.muted = !audioRef.current.muted
    } else {
      audioRef.current.muted = !audioRef.current.muted
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  const handleNextSong = () => {
    let newIndex = currentSongIndex + 1

    if (newIndex >= songData.length) {
      newIndex = 0
    }

    setCurrentSongIndex(newIndex)
  }

  const handlePreviousSong = () => {
    let newIndex = currentSongIndex - 1

    if (newIndex < 0) {
      newIndex = songData.length - 1
    }

    setCurrentSongIndex(newIndex)
  }

  /* Theme */
  let musicPlayer
  let buttonClass

  switch (theme) {
    case "playwright":
      ;({ class: musicPlayer, buttonClass } =
        optionsProps.shakespeare.playwright.optionsMenu.musicPlayer)
      break
    case "bloodNight":
      ;({ class: musicPlayer, buttonClass } =
        optionsProps.shakespeare.bloodNight.optionsMenu.musicPlayer)
      break
    case "sylph":
      ;({ class: musicPlayer, buttonClass } =
        optionsProps.dickinson.sylph.optionsMenu.musicPlayer)
      break
    case "elegy":
      ;({ class: musicPlayer, buttonClass } =
        optionsProps.dickinson.elegy.optionsMenu.musicPlayer)
      break
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src={songData[currentSongIndex].src} />
      <div className={musicPlayer}>
        <button onClick={handleMute} className={buttonClass}>
          {isMuted ? <RxSpeakerLoud /> : <RxSpeakerOff />}
        </button>
        <button onClick={handlePreviousSong} className={buttonClass}>
          <TbPlayerTrackPrev />
        </button>
        <button onClick={handlePlayPause} className={buttonClass}>
          {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>
        <button onClick={handleNextSong} className={buttonClass}>
          <TbPlayerTrackNext />
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
