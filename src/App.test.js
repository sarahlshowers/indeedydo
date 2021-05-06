import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);

  // const linkElement = screen.getByText(/Indeedydo/i);
  // expect(linkElement).toBeInTheDocument();
});

// When addJob function is invoked is updates the jobsList
// jobsList.length should be jobsData.length + 1
// jobsList is the local list that is updated, jobsDate is the mock date model

// handleInputChange ads the value to the correct job object
// if the input is invalid, it will render the correct error message

// handleCreate if the form is valid save the job, verify  the job exists in the jobList array
// it should redirect to the home page
// is it possible to change routes in tests and then verify the new job exists in the jobs list?

// edit job/save matches the id of the current job object for updating
// verify the jobstate before and after
// is it possible to change routes in tests and then verify the updated job exists in the jobs list?
