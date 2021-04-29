import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Form from '../JobsForm/Form';

class AddPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="grid-container edit-page">
          <Form
            formHeadingTitle="Add job"
            formHeadingSubText="Add the information for your new job listing."
          />
        </main>
      </React.Fragment>
    );
  }
}

export default AddPage;
