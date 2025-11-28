export default function ProductCard({ productInfo, idx }) {
    const { copy, colorwayImages, prices, productType ,displayColors} = productInfo[0] || {};

    console.log(productInfo)
    return <>
        <div className="flex flex-col justify-center items-center w-[280px] md:w-[240px] md:h-[410px] lg:w-full lg:h-full overflow-hidden">
            <div className="bg-white flex justify-center">
                <img src={colorwayImages.portraitURL} title={copy.title} />
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