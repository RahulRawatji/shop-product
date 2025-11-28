import { Header } from 'antd/es/layout/layout'
import './App.css'
import ProductPage from './components/ProductsPage'

function App() {
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
