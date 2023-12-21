import { useState } from "react";
import anh1 from "./image/anh1.png";
import anh2 from "./image/anh2.png";
import anh3 from "./image/anh3.png";
import anh4 from "./image/anh4.png";
import anh5 from "./image/anh5.png";
import anh6 from "./image/anh6.png";
import bell from "./image/bell.png";
import "./App.css";

function App() {
  const [noels] = useState([
    "",
    "G",
    "Giáng",
    "Giáng sinh",
    "Giáng sinh vui",
    "Giáng sinh vui vẻ",
    "Chúc bé yêu của anh",
    "Giáng sinh vui vẻ <3 <3",
  ]);

  const [ebb] = useState([
    ["E", "E"],
    ["M", "M"],
    ["B", "B"],
    ["E", "E"],
    ["I", "B"],
    ["U", "U"],
  ]);
  return (
    <div className="app">
      <div className="noel">
        <div className="bell">
          <img src={bell} alt="" className="bell-1" />
        </div>
        {noels.map((noel) => {
          return (
            <div className="leaf-layer" key={noel}>
              <div className="item left">
                <div className="leaves">{noel}</div>
              </div>
              <div className="item right">
                <div className="leaves">{noel}</div>
              </div>
            </div>
          );
        })}
        {ebb.map((e) => {
          return (
            <div className="leaf-layer" key={e[0]}>
              <div className="item left">
                <div className="leaves">{e[0]}</div>
              </div>
              <div className="item right">
                <div className="leaves">{e[1]}</div>
              </div>
            </div>
          );
        })}
        <div className="img-ctn">
          <img src={anh1} alt="" className="img1" />
          <img src={anh2} alt="" className="img2" />
          <img src={anh3} alt="" className="img3" />
          <img src={anh4} alt="" className="img4" />
          <img src={anh5} alt="" className="img5" />
          <img src={anh6} alt="" className="img6" />
        </div>
      </div>
    </div>
  );
}

export default App;
