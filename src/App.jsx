import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ProductPage from './components/ProductsPage'
import { useStore } from './store/store'

import sampleData from "../data/sampleData.json";

function App() {
  const {productGroupings,navigation} =sampleData
  const {setStoreData, setcategoryData} = useStore(state=>state);
 
  useEffect(()=>{
    setStoreData(productGroupings);
    setcategoryData(navigation.categories);
  },[]);

  return (
    <>
    <div className='w-full'>
      <Header/>
      <ProductPage/>
      </div>
    </>
  )
}

export default App
