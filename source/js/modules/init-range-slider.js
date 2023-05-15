const initRangeSlider = () => {
  const rangeInput = document.querySelectorAll('.range-slider__controls input');
  const priceInput = document.querySelectorAll('.range-slider__price input');
  const range = document.querySelector('.range-slider__progress');
  let priceGap = 0.1;

  priceInput.forEach((input) => {
    input.addEventListener('input', (e) =>{
      let minPrice = parseFloat(priceInput[0].value, 10);
      let maxPrice = parseFloat(priceInput[1].value, 10);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
        if (e.target.className === 'range-slider__price-min') {
          rangeInput[0].value = minPrice;
          range.style.left = ((minPrice / rangeInput[0].max) * 100) + '%';
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
        }
      }
    });
  });

  rangeInput.forEach((input) =>{
    input.addEventListener('input', (e) =>{
      let minVal = parseFloat(rangeInput[0].value, 10);
      let maxVal = parseFloat(rangeInput[1].value, 10);
      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === 'range-slider__control-min') {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = ((minVal / rangeInput[0].max) * 100) + '%';
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      }
    });
  });
};

export {initRangeSlider};
