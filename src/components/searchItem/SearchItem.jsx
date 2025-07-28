

const SearchItem = () => {
  return (
    <div className="searchItem border border-gray-300 p-2.5 rounded-sm flex justify-between gap-5 mb-5">
        <img className="siImg w-48 h-48 object-cover" src="https://cf.bstatic.com/xdata/images/hotel/square600/711036812.webp?k=994a38ba5cc8f0eb874d605e06d179f5743e1c31f8535095f03a87d937933720&o=" alt="" />
      <div className="siDes flex flex-col gap-2.5 flex-grow-2 shrink basis-0  ">
        <h1 className="siTitle text-lg text-[#0071c2]">Tower Street Apartments </h1>
        <span className="siDistance text-xs">500m from center</span>
        <span className="siTaxiOp text-sm bg-[#008009] text-white w-max p-1 rounded-md ">Free airport taxi</span>
        <span className="siSubTitle text-xs font-bold ">
            Studio Apartment with Air conditioning 
        </span>
        <span className="siFeatures text-xs">
            Entire studio . 1 bathroom . 21m<super>2</super> ! full bed
        </span>
        <span className="siCancelOp text-xs text-[#008009] font-bold ">Free cancellation</span>
        <span className="siCancelOpSubtitle text-xs text-[#008009]">
            You can cancel later , so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex-1 flex flex-col justify-between">
        <div className="siRating flex justify-between">
            <span className="font-medium">Excellent</span>
            <button className="bg-[#003580] text-white p-1 font-bold border-none">8.9</button>
        </div>
        <div className="siDetailText text-right flex flex-col gap-5 ">
            <span className="siPrice text-2xl">$123</span>
            <span className="siTaxiOp text-xs text-gray-400">Includes taxes and fees</span>
            <button className="siCheckBtn bg-[#0071c2] text-white font-bold py-2.5 px-1 border-none cursor-pointer rounded-sm" >See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
