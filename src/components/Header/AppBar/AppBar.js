import "./AppBar.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Asia</Button>
                    <Button color="inherit">America</Button>
                    <Button color="inherit">Africa</Button>
                    <Button color="inherit">Australia</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
