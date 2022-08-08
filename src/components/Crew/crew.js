import Navbar from "../NavBar/navbar"
import "./crew.css"
import { useEffect, useState, useRef } from "react"
import Douglas from "../../assets/crew/image-douglas-hurley.png"
import Ansari from "../../assets/crew/image-anousheh-ansari.png"
import Mark from "../../assets/crew/image-mark-shuttleworth.png"
import Victor from "../../assets/crew/image-victor-glover.png"

export default function Crew() {
  const [person, setPerson] = useState()
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState()

  useEffect(() => {
    fetch("/public/../../data.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPerson(data.crew[index])
      })
    switch (index) {
      case 0:
        setImage(Douglas)
        break
      case 1:
        setImage(Mark)
        break
      case 2:
        setImage(Victor)
        break
      case 3:
        setImage(Ansari)
        break
      default:
        setImage(Douglas)
    }
  }, [index])
  return (
    <div className='crewBg lg:h-full sm:h-auto h-full absolute w-full'>
      <Navbar />
      {person && (
        <div className='w-full  flex items-center justify-center  '>
          <div className=' w-3/4  flex lg:flex-row sm:flex-col flex-col-reverse lg:items-end items-center justify-between'>
            <div className='mt-[80px]'>
              <h1 className='lg:text-[28px] sm:text-[20px] text-[16px]  font-extralight sm:relative absolute lg:left-[-30px]  sm:left-[-90px] left-[125px] top-[75px] sm:mb-[120px] mb-[30px]'>
                <span className='light-white mr-3 font-normal'>0 2</span> MEET
                YOUR CREW
              </h1>
              <div className='sm:block flex flex-col-reverse'>
                <div>
                  <h1 className='bellefair lg:text-[32px] sm:text-[24px] text-[16px] lg:text-left text-center text-[#ffffff49]'>
                    {person.role.toUpperCase()}
                  </h1>
                  <h1 className='bellefair lg:text-[56px] sm:text-[40px] text-[24px] lg:text-left text-center'>
                    {person.name.toUpperCase()}
                  </h1>
                  <p className='text-[#D0D6F9] lg:text-[18px] sm:text-[16px] text-[15px] lg:w-[444px] sm:w-[458px] w-[327px] lg:text-left text-center barlow mt-4'>
                    {person.bio}
                  </p>
                </div>
                <div className=' lg:block flex  items-center justify-center'>
                  <div className='flex lg:w-[132px] w-[88px] justify-between lg:mt-[120px] sm:mt-[60px] mb-[48px]'>
                    <div
                      className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] cursor-pointer rounded-full  ${
                        index === 0 ? "clicked" : "notClicked"
                      }  `}
                      onClick={() => setIndex(0)}
                    ></div>
                    <div
                      className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] cursor-pointer rounded-full  ${
                        index === 1 ? "clicked" : "notClicked"
                      } `}
                      onClick={() => setIndex(1)}
                    ></div>
                    <div
                      className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] cursor-pointer rounded-full  ${
                        index === 2 ? "clicked" : "notClicked"
                      } `}
                      onClick={() => setIndex(2)}
                    ></div>
                    <div
                      className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] cursor-pointer rounded-full  ${
                        index === 3 ? "clicked" : "notClicked"
                      } `}
                      onClick={() => setIndex(3)}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sm:block flex items-center flex-col '>
              <img
                src={image}
                alt='moon'
                className=' lg:w-[445px] sm:w-[350px] w-[170px] lg:mb-0 lg:absolute relative mt-[120px] lg:bottom-0 lg:right-[120px]'
              ></img>
              <hr className='w-[240px] sm:hidden ' />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
