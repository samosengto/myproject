const http = require('http');
const url = require("url");
const fs = require("fs");
const { parse } = require('querystring');

const htmla = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>user determination</title>
		<style>
		
		body {
			
			background-color: #8bffb6;
		}
		.maincontainerfm {
				border: none;
				
				
			}
			.maincontainerfmi {
				border: 2px solid black;
				margin: 0 auto;
				background-color: red;
				width: 90%;
			}
			
			
		</style>
		
		
	</head>
	<body>
	
	
	<div class="maincontainerfm">
		<div class="laya">
			
			<h1 class="greate" style="color: #ffaa00; text-shadow: 1px 1px purple;">Greate!</h1>
			
		</div
	
		<div class="layb">
			<div class="maindeta">
				<div class="subdeta">
					<fieldset class="firstfs">
						<legend class="newuser">User pass</legend>
						<form class="newfm" method="post">
							<p class="helpn">fill in your details press enter to proceed enjoy our services if you are new , first time user or want to tour us</p>
							<label for="nemail">E-mail Adress: </label><input type="text" class="email" id="nemail" name="newUserEmail"/><br/><br/>
							<label for="nphone">Phone Number: </label><input type="text" class="phone" id="nphone" name="newUserPhoneNumber"/><br/><br/>
							<input type="submit" class="submit" id="nsubmit" value="Enter"/>
						</form>
						
					</fieldset>
				</div>
			</div>
			
			<div class="maindetb">
				<div class="subdetb">
					<fieldset class="firstfs">
						<legend class="newuser">Loggers Pass</legend>
						<form class="newfm" method="post">
							<p class="helpn">Click proceed..</p>
							<br/><br/>
							<input type="submit" class="submit" id="nsubmit" value="proceed"/>
						</form>
						
					</fieldset>
					
				</div>
			</div>
			
			
		</div>
		
		</div>
	</body>
</html>`



const login1 = `<!doctype html>
<html>
  <head>
        <meta charset="utf8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title></title>
        <style type="text/css">
        
        </style>
    </head>
    <body>
       <div>
        <fieldset>
         <form method="POST" action"/">
          <h1>Admin Login:</h1>
          <label for="company">Company Name:</label><input type="text" id="company" name="company"><br/><br/>
          <label for="password">Password:</label><input type="password" id="password" name="password"><br/><br/>
          <input type="submit" id="lgnbtn" value="Login" name="Status">
         </form>
         </fieldset>
       </div>
    </body>
</html>`


   const form1 = `<!doctype html>
<html>
  <head>
        <meta charset="utf8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title></title>
        <style type="text/css">
             .titles {
             	margin: 0;
             	padding: 0;
             	border: none;
             	width: 100%;
             	height: 150px;
             	background-color: white;
             	font-weight:light;
             }
           
           .intitles {
           	 margin:0;
           	 padding:0.5% 0.2%;
           	 border:none;
           	 width:auto;
           	 height:auto;
           	 
           }
           .adbt {
           	
           	width:50%;
           	height:auto;
           	margin:0;
           	padding:0;
           	border:none;
           	float:left;
           	clear:left;
           }
           .adbtbcn {
           	
           	width:50%;
           	height:auto;
           	margin:0;
           	padding:0;
           	float:right;
           	clear:right;
           	text-align:right;
           }
           .adbth {
           	float:none;
           	clear:both;
           	width:100%;
           	height:auto;
           	margin:0 0 0  0;
           	padding:0.5% 0 0 0;
           	border:none;
           }
          
           fieldset {
           		  width:100%;
           	margin:0;
           	padding:0;
           	height:400px;
           }
            form {
            	  background-color: red;
            	  width:100%;
           	height:auto;
           	margin:0;
           	padding:0;
           	border:none;
            	 }
            
           .firstrt, .first, .firstbtn {
           	display:block;
           	height:50px;
           	background-color:pink;
           	margin:0;
           	padding:0;
           }
           .firsta {
           	display:block;
           	background-color: white;
           	height:100%;
           }
           label {
           display:block;
           	margin:0;
           	padding:0;
           	border:none;
           	width: auto;
           } 
           #rtdbfs {
           	float:none;
           	clear:both;
           	width:100%;
           	margin:0;
           	padding:0;
           	border:none;
           	
           }
           #bbtdbfs {
           	width:20%;
           	float:left;
           	clear:left;
           	
           }
           
           #nptbdfs {
           	width:20%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #cntdbfs {
           	width:20%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #pntdbfs {
           	width:20%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #lstdbfs {
           	width:20%;
           	float:right;
           	clear:right;
           	text-align:right;
           }
           #ubtntdbfs {
           	float:none;
           	clear:both;
           	width:100%;
           	margin:0;
           	padding:0;
           	border:none;
           	text-align:right;
           }
           #rtdbss {
           	margin:0 0px;
           	width:auto;
           	padding:0 0px;
           }
           #rtdbi {
           	width:50%;
           	
           }
           input[type=text] {
           	width:auto;
           }
           
           
        </style>
    </head>
    <body>
        <div class="titles">
        	<div class="intitles">
        		<h1 class="adbt">Admin dash board:</h1>
        		<h2 class="adbtbcn">Kasese Bus Company Limited</h2>
        		<h3 class="adbth">Travel status update Cpanel:</h3>
        	</div>
        </div>
        <fieldset>
        
          <form action="/" method="post">
            <span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="rtdba" id="rtdbi"/> </span></span>
            <span class="first" id="bbtdbfs"><span class="firsta" id="bbtdbss"><label for="bbtdbi">1. Bus Brand:</label> <input type="text" name="bbtdba" id="bbtdbi"/> </span></span>
            <span class="first" id="nptbdfs"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="nptdba" id="nptdbi"/> </span></span>
            <span class="first" id="cntdbfs"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdba" id="cntdbi"/> </span></span>
            <span class="first" id="pntdbfs"><span class="firsta" id="pntdbss"><label for="pntdbi">Phone number:</label> <input type="text" name="pntdba" id="pntdbi"/> </span></span>
            <span class="first" id="lstdbfs"><span class="firsta" id="lstdbss"><label for="lstdbi">Leaving status:</label> <input type="text" name="lstdba" id="lstdbi"/> </span></span>
            <span class="firstbtn" id="ubtntdbfs"><span class="firsta" id="ubtntdbss"> <button>Update!</button> </span></span>
          </form>
        </fieldset>
    </body>
</html>`  

//SERVER 1: For Admin 1 Login & Admin dashboard;
const servertwo = http.createServer((req, res) => {	
	if (req.method === "POST") {	
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	} 	      
	let file = __dirname + "/public/" + path;	
	    // 1. User Category data memory:
	var captureduser = "New user logged in at " 
	var suffixinfom = "with this details "
	var newuseremail = `${result.newUserEmail}`;
	var newuserphone = `${result.newUserPhoneNumber}`;
	
	 	
		//Login data memory:
	var msga = "<div>";
	var comp = `${result.company}`;
	var pswd = `${result.password}`;
	var idNameOne = "gaga";
	var passwordOne = "Tgaga25.ug";
	var currentDate = new Date();
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var a = `${result.rtdba}`;
	var b = `${result.bbtdba}`;
	var c = `${result.nptdba}`;
	var d = `${result.cntdba}`;
	var e = `${result.pntdba}`;
	var f = `${result.lstdba}`;
	var omega = "</div>";
	var head = "Route:";
	var one = "Bus Brand:";
	var two = "Number Plate:";
	var three = "Conductor Name:";
	var four = "Phone Number";
	var five = "Leaving Status:";
	var display = alpha + "<pre>" + "<span style='font-size: 20px;'>" + head +"\r" + "\r" + a + "\r" + "\r" + one + "\t" + "\t" + two + "\t" + "\t" + three + "\t" + "\t" + four + "\t" + "\t" + five + "\r" + "\r" + b + "\t" + "\t" + c + "\t" + "\t" + d + "\t" + "\t" + e + "\t" + "\t" + f + "</span>" + "</pre>" + omega;
	
	//conditional form rendering to user section
	
	  // 1. for user category
	  if (newuseremail && newuserphone != "") {
	  	
	  	fs.readFile(file, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);
			res.end();	
		} else {
			switch (path) {
				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);	
			}
		}
	});	  
	  	
	  	
	  }  else {
	  	
	 res.StatusCode = 200;
	  	res.end(htmla);	
	  
	  }
	
	
	    //admin login
		/*if (comp == idNameOne && pswd == passwordOne) {
			console.log("Admin for" + " " + comp + " " + "bus company" + " " + "Logged in on:" + currentDate);
			res.statusCode = 200;
			res.end(form1);
		} else if (comp != idNameOne && pswd != passwordOne) {
			res.statusCode = 200;
			res.write("<h1 style='color:maroon; border: 1px red solid;'>To Change Updates, Login Below with Details :</h1>")
			res.end(login1);
		} else if (comp != idNameOne || pswd != passwordOne) {
			res.statusCode = 200;
			res.write("<h1 style='color:red; border: 1px red solid;'>One Wrong Login Details; Try again:</h1>")
			res.end(login1);
		} else {
			res.statusCode = 200;
			res.write("<h1 style='color:red; border: 1px red solid;'> To Update Dashboard Login Below with Details :</h1>")
			res.end(login1);
		}
           
           //content to user output section      
	  fs.writeFile(file, display, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {
	    fs.readFile(file, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);
			res.end();	
		} else {
			switch (path) {
				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);	
			}
		}
	});	  
	  	}
	  });//end fs.readFile */
	  console.log(captureduser + currentDate + suffixinfom)
	  console.log(result); 
				});
	} else {
			res.statusCode = 200;
			res.end(htmla);
		}
});
servertwo.listen(3030, "localhost", () => {
	console.log("Server 2 Listening at port 3030:");
});
//processor function
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    const otherct = 'text/html';
    if(request.headers['content-type'] === FORM_URLENCODED || res.setHeader("X-Content-Type-Options", "nosiniff")) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}
