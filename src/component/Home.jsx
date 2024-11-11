import NavBar from "./NavBar";
import HomeBody from './HomeBody'
import ScrollDown from "./ScrollDown";
const Home = () =>{
return(
    <div  className=" bg-cover bg-center h-[100vh] grid relative scroll-smooth">
       <NavBar></NavBar>
       <HomeBody></HomeBody>
       <a href="#info"><ScrollDown></ScrollDown></a>
    </div>
)
}

export default Home;