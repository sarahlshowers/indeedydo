import React from 'react';
import NavBar from '../Nav/NavBar';
import Form from '../JobsForm/Form';

const EditPage = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <main className="grid-container edit-page">
        <Form
          formHeadingTitle="Edit job"
          formHeadingSubText="Edit the information for your new job listing."
          buttonText="Save"
          handleClick={props.saveJob}
          onUpdateInput={props.handleInputChange}
          currentJob={props.job}
        />
      </main>
    </React.Fragment>
  );
};

export default EditPage;
