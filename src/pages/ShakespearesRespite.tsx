import Head from "next/head"
import { useEffect, useState } from "react"
import { fetchData } from "../service/fetchData"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import OptionsShakespeare from "../components/OptionsShakespeare"
import MainShakespeare from "../components/MainShakespeare"
import FullPoem from "../components/FullPoem"
import Footer from "../components/Footer"

export interface Poem {
  id?: string
  title: string
  author: string
  lines: string[]
  linecount: string
}

const ShakespearesRespite = () => {
  const [poems, setPoems] = useState<Poem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<string | null>(null)
  const [bloodNight, setBloodNight] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchDataAsync()
    }, 3300)
  }, [])

  const fetchDataAsync = async () => {
    try {
      const data: Poem[] = await fetchData(
        "https://poetrydb.org/author,title/Shakespeare;Sonnet",
      )
      setPoems(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching poems:", error)
      setLoading(false)
    }
  }

  const uniqueIdPoems: Poem[] = poems.map((poem) => ({
    ...poem,
    id: `${poem.title}-${poem.author}`,
  }))

  useEffect(() => {
    //  Check if uniqueIdPoems is different from current poems
    //  to avoid infinite loop. Only sets state when they are
    //  different, and keeps latest state of poems.
    const uniqueIsDifferent =
      JSON.stringify(uniqueIdPoems) !== JSON.stringify(poems)
    if (uniqueIsDifferent) {
      setPoems(uniqueIdPoems)
    }
  }, [uniqueIdPoems, poems])

  // Open Sidebar
  const [sidebar, setSidebar] = useState<boolean>(false)
  const handleOpenSidebar = () => {
    setSidebar(true)
  }

  // Open Options
  const [options, setOptions] = useState<boolean>(false)
  const handleOpenOptions = () => {
    setOptions(!options)
  }

  // Scroll to Main before opening FullPoem
  useEffect(() => {
    const mainContainer = document.getElementById("mainContainer")
    mainContainer?.scrollIntoView({ behavior: "smooth" })
  }, [fullPoemView])

  return (
    <>
      <Head>
        <title>Lo! A Whisper in the Wind</title>
        <meta
          name="description"
          content="Poetry Portal for William Shakespeare, Emily Dickinson, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/gold-moon-cat.svg" />
      </Head>
      <div
        className={
          !bloodNight
            ? "relative bg-gradient-to-r from-slate-950 via-black to-slate-950"
            : "relative bg-gradient-to-r from-black via-stone-950 to-rose-950"
        }
      >
        <Navbar theme={!bloodNight ? "playwright" : "bloodNight"} />
        <Header theme={!bloodNight ? "playwright" : "bloodNight"} />
        {sidebar && (
          <Sidebar
            pageId="Shakespeare"
            setSidebar={setSidebar}
            poems={poems}
            handlePoemClick={(id) => setFullPoemView(id ?? null)}
            theme={!bloodNight ? "playwright" : "bloodNight"}
          />
        )}
        <OptionsShakespeare
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
          options={options}
          handleOpenOptions={handleOpenOptions}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
        <div id="mainContainer">
          {fullPoemView === null ? (
            <MainShakespeare
              loading={loading}
              poems={poems}
              handleOpenSidebar={handleOpenSidebar}
              options={options}
              handleOpenOptions={handleOpenOptions}
              bloodNight={bloodNight}
              fullPoemView={fullPoemView}
              setFullPoemView={setFullPoemView}
              theme={!bloodNight ? "playwright" : "bloodNight"}
            />
          ) : (
            <FullPoem
              pageId="Shakespeare"
              poems={poems.find((poem) => poem.id === fullPoemView)}
              setFullPoemView={setFullPoemView}
              theme={!bloodNight ? "playwright" : "bloodNight"}
            />
          )}
        </div>
        <Footer
          id="Shakespeare"
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
          elegy={false}
          setElegy={() => ""}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      </div>
    </>
  )
}

export default ShakespearesRespite
