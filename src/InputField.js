import { Grid, Input, TextField } from "@material-ui/core"
import { createRef, useContext, useEffect, useState } from "react";
import { StoreContext } from "./Store";
import WanakanaInput from "./WanakanaInput";
import React from 'react';
import KanaInput from "./KanaInput";


const InputField = () => {
  const data = useContext(StoreContext).data
  const setData = useContext(StoreContext).setData

  // console.log(data, setData)
  const inputChange = (event) => {
    console.log(data)
    const newData = { ...data, inputValue: event.target.value }
    setData(newData);
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        // justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            id="answer-input"
            variant="outlined"
            value={data.inputValue}
            onChange={inputChange}
          >
          </TextField>
        </Grid>

        <Grid item>
          <WanakanaInput name="" value={data.inputValue} onChange={inputChange}></WanakanaInput>
        </Grid>

        <Grid item>
          <KanaInput name="" value={data.inputValue} onChange={inputChange}>
            <TextField
              variant="outlined"
            // value={data.inputValue}
            // onChange={inputChange}
            >
            </TextField>
          </KanaInput>
        </Grid>

        <Grid item>
          <KanaInput name="" value={data.inputValue} onChange={inputChange}>
            <input></input>
          </KanaInput>
        </Grid>
      </Grid>

    </React.Fragment>

  )
}

export default InputField