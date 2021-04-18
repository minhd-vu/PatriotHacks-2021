import React from "react";

export default function Statistics(props) {
    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Sustainateers</h5>
                        <h1>{props.totalUsers}</h1>
                        <p className="card-text">The total number of users that have registered on the sustainateers site!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Hours</h5>
                        <h1>{props.totalHours}</h1>
                        <p className="card-text">The total number of hours that were spent cleaning up our planet!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Bags</h5>
                        <h1>{props.totalBags}</h1>
                        <p className="card-text">The total number of bags of trash that have been collected by Sustainateers!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}