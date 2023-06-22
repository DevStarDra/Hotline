import React from "react";

const ColorSelectItem = ({selected, item, onSelect}) => {
    return <button className={`color-select-item ${selected?'select':''}`} onClick={()=>onSelect(item)}>
        <span>{item.label}</span>
        <span className="ml-1">{` X${item.ratio}`}</span>
        <span className={`${item.value}-color-figure`}/>
    </button>

}

export default ColorSelectItem