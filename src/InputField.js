import { TextField } from "@material-ui/core"
import { useState } from "react";
import * as wanakana from 'wanakana';


const InputField = () => {
  const [value, setValue] = useState('');
  wanakana.bind(document.getElementById("answer-input"), { IMEMode: true })
  const inputChange = (event) => {

    setValue(event.target.value);
    console.log(value)
  }

  return (
    <TextField
      id="answer-input"
      variant="outlined"
      value={value}
      onChange={inputChange}
    >

    </TextField>
  )
}

export default InputField