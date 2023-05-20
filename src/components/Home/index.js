import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import './index.css'

class Home extends Component {
  state = {doctor: '', date: '', time: '', homeVisit: '', isBooked: false}

  onBook = () => {
    const {isBooked} = this.state
    if (isBooked === false) {
      this.setState({isBooked: true})
    }
    if (isBooked === true) {
      this.setState({isBooked: false})
    }
  }

  onDoctor = event => {
    this.setState({doctor: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onTime = event => {
    this.setState({time: event.target.value})
  }

  onHomeVisit = event => {
    this.setState({homeVisit: event.target.value})
  }

  onLogout = () => {
    Cookies.remove('jwt_token')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    const {doctor, date, time, homeVisit, isBooked} = this.state
    console.log(doctor)

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="home-main-container">
        <div className="main-bar-head-element">
          <div className="logo-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYo9sqHiIyBaCe4Z9nJxBfYtBMMwge1xYTGvxkjPkTLyWv_0C4jfcmvExBJiMS4U_Yn5A&usqp=CAU"
              alt="logo"
              className="logo-image"
            />
            <h1 className="HEADING-08765">Care +PLUS Hospital</h1>
          </div>
          <div className="button-patient-details">
            <Link to="/login">
              <button
                type="button"
                className="logout-button"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </Link>
            <div className="customer-details">
              <p>Name :- Sunita Sharma</p>
              <p>Age :- 65 Y</p>
            </div>
            <Link to="/login">
              <button
                type="button"
                className="logout-button-2"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="appointment_card appointment-card_123 final-styles">
          <div>
            <h1 className="heading">Book Your Appointment</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-image012"
            />
            <div className="details-of-appointment">
              <label htmlFor="sleectId" className="concerned_doctor">
                Concerned Doctor
              </label>

              <select
                id="sleectId"
                className="select-docotr"
                onChange={this.onDoctor}
                value={doctor}
              >
                <option>Dr. Sanjay Deshmukh</option>
                <option>Dr. Meera Gupta</option>
                <option>Dr. Mennali Pawar</option>
                <option>Dr. Kiran Desai</option>
              </select>
              <label htmlFor="date" className="concerned_doctor">
                Date
              </label>
              <input
                type="date"
                className="select-docotr"
                id="date"
                onChange={this.onDate}
                value={date}
              />

              <label htmlFor="sleectId" className="concerned_doctor">
                Time
              </label>

              <select
                id="sleectId"
                className="select-docotr"
                onChange={this.onTime}
                value={time}
              >
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 AM - 02:00 PM</option>
                <option>03:00 PM - 04:00 PM</option>
                <option>04:00 PM - 05:00 PM</option>
              </select>

              <label htmlFor="sleectId" className="concerned_doctor">
                Home Visit Checkup
              </label>

              <select
                id="sleectId"
                className="select-docotr"
                onChange={this.onHomeVisit}
                value={homeVisit}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
              <button type="button" className="add-butt" onClick={this.onBook}>
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="appointment-image"
          />
        </div>
        <div className="last-container">
          <h1>You Scheduled Appointment Details</h1>
          {isBooked && (
            <div className="final-container">
              <div className="details-match">
                <p className="para">Concerned Doctor :- </p>
                <p>{doctor}</p>
              </div>
              <div className="details-match">
                <p className="para">Date :- </p>
                <p>{date}</p>
              </div>
              <div className="details-match">
                <p className="para">Time :- </p>
                <p>{time}</p>
              </div>
              <div className="details-match">
                <p className="para">Home Visit Checkup Status :- </p>
                <p>{homeVisit}</p>
              </div>
              <div className="details-match">
                <p className="para">Booking Status :- </p>
                <p className="final-para">Booked</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
