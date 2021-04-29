import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import PrimaryButton from '../Buttons/PrimaryButton';
import JobsList from '../JobsList/JobsList';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="homepage grid-container">
          <div className="u-flex u-justify-between">
            <div className="u-inline-flex">
              <h1 className="heading6">Jobs</h1>
              <p className="text2--gray u-align-self-center pl8">3 listings</p>
            </div>
            <Link to="/add">
              <PrimaryButton />
            </Link>
          </div>

          <section className="jobs-list__table grid-table">
            {/* <p>Womp womp, no jobs in the list!</p> */}

            <JobsList />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;
