import { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useLocation } from "react-router";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state?.destination);
  const [date, setDate] = useState(location?.state?.date);
  const [options, setOptions] = useState(location?.state?.options);
  const [openDate,setOpenDate] = useState(false)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-1 bg-[#febb02] p-2.5 rounded-xl sticky top-2.5 ">
            <h1 className="text-xl text-[#555] mb-2.5">Search</h1>
            <div className="flex flex-col gap-1 mb-2.5">
              <label className="text-sm">Destination</label>
              <input className="bg-white h-8 border-none p-1" placeholder={destination} type="text" />
            </div>
            <div className="flex flex-col gap-1 mb-2.5">
              <label className="text-sm">check in date</label>
              <span className="h-8 p-1 bg-white flex items-center cursor-pointer" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
             {openDate &&  <DateRange onChange={(item)=>setDate(item.selection)} 
              minDate={new Date()}
                ranges={date}/>}
            </div>

            <div className="flex flex-col gap-1 mb-2.5">
              <label className="text-sm">Options</label>
              <div className="p-2.5">
              <div className="flex justify-between mb-2.5 text-[#555] text-sm "> 
              <span className="isOptionText">
                min price <small>per night</small>
              </span>
              <input type="text" className="w-12 bg-white border" />
            </div>
            <div className="flex justify-between mb-2.5 text-[#555] text-sm ">
              
              <span className="isOptionText">
                max price <small>per night</small>
              </span>
              <input type="text" className="w-12 bg-white border" />
            </div>
            <div className="flex justify-between mb-2.5 text-[#555] text-sm ">
              
              <span className="isOptionText">
                Adults 
              </span>
              <input type='number' min={1} className="w-12 bg-white border" placeholder={options.adult} />
            </div>
            <div className="flex justify-between mb-2.5 text-[#555] text-sm ">
              
              <span className="isOptionText">
                Children 
              </span>
              <input type='number' min={0} className="w-12 bg-white border" placeholder={options.children} />
            </div>
            <div className="flex justify-between mb-2.5 text-[#555] text-sm ">
              
              <span className="isOptionText">
                Rooms
              </span>
              <input type='number' min={1} className="w-12 bg-white border" placeholder={options.room} />
            </div>
            </div>
            </div>
          <button className="p-2.5 bg-[#0071c2] text-white border-none w-full font-medium cursor-pointer ">Search</button>
          </div>
          <div className="flex-grow-[3] shrink basis-0"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
