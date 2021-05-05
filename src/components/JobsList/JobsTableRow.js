import React from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';

const JobsTableRow = (props) => {
  return (
    <React.Fragment>
      {props.jobsList.map((job) => (
        <div className="jobs-list__table-row plr18" id={job.id}>
          <div className="jobs-list--wrapper text2">
            <div className="jobs-list__column--title">
              <p>{job.jobTitle}</p>
              <p className="text2--gray">{job.jobLocation}</p>
            </div>
            <div className="jobs-list__column--posted">{job.jobPosted}</div>
            <div className="jobs-list__column--sponsorship">
              {job.jobSponsorship}
            </div>
            <div className="jobs-list__column--status">{job.jobStatus}</div>
            <div className="jobs-list__column--edit">
              <SecondaryButton buttonText="Edit" handleClick={props.editJob} />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default JobsTableRow;
