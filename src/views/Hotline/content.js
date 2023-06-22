import React, { useEffect, useState } from "react";
import GameHistory from "../../components/GameHistory";
import AntSwitch from "../../components/AntSwitch";
import { SettingsRemoteSharp } from "@mui/icons-material";

const HotlineContent = ({riskMode, setRiskMode, history}) => {

    return <div className="game-body">
        <div className="relative h-full flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center px-1 w-full">
                <GameHistory history={history}/>
            </div>
            <div className="reels-wrapper">
                <canvas id="canvas" width={930} height={248} style={{touchAction: 'none', cursor: 'inherit'}}/>
            </div>
            <div className="game-controls">
                <div className="flex items-center justify-center">
                    <img src="./assets/logos/icon-speedometer.svg" className="mx-4"/>
                    <AntSwitch checked={riskMode} onChange={()=>alert('Developing!')} inputProps={{ 'aria-label': 'ant design' }} />
                    <span className="mx-4">High risk mode</span>
                </div>
            </div>
        </div>
    </div>

}

export default HotlineContent