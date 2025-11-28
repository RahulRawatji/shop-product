export default function ProductCard({ productInfo, idx }) {
    console.log(productInfo, idx)
    const { copy, colorwayImages, prices, productType ,displayColors} = productInfo[0] || {};
    return <>
        <div className="flex flex-col justify-center items-start border rounded-md m-2 w-[280px] md:w-[240px] md:h-[410px] overflow-hidden">
            <div className="bg-white flex justify-center">
                <img src={colorwayImages.portraitURL} title={copy.title} />
            </div>
            <div className="p-4">
                <p className="text-red-300 text-xs">{productType}</p>
                <p className="font-semibold text-ellipsis truncate overflow-hidden">{copy?.title}</p>
                <span className="text-xs text-ellipsis truncate overflow-hidden w-[70%]">{copy?.subTitle}</span>
                <p>{prices.currentPrice}</p>
            </div>
        </div>
    </>
}