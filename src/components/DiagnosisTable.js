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
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.default, //black
    color: theme.palette.common.white,
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
    minWidth: 600, //650 initial
    // backgroundColor: "#45B39D",
  },
});

export default function DiagnosisTable() {
  const classes = useStyles();
  const [diagnosis, setDiagnosis] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const diagnosisRef = await db.collection("userDiagnosis").get();
      setDiagnosis(
        diagnosisRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size="small"
        aria-label="a dense table-dark"
      >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Age Range</StyledTableCell>
            <StyledTableCell align="left">Symptom</StyledTableCell>
            <StyledTableCell align="left">Recorded Time</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {diagnosis.map((diagnose) => (
            <StyledTableRow key={diagnose.id}>
              <TableCell component="th" scope="row">
                {diagnose.phone}
              </TableCell>
              <TableCell align="left">{diagnose.gender}</TableCell>
              <TableCell align="left">{diagnose.age}</TableCell>
              <TableCell align="left">{diagnose.symptoms}</TableCell>
              <TableCell align="left">
                {moment(diagnose.time.toDate(), "YYYY-MM-DD").format("LLL")}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
