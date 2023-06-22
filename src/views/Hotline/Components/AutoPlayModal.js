import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { ButtonAutoPlay } from "../../../components/Buttons";
import ColorSelectItem from "./ColorSelectItem";
import BetColorSelect from "./BetColorSelect";
import RoundSelect from "./RoundSelect";
import ValueSelec1 from "./ValueSelect1";
 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        position: 'relative',
        margin: '2px',
        width: '500px',
        height: '450px',
        backgroundColor: '#212226',
        color: 'white',
        borderRadius: 8,    
    }, '& .MuiDialogTitle-root': {
        padding: '4px 10px',
        fontSize: 16
    }, '& .MuiDialogContent-root':{
        padding: '0px 2px 10px 2px'
    }
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle className="flex items-center justify-between px-1" {...other}>
        {children}
        {onClose ? (
          <button onClick={onClose} className="modal-header close mr-1"/>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default function AutoPlayModal({isRisk}) {
  const [open, setOpen] = useState(false);
  const [betMode, setBetMode] = useState('red');
  const [round, setRound] = useState(3);

  const onSelectBetColor = (value)=>{
    console.log(value)
  }

  const handleClose = () =>{
    setOpen(false);
  }

  return (
    <div>
      <ButtonAutoPlay onClick={()=>setOpen(!open)}/>
      <BootstrapDialog 
        open={open}
        onClose={handleClose} 
        >
        <BootstrapDialogTitle  onClose={handleClose} >AUTO PLAY</BootstrapDialogTitle>
        <DialogContent>
            <div style={{width: '100%', height: 1, backgroundColor: '#4f4f4f'}}/>
            <BetColorSelect isRisk={isRisk} current={betMode} onSelect={setBetMode}/>
            <RoundSelect current={round} onSelect={setRound}/>
            <ValueSelec1/>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
