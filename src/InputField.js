import { TextField } from "@material-ui/core"
import { createRef, useContext, useEffect, useState } from "react";
import * as wanakana from 'wanakana';
import { StoreContext } from "./Store";


const InputField = () => {
  const data = useContext(StoreContext).data
  const setData = useContext(StoreContext).setData
  const reference = createRef();

  // console.log(data, setData)
  console.log(wanakana.toKana('G'))
  const inputChange = (event) => {
    console.log(data)
    const newData = { ...data, inputValue: wanakana.toKana(event.target.value) }
    setData(newData);
  }
  return (


    <TextField
      id="answer-input"
      variant="outlined"
      value={data.inputValue}
      onChange={inputChange}
      ref={reference}
    >

    </TextField>
  )
}

export default InputField