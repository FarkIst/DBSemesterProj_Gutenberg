import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Table from './table';

afterEach(cleanup);

const Data = [
  { id: 1, name: 'Eric', email: 'eric@local', amount: 3775 },
  { id: 2, name: 'Chris', email: 'chris@local', amount: 5825 },
  { id: 3, name: 'Alan', email: 'alan@local' },
];
const Columns = [
  {
    property: 'name',
    label: 'Name',
    dataScope: 'row',
    format: datum => <strong>{datum.name}</strong>,
  },
  {
    property: 'email',
    label: 'Email',
  },
  {
    property: 'amount',
    label: 'Amount',
    align: 'end',
  },
];

describe('Table', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId, container } = render(
      <Table DATA={Data} COLUMNS={Columns} />,
    );
    getByText('Eric');
    getByText('chris@local');
  });
});
