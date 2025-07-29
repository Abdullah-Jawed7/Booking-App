import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"
import {useState} from "react"
function Hotel() {
  const [slideNumber , setSlideNumber] = useState(0)
  const [open , setOpen] = useState(false)
  const photos = [
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/612966938.jpg?k=6360257ba784391efd0055d1f3595b1f6335f564a8ab758869919cef1242a1da&o="},

  ]

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  return (
    <div>
      <Navbar/>
      <Header type={"list"}/>
      <div className="hotelContainer flex justify-center mt-5">
       {open && <div className="slider"></div>}
        <div className="hotelWrapper w-full max-w-5xl flex flex-col justify-center gap-2.5 relative">
          <button className="absolute top-2.5 right-0 border-none py-2.5 px-5 bg-[#0071c2] text-white font-bold rounded-sm cursor-pointer">Reserve or Book Now!</button>
          <div className="hotelTitle text-2xl font-bold">Grand Hotel</div>
          <div className="hotelAddress text-xs flex items-center gap-2.5">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-medium ">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight text-[#008009] font-medium">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          
          <div className="hotelImages flex flex-wrap justify-between ">
            {photos?.map((photo , i) => (
              <div className="hotelImgWrapper w-1/3 p-1 ">
                <img onClick={()=> handleOpen(i)} src={photo.src} alt="" className="hotelImg w-full object-cover" />
              </div>
          ))}
          </div>
          <div className="hotelDetails flex justify-between gap-5 mt-5">
            <div className="hotelDetailText flex-grow-3 shrink basis-0">
              <h1 className="hotelTitle font-bold">Stay in the heart of karachi</h1>
              <p className="hotelDesc text-sm mt-5">
              Harum cumque autem libero impedit iure, eius eaque enim consequuntur natus quidem incidunt dicta totam cum deleniti temporibus excepturi corrupti, aliquid inventore magni modi. Dolor quo totam exercitationem corporis cupiditate.
              Facilis harum deserunt, illo labore optio veniam quos porro ea, id voluptates nostrum esse accusamus neque in aspernatur excepturi iusto, accusantium perspiciatis quasi pariatur. Provident, illo. Laborum numquam inventore esse!
              Ipsum facere illo autem sit molestiae corrupti, illum harum saepe doloribus cupiditate a similique unde quo? Tempora temporibus ea minus laboriosam fuga fugiat molestias, hic consectetur aspernatur ullam perspiciatis debitis?
              Placeat tempora voluptas ducimus optio expedita excepturi natus ullam veritatis, harum cum quasi consectetur corporis. Consequatur doloribus excepturi dolores? Voluptatibus minima, ipsa amet non a ea quam ex reprehenderit vitae.
              Neque enim nam quam temporibus ipsum, illum mollitia labore cum? Aperiam, molestiae ex? Rem, suscipit facilis adipisci debitis quidem, doloribus tempore rerum dolorem hic temporibus nisi maiores perspiciatis provident dignissimos.
              Blanditiis exercitationem pariatur odit officia nulla vel quisquam ipsam libero enim, deserunt nihil, alias dicta. Maiores consectetur tempora, amet necessitatibus quasi enim. Laudantium eveniet temporibus, dignissimos corrupti necessitatibus cupiditate numquam.</p>
            </div>
            <div className="hotelDetailPrice flex-1 bg-[#ebf3ff] p-5 flex flex-col gap-5">
              <h1 className=" font-bold text-lg text-[#555]">Perfect for a 9-night stay!</h1>
              <span className="text-sm">
                located in the real heart of karachi ,this property has an excellent location score of 9.8
              </span>
              <h2 className="font-light">
                <b className="font-black">$945</b> (9 nights)
              </h2>
              <button className="border-none py-2.5 px-5 bg-[#0071c2] text-white font-bold cursor-pointer rounded-sm">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
        <MailList/>
        <Footer/>
   
    </div>
  )
}

export default Hotel
