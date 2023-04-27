import React, { useEffect } from "react";
import styles from "./styles.module.scss";

// Nanostores state
import { randomiseColor } from "@src/stores/color";

const ReactComponent = () => {
  useEffect(() => {
    const x = "Hello World!";
    console.log("React component loaded:", x);
  }, []);

  return (
    <div className={styles.root}>
      <p>This is a React component</p>
      <button onClick={() => randomiseColor()}>Change colour</button>
    </div>
  );
};

export default ReactComponent;
