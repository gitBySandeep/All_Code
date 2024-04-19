
import { useLocation } from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import Header from "../Header/Header";
import Viewcart from "./Viewcart";
import { ToastContainer, toast  } from "react-toastify";


    function Checkout() {

    const location = useLocation();
    const {cartItemList,totalBillAmount} = location.state;

    const [FullName,setFullName] = useState("");
    const [State,setState] = useState("");
    const [City,setCity] = useState("");
    const [UserContact,setContact] = useState("");
    const [Address,setAddress] = useState("");
    const [Pincode,setPincode] = useState("");

    const PlaceOrder =()=>{
          axios.post("http://localhost:3005/order/placeOrder",{FullName,State,City,UserContact,Address,Pincode})
            .then(response=>{
                  toast.success("Save Information Successfully");
            }).catch(err=>{
                console.log(err);
              toast.error("No Save Information");
            })
    }

    
    return <>
    <ToastContainer/>
            <section className='container-fluid  p-4'>
               <section className='container p-2 justify-content-center row align-content-around m-auto d-flex' id='checkout-page' >
                    <div id='checkout-left' className='col-md-7 me-3 border'style={{height:"390px"}} >
                        <div className=' text-white p-2  d-flex justify-content-center align-items-center mt-2  rounded' style={{background:"var(--green)"}}>
                            <h6 style={{fontSize:"19px"}}>Account & Shipping Details</h6>
                        </div>

                            <div className='row form-group p-2'  style={{height:"320px"}}>
                                <div className='col-md-6 mt-2'>
                                    <label>Full Name*</label><br />
                                    <input type='text' onChange={(event)=>setFullName(event.target.value)} className='form-control' placeholder="Enter your name"/>
                                </div>
                                <div className='col-md-6 mt-2'>
                                <label htmlFor="city" placeholder="Select State">State *</label>
                                    <select className="form-control" onChange={(event)=>setState(event.target.value)} defaultValue="Choose..." >
                                        <option>Select State</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>                                     
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Telangana</option>
                                        <option>Tamil Nadu</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                        <option>Arunachal Pradesh</option>
                                    </select>
                                </div>
                            
                                <div className='col-md-6 mt-3'>
                                    <label>City*</label><br />
                                    <input type='number' onChange={(event)=>setCity(event.target.value)}  className='form-control'placeholder="Enter City"  />
                                </div>
                            
                                <div className='col-md-6 mt-3'>
                                    <label>Phone Number*</label><br />
                                    <input type='number' onChange={(event)=>setContact(event.target.value)}  className='form-control'placeholder="Mobile Number"  />
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <label>Street Address*</label><br />
                                    <input type='text' onChange={(event)=>setAddress(event.target.value)}  className='form-control'placeholder="Address"  />
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <label>Pincode*</label><br />
                                    <input type='number' onChange={(event)=>setPincode(event.target.value)}  className='form-control' placeholder="Pincode"  />
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <button  className='btn  mt-2 text-white' style={{background:"var(--green)"}} onClick={PlaceOrder}>Proceed to Pay</button>
                                </div>
                            </div>

                    </div>
                    <div id='checkout-right' className='border col-md-4'>
                        <div className='text-white rounded mt-2 container d-flex justify-content-center align-items-center p-2' style={{background:"var(--green)"}}>
                            <h6 style={{fontSize:"19px"}}>Cart Details</h6>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th >Product</th>
                                    <th>Qantity</th>
                                    <th style={{display:"block", marginLeft:"15px" }}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItemList?.map((product, index) => <tr key={index}>
                                    <td>{product["products.title"]}</td>
                                    <td className="text-center" >{product["products.cartItem.quantity"]}</td>
                                    <td className="text-center " style={{width:"80px"}}><BsCurrencyRupee/>{product["products.cartItem.quantity"] * (product["products.price"])}</td>
                                </tr>)} 
                            </tbody>
                            <hr />
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td></td>
                                    <th>{(totalBillAmount).toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </section>
        </>
}

export default Checkout;