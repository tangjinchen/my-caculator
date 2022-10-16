/** 处理数值的展示格式，以千分位、带小数点格式展示 */
const formatNumber = (val: string) => {
  let num = val.replace(/,/g, '');
  let result = '';
  let integerTemp = '';

  // 数字中包含小数点符号
  if (num.indexOf('.') !== -1) {
    const arr = num.split('.');
    let integerPart = arr[0];
    const floatPart = arr[0];

    while(integerPart.length > 3) {
      integerTemp = ',' + integerPart.slice(-3) + integerTemp;
      integerPart = integerPart.slice(0, integerPart.length - 3)
    }

    if (integerPart.length <= 3) {
      result = `${integerPart}${integerTemp}.${floatPart}`;
    }

  } else { // 数字中没有小数点符号

    while(num.length > 3) {
      integerTemp = ',' + num.slice(num.length - 3) + integerTemp;
      num = num.slice(0, num.length - 3)
    }

    if (num.length <= 3) {
      result = `${num}${integerTemp}`;
    }
  }

  return result;
}


export { formatNumber };