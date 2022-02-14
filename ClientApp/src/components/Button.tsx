import React from "react";
import { useState } from "react";

function Button(props: { action: any; title: any }) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}

export default Button;
