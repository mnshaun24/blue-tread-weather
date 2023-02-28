import React from "react";

export default ({weather}) => {
    const location = weather.address

    return (
        <section className="time-scale-container">
            <div className="info-time">
                {location === "33602" && <p>Location: Tampa</p>}
                {location === "73301" && <p>Location: Austin</p>}
                {location === "89433" && <p>Location: Reno</p>}
            </div>
            <div className="btn-degree-container">
                <button className="btn-degree">
                {'\u2103'}
                </button>
                <span style={{fontSize:"20px"}}>/</span>
                <button className="btn-degree">
                {'\u2109'}
                </button>
            </div>
        </section>
    )
}