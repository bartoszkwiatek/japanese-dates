import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import React from 'react'
import { page1table1 as numbers } from './db/page1table1'
import { page3table1 as age } from './db/page3table1'
import { page4table1 as years } from './db/page4table1'
import { page5table1 as months } from './db/page5table1'
import { page5table2 as days } from './db/page5table2'
import { page6table1 as dayNames } from './db/page6table1'


export const DictionaryTable = () => {

  return (
    <Container
      maxWidth="xs"
      style={{ padding: "50px" }}

    >
      <TableContainer
        component={Paper}
      >
        <Table
          size="small"
        >
          <TableBody>
            {
              Object.keys(numbers).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {numbers[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>

          <TableBody>
            {
              Object.keys(age).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {age[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>

          <TableBody>
            {
              Object.keys(years).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {years[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>

          <TableBody>
            {
              Object.keys(months).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {months[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>

          <TableBody>
            {
              Object.keys(days).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {days[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>

          <TableBody>
            {
              Object.keys(dayNames).map(key => {
                return (
                  <TableRow key={key}>
                    <TableCell align='center'>
                      {key}
                    </TableCell>
                    <TableCell align='center'>
                      {dayNames[key]}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

  )
}