
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import ProductDetail from './Pages/ProductDetail';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import ListPage from './Pages/ListPage';

function App() {
  
  return (
    <> 
      <div className="flex flex-col min-h-screen bg-[#e7e7e4]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list/:id" element={<ListPage />} />
            <Route path="/product" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
