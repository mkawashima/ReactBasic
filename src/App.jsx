import React, { useState, useEffect } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>
      <ColorfullMessage color="purple">元気でーす</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShow}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>○</p>}
    </>
  );
};

export default App;
