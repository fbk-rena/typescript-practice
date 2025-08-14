class Counter {
    private count = 0;
  
    increment(this: Counter) {
      this.count++;
    }
  
    getCount(this: Counter) {
      return this.count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount()); // 1
