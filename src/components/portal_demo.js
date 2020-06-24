import React from 'react';
import ReactDom from 'react-dom';

const PortalDemo = ()=>{
  return ReactDom.createPortal(
    <div>
      <h1>Portal Demo </h1>
    </div>,
    document.getElementById('portal-root')
  )
}
export default PortalDemo
