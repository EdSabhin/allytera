import React, { useState, useEffect } from "react"

import mainProps from "../component-props/mainProps"
import { Poem } from "../pages/ShakespearesRespite"

import shufflePoems from "../service/shufflePoems"

import LoadingImage from "./LoadingImage"
import Button from "./Button"
import CardsSection from "./CardsSection"
import OptionsButtonShakespeare from "./OptionsButtonShakespeare"

type Props = {
  poems: Poem[]
  handleOpenSidebar: () => void
  options: boolean
  handleOpenOptions: () => void
  fullPoemView: string | null
  setFullPoemView: (value: string) => void
  loading: boolean
  bloodNight?: boolean
  theme: string
}

const MainShakespeare = ({
  poems,
  handleOpenSidebar,
  options,
  handleOpenOptions,
  fullPoemView,
  setFullPoemView,
  loading,
  bloodNight,
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

  // Theme
  let mainClass
  let title
  let titleClass
  let utilityButton

  switch (theme) {
    case "playwright":
      ;({ mainClass, title, titleClass, utilityButton } =
        mainProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ mainClass, title, titleClass, utilityButton } =
        mainProps.shakespeare.bloodNight)
      break
  }

  return (
    <main id="mainSection" className={mainClass}>
      <div className="w-full flex flex-col items-center md:items-start mt-8 mb-12 gap-10">
        <div className="flex flex-col items-center md:items-start gap-10 md:gap-16">
          <div className="w-full flex flex-col md:flex-row md:items-start gap-10 md:gap-56 2xl:mr-32">
            <h2 className={titleClass}>{title}</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-8 gap-12 md:gap-20">
            <Button
              text="Search Sonnets"
              onClick={handleOpenSidebar}
              className={utilityButton}
            />
            <OptionsButtonShakespeare
              options={options}
              handleOpenOptions={handleOpenOptions}
              theme={theme}
            />
            <Button
              text="Shuffle Poems"
              onClick={() => {
                randomizePoems()
              }}
              className={utilityButton}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage
            image={
              !bloodNight
                ? "/images/quill-playwright.png"
                : "/images/quill-blood-bright.png"
            }
          />
        </div>
      ) : (
        <CardsSection
          pageId="Shakespeare"
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

export default MainShakespeare
