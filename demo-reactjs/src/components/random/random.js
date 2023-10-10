import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import './random.css'
// import style from './random.module.css'

import styled from 'styled-components'

const WrapperRandomNumber = styled('div')`
  margin-top: 130px;
`
const WrapperFirstRow = styled('div')`
  display: flex;
  justify-content: space-between;
`
const RandomResult = styled('div')`
  margin: 2rem;
  font-size: 50px;
  font-weight: bold;
`
const WrapperMinMax = styled('div')`
  display: flex;
  flex-direction: column;
`
const WrapperMin = styled('div')`
  margin-bottom: 20px;
`
const WrapperMax = styled('div')``

const RandomButton = styled('div')`
  margin-top: 20px;
`

function Random() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    if(min === "" || max === "") {
      alert("Vui lòng nhập cả giá trị min và max");
      return;
    }

    let minNum = Math.ceil(min);
    let maxNum = Math.floor(max);
    let result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    setRandomNumber(result);
  }

  return (
    <WrapperRandomNumber>
      <WrapperFirstRow>
        <RandomResult>
          {randomNumber}
        </RandomResult>
          <WrapperMinMax>
            <WrapperMin>
              <TextField id="standard-basic" label="Min" variant="standard" value={min} onChange={e => setMin(e.target.value)} />
            </WrapperMin>
            <WrapperMax>
              <TextField id="standard-basic" label="Max" variant="standard" value={max} onChange={e => setMax(e.target.value)} />
            </WrapperMax>
          </WrapperMinMax>
      </WrapperFirstRow>
      <RandomButton>
      <Button variant="contained" onClick={generateRandomNumber}>Generate</Button>
      </RandomButton>
    </WrapperRandomNumber>
  );
}

export default Random;