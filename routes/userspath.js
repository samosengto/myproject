
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
router.get("/signatures/general/tgenerala", (req, res) => {

	res.render("users/signatures/general/tgenerala");

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

var tcomponea = "Yy coaches";
var ccodeonea = "UG2023A0";
var ckeyonea = "@20Z32y";
var cpasswordonea = "1@Gz2A0x2Y30";

var tcomponeb = "Teso coaches";
var ccodeoneb = "UT2023B0";
var ckeyoneb = "#20Y32x";
var cpasswordoneb = "2?Ty2B0w2X30";

var tcomponec = "Gateway coaches";
var ccodeonec = "US2023C0";
var ckeyonec = "/20X32w";
var cpasswordonec = "3®Sx2C0v2W30";

var tcomponed = "Kakise coaches";
var ccodeoned = "UK2023D0";
var ckeyoned = "?20W32v";
var cpasswordoned = "4#Kw2D0u2V30";

var tcomponee = "Global coaches";
var ccodeonee = "UP2023E0";
var ckeyonee = "~20V32u";
var cpasswordonee = "5''Pv2E0t2U30";

var tcomponef = "Tausi coaches";
var ccodeonef = "UKA2023F";
var ckeyonef = "®20U32t";
var cpasswordonef = "6%KAu2F0s2T3";

var tcomponeg = "Swift coaches";
var ccodeoneg = "UTR2023G";
var ckeyoneg = "+20T32s";
var cpasswordoneg = "7>TRt2G0r2S3";

var tcomponeh = "Kingo coaches";
var ccodeoneh = "UB2023H0";
var ckeyoneh = "-20S32r";
var cpasswordoneh = "8=Bs2H0q2R30";

var tcomponei = "Pokopoko coaches";
var ccodeonei = "UPL2023I";
var ckeyonei = "¥20R32q";
var cpasswordonei = "9~PLr2I0p2Q3";

var tcomponej = "Kalita coaches";
var ccodeonej = "UBI2023J";
var ckeyonej = "=20Q32p";
var cpasswordonej = "10$BIq2J0o2P3";

var tcomponek = "Trinity coaches";
var ccodeonek = "UY2023K0";
var ckeyonek = "!20P32o";
var cpasswordonek = "11!Yp2K0n2O30";

var tcomponel = "Baby coaches";
var ccodeonel = "UTE2023L";
var ckeyonel = "×20O32n";
var cpasswordonel = "12%TEo2L0m2N3";

var tcomponem = "Oxygen buses";
var ccodeonem = "UL2023M0";
var ckeyonem = "™20N32m";
var cpasswordonem = "13©Ln2M0l2M30";

var tcomponen = "Bismakan coaches";
var ccodeonen = "UM2023N0";
var ckeyonen = "©20M32l";
var cpasswordonen = "14¥Mm2N0k2L30";

var tcomponeo = "Link buses";
var ccodeoneo = "UH2023O0";
var ckeyoneo = "|20L32k";
var cpasswordoneo = "15*Hl2O0j2K30";

var tcomponep = "Modern coaches";
var ccodeonep = "UO2023P0";
var ckeyonep = "&20K32j";
var cpasswordonep = "16;Ok2P0i2J30";

var tcomponeq = "Nile buses";
var ccodeoneq = "UN2023Q0";
var ckeyoneq = "%20J32i";
var cpasswordoneq = "17:Nj2R0h2I30";

var tcomponer = "Comfort coaches";
var ccodeoner = "UA2023R0";
var ckeyoner = "&20I32h";
var cpasswordoner = "18<Ai2R0g2H30";

var tcompones = "Gaga buses";
var ccodeones = "UGA2023S";
var ckeyones = "*20H32g";
var cpasswordones = "19()GAh2S0f2G3";

var tcomponet = "Gulu bus";
var ccodeonet = "UGU2023T";
var ckeyonet = "$20G32f";
var cpasswordonet = "20+GUg2T0e2F3";

var tcomponeu = "GoodLuck coaches";
var ccodeoneu = "UGA2023U";
var ckeyoneu = ">20F32e";
var cpasswordoneu = "21{}00f2U0d2E3";

var tcomponev = "Makome bus";
var ccodeonev = "UKA2023V";
var ckeyonev = "()20E32d";
var cpasswordonev = "22|00e2V0c2D3";

var tcomponew = "Nms";
var ccodeonew = "UES2023W";
var ckeyonew = "[]20D32c";
var cpasswordonew = "23''00d2W0b2C3";

var tcomponex = "Mukwano";
var ccodeonex = "UJA2023X";
var ckeyonex = "''20C32b";
var cpasswordonex = "24[]00c2X0a2B3";

var tcomponey = "Coca cola";
var ccodeoney = "UCO2023Y";
var ckeyoney = "_20B32a";
var cpasswordoney = "25%00b2Y0z2A3";

var tcomponex = "Bukoola";
var ccodeonex = "UBU2023Z";
var ckeyonex = "'20D32c";
var cpasswordonex = "26-00d2X0b2C3";

var bee = "jon";
var few = "sam";
/*Company One*/
var pcompname = req.body.pcompname; 
 
if(newUserPhoneNumber !== "" && newUserSignbtn === "Signin.") {
	console.log("New User Signed in:" + " " + "Email:" + " " + req.body.newUserEmail + " and Phone: " + req.body.newUserPhoneNumber + " on " + currentDate);
	res.send("<body style='background-color:#ffaa7f;'><div style='text-align: center; color:green; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/welcome.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(desiredCompany === tcomponea && companyCode === ccodeonea) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulea.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponea && key === ckeyonea) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponea && password === cpasswordonea) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersa/dashboards/componedba' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeb && companyCode === ccodeoneb) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleb.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeb && key === ckeyoneb) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeb && password === cpasswordoneb) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersb/dashboards/componedbb' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponec && companyCode === ccodeonec) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulec.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponec && key === ckeyonec) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponec && password === cpasswordonec) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersc/dashboards/componedbc' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponed && companyCode === ccodeoned) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduled.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponed && key === ckeyoned) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponed && password === cpasswordoned) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersd/dashboards/componedbd' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponee && companyCode === ccodeonee) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulee.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponee && key === ckeyonee) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponee && password === cpasswordonee) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/userse/dashboards/componedbe' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponef && companyCode === ccodeonef) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulef.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponef && key === ckeyonef) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponef && password === cpasswordonef) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersf/dashboards/componedbf' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeg && companyCode === ccodeoneg) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleg.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeg && key === ckeyoneg) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeg && password === cpasswordoneg) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersg/dashboards/componedbg' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeh && companyCode === ccodeoneh) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleh.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeh && key === ckeyoneh) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeh && password === cpasswordoneh) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersh/dashboards/componedbh' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponei && companyCode === ccodeonei) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulei.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponei && key === ckeyonei) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponei && password === cpasswordonei) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersi/dashboards/componedbi' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponej && companyCode === ccodeonej) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulej.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponej && key === ckeyonej) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponej && password === cpasswordonej) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersj/dashboards/componedbj' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponek && companyCode === ccodeonek) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulek.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponek && key === ckeyonek) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponek && password === cpasswordonek) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersk/dashboards/componedbk' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponel && companyCode === ccodeonel) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulel.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponel && key === ckeyonel) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponel && password === cpasswordonel) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersl/dashboards/componedbl' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponem && companyCode === ccodeonem) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulem.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponem && key === ckeyonem) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponem && password === cpasswordonem) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersm/dashboards/componedbm' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponen && companyCode === ccodeonen) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulen.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponen && key === ckeyonen) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponen && password === cpasswordonen) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersn/dashboards/componedbn' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeo && companyCode === ccodeoneo) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleo.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeo && key === ckeyoneo) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeo && password === cpasswordoneo) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/userso/dashboards/componedbo' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponep && companyCode === ccodeonep) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulep.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponep && key === ckeyonep) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponep && password === cpasswordonep) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersp/dashboards/componedbp' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeq && companyCode === ccodeoneq) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleq.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeq && key === ckeyoneq) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeq && password === cpasswordoneq) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersq/dashboards/componedbq' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponer && companyCode === ccodeoner) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduler.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponer && key === ckeyoner) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponer && password === cpasswordoner) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersr/dashboards/componedbr' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcompones && companyCode === ccodeones) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedules.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcompones && key === ckeyones) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcompones && password === cpasswordones) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/userss/dashboards/componedbs' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponet && companyCode === ccodeonet) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulet.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponet && key === ckeyonet) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponet && password === cpasswordonet) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/userst/dashboards/componedbt' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponeu && companyCode === ccodeoneu) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/escheduleu.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponeu && key === ckeyoneu) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponeu && password === cpasswordoneu) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersu/dashboards/componedbu' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponev && companyCode === ccodeonev) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulev.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponev && key === ckeyonev) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponev && password === cpasswordonev) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersv/dashboards/componedbv' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponew && companyCode === ccodeonew) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulew.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponew && key === ckeyonew) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponew && password === cpasswordonew) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersw/dashboards/componedbw' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(desiredCompany === tcomponex && companyCode === ccodeonex) {
	console.log("A user Signed in:" + " " + "company:" + " " + desiredCompany + " and Code: " + companyCode + " on " + currentDate);
	res.send("<body style='background-color:#55557f;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Welcome!<br/><a href='https://travofast.herokuapp.com/msrc/ssrc/comps/eschedulex.html' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else if(company === tcomponex && key === ckeyonex) {
	console.log("Admin UnLocked:" + " " + "Company:" + " " + company + " and Key: " + key + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successful!<br/><a href='https://travofast.herokuapp.com/userspath/signatures/admin/tadminone' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Proceed</a></div></body> ");
} else  if(companyname === tcomponex && password === cpasswordonex) {
	console.log("Admin Logged in:" + " " + "Company:" + " " + companyname + " and password: " + password + " on " + currentDate);
	res.send("<body style='background-color:#d2f6ff;'><div style='text-align: center; color:#ff5500; margin-top: 200px;'>Successfully Logged in &#10003; <br/><a href='https://travofast.herokuapp.com/usersx/dashboards/componedbx' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>Continue</a></div></body> ");
} else if(wewa === few) {
	res.send("True sam");

		} else {
	console.log("Error Encountered");
	res.send("<body style='background-color:#410041;'><div style='text-align: center; color:#fff; margin-top: 200px;'>Oops!<br/>Mistake,<br/>Incorrect entries.<br/><a href='https://travofast.herokuapp.com/userspath/signatures/general/tgenerala' style='text-decoration: none; background-color: darkslategrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div></body> ");
};

});

module.exports = router


