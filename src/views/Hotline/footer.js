import { ButtonBase, Icon, IconButton, SvgIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ButtonAutoPlay,
  ButtonBlack,
  ButtonCoin,
  ButtonHot,
  ButtonMinus,
  ButtonPlus,
  ButtonRed,
} from "../../components/Buttons";
import FastBetMenu from "../../components/FastBetMenu";
import { DefaultBetModeInfo, MAX_BET_VALUE, MIN_BET_VALUE } from "../../constants/ConstantHotline";
import AutoPlayModal from "./Components/AutoPlayModal";

const Footer = ({isRisk, betValue, changeBetValue, changeBetMode}) => {
  const [betModeInfo, setBetModeInfo] = useState(DefaultBetModeInfo[0]);

  useEffect(()=>{
    if(isRisk) setBetModeInfo(DefaultBetModeInfo[1]);
    else setBetModeInfo(DefaultBetModeInfo[0]);
  }, [isRisk])

  return (
    <div className="game-footer-wrapper">
      <div className="game-footer">
        <div className="bet-controls">
          <div className="bet-input gui-bg">
            <div className="flex items-center justify-center text-center ml-4">
              <div className="spinner h-full dropdown">
                <div className="bet-spinner">
                  <span className="note">Bet, USD</span>
                  <input
                    type="number"
                    value={betValue}
                    onChange={(e)=> changeBetValue(e.target.value)}
                    className="input-wrapper number-input"
                    style={{ textAlign: "center" }}
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className="input-change w-full">
              <ButtonMinus disabled={betValue<MIN_BET_VALUE} onClick={()=> changeBetValue(betValue/2)}/>
              <FastBetMenu onChange={(value)=>changeBetValue(value)}/>
              <ButtonPlus disabled={betValue>MAX_BET_VALUE} onClick={()=> changeBetValue(betValue*2)}/>
            </div>
          </div>
          <div className="flex items-center">
            {/* <ButtonAutoPlay onClick={() => alert("auto play")} /> */}
            <AutoPlayModal isRisk={isRisk}/>
            <ButtonRed item={betModeInfo.red} onClick={(value)=>changeBetMode(value)}/>
            <ButtonHot item={betModeInfo.hot} onClick={(value)=>changeBetMode(value)}/>
            <ButtonBlack item={betModeInfo.black} onClick={(value)=>changeBetMode(value)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
