import React, { Component } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';
import { Link } from 'react-router-dom';

class JobsTableRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jobs-list__table-row plr18">
          <div className="jobs-list--wrapper text2">
            <div className="jobs-list__column--title">
              <p>Product Manager</p>
              <p className="text2--gray">Austin, TX</p>
            </div>
            <div className="jobs-list__column--posted">10/04/2020</div>
            <div className="jobs-list__column--sponsorship">Free</div>
            <div className="jobs-list__column--status">Open</div>
            <div className="jobs-list__column--edit">
              <Link to="/edit">
                <SecondaryButton buttonText="Edit" />
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobsTableRow;
