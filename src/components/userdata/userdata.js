import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./userdata.css";

const UserDataPage = () => {
  const location = useLocation();
  const { userData } = location.state;
  console.log(userData);
  console.log(location.state);
const ans =userData.user;
const name='User';
console.log(ans._id);
// const id = location ? ans._id : null;


const [ud, setud] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/datalogin/${ans._id}`);
      setud(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  fetchUserData();
}, [ans._id]);

const navigate=useNavigate();
const fn=()=>{
navigate('/Dashboard');
}

  return (
   <>
      <div className="wpu">
        <div className="cn">
          KINEUTKAL
        </div>
        <div className="ut">
          <div className="uc">
            Hello {location?ans.username : name} , <br />
            which test do you like to perform?
            </div>
          <div className="us">
            <button onClick={fn}> Hand Vibration </button>
</div>
        </div>
        <div className="ump">
        </div>
      </div>

   </>
  );
};

export default UserDataPage;
