import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import firebase from "../firebase";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const CustomizedTables = ({ users }) => {
  const classes = useStyles();
  const [phone, setPhone] = React.useState(users.phone);
  const [symptoms, setSymptoms] = React.useState(users.symptoms);
  const [time, setTime] = React.useState(users.time);
  const [ageRange, setAgeRange] = React.useState(users.ageRange);
  const [gender, setGender] = React.useState(users.gender);

  const onRead = () => {
    const db = firebase.firestore();
    db.collection("userDiagnosis")
      .doc(users.id)
      .set({ ...users, phone, symptoms, time, ageRange, gender });
  };

  const rows = [onRead(phone, symptoms, time, ageRange, gender)];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Phone Numbers</StyledTableCell>
            <StyledTableCell align="right">Symptoms</StyledTableCell>
            <StyledTableCell align="right">Age Range</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.phone}>
              <StyledTableCell component="th" scope="row">
                {row.phone}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.symptoms}</StyledTableCell>
              <StyledTableCell align="right">{row.ageRanger}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
