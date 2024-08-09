import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="fixed z-50 grid w-full grid-cols-[1fr_auto_1fr] items-center bg-app-black/70 px-1 text-white backdrop-blur-xl md:px-6">
      <div className="flex items-center mx-[-5px] false" id="left-nav">
        <button id="sidebar-menu-icon" className="px-2">
          <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" className="h-6 w-6 cursor-pointer transition hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path></svg>
          </button><a href="/games"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="mx-2 h-6 w-6 cursor-pointer transition hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
          </a></div>
          <div className="grid h-[4rem] grid-cols-[auto_1fr_auto] items-center justify-center sm:grid-cols-[1fr_auto_1fr]">
            <div className="hidden text-end sm:block"><a aria-current="page" className="mx-2 hidden cursor-pointer transition hover:text-[#ff0000] xl:inline-block active" href="/games">GAMES</a>
            <a className="mx-2 hidden cursor-pointer transition hover:text-[#ff0000] lg:inline-block" href="/groups">GROUPS</a>
            <a className="mx-2 cursor-pointer transition hover:text-[#ff0000]" href="/protections">PROTECTIONS</a>
            </div><div className="mx-3 md:mx-6"><a className="relative h-[50px]" href="/"><img src="/public/assets/images/logo.png" className="animate-glow relative top-4 object-cover h-16 w-20" alt="Logo"><div className="absolute h-[10rem] w-[10rem] cursor-auto bg-app-black/70" style="top: -64px; left: -40px; z-index: -1; clip-path: polygon(90% 80%, 70% 100%, 30% 100%, 10% 80%);"></div>
            </a></div><div className="hidden sm:block"><span className="mx-2 cursor-not-allowed font-bold transition">FREE GAMES</span>
            <span className="mx-2 hidden cursor-not-allowed font-bold transition lg:inline-block">POINTS</span><span className="mx-2 hidden cursor-not-allowed font-bold xl:inline-block">MARKET</span>
            </div></div><div className="flex items-center justify-end"><a href="/login">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mx-2 h-6 w-6 text-gray-300 transition hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
            </a><a href="/login"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mx-2 h-8 w-8 text-gray-300 transition hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
            </a></div>
            </nav>
    </div>
  )
}

export default Nav
