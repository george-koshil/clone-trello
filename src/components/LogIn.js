import React, {useEffect} from "react";
import {logIn} from "../fetch_data/sendRequest";

export default function LogIn() {
    useEffect(() => logIn(), []);

    return(
       <div>
           <h1>Log in</h1>
       </div>
    )
}