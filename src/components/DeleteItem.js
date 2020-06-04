import React from "react";
import ClearIcon from '@material-ui/icons/Clear';

export default function DeleteItem(props) {
    let { handler, className } = props;

    return (
        <div className={className}>
                <ClearIcon onClick={handler}/>
        </div>
    )
}
