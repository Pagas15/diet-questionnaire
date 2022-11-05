import React from 'react';

const CountSize = ({ placeholder, typeName, style, max, value, setValue }) => {
  const min = 0;

  const onChange = (e) => {
    const insefa = Number(e.target.value);
    insefa >= min && insefa <= max && setValue(insefa);
  };
  return (
    <label className="countSize" style={style}>
      <input
        onChange={onChange}
        value={value}
        type="number"
        placeholder={placeholder}
        min={min}
        max={max}
      />
      <div className="countSize__right">{typeName}</div>
    </label>
  );
};

export default CountSize;
