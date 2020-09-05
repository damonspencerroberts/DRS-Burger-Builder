import React, {Fragment as Fr, Component} from "react";
import styles from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBar from "../Navigation/sidedrawer/Side-drawer";


class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSidebar: false
        }

        this.handleShowSidebar = this.handleShowSidebar.bind(this);
    }
    
    

    handleShowSidebar() {
        this.setState({showSidebar: !this.state.showSidebar})
    }
    
    render() {
       return <Fr>
            <Toolbar menuClick = {this.handleShowSidebar} showSide = {this.state.showSidebar} />
            <SideBar showSide = {this.state.showSidebar} 
            bClick = {this.handleShowSidebar}
            sideLogoClick = {this.handleShowSidebar}
            />
            <main className = {styles.content}>
                {this.props.children}
            </main>
        </Fr> 
    }
} 
    

    export default Layout;

    /**
     * fix logo on small screen
     * fix size of burger on small
     * fix size of order burgers, ordersum, and confirmation on small
     */

