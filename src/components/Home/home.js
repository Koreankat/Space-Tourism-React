import Navbar from "../NavBar/navbar"
import "./home.css"

export default function Home() {
  return (
    <div className='menuBg h-full absolute w-full'>
      <Navbar />
      <div className='flex items-center justify-center mt-[200px]'>
        <div className='flex justify-between items-end w-4/5'>
          <div className='w-[450px]'>
            <h1 className=' font-thin text-[28px]'>
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className='bellefair text-[150px]'>SPACE</h1>
            <p className='txt text-[18px]'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <a
            href='/destination'
            className='w-[274px] h-[274px] bg-white rounded-full text-black flex items-center justify-center text-[32px] bellefair cursor-pointer rotateY'
          >
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  )
}
