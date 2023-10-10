import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import './currency-converter.css';

function CurrencyConverter() {
    const [from, setFrom] = useState("Dong")
    const [to, setTo] = useState("USD")
    const [amount, setAmount] = useState()

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleAmountChange= (event) => {
        setAmount(event.target.value);
    };

    const handleConvertClick= () => {
        let result = (amount * from) / to;
        setAmount(result);
    };

    const handleSwapClick= () => {
        let temp = from;
        setFrom(to);
        setTo(temp);
    };

     console.log(amount, from, to)

    return (
        <div className="currency-converter">

           <TextField id="outlined-basic" label="Amount" value={amount} onChange={handleAmountChange}/>

           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={from}
           label="From"
           onChange={handleFromChange}
           >
                <MenuItem value={"Dong"}>Dong</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"Euro"}>Euro</MenuItem>
           </Select>

           <IconButton onClick={handleSwapClick}>
                <SwapHorizIcon />
           </IconButton>

           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={to}
           label="To"
           onChange={handleToChange}
           >
                <MenuItem value={"Dong"}>Dong</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"Euro"}>Euro</MenuItem>
           </Select>

           <div className="convert-button">
               <Button variant="contained" onClick={handleConvertClick}>Convert</Button>
           </div>

        </div>
    )
}

export default CurrencyConverter