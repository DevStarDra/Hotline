import { Grid, Paper } from "@mui/material";
import React from "react";
import RoundSelectItem from "./RoundSelectItem";

const RoundSelectList = [3, 10, 25, 100, 200, 500];

const RoundSelect = ({current, onSelect}) =>{
    return <div className="bet-round-selector mt-2">
        <span className="mt-1 text-gray-300">Number of rounds</span>
        <div className="mx-auto my-2" style={{width: '95%'}}>
            <Grid container spacing={1}>
                {RoundSelectList.map((item, index)=>{
                    return <Grid key={index} item xs={6}>
                        <RoundSelectItem selected={current == item} item={item} onSelect={()=>onSelect(item)}/>
                    </Grid>
                })}
            </Grid>
        </div>
    </div>

}

export default RoundSelect