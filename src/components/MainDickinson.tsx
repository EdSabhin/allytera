import React, { useState, useEffect } from "react"

import mainProps from "../component-props/mainProps"
import { Poem } from "../pages/ShakespearesRespite"

import { scrollToTop } from "../service/scrollToTop"
import shufflePoems from "../service/shufflePoems"

import LoadingImage from "./LoadingImage"
import Button from "./Button"
import CardsSection from "./CardsSection"
import { TfiInfinite } from "react-icons/tfi"

type Props = {
  poems: Poem[]
  handleOpenSidebar: () => void
  options: boolean
  handleOpenOptions: () => void
  fullPoemView: string | null
  setFullPoemView: (value: string) => void
  loading: boolean
  elegy?: boolean
  theme: string
}

const MainDickinson = ({
  poems,
  handleOpenSidebar,
  options,
  handleOpenOptions,
  fullPoemView,
  setFullPoemView,
  loading,
  elegy,
  theme,
}: Props) => {
  // Shuffle Poems
  const [randomPoems, setRandomPoems] = useState<Poem[]>([])
  const [shuffledPoems, setShuffledPoems] = useState<boolean>(false)

  const randomizePoems = () => {
    const randomizedPoems = shufflePoems(poems).slice(0, 8)
    setRandomPoems(randomizedPoems)
    setShuffledPoems(true)
  }

  // Scroll to Main after closing FullPoem
  useEffect(() => {
    const mainSection = document.getElementById("mainSection")
    mainSection?.scrollIntoView({ behavior: "smooth" })
  }, [fullPoemView])

  /* Theme */
  let mainClass
  let title
  let titleClass
  let utilityButtonLeft
  let utilityButtonRight
  let infinity

  switch (theme) {
    case "sylph":
      ;({
        mainClass,
        title,
        titleClass,
        utilityButtonLeft,
        utilityButtonRight,
        infinity,
      } = mainProps.dickinson.sylph)
      break
    case "elegy":
      ;({
        mainClass,
        title,
        titleClass,
        utilityButtonLeft,
        utilityButtonRight,
        infinity,
      } = mainProps.dickinson.elegy)
      break
  }

  return (
    <main id="mainSection" className={mainClass}>
      <div className="w-full flex flex-col justify-center items-center mt-12 gap-16 md:gap-24">
        <h2 className={titleClass}>{title}</h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-center mb-12 gap-10 md:gap-14">
          <Button
            text="Peruse Hits"
            onClick={handleOpenSidebar}
            className={utilityButtonLeft}
          />
          <div className={infinity?.container}>
            <TfiInfinite
              onClick={handleOpenOptions}
              className={infinity?.symbol}
            />
          </div>
          <Button
            text="Shuffle Poems"
            onClick={() => {
              randomizePoems()
            }}
            className={utilityButtonRight}
          />
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage
            image={
              !elegy ? "/images/inkwell-sylph.png" : "/images/inkwell-elegy.png"
            }
          />
        </div>
      ) : (
        <CardsSection
          pageId="Dickinson"
          poems={poems}
          setFullPoemView={setFullPoemView}
          randomPoems={randomPoems}
          shuffledPoems={shuffledPoems}
          theme={theme}
        />
      )}
    </main>
  )
}

export default MainDickinson
