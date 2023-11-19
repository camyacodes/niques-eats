import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useProductReducer } from '../../utils/reducers';
import "../../styles/admin.css"

function ProductList({  }) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
  
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  
  useEffect(() => {
    if(data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);
  
  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
  
    return state.products.filter(product => 
      product.category._id === currentCategory);
  }

  return (
    <div >
      {loading ? <img src={spinner} alt="loading" /> : null}
      <table className='table'>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Image</th>
                    <th>Description</th>
                    {/* <th>Category</th> */}
                    <th>Actions</th>
                </tr>
        </thead>

        <tbody>
       {filterProducts().map(product=> {
           return <tr>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td><img id="item-image" src={`/images/${product.image}`} alt="products images"/></td>
               <td id="description">{product.description}</td>
               {/* <td>{product.menu}</td> */}
               <td>
                   <i className='fa fa-trash m-2'></i>
                   <i className='fa fa-edit m-2'></i>
               </td>

           </tr>
       })}

        </tbody>


      </table>
    </div>
  );
}

export default ProductList;
