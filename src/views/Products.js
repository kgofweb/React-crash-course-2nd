import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useAxiosGet } from '../hook/HttpRequest';

function Products() {
   const { id } = useParams();
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
   // const url = 'https://jsonplaceholder.typicode.com/posts/1';

   let product = useAxiosGet(url);

   // Init content
   let content = null;

   // Loading
   if(product.loading) {
      content = <Loader/>
   }

   // Fix error
   if(product.error) {
      content = <p>Oups... We have an error. Please refresh the page or try later.</p> 
   }

   // Model
   if(product.data) {
      content = 
         <React.Fragment>
            <h1 className="text-2xl font-semibold mb-3">
               { product.data.name }
            </h1>
            <div>
               <img 
                  src={ product.data.images[0].imageUrl }
                  alt={ product.data.name }
               />
            </div>
            <div className="font-semibold text-xl mb-3">
               { product.data.price } €
            </div>
            <div>
               { product.data.description }
            </div>
         </React.Fragment>
   } 
   return <div> {content} </div>
}

export default Products;