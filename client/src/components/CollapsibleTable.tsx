import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Household, Visit } from '../type';
import {format} from "date-fns";

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
  
  function Row(props: { row: Visit }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    console.log(row.households.map(h => h.guestsCount))
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {format(new Date(row.from),"dd.MM.yyyy")}
          </TableCell>
          <TableCell align="right">{format(new Date(row.from),"hh:mm")}</TableCell>
          <TableCell align="right">{row.to ? format(new Date(row.to),"hh:mm"): "-"}</TableCell>
          <TableCell align="right">{row.households.map(h=> h.guestsCount).reduce((a: number,b: number) => a + b,0)}</TableCell>
          <TableCell align="right">{row.table}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Haushalte
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Vorname</TableCell>
                      <TableCell>Nachname</TableCell>
                      <TableCell align="right">Telefonnummer</TableCell>
                      <TableCell align="right">Anzahl Gäste</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.households.map((householdRow: Household, i:number) => (
                      <TableRow key={householdRow.lastName+ i}>
                        <TableCell component="th" scope="row">
                          {householdRow.firstName}
                        </TableCell>
                        <TableCell>{householdRow.lastName}</TableCell>
                        <TableCell align="right">{householdRow.phone}</TableCell>
                        <TableCell align="right">
                          {householdRow.guestsCount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  interface Props {
      items: Visit[];
  }

  const CollapsibleTable:React.FC<Props> = (props: Props) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Datum</TableCell>
              <TableCell align="right">Von</TableCell>
              <TableCell align="right">Bis</TableCell>
              <TableCell align="right">Anzahl Gäste</TableCell>
              <TableCell align="right">Tischnummer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((row) => (
              <Row key={row._id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  export default CollapsibleTable;