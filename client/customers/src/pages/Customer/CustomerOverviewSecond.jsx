import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import LeftSideNavBar from "../../components/LeftSideNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


function CustomerOverviewSecond() {
  const data = [
    { id: 1, reservationId: "R123", itemId: "I567", date: "2024-02-15", timeDuration: "2 hours" },
    { id: 2, reservationId: "R456", itemId: "I789", date: "2024-02-16", timeDuration: "3 hours" },
    { id: 3, reservationId: "R789", itemId: "I123", date: "2024-02-17", timeDuration: "1 hour" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginTop: "0px", marginLeft: '0px', marginRight: '40px' }}>
        <LeftSideNavBar />
      </div>
      <div className="parts" style={{ float: 'left', padding: "17px", paddingBottom: "140px", marginTop: "24px", borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '40px', width: '900px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 className="subheaderTitle" style={{ padding: 10 }}>Customer Overview</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Search" style={{ marginRight: '10px', padding: '2px' , borderRadius:8, height:"30px"}} />
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' , height:'20px'}} />
            <FontAwesomeIcon icon={faSave} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' ,height:'20px'}} />
            <FontAwesomeIcon icon={faTrash} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer',height:'20px' }} />
            <FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' ,height:'20px'}} />
          </div>
        </div>

         {/* Horizontal Navigation Bar */}
        <div style={{  display: 'flex', justifyContent: 'space-between', height: '40px', width: '900px',  marginBottom: '20px' , backgroundColor:"#DFD8CF"}}>
          <Link to={`/CustomerOverview/:id`} style={{ padding: '10px', color: 'black', textDecoration: 'none' , fontWeight:'bolder'}}>General</Link>
          <Link to={`/CustomerOverviewSecond`} style={{ padding: '10px', color: 'black', textDecoration: 'none',fontWeight:'bolder' }}>Current Reservations</Link>
          <Link to={`/CustomerOverviewThird`} style={{ padding: '10px', color: 'black', textDecoration: 'none',fontWeight:'bolder' }}>History</Link>
        </div>

        <table className="table" width={"900px"} height={"150px"} border={1} style={{ borderCollapse: 'collapse' }}>

          <thead>
            <tr>
            <th scope="col"  style={{ backgroundColor: '#B5A28C' }}>Reservation ID</th>
              <th scope="col"  style={{ backgroundColor: '#B5A28C' }}>Item ID</th>
              <th scope="col"  style={{ backgroundColor: '#B5A28C' }}>Date</th>
              <th scope="col"  style={{ backgroundColor: '#B5A28C' }}>Time Duration</th>
              <th scope="col" style={{ backgroundColor: '#B5A28C' }}>Select</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.reservationId}</td>
                <td>{item.itemId}</td>
                <td>{item.date}</td>
                <td>{item.timeDuration}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '5px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerOverviewSecond;
