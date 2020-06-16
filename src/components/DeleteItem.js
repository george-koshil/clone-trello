import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

export default function DeleteItem(props) {
  const { handler, className } = props;

  return (
    <div className={className}>
      <ClearIcon onClick={handler} />
    </div>
  );
}
