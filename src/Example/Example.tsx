import React, { ReactElement } from "react";
import { ExampleProps } from "./Example.interface";
import styles from "./Example.module.css";

function Example({ param }: ExampleProps): ReactElement {
  return <h1 className={styles.example}>Hello {param}</h1>;
}

export default Example;
