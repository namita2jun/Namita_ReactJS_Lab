import React, { useState} from 'react';
import { pushDataToServer } from '../service/menu';
const ExpenseTracker = ( props ) =>{
const setDefaultDate = () =>{
const today = new Date();
return `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`; 

};
const[payeeName, setPayeeName] = useState("");
const[product, setProduct] = useState();
const[price,  setPrice] = useState(0);
const[setDate,setSetDate] = useState(setDefaultDate());

const handlePayeeChange =(event)=>{
    setPayeeName(event.target.value);
};
const handleProductChange =(event)=>{
    setProduct(event.target.value);
};

const handlePriceChange =(event)=>{
    setPrice(event.target.value);
};

const handleDateChange =(event)=>{
    setSetDate(event.target.value);
};

const submitHandler = async( event ) =>{
    event.preventDefault();
    const finalData = {
      payeeName,
      product,
      price,
      setDate  
    };

    const data = await pushDataToServer(finalData);
    console.log( data );
    props.onTrue();

};
return(
    <section>
        <header>
            <h1>Add New Item</h1>
            <p>Read the below instructions before proceeding:
                <br/> Make sure you will all the fields where * is provided.
            </p>
        </header>
        <form onSubmit={submitHandler}>
            <article>
                <p>Name</p>
                <select name='Name' id="district" required value={payeeName} onChange={handlePayeeChange}>
                  <option value="" defaultChecked>
                    choose
                    </option>  
                    <option value="Rahul">Rahul</option>
                    <option value="Ramesh">Ramesh</option>
                </select>
            </article>

            <article>
                <p>Product purchased </p>
                <input type='text' value={product} required onChange={handleProductChange}/>
            </article>

            <article>
                <p>Price</p>
                <input type="number" value={price} required onChange={handlePriceChange}/>
            </article>
            <article>
          <p>Date</p>
          <input
            type="date"
            required
            value={setDate}
            onChange={handleDateChange}
          />
          </article>

          <button type='button' className='form-button' onClick={props.onClose}>Close</button>
          <button type='submit' className='form-button'>Submit</button>
        </form>
    </section>
    
);
};
export default ExpenseTracker;