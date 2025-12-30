import { useState, useEffect } from "react";

export default function CheckoutTimer() {
  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      if (timerMin > 0 && timerSec === 0) {
        setTimerSec(59);
        setTimerMin(timerMin - 1);
      } else {
        setTimerSec(timerSec - 1);
      }
    }, 1000);
  }, [timerSec]);

  return (
    <>
      Min:{timerMin}
      Sec:{timerSec}
    </>
  );
}
