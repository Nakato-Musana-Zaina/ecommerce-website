import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import './index.css'; 


function Navbar(){
    return(
        <div className="navbar">
            <nav>
                <span ClassName="logo">  Supro.</span>
                <ul>
                
                    <li> Shop</li>
                    <li>Collection </li>
                    <li>Pages </li>
                    <li>Blog </li>
                    <li>Contact </li>
                </ul>
                <div className="icons">
                    <FaSearch />{"       "}
                    <BsHeart />{"       "}
                    <BsFillPersonFill />{"       "}
                    <BsCart3 /> 
                     
                </div>
                
            </nav>
        </div>
    )
}
export default Navbar