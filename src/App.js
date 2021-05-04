import './App.scss';
import React, { useState } from 'react';
import HomePage from './components/routes/HomePage';
import EditPage from './components/routes/EditPage';
import AddPage from './components/routes/AddPage';
import { Route, Switch } from 'react-router-dom';
import jobsData from './jobsData.js';
import { useHistory } from 'react-router-dom';
import { getCurrentDate } from './helpers/DateFormatters';

const App = () => {
  const history = useHistory();

  const [jobsList, setJobs] = useState(jobsData);

  const addJob = (job) => {
    job.id = jobsData.length + 1;
    job.jobPosted = getCurrentDate();
    setJobs([...jobsList, job]);
  };

  const initialFormState = {
    id: null,
    jobTitle: '',
    jobLocation: '',
    jobPosted: '',
    jobSponsorship: 'Free',
    jobStatus: 'Open',
  };
  const [job, setJob] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const errorMessage = document.querySelector(`#${id} + .input__error`);

    if (id === 'jobTitle' || id === 'jobLocation') {
      const formField = document.getElementById(id);

      if (formField.validity.valid) {
        setJob({ ...job, [id]: value });
        errorMessage.textContent = '';
        errorMessage.hasClass = 'input__error';
        formField.className = 'input__form-field';
      } else {
        showError(formField, errorMessage);
      }
    }
  };

  const showError = (formField, errorMessage) => {
    if (formField.validity.valueMissing) {
      errorMessage.textContent =
        'Error: An error has occurred due to missing required information.';
      errorMessage.className = 'input__error input__error--message';
      formField.className = 'input__form-field input__form-field--hasError';
    }
  };

  const handleCreate = (e) => {
    debugger;
    const jobTitleField = document.getElementById('jobTitle');
    const jobLocationField = document.getElementById('jobLocation');

    if (!jobTitleField.validity.valid || !jobLocationField.validity.valid) {
      e.preventDefault();
    } else {
      addJob(job);
      setJob(initialFormState);
      debugger;
      let path = '/';
      history.push(path);
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <HomePage jobsList={jobsList} />} />
        <Route
          path="/add"
          render={() => (
            <AddPage
              jobsList={jobsData}
              handleCreate={handleCreate}
              handleInputChange={handleInputChange}
            />
          )}
        />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </div>
  );
};

export default App;
