import React, { Component } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';

class HomePage extends Component {
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
              <SecondaryButton />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
