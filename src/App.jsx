import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontize: "18px"
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p style={{ color: "red" }}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
