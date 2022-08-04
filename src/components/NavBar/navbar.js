import { useState } from "react"
import "./navbar.css"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import Star from "../../assets/shared/logo.svg"

export default function Navbar() {
  const [icon, setIcon] = useState(true)
  const [nav1, setNav1] = useState(true)
  const [nav2, setNav2] = useState(false)
  const [nav3, setNav3] = useState(false)
  const [nav4, setNav4] = useState(false)
  let navi1
  let navi2
  let navi3
  let navi4

  if (nav1) {
    navi1 += " navi"
    navi2 -= " navi"
    navi3 -= " navi"
    navi4 -= " navi"
  } else if (nav2) {
    navi1 -= " navi"
    navi2 += " navi"
    navi3 -= " navi"
    navi4 -= " navi"
  } else if (nav3) {
    navi1 -= " navi"
    navi2 -= " navi"
    navi3 += " navi"
    navi4 -= " navi"
  } else if (nav4) {
    navi1 -= " navi"
    navi2 -= " navi"
    navi3 -= " navi"
    navi4 += " navi"
  }

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
    <div className={`flex justify-end mt-[20px]`}>
      <div className={` desktopNav flex items-center`}>
        <img src={Star} alt='star' className='absolute left-5 top-[25px]'></img>
        <div className='lg:w-[473px] lg:h-[1px] lg:block hidden bg-[#ffffff1a] left-[170px] top-[50px] absolute z-50'></div>
        <nav className='nav lg:w-[51.875rem] sm:w-[28.125rem] flex justify-between items-center lg:pr-[130px] lg:pl-[130px] '>
          <a
            href='/'
            className={`nav-item ${navi1}`}
            onClick={() => {
              setNav1(true)
              setNav2(!nav2)
              setNav3(!nav3)
              setNav4(!nav4)
            }}
          >
            00 HOME
          </a>
          <a
            href='/destination'
            className={`nav-item ${navi2}`}
            onClick={() => {
              setNav1(!nav1)
              setNav2(true)
              setNav3(!nav3)
              setNav4(!nav4)
            }}
          >
            01 DESTINATION
          </a>
          <a
            href='/crew'
            className={`nav-item ${navi3}`}
            onClick={() => {
              setNav1(!nav1)
              setNav2(!nav2)
              setNav3(true)
              setNav4(!nav4)
            }}
          >
            02 CREW
          </a>
          <a
            href='/technology'
            className={`nav-item ${navi4}`}
            onClick={() => {
              setNav1(!nav1)
              setNav2(!nav2)
              setNav3(!nav3)
              setNav4(true)
            }}
          >
            03 TECHNOLOGY
          </a>
          <span className='nav-indicator'></span>
        </nav>
      </div>
      <div className={`mobileNav`}>
        <HiMenu
          className={`hamburger ${iconOn} text-[24px] cursor-pointer absolute right-2`}
          onClick={() => {
            setIcon(false)
            console.log(iconOn)
          }}
        />
        <nav className={`${iconOff}`}>
          <AiOutlineClose
            onClick={() => {
              setIcon(true)
              console.log(iconOff)
            }}
            className={`text-[24px] cursor-pointer absolute right-2`}
          />
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
        </nav>
      </div>
    </div>
  )
}
