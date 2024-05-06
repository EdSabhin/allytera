import React from "react"

import optionsProps from "../component-props/optionsProps"

import { Old_Standard_TT } from "next/font/google"

import ThemeButton from "./ThemeButton"
import MusicPlayer from "./MusicPlayer"

interface OptionsShakespeareProps {
  bloodNight: boolean
  setBloodNight: (value: boolean) => void
  options: boolean
  handleOpenOptions: (value: boolean) => void
  theme: string
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const OptionsShakespeare = ({
  bloodNight,
  setBloodNight,
  options,
  handleOpenOptions,
  theme,
}: OptionsShakespeareProps) => {
  // Theme
  let optionsContainer
  let closeIcon

  switch (theme) {
    case "playwright":
      ;({ optionsContainer, closeIcon } =
        optionsProps.shakespeare.playwright.optionsMenu)
      break
    case "bloodNight":
      ;({ optionsContainer, closeIcon } =
        optionsProps.shakespeare.bloodNight.optionsMenu)
      break
  }

  return (
    <div className={`${!options ? "hidden" : "block"} ${optionsContainer}`}>
      <div className="flex flex-col justify-center items-center gap-20 md:gap-14">
        <ThemeButton
          text={theme === "playwright" ? "Blood Night" : "Playwright"}
          onClick={() => {
            setBloodNight && setBloodNight(!bloodNight)
          }}
          theme={theme}
        />
        <MusicPlayer theme={!bloodNight ? "playwright" : "bloodNight"} />
        <div
          onClick={() => handleOpenOptions(!options)}
          className={`${OldStandardTT.className} ${closeIcon}`}
        >
          X
        </div>
      </div>
    </div>
  )
}

export default OptionsShakespeare
