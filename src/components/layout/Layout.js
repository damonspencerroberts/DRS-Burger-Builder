import React, {Fragment} from "react";
import styles from "./Layout.module.css"

const Layout = (props) => 
    <Fragment>
        <main className = {styles.content}>
            {props.children}
        </main>
    </Fragment>

    export default Layout;

