import React from "react";
import "./App.css";
import Props from "./components/Props";

function App() {
  const img1 = "pk.jpeg";
  const img2 = "smile.png";
  const img3 = "tesla.jpeg";
  const img4 = "forAll.jpg";
  const img5 = "pathan.jpeg";
  const img6 = "mage.webp";
  const img7 = "assassin.avif";
  const img8 = "joy.webp";
  

  return (
    <div className="App flex flex-col justify-center items-center">
      <div className="flex justify-center gap-20 w-[75%] h-[20rem] items-center mt-16 py-5 px-20 box-content bg-slate-300">
        <Props
          img={img1}
          name="Pk"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />

        <Props
          img={img2}
          name="Smile"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
        <Props
          img={img3}
          name="Tesla"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
        <Props
          img={img4}
          name="One For All"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
      </div>
      <div className="flex justify-center gap-20 flex-wrap w-[75%] h-[20rem] items-center mt-20 py-5 px-20 box-content bg-slate-300">
        <Props
          img={img5}
          name="Pathaan"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />

        <Props
          img={img6}
          name="Mage"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
        <Props
          img={img7}
          name="Assassin"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
        <Props
          img={img8}
          name="Joy"
          content="This is a Netfilx Series"
          btn="Watch Now"
        />
      </div>
    </div>
  );
}

export default App;
