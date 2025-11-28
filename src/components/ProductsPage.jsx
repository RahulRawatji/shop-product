
import sampleData from "../../data/sampleData.json";
import Header from "./Header";
import ProductList from "./ProductList";

export default function ProductPage() {
    const { productGroupings, navigation } = sampleData;
    console.log(navigation)
    return <>
        <Header />
        <ProductList data={productGroupings} />
    </>
}