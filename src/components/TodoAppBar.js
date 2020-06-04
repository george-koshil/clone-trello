import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import {AUTH_URL} from "../constants";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
    },
}));

function TodoAppBar(props) {
    const { isLoggedIn } = props;
    const classes = useStyles();

    function redirectToAuthPage() {
        window.location = AUTH_URL;
    }

    return(
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "rgb(25, 118, 210)"}}>
                <Toolbar>

                    <Link to='/'>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                            <HomeIcon/>
                        </IconButton>
                    </Link>

                    {isLoggedIn &&
                    <Link to='/boards'>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                            <LibraryBooksIcon edge="start" className={classes.menuButton} />
                        </IconButton>
                    </Link>
                    }

                    <Typography variant="h6" className={classes.title}>
                        Clone Trello
                    </Typography>

                    {isLoggedIn
                        ?
                        <AccountCircle />
                        :
                        <Button
                            color="inherit"
                            onClick={redirectToAuthPage}
                        >
                            Login
                        </Button>
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        isLogin: store.login.isLogin
    }
};

export default connect(mapStateToProps)(TodoAppBar)