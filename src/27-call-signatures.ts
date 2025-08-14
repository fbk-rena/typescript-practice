type TimerFunction = {
    (seconds: number): void;
    interval: boolean;
    name: string;
  };
  
  function countdown(seconds: number) {
    if ((countdown as TimerFunction).interval) {
      let current = seconds;
      const id = setInterval(() => {
        console.log(current--);
        if (current < 0) clearInterval(id);
      }, 1000);
    } else {
      console.log(`Iniciando cuenta regresiva de ${seconds} segundos`);
    }
  }
  
  (countdown as TimerFunction).interval = true;
  (countdown as TimerFunction).name = "Countdown Function";
  
  const myTimer: TimerFunction = countdown as TimerFunction;
  myTimer(5);
  