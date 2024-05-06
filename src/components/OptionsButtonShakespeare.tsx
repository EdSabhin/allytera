import React from "react"
import optionsProps from "../component-props/optionsProps"

import { GiDaggerRose } from "react-icons/gi"

interface OptionsButtonShakespeareProps {
  options: boolean
  handleOpenOptions: (value: boolean) => void
  theme: string
}

const OptionsButtonShakespeare = ({
  options,
  handleOpenOptions,
  theme,
}: OptionsButtonShakespeareProps) => {
  // Theme
  let backButton
  let frontButton
  let icon

  switch (theme) {
    case "playwright":
      ;({ backButton, frontButton, icon } =
        optionsProps.shakespeare.playwright.optionsButton)
      break
    case "bloodNight":
      ;({ backButton, frontButton, icon } =
        optionsProps.shakespeare.bloodNight.optionsButton)
      break
  }

  return (
    <div onClick={() => handleOpenOptions(!options)} className={backButton}>
      <div className={frontButton}>
        <GiDaggerRose className={icon} />
      </div>
    </div>
  )
}

export default OptionsButtonShakespeare
