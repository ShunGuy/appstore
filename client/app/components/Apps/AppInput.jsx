import React, { PropTypes } from 'react'
import { FormGroup, Col, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import styles from './AppInput.scss'

function AppInput({
  name,
  children,
  value,
  componentClass,
  type,
  handleChange,
  getValidationState,
  errors,
}) {
  return (
    <FormGroup
      controlId={name}
      validationState={getValidationState(name)}
    >
      <Col
        componentClass={ControlLabel}
        sm={2}
        className={styles.title}
      >
        {name}
      </Col>
      <Col sm={10}>
        <FormControl
          type={type}
          placeholder={name}
          value={value}
          onChange={handleChange}
          componentClass={componentClass}
        >
          {children}
        </FormControl>
        <FormControl.Feedback />
        <HelpBlock>
          {errors &&
            errors.map(error =>
              <div key={error}>{error}</div>,
            )
          }
        </HelpBlock>
      </Col>
    </FormGroup>
  )
}

AppInput.defaultProps = {
  children: null,
  componentClass: 'input',
  errors: [],
}

AppInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  children: PropTypes.node,
  componentClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getValidationState: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default AppInput
