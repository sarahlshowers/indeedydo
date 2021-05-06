import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import PrimaryButton from '../Buttons/PrimaryButton';
import JobsList from '../JobsList/JobsList';

const HomePage = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <main className="home-page">
        <div className="home-page__header-wrapper">
          <div className="u-inline-flex">
            <h1 className="heading6">Jobs</h1>
            <p className="text2--gray u-align-self-center pl8">
              {props.jobsList.length} listings
            </p>
          </div>
          <Link to="/add">
            <PrimaryButton buttonText="Add job" />
          </Link>
        </div>

        <section className="jobs-list__table grid-table">
          {props.jobsList.length > 0 ? (
            <JobsList jobsList={props.jobsList} editJob={props.editJob} />
          ) : (
            <p>Womp womp, no jobs in the list!</p>
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
