import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GameHeader from "./Header";
import Footer from "./footer";
import GameHistory from "../../components/GameHistory";
import HotlineContent from "./content";
import { DefaultBetModeInfo } from "../../constants/ConstantHotline";
import { GameCanvas } from "../../utils/canvas";  
const Hotline = () => {
  const [isRiskMode, changeIsRiskMode] = useState(false);
  const [totalAmount, setTotalAmount] = useState(3000.00);
  const [betValue, setBetValue] = useState(1);
  const [betMode, setBetMode] = useState("red");
  const [betlist, setBetList] = useState([]);
  const [drawer, setDrawer] = useState(null);
  const [history, setHistory] = useState([]);
  const [addBetValue, setAddBetValue] = useState(0);

  useEffect(() => {
    console.log(betValue);
  }, [betValue]);
  useEffect(() => {
    console.log(betMode);
  }, [betMode]);

  useEffect(() => {
    for (let i = 0; i < 10000; i++) {
      betlist[i] = Math.round(Math.random()*3)%3;
    }
    const img = new Image();
    img.src = "./assets/images/hotline.png";
    img.onload = function () {
      const draw = new GameCanvas("canvas", img);
      setDrawer(draw);
      draw.drawInit();
    };
  }, []);

  const afterBet = (betResult, calc, betmode, afterTotal) =>{  
    let hist = [...history];
    hist.push(calc);
    setHistory([...hist])
    if(betResult){ 
      setAddBetValue(betValue*DefaultBetModeInfo[0][betmode].ratio);
      setTimeout(()=>{
        setAddBetValue(0);
      }, 1500);
      setTotalAmount(afterTotal);
    }
  }

  const calcBetResult = () => {
    return Math.floor(Math.random()*3);

  }

  const changeBetMode = (value) => { 
    setTotalAmount(totalAmount - betValue);
    const index = value == 'red' ? 0 : value == 'black' ? 1 : 2;
    let betResult = false;
    let calc = calcBetResult();  
    if(index == calc){
      betResult = true;
    }
    drawer.drawWithAnimation(calc, ()=>afterBet(betResult, calc, value, totalAmount + betValue*(DefaultBetModeInfo[0][value].ratio-1))); 

  };
  return (
    <>
      <div className="game-viewport">
        <div className="game-wrapper">
          <div className="game gui-bg-gradient">
            <GameHeader totalAmount={totalAmount} betValue={addBetValue}/>
            <HotlineContent
              riskMode={isRiskMode}
              setRiskMode={() => changeIsRiskMode(!isRiskMode)}
              history={history}
            />
            <Footer
              isRisk={isRiskMode}
              betValue={betValue}
              changeBetValue={setBetValue}
              changeBetMode={changeBetMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotline;
