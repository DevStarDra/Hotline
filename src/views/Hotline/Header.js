import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HowToPlayModal from "../../components/HowToPlay";

const GameHeader = ({totalAmount, betValue = 0}) => {
  return (
    <div className="game-header-wrapper">
      <div className="game-header relative">
        <div className="flex flex-row items-center justify-between h-full px-1">
          <div className="flex flex-row items-center">
            <div className="ml-4">
              <div
                className="dropdown-toggle btn btn-game w-full h-full pl-2"
                aria-expanded="false"
              >
                <span className="flex items-center justify-center mr-1">
                  Hotline
                </span>
              </div>
            </div>
            <div> 
              <HowToPlayModal logo={'assets/logos/icon-logo-hotline.svg'} title={'hotline'} image={'assets/images/how-hotline.png'} content={`Will the roll be red or black? Place your bet and spin, or if you’re feeling lucky, choose 'High risk mode' and HOT for a spicy x1056 multiplier! `}/>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
           <div className="absolute bg-green-500 px-2" style={{right: 130, borderRadius: 20, fontSize: 12,  color: 'white', fontWeight: 600, boxShadow: '0 0 6px 0px #0000009e', transition: 'opacity 2s', opacity: betValue>0?1:0, visibility: betValue==0?'hidden':''}}> {`+ ${betValue} USD`}</div>
            <div className="relative text-white ml-auto mr-2 text-xs" style={{minWidth: 200, textAlign: 'end'}} >
               {`${totalAmount.toFixed(2)}  USD`}
            </div>
            <div className="btn-user-menu">
              <button className="btn btn-game user-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
