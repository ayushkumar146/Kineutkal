import React, { useState, useEffect} from 'react';
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [age, setage] = useState('');
    const [gen, setgen] = useState('');
    const [semail, setSemail] = useState('');
    const [spassword, setSpassword] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        age:'',
        gender:'',
        email: '',
        password: ''
    });

const navigate=useNavigate();

    useEffect(() => {
        // Update formData whenever name, semail, or spassword changes
        setFormData({
            username: name,
            age:age,
            gender:gen,
            email: semail,
            password: spassword
        });
    }, [name, age,gen,semail, spassword]);

    const hn = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            // Send form data to backend
            const response = await axios.post('http://localhost:5000/user/register', formData, config);
    
            // Handle response from backend
            console.log('Response:', response.data);
            // Assuming the backend sends back a response
            navigate('/Home', { state: { userData: response.data } });
        } catch (error) {
            console.error('Error:', error);
            // Handle specific errors if needed
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error setting up request:', error.message);
            }
            // navigate("/loginerror");
        }
    };
    

    return (
        <div className="ssignup">
            <div className="sname">
                <div className="saname">Name: </div>
                <div className="sinput"><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></div>
            </div>
            <div className="sname">
                <div className="saname">Age: </div>
                <div className="sinput"><input type="text" value={age} onChange={(e) => { setage(e.target.value) }} /></div>
            </div>
            <div className="sname">
                <div className="saname">Gender: </div>
                <div className="sinput"><input type="text" value={gen} onChange={(e) => { setgen(e.target.value) }} /></div>
            </div>
            <div className="sname">
                <div className="saname">Email: </div>
                <div className="sinput"><input type="text" value={semail} onChange={(e) => { setSemail(e.target.value) }} /></div>
            </div> 
            <div className="sname">
                <div className="saname">Password: </div>
                <div className="sinput"><input type="password" value={spassword} onChange={(e) => { setSpassword(e.target.value) }} /></div>
            </div>
            <div className="ssubmit">
                <button onClick={hn}> SUBMIT </button>
            </div>
        </div>
    );
}

export default Signup;
