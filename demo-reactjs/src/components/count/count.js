import React, { useState } from 'react';
import './count.css'

function Sum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [tong, setTong] = useState(0);

  const tinhTong = () => {
    setTong(parseInt(num1) + parseInt(num2));
  }

  return (
    <div className="sum">
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <button onClick={tinhTong}>Tính tổng</button>
      <p>Tổng là: {tong}</p>
    </div>
  );
}

export default Sum;