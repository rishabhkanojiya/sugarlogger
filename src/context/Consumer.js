/* eslint-disable */
import React, { useContext } from "react";

export function Consume(WrapperComponent, contexts) {
  const Consumer = React.forwardRef((props, ref) => {
    let values = {};
    for (let c in contexts) {
      let context = contexts[c];
      //added this line for eslint useCOntext use in for loop

      let value = useContext(context);
      if (context.displayName) {
        values[context.displayName] = value;
      }
    }

    return <WrapperComponent ref={ref} {...props} {...values} />;
  });

  return Consumer;
}
