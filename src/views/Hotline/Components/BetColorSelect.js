import React, { useEffect, useState } from "react";
import ColorSelectItem from "./ColorSelectItem";
import { DefaultBetModeInfo } from "../../../constants/ConstantHotline";

const BetColorList = ['red', 'black', 'hot'];

const BetColorSelect = ({isRisk, current, onSelect}) => {
    const [betModeInfo, setBetModeInfo] = useState(DefaultBetModeInfo[0]);

    useEffect(()=>{
        if(isRisk) setBetModeInfo(DefaultBetModeInfo[1]);
        else setBetModeInfo(DefaultBetModeInfo[0]); 
    }, [isRisk])
    return <div className="bet-color-selecter">
        <span className="my-1">Bet color</span>
        <div className="flex flex-col items-center justify-center w-full mb-2 text-white">     
            <div className="flex flex-row w-full">
                <div className="ml-2 mr-1" style={{width: '50%'}}><ColorSelectItem selected={'red'==current} onSelect={()=>onSelect('red')} item={betModeInfo.red}/></div>
                <div className="ml-1 mr-2" style={{width: '50%'}}><ColorSelectItem selected={'black'==current} onSelect={()=>onSelect('black')} item={betModeInfo.black}/></div>
            </div> 
            <div className="flex flex-row w-full mt-2">
            <div className="mx-2" style={{width: '100%'}}><ColorSelectItem selected={'hot'==current} onSelect={()=>onSelect('hot')} item={betModeInfo.hot}/></div>
            </div>
        </div>
    </div>

}

export default BetColorSelect