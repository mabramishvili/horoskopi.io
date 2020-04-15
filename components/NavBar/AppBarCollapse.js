import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import Link from "next/link";

const styles = theme => ({
    root: {
        position: "absolute",
        right: 0,
        fontFamily: 'bpg_big, sans-serif'
    },
    buttonBar: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        margin: "10px",
        paddingLeft: "16px",
        right: 0,
        position: "relative",
        width: "100%",
        background: "transparent"
    },
    bpg: {
        fontFamily: 'bpg_big, sans-serif'
    }
});

const AppBarCollapse = props => (
    <div className={props.classes.root}>
        <ButtonAppBarCollapse>
            <MenuItem className="bpg">მთავარი</MenuItem>
            <MenuItem className="bpg">შეთავსება</MenuItem>
        </ButtonAppBarCollapse>
        <div className={props.classes.buttonBar} id="appbar-collapse">
            <Link href={"/"}><Button color="inherit" className="bpg">მთავარი</Button></Link>
            <Button color="inherit" className="bpg">შეთავსება</Button>
        </div>
    </div>
);

export default withStyles(styles)(AppBarCollapse);
