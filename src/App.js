import './App.scss';
import React, { useState } from 'react';
import HomePage from './components/routes/HomePage';
import EditPage from './components/routes/EditPage';
import AddPage from './components/routes/AddPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jobsData from './jobsData.js';
import { useHistory } from 'react-router-dom';
import { getCurrentDate } from './helpers/DateFormatters';

const App = () => {
  const history = useHistory();

  const [jobsList, setJobs] = useState(jobsData);

  const initialFormState = {
    id: null,
    jobTitle: '',
    jobLocation: '',
    jobPosted: '',
    jobSponsorship: 'Free',
    jobStatus: 'Open',
  };

  const [job, setJob] = useState(initialFormState);

  let currentJobData = {};

  const addJob = (job) => {
    job.id = jobsData.length + 1;
    job.jobPosted = getCurrentDate();
    setJobs([...jobsList, job]);
  };

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
        debugger;
        showError(formField, errorMessage, id);
      }
    }
  };

  const showError = (formField, errorMessage, id) => {
    debugger;
    if (formField.validity.valueMissing) {
      errorMessage.textContent =
        'Error: An error has occurred due to missing required information.';
      errorMessage.className = 'input__error input__error--message';
      formField.className = 'input__form-field input__form-field--hasError';
    }

    setJob({ ...job, [id]: '' });
  };

  const handleCreate = (e) => {
    const jobTitleField = document.getElementById('jobTitle');
    const jobLocationField = document.getElementById('jobLocation');
    debugger;
    if (!jobTitleField.validity.valid || !jobLocationField.validity.valid) {
      e.preventDefault();
    } else {
      addJob(job);
      setJob(initialFormState);

      let path = '/';
      history.push(path);
    }
  };

  const editJob = (e) => {
    e.preventDefault();
    const buttonEl = e.target;
    const buttonRowId = buttonEl.closest('.jobs-list__table-row').id;
    // eslint-disable-next-line eqeqeq
    currentJobData = jobsList.find((job) => job.id == buttonRowId);
    setJob(currentJobData);

    let path = '/edit';
    history.push(path);
  };

  const saveJob = (e) => {
    e.preventDefault();

    const formId = e.target.form.id;
    debugger;
    // eslint-disable-next-line eqeqeq
    setJobs(jobsList.map((item) => (item.id == formId ? job : item)));
    setJob(initialFormState);
    let path = '/';
    history.push(path);
  };

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage jobsList={jobsList} editJob={editJob} />}
          />
          <Route
            path="/add"
            render={() => (
              <AddPage
                handleCreate={handleCreate}
                handleInputChange={handleInputChange}
                job={job}
              />
            )}
          />
          <Route
            path="/edit"
            render={() => (
              <EditPage
                handleInputChange={handleInputChange}
                saveJob={saveJob}
                job={job}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
