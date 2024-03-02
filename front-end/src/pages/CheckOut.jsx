//import React from 'react'

export default function CheckOut (){
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
                                            <input type='text' name='fristName' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='from-group md-3'>
                                            <label>Last Name</label>
                                            <input type='text' name='lastName' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='from-group md-3'>
                                            <label>phone Number</label>
                                            <input type='text' name='phoneNumber' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='from-group md-3'>
                                            <label>email</label>
                                            <input type='email' name='email' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-11'>
                                        <div className='from-group md-3'>
                                            <label>Full Address</label>
                                            <textarea  rows="3" className='form-control'></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='from-group md-3'>
                                            <label>City</label>
                                            <input type='text' name='city' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='from-group md-3'>
                                            <label>State</label>
                                            <input type='text' name='state' className='form-control'/>
                                        </div>
                                    </div>
                                     <div className='col-md-3'>
                                        <div className='from-group md-3'>
                                            <label>Zip code</label>
                                            <input type='text' name='zipCode' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='from-group text-end'>
                                        <button type='button' className='btn btn-primary'>Place Order</button>
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
