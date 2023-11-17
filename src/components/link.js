import React, { Component } from "react";

export default function Link(props) {
  return (
    <a className="underline text-blue-700" target="_blank" href={props.link}>
      {props.children}
    </a>
  );
}
