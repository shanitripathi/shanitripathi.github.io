import React from "react";

const Home = () => {
  return (
    <div class="container mb-2">
      <div class="line-1 line">
        <div class="left">
          <button class="cell" id="1"></button>
        </div>
        <div class="middle">
          <button class="cell" id="2"></button>
        </div>
        <div class="right">
          <button class="cell" id="3"></button>
        </div>
      </div>
      <div class="line-2 line">
        <div class="left">
          <button class="cell" id="4"></button>
        </div>
        <div class="middle">
          <button class="cell" id="5"></button>
        </div>
        <div class="right">
          <button class="cell" id="6"></button>
        </div>
      </div>
      <div class="line-3 line">
        <div class="left">
          <button class="cell" id="7"></button>
        </div>
        <div class="middle">
          <button class="cell" id="8"></button>
        </div>
        <div class="right">
          <button class="cell" id="9"></button>
        </div>
      </div>
      <div>
        <button id="undobutton">
          <h6 class="p-0 m-0">UNDO</h6>
        </button>
      </div>
      <h1 class="demo"></h1>
    </div>
  );
};

export default Home;
