import React, { Component } from 'react';
import JobsTableRow from '../JobsList/JobsTableRow';

const jobs = [
  {
    id: 1,
    title: 'Product Manager',
    location: 'Austin, TX',
    posted: '10/04/2020',
    sponsored: 'Free',
    status: 'Open',
  },
  {
    id: 2,
    title: 'CEO',
    location: 'Austin, TX',
    posted: '13/30/2020',
    sponsored: 'Sponsored',
    status: 'Paused',
  },
  {
    id: 3,
    title: 'Software Engineer',
    location: 'Seattle, WA',
    posted: '11/18/2020',
    sponsored: 'Free',
    status: 'Closed',
  },
];

class JobsList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jobs-list__table-row--header grid-12 plr18 ptb8">
          <div className="jobs-list--wrapper heading2--gray">
            <div className="jobs-list__column--title grid-table__column--1">
              Job Title
            </div>
            <div className="jobs-list__column--posted grid-table__column--2">
              Posted
            </div>
            <div className="jobs-list__column--sponsorship">Sponsorship</div>
            <div className="jobs-list__column--status">Status</div>
            <div className="jobs-list__column--edit"></div>
          </div>
        </div>

        <JobsTableRow jobs={jobs} />
      </React.Fragment>
    );
  }
}

export default JobsList;
