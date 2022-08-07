import Navbar from "../NavBar/navbar"
import Moon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"
import "./destination.css"
import { useEffect, useState } from "react"

export default function Destination() {
  const [destination, setDestination] = useState(null)
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch("/public/../../data.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDestination(data)
      })
    switch (index) {
      case 0:
        setImage(Moon)
        break
      case 1:
        setImage(Mars)
        break
      case 2:
        setImage(Europa)
        break
      case 3:
        setImage(Titan)
        break
      default:
        setImage(Moon)
    }
  }, [index])
  return (
    <div className='destinationBg lg:h-full sm:h-auto h-full absolute w-full'>
      <Navbar />
      {destination && (
        <div className='w-full flex  items-center justify-center '>
          <div className='mt-[80px] w-3/4  flex lg:flex-row flex-col lg:items-end items-center justify-between'>
            <div>
              <h1 className='lg:text-[28px] sm:text-[20px] text-[16px]  font-extralight relative lg:left-[-30px] sm:left-[-180px] sm:mb-[80px] mb-[20px]'>
                <span className='light-white mr-3 font-normal'>0 1</span> PICK
                YOUR DESTINATION
              </h1>
              <img
                src={image}
                alt='moon'
                className=' lg:w-[445px] sm:w-[300px] w-[170px] lg:mb-0 sm:mb-8'
              ></img>
            </div>
            <div className='lg:w-[445px] sm:w-[573px] w-[327px] lg:block flex flex-col items-center'>
              <div className='flex w-[285.5px] justify-between text-[16px] mb-3'>
                <h1
                  className={`cursor-pointer nav-item ${
                    index === 0 ? "navi" : ""
                  }`}
                  onClick={() => setIndex(0)}
                >
                  MOON
                </h1>
                <h1
                  className={`cursor-pointer nav-item ${
                    index === 1 ? "navi" : ""
                  }`}
                  onClick={() => setIndex(1)}
                >
                  MARS
                </h1>
                <h1
                  className={`cursor-pointer nav-item ${
                    index === 2 ? "navi" : ""
                  }`}
                  onClick={() => setIndex(2)}
                >
                  EUROPA
                </h1>
                <h1
                  className={`cursor-pointer nav-item ${
                    index === 3 ? "navi" : ""
                  }`}
                  onClick={() => setIndex(3)}
                >
                  TITAN
                </h1>
              </div>
              <h1 className='lg:text-[100px] sm:text-[80px] text-[56px]  bellefair'>
                {destination.destinations[index].name.toUpperCase()}
              </h1>
              <p className='lg:text-[18px] sm:text-[16px] text-[15px] lg:text-left text-center font-extralight barlow text-[#D0D6F9] mb-16'>
                {" "}
                {destination.destinations[index].description}
              </p>
              <hr className='hr lg:mb-4 sm:mb-10' />

              <div className='flex sm:flex-row flex-col items-center sm:mt-0 mt-10 lg:mb-0 sm:mb-8'>
                <div className='flex flex-col sm:mr-20 sm:mb-0 mb-8'>
                  <h1 className='text-[14px] text-[#D0D6F9] sm:text-left text-center'>
                    AVG. DISTANCE
                  </h1>
                  <h1 className='bellefair text-[28px]'>
                    {destination.destinations[index].distance.toUpperCase()}
                  </h1>
                </div>
                <div className='flex flex-col '>
                  <h1 className='text-[14px] text-[#D0D6F9] sm:text-left text-center'>
                    Est. travel time
                  </h1>
                  <h1 className='bellefair text-[28px]'>
                    {destination.destinations[index].travel.toUpperCase()}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
