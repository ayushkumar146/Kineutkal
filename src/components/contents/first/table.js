import React, { useEffect, useState } from 'react';
import "./table.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
const MyTable = () => {
    const navigate=useNavigate();

    const [m, sm] = useState("");
    const [x, sx] = useState("");
    const [y, sy] = useState("");
    const [z, sz] = useState("");
    const [tvm, stvm] = useState("");
    const [ae, sae] = useState("");
    const [pe, spe] = useState("");
    const [formData, setFormData] = useState({
        machine: '',
        vibrations: [{
            xvalue: '',
            yvalue: '',
            zvalue: '',
        }],
        tvm: '',
        ae: '',
        pe: '',
    });
  

    useEffect(()=>{
     setFormData({
        machine: m,
        vibrations: [{
            xvalue: x,
            yvalue: y,
            zvalue: z,
        }],
        tvm: tvm,
        ae: ae,
        pe: pe,
    });
    
    },[m,x,y,z,tvm,ae,pe]);

    const kn=async()=>{
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            // Send form data to backend
    console.log(formData);

            const response = await axios.post('http://localhost:5000/user/store', formData, config);

            // Handle response from backend
            console.log(response.data); // Assuming the backend sends back a response
            // navigate("/Dashboard");
        } catch (error) {
            // navigate("/loginerror");
            console.error('Error:', error);
        }
    }

    const jn = () => {
        sm('');
        sx('');
        sy('');
        sz('');
        stvm('');
        sae('');
        spe('');
    }

    

    return (<>
        <div className="whole">
            <div className="table">
                <div className="t1 hide">
                    <table>
                        <thead>
                            <tr>
                                <th>Machining Tool Used</th>
                                <th>
                                    Vibration Magnitude (m/s)
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>X</th>
                                                <th>Y</th>
                                                <th>Z</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </th>
                                <th>Total Vibration Magnitude (m/s)</th>
                                <th>A(8) <br /> (m/s)</th>
                                <th>DELV <br /> (m/s)</th>
                                <th>P(E)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='a'>    <input type="text" value={m} onChange={(e) => { sm(e.target.value) }} />
                                </td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='b'>    <input type="text" value={x} onChange={(e) => { sx(e.target.value) }} />
                                                </td>
                                                <td className='b'>    <input type="text" value={y} onChange={(e) => { sy(e.target.value) }} />
                                                </td>
                                                <td className='b'>    <input type="text" value={z} onChange={(e) => { sz(e.target.value) }} />
                                                </td>
                                            </tr>
                                            {/* Add more rows for subvalues if needed */}
                                        </tbody>
                                    </table>
                                </td>
                                <td className='c'>    <input type="text" value={tvm} onChange={(e) => { stvm(e.target.value) }} />
                                </td>
                                
                                <td className='c'>    <input type="text" value={ae} onChange={(e) => { sae(e.target.value) }} />
                                </td>
                                <td></td>

                                <td className='c'>    <input type="text" value={pe} onChange={(e) => { spe(e.target.value) }} />
                                </td>                            </tr>
                            {/* Add more rows for data if needed */}
                        </tbody>
                    </table>
                </div>
                <div className="t2 hide">
                    <div class="vertical-table">
                        <div class="row">
                            <div class="heading">Machining Tool Used</div>
                            <input type="text" className='data' />
                        </div>
                        <div class="row">
                            <div class="heading">Vibration Magnitude (m/s) X</div>
                            <div class="data">10</div>
                        </div>
                        <div class="row">
                            <div class="heading">Vibration Magnitude (m/s) Y</div>
                            <div class="data">20</div>
                        </div>
                        <div class="row">
                            <div class="heading">Vibration Magnitude (m/s) Z</div>
                            <div class="data">30</div>
                        </div>
                        <div class="row">
                            <div class="heading">Total Vibration Magnitude (m/s)</div>
                            <div class="data">34</div>
                        </div>
                        <div class="row">
                            <div class="heading">A(8) (m/s)</div>
                            <div class="data">89</div>
                        </div>
                        <div class="row">
                            <div class="heading">DELV (m/s)</div>
                            <div class="data">78</div>
                        </div>
                        <div class="row">
                            <div class="heading">P(E)</div>
                            <div class="data">45</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sath">
                
                <button className="btn" onClick={kn}> SUBMIT </button>
            
                <button className="btnh" onClick={jn}> RESET </button>
            
            </div>
        </div>
    </>

    );
}

export default MyTable;