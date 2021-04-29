import React, { Component } from 'react';
import Input from '../FormElements/Input';
import Dropdown from '../FormElements/Dropdown';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

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

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="jobs-form grid-12">
          <div className="jobs-form__header">
            <h1 className="heading4">{this.props.formHeadingTitle}</h1>
            <p className="text3">{this.props.formHeadingSubText}</p>
          </div>
          <div className="jobs-form__form-body">
            <Input
              label={jobTitle.label}
              subtext={jobTitle.subtext}
              type={jobTitle.type}
              id={jobTitle.id}
              placeholder={jobTitle.placeholder}
            />

            <Input
              label={jobLocation.label}
              subtext={jobLocation.subtext}
              type={jobLocation.type}
              id={jobLocation.id}
              placeholder={jobLocation.placeholder}
            />

            <Dropdown
              label={jobSponsorship.label}
              subtext={jobSponsorship.subtext}
              id={jobSponsorship.id}
              menuOptions={jobSponsorship.menuOptions}
            />

            <Dropdown
              label={jobStatus.label}
              subtext={jobStatus.subtext}
              id={jobStatus.id}
              menuOptions={jobStatus.menuOptions}
            />
          </div>
          <div className="jobs-form__footer">
            <SecondaryButton />
            <PrimaryButton />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
