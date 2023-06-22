import { useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";

const GameHistory = ({history}) => {
  const [showWrapper, setShowWrapper] = useState(false); 
  const [latestHistory, setLatesHistory] = useState([]);

  useEffect(()=>{
    let hh = [...history];
    hh.reverse(); 
    setLatesHistory(hh); 
  }, [history])

  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 20,
        maxWidth: 600,
        width: "100%",
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className="relative flex items-center"
        style={{
          height: 20,
          padding: "0px 2px",
          borderRadius: 10,
          fontSize: 12,
        }}
      >
        <div className="flex items-center justify-start h-full w-full overflow-hidden">
          {latestHistory.map((e, index) => {
            if(index < 24) return;
            return (
              <div key={index} className={e==0 ? "red-circle" :e == 1 ? "black-circle" : 'hot-circle'} />
            );
          })}
        </div>
        <div className="button-block bg-blue-600" style={{ zIndex: 2 }} onClick={()=>setShowWrapper(!showWrapper)}>
          <div
            className="dropdown-toggle flex items-center"
            style={{ borderRadius: 20, padding: 2 }}
          >
            <div className="history-icon mr-1" />
          </div>
        </div>
        {showWrapper && (
          <div
            className="wrapper bg-blue-600 absolute"
            style={{ width: "100%", top: -2, zIndex: 1 }}
          >
            <div className="text-xs mx-2 mt-1 text-white">LAST RESULTS</div>
            <div className="flex m-1 mt-2 flex-wrap">
              {latestHistory.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={e==0 ? "red-circle" :e == 1 ? "black-circle" : 'hot-circle'} 
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameHistory;
