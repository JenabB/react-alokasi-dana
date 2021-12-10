import React from "react";

export default function Modal({ isAddShow, setIsAddShow }) {
  return (
    <>
      {isAddShow ? (
        <div>
          <div>
            <button onClick={() => setIsAddShow(false)}>x</button>
          </div>
          <h1>ini modal create</h1>
        </div>
      ) : null}
    </>
  );
}
