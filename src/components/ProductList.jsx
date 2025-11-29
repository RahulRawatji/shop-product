import { useRef, useEffect } from "react";
import FilterDrawer from "./FilterDrawer";
import ProductCard from "./ProductCard";
import { useStore } from "../store/store";

export default function ProductList({ data }) {
    const listRef = useRef();
    const inFlightRef = useRef(false);
    const { setTempData, page, updatePage } = useStore(state => state);

    useEffect(()=>{
         setTempData();
    },[page])

    useEffect(() => {
        window.addEventListener("scroll", scrollListener, { passive: true });
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    const callHandlerRef = useRef(null);

    if (!callHandlerRef.current) {
        callHandlerRef.current = () => {
            if (inFlightRef.current) return;    
            inFlightRef.current = true;
            updatePage();
            setTimeout(() => {
                inFlightRef.current = false;
            }, 1000);
        };
    }

    function scrollListener(e) {
       
        const threshold = 150; // px before bottom to trigger
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        if (scrollTop + viewportHeight >= fullHeight - threshold) {
            callHandlerRef.current();
        }
    }

    return <>
        <div ref={listRef} className="m-auto gap-2 flex flex-wrap justify-center items-center md:grid md:grid-cols-3 lg:w-[96%] h-90dvh overflow-scroll ">
            {data.map((item, idx) => <ProductCard productInfo={item.products} idx={idx} />)}
        </div>
        <FilterDrawer />
    </>
}