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
 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        margin: '2px',
        width: '400px',
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

export default function HowToPlayModal({logo, title, image, content}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="btn how" onClick={handleClickOpen}>
        <svg-icon src="assets/icons/icon-question.svg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="#FFF" fillRule="nonzero">
              <path d="M8.667 12a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0z"></path>
              <path d="M8 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path>
              <path d="M8 9.833a.5.5 0 0 1-.5-.5V8.66c0-.635.403-1.203 1.001-1.415.797-.28 1.332-1.129 1.332-1.745A1.835 1.835 0 0 0 8 3.667 1.835 1.835 0 0 0 6.167 5.5a.5.5 0 0 1-1 0A2.837 2.837 0 0 1 8 2.667 2.837 2.837 0 0 1 10.833 5.5c0 1.112-.878 2.293-1.999 2.689a.5.5 0 0 0-.334.472v.672a.5.5 0 0 1-.5.5z"></path>
            </g>
          </svg>
        </svg-icon>
        <span className="pl-4">How to Play?</span>
      </button>
      <BootstrapDialog 
        open={open}
        onClose={handleClose}
        >
        <BootstrapDialogTitle  onClose={handleClose} >HOW TO PLAY</BootstrapDialogTitle>
        <DialogContent>
            <div style={{width: '100%', height: 1, backgroundColor: '#4f4f4f'}}/>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center mt-5 justify-center">
                    <img style={{maxHeight: 20}} src={logo}/>
                    <span className="text-sm ml-2 uppercase" >{title}</span>
                </div>
                <div className="my-3">
                    <img src={image}/>
                </div>
                <p className="text mx-5 mb-4">
                    {content}
                </p>
            </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
