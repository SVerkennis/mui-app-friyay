import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData, Africa, Asia, Australia, America} from './tileData';
import {Switch, Route} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(10)
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                <Route path="/africa">
                    <GridList cellHeight={160} className={classes.gridList} cols={6}>
                        {Africa.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Route>

                <Route path="/asia">
                    <GridList cellHeight={160} className={classes.gridList} cols={6}>
                        {Asia.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Route>

                <Route path="/australia">
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {Australia.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Route>

                <Route path="/america">
                    <GridList cellHeight={160} className={classes.gridList} cols={6}>
                        {America.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Route>

                <Route path="/">
                    <GridList cellHeight={360} className={classes.gridList} cols={3}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Route>
            </Switch>
        </div>
    );
}
