import React from 'react';
import Loader from '../components/Loader';
import ProductCards from '../components/ProductCards';
// Our Hook
import { useAxiosGet } from '../hook/HttpRequest';

const Home = () => {
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=6`;

   // Init products
   let products = useAxiosGet(url);

   // Init content
   let content = null;

   // Loading
   if(products.loading) {
      content = <Loader/>
   }

   // Fix error
   if(products.error) {
      content = <p>Oups... We have an error. Please refresh the page or try later.</p> 
   }

   // Model
   if(products.data) {
      content =
         products.data.map((product) => 
            <div key={product.id}>
               <ProductCards product = {product}/>
            </div>
         );
   }

   return (
      <React.Fragment>
         <h1 className='font-bold mb-4'>Home</h1>
         { content }
      </React.Fragment>
   )
}

export default Home;