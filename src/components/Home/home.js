import Navbar from "../NavBar/navbar"
import "./home.css"

export default function Home() {
  return (
    <div className='menuBg lg:h-full sm:h-auto h-full absolute w-full'>
      <Navbar />
      <div className='flex items-center justify-center  lg:mt-[200px] sm:mt-[80px] mt-[130px]'>
        <div className='flex lg:justify-between justify-center lg:flex-row flex-col  lg:items-end items-center w-4/5'>
          <div className=' 2xl:min-w-[700px] sm:w-[450px] max-w-[327px] lg:mb-0 mb-[100px] lg:block flex flex-col items-center'>
            <h1 className=' font-thin 2xl:text-[56px] lg:text-[28px] sm:text-[20px] lg:text-left text-center'>
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className='bellefair 2xl:text-[300px] sm:text-[150px] text-[80px] lg:text-left '>
              SPACE
            </h1>
            <p className='txt 2xl:text-[36px] lg:text-[18px] sm:text-[16px] text-[15px] lg:w-full sm:w-[444px] lg:text-left text-center text-[#D0D6F9]'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <a
            href='/destination'
            className='2xl:min-w-[400px] 2xl:min-h-[400px] lg:w-[274px] lg:h-[274px] sm:w-[242px] sm:h-[242px] w-[150px] h-[150px] bg-white rounded-full text-black flex items-center justify-center text-[32px] bellefair cursor-pointer rotateY lg:mb-0 sm:mb-[100px]'
          >
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  )
}
