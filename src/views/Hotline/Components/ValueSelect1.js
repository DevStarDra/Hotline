import React from "react";

const ValueSelec1 = ({checked}) => {
    return <div className={`value-select1 ${checked?'checked':''}`}>
        <div className="options-spinner">
            <button className="btn">
                <span className="minus"/>
            </button>
            <button className="btn">
                <span className="plus"/>
            </button>
        </div>

    </div>

}

export default ValueSelec1