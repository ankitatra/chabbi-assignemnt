import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./css/dashboard.css";

const Dashbord = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [word, setWord] = useState("");
  const [para, setpara] = useState([]);
  const [count, setcount] = useState(0);
  const [showError, setShowError] = useState(false);
  const [acc, setacc] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showmsg, setShowmsg] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  function generateRandomParagraph(sentenceCount, wordsPerSentence) {
    const characters = "asdfjkl";
    const paragraph = [];

    for (let i = 0; i < sentenceCount; i++) {
      const sentence = [];

      for (let j = 0; j < wordsPerSentence; j++) {
        const wordLength = Math.floor(Math.random() * 10) + 1; // Random word length between 1 and 10
        let word = "";

        for (let k = 0; k < wordLength; k++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          const randomChar = characters.charAt(randomIndex);
          word += randomChar;
        }

        sentence.push(word);
      }

      const sentenceStr = sentence.join(" ");
      setpara(sentenceStr);
    }

    // return paragraph.join(". ");
    console.log(paragraph.join(". "));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 1) {
      setTimeout(() => {
        setTimer(10);
        setShowmsg(true)
      }, 1000);
      setTimeout(()=>{
        window. location. reload(true)
      },3000)
    }
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const checkkey = (key) => {
    if (para[count] == key) {
      setacc(acc + 1);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 1500);
    }
  };
  useEffect(() => {
    generateRandomParagraph(10, 80);
  }, []);

  const handleKeyPress = (event) => {
    const { key } = event;
    setWord(event.target.value);
    setcount(count + 1);
    checkkey(key);
  };

  return (
    <div>
      <Navbar acc={acc} length={para.length} time={formatTime(timer)} />
      {showError && (
        <div
          className="error-alert"
          style={{
            background: "red",
            textAlign: "center",
            color: "white",
            fontSize: "30px",
          }}
        >
          An error occurred. Please try again.
        </div>
      )}
      {showPopup && <div className="popup">Time's up!</div>}
      <div
        style={{
          width: "60%",
          marginLeft: "19%",
          fontSize: "25px",
          marginTop: "10px",
        }}
      >
        {para}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <input
          style={{ width: "80%", height: "100px", padding: "10px" }}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      {showmsg && <div
        style={{ position: "absolute", left: "22%", top: "10px", zIndex: "10",width:"800px",height:"800px",background:"pink",textAlign:"center",fontSize:"40px"}}
      >
        Time Up!
       <p>Congratulation Your accuracy is {acc}</p>
        </div>}
    </div>
  );
};

export default Dashbord;
