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
      paragraph.push(sentenceStr);
    }
  
    return paragraph.join(". ");
  }
  
  // Example usage
  const randomParagraph = generateRandomParagraph(1, 50); // Generate a paragraph with 3 sentences, each containing 5 words
  console.log(randomParagraph);
  