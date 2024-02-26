import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from "axios";
import Header from '../../components/Header';
import LeftSideNavBar from '../../components/LeftSideNavBar';
import TextField from '../../components/TextField';
import { CUSTOMER_URL } from '../../util/Constants';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function CustomerCreation() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCustomer = {
      name,
      fullName,
      identifier,
      address,
      email,
      contactNo,
    };

    axios.post(`${BASE_URL}${CUSTOMER_URL}`, newCustomer)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginLeft: '0px', marginRight: '20px' }}>
        <LeftSideNavBar />
      </div>
      <div className="parts" style={{ float: 'left', padding: '17px', paddingBottom: '50px',marginLeft:"40px", width: '900px', marginTop: '40px', borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: '30px', height: '45px', width: '860px', borderRadius: 15, display: 'flex' }}>
          <h4 className="subheaderTitle" style={{ paddingTop: 5, paddingLeft: 30 }}>Customer Creation</h4>
        </div>

      
          <form style={{ maxWidth: '800px', marginLeft:"30px" }}>
            <TextField
              label="Customer ID:"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Full Name:"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextField
              label="Identifier:"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />

            <TextField
              label="Address:"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
              label="Email:"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Contact No:"
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />

            <div className="btn" style={{ textAlign: 'center', marginLeft:"710px", marginTop: '30px' }}>
            <Link to={`/`}>
              <button className='btn btn-success' style={{ backgroundColor: "#B5A28C", borderColor: "#B5A28C" }} onClick={handleSubmit}>
                CREATE
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  
  );
}

export default CustomerCreation;
