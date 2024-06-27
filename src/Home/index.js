import './index.css';
import home_image from "../Images/home_image.png";


 export function Home(){
 return(
    <div className='home'>
      <div className='home_right'>
         <p className='hometextbbold'> Light Nylon <br/> Outwear</p><br/>

         <p className='hometext'> Cuasal time <br/> NYlon and mosaic <br/>  button shirt</p>
         <br/>
         <p> Dicsover more</p>
      </div>
      <div>
      <div className='background'>
      <img src={home_image} alt='salesman'/>
      </div>
      <div  className='circle'> .</div>
      </div>
      

      <div className='homeLeft'>
        < p> New stock</p>
        < p className='price'> Special Price</p><br/>
        < p className='pink'> Pink</p>
        < p className='Arrival'>New Arrival</p>
        < p className='Trending'> Trending</p>
      </div>
      
       
    </div>

 )   
}
export default Home;
