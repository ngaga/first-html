
  function incrementCounter() {
    const counterElement = document.getElementById('counter');
    let counterValue = parseInt(counterElement.textContent);
    counterValue += 2;
    counterElement.textContent = counterValue.toString();
  }
