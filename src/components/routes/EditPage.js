import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Form from '../JobsForm/Form';

class EditPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="grid-container edit-page">
          <Form />
        </main>
      </React.Fragment>
    );
  }
}

export default EditPage;
