// Corrected code for an asynchronous function
const ud = require("../models/data"); // Assuming the module exists

exports.userdata = async (req, res) => {
  try {
    const {machine,vibrations,tvm,ae,pe} = req.body; // Assuming getData is asynchronous
    // console.log(req.body);
    const { xvalue, yvalue, zvalue } = vibrations[0];

    if(!machine || !xvalue || !yvalue || !zvalue || !tvm || !ae || !pe){
        return res.status(400).json({ message: 'fill all the details' });
    }
    res.send("ok bro");

    const newdata = await ud.create({
        machine,
        vibrations: [{
          xvalue: xvalue, 
          yvalue: yvalue,
          zvalue: zvalue
        }],
        tvm,
        ae,
        pe,
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving data"); 
  }
};
