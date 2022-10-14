import React from 'react';
import './App.css';

const MyCaculator = () => {
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
          <div className="calculator_result">10000</div>
          {/* 计算器，输入模块 */}
          <div className='input_box'>
            <button className='input_item'>C</button>
            <button className='input_item'>DEL</button>
            <button className='input_item'>÷</button>
            <button className='input_item'>×</button>
          </div>
          {/* 第二行，输入项 */}
          <div className='input_box'>
            <button className='input_item'>7</button>
            <button className='input_item'>8</button>
            <button className='input_item'>9</button>
            <button className='input_item'>-</button>
          </div>
          {/* 第三行，输入项 */}
          <div className='input_box'>
            <button className='input_item'>4</button>
            <button className='input_item'>5</button>
            <button className='input_item'>6</button>
            <button className='input_item'>+</button>
          </div>
          {/* 第四、五行，输入项 */}
          <div className='caculator_footer'>
            <div className='footer-input__box'>
              {/* 第四行，输入项 */}
              <div className='footer-input__item'>
                <button className='input_item'>1</button>
                <button className='input_item'>2</button>
                <button className='input_item'>3</button>
              </div>
              {/* 第五行，输入项 */}
              <div className='footer-input__item'>
                <button className='input-item__0'>0</button>
                <button className='input_item'>.</button>
              </div>
            </div>
            {/* 点击 “=“号，获得计算结果 */}
            <div>
              <button className='equal_btn'>=</button>
            </div>
          </div>          
        </div>
      </section>
    </div>
  );
}

export default MyCaculator;
