import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import firebase from "../../firebase";
import moment from "moment";

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

export default function RecommendationsTable() {
  const classes = useStyles();
  const [recommendation, setRecommendation] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const recommendationsRef = await db.collection("Recommendation").get();
      setRecommendation(
        recommendationsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
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
            <StyledTableCell>Recommendation</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {recommendation.map((rec) => (
            <StyledTableRow key={rec.id}>
              <TableCell component="th" scope="row">
                {rec.recommendation}
              </TableCell>
              {/* <TableCell align="right">{diagnose.gender}</TableCell>
              <TableCell align="right">{diagnose.ageRange}</TableCell>
              <TableCell align="right">{diagnose.symptoms}</TableCell> */}
              <TableCell align="right">
                {moment(rec.date.toDate(), "YYYY-MM-DD").format("LLL")}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
