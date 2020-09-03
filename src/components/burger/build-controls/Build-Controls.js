import React from 'react';
import Controls from "./Build-Control-Types";
import classes from "./Build-Controls.module.css";
import BuildController from "./build-controller/Build-Controller";

const buildControls = (props) => 
    <div className = {classes.BuildControls}>
        {Controls.map(e => <BuildController 
            key = {e.label} 
            label = {e.label}
            moreClick = {() => props.ingAdd(e.type)}
            lessClick = {() => props.ingDel(e.type)}
            />)}
    </div>
;

export default buildControls;