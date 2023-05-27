import React, { useEffect, useState } from "react";

const Random = () => {
  const[para,setpara]=useState([])
  
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
      localStorage.setItem("para",para)
    }

    // return paragraph.join(". ");
    console.log(paragraph.join(". "))
  }
 
};

export default Random;

