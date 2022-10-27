
import './Form.css'

import { useState } from "react";


const Form = (props) => {




    return (<div className="card text-center section">
        <div className="card-header header">
            Best Currancy Exchange Rate
        </div>
        <div className="card-body">
            <h5 className="card-title">Special Exchange Rate</h5>
            <p className="card-text">Lorem ipsum With supporting text below as a natural lead-in to additional content.</p>
            
            
            <div className='container'>

                <div className="form-group">
                    <label >FirstName</label>
                    <input type="text" className="form-control" value={props.first} name="firstname" placeholder="Enter FirstName" required onChange={props.onChangeHandler} />
                    <p className='error'>{props.error1}</p>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" value={props.email} name='email' placeholder="Enter email" required onChange={props.onChangeHandler} />
                    <p className="error">{props.error2}</p>
                </div>

                <button className="btn btn-primary btn1" onClick={props.onSubmitHandler}>Login</button>



            </div>
        </div>
        <div className="card-footer text-muted foot">
        ©CopyRight 2022-2023
        </div>
    </div>





    )
}
export default Form;