import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="number" placeholder="Type a number" />;
});

export default Input;
