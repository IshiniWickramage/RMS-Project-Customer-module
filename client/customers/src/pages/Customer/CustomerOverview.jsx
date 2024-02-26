import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../components/TextField';
import Header from '../../components/Header';
import LeftSideNavBar from '../../components/LeftSideNavBar';
import { CUSTOMER_URL } from '../../util/Constants';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function CustomerOverview() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}${CUSTOMER_URL}/${id}`)
      .then((res) => setCustomerData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
    // Set the initial edited data to the current customer data
    setEditedData({ ...customerData });
  };

  const handleSave = async () => {
    try {
      // Update the customer data with the edited data
      await axios.put(`${BASE_URL}${CUSTOMER_URL}/${id}`, editedData);
      // Fetch the updated customer data after saving
      const updatedData = await axios.get(`${BASE_URL}${CUSTOMER_URL}/${id}`);
      setCustomerData(updatedData.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving customer data:', error);
    }
  };

  const handleChange = (field, value) => {
    // Update the edited data when any field is changed
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const deleteCustomer = async () => {
    try {
      await axios.delete(`${BASE_URL}${CUSTOMER_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginLeft: '0px', marginRight: '20px' }}>
        <LeftSideNavBar />
      </div>

      <div className="parts" style={{ float: 'left', padding: '17px', paddingBottom: '50px', marginTop: '24px', borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div
          id="subTopic"
          style={{
            backgroundColor: '#B5A28C',
            marginBottom: '30px',
            height: '40px',
            width: '900px',
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h4 className="subheaderTitle" style={{ padding: 10, marginLeft: '20px' }}>
            Customer Overview
          </h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Search" style={{ marginRight: '10px', padding: '2px', borderRadius: 10 }} />
            <Link to={`/CustomerCreation`}>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }} />
            </Link>
            {isEditing ? (
              <FontAwesomeIcon
                icon={faSave}
                style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }}
                onClick={handleSave}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }}
                onClick={handleEdit}
              />
            )}
            <FontAwesomeIcon
              icon={faTrash}
              style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }}
              onClick={deleteCustomer}
            />
            
          </div>
        </div>

        {/* Horizontal Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '40px', width: '900px', marginBottom: '20px', backgroundColor: '#DFD8CF' }}>
          <Link to={`/CustomerOverview/:id`} style={{ padding: '10px', color: 'black', textDecoration: 'none', fontWeight: 'bolder' }}>
            General
          </Link>
          <Link to={`/CustomerOverviewSecond`} style={{ padding: '10px', color: 'black', textDecoration: 'none', fontWeight: 'bolder' }}>
            Current Reservations
          </Link>
          <Link to={`/CustomerOverviewThird`} style={{ padding: '10px', color: 'black', textDecoration: 'none', fontWeight: 'bolder' }}>
            History
          </Link>
        </div>

        <div className="body-part" style={{ padding: 20, borderRadius: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="customerId">Customer ID:</label>
              <TextField id="customerId" type="text" value={isEditing ? editedData.name : customerData.name} disabled={!isEditing} onChange={(e) => handleChange('name', e.target.value)} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="fullName">Full Name:</label>
              <TextField
                id="fullName"
                type="text"
                value={isEditing ? editedData.fullName : customerData.fullName}
                disabled={!isEditing}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="identifier">Identifier:</label>
              <TextField
                id="identifier"
                type="text"
                value={isEditing ? editedData.identifier : customerData.identifier}
                disabled={!isEditing}
                onChange={(e) => handleChange('identifier', e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="address">Address:</label>
              <TextField
                id="address"
                type="text"
                value={isEditing ? editedData.address : customerData.address}
                disabled={!isEditing}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <TextField
                id="email"
                type="text"
                value={isEditing ? editedData.email : customerData.email}
                disabled={!isEditing}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="contactNo">Contact No:</label>
              <TextField
                id="contactNo"
                type="text"
                value={isEditing ? editedData.contactNo : customerData.contactNo}
                disabled={!isEditing}
                onChange={(e) => handleChange('contactNo', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerOverview;
