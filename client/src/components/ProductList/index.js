// import React, { useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import ProductItem from '../ProductItem';
// import { QUERY_PRODUCTS } from '../../utils/queries';
// import spinner from '../../assets/spinner.gif';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
// import { idbPromise } from "../../utils/helpers";
// import { useProductReducer } from '../../utils/reducers';
// import { ADD_ORDER } from '../../utils/mutations';
// import './style.css'

// function ProductList({  }) {
//   const [state, dispatch] = useStoreContext();

//   const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   useEffect(() => {
//     if(data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products
//       });

//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//       // add else if to check if `loading` is undefined in `useQuery()` Hook
//     } else if (!loading) {
//       // since we're offline, get all of the data from the `products` store
//       idbPromise('products', 'get').then((products) => {
//         // use retrieved data to set global state for offline browsing
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: products
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterProducts() {
//     if (!currentCategory) {
//       return state.products;
//     }

//     return state.products.filter(product =>
//       product.category._id === currentCategory);
//   }

//   return (
//     <div  >
//       {state.products.length ? (
//         <div className="row" id="item-list"  >
//           {filterProducts().map((product) => (
//             <ProductItem
//               key={product._id}
//               _id={product._id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               description={product.description}

//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }

// export default ProductList;
