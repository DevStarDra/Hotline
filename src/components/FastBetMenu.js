import React, { useState } from "react";
import { Button, Popper, Box, Typography, Fade, Paper } from "@mui/material";
import { ButtonCoin } from "./Buttons";

const fastBetList = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1.2, 2, 4, 10, 20, 50, 100,
];

const FastBetMenu = ({onChange}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  
  return (
    <div className="flex ">
      <ButtonCoin onClick={handleClick('top')} />
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{borderRadius: 10, marginBottom: 10}}>
                <div className="fast-bet-menu">
                    <div className="text-md text-white mt-2">Bet, USD</div>
                    <div className="fast-bet-menu content">
                        {fastBetList.map((e, index)=>{
                            return  <div key={index} onClick={()=>onChange(e)}> 
                                    <button className="btn btn-game w-full px-2">{e}</button>
                                </div>  
                        })}
                    </div>
                </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default FastBetMenu;
