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
        <div className='w-full  flex  justify-center  '>
          <div className=' w-3/4  flex lg:flex-row flex-col items-end justify-between'>
            <div className='mt-[80px]'>
              <h1 className='lg:text-[28px] sm:text-[20px] text-[16px]  font-extralight relative lg:left-[-30px] sm:left-[-180px] sm:mb-[120px] mb-[30px]'>
                <span className='light-white mr-3 font-normal'>0 2</span> MEET
                YOUR CREW
              </h1>
              <div>
                <h1 className='bellefair text-[32px] text-[#ffffff49]'>
                  {person.role.toUpperCase()}
                </h1>
                <h1 className='bellefair text-[56px]'>
                  {person.name.toUpperCase()}
                </h1>
                <p className='text-[#D0D6F9] text-[18px] w-[444px] barlow mt-4'>
                  {person.bio}
                </p>
                <div className='flex w-[132px] justify-between mt-[120px] mb-[48px]'>
                  <div
                    className={`w-[15px] h-[15px] cursor-pointer rounded-full  ${
                      index === 0 ? "clicked" : "notClicked"
                    }  `}
                    onClick={() => setIndex(0)}
                  ></div>
                  <div
                    className={`w-[15px] h-[15px] cursor-pointer rounded-full nav-Bg ${
                      index === 1 ? "clicked" : "notClicked"
                    } `}
                    onClick={() => setIndex(1)}
                  ></div>
                  <div
                    className={`w-[15px] h-[15px] cursor-pointer rounded-full nav-Bg ${
                      index === 2 ? "clicked" : "notClicked"
                    } `}
                    onClick={() => setIndex(2)}
                  ></div>
                  <div
                    className={`w-[15px] h-[15px] cursor-pointer rounded-full nav-Bg ${
                      index === 3 ? "clicked" : "notClicked"
                    } `}
                    onClick={() => setIndex(3)}
                  ></div>
                </div>
              </div>
            </div>

            <img
              src={image}
              alt='moon'
              className=' lg:w-[445px] sm:w-[300px] w-[170px] lg:mb-0 relative bottom-[-60px]'
            ></img>
          </div>
        </div>
      )}
    </div>
  )
}
