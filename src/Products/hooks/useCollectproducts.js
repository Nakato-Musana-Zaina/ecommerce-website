import {getProducts} from "../utils"
import {useEffect, useState} from "react"

 function useCollectproducts(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('')
    const[loading, setloading] = useState(false);

useEffect(()=> {
    const fetchProducts = async()=>{
        try{
            setloading(true);
            const result = await getProducts();
            // console.log({result});

            setProducts(result)
            setloading(false);
            

        }
        catch(error){
            setError(`Error: ${error.message}`)
            setloading(false);
        }
    }
    fetchProducts();
},
[]);

return{products,error,loading}

};
export default useCollectproducts;