import React from 'react'
import planet from '../assets/images/mars.png'

export default function OrderInfo() {
    return (
        <div className="order-outer vh-100 p-3 row m-0 justify-content-center align-items-center w-100 txt-lt ft-nu">
            <div className="order-inner col col-lg-6 col-12 m-5 p-0">
                <div className="order-card row m-0 p-3">
                    <div className="col-lg-6 col-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Date of Birth</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your DOB" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Mobile no.</label>
                            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your mobile no." />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <img className="order-planet mx-auto d-block" src={planet} alt="" />
                        <button className="btn btn-light btn-block w-100 mt-5 rounded-pill">Confirm booking</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
