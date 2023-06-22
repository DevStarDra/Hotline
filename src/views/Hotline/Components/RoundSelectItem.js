import React from "react";

const RoundSelectItem = ({selected, item, onSelect}) => {
    return <button className={`round-select-item ${selected?'select':''}`} onClick={()=>onSelect(item)}>
        <span>{item}</span> 
    </button>

}

export default RoundSelectItem