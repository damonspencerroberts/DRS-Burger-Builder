import React, {Fragment} from "react";
import styles from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBar from "../Navigation/sidedrawer/Side-drawer";
const Layout = (props) => 
    <Fragment>
        <Toolbar />
        <SideBar />
        <main className = {styles.content}>
            {props.children}
        </main>
    </Fragment>

    export default Layout;

