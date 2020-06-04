import React, {useEffect} from "react";
import {saveToken} from "../fetch_data/sendRequest";
import {connect} from "react-redux";
import {logIn} from "../actions";
import { useHistory } from "react-router-dom";

function LogIn(props) {
    const { logIn } = props;
    const history = useHistory();

    useEffect(() => {
        logIn();
        saveToken();
        history.replace('/boards');
    }, [history]);

    return(
       <div>
           <h1>...Log in</h1>
       </div>
    )
}

const mapDispatchToProps = {
    logIn
};

export default connect(null,mapDispatchToProps)(LogIn)



