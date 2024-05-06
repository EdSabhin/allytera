const mainProps = {
  shakespeare: {
    playwright: {
      mainClass:
        "w-full flex flex-col items-center md:items-start pt-8 pb-48 md:pb-32 px-4 md:px-48 text-stone-200 bg-gradient-to-r from-black via-gray-600 to-black overflow-hidden",
      title: "Oberon's House of Sonnets",
      titleClass:
        "h-max flex justify-center items-center py-6 md:pt-6 md:pb-4 px-10 md:px-20 text-[2rem] md:text-[2.85rem] text-center text-orange-100 bg-gradient-to-r from-stone-950 via-stone-700 to-slate-950 rounded-md md:rounded-tr-full md:rounded-bl-full shadow-md shadow-black",
      utilityButton:
        "w-[15rem] h-[3.1rem] md:w-[15rem] md:h-[3rem] flex justify-center items-center py-3 pl-8 pr-8 gap-5 text-stone-200 hover:text-orange-200 active:text-orange-500 bg-gradient-to-l from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md border-x-2 border-stone-600 hover:border-orange-300 hover:translate-x-2 rounded-tl-full rounded-br-full shadow-stone-950 transition duration-150 ease-in-out",
      poemCard: {
        class:
          "w-full flex-col items-center md:w-[75%] relative text-center md:text-start p-10 pb-14 md:r-12 border-l-8 border-transparent bg-gradient-to-b from-gray-950 via-gray-500 to-gray-950 hover:bg-gradient-to-b hover:from-stone-950 hover:via-stone-600 hover:to-stone-950 hover:border-amber-200 rounded-[10%] md:rounded-[3%] rounded-br-[3%] md:rounded-br-[35%] shadow-md shadow-stone-950 transition ease-in-out hover:-translate-y-4 duration-300 group",
        poemButton:
          "w-[10rem] h-[2.7rem] absolute bottom-[-2.2%] right-[0%] md:top-[6.4%] md:right-[-16.7%] text-color-animation bg-gradient-to-r from-slate-800 to-stone-800 shadow-md shadow-stone-950 rounded-br-full transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-stone-900 group-hover:to-stone-700 group-hover:text-stone-200",
        titleClass:
          "py-2 pr-2 text-5xl md:text-6xl underline group-hover:decoration-2 group-hover:decoration-orange-200 group-hover:underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900",
        authorClass: "p-2 md:pt-2 text-2xl md:text-3xl text-yellow-100",
        verses:
          "text-color-animation py-3 md:p-1 text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-8 md:pb-12 bg-gradient-to-bl from-stone-950 via-stone-500 to-stone-950 slide-in-fwd-right",
        titleClass:
          "w-full h-max flex items-center pt-6 pb-3 px-16 mb-8 text-center text-5xl text-orange-100 bg-gradient-to-r from-stone-900 via-stone-600 to-slate-900 rounded-tl rounded-br rounded-full shadow-md shadow-black",
        poemButton:
          "w-[15rem] py-2 pl-[2rem] mt-4 text-color-animation bg-gradient-to-b from-stone-800 to-stone-600 shadow-md shadow-stone-900 rounded-tl-full rounded-br-full border-x-2 border-stone-600 hover:border-orange-300 transition ease-in-out duration-300",
        verses:
          "w-full md:w-max pt-2 pb-1 px-10 text-center text-stone-300 leading-relaxed tracking-wide text-[1.57rem] hover:text-orange-200 hover:bg-gradient-to-r hover:from-stone-900 hover:via-stone-500 hover:to-stone-900 rounded-tl-full rounded-br-full transition-ease-in-out duration-300",
        authorClass:
          "pt-1 px-2 text-2xl md:pt-2 text-2xl md:text-3xl text-orange-100",
      },
    },
    bloodNight: {
      mainClass:
        "w-full flex flex-col items-center md:items-start pt-8 pb-48 md:pb-32 md:px-48 text-stone-200 bg-gradient-to-r from-black via-rose-900 to-black from-[3%] md:via-[57%] to-[96%] overflow-hidden",
      title: "Prospero's Grimoire",
      titleClass:
        "h-max flex justify-center items-center py-6 md:pt-6 md:pb-4 px-10 md:px-20 text-[2rem] md:text-[2.85rem] text-blood-title-animation bg-gradient-to-r from-stone-950 via-rose-800 to-stone-900 rounded-md md:rounded-tr-full md:rounded-bl-full shadow-md shadow-black",
      utilityButton:
        "w-[15rem] h-[3.1rem] md:w-[15rem] md:h-[3rem] flex justify-center items-center py-3 pl-8 pr-8 gap-5 text-stone-200 hover:text-rose-200 active:text-rose-500 bg-gradient-to-r from-stone-950 via-rose-950 to-stone-800 shadow-md rounded-br-full rounded-tl-full shadow-stone-950 border-x border-black hover:border-rose-700 hover:translate-x-2 transition duration-150 ease-in-out",
      poemCard: {
        class:
          "w-full flex-col items-center md:w-[75%] relative text-center md:text-start p-10 pb-14 md:r-12 border-l-8 border-transparent bg-gradient-to-b from-black via-rose-950 to-black hover:bg-gradient-to-b hover:from-black hover:via-[#28030D] hover:to-black hover:to-[40%] hover:border-rose-500 rounded-[10%] md:rounded-[3%] rounded-br-[3%] md:rounded-br-[35%] shadow-sm shadow-stone-900 transition ease-in-out hover:-translate-y-4 duration-300 group",
        poemButton:
          "w-[10rem] h-[2.7rem] absolute bottom-[-2.2%] right-[0%] md:top-[6.4%] md:right-[-16.7%] text-blood-animation bg-gradient-to-r from-rose-950 to-stone-900 rounded-br-full shadow-md shadow-stone-950 transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-stone-800 group-hover:text-stone-200 group-hover:shadow-sm group-hover:shadow-rose-800",
        titleClass:
          "py-2 pr-2 text-5xl md:text-6xl underline group-hover:decoration-2 group-hover:decoration-stone-600 group-hover:underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-stone-500",
        authorClass: "p-2 md:pt-2 text-2xl md:text-3xl text-stone-400",
        verses:
          "text-blood-animation py-3 md:p-1 text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-8 md:pb-12 bg-gradient-to-bl from-rose-950 via-stone-950 to-rose-900 slide-in-fwd-right",
        titleClass:
          "w-full h-max flex items-center pt-6 pb-3 px-16 mb-8 text-center text-5xl text-rose-400 bg-gradient-to-r from-stone-950 via-stone-900 to-rose-950 rounded-tl rounded-br rounded-full shadow-md shadow-black",
        poemButton:
          "w-[15rem] py-2 pl-[2rem] mt-4 text-blood-animation bg-gradient-to-b from-rose-950 from-30% to-black shadow-sm shadow-black rounded-tl-full rounded-br-full border-x-2 border-rose-950 hover:border-rose-800  rounded-tl-full rounded-br-full transition ease-in-out duration-300",
        verses:
          "w-full md:w-max pt-2 pb-1 px-10 text-center text-stone-300 leading-relaxed tracking-wide text-[1.57rem] hover:text-orange-200 hover:text-rose-400 hover:bg-gradient-to-r hover:from-stone-950 hover:via-stone-700 hover:to-stone-900 rounded-tl-full rounded-br-full transition-ease-in-out duration-300",
        authorClass:
          "pt-1 px-2 text-2xl md:pt-2 text-2xl md:text-3xl text-rose-300",
      },
    },
  },
  dickinson: {
    sylph: {
      mainClass:
        "w-full flex flex-col items-center md:items-start pt-8 pb-10 md:pb-20 px-4 md:px-48 text-black overflow-hidden bg-gradient-to-r from-rose-100 via-sky-100 to-indigo-100",
      title: "A Voice for an Age",
      titleClass:
        "h-max flex justify-center items-center py-6 md:pt-6 md:pb-4 px-6 md:px-20 text-[2rem] md:text-[2.85rem] text-center md:text-5xl bg-gradient-to-r from-white to-sky-200 rounded-[30%]  md:rounded-tr-full md:rounded-bl-full shadow-sm shadow-neutral-600",
      utilityButtonLeft:
        "w-[15rem] h-[2.7rem] flex justify-center md:justify-end  items-center py-3 text-neutral-900 rounded-[30%] md:rounded-bl-full hover:-translate-x-2 bg-gradient-to-r from-white to-indigo-200 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-rose-100 hover:text-purple-500 active:text-white shadow-sm shadow-black transition duration-150 ease-in-out",
      utilityButtonRight:
        "w-[15rem] h-[2.7rem] flex justify-center md:justify-start  items-center py-3 text-neutral-900 rounded-[30%] md:rounded-br-full hover:translate-x-2 bg-gradient-to-r md:bg-gradient-to-l from-white to-indigo-200 hover:bg-gradient-to-l hover:from-indigo-100 hover:to-rose-100 hover:text-purple-500 active:text-white shadow-sm shadow-black transition duration-150 ease-in-out",
      infinity: {
        container:
          "w-[4.7rem] h-[4.7rem] flex text-4xl gap-3 justify-center items-center rounded-full bg-gradient-to-b from-white to-neutral-100 hover:bg-gradient-to-b hover:from-white hover:to-pink-100 hover:border hover:border-pink-200 hover:animate-pulse-faster group transition ease-in-out duration-500",
        symbol:
          "text-5xl text-neutral-400 group-hover:text-purple-300 cursor-pointer rotate-circular",
      },
      poemCard: {
        class:
          "w-[17rem] h-[23rem] md:w-[28rem] md:h-[28rem] relative px-20 flex justify-center items-center text-center border-b rounded-[85%] md:rounded-full bg-white shadow-lg shadow-rose-100 hover:bg-gradient-to-b from-black via-neutral-900 to-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:text-rose-400 transition duration-300 group cursor-pointer",
        iconRight:
          "w-24 h-24 absolute top-0 right-[-3%] md:top-10 md:right-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87] group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        iconLeft:
          "w-24 h-24 absolute top-0 left-[-3%] md:top-10 md:left-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        iconBottom:
          "w-24 h-24 absolute bottom-[-14%] md:bottom-[-11%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        titleClass:
          "w-full flex justify-center items-center text-3xl leading-[3rem] group-hover:underline group-hover:underline-offset-4 decoration-2 decoration-dotted slide-in-fwd-center",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-8 md:pb-12 bg-gradient-to-t from-rose-200 to-indigo-200 slide-in-fwd-right",
        titleClass:
          "w-full h-max flex items-center pt-14 md:pt-8 pb-8 px-12 md:px-20 mb-8 md:mb-12 text-center text-3xl leading-[3rem] md:text-5xl bg-gradient-to-tr from-white to-sky-200 shadow-sm shadow-black rounded-b rounded-full md:rounded-[30%]",
        poemButton:
          "w-[15rem] h-[7.5rem] md:h-[3rem] flex justify-center items-center pl-[2.3rem] pb-10 md:pb-2 text-center bg-gradient-to-br from-white from-30% to-indigo-200 shadow-sm shadow-black rounded-t rounded-full md:rounded-[30%] text-sylph-animation-two transition ease-in-out duration-300",
        verses:
          "w-full md:w-max py-2 md:pt-[0.5rem] md:pb-[0.2rem] px-10 text-center text-amber-700 hover:text-neutral-900 leading-relaxed tracking-wide text-[1.57rem] md:rounded-[30%] hover:bg-gradient-to-r hover:from-sky-100 hover:via-rose-100 hover:to-sky-100 transition-ease-in-out duration-300",
        authorClass:
          "pt-1 px-2 text-2xl md:pt-2 text-2xl md:text-3xl text-neutral-900",
      },
    },
    elegy: {
      mainClass:
        "w-full flex flex-col items-center md:items-start pt-8 pb-36 md:pb-20 px-4 md:px-48 text-black overflow-hidden bg-gradient-to-r from-neutral-900 via-cyan-950 to-neutral-900",
      title: "Moves to the Infinite",
      titleClass:
        "text-aqua-title-animation h-max flex justify-center items-center py-6 md:pt-6 md:pb-4 px-6 md:px-20 text-[2rem] md:text-[2.85rem] text-center md:text-5xl text-neutral-100 bg-gradient-to-r from-black via-cyan-500 to-teal-950 rounded-[30%]  md:rounded-tr-full md:rounded-bl-full shadow-sm shadow-teal-400",
      utilityButtonLeft:
        "w-[15rem] h-[2.7rem] flex justify-center md:justify-end items-center py-3 text-neutral-100 rounded-[30%] md:rounded-bl-full hover:-translate-x-2 bg-gradient-to-r md:bg-gradient-to-l from-cyan-700 to-emerald-200 hover:bg-gradient-to-r hover:from-neutral-950 hover:to-cyan-800 hover:text-cyan-100 active:text-black shadow-sm shadow-black transition duration-150 ease-in-out",
      utilityButtonRight:
        "w-[15rem] h-[2.7rem] flex justify-center md:justify-start  items-center py-3 text-neutral-100 rounded-[30%] md:rounded-br-full hover:translate-x-2 bg-gradient-to-r md:bg-gradient-to-r from-cyan-700 to-emerald-200 hover:bg-gradient-to-l hover:from-neutral-950 hover:to-cyan-800 hover:text-cyan-100 active:text-black shadow-sm shadow-black transition duration-150 ease-in-out",
      infinity: {
        container:
          "w-[4.7rem] h-[4.7rem] flex text-4xl gap-3 justify-center items-center rounded-full bg-gradient-to-b from-cyan-900 to-black hover:bg-gradient-to-b hover:from-cyan-900 hover:to-cyan-950 hover:border hover:border-cyan-300 hover:animate-pulse-faster group transition ease-in-out duration-500 ",
        symbol:
          "text-5xl text-teal-300 group-hover:text-cyan-300 cursor-pointer rotate-circular",
      },
      poemCard: {
        class:
          "w-[17rem] h-[23rem] md:w-[28rem] md:h-[28rem] relative px-20 flex justify-center items-center text-center text-cyan-200 border-b rounded-[85%] md:rounded-full bg-moon bg-neutral-900 shadow-lg shadow-teal-200 hover:shadow-lg hover:shadow-cyan-300 hover:text-emerald-300 transition duration-300 group cursor-pointer",
        iconAbsolute:
          "w-24 h-24 z-10 absolute bottom-[-42%] md:top-[23%] md:right-[-8%] flex justify-center items-center rounded-full opacity-[0.5] group-hover:opacity-[1] bg-gradient-to-b from-cyan-950 via-teal-100 to-cyan-700 group-hover:shadow-xl group-hover:shadow-white cursor-pointer transition duration-300 rotate-circular",
        titleClass:
          "w-full flex justify-center items-center text-3xl leading-[3rem] group-hover:underline group-hover:underline-offset-4 decoration-2 decoration-dotted slide-in-fwd-center",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-8 md:pb-12 bg-gradient-to-br from-black to-cyan-900 slide-in-fwd-right",
        titleClass:
          "w-full h-max flex items-center pt-14 md:pt-8 pb-8 px-12 md:px-20 mb-8 md:mb-12 text-center text-3xl leading-[3rem] md:text-5xl text-neutral-100 bg-gradient-to-r from-black via-cyan-600 to-teal-900 shadow-sm shadow-teal-400 rounded-b rounded-full md:rounded-[30%]",
        poemButton:
          "w-[15rem] h-[7.5rem] md:h-[3rem] flex justify-center items-center pl-[2.3rem] pb-10 md:pb-2 text-center bg-gradient-to-r text-neutral-100 from-cyan-800 to-teal-900 shadow-md hover:shadow-teal-200 rounded-t rounded-full md:rounded-[30%] text-aqua-animation-two transition ease-in-out duration-300",
        verses:
          "w-full md:w-max py-2 md:pt-[0.5rem] md:pb-[0.2rem] px-10  text-center text-stone-300 leading-relaxed tracking-wide text-[1.57rem] hover:text-orange-200 md:rounded-[30%] hover:text-teal-200 hover:bg-gradient-to-r hover:from-cyan-200 hover:via-cyan-800 hover:to-cyan-200 transition-ease-in-out duration-300",
        authorClass:
          "pt-1 px-2 text-2xl md:pt-2 text-2xl md:text-3xl text-cyan-200",
      },
    },
  },
}

export default mainProps
