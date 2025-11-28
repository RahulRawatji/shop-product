import FilterDrawer from "./FilterDrawer";
import ProductCard from "./ProductCard";

export default function ProductList({data}){

    return <>
        <div className="m-auto gap-2 flex flex-wrap justify-center items-center md:grid md:grid-cols-3 lg:w-[96%] h-90dvh overflow-scroll ">
            {data.map((item,idx)=><ProductCard productInfo={item.products} idx={idx}/>)}
        </div>
         <FilterDrawer/>
    </>
}