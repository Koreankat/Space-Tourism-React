import { useState } from "react"
import "./navbar.css"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

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
    <div className={`nav`}>
      <div className={`lg:w-[86.563rem] sm:w-[45.563rem] desktopNav`}>
        <a href='/'>00 HOME</a>
        <a href='/destination'>01 DESTINATION</a>
        <a href='/crew'>02 CREW</a>
        <a href='/technology'>03 TECHNOLOGY</a>
      </div>
      <div className={` mobileNav`}>
        <HiMenu
          className={`hamburger ${iconOn} text-[24px] cursor-pointer absolute right-2`}
          onClick={() => {
            setIcon(false)
            console.log(iconOn)
          }}
        />
        <div className={`${iconOff}`}>
          <AiOutlineClose
            onClick={() => {
              setIcon(true)
              console.log(iconOff)
            }}
            className={`text-[24px] cursor-pointer absolute right-2`}
          />
          <a href='/'>00 HOME</a>
          <a href='/destination'>01 DESTINATION</a>
          <a href='/crew'>02 CREW</a>
          <a href='/technology'>03 TECHNOLOGY</a>
        </div>
      </div>
    </div>
  )
}
