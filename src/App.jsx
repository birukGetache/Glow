
import Footer from './component/Footer'
import Home from './component/Home'
import Info from './component/HomeBody/Info'
import Team from './component/Team'
import About from './component/About/About'
import TestimonialComponent from './component/TestimonialComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsAndServices from './component/ProductsAndServices'
import ShopPage from './component/Shop'
import GalleryPage from './component/Gallery'
import ContactUsPage from './component/Contact'
import Impact from './component/Impact'
function App() {
  const routes = [
    { path: '/', component:   <>
      <Home></Home>
      <Info></Info>
      <Impact></Impact>
      <TestimonialComponent></TestimonialComponent>
      <Team></Team>

        </> },
    { path: '/about', component:  <About></About> },
    { path: '/services', component: <ProductsAndServices></ProductsAndServices>  },
    { path: '/shop', component: <ShopPage /> },
    { path: '/gallery', component: <GalleryPage /> },
    { path: '/contact', component: <ContactUsPage /> },
  ];
  return (
    <Router>
    <div>
      {/* Map through the routes array to dynamically generate the Routes */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      
      {/* Footer */}
      <Footer />
    </div>
  </Router>
  )
}

export default App
