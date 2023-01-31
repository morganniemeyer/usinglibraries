import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, genre, season, structure) {
  return { name, genre, season, structure };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const rows = [
  createData('Twin Cities Con', 'multi', 'fall/winter', 'corporation'),
  createData('Anime Detour', 'anime', 'spring', 'non-profit'),
  createData('Anime Nebraskon', 'anime', 'fall', 'non-profit'),
  createData('C2E2', 'multi', 'multi', 'unknown'),
  createData('Ai-Kon', 'anime', 'summer', 'unknown'),
];

export default function NewTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell align="right">Genre Type</StyledTableCell>
            <StyledTableCell align="right">Season</StyledTableCell>
            <StyledTableCell align="right">Structure</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <TableCell align="right">{row.season}</TableCell>
              <TableCell align="right">{row.structure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
