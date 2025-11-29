import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function ProductCard({ productInfo, idx }) {
    const { copy, colorwayImages, prices, productType ,displayColors} = productInfo[0] || {};
    const favList = JSON.parse(localStorage.getItem('favItem')) ||[];
    const [favItem, setFavItems] = useState(favList)

    function addToFavHandler(){
        if(favList.includes(productInfo[0].productCode)){
            const removedItemList = favList.filter(item=>item!=productInfo[0].productCode);
              localStorage.setItem('favItem',JSON.stringify([...removedItemList]))
             setFavItems(prev=>[...removedItemList])
        }else{
              localStorage.setItem('favItem',JSON.stringify([...favItem,productInfo[0].productCode]))
            setFavItems(prev=>[...prev,productInfo[0].productCode])
        } 
    }
    
    localStorage.setItem('favItem',JSON.stringify([...favItem]))
    return <>
        <div className="flex flex-col justify-center items-center w-[280px] md:w-[240px] md:h-[410px] lg:w-full lg:h-full overflow-hidden">
            <div className="bg-white flex justify-center relative">
                <img src={colorwayImages.portraitURL} title={copy.title} />
                <FaRegHeart className={`absolute right-8 top-4 hover:scale-110 cursor-pointer ${favItem.includes(productInfo[0].productCode) ?"text-red-500": ""}`} onClick={addToFavHandler}/>
            </div>
            <div className="w-full pl-1 flex items-start flex-col h-full">
                <p className="text-red-300 text-xs">{productType}</p>
                <p className="w-[92%] font-semibold text-ellipsis truncate overflow-hidden">{copy?.title}</p>
                <span className="text-xs text-ellipsis truncate overflow-hidden w-[70%]">{copy?.subTitle}</span>
                <p>₹ {prices.currentPrice}</p>
            </div>
        </div>
    </>
}