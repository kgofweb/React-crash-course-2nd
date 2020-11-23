import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosGet = (url) => {
   // State
   const [request, setRequest] = useState({
      loading: false,
      data: null,
      error: false
   });

   useEffect(() => {
      // Set loading to true
      setRequest({
         loading: true,
         data: null,
         error: false
      });

      // Send Request
      axios.get(url)
         .then(res => {
            setRequest({
               loading: false,
               data: res.data,
               error: false
            });
         })
         .catch(() => {
            setRequest({
               loading: false,
               data: null,
               error: true
            });
         });
   }, [url]);

   return request;
}