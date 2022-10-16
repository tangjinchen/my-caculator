import React, { useState, useCallback, useMemo } from 'react';

import CaculatorBtn from './CaculatorBtn';

import '../styles/App.css';

/** 我的计算器组件 */
const MyCaculator = () => {

  /** 计算器展示的，计算结果 */
  const [result, setResult] = useState<string>('');

  /** 计算器正则 */
  const operatorReg = useMemo(() => {
    return /[+]|-|×|÷/g;
  }, []);

  /** 计算器支持的，运算符 */
  const operatorType = useMemo(() => {
    return ['+', '-', '×', '÷'];
  }, []);


  /** 清空计算结果 */
  const handleClearResult = () => {
    setResult('');
  }

  /** 逐项删除计算框中的输入 */
  const handleDeleteResult = useCallback(() => {
    // 如果输入框中为空，则直接return
    if (!result) return;
    // 否则，删除最后一个数字
    const temp = result.slice(0, result.length - 1);
    setResult(temp);
  }, [result]);

  /** 输入，计算相关数值和符号 */
  const handleInput = useCallback((val: string) => {
    // 运算数值组成的数组
    const numArr = result.split(operatorReg);
    let temp = '';

    // 如果显示有运算符，则需要先计算结果
    if (result.search(operatorReg) !== -1) {
      // 非运算符输入，直接拼接
      if (!operatorType.includes(val) || val === '.') {

        // 运算符后面数字
        const lastPart = numArr[1];

        // 如果已经有‘.’符号，就return
        if (val === '.' && lastPart.indexOf('.') !== -1) {
          if (result.indexOf('.') !== -1) return;
        }

        temp = result + val;
      } else { // 运算符输入：如果前面字符串中，存在运算符，则先把前面过程计算出来，再做拼接
        
        // 运算符组成的数组
        const operatorArr = result.match(operatorReg) || [];

        switch(operatorArr[0]) {
          case '+':
            temp = `${Number(numArr[0]) + Number(numArr[1])}${val}`;
            break;          
          case '-':
            temp = `${Number(numArr[0]) - Number(numArr[1])}${val}`;
            break;          
          case '×':
            temp = `${Number(numArr[0]) * Number(numArr[1])}${val}`;
            break;          
          case '÷':
            temp = `${Number(numArr[0]) / Number(numArr[1])}${val}`;
            break;
          default:
            temp = '输入有错误';
        }
      }
    } else { // 否则，没有运算符，则直接拼接
      // 如果已经有‘.’符号，就return
      if (val === '.') {
        if (result.indexOf('.') !== -1) return;
      }
      
      temp = result + val;
    }

    setResult(temp);
  }, [operatorReg, operatorType, result])

  /** 点击 “=”符号，输出计算结果 */
  const handleClickEqualsBtn = useCallback(() => {
    let temp = '';
    // 运算数值组成的数组
    const numArr = result.split(operatorReg);
    // 运算符组成的数组
    const operatorArr = result.match(operatorReg) || [];

    switch(operatorArr[0]) {
      case '+':
        temp = `${Number(numArr[0]) + Number(numArr[1])}`;
        break;          
      case '-':
        temp = `${Number(numArr[0]) - Number(numArr[1])}`;
        break;          
      case '×':
        temp = `${Number(numArr[0]) * Number(numArr[1])}`;
        break;          
      case '÷':
        temp = `${Number(numArr[0]) / Number(numArr[1])}`;
        break;
      default:
        temp = '输入有错误';
    }

    setResult(temp);
  }, [operatorReg, result]);

  return (
    <div className="app">
      <header className="header">
        {/* 标题 */}
        <h3>这是我的计算器</h3>
      </header>
      {/* 计算器主体 */}
      <section className='section'>
        <div className='caculator_box'>
          {/* 计算器，结果显示模块 */}
          <div className="calculator_result">{result}</div>
          {/* 计算器，输入模块 */}
          <div className='input_box'>
            <CaculatorBtn value='C' hanldeDelete={handleClearResult} />
            <CaculatorBtn value='DEL' hanldeDelete={handleDeleteResult} />
            <CaculatorBtn value='÷' hanldeClick={() => handleInput('÷')} />
            <CaculatorBtn value='×' hanldeClick={() => handleInput('×')} />
          </div>
          {/* 第二行，输入项 */}
          <div className='input_box'>
            <CaculatorBtn value='7' hanldeClick={() => handleInput('7')} />
            <CaculatorBtn value='8' hanldeClick={() => handleInput('8')} />
            <CaculatorBtn value='9' hanldeClick={() => handleInput('9')} />
            <CaculatorBtn value='-' hanldeClick={() => handleInput('-')} />
          </div>
          {/* 第三行，输入项 */}
          <div className='input_box'>
            <CaculatorBtn value='4' hanldeClick={() => handleInput('4')} />
            <CaculatorBtn value='5' hanldeClick={() => handleInput('5')} />
            <CaculatorBtn value='6' hanldeClick={() => handleInput('6')} />
            <CaculatorBtn value='+' hanldeClick={() => handleInput('+')} />
          </div>
          {/* 第四、五行，输入项 */}
          <div className='caculator_footer'>
            <div className='footer-input__box'>
              {/* 第四行，输入项 */}
              <div className='footer-input__item'>
                <CaculatorBtn value='1' hanldeClick={() => handleInput('1')} />
                <CaculatorBtn value='2' hanldeClick={() => handleInput('2')} />
                <CaculatorBtn value='3' hanldeClick={() => handleInput('3')} />
              </div>
              {/* 第五行，输入项 */}
              <div className='footer-input__item'>
                <CaculatorBtn value='0' hanldeClick={() => handleInput('0')} className="input-item__0" />
                <CaculatorBtn value='.' hanldeClick={() => handleInput('.')} />
              </div>
            </div>
            {/* 点击 “=“号，获得计算结果 */}
            <div>
              <CaculatorBtn value='=' handleCompute={() => handleClickEqualsBtn()} className='equal_btn' />
            </div>
          </div>          
        </div>
      </section>
    </div>
  );
}

export default MyCaculator;
