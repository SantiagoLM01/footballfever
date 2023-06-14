import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = () => {

  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const [nightMode, setNightMode] = useState<boolean>(false)

  useEffect(() => {

    if (localStorage.getItem("theme") === "dark") {
      const body = document.querySelector("body")
      body?.classList.add("dark");
      setNightMode(true);
    }


  }, [])


  const onHandleBurgerMenu = (state = false) => {
    setBurgerMenu((_) => state)
  }

  const onHandleNightMode = () => {
    setNightMode((value) => !value)
    const body = document.querySelector("body")
    if (nightMode) {
      body?.classList.remove("dark");
      localStorage.removeItem("theme");

    } else {
      body?.classList.add("dark");
      localStorage.setItem("theme", "dark");

    }
  }

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="backdrop-blur-sm absolute top-0 left-0 w-full h-full breakContainer"></div>
        <header className="breakContainer relative">
          <div className="bg-gray-800 opacity-[.30] absolute top-0 left-0 w-full h-full"></div>
          <div className="flex justify-between text-xl container mx-auto relative px-10 md:px-0">
            <NavLink onClick={() => onHandleBurgerMenu()} className={'z-10'} to={"/"}>
              <picture>
                <source srcSet="/images/webp/FootballFever.webp" type="image/webp" />
                <img className="w-[100px] md:w-[150px]" src="/images/normal/FootballFever.png" alt="Logo FootballFever" />
              </picture>
            </NavLink>
            <div onClick={() => onHandleBurgerMenu(!burgerMenu)} className="space-y-2 md:hidden cursor-pointer my-auto relative h-8 w-8 z-10">
              <div
                className={`w-8 h-0.5 bg-green-200 absolute ${burgerMenu ? 'rotate-45 duration-[350ms] ease-linear top-[41%]' : 'top-[15%] duration-[350ms] ease-linear'
                  }`}
              ></div>

              <div className={`w-8 h-0.5 bg-green-200 absolute ${burgerMenu ? 'top-[25%] opacity-0 duration-[150ms] ease-linear' : 'top-[25%] duration-[150ms] ease-linear'
                }`}></div>
              <div className={`w-8 h-0.5 bg-green-200 absolute ${burgerMenu ? '-rotate-45 duration-[350ms] top-[16%] ease-linear' : 'top-[60%] duration-[350ms] ease-linear'}`}></div>
            </div>

            <div className={` md:opacity-0 breakContainer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 + ${burgerMenu ? 'h-screen w-screen md:h-0 md:w-0 duration-[350ms] ease-linear opacity-[.95]' : 'duration-[350ms] ease-linear h-0 w-0 opacity-0'}`}></div>
            <nav className={`text-center md:flex gap-20 justify-end my-auto md:static md:flex-row md:left-full md:top-full md:-translate-x-0 md:-translate-y-0 ${burgerMenu ? 'flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'hidden'}`}>
              <NavLink onClick={() => onHandleBurgerMenu()}
                className={({ isActive }) =>
                  isActive ? "text-green-300 hover:text-green-200" : "hover:text-green-200 text-green-600"
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink onClick={() => onHandleBurgerMenu()}
                className={({ isActive }) =>
                  isActive ? "text-green-300 hover:text-green-200" : "hover:text-green-200 text-green-600"
                }
                to={"/leagues"}
              >
                Leagues
              </NavLink>


              <div onClick={onHandleNightMode} className=" cursor-pointer bg-white rounded-full w-16 h-7 px-8 relative overflow-hidden dark:bg-slate-600 mx-auto">
                <button className={`absolute top-[-10%] bg-slate-200 rounded-full transition-all duration-500 ${nightMode ? 'left-[46%] rigth-[0%] dark:bg-orange-300' : 'rigth-[0%] left-[0%]'}`}>
                  <img width={'35px'} src="/svgs/moon.svg" alt="" className="filter-hue-rotate-45" />
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
