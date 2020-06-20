import "./AppBar.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar className={"tools"}>
                    <Link to="/asia" className={"linkcolor"}><Button color="inherit">Asia</Button></Link>
                    <Link to="/america" className={"linkcolor"}><Button color="inherit">SouthAmerica</Button></Link>
                    <Link to="/africa" className={"linkcolor"}><Button color="inherit">Africa</Button></Link>
                    <Link to="/australia" className={"linkcolor"}><Button color="inherit">Australia</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
