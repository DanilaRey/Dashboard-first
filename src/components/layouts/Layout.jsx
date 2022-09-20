import { useContext, useState } from "react";
import {  Route, Routes, Navigate } from "react-router-dom";
import dashboardRoutes from '../../routes';
import FixedPlugin from "../FixedPlugin/FixedPlugin";
import Header from '../Navbar/Header';
import sidebarImg from '../../assets/img/sidebar-2.jpg';
import Sidebar from '../../components/Sidebar/Sidebar';
import { AuthContext } from "../../context";
import Footer from "../Footer/Footer";


const Layout = () => {
  const [image, setImage] = useState(sidebarImg);
  const [hasImage, setHasImage] = useState(true)
  const [color, setColor] = useState("black");
  const {isAuth, setIsAuth} = useContext(AuthContext)

  return (
    
    <>   
  <Sidebar routes={dashboardRoutes} image={hasImage ? image : ""} color={color} id="sidebar__id"/>
    <div className='main__panel'>
    <Header />
        <div className='main__section'>
        <Sidebar routes={dashboardRoutes} image={hasImage ? image : ""} color={color} id="sidebar__id"/>
          <Routes>
           {dashboardRoutes.map((route, key) => 
             <Route
               element={route.element}
               path={route.path}
               name={route.name}
               key={key}
             />
           )}
           <Route
            path='*'
            element={<Navigate to='/dashboard' replace/>}
           />
          </Routes>
          <FixedPlugin
            color={color}
            setColor={(color) => setColor(color)}
            hasImage={hasImage}
            setHasImage={() => setHasImage(!hasImage)}
            image={image}
            setImage={(image) => setImage(image)}
          />
          <Footer/> 
        </div>
    </div>

    </>
    
  )
}
  


export default Layout