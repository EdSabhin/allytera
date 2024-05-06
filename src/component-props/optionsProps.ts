const optionsProps = {
  shakespeare: {
    playwright: {
      optionsButton: {
        backButton:
          "w-20 h-20 flex justify-center items-center bg-gradient-to-r from-stone-950 via-stone-700 to-slate-950 shadow-sm shadow-black rounded-bl-full rounded-tr-full cursor-pointer",
        frontButton:
          "w-20 h-20 flex justify-center items-center bg-gradient-to-r from-stone-950 via-stone-700 to-slate-950 rounded-bl-full rounded-tr-full shadow-sm shadow-black hover:scale-105 rotate-90 transition ease-in-out duration-300",
        icon: "w-8 h-8 text-orange-100 hover:text-orange-200 active:text-orange-500",
      },
      optionsMenu: {
        optionsContainer:
          "w-full md:w-[14%] h-[55%] md:h-[42%] fixed inset-y-[25%] left-0 md:inset-y-[14.7%] md:left-auto md:right-0 flex justify-center items-center z-20 bg-gradient-to-b from-slate-950 to-stone-950 shadow-sm shadow-stone-900 rounded-bl-md rounded-tl-md slide-in-right",
        themeButton:
          "w-[15rem] h-[3.1rem] mt-4 flex justify-center items-center text-lg text-stone-300 bg-gradient-to-l from-slate-800 to-stone-800 hover:bg-gradient-to-r hover:from-stone-800 hover:via-rose-950 hover:to-stone-950 shadow-md shadow-stone-950 border-x border-stone-600 hover:border-rose-600 transition ease-in-out duration-500 group",
        musicPlayer: {
          class:
            "w-[15rem] h-[3rem] flex justify-center items-center py-2 md:py-3 px-8 gap-5 text-stone-200 bg-gradient-to-l from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md shadow-stone-950 border-x border-stone-600 hover:border-orange-300 transition duration-500 ease-in-out",
          buttonClass: "hover:text-orange-300",
        },
        closeIcon:
          "w-10 py-1 md:mt-3 text-[1.7rem] md:text-[1.3rem] text-stone-300 text-center font-bold hover:text-orange-200 border-b border-transparent hover:border-orange-100 rounded cursor-pointer transition ease-in-out duration-300",
      },
    },
    bloodNight: {
      optionsButton: {
        backButton:
          "w-20 h-20 flex justify-center items-center bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950 shadow-sm shadow-black rounded-bl-full rounded-tr-full cursor-pointer",
        frontButton:
          "w-20 h-20 flex justify-center items-center bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950 rounded-bl-full rounded-tr-full shadow-sm shadow-black hover:scale-105 rotate-90 transition ease-in-out duration-300",
        icon: "w-8 h-8 text-stone-300 hover:text-rose-300 active:text-rose-500",
      },
      optionsMenu: {
        optionsContainer:
          "w-full md:w-[14%] h-[55%] md:h-[42%] fixed inset-y-[25%] left-0 md:inset-y-[14.7%] md:left-auto md:right-0 flex justify-center items-center z-20 bg-gradient-to-b from-stone-950 via-rose-950 to-stone-950 shadow-sm shadow-stone-900 rounded-bl-md rounded-tl-md slide-in-right",
        themeButton:
          "w-[15rem] h-[3.1rem] mt-4 flex justify-center items-center text-lg text-stone-300 bg-gradient-to-r from-stone-800 via-rose-950 to-stone-950 hover:bg-gradient-to-r hover:from-slate-800 hover:to-stone-800 shadow-md shadow-stone-950 border-x border-black hover:border-orange-300 transition ease-in-out duration-500 group",
        musicPlayer: {
          class:
            "w-[15rem] h-[3rem] flex justify-center items-center gap-5 text-stone-200 bg-gradient-to-r from-stone-800 via-rose-950 to-black hover:bg-gradient-to-r hover:from-stone-800 hover:via-rose-900 hover:to-black shadow-md shadow-stone-950 border-x border-black hover:border-rose-700 transition duration-500 ease-in-out",
          buttonClass: "hover:text-rose-500",
        },
        closeIcon:
          "w-10 py-1 md:mt-3 text-[1.7rem] md:text-[1.3rem] text-stone-300 text-center font-bold hover:text-rose-400 border-b border-transparent hover:border-rose-400 rounded cursor-pointer transition ease-in-out duration-300",
      },
    },
  },
  dickinson: {
    sylph: {
      optionsMenu: {
        optionsContainer:
          "w-full md:w-[14%] h-[55%] md:h-[42%] fixed inset-y-[25%] left-0 md:inset-y-[14.7%] md:left-auto md:right-0 flex justify-center items-center z-20 bg-gradient-to-b from-white via-purple-100 to-indigo-100 shadow-md shadow-white rounded-bl-md rounded-tl-md slide-in-right",
        themeButton:
          "w-[15rem] h-[3.1rem] mt-4 flex justify-center items-center text-lg text-neutral-900 hover:text-neutral-100 bg-gradient-to-l from-white from-30% to-indigo-200 shadow-sm shadow-black hover:bg-gradient-to-r hover:from-cyan-700 hover:to-emerald-200 shadow-sm shadow-white border-x-2 border-white hover:border-cyan-300 transition ease-in-out duration-500 group",
        musicPlayer: {
          class:
            "w-[15rem] h-[3rem] flex justify-center items-center mt-4 gap-5 text-neutral-900 hover:text-indigo-600 bg-gradient-to-l from-white to-indigo-200 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-rose-100 shadow-md shadow-white border-x-2 border-white hover:border-purple-400 transition duration-500 ease-in-out",
          buttonClass: "hover:text-purple-500",
        },
        closeIcon:
          "w-10 py-1 md:mt-3 text-[1.7rem] md:text-[1.3rem] text-neutral-500 text-center font-bold hover:text-neutral-900 border-b border-transparent hover:border-neutral-900 rounded cursor-pointer transition ease-in-out duration-300",
      },
    },
    elegy: {
      optionsMenu: {
        optionsContainer:
          "w-full md:w-[14%] h-[55%] md:h-[42%] fixed inset-y-[25%] left-0 md:inset-y-[14.7%] md:left-auto md:right-0 flex justify-center items-center z-20 bg-gradient-to-b from-cyan-950 via-cyan-500 to-cyan-950 shadow-sm shadow-cyan-400 rounded-bl-md rounded-tl-md slide-in-right",
        themeButton:
          "w-[15rem] h-[3.1rem] mt-4 flex justify-center items-center text-lg text-neutral-100 hover:text-neutral-900 bg-gradient-to-r from-cyan-700 from-30% to-emerald-200 shadow-sm shadow-black hover:bg-gradient-to-r hover:from-white hover:to-indigo-200 shadow-sm shadow-neutral-900 hover:border-x-2 border-neutral-900 hover:border-purple-400 transition ease-in-out duration-500 group",
        musicPlayer: {
          class:
            "w-[15rem] h-[3rem] flex justify-center items-center mt-4 gap-5 text-neutral-100 mt-4 bg-gradient-to-r from-cyan-700 from-30% to-emerald-200 hover:from-cyan-800 hover:to-neutral-950 hover:text-cyan-100 active:text-cyan-300 shadow-sm shadow-neutral-900 border-x-2 border-teal-700 hover:border-cyan-300 transition duration-500 ease-in-out",
          buttonClass: "hover:text-green-400",
        },
        closeIcon:
          "w-10 py-1 md:mt-3 text-[1.7rem] md:text-[1.3rem] text-teal-400 text-center font-bold hover:text-teal-300 border-b border-transparent hover:border-teal-300 rounded cursor-pointer transition ease-in-out duration-300",
      },
    },
  },
}

export default optionsProps
