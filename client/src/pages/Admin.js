// import React, { useEffect } from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
// import Cart from '../components/Cart';
// import Hero from "../components/Hero";
// import HomeInfoCards from "../components/home-info-cards";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import { useSelector, useDispatch } from "react-redux";
// import "../styles/admin.css";
// import { Link, Route, Switch } from "react-router-dom";
// import Users from "../components/Admin/Users";
// import Items from "../components/Admin/Items";
// import AddItem from "../components/Admin/AddItem";
// import Orders from "../components/Admin/Orders";

// const Admin = () => {
//     // const userstate = useSelector((state) => state.loginUserReducer);
//     // const {currentUser} = userstate;
//     // const dispatch = useDispatch()
//     // useEffect(() => {
//     //     if(!currentUser.isAdmin){
//     //         window.location.href='/'
//     //     }
//     // }, [])
//     return (
//         <div>
//             <h1 className="text-center">Admin Control Panel</h1>
//             <ul className="admin-nav nav justify-content-center">
//                 <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to={'/admin/users'}>Users</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" aria-current="page" to={'/admin/items'}>Items</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" aria-current="page" to={'/admin/additem'}>Add  new Item</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" aria-current="page" to={'/admin/orders'}>Orders</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path="/admin" component={Users} />
//                 <Route exact path="/admin/users" component={Users} />
//                 <Route exact path="/admin/items" component={Items} />
//                 <Route exact path="/admin/additem" component={AddItem} />
//                 <Route exact path="/admin/orders" component={Orders} />
//             </Switch>
//         </div>
//     );
// };

// export default Admin;
