import { useState, useEffect } from 'react';

const Typewriter = ({ words, delay }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentWordProgress, setCurrentWordProgress] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentWordIndex < words.length) {
      const word = words[currentWordIndex];
      const nextWordIndex = (currentWordIndex + 1) % words.length;

      if (currentWordProgress < word.length) {
        timeout = setTimeout(() => {
          setCurrentWord(word.slice(0, currentWordProgress + 1));
          setCurrentWordProgress(prevProgress => prevProgress + 1);
        }, delay);
      } else {
        // Wait for a pause before moving to the next word
        timeout = setTimeout(() => {
          setCurrentWord('');
          setCurrentWordProgress(0);
          setCurrentWordIndex(nextWordIndex);
        }, delay * 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, currentWordProgress, delay, words]);

  return <h1>{currentWord}</h1>;
};

export default Typewriter;