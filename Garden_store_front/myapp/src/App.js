import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './Pages/MainPage/MainPage'
import ProductsListPage from './Pages/ProductsListPage/ProductsListPage'
import SaleListPage from './Pages/SaleListPage/SaleListPage'
import BasketPage from './Pages/BasketPage/BasketPage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import CategoriesListPage from './Pages/CategoriesListPage/CategoriesListPage'
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import ProductInfoPage from './Pages/ProductInfoPage/ProductInfoPage'



function App() {
  return (
    <div>
        <div className='container'>
            <Header />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/products' element={<ProductsListPage />} />
                    <Route path='/products/:id' element={<ProductInfoPage />} />
                    <Route path='/sale' element={<SaleListPage />}/>
                    <Route path='/basket' element={<BasketPage />}/>
                    <Route path='/category' element={<CategoriesListPage />}/>
                    <Route path='/category/:id' element={<CategoryPage />}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            <Footer />
        </div>
    </div>
  )
}

export default App