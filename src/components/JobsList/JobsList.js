import React from 'react';
import JobsTableRow from '../JobsList/JobsTableRow';

const JobsList = (props) => {
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

      <JobsTableRow jobsList={props.jobsList} />
    </React.Fragment>
  );
};

export default JobsList;
