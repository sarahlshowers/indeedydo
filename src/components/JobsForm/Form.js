import React from 'react';
import Input from '../FormElements/Input';
import Dropdown from '../FormElements/Dropdown';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import { Link } from 'react-router-dom';

const jobTitle = {
  label: 'Job title',
  subtext: 'What is the name of the role?',
  type: 'text',
  id: 'jobTitle',
  placeholder: 'e.g. Software Engineer',
};

const jobLocation = {
  label: 'Location',
  subtext: 'Where is this job?',
  type: 'text',
  id: 'jobLocation',
  placeholder: 'e.g. Chicago, IL',
};

const jobSponsorship = {
  label: 'Sponsorship',
  subtext: 'Do you want to promote this job?',
  id: 'jobSponsorship',
  menuOptions: ['Free', 'Sponsor'],
};

const jobStatus = {
  label: 'Status',
  subtext: 'Are you ready to make this job listing public?',
  id: 'jobStatus',
  menuOptions: ['Open', 'Paused', 'Closed'],
};

const Form = (props) => {
  return (
    <React.Fragment>
      <form className="jobs-form grid-12" novalidate>
        <div className="jobs-form__header">
          <h1 className="heading4">{props.formHeadingTitle}</h1>
          <p className="text3">{props.formHeadingSubText}</p>
        </div>
        <div className="jobs-form__form-body">
          <Input
            label={jobTitle.label}
            subtext={jobTitle.subtext}
            type={jobTitle.type}
            id={jobTitle.id}
            placeholder={jobTitle.placeholder}
            onUpdateInput={props.onUpdateInput}
          />

          <Input
            label={jobLocation.label}
            subtext={jobLocation.subtext}
            type={jobLocation.type}
            id={jobLocation.id}
            placeholder={jobLocation.placeholder}
            onUpdateInput={props.onUpdateInput}
          />

          <Dropdown
            label={jobSponsorship.label}
            subtext={jobSponsorship.subtext}
            id={jobSponsorship.id}
            menuOptions={jobSponsorship.menuOptions}
            onUpdateInput={props.onUpdateInput}
          />

          <Dropdown
            label={jobStatus.label}
            subtext={jobStatus.subtext}
            id={jobStatus.id}
            menuOptions={jobStatus.menuOptions}
            onUpdateInput={props.onUpdateInput}
          />
        </div>
        <div className="jobs-form__footer">
          <Link to="/">
            <SecondaryButton buttonText="Cancel" />
          </Link>
          <PrimaryButton
            buttonText={props.buttonText}
            onHandleClick={props.onCreateJob}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
