import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>
      <ColorfullMessage color="purple">元気でーす</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
