
import { useStore } from "../store/store";
import CategorySection from "./CategorySection";

import ProductList from "./ProductList";

export default function ProductPage() {
    const { storeTempData, categoryData } = useStore(state=>state);

    return <>
        <CategorySection data={categoryData} />
        <ProductList data={storeTempData} />
       
    </>
}