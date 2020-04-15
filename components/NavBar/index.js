import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AppBarCollapse from "./AppBarCollapse";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    navigation: {
        color: '#060606',
        backgroundColor: 'white'
    },
    toggleDrawer: {},
    appTitle: {
        fontSize: '16px',
        fontFamily: 'bpg_big, sans-serif'
    }
};

function NavBar(props) {
    const { classes } = props;
    return (
        <AppBar position="static" className={classes.navigation}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Link href={"/"}>
                        <a href={"/"}>
                            <IconButton
                                color="inherit"
                                aria-label="Menu"
                                className={classes.toggleDrawer}
                            >
                                <HomeIcon />
                            </IconButton>
                        </a>
                    </Link>
                    <Typography
                        variant="h1"
                        color="inherit"
                        className={classes.appTitle}
                    >
                        ყოველდღიური ჰოროსკოპი
                    </Typography>
                    <AppBarCollapse />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
