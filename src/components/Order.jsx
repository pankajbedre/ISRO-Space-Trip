import React from 'react'
import '../css/Order.css';
import planet from '../assets/images/mars.png'
import { Link } from "react-router-dom";



export default function Order() {
    return (
        <div className="order-outer vh-100 p-3 row m-0 justify-content-center align-items-center w-100 txt-lt ft-nu">
            <div className="order-inner col col-lg-6 col-12 m-5 p-0">
                <div className="order-card row m-0 p-3">
                    <div className=" row justify-content-center col-lg-1 col-12 w-100 m-0 mb-5">
                        <img className="order-planet position-absolute" src={planet} alt="" />
                    </div>
                    <h5 className="ft-nu col col-12 p-0 px-3 mb-3">Order summary</h5>
                    <div className="row m-0 col-12 p-0 px-3 mb-3">
                        <div className="col col-lg-3 col-6 p-0 mb-2">
                            <p className="m-0">Trip to</p>
                            <h2 className="fw-bold">Mars</h2>
                        </div>
                        <div className="col col-lg-3 col-6 p-0 mb-2">
                            <p className="m-0">Duration</p>
                            <h2 className="fw-bold">45 days</h2>
                        </div>
                        <div className="col col-lg-3 mb-2 p-0">
                            <p className="m-0">Ship</p>
                            <h2 className="m-0 fw-bold">MRS20</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0 mb-3 px-3">
                        <p className="m-0">Number of passengers: <b className="mx-3"> 1</b></p>
                        <div className="d-flex justify-content-between  mt-4">
                            <small>Price</small><b>Rs.195 cr</b>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <small>Tax</small><b>Rs.1.75 cr</b>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <small>Price</small><b>Rs.196.75 cr</b>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex flex-column m-0 justify-content-between p-0 px-3 mb-3">
                        <p>Flight Date : <b>21st Jan 2022</b></p>
                        <Link to="/orderinfo">
                        <button className="w-100 btn btn-light rounded-pill btn-block">Book Flight</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
