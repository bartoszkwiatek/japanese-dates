import { Grid, TextField } from "@material-ui/core";
import React, { useContext } from 'react';
import KanaInput from "./KanaInput";
import { StoreContext } from "./Store";


const InputField = () => {
  const data = useContext(StoreContext).data
  const setData = useContext(StoreContext).setData

  // console.log(data, setData)
  const inputChange = (event) => {
    // console.log(data)
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
          {/* <KanaInput
            name=""
            value={data.inputValue}
            onChange={inputChange}>
            <input></input>
          </KanaInput> */}
        </Grid>
      </Grid>

    </React.Fragment>

  )
}

export default InputField