
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	console.log(req.query.name);
	res.send("user list");
});
router.get("/view", (req, res) => {

	res.render("users/view");
});
router.get("/reciepts/recieptone", (req, res) => {

	res.render("users/reciepts/recieptone");

});
router.get("/signatures/general/tgeneral", (req, res) => {

	res.render("users/signatures/general/tgeneral");

});
router.get("/signatures/admin/tadminone", (req, res) => {

	res.render("users/signatures/admin/tadminone");

});



router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var currentDate = new Date();
var newUserPhoneNumber = req.body.newUserPhoneNumber;
var newUserSignbtn = req.body.Signin;
var desiredCompany = req.body.desiredCompany;
var companyCode = req.body.companyCode;
var company = req.body.company;
var key = req.body.key;
var companyname = req.body.companyname;
var password = req.body.password;

var ccodeone = "tausi2023Az";
var ckeyone = "@20Z32y";
var cpasswordone = "T1@2z0A2x3y0";


var bee = "jon";
var few = "sam";
/*Company One*/
var pcompname = req.body.pcompname; 
 
if(newUserPhoneNumber !== "" && newUserSignbtn === "Signin.") {
	console.log("New User Signed in:" + " " + "Email:" + " " + req.body.newUserEmail + " and Phone: " + req.body.newUserPhoneNumber + " on " + currentDate);
	res.send("<body style='background-color:#ffaa7f;'><div style='text-align: center; color:green; margin-top: 200px;'>Welcome!<br/><a href='http://localhost:3000/msrc/welcome.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(desiredCompany === "Tausi" && companyCode === ccodeone) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='http://localhost:3000/msrc/eschedule.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === "Tausi" && key === ckeyone) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='http://localhost:3000/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === "Tausi" && password === cpasswordone) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &radic; <br/><a href='http://localhost:3000/users/dashboards/componedb' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(wewa === few) {
	res.send("True sam");

		} else {
	console.log("Error");
	res.send("<body style='background-color:#ff0000;'><div style='text-align: center; color:green; margin-top: 200px;'>Nope!<br/><a href='http://localhost:3000/users/signatures/general/tgeneral' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Mistake!</a></div></body> ");
};

});

module.exports = router


