import { useState, useEffect } from "react";

const MAXIMUM_INTERVAL_SPEED = 1600;
const MAXIMUM_INITIAL_INTERVAL_SPEED = 400;
const MAXIMUM_LIMIT = 11;
const INTERVAL_OFFSET = 1.2;
const SPEED_AMOUNT = 30;

function useRoulette<T>(options: T[], speed: number): T {
  const [select, setSelect] = useState(options[0]);

  let index = Math.floor(Math.random() * options.length);
  let count = 0;
  let limit = speed * 2;
  let intevalSpeed = MAXIMUM_INITIAL_INTERVAL_SPEED - speed * SPEED_AMOUNT;

  useEffect(() => {
    let rouletteInterval = setInterval(rouletteIntervalFunction, intevalSpeed);

    function rouletteIntervalFunction() {
      if (count > limit) {
        clearInterval(rouletteInterval);
        rouletteInterval = setInterval(rouletteIntervalFunction, intevalSpeed);

        intevalSpeed *= INTERVAL_OFFSET;
        limit -= MAXIMUM_LIMIT - speed;
      }
      if (intevalSpeed > MAXIMUM_INTERVAL_SPEED) {
        clearInterval(rouletteInterval);
      }

      setSelect(options[index % options.length]);
      index += 1;
      count += 1;
    };

    return () => {
      clearInterval(rouletteInterval);
    };
  }, []);

  return select;
}

export default useRoulette;
