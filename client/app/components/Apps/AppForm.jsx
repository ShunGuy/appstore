import React, { PropTypes, Component } from 'react'
import { Panel, Form, FormGroup, Col, Button } from 'react-bootstrap'
import classNames from 'classnames'
import { updateApp, createApp } from './api'
import { fields, categories, validateForm } from './Utils'
import Header from '../App/Header'
import AppInput from './AppInput'
import styles from './AppForm.scss'

class AppForm extends Component {
  constructor(props) {
    super(props)
    const { name, image, link, category, rank } = props

    this.state = {
      name,
      image,
      link,
      category,
      rank,
      errors: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
    this.formatInputProps = this.formatInputProps.bind(this)
    this.renderInputs = this.renderInputs.bind(this)
  }

  getValidationState(field) {
    const data = this.state[field]
    const errors = this.state.errors[field]
    if (errors) {
      return 'error'
    } else if (data) {
      return 'success'
    }
    return null
  }

  handleChange(event) {
    const app = { [event.target.id]: event.target.value }
    this.setState({ ...app })
    const errors = validateForm({ ...this.state, ...app })
    this.setState({ errors: { ...errors } })
  }

  async handleSubmit() {
    const { id } = this.props
    let response

    if (id) {
      response = await updateApp({ ...this.state, id })
    } else {
      response = await createApp(this.state)
    }

    if (response.errors) {
      this.setState({ errors: response.errors })
    }

    if (response.status === 201 || response.status === 204) {
      window.location = '/'
    }
  }

  formatInputProps(name) {
    let type
    let componentClass

    switch (name) {
      case 'image':
      case 'link':
        type = 'url'
        break
      case 'rank':
        type = 'number'
        break
      case 'category':
        componentClass = 'select'
        type = 'text'
        break
      default:
        type = 'text'
    }

    return ({
      key: name,
      name,
      type,
      value: this.state[name],
      errors: this.state.errors[name],
      handleChange: this.handleChange,
      getValidationState: this.getValidationState,
      componentClass,
    })
  }

  renderInputs() {
    return fields.map((field) => {
      const props = this.formatInputProps(field)

      if (field === 'category') {
        return (
          <AppInput {...props} >
            {categories.map(cat =>
              <option key={cat} value={cat}>{cat}</option>,
            )}
          </AppInput>
        )
      }
      return <AppInput {...props} />
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div>
        <Header />
        <Panel className={classNames('container', styles.container)}>
          <Form horizontal>
            {this.renderInputs()}

            <FormGroup>
              <Col
                smOffset={2}
                sm={10}
              >
                <Button
                  onClick={this.handleSubmit}
                  disabled={Object.keys(errors).length !== 0}
                >
                  Submit
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </Panel>
      </div>
    )
  }
}

AppForm.defaultProps = {
  id: null,
  name: '',
  image: '',
  link: '',
  category: categories[0],
  rank: 1,
}

AppForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  category: PropTypes.string,
  rank: PropTypes.number,
}

export default AppForm
