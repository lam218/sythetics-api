import React from "react";
import "./ProgressCounter.scss";

const ProgressBar = ({progress, title}) => {
  const RAGCell = () => {
    
    if(progress > 80){
        return 'progress-counter__fill--success';
    }else if(progress > 60){
        return 'progress-counter__fill--warning';
    }
    return 'table__cell--error';
}
  return(
    <div className="progress-counter">
    <div className="progress-counter__bar">
      <div
        className={`progress-counter__fill ${RAGCell()}`}
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="progress-counter__summary">{`${progress}% ${title}`}</p>
  </div> 
  )
}


export default ProgressBar;