// SurveyForm shows a form for user to add input
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
