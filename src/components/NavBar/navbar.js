import { useState } from "react"
import "./navbar.css"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import Star from "../../assets/shared/logo.svg"

export default function Navbar() {
  const [icon, setIcon] = useState(true)

  let iconOn = " block"
  let iconOff = " hidden"
  if (!icon) {
    iconOn -= " block"
    iconOn += " hidden"
    iconOff -= " hidden"
    iconOff += " block"
  } else {
    iconOn -= " hidden"
    iconOn += " block"
    iconOff -= " block"
    iconOff += " hidden"
  }

  return (
    <div className={`flex justify-end lg:mt-[20px] `}>
      <div className={` desktopNav flex`}>
        <img
          src={Star}
          alt='star'
          className='absolute left-5 lg:top-[25px] sm:top-[12px]'
        ></img>
        <div className=' 2xl:w-[883px] lg:w-[473px] lg:h-[1px] lg:block hidden bg-[#ffffff1a] left-[170px] top-[50px] absolute z-50'></div>
        <nav className='nav 2xl:w-[70rem] lg:w-[51.875rem] sm:w-[28.125rem] flex justify-between items-center lg:pr-[130px] lg:pl-[130px] '>
          <a href='/' className={`nav-item navi}`} onClick={() => {}}>
            00 HOME
          </a>
          <a href='/destination' className={`nav-item `} onClick={() => {}}>
            01 DESTINATION
          </a>
          <a href='/crew' className={`nav-item `} onClick={() => {}}>
            02 CREW
          </a>
          <a href='/technology' className={`nav-item `} onClick={() => {}}>
            03 TECHNOLOGY
          </a>
          <span className='nav-indicator'></span>
        </nav>
      </div>
      <div className={`mobileNav `}>
        <img
          src={Star}
          alt='star'
          className='absolute left-5 top-[25px] w-[40px] h-[40px]'
        ></img>
        <HiMenu
          className={`hamburger ${iconOn} w-[30px] h-[30px] cursor-pointer absolute right-5 top-[25px]`}
          onClick={() => {
            setIcon(false)
            console.log(iconOn)
          }}
        />
        <nav className={`${iconOff} nav  h-[830px]`}>
          <AiOutlineClose
            onClick={() => {
              setIcon(true)
              console.log(iconOff)
            }}
            className={`w-[30px] h-[30px] cursor-pointer absolute right-5 top-[25px] `}
          />
          <div className='flex flex-col relative top-[150px] left-[20px]'>
            <a href='/' className='nav-item'>
              00 HOME
            </a>
            <a href='/destination' className='nav-item'>
              01 DESTINATION
            </a>
            <a href='/crew' className='nav-item'>
              02 CREW
            </a>
            <a href='/technology' className='nav-item'>
              03 TECHNOLOGY
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
