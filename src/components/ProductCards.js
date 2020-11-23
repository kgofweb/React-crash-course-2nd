import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCards(props) {
   return (
      <div className="border mb-4 rounded overflow-hidden">
         <Link to={`/products/${props.product.id}`}>
            <div
               style={ { 'backgroundImage': `url('${props.product.images[0].imageUrl}')` } }
               className="w-full h-64 bg-cover bg-blue"
            >
            </div>
         </Link>
         <div className="p-3">
            <h3 className="font-semibold text-xl mb-3">
               <Link to={`/products/${props.product.id}`}>
                  { props.product.name }
               </Link>
            </h3>
            <p className="text-x mb-3">
               { props.product.price } €
            </p>
            <p className="text-x mb-3">
               { props.product.description } €
            </p>
            <button className="flex justify-center bg-blue-500 text-white p-2 w-full">
               <Link to={`/products/${props.product.id}`}>
                  View more
               </Link>
            </button>
         </div>
      </div>
   )
}