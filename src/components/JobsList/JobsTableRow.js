import React, { Component } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';
import { Link } from 'react-router-dom';
import JobsList from './JobsList';

class JobsTableRow extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.jobs.map((job) => (
          <div className="jobs-list__table-row plr18">
            <div className="jobs-list--wrapper text2">
              <div className="jobs-list__column--title">
                <p>{job.title}</p>
                <p className="text2--gray">{job.location}</p>
              </div>
              <div className="jobs-list__column--posted">{job.posted}</div>
              <div className="jobs-list__column--sponsorship">
                {job.sponsored}
              </div>
              <div className="jobs-list__column--status">{job.status}</div>
              <div className="jobs-list__column--edit">
                <Link to="/edit">
                  <SecondaryButton buttonText="Edit" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default JobsTableRow;
