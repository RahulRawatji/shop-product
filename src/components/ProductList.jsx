import ProductCard from "./ProductCard";

export default function ProductList({data}){

    return <>
        <div className="lg:w-[50%] m-auto flex flex-wrap justify-center items-center md:grid md:grid-cols-3 ">
            {data.map((item,idx)=><ProductCard productInfo={item.products} idx={idx}/>)}
        </div>
    </>
}