import React from 'react';
import NavBar from '../Nav/NavBar';
import Form from '../JobsForm/Form';

const AddPage = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <main className="grid-container edit-page">
        <Form
          formHeadingTitle="Add job"
          formHeadingSubText="Add the information for your new job listing."
          buttonText="Add job"
          handleClick={props.handleCreate}
          onUpdateInput={props.handleInputChange}
          job={props.job}
        />
      </main>
    </React.Fragment>
  );
};

export default AddPage;
