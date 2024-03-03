//import React from 'react'
import axios from "axios";
import {useEffect,useState,} from "react";

export default function CheckOut (){

    const [users,setUsers] = useState([]);
    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");
    const [phoneNumber,setPhoneNumber] =useState("");
    const [email,setEmail] =useState("");
    const [address,setAddress] =useState("");
    const [city,setCity] =useState("");
    const [state,setState] =useState("");
    const [zipCode,setZipCode] =useState("");

async function save(event){
    event.preventDefault();
    try{
        await axios.post("http://localhost:8090/Order",{
        firstName:firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        email:email,
        address:address,
        city:city,
        state:state,
        zipCode:zipCode,
        });
        alert("User details submitted successfully!");
    }catch(err){
        alert("Error submitting user details. Please try again.")
    }
}


    useEffect(()=>{
        loadOrders();
    },[]);
     
    const loadOrders=async () =>{
        const result =await axios.post("http://localhost:8080/Order");
        setUsers(result.data);
        console.log(result.data);
    }

  return (
    <div className='checkout'>
          <div className="py-3 bg-warning">
            <div className="container">
                <h1> Check Out</h1>
            </div>
        </div>

        <div className="py-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-7 container2">


                        <div className='col-md-5 table-container'>
                            <table className='table table-border'>
                                <thead>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Tatal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>petfoot</td>
                                        <td>$.200</td>
                                        <td>2</td>
                                        <td>400</td>
                                    </tr>
                                        <td colSpan="2" className='text-end'>Grand Total</td>
                                        <td colSpan="2" className='text-end'>400</td>
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Basic Information</h4>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='from-group md-3'>
                                            <label>Frist  Name</label>
                                            <input placeholder="Enter Frist Name" type='text' id="fristname1" className='form-control'

                                            value={firstName}

                                            onChange={(event)=>{
                                                setFirstName(event.target.value)
                                            }}/>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='from-group md-3'>
                                            <label>Last Name</label>
                                            <input placeholder="Enter Last Name" type='text' id='lastname1' className='form-control'
                                            value={lastName}
                                            onChange={(event)=>{
                                                setLastName(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='from-group md-3'>
                                            <label>phone Number</label>
                                            <input placeholder="Enter Phone Number" type='text' id='phonenumber1' className='form-control'
                                            value={phoneNumber}
                                            onChange={(event)=>{
                                                setPhoneNumber(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='from-group md-3'>
                                            <label>email</label>
                                            <input placeholder="Enter email" type='email' id='email1' className='form-control'
                                            value={email}
                                            onChange={(event)=>{
                                                setEmail(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-11'>
                                        <div className='from-group md-3'>
                                            <label>Full Address</label>
                                            <textarea placeholder="Enter Address" rows="3" id='addRess1' className='form-control'
                                            value={address}
                                            onChange={(event)=>{
                                                setAddress(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='from-group md-3'>
                                            <label>City</label>
                                            <input placeholder="Enter City" type='text' id='city1' className='form-control'
                                            value={city}
                                            onChange={(event)=>{
                                                setCity(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='from-group md-3'>
                                            <label>State</label>
                                            <input placeholder="Enter State" type='text' id='state1' className='form-control'
                                            value={state}
                                            onChange={(event)=>{
                                                setState(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                     <div className='col-md-3'>
                                        <div className='from-group md-3'>
                                            <label>Zip code</label>
                                            <input placeholder="ZipCode" type='text' id='zipcode1' className='form-control'
                                            value={zipCode}
                                            onChange={(event)=>{
                                                setZipCode(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='from-group text-end'>
                                        <button type='submit' className='btn btn-primary' onClick={save}>Place Order</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}
