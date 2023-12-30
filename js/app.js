document.addEventListener('DOMContentLoaded', function() {
    initialiseInterval(document.querySelector('.container'), 3000);
});

function initialiseInterval(parentElement, intervalDuration = 3000) {
  const elems = parentElement.querySelectorAll('.card');
  // set timer and emit click event to see the first element then the second then the third...
  let i = 0;
  let animationInterval = createInterval(intervalDuration);

  // pause the timer when mouse is over the card
  parentElement.addEventListener('mouseover', () => {
    clearInterval(animationInterval);
  });

  // resume the timer when mouse is out of the card
  parentElement.addEventListener('mouseout', () => {
    animationInterval = createInterval(intervalDuration);
  });

  // set clicked index to the current index
  elems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      i = index;
    });
  });

  function createInterval(durationMs) {
    return setInterval(() => {
      elems[i].click();
      i = i + 1;
      if (i === elems.length) {
        i = 0;
      }
    }, durationMs);
  }
}
