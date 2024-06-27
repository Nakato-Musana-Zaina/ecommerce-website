import './index.css'

const DisplayCard=({title,image, price, category}) =>{
    return(
        <div>
            <img src={image} alt={title}/> 
            <h5>
               {title}
            </h5>
            <h5> {price}</h5>
            <h5> {category}</h5>
        </div>
        
    )
}

export default DisplayCard;