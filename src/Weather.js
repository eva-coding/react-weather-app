import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
            </div>
        </form>
        
        <h1>Derby</h1>
        <ul>
            <li>Saturday 18:18</li>
            <li>Cloudy</li>
        </ul>
        <div className="row mt-3">
    <div className="col-6">
        <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" className="float-left" />
            <div className="float-left temperature-container">
                <span className="temperature">13</span>
                <span className="units">°C</span>
            </div>
    </div>
</div>
            <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
            </ul>
            </div>
        </div>
        </div>;
}