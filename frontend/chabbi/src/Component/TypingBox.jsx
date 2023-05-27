import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentKey,
  incrementKeyCount,
  setAccuracy,
} from './redux/actions';

const TypingApp = () => {
  const dispatch = useDispatch();
  const currentKey = useSelector((state) => state.key.currentKey);
  const keyCount = useSelector((state) => state.key.keyCount);
  const accuracy = useSelector((state) => state.accuracy);

  const handleKeyPress = (event) => {
    const { key } = event;
    dispatch(setCurrentKey(key));

    // Compare with the expected key and update statistics
    // You can customize this logic based on your requirements
    // ...

    dispatch(incrementKeyCount());
  };

  useEffect(() => {
    // Calculate accuracy and dispatch setAccuracy action
    // You can customize this logic based on your requirements
    // ...

    dispatch(setAccuracy(calculatedAccuracy));
  }, [keyCount]);

  return (
    <div>
      <div>Next Key: {currentKey}</div>
      <input type="text" onKeyPress={handleKeyPress} />
      <div>Key Count: {keyCount}</div>
      <div>Accuracy: {accuracy}%</div>
    </div>
  );
};

export default TypingApp;
