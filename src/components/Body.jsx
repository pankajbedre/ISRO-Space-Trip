import React from 'react'
import '../css/Body.css';
import planet from '../assets/images/mars.png'
import { Link } from "react-router-dom";




export default function Body() {
    return (
        <div className="body-outer">
            <div className="body-inner  row m-0">
                <div className="pl-sm-img col col-lg-0 col-12 text-end">
                    <img className="planet-img" src={planet} alt="" />
                </div>

                <div className="detail-box row m-0 p-2 pt-5 pb-3 col-lg-5 col-12 ft-nu">

                    <div className="row m-0">
                        <div className="col col-lg-6 col-12 mb-2">
                            <p className="m-0">Trip to</p>
                            <h2 className="fw-bold">Mars</h2>
                        </div>
                        <div className="col col-lg-6 col-12 mb-2">
                            <p className="m-0">Duration</p>
                            <h2 className="fw-bold">45 days</h2>
                        </div>
                    </div>
                    <div className="row m-0 mt-2">
                        <div className="col col-lg-6 mb-2">
                            <p className="m-0">Ship</p>
                            <h2 className="m-0 fw-bold">MRS20</h2>
                        </div>
                        <div className="col col-lg-6 mb-2">
                            <p className="m-0">Price per person*</p>
                            <h2 className="m-0 fw-bold">Rs.195 cr</h2>
                        </div>
                    </div>
                    <div className="row m-0 mt-3">
                        <small>The following is the full and exact details of <br/> what is going to happen and what are we providing through out the trip ... <b>Read more</b></small>
                    </div>
                    <div className="m-0 mt-3 col col-12 px-4">
                        <button className="btn btn-outline-light my-2 rounded-pill col col-lg-5 col-12 mx-0 fs-6 fw-bold">Details</button>
                        <small className="col col-lg-2 col-0 mx-3"></small>
                        <Link to="/order"><button className="btn btn-light m-2 rounded-pill col col-lg-6 col-12 mx-0 fs-6 fw-bold">Book now</button></Link>
                    </div>

                </div>

                <div className="pl-lg-img col col-lg-7 col-12 text-end">
                    <img className="planet-img" src={planet} alt="" />
                </div>
            </div>
        </div>
    )
}
