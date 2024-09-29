import { useEffect, useState } from 'react';

const useCountUp = (dataValue, duration) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = dataValue / (duration / 40);
    const interval = setInterval(() => {
      start += increment;
      if (start >= dataValue) {
        clearInterval(interval);
        setValue(dataValue);
      } else {
        setValue(start);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [dataValue, duration]);

  return Math.floor(value);
};

export default useCountUp;
