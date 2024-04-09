import { useLocation } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPLayer from 'react-player/youtube';

export default function GetStart() {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log("hi");
    console.log(state);
    const back = () => {
        navigate("/yoga")
    }

    return <>
        <div className="container mt-4  border-success p-3" style={{ border: "2px solid" }} id="main">
            <h2 className="mt-2 mb-2 fs-1 font-weight-bold d-flex justify-content-center align-items-center" style={{ color: "#35754A" }}>{state.yogaName}</h2>
            <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center p-1 ">
                        <ReactPLayer url={state.videoUrl} muted volume={0.8} />
                        <br/>
                    </div>
                <div className="col-md-6">
                    <div className="mt-2 ml-md-4">
                        <h4 className="font-weight-bold " style={{ color: "#35754A" }}>Benefits of {state.yogaName}</h4>
                        <h4 className="mt-2 fs-4 " style={{ fontSize: "14px" }}>{state.benefits}</h4>
                        <h4 className="mt-2 font-weight-bold" style={{ color: "#35754A" }}>Instructions of {state.yogaName}</h4>
                        <h4 className="mt-2 " style={{ fontSize: "18px" }}>{state.instructions}</h4>
                        <button style={{ cursor: "pointer", background: "#35754A", height: "30px", width: "120px" }} className="mt-3 text-white rounded" onClick={back}>Back home</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}