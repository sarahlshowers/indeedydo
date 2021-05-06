import React from 'react';
import JobsTableRow from '../JobsList/JobsTableRow';

const JobsList = (props) => {
  return (
    <React.Fragment>
      <div className="jobs-list__header-row jobs-list__table-row--header plr18 ptb8 heading2--gray">
        <div className="">Job Title</div>
        <div className="u-justify-self-center">Posted</div>
        <div className="u-justify-self-center">Sponsorship</div>
        <div className="u-justify-self-center">Status</div>
        <div className="u-justify-self-center"></div>
      </div>

      <JobsTableRow jobsList={props.jobsList} editJob={props.editJob} />
    </React.Fragment>
  );
};

export default JobsList;
