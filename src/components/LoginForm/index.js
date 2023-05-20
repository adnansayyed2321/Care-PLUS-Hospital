import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    patinetName: '',
    patientFileNo: '',
    error: false,
  }

  onPatientName = event => {
    this.setState({patinetName: event.target.value})
  }

  onFileNo = event => {
    this.setState({patientFileNo: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {patinetName, patientFileNo} = this.state

    if (patinetName === 'Sunita' && patientFileNo === '1024') {
      this.setState({error: false})

      const {history} = this.props
      const jwtToken = 9970633456
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      this.setState({error: true})
    }
  }

  render() {
    const {error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main-container-login-form">
        <div className="main-second-container">
          <h1 className="heading-01">Care +PLUS Hospital</h1>

          <form onSubmit={this.onSubmitForm}>
            <div className="patient-name-details">
              <label htmlFor="patientName" className="label-patient">
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                className="input-bar-patient-name"
                onChange={this.onPatientName}
              />
            </div>

            <div className="patient-name-details">
              <label htmlFor="patientName" className="label-patient">
                Patient File No
              </label>
              <input
                type="text"
                id="patientName"
                className="input-bar-patient-name"
                onChange={this.onFileNo}
              />
            </div>
            {error && (
              <p className="error-messsage">* Name and File No is incorrect</p>
            )}
            <div className="button-login-form">
              <button className="button-con" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
