import Navbar from "../NavBar/navbar"
import Space from "../../assets/technology/image-space-capsule-portrait.jpg"
import mobileSpace from "../../assets/technology/image-space-capsule-landscape.jpg"
import SpacePort from "../../assets/technology/image-spaceport-portrait.jpg"
import mobileSpacePort from "../../assets/technology/image-spaceport-landscape.jpg"
import Launch from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import mobileLaunch from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import "./technology.css"
import { useState, useEffect } from "react"
export default function Technology() {
  const [ship, setShip] = useState()
  const [index, setIndex] = useState(0)
  const [desktopImage, setDesktopImage] = useState()
  const [mobileImage, setMobileImage] = useState()
  useEffect(() => {
    fetch("/public/../../data.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setShip(data.technology[index])
      })
    switch (index) {
      case 0:
        setDesktopImage(Launch)
        setMobileImage(mobileLaunch)
        break
      case 1:
        setDesktopImage(SpacePort)
        setMobileImage(mobileSpacePort)
        break
      case 2:
        setDesktopImage(Space)
        setMobileImage(mobileSpace)
        break
      default:
        setDesktopImage(Launch)
        setMobileImage(mobileLaunch)
    }
  }, [index])
  return (
    <div className=' technologyBg lg:h-full sm:h-auto h-full absolute w-full'>
      <Navbar />
      {ship && (
        <div className='w-full  flex items-center lg:justify-end justify-center'>
          <div className=' lg:w-11/12 sm:w-full  flex lg:flex-row flex-col-reverse items-center lg:justify-between '>
            <div className=''>
              <h1 className=' mt-[80px] lg:text-[28px] sm:text-[20px] text-[16px]  font-extralight lg:relative absolute lg:left-[-30px]  sm:left-[60px] left-[125px] sm:top-5 top-[75px] sm:mb-[120px] mb-[30px]'>
                <span className='light-white mr-3 font-normal'>0 3</span>SPACE
                LAUNCH 101 CREW
              </h1>
              <div className='flex lg:w-[630px] lg:flex-row flex-col lg:items-left items-center justify-between'>
                <div className='flex lg:flex-col lg:h-[303px] lg:w-auto sm:w-[210px] w-[152px] justify-between bellefair lg:text-[32px] sm:text-[24px] lg:mb-0 sm:mb-8'>
                  <span
                    className={`lg:w-[80px] lg:h-[80px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  lg:p-4 sm:p-3 p-2  border text-center rounded-full cursor-pointer hover:bg-white hover:text-black ${
                      index === 0 ? "focused" : ""
                    }`}
                    onClick={() => setIndex(0)}
                  >
                    1
                  </span>
                  <span
                    className={`lg:w-[80px] lg:h-[80px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] sm:mb-0 mb-6  lg:p-4 sm:p-3 p-2  border text-center rounded-full cursor-pointer hover:bg-white hover:text-black ${
                      index === 1 ? "focused" : ""
                    } `}
                    onClick={() => setIndex(1)}
                  >
                    2
                  </span>
                  <span
                    className={`lg:w-[80px] lg:h-[80px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]   lg:p-4 sm:p-3 p-2  border text-center rounded-full cursor-pointer hover:bg-white hover:text-black ${
                      index === 2 ? "focused" : ""
                    } `}
                    onClick={() => setIndex(2)}
                  >
                    3
                  </span>
                </div>
                <div className='lg:w-[470px] sm:w-[458px] flex flex-col justify-center lg:items-start items-center'>
                  <h1 className='sm:text-[16px] text-[14px]'>
                    THE TERMINOLOGY...
                  </h1>
                  <h1 className='lg:text-[56px] sm:text-[40px] text-[24px] bellefair'>
                    {ship.name.toUpperCase()}
                  </h1>
                  <p className='text-[#D0D6F9] lg:text-[18px] sm:text-[16px] text-[15px]  lg:w-[444px] sm:w-[458px] w-[327px] barlow lg:text-left text-center lg:mb-0 sm:mb-10'>
                    {ship.description}
                  </p>
                </div>
              </div>
            </div>
            <div className=' lg:w-auto sm:w-full'>
              <img
                src={desktopImage}
                alt='ship'
                className=' relative bottom-[-100px] lg:block hidden'
              ></img>
              <img
                src={mobileImage}
                alt='ship'
                className='lg:hidden mt-[200px]  mb-10 sm:w-full'
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
