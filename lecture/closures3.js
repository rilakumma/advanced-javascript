let globalCounter = 0;

module.exports = startingValue => {
<<<<<<< HEAD
  let localCounter = startingValue;
=======
  let localCounter = startingValue
>>>>>>> b7aba5f4f3fa0b0f9dd3f7197705f70bde74cfc7
  return {
    incrementLocalCounter() {
      localCounter++;
      return localCounter;
    },
    decrementLocalCounter() {
      localCounter--;
      return localCounter;
    },
    incrementGlobalCounter() {
      globalCounter++;
      return globalCounter;
    },
    decrementGlobalCounter() {
      globalCounter--;
      return globalCounter;
    }
  };
};
