import React from "react";

const UseCallbackButtons = props => {
  console.log('render...');
  return (
   <div>
    <button className="btn" onClick={() => props.inc(6)}>+6</button>
    <button className="btn" onClick={() => props.inc(12)}>+12</button>
    <button className="btn" onClick={() => props.inc(18)}>+18</button>
   </div>
  );
}

export default React.memo(UseCallbackButtons);

/**
 * React.memo -> criará um cache do componente
 * Já que não haverá alteração nas props, retorne o mesmo componente novamente
 * Obs: note que não há mudança nos valores dos parâmetros em UseCallbackButtons, devido a esse motivo estamos usando o .memo
 */