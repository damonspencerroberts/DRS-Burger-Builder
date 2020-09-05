import React, { Component } from 'react';
import Controls from "./Build-Control-Types";
import classes from "./Build-Controls.module.css";
import BuildController from "./build-controller/Build-Controller";

export default class BuildControls extends Component {
    render() {
       return  <div className = {classes.BuildControls}>
                    <div className = {classes.Price}><span>Price: ${this.props.ingPrice}</span></div>
                    {Controls.map(e => <BuildController 
                        key = {e.label} 
                        label = {e.label}
                        moreClick = {() => this.props.ingAdd(e.type)}
                        lessClick = {() => this.props.ingDel(e.type)}
                        disInfo = {this.props.disInfo[e.type]}
                        eachPrice = {e.price.toFixed(2)}
                        />)}
                    <button className = {classes.OrderBtn}
                    onClick = {this.props.ingOrder}
                    disabled = {!this.props.disOrder}>ORDER NOW</button>
                    {!this.props.disOrder === true ? <div className = {classes.Error}><p >YOU MUST ADD INGREDIENTS TO ORDER</p></div>: null}
                    <button className = {classes.ClearBtn}
                    onClick = {this.props.ingClear}
                    disabled = {!this.props.disOrder}>Clear Everything</button>
                </div> 
    }
}
