import React from "react"

import optionsProps from "../component-props/optionsProps"

import { Old_Standard_TT } from "next/font/google"

import ThemeButton from "./ThemeButton"
import MusicPlayer from "./MusicPlayer"

interface OptionsDickinsonProps {
  elegy: boolean
  setElegy: (value: boolean) => void
  options: boolean
  handleOpenOptions: (value: boolean) => void
  theme: string
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const OptionsDickinson = ({
  elegy,
  setElegy,
  options,
  handleOpenOptions,
  theme,
}: OptionsDickinsonProps) => {
  // Theme
  let optionsContainer
  let closeIcon

  switch (theme) {
    case "sylph":
      ;({ optionsContainer, closeIcon } =
        optionsProps.dickinson.sylph.optionsMenu)
      break
    case "elegy":
      ;({ optionsContainer, closeIcon } =
        optionsProps.dickinson.elegy.optionsMenu)
      break
  }

  return (
    <div className={`${!options ? "hidden" : "block"} ${optionsContainer}`}>
      <div className="flex flex-col justify-center items-center gap-20 md:gap-14">
        <ThemeButton
          text={theme === "sylph" ? "Elegy" : "Sylph"}
          onClick={() => {
            setElegy && setElegy(!elegy)
          }}
          theme={theme}
        />
        <MusicPlayer theme={!elegy ? "sylph" : "elegy"} />
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

export default OptionsDickinson
