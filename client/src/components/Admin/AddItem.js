import React, {useState, useEffect} from "react";
import { Form } from "reactstrap";
import {useMutation} from '@apollo/client';
import { ADD_ITEM} from '../../utils/mutations'
import './style.css'

 function AddItem() {
    const[name, setname] = useState('')
    const[price, setprice] = useState('')
    const[image, setimage] = useState('')
    const[description, setdescription] = useState('')

    const [addItem] = useMutation(ADD_ITEM)


   async function formhandler(e){
        e.preventDefault();
        const product = {
            name,
            price,
            image,
            description
        }
        console.log (product);

        await addItem({
            variables:{...product, price: parseInt(product.price)}
        })

    }

    return (
        <div  className="position-relative">
            <form onSubmit={formhandler} >
                <input type="text" className="form-control text-center" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}  />
                <input type="text" className="form-control text-center" placeholder="price" value={price} onChange={(e)=>{setprice(e.target.value)}}  />
                <input type="text" className="form-control text-center" placeholder="image url" value={image} onChange={(e)=>{setimage(e.target.value)}}  />
                <input type="text" className="form-control text-center" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}  />
               <button className="btn mt-5 position-absolute top-100 start-50 translate-middle" type="submit" onClick={formhandler}>Add Item</button>
            </form>
        </div>
    )
}
export default AddItem;