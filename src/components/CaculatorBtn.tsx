import React from 'react';

import '../styles/App.css';

/** 按键组件外部传入属性 */
export interface IProps {
  /** 按键输入string */
  value?: string;
  /** 样式类名 */
  className?: string;
  /** 除C、DEL按键外的，点击事件 */
  hanldeClick?: () => void;
  /** C、DEL按键，点击事件 */
  hanldeDelete?: () => void;
  /** “=”号点击事件 */
  handleCompute?: () => void;
}

/** 计算器按钮组件 */
const CaculatorBtn = (props: IProps) => {
  const {value = '', className = '', hanldeClick, hanldeDelete, handleCompute } = props;
  
  let dom = null;

  if (hanldeClick) {
    dom = <button onClick={() => hanldeClick()} className={className ? className : 'input_item'}>{value}</button>;
  }

  if (hanldeDelete) {
    dom = <button onClick={() => hanldeDelete()} className={className ? className : 'input_item'}>{value}</button>
  }

  if (handleCompute) {
    dom = <button onClick={() => handleCompute()} className={className ? className : 'input_item'}>{value}</button>
  }


  return dom;
}

export default CaculatorBtn;