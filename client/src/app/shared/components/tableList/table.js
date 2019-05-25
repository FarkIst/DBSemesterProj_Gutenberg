import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';

const EntityTable = props => {
  return (
    <div>
      <h2> {props.title} </h2>
      <Table caption="Entity Table">
        <TableHeader>
          <TableRow>
            {props.COLUMNS.map(c => (
              <TableCell
                key={c.property}
                scope="col"
                border="bottom"
                align={c.align}
              >
                <Text>{c.label}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.DATA.map(datum => (
            <TableRow key={datum.id}>
              {props.COLUMNS.map(c => (
                <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                  <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {props.COLUMNS.map(c => (
              <TableCell key={c.property} border="top" align={c.align}>
                <Text>{c.footer}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default EntityTable;
