import React, {useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import {Menu} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
    buttonCollapse: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        margin: "10px",
        boxShadow: "none"
    }
});

const ButtonAppBarCollapse = (props) => {

    const [anchorEl, setAnchor] = useState(null);

    const handleMenu = event => {
        setAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };

    const {classes} = props;
    const open = Boolean(anchorEl);

    return (
        <div className={classes.buttonCollapse}>
            <IconButton onClick={handleMenu}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
            >
                {props.children}
            </Menu>
        </div>
    );
};

export default withStyles(styles)(ButtonAppBarCollapse);
