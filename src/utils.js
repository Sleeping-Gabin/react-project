function numToPriceStr(price) {
  let priceArr = [...price.toString()];
  let length = priceArr.length;

  let priceStr = priceArr.reduce((prev, cur, idx) => {
    if ((length-idx)%3 === 0)
      prev += ",";
    return prev += cur;
  });
  
  return priceStr;
}

export { numToPriceStr };