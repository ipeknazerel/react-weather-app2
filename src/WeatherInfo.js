import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";


export default function WeatherInfo(props) {
    return (

        <div className="WeatherInfo">
            <div className="overview">
                <h1>{props.city}</h1>
                <ul>
                    <li>Last updated:
             <FormattedDate date={props.date} />
                    </li>
                    <li className="text-capitalize"> {props.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix weather-temperature">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} />
                        </div>

                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.humidity}%</li>
                        <li>Wind: {props.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}