import './index.css';
import DisplayCard from "../Atoms/DisplayCard";
import React from 'react';
import useCollectproducts from './hooks/useCollectproducts';

const Products=()=>{
    const {products,error,loading}=useCollectproducts();
return(
    
    <div >

        <h2> Products </h2>
        <div className="product-page">
        {loading && <h2>Loading products ...</h2>}
        {/* {error.length>0 && <h2>{error}</h2>} */}
        {products.length>0 ? products.map((product)=>(
                <DisplayCard
                 key={product.id}
                 title={`${product.title}`}
                image={product.image}
                price = {product.price}
                 className="text"/>
            )): !loading && <h2>Non found</h2>}
    </div>
    <div>
        <h4> Dicsover More</h4>
      </div>
    </div>
    
    )
}
export default Products;