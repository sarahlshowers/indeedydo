import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Form from '../JobsForm/Form';

class EditPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="grid-container edit-page">
          <Form
            formHeadingTitle="Edit job"
            formHeadingSubText="Edit the information for your new job listing."
            buttonText="Save"
          />
        </main>
      </React.Fragment>
    );
  }
}

export default EditPage;
