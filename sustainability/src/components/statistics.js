import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Statistics(props) {
    const [locations, setLocations] = useState("");

    useEffect(() => {
        axios.get("/api/entry", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    // console.log(res.data);
                    const locations = [];
                    res.data.forEach(e => locations.push(e.location));
                    setLocations([...new Set(locations)]);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Sustainateers</h5>
                        <h1>{props.totalUsers}</h1>
                        <p className="card-text">The total number of users that have registered on the sustainateers site!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Hours</h5>
                        <h1>{props.totalHours}</h1>
                        <p className="card-text">The total number of hours that were spent cleaning up our planet!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Bags</h5>
                        <h1>{props.totalBags}</h1>
                        <p className="card-text">The total number of bags of trash that have been collected by Sustainateers!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Unique Locations</h5>
                        <h1>{locations.length}</h1>
                        <p className="card-text">The number of unique locations cleaned up by our Sustainateers!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}