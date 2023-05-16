const initRangeSlider = () => {
  const rangeInput = document.querySelectorAll('.range-slider__controls input');
  const priceInput = document.querySelectorAll('.range-slider__price input');
  const rangeAll = document.querySelectorAll('.range-slider__progress');
  let priceGap = 0.1;

  priceInput.forEach((input, i) => {
    let k = 2 * Math.floor(i / 2); // 0,1 -> 0   2,3-> 2    4,5 -> 4 ...
    input.addEventListener('input', (e) =>{
      let range = rangeAll[k / 2];

      let minPrice = parseFloat(priceInput[k].value, 10);
      let maxPrice = parseFloat(priceInput[k + 1].value, 10);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[k + 1].max) {
        if (e.target.className === 'range-slider__price-min') {
          rangeInput[k].value = minPrice;
          range.style.left = ((minPrice / rangeInput[k].max) * 100) + '%';
        } else {
          rangeInput[k + 1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[k + 1].max) * 100 + '%';
        }
      }
    });
  });

  rangeInput.forEach((input, i) =>{
    let k = 2 * Math.floor(i / 2); // 0,1 -> 0   2,3-> 2    4,5 -> 4 ...
    input.addEventListener('input', (e) =>{
      let range = rangeAll[k / 2];

      let minVal = parseFloat(rangeInput[k].value, 10);
      let maxVal = parseFloat(rangeInput[k + 1].value, 10);

      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === 'range-slider__control-min') {
          rangeInput[k].value = maxVal - priceGap;
        } else {
          rangeInput[k + 1].value = minVal + priceGap;
        }
      } else {
        priceInput[k].value = minVal;
        priceInput[k + 1].value = maxVal;
        range.style.left = ((minVal / rangeInput[k].max) * 100) + '%';
        range.style.right = 100 - (maxVal / rangeInput[k + 1].max) * 100 + '%';
      }
    });
  });
};

export {initRangeSlider};
