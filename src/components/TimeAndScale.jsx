import React from "react";

export default () => {


    return (
        <section className="time-scale-container">
            <div className="info-time">
                Monday, February 27 2023  Local Time: XX:XX
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