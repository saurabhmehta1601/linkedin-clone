import React, { PropsWithoutRef } from "react";
import styles from "./styles.module.scss";

interface IProps extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {
  variant?: "outlined" | "transparent";
  color?: "primary" | "secondary";
}

export const Button = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${
        props.variant === "transparent" ? styles.transparent : styles.outlined
      } 
     ${props.color === "secondary" ? styles.secondary : styles.primary} ${
        props.className
      }`}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
