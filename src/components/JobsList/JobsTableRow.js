import React from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';

const JobsTableRow = (props) => {
  return (
    <React.Fragment>
      {props.jobsList.map((job) => (
        <div className="jobs-list__table-row plr18 text2" id={job.id}>
          <div className="">
            <p>{job.jobTitle}</p>
            <p className="text2--gray">{job.jobLocation}</p>
          </div>
          <div className="u-justify-self-center">{job.jobPosted}</div>
          <div className="u-justify-self-center">{job.jobSponsorship}</div>
          <div className="u-justify-self-center">{job.jobStatus}</div>
          <div className="u-justify-self-center">
            <SecondaryButton buttonText="Edit" handleClick={props.editJob} />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default JobsTableRow;
