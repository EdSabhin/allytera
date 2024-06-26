import React from "react"
import Image from "next/image"

import mainProps from "../component-props/mainProps"

import { GiCurledLeaf, GiFairyWings } from "react-icons/gi"

type Props = {
  title: string
  author?: string
  poem: string[]
  id: string
  setFullPoemView: (value: string) => void
  theme: string
}

const PoemCardDickinson = ({ title, id, setFullPoemView, theme }: Props) => {
  const poemTitle = title

  /* Theme */
  let poemCard
  let iconRight
  let iconLeft
  let iconBottom
  let iconAbsolute
  let titleClass

  switch (theme) {
    case "sylph":
      ;({
        class: poemCard,
        iconRight,
        iconLeft,
        iconBottom,
        titleClass,
      } = mainProps.dickinson.sylph.poemCard)
      break
    case "elegy":
      ;({
        class: poemCard,
        iconAbsolute,
        titleClass,
      } = mainProps.dickinson.elegy.poemCard)
      break
  }

  return (
    <div
      onClick={() => setFullPoemView(id)}
      className="flex flex-col items-center"
    >
      <div className={poemCard}>
        <h1 className={titleClass}>{poemTitle}</h1>
        <div className={theme === "sylph" ? iconRight : iconAbsolute}>
          {theme === "sylph" && (
            <GiFairyWings className="w-[80%] h-full p-5 text-neutral-900 group-hover:text-indigo-100 slide-in-top" />
          )}
        </div>
        <div className={iconLeft}>
          {theme === "sylph" && (
            <GiFairyWings className="w-[80%] h-full p-5 text-neutral-900 group-hover:text-indigo-100 slide-in-top" />
          )}
        </div>
        <div className={iconBottom}>
          {theme === "sylph" && (
            <GiFairyWings className="w-[80%] h-full p-5 text-neutral-900 group-hover:text-indigo-100 slide-in-top" />
          )}
        </div>
      </div>
    </div>
  )
}

export default PoemCardDickinson
