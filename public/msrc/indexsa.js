const http = require('http');
const url = require("url");
const fs = require("fs");
const { parse } = require('querystring');
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
             	position: static;
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
           		  width:96%;
           	margin:0;
           	padding:0 2%;
           	height:13350px;
           }
            form {
            	  background-color: ;
            	  width:100%;
           	height:auto;
           	margin:0;
           	padding:0;
           	border:none;
            	 }

            .schedules {

            	border: 2px solid red;
            	height: 900px;
            	width: auto;
            	background-color: skyblue;
            	margin: 0;
            	padding: 0;
            }
            .headnga {
            	display: block;
            	height: 50px;
            	width: 30%;
            	float: none;
            	clear: both;

            }


            .firstaa {
            	height: 50px;
            	display: block;
            	margin: 0;
            	padding: 0;
            	background-color: pink;
            }


            #bbtdbfsa {
            	width: 25%;
            	float: left;
            	clear: left;

            }
            #nptbdfsa {
            width: 25%;
            float: left;
            clear: none;
            text-align: center;
            }
            #cntdbfsa {
            	width: 25%;
            	float: left;
            	clear: none;
            	text-align: left;
            }
            #pntdbfsa {
            	width: 25%;
            	float: right;
            	clear: right;
            	text-align: right;
            }


            .firstas {
            	display: block;
            	background-color: white;
            	height: 100%;
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
           	width:16.5%;
           	float:left;
           	clear:left;

           }

           #nptbdfs {
           	width:16.5%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #cntdbfs {
           	width:16.5%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #pntdbfs {
           	width:17%;
           	float:left;
           	clear:none;
           	text-align:center;
           }
           #lstdbfs {
           	width:16.5%;
           	float:right;
           	clear:right;
           	text-align:right;
           }
           #ubtntdbfs {
           	float:none;
           	clear:both;
           	width:100%;
           	margin:5px 0 0 0;
           	padding:0;
           	border:none;
           	text-align:right;
           }
           #rtdbss {
           	margin:0 0px;
           	width:auto;
           	padding:0 0px;
           }
           #rtdbia, #rtdbie, #rtdbii, #rtdbio, #rtdbiu {
           	width:50% !important;

           }
           input[type=text] {
           	width:auto;
           }


        </style>

        <script>
 window.onload=function() {
 var elems = document.getElementsByTagName("input");
 // capture submit to store storage

 document.getElementById("inputform").onsubmit=processField;
 for (var i = 0; i < elems.length; i++) {
 if (elems[i].type == "text") {
 // restore
 var value = localStorage.getItem(elems[i].id);
 if (value) elems[i].value = value;
 // change event
 elems[i].onchange=processField;
 }
 }
 }
 // store field values
 function processField() {
 localStorage.setItem(window.location.href,"true");
 localStorage.setItem(this.id, this.value);
 }
 // clear individual fields
 function clearStored() {
 var elems = document.getElementsByTagName("input");
 for (var i = 0; i < elems.length; i++) {
 if (elems[i].type == "text") {
 localStorage.removeItem(elems[i].id);
 }
 }
 }
</script>
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

          <form action="/" method="post" id="inputform">



           <p class="schedules" style="height: 2550px;">
            <span class="headnga"><u>Shedule:</u></span>

            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="one">Time:</label> <input type="text" name="stimeone" id="timeone" class="timeones" style="width: 80px;"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Route:</label> <input type="text" name="srouteone" id="routeone" class="routeones"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Brand:</label> <input type="text" name="sbrandone" id="brandone" class="brandones"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberone" id="numberone" style="width: 110px;" class="numberones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationone" id="locationone" class="locationones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkone" id="parkone" class="parkones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%; text-align: center;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span>
					</label> <input type="text" name="spnoone" id="pnoone"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Move:</label> <input type="text" name="Location" id="moveone" style="width: 20px; height: auto; margin: ;" class="moveones"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%; text-align: left;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px; background-color: ;"><label for="pntdbai">State P:</label> <input type="text" name="sboardone" id="boardone" style="width: 84%;" class="boardones"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwo" id="timetwo" style="width: 80px;" class="timetwos"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwo" id="routetwo" class="routetwos"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwo" id="brandtwo" class="brandtwos"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwo" id="numbertwo" style="width: 110px;" class="numbertwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwo" id="locationtwo" class="locationtwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwo" id="parktwo" class="parktwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwo" id="pnotwo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwos" /> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwo" id="movetwo" style="width: 20px; height: auto; margin: ;" class="movetwos"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwo" id="boardtwo" style="width: 84%;" class="boardtwos"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethree" id="timethree" style="width: 80px;" class="timethrees"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethree" id="routethree" class="routethrees"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthree" id="brandthree" class="brandthrees"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthree" id="numberthree" style="width: 110px;" class="numberthrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthree" id="locationthree" class="locationthrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthree" id="parkthree" class="parkthrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothree" id="pnothree" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethree" id="movethree" style="width: 20px; height: auto; margin: ;" class="movethrees"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthree" id="boardthree" style="width: 84%;" class="boardthrees"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefour" id="timefour" style="width: 80px;" class="timefours"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefour" id="routefour" class="routefours"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfour" id="brandfour" class="brandfours"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfour" id="numberfour" style="width: 110px;" class="numberfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfour" id="locationfour" class="locationfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfour" id="parkfour" class="parkfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofour" id="pnofour"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefour" id="movefour" style="width: 20px; height: auto; margin: ;" class="movefours"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfour" id="boardfour" style="width: 84%;" class="boardfours"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefive" id="timefive" style="width: 80px;" class="timefives"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefive" id="routefive" class="routefives"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfive" id="brandfive" class="brandfives"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfive" id="numberfive" style="width: 110px;" class="numberfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfive" id="locationfive"  class="locationfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfive" id="parkfive" class="parkfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofive" id="pnofive"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefive" id="movefive" style="width: 20px; height: auto; margin: ;" class="movefives"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfive" id="boardfive" style="width: 84%;" class="boardfives"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimesix" id="timesix" style="width: 80px;" class="timesixs"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutesix" id="routesix" class="routesixs"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandsix" id="brandsix" class="brandsixs"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbersix" id="numbersix" style="width: 110px;" class="classsixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationsix" id="locationsix" class="locationsixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparksix" id="parksix" class="parksixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnosix" id="pnosix"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovesix" id="movesix" style="width: 20px; height: auto; margin: ;" class="movesixs"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardsix" id="boardsix" style="width: 84%;" class="boardsixs"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeseven" id="timeseven" style="width: 80px;" class="timesevens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteseven" id="routeseven" class="routesevens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandseven" id="brandseven" class="brandsevens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberseven" id="numberseven" style="width: 110px;" class="numbersevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationseven" id="locationseven" class="locationsevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkseven" id="parkseven" class="parksevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoseven" id="pnoseven"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveseven" id="moveseven" style="width: 20px; height: auto; margin: ;" class="movesevens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sbrandseven" id="brandseven" style="width: 84%;" class="brandsevens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeeight" id="timeeight" style="width: 80px;" class="timeeights"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteeight" id="routeeight" class="routeeights"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandeight" id="brandeight" class="brandeights"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbereight" id="numbereight" style="width: 110px;" class="numbereights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationeight" id="locationeight" class="locationeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkeight" id="parkeight" class="parkeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoeight" id="pnoeight"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveeight" id="moveeight" style="width: 20px; height: auto; margin: ;" class="moveeights"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardeight" id="boardeight" style="width: 84%;" class="boardeights"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimenine" id="timenine" style="width: 80px;" class="timenines"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutenine" id="routenine" class="routenines"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandnine" id="brandnine" class="brandnines"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbernine" id="numbernine" style="width: 110px;" class="numbernines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationnine" id="locationnine" class="locationnines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparknine" id="parknine" class="parknines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnonine" id="pnonine"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnonines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovenine" id="movenine" style="width: 20px; height: auto; margin: ;" class="movenines"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardnine" id="boardnine" style="width: 84%;" class="boardnines"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeten" id="timeten" style="width: 80px;" class="timetens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteten" id="routeten" class="routetens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandten" id="brandten" class="brandtens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberten" id="numberten" style="width: 110px;" class="numbertens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationten" id="locationten" class="locationtens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkten" id="parkten" class="parktens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoten" id="pnoten"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveten" id="moveten" style="width: 20px; height: auto; margin: ;" class="movetens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardten" id="boardten" style="width: 84%;" class="boardtens"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeeleven" id="timeeleven" style="width: 80px;" class="timeelevens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteeleven" id="routeeleven" class="routeelevens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandeleven" id="brandeleven" class="brandelevens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbereleven" id="numbereleven" style="width: 110px;" class="numberelevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationeleven" id="locationeleven" class="locationelevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkeleven" id="parkeleven" class="parkelevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoeleven" id="pnoeleven"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px; text-align: center;" class="pnoelevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveeleven" id="moveeleven" style="width: 20px; height: auto; margin: ;" class="moveelevens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardeleven" id="boardeleven" style="width: 84%;" class="boardelevens"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwelve" id="timetwelve" style="width: 80px;" class="timetwelves"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwelve" id="routetwelve" class="routetwelves"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwelve" id="brandtwelve" class="brandtwelves"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwelve" id="numbertwelve" style="width: 110px;" class="numbertwelves"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwelve" id="locationtwelve" class="locationtwelves"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwelve" id="parktwelve" class="parktwelves"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwelve" id="pnotwelve"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwelve"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwelve" id="movetwelve" style="width: 20px; height: auto; margin: ;" class="movetwelves"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwelve" id="boardtwelve" style="width: 84%;" class="boardtwelves"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirteen" id="timethirteen" style="width: 80px;" class="timethirteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirteen" id="routethirteen" class="routethirteens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirteen" id="brandthirteen" class="brandthirteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirteen" id="numberthirteen" style="width: 110px;" class="numberthirteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirteen" id="locationthirteen" class="locationthirteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirteen" id="parkthirteen" class="parkthirteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirteen" id="pnothirteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirteen" id="movethirteen" style="width: 20px; height: auto; margin: ;" class="movethirteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthirteen" id="boardthirteen" style="width: 84%;" class="boardthirteens"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourteen" id="timefourteen" style="width: 80px;" class="timefourteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourteen" id="routefourteen" class="routefourteens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourteen" id="brandfourteen" class="brandfourteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourteen" id="numberfourteen" style="width: 110px;" class="numberfourteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourteen" id="locationfourteen" class="locationfourteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourteen" id="parkfourteen" class="parkfourteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourteen" id="pnofourteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourteen" id="movefourteen" style="width: 20px; height: auto; margin: ;" class="movefourteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfourteen" id="boardfourteen" style="width: 84%;" class="boardfourteens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefifeteen" id="timefifeteen" style="width: 80px;" class="timefifeteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefifeteen" id="routefifeteen" class="routefifeteens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfifeteen" id="brandfifeteen" class="brandfifeteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfifeteen" id="numberfifeteen" style="width: 110px;" class="numberfifeteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfifeteen" id="locationfifeteen" class="locationfifeteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfifeteen" id="parkfifeteen" class="parkfifeteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofifeteen" id="pnofifeteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofifeteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefifeteen" id="movefifeteen" style="width: 20px; height: auto; margin: ;" class="movefifeteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfifeteen" id="boardfifeteen" style="width: 84%;" class="boardfifeteens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimesixteen" id="timesixteen" style="width: 80px;" class="timesixteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutesixteen" id="routesixteen" class="routesixteens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandsixteen" id="brandsixteen" class="brandsixteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbersixteen" id="numbersixteen" style="width: 110px;" class="numbersixteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationsixteen" id="locationsixteen" class="locationsixteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparksixteen" id="parksixteen" class="parksixteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnosixteen" id="pnosixteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosixteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovesixteen" id="movesixteen" style="width: 20px; height: auto; margin: ;" class="movesixteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardsixteen" id="boardsixteen" style="width: 84%;" class="boardsixteens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeseventeen" id="timeseventeen" style="width: 80px;" class="timeseventeens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteseventeen" id="routeseventeen" class="routeseventeens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandseventeen" id="brandseventeen" class="brandseventeens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberseventeen" id="numberseventeen" style="width: 110px;" class="numberseventeens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationseventeen" id="locationseventeen" class="locationseventeens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkseventeen" id="parkseventeen" class="parkseventeens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoseventeen" id="pnoseventeen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoseventeens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveseventeen" id="moveseventeen" style="width: 20px; height: auto; margin: ;" class="moveseventeens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardseventeen" id="boardseventeen" style="width: 84%;" class="boardseventeens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeeighteen" id="timeeighteen" style="width: 80px;" class="timeeighteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteeighteen" id="routeeighteen" class="routeeighteens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandeighteen" id="brandeighteen" class="brandeighteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbereighteen" id="numbereighteen" style="width: 110px;" class="numbereighteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationeighteen" id="locationeighteen" class="locationeighteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkeighteen" id="parkeighteen" class="parkeighteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoeighteen" id="pnoeighteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoeighteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveeighteen" id="moveeighteen" style="width: 20px; height: auto; margin: ;" class="moveeighteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardeighteen" id="boardeighteen" style="width: 84%;" class="boardeighteens"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimenineteen" id="timetennineteen" style="width: 80px;" class="timenineteens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutenineteen" id="routenineteen" class="routenineteens"> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandnineteen" id="brandnineteen" class="brandnineteens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbernineteen" id="numbernineteen" style="width: 110px;" class="numbernineteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationnineteen" id="locationnineteen" class="locationnineteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparknineteen" id="parknineteen" class="parknineteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnonineteen" id="pnonineteen"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnonineteens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovenineteen" id="movenineteen" style="width: 20px; height: auto; margin: ;" class="movenineteens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardnineteen" id="boardnineteen" style="width: 84%;" class="boardnineteens"/> </span></span>



             <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwenty" id="timetwenty" style="width: 80px;" class="timetwentys"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwenty" id="routetwenty" class="routetwentys"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwenty" id="brandtwenty" class="brandtwentys"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwenty" id="numbertwenty" style="width: 110px;" class="numbertwentys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwenty" id="locationtwenty" class="locationtwentys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwenty" id="parktwenty" class="parktwentys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwenty" id="pnotwenty"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwenty" id="movetwenty" style="width: 20px; height: auto; margin: ;" class="movetwentys"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwenty" id="boardtwenty" style="width: 84%;" class="boardtwentys"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyone" id="timetwentyone" style="width: 80px;" class="timetwentyones"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyone" id="routetwentyone" class="routetwentyones"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyone" id="brandtwentyone" class="brandtwentyones"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyone" id="numbertwentyone" style="width: 110px;" class="numbertwentyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyone" id="locationtwentyone" class="locationtwentyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyone" id="parktwentyone" class="parktwentyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyone" id="pnotwentyone"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyone" id="movetwentyone" style="width: 20px; height: auto; margin: ;" class="movetwentyones"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentyone" id="boardtwentyone" style="width: 84%;" class="boardtwentyones"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentytwo" id="timetwentytwo" style="width: 80px;" class="timetwentytwos"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentytwo" id="routetwentytwo" class="routetwentytwos"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentytwo" id="brandtwentytwo" class="brandtwentytwos"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentytwo" id="numbertwentytwo" style="width: 110px;" class="numbertwentytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentytwo" id="locationtwentytwo" class="locationtwentytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentytwo" id="parktwentytwo" class="parktwentytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentytwo" id="pnotwentytwo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentytwo" id="movetwentytwo" style="width: 20px; height: auto; margin: ;" class="movetwentytwos"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentytwo" id="boardtwentytwo" style="width: 84%;" class="boardtwentytwos"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentythree" id="timetwentythree" style="width: 80px;" class="timetwentythrees"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentythree" id="routetwentythree" class="routetwentythrees"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentythree" id="brandtwentythree" class="brandtwentythrees"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentythree" id="numbertwentythree" style="width: 110px;" class="numbertwentythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentythree" id="locationtwentythree" class="locationtwentythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentythree" id="parktwentythree" class="parktwentythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentythree" id="pnotwentythree"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentythree" id="movetwentythree" style="width: 20px; height: auto; margin: ;" class="movetwentythrees"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentythree" id="boardtwentythree" style="width: 84%;" class="boardtwentythrees"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyfour" id="timetwentyfour" style="width: 80px;" class="timetwentyfours"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyfour" id="routetwentyfour" class="routetwentyfours"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyfour" id="brandtwentyfour" class="brandtwentyfours"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyfour" id="numbertwentyfour" style="width: 110px;" class="numbertwentyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyfour" id="locationtwentyfour" class="locationtwentyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyfour" id="parktwentyfour" class="parktwentyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyfour" id="pnotwentyfour"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyfour" id="movetwentyfour" style="width: 20px; height: auto; margin: ;" class="movetwentyfours"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentyfour" id="boardtwentyfour" style="width: 84%;" class="boardtwentyfours"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyfive" id="timetwentyfive" style="width: 80px;" class="timetwentyfives"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyfive" id="routetwentyfive" class="routetwentyfives"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyfive" id="brandtwentyfive" class="brandtwentyfives"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyfive" id="numbertwentyfive" style="width: 110px;" class="numbertwentyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyfive" id="locationtwentyfive" class="locationtwentyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyfive" id="parktwentyfive" class="parktwentyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyfive" id="pnotwentyfive"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyfive" id="movetwentyfive" style="width: 20px; height: auto; margin: ;" class="movetwentyfives"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyfive" id="boardtwentyfive" style="width: 84%;" class="boardtwentyfives"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentysix" id="timetwentysix" style="width: 80px;" class="timetwentysixs"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentysix" id="routetwentysix" class="routetwentysixs"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentysix" id="brandtwentysix" class="brandtwentysixs"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentysix" id="numbertwentysix" style="width: 110px;" class="numbertwentysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentysix" id="locationtwentysix" class="locationtwentysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentysix" id="parktwentysix" class="parktwentysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentysix" id="pnotwentysix"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentysix" id="movetwentysix" style="width: 20px; height: auto; margin: ;" class="movetwentysixs"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentysix" id="boardtwentysix" style="width: 84%;" class="boardtwentysixs"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyseven" id="timetwentyseven" style="width: 80px;" class="timetwentysevens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyseven" id="routetwentyseven" class="routetwentysevens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyseven" id="brandtwentyseven" class="brandtwentysevens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyseven" id="numbertwentyseven" style="width: 110px;" class="numbertwentysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyseven" id="locationtwentyseven" class="locationtwentysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyseven" id="parktwentyseven" class="parktwentysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyseven" id="pnotwentyseven"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyseven" id="movetwentyseven" style="width: 20px; height: auto; margin: ;" class="movetwentysevens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyseven" id="boardtwentyseven" style="width: 84%;" class="boardtwentysevens"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyeight" id="timetwentyeight" style="width: 80px;" class="timetwentyeights"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyeight" id="routetwentyeight" class="routetwentyeights"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyeight" id="brandtwentyeight" class="brandtwentyeights"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyeight" id="numbertwentyeight" style="width: 110px;" class="numbertwentyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyeight" id="locationtwentyeight" class="locationtwentyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyeight" id="parktwentyeight" class="parktwentyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyeight" id="pnotwentyeight"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyeight" id="movetwentyeight" style="width: 20px; height: auto; margin: ;" class="movetwentyeights"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyeight" id="boardtwentyeight" style="width: 84%;" class="boardtwentyeights"/> </span></span>






            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentynine" id="timetwentynine" style="width: 80px;" class="timetwentynines"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentynine" id="routetwentynine" class="routetwentynines"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentynine" id="brandtwentynine" class="brandtwentynines"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentynine" id="numbertwentynine" style="width: 110px;" class="numbertwentynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentynine" id="locationtwentynine" class="locationtwentynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentynine" id="parktwentynine" class="parktwentynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentynine" id="pnotwentynine"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentynine" id="movetwentynine" style="width: 20px; height: auto; margin: ;" class="movetwentynines"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentynine" id="boardtwentynine" style="width: 84%;" class="boardtwentynines"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirty" id="timethirty" style="width: 80px;" class="timethirtys"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirty" id="routethirty" class="routethirtys"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirty" id="brandthirty" class="brandthirtys"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirty" id="numberthirty" style="width: 110px;" class="numberthirtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirty" id="locationthirty" class="locationthirtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirty" id="parkthirty" class="parkthirtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirty" id="pnothirty"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirty" id="movethirty" style="width: 20px; height: auto; margin: ;" class="movethirtys"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirty" id="boardthirty" style="width: 84%;" class="boardthirtys"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyone" id="timethirtyone" style="width: 80px;" class="timethirtyones"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyone" id="routethirtyone" class="routethirtyones"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyone" id="brandthirtyone" class="brandthirtyones"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyone" id="numberthirtyone" style="width: 110px;" class="numberthirtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyone" id="locationthirtyone" class="locationthirtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyone" id="parkthirtyone" class="parkthirtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyone" id="pnothirtyone"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyone" id="movethirtyone" style="width: 20px; height: auto; margin: ;" class="movethirtyones"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyone" id="boardthirtyone" style="width: 84%;" class="boardthirtyones"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtytwo" id="timethirtytwo" style="width: 80px;" class="timethirtytwos"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtytwo" id="routethirtytwo" class="routethirtytwos"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtytwo" id="brandthirtytwo" class="brandthirtytwos"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtytwo" id="numberthirtytwo" style="width: 110px;" class="numberthirtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtytwo" id="locationthirtytwo" class="locationthirtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtytwo" id="parkthirtytwo" class="parkthirtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtytwo" id="pnothirtytwo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtytwo" id="movethirtytwo" style="width: 20px; height: auto; margin: ;" class="movethirtytwos"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtytwo" id="boardthirtytwo" style="width: 84%;" class="boardthirtytwos"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtythree" id="timethirtythree" style="width: 80px;" class="timethirtythrees"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtythree" id="routethirtythree" class="routethirtythrees"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtythree" id="brandthirtythree" class="brandthirtythrees"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtythree" id="numberthirtythree" style="width: 110px;" class="numberthirtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtythree" id="locationthirtythree" class="locationthirtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtythree" id="parkthirtythree" class="parkthirtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtythree" id="pnothirtythree"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtythree" id="movethirtythree" style="width: 20px; height: auto; margin: ;" class="movethirtythrees"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtythree" id="boardthirtythree" style="width: 84%;" class="boardthirtythrees"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyfour" id="timethirtyfour" style="width: 80px;" class="timethirtyfours"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyfour" id="routethirtyfour" class="routethirtyfours"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyfour" id="brandthirtyfour" class="brandthirtyfours"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyfour" id="numberthirtyfour" style="width: 110px;" class="numberthirtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyfour" id="locationthirtyfour" class="locationthirtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyfour" id="parkthirtyfour" class="parkthirtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyfour" id="pnothirtyfour"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyfour" id="movethirtyfour" style="width: 20px; height: auto; margin: ;" class="movethirtyfours"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyfour" id="boardthirtyfour" style="width: 84%;" class="boardthirtyfours"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyfive" id="timethirtyfive" style="width: 80px;" class="timethirtyfives"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyfive" id="routethirtyfive" class="routethirtyfives"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyfive" id="brandthirtyfive" class="brandthirtyfives"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyfive" id="numberthirtyfive" style="width: 110px;" class="numberthirtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyfive" id="locationthirtyfive" class="locationthirtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyfive" id="parkthirtyfive" class="parkthirtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyfive" id="pnothirtyfive"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyfive" id="movethirtyfive" style="width: 20px; height: auto; margin: ;" class="movethirtyfives"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyfive" id="boardthirtyfive" style="width: 84%;" class="boardthirtyfives"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtysix" id="timethirtysix" style="width: 80px;" class="timethirtysixs"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtysix" id="routethirtysix" class="routethirtysixs"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtysix" id="brandthirtysix" class="brandthirtysixs"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtysix" id="numberthirtysix" style="width: 110px;" class="numberthirtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtysix" id="locationthirtysix" class="locationthirtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtysix" id="parkthirtysix" class="parkthirtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtysix" id="pnothirtysix"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtysix" id="movethirtysix" style="width: 20px; height: auto; margin: ;" class="movethirtysixs"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtysix" id="boardthirtysix" style="width: 84%;" class="boardthirtysixs"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyseven" id="timethirtyseven" style="width: 80px;" class="timethirtysevens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyseven" id="routethirtyseven" class="routethirtysevens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyseven" id="brandthirtyseven" class="brandthirtysevens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyseven" id="numberthirtyseven" style="width: 110px;" class="numberthirtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyseven" id="locationthirtyseven" class="locationthirtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyseven" id="parkthirtyseven" class="parkthirtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyseven" id="pnothirtyseven"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyseven" id="movethirtyseven" style="width: 20px; height: auto; margin: ;" class="movethirtysevens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyseven" id="boardthirtyseven" style="width: 84%;" class="boardthirtysevens"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyeight" id="timethirtyeight" style="width: 80px;" class="timethirtyeights"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyeight" id="routethirtyeight" class="routethirtyeights"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyeight" id="brandthirtyeight" class="brandthirtyeights"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyeight" id="numberthirtyeight" style="width: 110px;" class="numberthirtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyeight" id="locationthirtyeight" class="locationthirtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyeight" id="parkthirtyeight" class="parkthirtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyeight" id="pnothirtyeight"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyeight" id="movethirtyeight" style="width: 20px; height: auto; margin: ;" class="movethirtyeights"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyeight" id="boardthirtyeight" style="width: 84%;" class="boardthirtyeights"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtynine" id="timethirtynine" style="width: 80px;" class="timethirtynines"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtynine" id="routethirtynine" class="routethirtynines"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtynine" id="brandthirtynine" class="brandthirtynines"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtynine" id="numberthirtynine" style="width: 110px;" class="numberthirtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtynine" id="locationthirtynine" class="locationthirtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtynine" id="parkthirtynine" class="parkthirtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtynine" id="pnothirtynine"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtynine" id="movethirtynine" style="width: 20px; height: auto; margin: ;" class="movethirtynines"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtynine" id="boardthirtynine" style="width: 84%;" class="boardthirtynines"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourty" id="timefourty" style="width: 80px;" class="timefourtys"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourty" id="routefourty" class="routefourtys"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourty" id="brandfourty" class="brandfourtys"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourty" id="numberfourty" style="width: 110px;" class="numberfourtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourty" id="locationfourty" class="locationfourtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourty" id="parkfourty" class="parkfourtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourty" id="pnofourty"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourty" id="movefourty" style="width: 20px; height: auto; margin: ;" class="movefourtys"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourty" id="boardfourty" style="width: 84%;" class="boardfourtys"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyone" id="timefourtyone" style="width: 80px;" class="timefourtyones"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyone" id="routefourtyone" class="routefourtyones"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyone" id="brandfourtyone" class="brandfourtyones"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyone" id="numberfourtyone" style="width: 110px;" class="numberfourtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyone" id="locationfourtyone" class="locationfourtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyone" id="parkfourtyone" class="parkfourtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyone" id="pnofourtyone"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyones"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyone" id="movefourtyone" style="width: 20px; height: auto; margin: ;" class="movefourtyones"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyone" id="boardfourtyone" style="width: 84%;" class="boardfourtyones"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtytwo" id="timefourtytwo" style="width: 80px;" class="timefourtytwos"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtytwo" id="routefourtytwo" class="routefourtytwos"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtytwo" id="brandfourtytwo" class="brandfourtytwos"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtytwo" id="numberfourtytwo" style="width: 110px;" class="numberfourtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtytwo" id="locationfourtytwo" class="locationfourtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtytwo" id="parkfourtytwo" class="parkfourtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtytwo" id="pnofourtytwo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtytwos"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtytwo" id="movefourtytwo" style="width: 20px; height: auto; margin: ;" class="movefourtytwos"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtytwo" id="boardfourtytwo" style="width: 84%;" class="boardfourtytwos"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtythree" id="timefourtythree" style="width: 80px;" class="timefourtythrees"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtythree" id="routefourtythree" class="routefourtythrees"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtythree" id="brandfourtythree" class="brandfourtythrees"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtythree" id="numberfourtythree" style="width: 110px;" class="numberfourtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtythree" id="locationfourtythree" class="locationfourtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtythree" id="parkfourtythree" class="parkfourtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtythree" id="pnofourtythree"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtythrees"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtythree" id="movefourtythree" style="width: 20px; height: auto; margin: ;" class="movefourtythrees"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtythree" id="boardfourtythree" style="width: 84%;" class="boardfourtythrees"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyfour" id="timefourtyfour" style="width: 80px;" class="timefourtyfours"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyfour" id="routefourtyfour" class="routefourtyfours"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyfour" id="brandfourtyfour" class="brandfourtyfours"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyfour" id="numberfourtyfour" style="width: 110px;" class="numberfourtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyfour" id="locationfourtyfour" class="locationfourtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyfour" id="parkfourtyfour" class="parkfourtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyfour" id="pnofourtyfour"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyfours"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyfour" id="movefourtyfour" style="width: 20px; height: auto; margin: ;" class="movefourtyfours"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyfour" id="boardfourtyfour" style="width: 84%;" class="boardfourtyfours"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyfive" id="timefourtyfive" style="width: 80px;" class="timefourtyfives"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyfive" id="routefourtyfive" class="routefourtyfives"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyfive" id="brandfourtyfive" class="brandfourtyfives"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyfive" id="numberfourtyfive" style="width: 110px;" class="numberfourtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyfive" id="locationfourtyfive" class="locationfourtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyfive" id="parkfourtyfive" class="parkfourtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyfive" id="pnofourtyfive"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyfives"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyfive" id="movefourtyfive" style="width: 20px; height: auto; margin: ;" class="movefourtyfives"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyfive" id="boardfourtyfive" style="width: 84%;" class="boardfourtyfives"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtysix" id="timefourtysix" style="width: 80px;" class="timefourtysixs"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtysix" id="routefourtysix" class="routefourtysixs"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtysix" id="brandfourtysix" class="brandfourtysixs"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtysix" id="numberfourtysix" style="width: 110px;" class="numberfourtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtysix" id="locationfourtysix" class="locationfourtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtysix" id="parkfourtysix" class="parkfourtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtysix" id="pnofourtysix"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtysixs"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtysix" id="movefourtysix" style="width: 20px; height: auto; margin: ;" class="movefourtysixs"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtysix" id="boardfourtysix" style="width: 84%;" class="boardfourtysixs"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyseven" id="timefourtyseven" style="width: 80px;" class="timefourtysevens"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyseven" id="routefourtyseven" class="routefourtysevens"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyseven" id="brandfourtyseven" class="brandfourtysevens"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyseven" id="numberfourtyseven" style="width: 110px;" class="numberfourtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyseven" id="locationfourtyseven" class="locationfourtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyseven" id="parkfourtyseven" class="parkfourtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyseven" id="pnofourtyseven"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtysevens"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyseven" id="movefourtyseven" style="width: 20px; height: auto; margin: ;" class="movefourtysevens"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyseven" id="boardfourtyseven" style="width: 84%;" class="boardfourtysevens"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyeight" id="timefourtyeight" style="width: 80px;" class="timefourtyeights"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyeight" id="routefourtyeight" class="routefourtyeights"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyeight" id="brandfourtyeight" class="brandfourtyeights"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyeight" id="numberfourtyeight" style="width: 110px;" class="numberfourtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyeight" id="locationfourtyeight" class="locationfourtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyeight" id="parkfourtyeight" class="parkfourtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyeight" id="pnofourtyeight"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyeights"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyeight" id="movefourtyeight" style="width: 20px; height: auto; margin: ;" class="movefourtyeights"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyeight" id="boardfourtyeight" style="width: 84%;" class="boardfourtyeights"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtynine" id="timefourtynine" style="width: 80px;" class="timefourtynines"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtynine" id="routefourtynine" class="routefourtynines"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtynine" id="brandfourtynine" class="brandfourtynines"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtynine" id="numberfourtynine" style="width: 110px;" class="numberfourtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtynine" id="locationfourtynine" class="locationfourtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtynine" id="parkfourtynine" class="parkfourtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtynine" id="pnofourtynine"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtynines"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtynine" id="movefourtynine" style="width: 20px; height: auto; margin: ;" class="movefourtynines"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtynine" id="boardfourtynine" style="width: 84%;" class="boardfourtynines"/> </span></span>






            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefifty" id="timefifty" style="width: 80px;" class="timefiftys"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefifty" id="routefifty" class="routefiftys"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfifty" id="brandfifty" class="brandfiftys"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfifty" id="numberfifty" style="width: 110px;" class="numberfiftys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfifty" id="locationfifty" class="locationfiftys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfifty" id="parkfifty" class="parkfiftys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofifty" id="pnofifty"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofiftys"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefifty" id="movefifty" style="width: 20px; height: auto; margin: ;" class="movefiftys"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfifty" id="boardfifty" style="width: 84%;" class="boardfiftys"/> </span></span>


          </p><!--End schedule//////////-->

<p class="schedules" style="height: 2550px;">
            <span class="headnga"><u>Parked Buses:</u></span>

            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="one">Time:</label> <input type="text" name="stimeonepa" id="timeonepa" class="timeonespa" style="width: 80px;"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Route:</label> <input type="text" name="srouteonepa" id="routeonepa" class="routeonespa"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Brand:</label> <input type="text" name="sbrandonepa" id="brandonepa" class="brandonespa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberonepa" id="numberonepa" style="width: 110px;" class="numberonespa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationonepa" id="locationonepa" class="locationonespa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkonepa" id="parkonepa" class="parkonespa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%; text-align: center;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span>
					</label> <input type="text" name="spnoonepa" id="pnoonepa"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoonespa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Move:</label> <input type="text" name="Locationpa" id="moveonepa" style="width: 20px; height: auto; margin: ;" class="moveonespa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%; text-align: left;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px; background-color: ;"><label for="pntdbai">Opinion:</label> <input type="text" name="sboardonepa" id="boardonepa" style="width: 84%;" class="boardonespa"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwopb" id="timetwopb" style="width: 80px;" class="timetwospb"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwopb" id="routetwopb" class="routetwospb"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwopb" id="brandtwopb" class="brandtwospb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwopb" id="numbertwopb" style="width: 110px;" class="numbertwospb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwopb" id="locationtwopb" class="locationtwospb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwopb" id="parktwopb" class="parktwospb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwopb" id="pnotwopb"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwospb" /> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwopb" id="movetwopb" style="width: 20px; height: auto; margin: ;" class="movetwospb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwopb" id="boardtwopb" style="width: 84%;" class="boardtwospb"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreepc" id="timethreepc" style="width: 80px;" class="timethreespc"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreepc" id="routethreepc" class="routethreespc"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreepc" id="brandthreepc" class="brandthreespc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreepc" id="numberthreepc" style="width: 110px;" class="numberthreespc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreepc" id="locationthreepc" class="locationthreespc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreepc" id="parkthreepc" class="parkthreespc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreepc" id="pnothreepc" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreespc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreepc" id="movethreepc" style="width: 20px; height: auto; margin: ;" class="movethreespc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreepc" id="boardthreepc" style="width: 84%;" class="boardthreespc"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourpd" id="timefourpd" style="width: 80px;" class="timefourspd"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourpd" id="routefourpd" class="routefourspd"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourpd" id="brandfourpd" class="brandfourspd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourpd" id="numberfourpd" style="width: 110px;" class="numberfourspd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourpd" id="locationfourpd" class="locationfourspd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourpd" id="parkfourpd" class="parkfourspd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourpd" id="pnofourpd"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourspd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourpd" id="movefourpd" style="width: 20px; height: auto; margin: ;" class="movefourspd"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfourpd" id="boardfourpd" style="width: 84%;" class="boardfourspd"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefivepe" id="timefivepe" style="width: 80px;" class="timefivespe"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefivepe" id="routefivepe" class="routefivespe"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfivepe" id="brandfivepe" class="brandfivespe"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfivepe" id="numberfivepe" style="width: 110px;" class="numberfivespe"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfivepe" id="locationfivepe"  class="locationfivespe"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfivepe" id="parkfivepe" class="parkfivespe"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofivepe" id="pnofivepe"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofivespe"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefivepe" id="movefivepe" style="width: 20px; height: auto; margin: ;" class="movefivespe"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfivepe" id="boardfivepe" style="width: 84%;" class="boardfivespe"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimesixpf" id="timesixpf" style="width: 80px;" class="timesixspf"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutesixpf" id="routesixpf" class="routesixspf"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandsixpf" id="brandsixpf" class="brandsixspf"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbersixpf" id="numbersixpf" style="width: 110px;" class="classsixspf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationsixpf" id="locationsixpf" class="locationsixspf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparksixpf" id="parksixpf" class="parksixspf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnosixpf" id="pnosixpf"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosixspf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovesixpf" id="movesixpf" style="width: 20px; height: auto; margin: ;" class="movesixspf"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardsixpf" id="boardsixpf" style="width: 84%;" class="boardsixspf"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimesevenpg" id="timesevenpg" style="width: 80px;" class="timesevenspg"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutesevenpg" id="routesevenpg" class="routesevenspg"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandsevenpg" id="brandsevenpg" class="brandsevenspg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbersevenpg" id="numbersevenpg" style="width: 110px;" class="numbersevenspg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationsevenpg" id="locationsevenpg" class="locationsevenspg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparksevenpg" id="parksevenpg" class="parksevenspg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnosevenpg" id="pnosevenpg"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosevenspg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovesevenpg" id="movesevenpg" style="width: 20px; height: auto; margin: ;" class="movesevenspg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sbrandsevenpg" id="brandsevenpg" style="width: 84%;" class="brandsevenspg"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeeightph" id="timeeightph" style="width: 80px;" class="timeeightsph"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteeightph" id="routeeightph" class="routeeightsph"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandeightph" id="brandeightph" class="brandeightsph"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbereightph" id="numbereightph" style="width: 110px;" class="numbereightsph"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationeightph" id="locationeightph" class="locationeightsph"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkeightph" id="parkeightph" class="parkeightsph"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoeightph" id="pnoeightph"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoeightsph"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveeightph" id="moveeightph" style="width: 20px; height: auto; margin: ;" class="moveeightsph"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardeightph" id="boardeightph" style="width: 84%;" class="boardeightsph"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeninepi" id="timeninepi" style="width: 80px;" class="timeninespi"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteninepi" id="routeninepi" class="routeninespi"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandninepi" id="brandninepi" class="brandninespi"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberninepi" id="numberninepi" style="width: 110px;" class="numberninespi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationninepi" id="locationninepi" class="locationninespi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkninepi" id="parkninepi" class="parkninespi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoninepi" id="pnoninepi"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoninespi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveninepi" id="moveninepi" style="width: 20px; height: auto; margin: ;" class="moveninespi"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardninepi" id="boardninepi" style="width: 84%;" class="boardninespi"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetenpj" id="timetenpj" style="width: 80px;" class="timetenspj"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetenpj" id="routetenpj" class="routetenspj"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtenpj" id="brandtenpj" class="brandtenspj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertenpj" id="numbertenpj" style="width: 110px;" class="numbertenspj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtenpj" id="locationtenpj" class="locationtenspj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktenpj" id="parktenpj" class="parktenspj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotenpj" id="pnotenpj"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotenspj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetenpj" id="movetenpj" style="width: 20px; height: auto; margin: ;" class="movetenspj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtenpj" id="boardtenpj" style="width: 84%;" class="boardtenspj"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeelevenpk" id="timeelevenpk" style="width: 80px;" class="timeelevenspk"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteelevenpk" id="routeelevenpk" class="routeelevenspk"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandelevenpk" id="brandelevenpk" class="brandelevenspk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberelevenpk" id="numberelevenpk" style="width: 110px;" class="numberelevenspk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationelevenpk" id="locationelevenpk" class="locationelevenspk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkelevenpk" id="parkelevenpk" class="parkelevenspk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoelevenpk" id="pnoelevenpk"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px; text-align: center;" class="pnoelevenspk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveelevenpk" id="moveelevenpk" style="width: 20px; height: auto; margin: ;" class="moveelevenspk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardelevenpk" id="boardelevenpk" style="width: 84%;" class="boardelevenspk"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwelvepl" id="timetwelvepl" style="width: 80px;" class="timetwelvespl"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwelvepl" id="routetwelvepl" class="routetwelvespl"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwelvepl" id="brandtwelvepl" class="brandtwelvespl"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwelvepl" id="numbertwelvepl" style="width: 110px;" class="numbertwelvespl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwelvepl" id="locationtwelvepl" class="locationtwelvespl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwelvepl" id="parktwelvepl" class="parktwelvespl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwelvepl" id="pnotwelvepl"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwelvepl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwelvepl" id="movetwelvepl" style="width: 20px; height: auto; margin: ;" class="movetwelvespl"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwelvepl" id="boardtwelvepl" style="width: 84%;" class="boardtwelvespl"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirteenpm" id="timethirteenpm" style="width: 80px;" class="timethirteenspm"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirteenpm" id="routethirteenpm" class="routethirteenspm"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirteenpm" id="brandthirteenpm" class="brandthirteenspm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirteenpm" id="numberthirteenpm" style="width: 110px;" class="numberthirteenspm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirteenpm" id="locationthirteenpm" class="locationthirteenspm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirteenpm" id="parkthirteenpm" class="parkthirteenspm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirteenpm" id="pnothirteenpm"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirteenspm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirteenpm" id="movethirteenpm" style="width: 20px; height: auto; margin: ;" class="movethirteenspm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthirteenpm" id="boardthirteenpm" style="width: 84%;" class="boardthirteenspm"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourteenpn" id="timefourteenpn" style="width: 80px;" class="timefourteenspn"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourteenpn" id="routefourteenpn" class="routefourteenspn"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourteenpn" id="brandfourteenpn" class="brandfourteenspn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourteenpn" id="numberfourteenpn" style="width: 110px;" class="numberfourteenspn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourteenpn" id="locationfourteenpn" class="locationfourteenspn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourteenpn" id="parkfourteenpn" class="parkfourteenspn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourteenpn" id="pnofourteenpn"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourteenspn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourteenpn" id="movefourteenpn" style="width: 20px; height: auto; margin: ;" class="movefourteenspn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfourteenpn" id="boardfourteenpn" style="width: 84%;" class="boardfourteenspn"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefifeteenpo" id="timefifeteenpo" style="width: 80px;" class="timefifeteenspo"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefifeteenpo" id="routefifeteenpo" class="routefifeteenspo"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfifeteenpo" id="brandfifeteenpo" class="brandfifeteenspo"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfifeteenpo" id="numberfifeteenpo" style="width: 110px;" class="numberfifeteenspo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfifeteenpo" id="locationfifeteenpo" class="locationfifeteenspo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfifeteenpo" id="parkfifeteenpo" class="parkfifeteenspo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofifeteenpo" id="pnofifeteenpo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofifeteenspo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefifeteenpo" id="movefifeteenpo" style="width: 20px; height: auto; margin: ;" class="movefifeteenspo"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardfifeteenpo" id="boardfifeteenpo" style="width: 84%;" class="boardfifeteenspo"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimesixteenpp" id="timesixteenpp" style="width: 80px;" class="timesixteenspp"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutesixteenpp" id="routesixteenpp" class="routesixteenspp"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandsixteenpp" id="brandsixteenpp" class="brandsixteenspp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbersixteenpp" id="numbersixteenpp" style="width: 110px;" class="numbersixteenspp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationsixteenpp" id="locationsixteenpp" class="locationsixteenspp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparksixteenpp" id="parksixteenpp" class="parksixteenspp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnosixteenpp" id="pnosixteenpp"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnosixteenspp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovesixteenpp" id="movesixteenpp" style="width: 20px; height: auto; margin: ;" class="movesixteenspp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardsixteenpp" id="boardsixteenpp" style="width: 84%;" class="boardsixteenspp"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeseventeenpq" id="timeseventeenpq" style="width: 80px;" class="timeseventeenspq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteseventeenpq" id="routeseventeenpq" class="routeseventeenspq"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandseventeenpq" id="brandseventeenpq" class="brandseventeenspq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberseventeenpq" id="numberseventeenpq" style="width: 110px;" class="numberseventeenspq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationseventeenpq" id="locationseventeenpq" class="locationseventeenspq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkseventeenpq" id="parkseventeenpq" class="parkseventeenspq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoseventeenpq" id="pnoseventeenpq"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoseventeenspq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveseventeenpq" id="moveseventeenpq" style="width: 20px; height: auto; margin: ;" class="moveseventeenspq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardseventeenpq" id="boardseventeenpq" style="width: 84%;" class="boardseventeenspq"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimeeighteenpr" id="timeeighteenpr" style="width: 80px;" class="timeeighteenspr"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="srouteeighteenpr" id="routeeighteenpr" class="routeeighteenspr"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandeighteenpr" id="brandeighteenpr" class="brandeighteenspr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbereighteenpr" id="numbereighteenpr" style="width: 110px;" class="numbereighteenspr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationeighteenpr" id="locationeighteenpr" class="locationeighteenspr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkeighteenpr" id="parkeighteenpr" class="parkeighteenspr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnoeighteenpr" id="pnoeighteenpr"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoeighteenspr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smoveeighteenpr" id="moveeighteenpr" style="width: 20px; height: auto; margin: ;" class="moveeighteenspr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardeighteenpr" id="boardeighteenpr" style="width: 84%;" class="boardeighteenspr"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimenineteenps" id="timetennineteenps" style="width: 80px;" class="timenineteensps"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutenineteenps" id="routenineteenps" class="routenineteensps"> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandnineteenps" id="brandnineteenps" class="brandnineteensps"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbernineteenps" id="numbernineteenps" style="width: 110px;" class="numbernineteensps"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationnineteenps" id="locationnineteenps" class="locationnineteensps"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparknineteenps" id="parknineteenps" class="parknineteensps"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnonineteenps" id="pnonineteenps"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnonineteensps"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovenineteenps" id="movenineteenps" style="width: 20px; height: auto; margin: ;" class="movenineteensps"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardnineteenps" id="boardnineteenps" style="width: 84%;" class="boardnineteensps"/> </span></span>



             <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentypt" id="timetwentypt" style="width: 80px;" class="timetwentyspt"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentypt" id="routetwentypt" class="routetwentyspt"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentypt" id="brandtwentypt" class="brandtwentyspt"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentypt" id="numbertwentypt" style="width: 110px;" class="numbertwentyspt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentypt" id="locationtwentypt" class="locationtwentyspt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentypt" id="parktwentypt" class="parktwentyspt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentypt" id="pnotwentypt"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyspt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentypt" id="movetwentypt" style="width: 20px; height: auto; margin: ;" class="movetwentyspt"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentypt" id="boardtwentypt" style="width: 84%;" class="boardtwentyspt"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyonepu" id="timetwentyonepu" style="width: 80px;" class="timetwentyonespu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyonepu" id="routetwentyonepu" class="routetwentyonespu"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyonepu" id="brandtwentyonepu" class="brandtwentyonespu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyonepu" id="numbertwentyonepu" style="width: 110px;" class="numbertwentyonespu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyonepu" id="locationtwentyonepu" class="locationtwentyonespu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyonepu" id="parktwentyonepu" class="parktwentyonespu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyonepu" id="pnotwentyonepu"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyonespu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyonepu" id="movetwentyonepu" style="width: 20px; height: auto; margin: ;" class="movetwentyonespu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentyonepu" id="boardtwentyonepu" style="width: 84%;" class="boardtwentyonespu"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentytwopv" id="timetwentytwopv" style="width: 80px;" class="timetwentytwospv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentytwopv" id="routetwentytwopv" class="routetwentytwospv"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentytwopv" id="brandtwentytwopv" class="brandtwentytwospv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentytwopv" id="numbertwentytwopv" style="width: 110px;" class="numbertwentytwospv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentytwopv" id="locationtwentytwopv" class="locationtwentytwospv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentytwopv" id="parktwentytwopv" class="parktwentytwospv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentytwopv" id="pnotwentytwopv"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentytwospv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentytwopv" id="movetwentytwopv" style="width: 20px; height: auto; margin: ;" class="movetwentytwospv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentytwopv" id="boardtwentytwopv" style="width: 84%;" class="boardtwentytwospv"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentythreepw" id="timetwentythreepw" style="width: 80px;" class="timetwentythreespw"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentythreepw" id="routetwentythreepw" class="routetwentythreespw"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentythreepw" id="brandtwentythreepw" class="brandtwentythreespw"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentythreepw" id="numbertwentythreepw" style="width: 110px;" class="numbertwentythreespw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentythreepw" id="locationtwentythreepw" class="locationtwentythreespw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentythreepw" id="parktwentythreepw" class="parktwentythreespw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentythreepw" id="pnotwentythreepw"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentythreespw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentythreepw" id="movetwentythreepw" style="width: 20px; height: auto; margin: ;" class="movetwentythreespw"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentythreepw" id="boardtwentythreepw" style="width: 84%;" class="boardtwentythreespw"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyfourpw" id="timetwentyfourpw" style="width: 80px;" class="timetwentyfourspw"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyfourpw" id="routetwentyfourpw" class="routetwentyfourspw"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyfourpw" id="brandtwentyfourpw" class="brandtwentyfourspw"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyfourpw" id="numbertwentyfourpw" style="width: 110px;" class="numbertwentyfourspw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyfourpw" id="locationtwentyfourpw" class="locationtwentyfourspw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyfourpw" id="parktwentyfourpw" class="parktwentyfourspw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyfourpw" id="pnotwentyfourpw"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyfourspw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyfourpw" id="movetwentyfourpw" style="width: 20px; height: auto; margin: ;" class="movetwentyfourspw"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwentyfourpw" id="boardtwentyfourpw" style="width: 84%;" class="boardtwentyfourspw"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyfivepx" id="timetwentyfivepx" style="width: 80px;" class="timetwentyfivespx"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyfivepx" id="routetwentyfivepx" class="routetwentyfivespx"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyfivepx" id="brandtwentyfivepx" class="brandtwentyfivespx"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyfivepx" id="numbertwentyfivepx" style="width: 110px;" class="numbertwentyfivespx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyfivepx" id="locationtwentyfivepx" class="locationtwentyfivespx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyfivepx" id="parktwentyfivepx" class="parktwentyfivespx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyfivepx" id="pnotwentyfivepx"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyfivespx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyfivepx" id="movetwentyfivepx" style="width: 20px; height: auto; margin: ;" class="movetwentyfivespx"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyfivepx" id="boardtwentyfivepx" style="width: 84%;" class="boardtwentyfivespx"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentysixpy" id="timetwentysixpy" style="width: 80px;" class="timetwentysixspy"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentysixpy" id="routetwentysixpy" class="routetwentysixspy"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentysixpy" id="brandtwentysixpy" class="brandtwentysixspy"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentysixpy" id="numbertwentysixpy" style="width: 110px;" class="numbertwentysixspy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentysixpy" id="locationtwentysixpy" class="locationtwentysixspy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentysixpy" id="parktwentysixpy" class="parktwentysixspy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentysixpy" id="pnotwentysixpy"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentysixspy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentysixpy" id="movetwentysixpy" style="width: 20px; height: auto; margin: ;" class="movetwentysixspy"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentysixpy" id="boardtwentysixpy" style="width: 84%;" class="boardtwentysixspy"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentysevenpz" id="timetwentysevenpz" style="width: 80px;" class="timetwentysevenspz"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentysevenpz" id="routetwentysevenpz" class="routetwentysevenspz"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentysevenpz" id="brandtwentysevenpz" class="brandtwentysevenspz"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentysevenpz" id="numbertwentysevenpz" style="width: 110px;" class="numbertwentysevenspz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentysevenpz" id="locationtwentysevenpz" class="locationtwentysevenspz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentysevenpz" id="parktwentysevenpz" class="parktwentysevenspz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentysevenpz" id="pnotwentysevenpz"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentysevenspz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentysevenpz" id="movetwentysevenpz" style="width: 20px; height: auto; margin: ;" class="movetwentysevenspz"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentysevenpz" id="boardtwentysevenpz" style="width: 84%;" class="boardtwentysevenspz"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyeightpaa" id="timetwentyeightpaa" style="width: 80px;" class="timetwentyeightspaa"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyeightpaa" id="routetwentyeightpaa" class="routetwentyeightspaa"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyeightpaa" id="brandtwentyeightpaa" class="brandtwentyeightspaa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyeightpaa" id="numbertwentyeightpaa" style="width: 110px;" class="numbertwentyeightspaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyeightpaa" id="locationtwentyeightpaa" class="locationtwentyeightspaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyeightpaa" id="parktwentyeightpaa" class="parktwentyeightspaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyeightpaa" id="pnotwentyeightpaa"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyeightspaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyeightpaa" id="movetwentyeightpaa" style="width: 20px; height: auto; margin: ;" class="movetwentyeightspaa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyeightpaa" id="boardtwentyeightpaa" style="width: 84%;" class="boardtwentyeightspaa"/> </span></span>






            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwentyninepbb" id="timetwentyninepbb" style="width: 80px;" class="timetwentyninespbb"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwentyninepbb" id="routetwentyninepbb" class="routetwentyninespbb"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwentyninepbb" id="brandtwentyninepbb" class="brandtwentyninespbb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwentyninepbb" id="numbertwentyninepbb" style="width: 110px;" class="numbertwentyninespbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwentyninepbb" id="locationtwentyninepbb" class="locationtwentyninespbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwentyninepbb" id="parktwentyninepbb" class="parktwentyninespbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwentyninepbb" id="pnotwentyninepbb"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwentyninespbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwentyninepbb" id="movetwentyninepbb" style="width: 20px; height: auto; margin: ;" class="movetwentyninespbb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardtwentyninepbb" id="boardtwentyninepbb" style="width: 84%;" class="boardtwentyninespbb"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtypcc" id="timethirtypcc" style="width: 80px;" class="timethirtyspcc"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtypcc" id="routethirtypcc" class="routethirtyspcc"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtypcc" id="brandthirtypcc" class="brandthirtyspcc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtypcc" id="numberthirtypcc" style="width: 110px;" class="numberthirtyspcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtypcc" id="locationthirtypcc" class="locationthirtyspcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtypcc" id="parkthirtypcc" class="parkthirtyspcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtypcc" id="pnothirtypcc"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyspcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtypcc" id="movethirtypcc" style="width: 20px; height: auto; margin: ;" class="movethirtyspcc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtypcc" id="boardthirtypcc" style="width: 84%;" class="boardthirtyspcc"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyonepdd" id="timethirtyonepdd" style="width: 80px;" class="timethirtyonespdd"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyonepdd" id="routethirtyonepdd" class="routethirtyonespdd"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyonepdd" id="brandthirtyonepdd" class="brandthirtyonespdd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyonepdd" id="numberthirtyonepdd" style="width: 110px;" class="numberthirtyonespdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyonepdd" id="locationthirtyonepdd" class="locationthirtyonespdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyonepdd" id="parkthirtyonepdd" class="parkthirtyonespdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyonepdd" id="pnothirtyonepdd"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyonespdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyonepdd" id="movethirtyonepdd" style="width: 20px; height: auto; margin: ;" class="movethirtyonespdd"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyonepdd" id="boardthirtyonepdd" style="width: 84%;" class="boardthirtyonespdd"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtytwopee" id="timethirtytwopee" style="width: 80px;" class="timethirtytwospee"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtytwopee" id="routethirtytwopee" class="routethirtytwospee"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtytwopee" id="brandthirtytwopee" class="brandthirtytwospee"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtytwopee" id="numberthirtytwopee" style="width: 110px;" class="numberthirtytwospee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtytwopee" id="locationthirtytwopee" class="locationthirtytwospee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtytwopee" id="parkthirtytwopee" class="parkthirtytwospee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtytwopee" id="pnothirtytwopee"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtytwospee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtytwopee" id="movethirtytwopee" style="width: 20px; height: auto; margin: ;" class="movethirtytwospee"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtytwopee" id="boardthirtytwopee" style="width: 84%;" class="boardthirtytwospee"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtythreepff" id="timethirtythreepff" style="width: 80px;" class="timethirtythreespff"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtythreepff" id="routethirtythreepff" class="routethirtythreespff"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtythreepff" id="brandthirtythreepff" class="brandthirtythreespff"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtythreepff" id="numberthirtythreepff" style="width: 110px;" class="numberthirtythreespff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtythreepff" id="locationthirtythreepff" class="locationthirtythreespff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtythreepff" id="parkthirtythreepff" class="parkthirtythreespff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtythreepff" id="pnothirtythreepff"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtythreespff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtythreepff" id="movethirtythreepff" style="width: 20px; height: auto; margin: ;" class="movethirtythreespff"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtythreepff" id="boardthirtythreepff" style="width: 84%;" class="boardthirtythreespff"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyfourpgg" id="timethirtyfourpgg" style="width: 80px;" class="timethirtyfourspgg"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyfourpgg" id="routethirtyfourpgg" class="routethirtyfourspgg"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyfourpgg" id="brandthirtyfourpgg" class="brandthirtyfourspgg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyfourpgg" id="numberthirtyfourpgg" style="width: 110px;" class="numberthirtyfourspgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyfourpgg" id="locationthirtyfourpgg" class="locationthirtyfourspgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyfourpgg" id="parkthirtyfourpgg" class="parkthirtyfourspgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyfourpgg" id="pnothirtyfourpgg"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyfourspgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyfourpgg" id="movethirtyfourpgg" style="width: 20px; height: auto; margin: ;" class="movethirtyfourspgg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyfourpgg" id="boardthirtyfourpgg" style="width: 84%;" class="boardthirtyfourspgg"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyfivephh" id="timethirtyfivephh" style="width: 80px;" class="timethirtyfivesphh"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyfivephh" id="routethirtyfivephh" class="routethirtyfivesphh"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyfivephh" id="brandthirtyfivephh" class="brandthirtyfivesphh"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyfivephh" id="numberthirtyfivephh" style="width: 110px;" class="numberthirtyfivesphh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyfivephh" id="locationthirtyfivephh" class="locationthirtyfivesphh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyfivephh" id="parkthirtyfivephh" class="parkthirtyfivesphh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyfivephh" id="pnothirtyfivephh"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyfivesphh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyfivephh" id="movethirtyfivephh" style="width: 20px; height: auto; margin: ;" class="movethirtyfivesphh"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyfivephh" id="boardthirtyfivephh" style="width: 84%;" class="boardthirtyfivesphh"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtysixpii" id="timethirtysixpii" style="width: 80px;" class="timethirtysixspii"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtysixpii" id="routethirtysixpii" class="routethirtysixspii"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtysixpii" id="brandthirtysixpii" class="brandthirtysixspii"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtysixpii" id="numberthirtysixpii" style="width: 110px;" class="numberthirtysixspii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtysixpii" id="locationthirtysixpii" class="locationthirtysixspii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtysixpii" id="parkthirtysixpii" class="parkthirtysixspii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtysixpii" id="pnothirtysixpii"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtysixspii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtysixpii" id="movethirtysixpii" style="width: 20px; height: auto; margin: ;" class="movethirtysixspii"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtysixpii" id="boardthirtysixpii" style="width: 84%;" class="boardthirtysixspii"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtysevenpjj" id="timethirtysevenpjj" style="width: 80px;" class="timethirtysevenspjj"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtysevenpjj" id="routethirtysevenpjj" class="routethirtysevenspjj"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtysevenpjj" id="brandthirtysevenpjj" class="brandthirtysevenspjj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtysevenpjj" id="numberthirtysevenpjj" style="width: 110px;" class="numberthirtysevenspjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtysevenpjj" id="locationthirtysevenpjj" class="locationthirtysevenspjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtysevenpjj" id="parkthirtysevenpjj" class="parkthirtysevenspjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtysevenpjj" id="pnothirtysevenpjj"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtysevenspjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtysevenpjj" id="movethirtysevenpjj" style="width: 20px; height: auto; margin: ;" class="movethirtysevenspjj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtysevenpjj" id="boardthirtysevenpjj" style="width: 84%;" class="boardthirtysevenspjj"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyeightpkk" id="timethirtyeightpkk" style="width: 80px;" class="timethirtyeightspkk"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyeightpkk" id="routethirtyeightpkk" class="routethirtyeightspkk"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyeightpkk" id="brandthirtyeightpkk" class="brandthirtyeightspkk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyeightpkk" id="numberthirtyeightpkk" style="width: 110px;" class="numberthirtyeightspkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyeightpkk" id="locationthirtyeightpkk" class="locationthirtyeightspkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyeightpkk" id="parkthirtyeightpkk" class="parkthirtyeightspkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyeightpkk" id="pnothirtyeightpkk"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyeightspkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyeightpkk" id="movethirtyeightpkk" style="width: 20px; height: auto; margin: ;" class="movethirtyeightspkk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyeightpkk" id="boardthirtyeightpkk" style="width: 84%;" class="boardthirtyeightspkk"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethirtyninepll" id="timethirtyninepll" style="width: 80px;" class="timethirtyninespll"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethirtyninepll" id="routethirtyninepll" class="routethirtyninespll"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthirtyninepll" id="brandthirtyninepll" class="brandthirtyninespll"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthirtyninepll" id="numberthirtyninepll" style="width: 110px;" class="numberthirtyninespll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthirtyninepll" id="locationthirtyninepll" class="locationthirtyninespll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthirtyninepll" id="parkthirtyninepll" class="parkthirtyninespll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothirtyninepll" id="pnothirtyninepll"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothirtyninespll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethirtyninepll" id="movethirtyninepll" style="width: 20px; height: auto; margin: ;" class="movethirtyninespll"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardthirtyninepll" id="boardthirtyninepll" style="width: 84%;" class="boardthirtyninespll"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtypmm" id="timefourtypmm" style="width: 80px;" class="timefourtyspmm"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtypmm" id="routefourtypmm" class="routefourtyspmm"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtypmm" id="brandfourtypmm" class="brandfourtyspmm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtypmm" id="numberfourtypmm" style="width: 110px;" class="numberfourtyspmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtypmm" id="locationfourtypmm" class="locationfourtyspmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtypmm" id="parkfourtypmm" class="parkfourtyspmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtypmm" id="pnofourtypmm"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyspmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtypmm" id="movefourtypmm" style="width: 20px; height: auto; margin: ;" class="movefourtyspmm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtypmm" id="boardfourtypmm" style="width: 84%;" class="boardfourtyspmm"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyonepnn" id="timefourtyonepnn" style="width: 80px;" class="timefourtyonespnn"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyonepnn" id="routefourtyonepnn" class="routefourtyonespnn"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyonepnn" id="brandfourtyonepnn" class="brandfourtyonespnn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyonepnn" id="numberfourtyonepnn" style="width: 110px;" class="numberfourtyonespnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyonepnn" id="locationfourtyonepnn" class="locationfourtyonespnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyonepnn" id="parkfourtyonepnn" class="parkfourtyonespnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyonepnn" id="pnofourtyonepnn"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyonespnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyonepnn" id="movefourtyonepnn" style="width: 20px; height: auto; margin: ;" class="movefourtyonespnn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyonepnn" id="boardfourtyonepnn" style="width: 84%;" class="boardfourtyonespnn"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtytwopoo" id="timefourtytwopoo" style="width: 80px;" class="timefourtytwospoo"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtytwopoo" id="routefourtytwopoo" class="routefourtytwospoo"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtytwopoo" id="brandfourtytwopoo" class="brandfourtytwospoo"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtytwopoo" id="numberfourtytwopoo" style="width: 110px;" class="numberfourtytwospoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtytwopoo" id="locationfourtytwopoo" class="locationfourtytwospoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtytwopoo" id="parkfourtytwopoo" class="parkfourtytwospoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtytwopoo" id="pnofourtytwopoo"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtytwospoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtytwopoo" id="movefourtytwopoo" style="width: 20px; height: auto; margin: ;" class="movefourtytwospoo"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtytwopoo" id="boardfourtytwopoo" style="width: 84%;" class="boardfourtytwospoo"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtythreeppp" id="timefourtythreeppp" style="width: 80px;" class="timefourtythreesppp"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtythreeppp" id="routefourtythreeppp" class="routefourtythreesppp"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtythreeppp" id="brandfourtythreeppp" class="brandfourtythreesppp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtythreeppp" id="numberfourtythreeppp" style="width: 110px;" class="numberfourtythreesppp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtythreeppp" id="locationfourtythreeppp" class="locationfourtythreesppp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtythreeppp" id="parkfourtythreeppp" class="parkfourtythreesppp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtythreeppp" id="pnofourtythreeppp"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtythreesppp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtythreeppp" id="movefourtythreeppp" style="width: 20px; height: auto; margin: ;" class="movefourtythreesppp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtythreeppp" id="boardfourtythreeppp" style="width: 84%;" class="boardfourtythreesppp"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyfourpqq" id="timefourtyfourpqq" style="width: 80px;" class="timefourtyfourspqq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyfourpqq" id="routefourtyfourpqq" class="routefourtyfourspqq"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyfourpqq" id="brandfourtyfourpqq" class="brandfourtyfourspqq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyfourpqq" id="numberfourtyfourpqq" style="width: 110px;" class="numberfourtyfourspqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyfourpqq" id="locationfourtyfourpqq" class="locationfourtyfourspqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyfourpqq" id="parkfourtyfourpqq" class="parkfourtyfourspqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyfourpqq" id="pnofourtyfourpqq"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyfourspqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyfourpqq" id="movefourtyfourpqq" style="width: 20px; height: auto; margin: ;" class="movefourtyfourspqq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyfourpqq" id="boardfourtyfourpqq" style="width: 84%;" class="boardfourtyfourspqq"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyfiveprr" id="timefourtyfiveprr" style="width: 80px;" class="timefourtyfivesprr"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyfiveprr" id="routefourtyfiveprr" class="routefourtyfivesprr"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyfiveprr" id="brandfourtyfiveprr" class="brandfourtyfivesprr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyfiveprr" id="numberfourtyfiveprr" style="width: 110px;" class="numberfourtyfivesprr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyfiveprr" id="locationfourtyfiveprr" class="locationfourtyfivesprr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyfiveprr" id="parkfourtyfiveprr" class="parkfourtyfivesprr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyfiveprr" id="pnofourtyfiveprr"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyfivesprr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyfiveprr" id="movefourtyfiveprr" style="width: 20px; height: auto; margin: ;" class="movefourtyfivesprr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyfiveprr" id="boardfourtyfiveprr" style="width: 84%;" class="boardfourtyfivesprr"/> </span></span>





            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtysixpss" id="timefourtysixpss" style="width: 80px;" class="timefourtysixspss"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtysixpss" id="routefourtysixpss" class="routefourtysixspss"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtysixpss" id="brandfourtysixpss" class="brandfourtysixspss"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtysixpss" id="numberfourtysixpss" style="width: 110px;" class="numberfourtysixspss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtysixpss" id="locationfourtysixpss" class="locationfourtysixspss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtysixpss" id="parkfourtysixpss" class="parkfourtysixspss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtysixpss" id="pnofourtysixpss"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtysixspss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtysixpss" id="movefourtysixpss" style="width: 20px; height: auto; margin: ;" class="movefourtysixspss"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtysixpss" id="boardfourtysixpss" style="width: 84%;" class="boardfourtysixspss"/> </span></span>



            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtysevenptt" id="timefourtysevenptt" style="width: 80px;" class="timefourtysevensptt"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtysevenptt" id="routefourtysevenptt" class="routefourtysevensptt"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtysevenptt" id="brandfourtysevenptt" class="brandfourtysevensptt"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtysevenptt" id="numberfourtysevenptt" style="width: 110px;" class="numberfourtysevensptt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtysevenptt" id="locationfourtysevenptt" class="locationfourtysevensptt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtysevenptt" id="parkfourtysevenptt" class="parkfourtysevensptt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtysevenptt" id="pnofourtysevenptt"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtysevensptt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtysevenptt" id="movefourtysevenptt" style="width: 20px; height: auto; margin: ;" class="pttmovefourtysevensptt"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtysevenptt" id="boardfourtysevenptt" style="width: 84%;" class="boardfourtysevensptt"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyeightpuu" id="timefourtyeightpuu" style="width: 80px;" class="timefourtyeightspuu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyeightpuu" id="routefourtyeightpuu" class="routefourtyeightspuu"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyeightpuu" id="brandfourtyeightpuu" class="brandfourtyeightspuu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyeightpuu" id="numberfourtyeightpuu" style="width: 110px;" class="numberfourtyeightspuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyeightpuu" id="locationfourtyeightpuu" class="locationfourtyeightspuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyeightpuu" id="parkfourtyeightpuu" class="parkfourtyeightspuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyeightpuu" id="pnofourtyeightpuu"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyeightspuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyeightpuu" id="movefourtyeightpuu" style="width: 20px; height: auto; margin: ;" class="movefourtyeightspuu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyeightpuu" id="boardfourtyeightpuu" style="width: 84%;" class="boardfourtyeightspuu"/> </span></span>




            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefourtyninepvv" id="timefourtyninepvv" style="width: 80px;" class="timefourtyninespvv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefourtyninepvv" id="routefourtyninepvv" class="routefourtyninespvv"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfourtyninepvv" id="brandfourtyninepvv" class="brandfourtyninespvv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfourtyninepvv" id="numberfourtyninepvv" style="width: 110px;" class="numberfourtyninespvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfourtyninepvv" id="locationfourtyninepvv" class="locationfourtyninespvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfourtyninepvv" id="parkfourtyninepvv" class="parkfourtyninespvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofourtyninepvv" id="pnofourtyninepvv"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofourtyninespvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefourtyninepvv" id="movefourtyninepvv" style="width: 20px; height: auto; margin: ;" class="movefourtyninespvv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfourtyninepvv" id="boardfourtyninepvv" style="width: 84%;" class="boardfourtyninespvv"/> </span></span>






            <span class="firstaa" id="bbtdbfsa" style="width: 8%;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimefiftypww" id="timefiftypww" style="width: 80px;" class="timefiftyspww"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 17%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutefiftypww" id="routefiftypww" class="routefiftyspww"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 16%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandfiftypww" id="brandfiftypww" class="brandfiftyspww"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 16%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberfiftypww" id="numberfiftypww" style="width: 110px;" class="numberfiftyspww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationfiftypww" id="locationfiftypww" class="locationfiftyspww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 16%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkfiftypww" id="parkfiftypww" class="parkfiftyspww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnofiftypww" id="pnofiftypww"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnofiftyspww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovefiftypww" id="movefiftypww" style="width: 20px; height: auto; margin: ;" class="movefiftyspww"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text"  name="sboardfiftypww" id="boardfiftypww" style="width: 84%;" class="boardfiftyspww"/> </span></span>


          </p><!--End Parked//////////-->


<!--Already Moving Buses-->
<p class="schedules" style="height: 2800px; border-bottom: 2px solid red;">
            <span class="headnga"><u>Already Moving Buses:</u></span>


            <!--Route 1 Already Moving Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="aroutea" id="rtdbia" style="width: 50%;"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 14%; text-align: left;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandonea" id="brandonea" class="brandonesa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberonea" id="numberonea" style="width: 98px;" class="numberonesa"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbaaa" id="cntdbiaa"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="srouteonea" id="routeonea" class="routeonesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationonea" id="locationonea" class="locationonesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Leaving Status:</label> <input type="text" name="sparkonea" id="parkonea" class="parkonesa"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="one">Validity:</label> <input type="text" name="stimeonea" id="timeonea" class="timeonesa" style="width: 80px;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%; text-align: center;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span>
					</label> <input type="text" name="spnoonea" id="pnoonea"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoonesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smoveonea" id="moveonea" style="width: 30px; height: auto; margin: ;" class="moveonesa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%; text-align: left;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px; background-color: ; z-index: 1;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardonea" id="boardonea" style="width: 84%;" class="boardonesa"/> </span></span>





            <span class="firstaa" id="cntdbfsa" style="width: 14%; text-align: left;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwob" id="brandtwob" class="brandtwosb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwob" id="numbertwob" style="width: 98px;" class="numbertwosb"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaab" id="cntdbiab"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwob" id="routetwob" class="routetwosb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwob" id="locationtwob" class="locationtwosb"/> </span></span>

            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwob" id="parktwob" class="parktwosb"/> </span></span>

             <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwob" id="timetwob" style="width: 80px; class="timetwosb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwob" id="pnotwob"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwosb" /> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwob" id="movetwob" style="width: 30px; height: auto; margin: ;" class="movetwosb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwob" id="boardtwob" style="width: 84%;" class="boardtwosb"/> </span></span>





            <span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreea" id="brandthreea" class="brandthreesa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreea" id="numberthreea" style="width: 98px;" class="numberthreesa"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaa" id="cntdbia"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreea" id="routethreea" class="routethreesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreea" id="locationthreea" class="locationthreesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreea" id="parkthreea" class="parkthreesa"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreea" id="timethreea" style="width: 80px;" class="timethreesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreea" id="pnothreea" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreea" id="movethreea" style="width: 30px; height: auto; margin: ;" class="movethreesa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreea" id="boardthreea" style="width: 84%;" class="boardthreesa"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeb" id="brandthreeb" class="brandthreesb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeb" id="numberthreeb" style="width: 98px;" class="numberthreesb"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbab" id="cntdbib"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeb" id="routethreeb" class="routethreesb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeb" id="locationthreeb" class="locationthreesb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeb" id="parkthreeb" class="parkthreesb"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeb" id="timethreeb" style="width: 80px;" class="timethreesb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeb" id="pnothreeb" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeb" id="movethreeb" style="width: 30px; height: auto; margin: ;" class="movethreesb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeb" id="boardthreeb" style="width: 84%;" class="boardthreesb"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreec" id="brandthreec" class="brandthreesc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreec" id="numberthreec" style="width: 98px;" class="numberthreesc"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbac" id="cntdbic"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreec" id="routethreec" class="routethreesc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreec" id="locationthreec" class="locationthreesc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreec" id="parkthreec" class="parkthreesc"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreec" id="timethreec" style="width: 80px;" class="timethreesc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreec" id="pnothreec" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreec" id="movethreec" style="width: 30px; height: auto; margin: ;" class="movethreesc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreec" id="boardthreec" style="width: 84%;" class="boardthreesc"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreed" id="brandthreed" class="brandthreesd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreed" id="numberthreed" style="width: 98px;" class="numberthreesd"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbad" id="cntdbid"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreed" id="routethreed" class="routethreesd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreed" id="locationthreed" class="locationthreesd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreed" id="parkthreed" class="parkthreesd"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreed" id="timethreed" style="width: 80px;" class="timethreesd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreed" id="pnothreed" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreed" id="movethreed" style="width: 30px; height: auto; margin: ;" class="movethreesd"/> </span></span>
           <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreed" id="boardthreed" style="width: 84%;" class="boardthreesd"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreee" id="brandthreee" class="brandthreese"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreee" id="numberthreee" style="width: 98px;" class="numberthreese"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbae" id="cntdbie"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreee" id="routethreee" class="routethreese"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreee" id="locationthreee" class="locationthreese"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreee" id="parkthreee" class="parkthreese"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreee" id="timethreee" style="width: 80px;" class="timethreese"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreee" id="pnothreee" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreese"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreee" id="movethreee" style="width: 30px; height: auto; margin: ;" class="movethreese"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreee" id="boardthreee" style="width: 84%;" class="boardthreese"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreef" id="brandthreef" class="brandthreesf"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreef" id="numberthreef" style="width: 98px;" class="numberthreesf"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaf" id="cntdbif"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreef" id="routethreef" class="routethreesf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreef" id="locationthreef" class="locationthreesf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreef" id="parkthreef" class="parkthreesf"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreef" id="timethreef" style="width: 80px;" class="timethreesf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreef" id="pnothreef" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreef" id="movethreef" style="width: 30px; height: auto; margin: ;" class="movethreesf"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreef" id="boardthreef" style="width: 84%;" class="boardthreesf"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeg" id="brandthreeg" class="brandthreesg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeg" id="numberthreeg" style="width: 98px;" class="numberthreesg"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbag" id="cntdbig"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeg" id="routethreeg" class="routethreesg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeg" id="locationthreeg" class="locationthreesg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeg" id="parkthreeg" class="parkthreesg"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeg" id="timethreeg" style="width: 80px;" class="timethreesg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeg" id="pnothreeg" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeg" id="movethreeg" style="width: 30px; height: auto; margin: ;" class="movethreesg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeg" id="boardthreeg" style="width: 84%;" class="boardthreesg"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeh" id="brandthreeh" class="brandthreesh"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeh" id="numberthreeh" style="width: 98px;" class="numberthreesh"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbah" id="cntdbih"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeh" id="routethreeh" class="routethreesh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeh" id="locationthreeh" class="locationthreesh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeh" id="parkthreeh" class="parkthreesh"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeh" id="timethreeh" style="width: 80px;" class="timethreesh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeh" id="pnothreeh" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeh" id="movethreeh" style="width: 30px; height: auto; margin: ;" class="movethreesh"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeh" id="boardthreeh" style="width: 84%;" class="boardthreesh"/> </span></span>




<!--Route 2 Already Moving Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="aroutee" id="rtdbie" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreei" id="brandthreei" class="brandthreesi"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreei" id="numberthreei" style="width: 98px;" class="numberthreesi"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor Name:</label> <input type="text" name="cntdbai" id="cntdbii"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreei" id="routethreei" class="routethreesi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreei" id="locationthreei" class="locationthreesi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Leaving Status:</label> <input type="text" name="sparkthreei" id="parkthreei" class="parkthreesi"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Validity:</label> <input type="text" name="stimethreei" id="timethreei" style="width: 80px;" class="timethreesi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreei" id="pnothreei" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreei" id="movethreei" style="width: 30px; height: auto; margin: ;" class="movethreesi"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreei" id="boardthreei" style="width: 84%;" class="boardthreesi"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreej" id="brandthreej" class="brandthreesj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreej" id="numberthreej" style="width: 98px;" class="numberthreesj"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaj" id="cntdbij"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreej" id="routethreej" class="routethreesj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreej" id="locationthreej" class="locationthreesj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreej" id="parkthreej" class="parkthreesj"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreej" id="timethreej" style="width: 80px;" class="timethreesj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreej" id="pnothreej" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreej" id="movethreej" style="width: 30px; height: auto; margin: ;" class="movethreesj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreej" id="boardthreej" style="width: 84%;" class="boardthreesj"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreek" id="brandthreek" class="brandthreesk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreek" id="numberthreek" style="width: 98px;" class="numberthreesk"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbak" id="cntdbik"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreek" id="routethreek" class="routethreesk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreek" id="locationthreek" class="locationthreesk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreek" id="parkthreek" class="parkthreesk"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreek" id="timethreek" style="width: 80px;" class="timethreesk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreek" id="pnothreek" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreek" id="movethreek" style="width: 30px; height: auto; margin: ;" class="movethreesk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreek" id="boardthreek" style="width: 84%;" class="boardthreesk"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreel" id="brandthreel" class="brandthreesl"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreel" id="numberthreel" style="width: 98px;" class="numberthreesl"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbal" id="cntdbil"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreel" id="routethreel" class="routethreesl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreel" id="locationthreel" class="locationthreesl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreel" id="parkthreel" class="parkthreesl"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreel" id="timethreel" style="width: 80px;" class="timethreesl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreel" id="pnothreel" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreel" id="movethreel" style="width: 30px; height: auto; margin: ;" class="movethreesl"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreel" id="boardthreel" style="width: 84%;" class="boardthreesl"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreem" id="brandthreem" class="brandthreesm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreem" id="numberthreem" style="width: 98px;" class="numberthreesm"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbam" id="cntdbim"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreem" id="routethreem" class="routethreesm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreem" id="locationthreem" class="locationthreesm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreem" id="parkthreem" class="parkthreesm"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreem" id="timethreem" style="width: 80px;" class="timethreesm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreem" id="pnothreem" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreem" id="movethreem" style="width: 30px; height: auto; margin: ;" class="movethreesm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreem" id="boardthreem" style="width: 84%;" class="boardthreesm"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreen" id="brandthreen" class="brandthreesn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreen" id="numberthreen" style="width: 98px;" class="numberthreesn"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdban" id="cntdbin"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreen" id="routethreen" class="routethreesn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreen" id="locationthreen" class="locationthreesn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreen" id="parkthreen" class="parkthreesn"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreen" id="timethreen" style="width: 80px;" class="timethreesn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreen" id="pnothreen" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreen" id="movethreen" style="width: 30px; height: auto; margin: ;" class="movethreesn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreen" id="boardthreen" style="width: 84%;" class="boardthreesn"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeo" id="brandthreeo" class="brandthreeso"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeo" id="numberthreeo" style="width: 98px;" class="numberthreeso"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbao" id="cntdbio"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeo" id="routethreeo" class="routethreeso"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeo" id="locationthreeo" class="locationthreeso"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeo" id="parkthreeo" class="parkthreeso"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeo" id="timethreeo" style="width: 80px;" class="timethreeso"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeo" id="pnothreeo" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeso"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeo" id="movethreeo" style="width: 30px; height: auto; margin: ;" class="movethreeso"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeo" id="boardthreeo" style="width: 84%;" class="boardthreeso"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreep" id="brandthreep" class="brandthreesp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreep" id="numberthreep" style="width: 98px;" class="numberthreesp"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbap" id="cntdbip"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreep" id="routethreep" class="routethreesp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreep" id="locationthreep" class="locationthreesp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreep" id="parkthreep" class="parkthreesp"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreep" id="timethreep" style="width: 80px;" class="timethreesp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreep" id="pnothreep" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreep" id="movethreep" style="width: 30px; height: auto; margin: ;" class="movethreesp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreep" id="boardthreep" style="width: 84%;" class="boardthreesp"/> </span></span>







<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeq" id="brandthreeq" class="brandthreesq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeq" id="numberthreeq" style="width: 98px;" class="numberthreesq"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaq" id="cntdbiq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeq" id="routethreeq" class="routethreesq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeq" id="locationthreeq" class="locationthreesq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeq" id="parkthreeq" class="parkthreesq"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeq" id="timethreeq" style="width: 80px;" class="timethreesq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeq" id="pnothreeq" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeq" id="movethreeq" style="width: 30px; height: auto; margin: ;" class="movethreesq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeq" id="boardthreeq" style="width: 84%;" class="boardthreesq"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreer" id="brandthreer" class="brandthreesr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreer" id="numberthreer" style="width: 98px;" class="numberthreesr"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbar" id="cntdbir"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreer" id="routethreer" class="routethreesr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreer" id="locationthreer" class="locationthreesr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreer" id="parkthreer" class="parkthreesr"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreer" id="timethreer" style="width: 80px;" class="timethreesr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreer" id="pnothreer" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreer" id="movethreer" style="width: 30px; height: auto; margin: ;" class="movethreesr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreer" id="boardthreer" style="width: 84%;" class="boardthreesr"/> </span></span>





<!--Route 3 Already Moving Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="aroutei" id="rtdbii" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa">Bus Brand:<label for="cntdbai"></label> <input type="text" name="sbrandthrees" id="brandthrees" class="brandthreess"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthrees" id="numberthrees" style="width: 98px;" class="numberthreess"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbas" id="cntdbis"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethrees" id="routethrees" class="routethreess"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthrees" id="locationthrees" class="locationthreess"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Leaving Status:</label> <input type="text" name="sparkthrees" id="parkthrees" class="parkthreess"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Validity:</label> <input type="text" name="stimethrees" id="timethrees" style="width: 80px;" class="timethreess"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothrees" id="pnothrees" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreess"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethrees" id="movethrees" style="width: 30px; height: auto; margin: ;" class="movethreess"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthrees" id="boardthrees" style="width: 84%;" class="boardthreess"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreet" id="brandthreet" class="brandthreest"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreet" id="numberthreet" style="width: 98px;" class="numberthreest"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbat" id="cntdbit"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreet" id="routethreet" class="routethreest"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreet" id="locationthreet" class="locationthreest"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreet" id="parkthreet" class="parkthreest"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreet" id="timethreet" style="width: 80px;" class="timethreest"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreet" id="pnothreet" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreest"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreet" id="movethreet" style="width: 30px; height: auto; margin: ;" class="movethreest"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreet" id="boardthreet" style="width: 84%;" class="boardthreest"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeu" id="brandthreeu" class="brandthreesu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeu" id="numberthreeu" style="width: 98px;" class="numberthreesu"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbau" id="cntdbiu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeu" id="routethreeu" class="routethreesu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeu" id="locationthreeu" class="locationthreesu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeu" id="parkthreeu" class="parkthreesu"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeu" id="timethreeu" style="width: 80px;" class="timethreesu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeu" id="pnothreeu" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeu" id="movethreeu" style="width: 30px; height: auto; margin: ;" class="movethreesu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeu" id="boardthreeu" style="width: 84%;" class="boardthreesu"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreev" id="brandthreev" class="brandthreesv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreev" id="numberthreev" style="width: 98px;" class="numberthreesv"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbav" id="cntdbiv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreev" id="routethreev" class="routethreesv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreev" id="locationthreev" class="locationthreesv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreev" id="parkthreev" class="parkthreesv"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreev" id="timethreev" style="width: 80px;" class="timethreesv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreev" id="pnothreev" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreev" id="movethreev" style="width: 30px; height: auto; margin: ;" class="movethreesv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreev" id="boardthreev" style="width: 84%;" class="boardthreesv"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreew" id="brandthreew" class="brandthreesw"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreew" id="numberthreew" style="width: 98px;" class="numberthreesw"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaw" id="cntdbiw"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreew" id="routethreew" class="routethreesw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreew" id="locationthreew" class="locationthreesw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreew" id="parkthreew" class="parkthreesw"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreew" id="timethreew" style="width: 80px;" class="timethreesw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreew" id="pnothreew" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreew" id="movethreew" style="width: 30px; height: auto; margin: ;" class="movethreesw"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreew" id="boardthreew" style="width: 84%;" class="boardthreesw"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreex" id="brandthreex" class="brandthreesx"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreex" id="numberthreex" style="width: 98px;" class="numberthreesx"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbax" id="cntdbix"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreex" id="routethreex" class="routethreesx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreex" id="locationthreex" class="locationthreesx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreex" id="parkthreex" class="parkthreesx"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreex" id="timethreex" style="width: 80px;" class="timethreesx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreex" id="pnothreex" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreex" id="movethreex" style="width: 30px; height: auto; margin: ;" class="movethreesx"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreex" id="boardthreex" style="width: 84%;" class="boardthreesx"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreey" id="brandthreey" class="brandthreesy"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreey" id="numberthreey" style="width: 98px;" class="numberthreesy"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbay" id="cntdbiy"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreey" id="routethreey" class="routethreesy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreey" id="locationthreey" class="locationthreesy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreey" id="parkthreey" class="parkthreesy"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreey" id="timethreey" style="width: 80px;" class="timethreesy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreey" id="pnothreey" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreey" id="movethreey" style="width: 30px; height: auto; margin: ;" class="movethreesy"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreey" id="boardthreey" style="width: 84%;" class="boardthreesy"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreez" id="brandthreez" class="brandthreesz"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreez" id="numberthreez" style="width: 98px;" class="numberthreesz"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaz" id="cntdbiz"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreez" id="routethreez" class="routethreesz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreez" id="locationthreez" class="locationthreesz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreez" id="parkthreez" class="parkthreesz"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreez" id="timethreez" style="width: 80px;" class="timethreesz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreez" id="pnothreez" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreez" id="movethreez" style="width: 30px; height: auto; margin: ;" class="movethreesz"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreez" id="boardthreez" style="width: 84%;" class="boardthreesz"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeaa" id="brandthreeaa" class="brandthreesaa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeaa" id="numberthreeaa" style="width: 98px;" class="numberthreesaa"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaaa" id="cntdbiaa"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeaa" id="routethreeaa" class="routethreesaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeaa" id="locationthreeaa" class="locationthreesaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeaa" id="parkthreeaa" class="parkthreesaa"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeaa" id="timethreeaa" style="width: 80px;" class="timethreesaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeaa" id="pnothreeaa" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeaa" id="movethreeaa" style="width: 30px; height: auto; margin: ;" class="movethreesaa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeaa" id="boardthreeaa" style="width: 84%;" class="boardthreesaa"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreebb" id="brandthreebb" class="brandthreesbb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreebb" id="numberthreebb" style="width: 98px;" class="numberthreesbb"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbabb" id="cntdbibb"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreebb" id="routethreebb" class="routethreesbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreebb" id="locationthreebb" class="locationthreesbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreebb" id="parkthreebb" class="parkthreesbb"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreebb" id="timethreebb" style="width: 80px;" class="timethreesbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreebb" id="pnothreebb" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreebb" id="movethreebb" style="width: 30px; height: auto; margin: ;" class="movethreesbb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreebb" id="boardthreebb" style="width: 84%;" class="boardthreesbb"/> </span></span>





<!--Route 4 Already Moving Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteo" id="rtdbio" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreecc" id="brandthreecc" class="brandthreescc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreecc" id="numberthreecc" style="width: 98px;" class="numberthreescc"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbacc" id="cntdbicc"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreecc" id="routethreecc" class="routethreescc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreecc" id="locationthreecc" class="locationthreescc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Leaving Status:</label> <input type="text" name="sparkthreecc" id="parkthreecc" class="parkthreescc"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Validity:</label> <input type="text" name="stimethreecc" id="timethreecc" style="width: 80px;" class="timethreescc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreecc" id="pnothreecc" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreescc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreecc" id="movethreecc" style="width: 30px; height: auto; margin: ;" class="movethreescc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreecc" id="boardthreecc" style="width: 84%;" class="boardthreescc"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreedd" id="brandthreedd" class="brandthreesdd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreedd" id="numberthreedd" style="width: 98px;" class="numberthreesdd"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbadd" id="cntdbidd"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreedd" id="routethreedd" class="routethreesdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreedd" id="locationthreedd" class="locationthreesdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreedd" id="parkthreedd" class="parkthreesdd"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreedd" id="timethreedd" style="width: 80px;" class="timethreesdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreedd" id="pnothreedd" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreedd" id="movethreedd" style="width: 30px; height: auto; margin: ;" class="movethreesdd"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreedd" id="boardthreedd" style="width: 84%;" class="boardthreesdd"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeee" id="brandthreeee" class="brandthreesee"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeee" id="numberthreeee" style="width: 98px;" class="numberthreesee"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaee" id="cntdbiee"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeee" id="routethreeee" class="routethreesee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeee" id="locationthreeee" class="locationthreesee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeee" id="parkthreeee" class="parkthreesee"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeee" id="timethreeee" style="width: 80px;" class="timethreesee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeee" id="pnothreeee" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeee" id="movethreeee" style="width: 30px; height: auto; margin: ;" class="movethreesee"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeee" id="boardthreeee" style="width: 84%;" class="boardthreesee"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeff" id="brandthreeff" class="brandthreesff"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeff" id="numberthreeff" style="width: 98px;" class="numberthreesff"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaff" id="cntdbiff"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeff" id="routethreeff" class="routethreesff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeff" id="locationthreeff" class="locationthreesff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeff" id="parkthreeff" class="parkthreesff"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeff" id="timethreeff" style="width: 80px;" class="timethreesff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeff" id="pnothreeff" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeff" id="movethreeff" style="width: 30px; height: auto; margin: ;" class="movethreesff"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeff" id="boardthreeff" style="width: 84%;" class="boardthreesff"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreegg" id="brandthreegg" class="brandthreesgg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreegg" id="numberthreegg" style="width: 98px;" class="numberthreesgg"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbagg" id="cntdbigg"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreegg" id="routethreegg" class="routethreesgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreegg" id="locationthreegg" class="locationthreesgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreegg" id="parkthreegg" class="parkthreesgg"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreegg" id="timethreegg" style="width: 80px;" class="timethreesgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreegg" id="pnothreegg" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreegg" id="movethreegg" style="width: 30px; height: auto; margin: ;" class="movethreesgg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreegg" id="boardthreegg" style="width: 84%;" class="boardthreesgg"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreehh" id="brandthreehh" class="brandthreeshh"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreehh" id="numberthreehh" style="width: 98px;" class="numberthreeshh"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbahh" id="cntdbihh"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreehh" id="routethreehh" class="routethreeshh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreehh" id="locationthreehh" class="locationthreeshh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreehh" id="parkthreehh" class="parkthreeshh"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreehh" id="timethreehh" style="width: 80px;" class="timethreeshh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreehh" id="pnothreehh" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeshh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreehh" id="movethreehh" style="width: 30px; height: auto; margin: ;" class="movethreeshh"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreehh" id="boardthreehh" style="width: 84%;" class="boardthreeshh"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeii" id="brandthreeii" class="brandthreesii"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeii" id="numberthreeii" style="width: 98px;" class="numberthreesii"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaii" id="cntdbiii"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeii" id="routethreeii" class="routethreesii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeii" id="locationthreeii" class="locationthreesii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeii" id="parkthreeii" class="parkthreesii"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeii" id="timethreeii" style="width: 80px;" class="timethreesii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeii" id="pnothreeii" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeii" id="movethreeii" style="width: 30px; height: auto; margin: ;" class="movethreesii"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeii" id="boardthreeii" style="width: 84%;" class="boardthreesii"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreejj" id="brandthreejj" class="brandthreesjj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreejj" id="numberthreejj" style="width: 98px;" class="numberthreesjj"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbajj" id="cntdbijj"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreejj" id="routethreejj" class="routethreesjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreejj" id="locationthreejj" class="locationthreesjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreejj" id="parkthreejj" class="parkthreesjj"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreejj" id="timethreejj" style="width: 80px;" class="timethreesjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreejj" id="pnothreejj" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreejj" id="movethreejj" style="width: 30px; height: auto; margin: ;" class="movethreesjj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreejj" id="boardthreejj" style="width: 84%;" class="boardthreesjj"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreekk" id="brandthreekk" class="brandthreeskk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreekk" id="numberthreekk" style="width: 98px;" class="numberthreeskk"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbakk" id="cntdbikk"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreekk" id="routethreekk" class="routethreeskk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreekk" id="locationthreekk" class="locationthreeskk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreekk" id="parkthreekk" class="parkthreeskk"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreekk" id="timethreekk" style="width: 80px;" class="timethreeskk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreekk" id="pnothreekk" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeskk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreekk" id="movethreekk" style="width: 30px; height: auto; margin: ;" class="movethreeskk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreekk" id="boardthreekk" style="width: 84%;" class="boardthreeskk"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreell" id="brandthreell" class="brandthreesll"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreell" id="numberthreell" style="width: 98px;" class="numberthreesll"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdball" id="cntdbill"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreell" id="routethreell" class="routethreesll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreell" id="locationthreell" class="locationthreesll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreell" id="parkthreell" class="parkthreesll"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreell" id="timethreell" style="width: 80px;" class="timethreesll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreell" id="pnothreell" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreell" id="movethreell" style="width: 30px; height: auto; margin: ;" class="movethreesll"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreell" id="boardthreell" style="width: 84%;" class="boardthreesll"/> </span></span>





<!--Route 5 Already Moving Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteu" id="rtdbiu" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreemm" id="brandthreemm" class="brandthreesmm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreemm" id="numberthreemm" style="width: 98px;" class="numberthreesmm"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbamm" id="cntdbimm"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreemm" id="routethreemm" class="routethreesmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreemm" id="locationthreemm" class="locationthreesmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Leaving Status:</label> <input type="text" name="sparkthreemm" id="parkthreemm" class="parkthreesmm"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Validity:</label> <input type="text" name="stimethreemm" id="timethreemm" style="width: 80px;" class="timethreesmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreemm" id="pnothreemm" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreemm" id="movethreemm" style="width: 30px; height: auto; margin: ;" class="movethreesmm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreemm" id="boardthreemm" style="width: 84%;" class="boardthreesmm"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreenn" id="brandthreenn" class="brandthreesnn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreenn" id="numberthreenn" style="width: 98px;" class="numberthreesnn"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbann" id="cntdbinn"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreenn" id="routethreenn" class="routethreesnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreenn" id="locationthreenn" class="locationthreesnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreenn" id="parkthreenn" class="parkthreesnn"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreenn" id="timethreenn" style="width: 80px;" class="timethreesnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreenn" id="pnothreenn" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreenn" id="movethreenn" style="width: 30px; height: auto; margin: ;" class="movethreesnn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreenn" id="boardthreenn" style="width: 84%;" class="boardthreesnn"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeoo" id="brandthreeoo" class="brandthreesoo"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeoo" id="numberthreeoo" style="width: 98px;" class="numberthreesoo"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaoo" id="cntdbioo"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeoo" id="routethreeoo" class="routethreesoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeoo" id="locationthreeoo" class="locationthreesoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeoo" id="parkthreeoo" class="parkthreesoo"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeoo" id="timethreeoo" style="width: 80px;" class="timethreesoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeoo" id="pnothreeoo" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeoo" id="movethreeoo" style="width: 30px; height: auto; margin: ;" class="movethreesoo"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeoo" id="boardthreeoo" style="width: 84%;" class="boardthreesoo"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreepp" id="brandthreepp" class="brandthreespp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreepp" id="numberthreepp" style="width: 98px;" class="numberthreespp"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbapp" id="cntdbipp"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreepp" id="routethreepp" class="routethreespp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreepp" id="locationthreepp" class="locationthreespp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreepp" id="parkthreepp" class="parkthreespp"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreepp" id="timethreepp" style="width: 80px;" class="timethreespp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreepp" id="pnothreepp" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreespp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreepp" id="movethreepp" style="width: 30px; height: auto; margin: ;" class="movethreespp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreepp" id="boardthreepp" style="width: 84%;" class="boardthreespp"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeqq" id="brandthreeqq" class="brandthreesqq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeqq" id="numberthreeqq" style="width: 98px;" class="numberthreesqq"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaqq" id="cntdbiqq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeqq" id="routethreeqq" class="routethreesqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeqq" id="locationthreeqq" class="locationthreesqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeqq" id="parkthreeqq" class="parkthreesqq"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeqq" id="timethreeqq" style="width: 80px;" class="timethreesqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeqq" id="pnothreeqq" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeqq" id="movethreeqq" style="width: 30px; height: auto; margin: ;" class="movethreesqq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeqq" id="boardthreeqq" style="width: 84%;" class="boardthreesqq"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreerr" id="brandthreerr" class="brandthreesrr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreerr" id="numberthreerr" style="width: 98px;" class="numberthreesrr"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbarr" id="cntdbirr"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreerr" id="routethreerr" class="routethreesrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreerr" id="locationthreerr" class="locationthreesrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreerr" id="parkthreerr" class="parkthreesrr"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreerr" id="timethreerr" style="width: 80px;" class="timethreesrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreerr" id="pnothreerr" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreerr" id="movethreerr" style="width: 30px; height: auto; margin: ;" class="movethreesrr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreerr" id="boardthreerr" style="width: 84%;" class="boardthreesrr"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreess" id="brandthreess" class="brandthreesss"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreess" id="numberthreess" style="width: 98px;" class="numberthreesss"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbass" id="cntdbiss"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreess" id="routethreess" class="routethreesss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreess" id="locationthreess" class="locationthreesss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreess" id="parkthreess" class="parkthreesss"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreess" id="timethreess" style="width: 80px;" class="timethreesss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreess" id="pnothreess" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreess" id="movethreess" style="width: 30px; height: auto; margin: ;" class="movethreesss"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreess" id="boardthreess" style="width: 84%;" class="boardthreesss"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreett" id="brandthreett" class="brandthreestt"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreett" id="numberthreett" style="width: 98px;" class="numberthreestt"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbatt" id="cntdbitt"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreett" id="routethreett" class="routethreestt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreett" id="locationthreett" class="locationthreestt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreett" id="parkthreett" class="parkthreestt"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreett" id="timethreett" style="width: 80px;" class="timethreestt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreett" id="pnothreett" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreestt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreett" id="movethreett" style="width: 30px; height: auto; margin: ;" class="movethreestt"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreett" id="boardthreett" style="width: 84%;" class="boardthreestt"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeuu" id="brandthreeuu" class="brandthreesuu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeuu" id="numberthreeuu" style="width: 98px;" class="numberthreesuu"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbauu" id="cntdbiuu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeuu" id="routethreeuu" class="routethreesuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeuu" id="locationthreeuu" class="locationthreesuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeuu" id="parkthreeuu" class="parkthreesuu"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeuu" id="timethreeuu" style="width: 80px;" class="timethreesuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeuu" id="pnothreeuu" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesuu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeuu" id="movethreeuu" style="width: 30px; height: auto; margin: ;" class="movethreesuu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeuu" id="boardthreeuu" style="width: 84%;" class="boardthreesuu"/> </span></span>





 <span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreevv" id="brandthreevv" class="brandthreesvv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreevv" id="numberthreevv" style="width: 98px;" class="numberthreesvv"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbavv" id="cntdbivv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreevv" id="routethreevv" class="routethreesvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreevv" id="locationthreevv" class="locationthreesvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreevv" id="parkthreevv" class="parkthreesvv"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreevv" id="timethreevv" style="width: 80px;" class="timethreesvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreevv" id="pnothreevv" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreevv" id="movethreevv" style="width: 30px; height: auto; margin: ;" class="movethreesvv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreevv" id="boardthreevv" style="width: 84%;" class="boardthreesvv"/> </span></span>
 </p>
<!--End Already Moving-->





<!--Destiny Buses-->
<p class="schedules" style="height: 2800px;">
            <span class="headnga"><u>Destiny Buses:</u></span>


            <!--Route 1 Destiny Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteada" id="rtdbiada" style="width: 50%;"/> </span></span>
            <span class="firstaa" id="cntdbfsa" style="width: 14%; text-align: left;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandoneadada" id="brandoneadada" class="brandonesadada"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberoneada" id="numberoneada" style="width: 98px;" class="numberonesada"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbaaada" id="cntdbiaada"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="srouteoneada" id="routeoneada" class="routeonesada"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationoneada" id="locationoneada" class="locationonesada"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkoneada" id="parkoneada" class="parkonesada"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="one">Time:</label> <input type="text" name="stimeoneada" id="timeoneada" class="timeonesada" style="width: 80px;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%; text-align: center;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span>
					</label> <input type="text" name="spnooneada" id="pnooneada"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnoonesada"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smoveoneada" id="moveoneada" style="width: 30px; height: auto; margin: ;" class="moveonesada"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%; text-align: left;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px; background-color: ; z-index: 1;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardoneada" id="boardoneada" style="width: 84%;" class="boardonesada"/> </span></span>





            <span class="firstaa" id="cntdbfsa" style="width: 14%; text-align: left;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandtwobdb" id="brandtwobdb" class="brandtwosbdb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumbertwobdb" id="numbertwobdb" style="width: 98px;" class="numbertwosbdb"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaabdb" id="cntdbiabdb"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutetwobdb" id="routetwobdb" class="routetwosbdb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationtwobdb" id="locationtwobdb" class="locationtwosbdb"/> </span></span>

            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparktwobdb" id="parktwobdb" class="parktwosbdb"/> </span></span>

             <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimetwobdb" id="timetwobdb" style="width: 80px; class="timetwosbdb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnotwobdb" id="pnotwobdb"  style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnotwosbdb" /> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovetwobdb" id="movetwobdb" style="width: 30px; height: auto; margin: ;" class="movetwosbdb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardtwobdb" id="boardtwobdb" style="width: 84%;" class="boardtwosbdb"/> </span></span>





            <span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeadc" id="brandthreeadc" class="brandthreesadc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeadc" id="numberthreeadc" style="width: 98px;" class="numberthreesadc"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaadc" id="cntdbiadc"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeadc" id="routethreeadc" class="routethreesadc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeadc" id="locationthreeadc" class="locationthreesadc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeadc" id="parkthreeadc" class="parkthreesadc"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeadc" id="timethreeadc" style="width: 80px;" class="timethreesadc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeadc" id="pnothreeadc" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesadc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeadc" id="movethreeadc" style="width: 30px; height: auto; margin: ;" class="movethreesadc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeadc" id="boardthreeadc" style="width: 84%;" class="boardthreesadc"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreebdd" id="brandthreebdd" class="brandthreesbdd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreebdd" id="numberthreebdd" style="width: 98px;" class="numberthreesbdd"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbabdd" id="cntdbibdd"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreebdd" id="routethreebdd" class="routethreesbdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreebdd" id="locationthreebdd" class="locationthreesbdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreebdd" id="parkthreebdd" class="parkthreesbdd"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreebdd" id="timethreebdd" style="width: 80px;" class="timethreesbdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreebdd" id="pnothreebdd" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesbdd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreebdd" id="movethreebdd" style="width: 30px; height: auto; margin: ;" class="movethreesbdd"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreebdd" id="boardthreebdd" style="width: 84%;" class="boardthreesbdd"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreecde" id="brandthreecde" class="brandthreescde"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreecde" id="numberthreecde" style="width: 98px;" class="numberthreescde"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbacde" id="cntdbicde"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreecde" id="routethreecde" class="routethreescde"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreecde" id="locationthreecde" class="locationthreescde"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreecde" id="parkthreecde" class="parkthreescde"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreecde" id="timethreecde" style="width: 80px;" class="timethreescde"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreecde" id="pnothreecde" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreescde"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreecde" id="movethreecde" style="width: 30px; height: auto; margin: ;" class="movethreescde"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreecde" id="boardthreecde" style="width: 84%;" class="boardthreescde"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeddf" id="brandthreeddf" class="brandthreesddf"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeddf" id="numberthreeddf" style="width: 98px;" class="numberthreesddf"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaddf" id="cntdbiddf"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeddf" id="routethreeddf" class="routethreesddf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeddf" id="locationthreeddf" class="locationthreesddf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeddf" id="parkthreeddf" class="parkthreesddf"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeddf" id="timethreeddf" style="width: 80px;" class="timethreesddf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeddf" id="pnothreeddf" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesddf"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeddf" id="movethreeddf" style="width: 30px; height: auto; margin: ;" class="movethreesddf"/> </span></span>
           <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeddf" id="boardthreeddf" style="width: 84%;" class="boardthreesddf"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeedg" id="brandthreeedg" class="brandthreesedg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeedg" id="numberthreeedg" style="width: 98px;" class="numberthreesedg"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaedg" id="cntdbiedg"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeedg" id="routethreeedg" class="routethreesedg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeedg" id="locationthreeedg" class="locationthreesedg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeedg" id="parkthreeedg" class="parkthreesedg"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeedg" id="timethreeedg" style="width: 80px;" class="timethreesedg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeedg" id="pnothreeedg" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesedg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeedg" id="movethreeedg" style="width: 30px; height: auto; margin: ;" class="movethreesedg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeedg" id="boardthreeedg" style="width: 84%;" class="boardthreesedg"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreefdh" id="brandthreefdh" class="brandthreesfdh"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreefdh" id="numberthreefdh" style="width: 98px;" class="numberthreesfdh"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbafdh" id="cntdbifdh"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreefdh" id="routethreefdh" class="routethreesfdh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreefdh" id="locationthreefdh" class="locationthreesfdh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreefdh" id="parkthreefdh" class="parkthreesfdh"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreefdh" id="timethreefdh" style="width: 80px;" class="timethreesfdh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreefdh" id="pnothreefdh" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesfdh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreefdh" id="movethreefdh" style="width: 30px; height: auto; margin: ;" class="movethreesfdh"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreefdh" id="boardthreefdh" style="width: 84%;" class="boardthreesfdh"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreegdi" id="brandthreegdi" class="brandthreesgdi"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreegdi" id="numberthreegdi" style="width: 98px;" class="numberthreesgdi"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbagdi" id="cntdbigdi"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreegdi" id="routethreegdi" class="routethreesgdi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreegdi" id="locationthreegdi" class="locationthreesgdi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreegdi" id="parkthreegdi" class="parkthreesgdi"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreegdi" id="timethreegdi" style="width: 80px;" class="timethreesgdi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreegdi" id="pnothreegdi" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesgdi"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreegdi" id="movethreegdi" style="width: 30px; height: auto; margin: ;" class="movethreesgdi"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreegdi" id="boardthreegdi" style="width: 84%;" class="boardthreesgdi"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreehdj" id="brandthreehdj" class="brandthreeshdj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreehdj" id="numberthreehdj" style="width: 98px;" class="numberthreeshdj"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbahdj" id="cntdbihdj"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreehdj" id="routethreehdj" class="routethreeshdj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreehdj" id="locationthreehdj" class="locationthreeshdj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreehdj" id="parkthreehdj" class="parkthreeshdj"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreehdj" id="timethreehdj" style="width: 80px;" class="timethreeshdj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreehdj" id="pnothreehdj" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeshdj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreehdj" id="movethreehdj" style="width: 30px; height: auto; margin: ;" class="movethreeshdj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreehdj" id="boardthreehdj" style="width: 84%;" class="boardthreeshdj"/> </span></span>




<!--Route 2 Destiny Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteede" id="rtdbiede" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreeidk" id="brandthreeidk" class="brandthreesidk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreeidk" id="numberthreeidk" style="width: 98px;" class="numberthreesidk"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor Name:</label> <input type="text" name="cntdbaidk" id="cntdbiidk"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreeidk" id="routethreeidk" class="routethreesidk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreeidk" id="locationthreeidk" class="locationthreesidk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkthreeidk" id="parkthreeidk" class="parkthreesidk"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Time:</label> <input type="text" name="stimethreeidk" id="timethreeidk" style="width: 80px;" class="timethreesidk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreeidk" id="pnothreeidk" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesidk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreeidk" id="movethreeidk" style="width: 30px; height: auto; margin: ;" class="movethreesidk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreeidk" id="boardthreeidk" style="width: 84%;" class="boardthreesidk"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreejdl" id="brandthreejdl" class="brandthreesjdl"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreejdl" id="numberthreejdl" style="width: 98px;" class="numberthreesjdl"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbajdl" id="cntdbijdl"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreejdl" id="routethreejdl" class="routethreesjdl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreejdl" id="locationthreejdl" class="locationthreesjdl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreejdl" id="parkthreejdl" class="parkthreesjdl"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreejdl" id="timethreejdl" style="width: 80px;" class="timethreesjdl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreejdl" id="pnothreejdl" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesjdl"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreejdl" id="movethreejdl" style="width: 30px; height: auto; margin: ;" class="movethreesjdl"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreejdl" id="boardthreejdl" style="width: 84%;" class="boardthreesjdl"/> </span></span>




<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreekdm" id="brandthreekdm" class="brandthreeskdm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreekdm" id="numberthreekdm" style="width: 98px;" class="numberthreeskdm"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbakdm" id="cntdbikdm"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreekdm" id="routethreekdm" class="routethreeskdm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreekdm" id="locationthreekdm" class="locationthreeskdm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreekdm" id="parkthreekdm" class="parkthreeskdm"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreekdm" id="timethreekdm" style="width: 80px;" class="timethreeskdm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreekdm" id="pnothreekdm" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeskdm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreekdm" id="movethreekdm" style="width: 30px; height: auto; margin: ;" class="movethreeskdm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreekdm" id="boardthreekdm" style="width: 84%;" class="boardthreeskdm"/> </span></span>



<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeldn" id="brandthreeldn" class="brandthreesldn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeldn" id="numberthreeldn" style="width: 98px;" class="numberthreesldn"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaldn" id="cntdbildn"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeldn" id="routethreeldn" class="routethreesldn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeldn" id="locationthreeldn" class="locationthreesldn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeldn" id="parkthreeldn" class="parkthreesldn"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeldn" id="timethreeldn" style="width: 80px;" class="timethreesldn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeldn" id="pnothreeldn" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesldn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeldn" id="movethreeldn" style="width: 30px; height: auto; margin: ;" class="movethreesldn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeldn" id="boardthreeldn" style="width: 84%;" class="boardthreesldn"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreemdo" id="brandthreemdo" class="brandthreesmdo"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreemdo" id="numberthreemdo" style="width: 98px;" class="numberthreesmdo"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbamdo" id="cntdbimdo"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreemdo" id="routethreemdo" class="routethreesmdo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreemdo" id="locationthreemdo" class="locationthreesmdo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreemdo" id="parkthreemdo" class="parkthreesmdo"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreemdo" id="timethreemdo" style="width: 80px;" class="timethreesmdo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreemdo" id="pnothreemdo" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesmdo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreemdo" id="movethreemdo" style="width: 30px; height: auto; margin: ;" class="movethreesmdo"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreemdo" id="boardthreemdo" style="width: 84%;" class="boardthreesmdo"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreendp" id="brandthreendp" class="brandthreesndp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreendp" id="numberthreendp" style="width: 98px;" class="numberthreesndp"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbandp" id="cntdbindp"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreendp" id="routethreendp" class="routethreesndp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreendp" id="locationthreendp" class="locationthreesndp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreendp" id="parkthreendp" class="parkthreesndp"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreendp" id="timethreendp" style="width: 80px;" class="timethreesndp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreendp" id="pnothreendp" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesndp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreendp" id="movethreendp" style="width: 30px; height: auto; margin: ;" class="movethreesndp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreendp" id="boardthreendp" style="width: 84%;" class="boardthreesndp"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeodq" id="brandthreeodq" class="brandthreesodq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeodq" id="numberthreeodq" style="width: 98px;" class="numberthreesodq"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaodq" id="cntdbiodq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeodq" id="routethreeodq" class="routethreesodq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeodq" id="locationthreeodq" class="locationthreesodq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeodq" id="parkthreeodq" class="parkthreesodq"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeodq" id="timethreeodq" style="width: 80px;" class="timethreesodq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeodq" id="pnothreeodq" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesodq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeodq" id="movethreeodq" style="width: 30px; height: auto; margin: ;" class="movethreesodq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeodq" id="boardthreeodq" style="width: 84%;" class="boardthreesodq"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreepdr" id="brandthreepdr" class="brandthreespdr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreepdr" id="numberthreepdr" style="width: 98px;" class="numberthreespdr"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbapdr" id="cntdbipdr"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreepdr" id="routethreepdr" class="routethreespdr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreepdr" id="locationthreepdr" class="locationthreespdr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreepdr" id="parkthreepdr" class="parkthreespdr"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreepdr" id="timethreepdr" style="width: 80px;" class="timethreespdr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreepdr" id="pnothreepdr" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreespdr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreepdr" id="movethreepdr" style="width: 30px; height: auto; margin: ;" class="movethreespdr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreepdr" id="boardthreepdr" style="width: 84%;" class="boardthreespdr"/> </span></span>







<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeqds" id="brandthreeqds" class="brandthreesqds"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeqds" id="numberthreeqds" style="width: 98px;" class="numberthreesqds"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaqds" id="cntdbiqds"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeqds" id="routethreeqds" class="routethreesqds"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeqds" id="locationthreeqds" class="locationthreesqds"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeqds" id="parkthreeqds" class="parkthreesqds"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeqds" id="timethreeqds" style="width: 80px;" class="timethreesqds"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeqds" id="pnothreeqds" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesqds"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeqds" id="movethreeqds" style="width: 30px; height: auto; margin: ;" class="movethreesqds"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeqds" id="boardthreeqds" style="width: 84%;" class="boardthreesqds"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreerdt" id="brandthreerdt" class="brandthreesrdt"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreerdt" id="numberthreerdt" style="width: 98px;" class="numberthreesrdt"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbardt" id="cntdbirdt"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreerdt" id="routethreerdt" class="routethreesrdt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreerdt" id="locationthreerdt" class="locationthreesrdt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreerdt" id="parkthreerdt" class="parkthreesrdt"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreerdt" id="timethreerdt" style="width: 80px;" class="timethreesrdt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreerdt" id="pnothreerdt" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesrdt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreerdt" id="movethreerdt" style="width: 30px; height: auto; margin: ;" class="movethreesrdt"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreerdt" id="boardthreerdt" style="width: 84%;" class="boardthreesrdt"/> </span></span>





<!--Route 3 Destiny Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteidi" id="rtdbiii" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa">Bus Brand:<label for="cntdbai"></label> <input type="text" name="sbrandthreesdu" id="brandthreesdu" class="brandthreessdu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreesdu" id="numberthreesdu" style="width: 98px;" class="numberthreessdu"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbasdu" id="cntdbisdu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreesdu" id="routethreesdu" class="routethreessdu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreesdu" id="locationthreesdu" class="locationthreessdu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkthreesdu" id="parkthreesdu" class="parkthreessdu"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Time:</label> <input type="text" name="stimethreesdu" id="timethreesdu" style="width: 80px;" class="timethreessdu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreesdu" id="pnothreesdu" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreessdu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreesdu" id="movethreesdu" style="width: 30px; height: auto; margin: ;" class="movethreessdu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreesdu" id="boardthreesdu" style="width: 84%;" class="boardthreessdu"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreetdxx" id="brandthreetdxx" class="brandthreestdxx"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreetdxx" id="numberthreetdxx" style="width: 98px;" class="numberthreestdxx"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbatdxx" id="cntdbitdxx"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreetdxx" id="routethreetdxx" class="routethreestdxx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreetdxx" id="locationthreetdxx" class="locationthreestdxx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreetdxx" id="parkthreetdxx" class="parkthreestdxx"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreetdxx" id="timethreetdxx" style="width: 80px;" class="timethreestdxx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreetdxx" id="pnothreetdxx" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreestdxx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreetdxx" id="movethreetdxx" style="width: 30px; height: auto; margin: ;" class="movethreestdxx"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreetdxx" id="boardthreetdxx" style="width: 84%;" class="boardthreestdxx"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeudv" id="brandthreeudv" class="brandthreesudv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeudv" id="numberthreeudv" style="width: 98px;" class="numberthreesudv"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaudv" id="cntdbiudv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeudv" id="routethreeudv" class="routethreesudv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeudv" id="locationthreeudv" class="locationthreesudv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeudv" id="parkthreeudv" class="parkthreesudv"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeudv" id="timethreeudv" style="width: 80px;" class="timethreesudv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeudv" id="pnothreeudv" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesudv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeudv" id="movethreeudv" style="width: 30px; height: auto; margin: ;" class="movethreesudv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeudv" id="boardthreeudv" style="width: 84%;" class="boardthreesudv"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreevdw" id="brandthreevdw" class="brandthreesvdw"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreevdw" id="numberthreevdw" style="width: 98px;" class="numberthreesvdw"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbavdw" id="cntdbivdw"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreevdw" id="routethreevdw" class="routethreesvdw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreevdw" id="locationthreevdw" class="locationthreesvdw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreevdw" id="parkthreevdw" class="parkthreesvdw"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreevdw" id="timethreevdw" style="width: 80px;" class="timethreesvdw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreevdw" id="pnothreevdw" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesvdw"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreevdw" id="movethreevdw" style="width: 30px; height: auto; margin: ;" class="movethreesvdw"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreevdw" id="boardthreevdw" style="width: 84%;" class="boardthreesvdw"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreewdx" id="brandthreewdx" class="brandthreeswdx"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreewdx" id="numberthreewdx" style="width: 98px;" class="numberthreeswdx"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbawdx" id="cntdbiwdx"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreewdx" id="routethreewdx" class="routethreeswdx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreewdx" id="locationthreewdx" class="locationthreeswdx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreewdx" id="parkthreewdx" class="parkthreeswdx"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreewdx" id="timethreewdx" style="width: 80px;" class="timethreeswdx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreewdx" id="pnothreewdx" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeswdx"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreewdx" id="movethreewdx" style="width: 30px; height: auto; margin: ;" class="movethreeswdx"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreewdx" id="boardthreewdx" style="width: 84%;" class="boardthreeswdx"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreexdy" id="brandthreexdy" class="brandthreesxdy"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreexdy" id="numberthreexdy" style="width: 98px;" class="numberthreesxdy"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaxdy" id="cntdbixdy"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreexdy" id="routethreexdy" class="routethreesxdy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreexdy" id="locationthreexdy" class="locationthreesxdy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreexdy" id="parkthreexdy" class="parkthreesxdy"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreexdy" id="timethreexdy" style="width: 80px;" class="timethreesxdy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreexdy" id="pnothreexdy" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesxdy"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreexdy" id="movethreexdy" style="width: 30px; height: auto; margin: ;" class="movethreesxdy"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreexdy" id="boardthreexdy" style="width: 84%;" class="boardthreesxdy"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeydz" id="brandthreeydz" class="brandthreesydz"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeydz" id="numberthreeydz" style="width: 98px;" class="numberthreesydz"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaydz" id="cntdbiydz"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeydz" id="routethreeydz" class="routethreesydz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeydz" id="locationthreeydz" class="locationthreesydz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeydz" id="parkthreeydz" class="parkthreesydz"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeydz" id="timethreeydz" style="width: 80px;" class="timethreesydz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeydz" id="pnothreeydz" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesydz"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeydz" id="movethreeydz" style="width: 30px; height: auto; margin: ;" class="movethreesydz"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeydz" id="boardthreeydz" style="width: 84%;" class="boardthreesydz"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreezdaa" id="brandthreezdaa" class="brandthreeszdaa"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreezdaa" id="numberthreezdaa" style="width: 98px;" class="numberthreeszdaa"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbazdaa" id="cntdbizdaa"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreezdaa" id="routethreezdaa" class="routethreeszdaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreezdaa" id="locationthreezdaa" class="locationthreeszdaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreezdaa" id="parkthreezdaa" class="parkthreeszdaa"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreezdaa" id="timethreezdaa" style="width: 80px;" class="timethreeszdaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreezdaa" id="pnothreezdaa" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeszdaa"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreezdaa" id="movethreezdaa" style="width: 30px; height: auto; margin: ;" class="movethreeszdaa"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreezdaa" id="boardthreezdaa" style="width: 84%;" class="boardthreeszdaa"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeaadbb" id="brandthreeaadbb" class="brandthreesaadbb"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeaadbb" id="numberthreeaadbb" style="width: 98px;" class="numberthreesaadbb"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaaadbb" id="cntdbiaadbb"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeaadbb" id="routethreeaadbb" class="routethreesaadbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeaadbb" id="locationthreeaadbb" class="locationthreesaadbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeaadbb" id="parkthreeaadbb" class="parkthreesaadbb"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeaadbb" id="timethreeaadbb" style="width: 80px;" class="timethreesaadbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeaadbb" id="pnothreeaadbb" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesaadbb"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeaadbb" id="movethreeaadbb" style="width: 30px; height: auto; margin: ;" class="movethreesaadbb"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeaadbb" id="boardthreeaadbb" style="width: 84%;" class="boardthreesaadbb"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreebbdcc" id="brandthreebbdcc" class="brandthreesbbdcc"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreebbdcc" id="numberthreebbdcc" style="width: 98px;" class="numberthreesbbdcc"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbabbdcc" id="cntdbibbdcc"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreebbdcc" id="routethreebbdcc" class="routethreesbbdcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreebbdcc" id="locationthreebbdcc" class="locationthreesbbdcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreebbdcc" id="parkthreebbdcc" class="parkthreesbbdcc"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreebbdcc" id="timethreebbdcc" style="width: 80px;" class="timethreesbbdcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreebbdcc" id="pnothreebbdcc" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesbbdcc"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreebbdcc" id="movethreebbdcc" style="width: 30px; height: auto; margin: ;" class="movethreesbbdcc"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreebbdcc" id="boardthreebbdcc" style="width: 84%;" class="boardthreesbbdcc"/> </span></span>





<!--Route 4 Destiny Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteodo" id="rtdbiodo" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreeccddd" id="brandthreeccddd" class="brandthreesccddd"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreeccddd" id="numberthreeccddd" style="width: 98px;" class="numberthreesccddd"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbaccddd" id="cntdbiccddd"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreeccddd" id="routethreeccddd" class="routethreesccddd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreeccddd" id="locationthreeccddd" class="locationthreesccddd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkthreeccddd" id="parkthreeccddd" class="parkthreesccddd"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Time:</label> <input type="text" name="stimethreeccddd" id="timethreeccddd" style="width: 80px;" class="timethreesccddd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreeccddd" id="pnothreeccddd" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesccddd"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreeccddd" id="movethreeccddd" style="width: 30px; height: auto; margin: ;" class="movethreesccddd"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreeccddd" id="boardthreeccddd" style="width: 84%;" class="boardthreesccddd"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreedddee" id="brandthreedddee" class="brandthreesdddee"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreedddee" id="numberthreedddee" style="width: 98px;" class="numberthreesdddee"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbadddee" id="cntdbidddee"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreedddee" id="routethreedddee" class="routethreesdddee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreedddee" id="locationthreedddee" class="locationthreesdddee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreedddee" id="parkthreedddee" class="parkthreesdddee"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreedddee" id="timethreedddee" style="width: 80px;" class="timethreesdddee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreedddee" id="pnothreedddee" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesdddee"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreedddee" id="movethreedddee" style="width: 30px; height: auto; margin: ;" class="movethreesdddee"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreedddee" id="boardthreedddee" style="width: 84%;" class="boardthreesdddee"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeeedff" id="brandthreeeedff" class="brandthreeseedff"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeeedff" id="numberthreeeedff" style="width: 98px;" class="numberthreeseedff"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaeedff" id="cntdbieedff"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeeedff" id="routethreeeedff" class="routethreeseedff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeeedff" id="locationthreeeedff" class="locationthreeseedff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeeedff" id="parkthreeeedff" class="parkthreeseedff"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeeedff" id="timethreeeedff" style="width: 80px;" class="timethreeseedff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeeedff" id="pnothreeeedff" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeseedff"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeeedff" id="movethreeeedff" style="width: 30px; height: auto; margin: ;" class="movethreeseedff"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeeedff" id="boardthreeeedff" style="width: 84%;" class="boardthreeseedff"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeffdgg" id="brandthreeffdgg" class="brandthreesffdgg"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeffdgg" id="numberthreeffdgg" style="width: 98px;" class="numberthreesffdgg"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaffdgg" id="cntdbiffdgg"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeffdgg" id="routethreeffdgg" class="routethreesffdgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeffdgg" id="locationthreeffdgg" class="locationthreesffdgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeffdgg" id="parkthreeffdgg" class="parkthreesffdgg"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeffdgg" id="timethreeffdgg" style="width: 80px;" class="timethreesffdgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeffdgg" id="pnothreeffdgg" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesffdgg"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeffdgg" id="movethreeffdgg" style="width: 30px; height: auto; margin: ;" class="movethreesffdgg"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeffdgg" id="boardthreeffdgg" style="width: 84%;" class="boardthreesffdgg"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeggdhh" id="brandthreeggdhh" class="brandthreesggdhh"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeggdhh" id="numberthreeggdhh" style="width: 98px;" class="numberthreesggdhh"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaggdhh" id="cntdbiggdhh"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeggdhh" id="routethreeggdhh" class="routethreesggdhh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeggdhh" id="locationthreeggdhh" class="locationthreesggdhh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeggdhh" id="parkthreeggdhh" class="parkthreesggdhh"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeggdhh" id="timethreeggdhh" style="width: 80px;" class="timethreesggdhh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeggdhh" id="pnothreeggdhh" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesggdhh"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeggdhh" id="movethreeggdhh" style="width: 30px; height: auto; margin: ;" class="movethreesggdhh"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeggdhh" id="boardthreeggdhh" style="width: 84%;" class="boardthreesggdhh"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreehhdii" id="brandthreehhdii" class="brandthreeshhdii"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreehhdii" id="numberthreehhdii" style="width: 98px;" class="numberthreeshhdii"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbahhdii" id="cntdbihhdii"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreehhdii" id="routethreehhdii" class="routethreeshhdii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreehhdii" id="locationthreehhdii" class="locationthreeshhdii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreehhdii" id="parkthreehhdii" class="parkthreeshhdii"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreehhdii" id="timethreehhdii" style="width: 80px;" class="timethreeshhdii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreehhdii" id="pnothreehhdii" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeshhdii"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreehhdii" id="movethreehhdii" style="width: 30px; height: auto; margin: ;" class="movethreeshhdii"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreehhdii" id="boardthreehhdii" style="width: 84%;" class="boardthreeshhdii"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeiidjj" id="brandthreeiidjj" class="brandthreesiidjj"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeiidjj" id="numberthreeiidjj" style="width: 98px;" class="numberthreesiidjj"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaiidjj" id="cntdbiiidjj"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeiidjj" id="routethreeiidjj" class="routethreesiidjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeiidjj" id="locationthreeiidjj" class="locationthreesiidjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeiidjj" id="parkthreeiidjj" class="parkthreesiidjj"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeiidjj" id="timethreeiidjj" style="width: 80px;" class="timethreesiidjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeiidjj" id="pnothreeiidjj" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesiidjj"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeiidjj" id="movethreeiidjj" style="width: 30px; height: auto; margin: ;" class="movethreesiidjj"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeiidjj" id="boardthreeiidjj" style="width: 84%;" class="boardthreesiidjj"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreejjdkk" id="brandthreejjdkk" class="brandthreesjjdkk"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreejjdkk" id="numberthreejjdkk" style="width: 98px;" class="numberthreesjjdkk"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbajjdkk" id="cntdbijjdkk"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreejjdkk" id="routethreejjdkk" class="routethreesjjdkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreejjdkk" id="locationthreejjdkk" class="locationthreesjjdkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreejjdkk" id="parkthreejjdkk" class="parkthreesjjdkk"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreejjdkk" id="timethreejjdkk" style="width: 80px;" class="timethreesjjdkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreejjdkk" id="pnothreejjdkk" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesjjdkk"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreejjdkk" id="movethreejjdkk" style="width: 30px; height: auto; margin: ;" class="movethreesjjdkk"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreejjdkk" id="boardthreejjdkk" style="width: 84%;" class="boardthreesjjdkk"/> </span></span>





<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreekkdll" id="brandthreekkdll" class="brandthreeskkdll"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreekkdll" id="numberthreekkdll" style="width: 98px;" class="numberthreeskkdll"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbakkdll" id="cntdbikkdll"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreekkdll" id="routethreekkdll" class="routethreeskkdll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreekkdll" id="locationthreekkdll" class="locationthreeskkdll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreekkdll" id="parkthreekkdll" class="parkthreeskkdll"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreekkdll" id="timethreekkdll" style="width: 80px;" class="timethreeskkdll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreekkdll" id="pnothreekkdll" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeskkdll"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreekkdll" id="movethreekkdll" style="width: 30px; height: auto; margin: ;" class="movethreeskkdll"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreekkdll" id="boardthreekkdll" style="width: 84%;" class="boardthreeskkdll"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreelldmm" id="brandthreelldmm" class="brandthreeslldmm"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreelldmm" id="numberthreelldmm" style="width: 98px;" class="numberthreeslldmm"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdballdmm" id="cntdbilldmm"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreelldmm" id="routethreelldmm" class="routethreeslldmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreelldmm" id="locationthreelldmm" class="locationthreeslldmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreelldmm" id="parkthreelldmm" class="parkthreeslldmm"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreelldmm" id="timethreelldmm" style="width: 80px;" class="timethreeslldmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreelldmm" id="pnothreelldmm" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreeslldmm"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreelldmm" id="movethreelldmm" style="width: 30px; height: auto; margin: ;" class="movethreeslldmm"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreelldmm" id="boardthreelldmm" style="width: 84%;" class="boardthreeslldmm"/> </span></span>





<!--Route 5 Destiny Buses-->
<span class="firstrt" id="rtdbfs"><span class="firsta" id="rtdbss"><label for="rtdbi">Route:</label> <input type="text" name="arouteudu" id="rtdbiudu" style="width: 51%;"/> </span></span>
<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai">Bus Brand:</label> <input type="text" name="sbrandthreemmdnn" id="brandthreemmdnn" class="brandthreesmmdnn"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Number plate:</label> <input type="text" name="snumberthreemmdnn" id="numberthreemmdnn" style="width: 98px;" class="numberthreesmmdnn"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Conductor name:</label> <input type="text" name="cntdbammdnn" id="cntdbimmdnn"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai">Phone Number:</label> <input type="text" name="sroutethreemmdnn" id="routethreemmdnn" class="routethreesmmdnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Registered Location ID:</label> <input type="text" name="slocationthreemmdnn" id="locationthreemmdnn" class="locationthreesmmdnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Park Name:</label> <input type="text" name="sparkthreemmdnn" id="parkthreemmdnn" class="parkthreesmmdnn"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai">Time:</label> <input type="text" name="stimethreemmdnn" id="timethreemmdnn" style="width: 80px;" class="timethreesmmdnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi">PN<span style="transform: rotate(180deg); display: inline-block; font-size: 11px;">&Ouml;</span></label> <input type="text" name="spnothreemmdnn" id="pnothreemmdnn" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesmmdnn"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi" style="visibility: hidden;">View:</label> <input type="text" name="smovethreemmdnn" id="movethreemmdnn" style="width: 30px; height: auto; margin: ;" class="movethreesmmdnn"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai" style="text-align: left; margin-left: -25px; background-color: ; z-index: 1;">Opinion:</label> <input type="text" name="sboardthreemmdnn" id="boardthreemmdnn" style="width: 84%;" class="boardthreesmmdnn"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreenndoo" id="brandthreenndoo" class="brandthreesnndoo"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreenndoo" id="numberthreenndoo" style="width: 98px;" class="numberthreesnndoo"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbanndoo" id="cntdbinndoo"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreenndoo" id="routethreenndoo" class="routethreesnndoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreenndoo" id="locationthreenndoo" class="locationthreesnndoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreenndoo" id="parkthreenndoo" class="parkthreesnndoo"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreenndoo" id="timethreenndoo" style="width: 80px;" class="timethreesnndoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreenndoo" id="pnothreenndoo" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesnndoo"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreenndoo" id="movethreenndoo" style="width: 30px; height: auto; margin: ;" class="movethreesnndoo"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreenndoo" id="boardthreenndoo" style="width: 84%;" class="boardthreesnndoo"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeoodpp" id="brandthreeoodpp" class="brandthreesoodpp"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeoodpp" id="numberthreeoodpp" style="width: 98px;" class="numberthreesoodpp"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaoodpp" id="cntdbioodpp"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeoodpp" id="routethreeoodpp" class="routethreesoodpp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeoodpp" id="locationthreeoodpp" class="locationthreesoodpp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeoodpp" id="parkthreeoodpp" class="parkthreesoodpp"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeoodpp" id="timethreeoodpp" style="width: 80px;" class="timethreesoodpp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeoodpp" id="pnothreeoodpp" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesoodpp"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeoodpp" id="movethreeoodpp" style="width: 30px; height: auto; margin: ;" class="movethreesoodpp"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeoodpp" id="boardthreeoodpp" style="width: 84%;" class="boardthreesoodpp"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeppdqq" id="brandthreeppdqq" class="brandthreesppdqq"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeppdqq" id="numberthreeppdqq" style="width: 98px;" class="numberthreesppdqq"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbappdqq" id="cntdbippdqq"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeppdqq" id="routethreeppdqq" class="routethreesppdqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeppdqq" id="locationthreeppdqq" class="locationthreesppdqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeppdqq" id="parkthreeppdqq" class="parkthreesppdqq"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeppdqq" id="timethreeppdqq" style="width: 80px;" class="timethreesppdqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeppdqq" id="pnothreeppdqq" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesppdqq"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeppdqq" id="movethreeppdqq" style="width: 30px; height: auto; margin: ;" class="movethreesppdqq"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeppdqq" id="boardthreeppdqq" style="width: 84%;" class="boardthreesppdqq"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeqqdrr" id="brandthreeqqdrr" class="brandthreesqqdrr"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeqqdrr" id="numberthreeqqdrr" style="width: 98px;" class="numberthreesqqdrr"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbaqqdrr" id="cntdbiqqdrr"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeqqdrr" id="routethreeqqdrr" class="routethreesqqdrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeqqdrr" id="locationthreeqqdrr" class="locationthreesqqdrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeqqdrr" id="parkthreeqqdrr" class="parkthreesqqdrr"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeqqdrr" id="timethreeqqdrr" style="width: 80px;" class="timethreesqqdrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeqqdrr" id="pnothreeqqdrr" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesqqdrr"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeqqdrr" id="movethreeqqdrr" style="width: 30px; height: auto; margin: ;" class="movethreesqqdrr"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeqqdrr" id="boardthreeqqdrr" style="width: 84%;" class="boardthreesqqdrr"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreerrdss" id="brandthreerrdss" class="brandthreesrrdss"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreerrdss" id="numberthreerrdss" style="width: 98px;" class="numberthreesrrdss"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbarrdss" id="cntdbirrdss"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreerrdss" id="routethreerrdss" class="routethreesrrdss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreerrdss" id="locationthreerrdss" class="locationthreesrrdss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreerrdss" id="parkthreerrdss" class="parkthreesrrdss"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreerrdss" id="timethreerrdss" style="width: 80px;" class="timethreesrrdss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreerrdss" id="pnothreerrdss" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesrrdss"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreerrdss" id="movethreerrdss" style="width: 30px; height: auto; margin: ;" class="movethreesrrdss"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreerrdss" id="boardthreerrdss" style="width: 84%;" class="boardthreesrrdss"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreessdtt" id="brandthreessdtt" class="brandthreesssdtt"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreessdtt" id="numberthreessdtt" style="width: 98px;" class="numberthreesssdtt"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbassdtt" id="cntdbissdtt"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreessdtt" id="routethreessdtt" class="routethreesssdtt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreessdtt" id="locationthreessdtt" class="locationthreesssdtt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreessdtt" id="parkthreessdtt" class="parkthreesssdtt"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreessdtt" id="timethreessdtt" style="width: 80px;" class="timethreesssdtt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreessdtt" id="pnothreessdtt" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesssdtt"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreessdtt" id="movethreessdtt" style="width: 30px; height: auto; margin: ;" class="movethreesssdtt"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreessdtt" id="boardthreessdtt" style="width: 84%;" class="boardthreesssdtt"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreettduu" id="brandthreettduu" class="brandthreesttduu"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreettduu" id="numberthreettduu" style="width: 98px;" class="numberthreesttduu"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbattduu" id="cntdbittduu"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreettduu" id="routethreettduu" class="routethreesttduu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreettduu" id="locationthreettduu" class="locationthreesttduu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreettduu" id="parkthreettduu" class="parkthreesttduu"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreettduu" id="timethreettduu" style="width: 80px;" class="timethreesttduu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreettduu" id="pnothreettduu" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesttduu"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreettduu" id="movethreettduu" style="width: 30px; height: auto; margin: ;" class="movethreesttduu"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreettduu" id="boardthreettduu" style="width: 84%;" class="boardthreesttduu"/> </span></span>






<span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreeuudvv" id="brandthreeuudvv" class="brandthreesuudvv"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreeuudvv" id="numberthreeuudvv" style="width: 98px;" class="numberthreesuudvv"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbauudvv" id="cntdbiuudvv"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreeuudvv" id="routethreeuudvv" class="routethreesuudvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreeuudvv" id="locationthreeuudvv" class="locationthreesuudvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreeuudvv" id="parkthreeuudvv" class="parkthreesuudvv"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreeuudvv" id="timethreeuudvv" style="width: 80px;" class="timethreesuudvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreeuudvv" id="pnothreeuudvv" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesuudvv"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreeuudvv" id="movethreeuudvv" style="width: 30px; height: auto; margin: ;" class="movethreesuudvv"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreeuudvv" id="boardthreeuudvv" style="width: 84%;" class="boardthreesuudvv"/> </span></span>





 <span class="firstaa" id="cntdbfsa" style="width: 14%;"><span class="firstas" id="cntdbssa"><label for="cntdbai"></label> <input type="text" name="sbrandthreevvdww" id="brandthreevvdww" class="brandthreesvvdww"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 9%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="snumberthreevvdww" id="numberthreevvdww" style="width: 98px;" class="numberthreesvvdww"/> </span></span>
            <span class="first" id="cntdbfs" style="float: left; clear: none; width: 14%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="cntdbavvdww" id="cntdbivvdww"/> </span></span>
            <span class="firstaa" id="nptbdfsa" style="width: 15%;"><span class="firstas" id="nptbdssa"><label for="nptbdai"></label> <input type="text" name="sroutethreevvdww" id="routethreevvdww" class="routethreesvvdww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 14%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="slocationthreevvdww" id="locationthreevvdww" class="locationthreesvvdww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 15%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="sparkthreevvdww" id="parkthreevvdww" class="parkthreesvvdww"/> </span></span>
            <span class="firstaa" id="bbtdbfsa" style="width: 8%; clear: none;"><span class="firstas" id="bbtdbssa"><label for="bbtdbai"></label> <input type="text" name="stimethreevvdww" id="timethreevvdww" style="width: 80px;" class="timethreesvvdww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 3%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="spnothreevvdww" id="pnothreevvdww" style="width: 18px; height: 18px; margin: ; border-radius: 26px/24px;text-align: center;" class="pnothreesvvdww"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 4%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="smovethreevvdww" id="movethreevvdww" style="width: 30px; height: auto; margin: ;" class="movethreesvvdww"/> </span></span>
            <span class="firstaa" id="pntdbfsa" style="width: 4%;"><span class="firstas" id="pntdbssa" style="text-align: left; margin-left: -3px;"><label for="pntdbai"></label> <input type="text" name="sboardthreevvdww" id="boardthreevvdww" style="width: 84%;" class="boardthreesvvdww"/> </span></span>
 </p>
<!--End Destiny Buses-->


<!--Charge Rates-->
<div style="height: 2550px; border: 2px solid red;">
<p>Current Charge Rates:</p>
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi">Route:</label> <input type="text" name="crroutea" id="crroutea" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi">Bus Brand:</label> <input type="text" name="crbranda" id="crbranda" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi">Number Plate:</label> <input type="text" name="crnumbera" id="crnumbera" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi">Fare:</label> <input type="text" name="crfarea" id="crfarea" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;">Opinion:</label> <input type="text" name="cropinionsa" id="cropinionsa" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionsaa" id="cropinionsaa" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionsaaa" id="cropinionsaaa" style="width: 28% !important; float: right; clear: right;"/> </span></span>
            
          
          
          
          
            
           <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crrouteb" id="crrouteb" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrandb" id="crbrandb" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumberb" id="crnumberb" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfareb" id="crfareb" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinionsb" id="cropinionsb" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionsbb" id="cropinionsbb" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionsbbb" id="cropinionsbbb" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroutec" id="crroutec" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrandc" id="crbrandc" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumberc" id="crnumberc" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfarec" id="crfarec" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinionsc" id="cropinionsc" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionscc" id="cropinionscc" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionsccc" id="cropinionsccc" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crrouted" id="crrouted" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrandd" id="crbrandd" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumberd" id="crnumberd" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfared" id="crfared" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinionsd" id="cropinionsd" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionsdd" id="cropinionsdd" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionsddd" id="cropinionsddd" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroutee" id="crroutee" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrande" id="crbrande" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumbere" id="crnumbere" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfaree" id="crfaree" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinionse" id="cropinionse" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionsee" id="cropinionsee" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionseee" id="cropinionseee" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroutef" id="crroutef" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrandf" id="crbrandf" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumberf" id="crnumberf" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfaref" id="crfaref" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinionsf" id="cropinionsf" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinionsff" id="cropinionsff" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinionsfff" id="cropinionsfff" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
           <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
          <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
         <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
             <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
             <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
              <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
    
    
    
    
            <span class="first" id="bbtdbfs" style="width: 20%;"><span class="firsta" id="bbtdbss"><label for="bbtdbi"></label> <input type="text" name="crroute" id="crroute" style="width: 210px !important;"/> </span></span>
            <span class="first" id="nptbdfs" style="width: 20%;"><span class="firsta" id="nptbdss"><label for="nptbdi"></label> <input type="text" name="crbrand" id="crbrand" style="width: 210px !important;"/> </span></span>
            <span class="first" id="cntdbfs" style="width: 20%;"><span class="firsta" id="cntdbss"><label for="cntdbi"></label> <input type="text" name="crnumber" id="crnumber" style="width: auto !important;"/> </span></span>
            <span class="first" id="pntdbfs" style="width: 20%;"><span class="firsta" id="pntdbss"><label for="pntdbi"></label> <input type="text" name="crfare" id="crfare" style="width: auto !important;"/> </span></span>
            <span class="first" id="lstdbfs" style="width: 20%; text-align: center;"><span class="firsta" id="lstdbss"><label for="lstdbi" style="text-align: center;"></label> <input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: left;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: left; clear: none; margin-left: 10px;"/><input type="text" name="cropinions" id="cropinions" style="width: 28% !important; float: right; clear: right;"/> </span></span>     
                  
</div>









            <span class="firstbtn" id="ubtntdbfs"><span class="firsta" id="ubtntdbss"> <input type="submit" value="Update!" id='ninetyeight' name="Dash Board Updated Now"/> </span></span>
          </form>
        </fieldset>
    </body>
</html>`
const htmla = ` <!doctype html>
<html>
  <head>
        <meta charset="utf8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title></title>
        <style type="text/css">

        .tittlie {

        	position: relative;
        	right: 5px;
        	width:auto;
        	padding: 5px;
        	background-color: grey;

        }
          h1 {
          	font-weight: lighter;
          	text-shadow: 1px 1px blue;

          }
           label {
           	 display: inline-block;
           	 width: 120px;

           }

           #adminlog {
           	 display: none;

           }


           input {
           	 display: inline-block;
           	width: 250px;
           	height: 20px;
           }

           input[type=submit] {
           	width: 70px;
           	margin-left: 305px;
           	height: 27px;
           	display: block;

           }
           .leftdivider {
           	height: auto;
           	padding: ;
           	width: 10%;
           	margin-top: 5px;
           }

        </style>
    </head>
    <body>
       <div>
        <fieldset>
         <form method="POST" action"/" id="client" class="logform">
          <p class="tittlie">RECIEPT</p>
          <h1>Journey Paid By:</h1>
          <label for="name">Name:</label><input type="text" id="name" name="clientname"><br/><br/>
          <label for="phone">Phone:</label><input type="tel" id="phone" name="clientphonenumber" required/><br/><br/>
          <label for="from">From:</label><input type="text" id="from" name="from"><br/><br/>
          <label for="to">to:</label><input type="text" id="to" name="to"><br/><br/>
          <label for="reciept">Reciept No:</label><input type="text" id="reciept" name="recieptno" placeholder="001" readonly/><br/><br/>
          <input type="submit" id="pay" value="Pay" name="Status">
         </form>
         <button class="leftdivider"><- -</button><button class="leftdivider">- -></button><button class="leftdivider"><- -</button><button class="leftdivider">- -></button><button class="leftdivider" onclick="bologyam()"><<-</button><button class="leftdivider">->></button><button class="leftdivider"><- -</button><button class="leftdivider">- -></button><button class="leftdivider"><- -</button><button class="leftdivider">- -></button>

         <form method="POST" action"/" id="adminlog" class="logform">
          <h1>REQUIRES PASSCODE:</h1>
          <label for="company">Company Name:</label><input type="text" id="company" name="company"/><br/><br/>
          <label for="passcode">PassCode:</label><input type="text" id="passcode" name="adminpasscode" required/><br/><br/>
          <input type="submit" id="enter" value="Enter" name="Status"/>
         </form>

         </fieldset>
       </div>

       <script>

         	function bologyam() {
         		var takeme = document.getElementById('adminlog');
         		var removeit = document.getElementById('client');
         		 takeme.style.display = 'block';
         		 removeit.style.display ='none';
         	};

         </script>

    </body>
</html> `;

  var htmlb = `<!doctype html>
<html>
  <head>
        <meta charset="utf8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title></title>
        <style type="text/css">
         h1 {
          	font-weight: lighter;
          	text-shadow: 1px 1px blue;

          }
           label {
           	 display: inline-block;
           	 width: 120px;

           }
           input {
           	 display: inline-block;
           	width: 250px;
           	height: 20px;
           }

           input[type=submit] {
           	width: 70px;
           	margin-left: 305px;
           	height: 27px;
           	display: block;
        </style>
        <script>
 window.onload=function() {
 var elems = document.getElementsByTagName("input");
 // capture submit to store storage

 document.getElementById("adminrecieptemail").onsubmit=processField;
 for (var i = 0; i < elems.length; i++) {
 if (elems[i].type == "text") {
 // restore
 var value = localStorage.getItem(elems[i].id);
 if (value) elems[i].value = value;
 // change event
 elems[i].onchange=processField;
 }
 }
 }
 // store field values
 function processField() {
 localStorage.setItem(window.location.href,"true");
 localStorage.setItem(this.id, this.value);
 }
 // clear individual fields
 function clearStored() {
 var elems = document.getElementsByTagName("input");
 for (var i = 0; i < elems.length; i++) {
 if (elems[i].type == "text") {
 localStorage.removeItem(elems[i].id);
 }
 }
 }
</script>
    </head>
    <body>
       <div>
        <fieldset>
        <form method="POST" action"/" id="adminrecieptemail" class="logform">
          <h1>Please Update the E-mail reciept Reception E-mail Address Here</h1>
          <label for="email">E-mail:</label><input type="email" id="email" name="recieptemail" required><br/><br/>
          <input type="submit" id="update" value="Update" name="Status" />
        </form>

         </fieldset>
       </div>
    </body>
</html>`;

const htmlc = `<!DOCTYPE html><html lang='en'><head><meta charset='utf8'><meta name='viewport' content='width=device-width, initial-scale=1'/><title></title><script>function paypal(){const payment = document.getElementById('paylink');payment.href = 'http://www.paypal.com/pay/samuelonyait';};</script></head><body onload='showindow()'><div style='width: 100%; height: auto; margin: 0; padding: 0; border: none;'><div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'><div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'><div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'><div class='payintop' style='width: auto; height: auto; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px;'><pre>Hello,

Dear Client;

Please The Payment You Make here is for only a single journey.

Laggage paid only after loading

This Note is By Management: higenyi transporters

<button onclick='paypal()'><a class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>OK</a></button></pre></div></div></div></div></div></body></html>`;



  const htmld = `<!DOCTYPE html><html lang='en'><head><meta charset='utf8'><meta name='viewport' content='width=device-width, initial-scale=1'/><title></title><script>function paypal(){const payment = document.getElementById('paylink');payment.href = 'http://localhost:3000/';};</script></head><body onload='showindow()'><div style='width: 100%; height: auto; margin: 0; padding: 0; border: none;'><div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'><div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'><div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'><div class='payintop' style='width: auto; height: 100%; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px;'><pre>

Your Company Payment Reciept E-mail Successfully Updated !
</pre>
<button onclick='paypal()'><a class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>OK</a></button></div></div></div></div></div></body></html>`;


const logina = `<!DOCTYPE html>
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
			label {
            	width: 180px;
            	display: inline-block;

            }
          #lgnbtn {

          	margin-left: ;
          }
			input[type=submit] {
				margin-left: 295px;
				display: block;
			}
			input[type=submit][1] {
				margin-left: 200px;
				display: block;
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
						<legend class="newuser"></legend>
						<form class="newfm" method="post" id="fmone">
							<p class="helpn" style="float: none; clear: both; font-size: 19px; font-weight: lighter;">fill in your details press enter to proceed enjoy our services if you are new , first time user or want to tour us</p>
							<label for="nemail">E-mail Adress: </label><input type="email" class="email" id="nemail" name="newUserEmail" required/><br/><br/>
							<label for="nphone">Phone Number: </label><input type="tel" class="phone" id="nphone" name="newUserPhoneNumber" required/><br/><br/>
							<input type="submit" class="submit" id="nsubmit" value="Signin" name="Signin"/>
							<br/><br/>
							<hr/>
							<button onclick="shutngo()" style="margin-left: 180px; background-color: rgba(255,255,255,0.5); border-left: 0; border-top: 0; border-right: 0;">Linkto</button>
						</form>


						<form class="newfm" method="post" id="fmtwo" style="display: none;">
						    <button style="float: right; clear: both; display: block; background-color: rgba(255,255,255,0.5); border-left: 0; border-top: 0; border-right: 0; box-shadow: 2px 2px 2px gray;" onclick="shutngoadmin()">Login</button>
							<p class="helpn" style="float: none; clear: both; font-size: 19px; font-weight: bolder;">To proceed, Signin</p>
							<label for="nemail">E-mail Adress: </label><input type="email" class="email" id="nemail" name="UserEmail" required/><br/><br/>
							<label for="nphone">Phone Number: </label><input type="tel" class="phone" id="nphone" name="UserPhoneNumber" required/><br/><br/>
							<input type="submit" class="submit" id="nsubmit" value="Signin." name="Signedin" style="margin-left: 292px;"/>
							<br/><br/>
						</form>

						<form method="POST" action"/" id="fmthree" style="display: none;">
                           <h1 style="padding-left: 5%;">Lock<img src="" width="20px" height="20px" style="margin-left: 15px; margin-right: 5px;"/> Lock</h1>
                           <label for="company">Company Name:</label><input type="email" id="company" name="company"><br/><br/>
                           <label for="password">Key<img src="" height="20px" width="20px" style="margin-left: 10px;"/></label><input type="text" id="password" name="key" required><br/><br/>
                           <input type="submit" id="lgnbtn" value="UnLock" name="UnLock" style="margin-left: 288px;">
                        </form>

					</fieldset>
					<script>
						function shutngo() {
							var letout = document.getElementById("fmone");
							var letin = document.getElementById("fmtwo");
							letin.style.display = "block";
							letout.style.display = "none";

						}

						function shutngoadmin() {
							var letout = document.getElementById("fmtwo");
							var letin = document.getElementById("fmthree");
							letin.style.display = "block";
							letout.style.display = "none";




						}





					</script>

				</div>
			</div>

		</div>

		</div>
	</body>
</html>`;

const loginb = `<!doctype html>
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
</html>`;


const getstarted = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>welcome  to network</title>
		<style>
			body {
			margin-top: 0;
			margin-right: 0;
			margin-bottom: 0;
			margin-left: 0;
			background-color: red;
			padding: 0;
			border: none;
			width: 100%;
			height: 100%;
			}
			a {
				text-decoration: none;
				margin: 0;
			padding: 0;
			border: none;

			}


			.mainintro {
			margin: 0;
			padding: 0;
			border: none;
			width: 100%;

			height: 100%;
			background-color:green;
			font-family: Helvetica, serif;
			}


			.introsub {
				border: none;
				margin: 0px;
				padding: 0px;
				width:100%;
				height: 657px;

				background-color: yellow;
			}
			.intro {
				margin: 0px;
			padding: 0px;
			border: none;
			width: 100%;
			height: 100%;

			background-color:pink;
			}


			.containera {
				height: 50%;
				margin: 0;
			padding: 0;
			border: none;
			text-align: center;
			}
			#msga {
				font-size: 20px;
				margin: 0;
				padding: 0;
				border: none;
			}
			.msgbc {

				margin: 0;
			padding: 0;
			border: none;

			}

			#msgb {

				display: block;
				margin-top: 20px;
				padding-top: 30px;


			}
			.togo {
				display: block;
				width: 100%;
				background-color:;
				text-align: center;
			}

			#tointro {
			padding-top: 10px;
			padding-bottom: 10px;
			display: inline-block;
			background-color:orange;
			width: 100px;
			border-radius: 4px/8px;
			box-shadow: 2px 2px 2px white;
			}

			.containerb {
				height: 50%;
				margin: 0;
			padding: 0;
			border: none;

			}
			#paraa {
				margin: 0;
			padding: 0;
			border: none;
			height: 100%;
			background-color: yellow;
			width: 33%;
			float: left;
			clear: left;


			}
			#parab {
				margin: 0;
			padding: 0;
			border: none;
			height: 100%;
			width: 33%;
			float: left;
			clear: none;
			text-align: center;

			}
			#parac {
				margin: 0;
			padding: 0;
			border: none;
			height: 100%;
			width: 33%;
			float: right;
			clear: right;
			text-align: right;
			background-color: green;
			}
			.parset {
				display: block;
				margin: 0;
			padding: 0;
			border: none;

			}
			#parasetid {
				padding-top: 60%;
				padding-left: 2%;
				padding-right: 2%;
				width: auto;
			}
			.btmlink {
				background-color: mintcream;
				border: 1px solid #00001f;

			}

		</style>
	</head>
	<body>

		<div class="mainintro">
			<div class="introsub">
				<form class="intro" id="welcomeintro" name="welcomesyou">
				  <div class="containera">
					<p id="msga">Welcome to Travofast</p>
					<span class="msgbc" id="msgb">Let's travel?</span>
					<p class="togo"><a href="./home.html" id="tointro">YES</a></p>
				   </div>
				   <div class="containerb">
				   	<p id="paraa"><span class="parset" id="parasetid"><a href="" id="linka" class="btmlink">FAQs</a></span></p><p id="parab"><span class="parset" id="parasetid"><a href="" id="linkb" class="btmlink">Help<img src="" id="helpicon"</a></span></p><p id="parac"><span class="parset" id="parasetid"><a href="" id="linkc" class="btmlink">About us</a></span></p>

				   </div>

				</form>


			</div>


		</div>


	</body>
</html>`;

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
         let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
            console.log(result);
            console.log(`Requested path ${path}`);
     let filebegin = __dirname + "/publicbegin/" + path;
	let file = __dirname + "/public/" + path;
	let filea = __dirname + "/publica/" + path;
	let fileb = __dirname + "/publicb/" + path;
	let filec = __dirname + "/publicc/" + path;
	let filed = __dirname + "/publicd/" + path;
	let filee = __dirname + "/publice/" + path;
	let filef = __dirname + "/publicf/" + path;
	let fileg = __dirname + "/publicg/" + path;
	let fileh = __dirname + "/publich/" + path;



	var alpha = "<div style='width: 100%; height: auto; margin: 0; padding: 0; border: none;'>";
  //schedule body
  var aa = `${result.time}`;
  var bb = `${result.route}`;
  var cc = `${result.brand}`;
  var dd = `${result.opinion}`;

  var aaone = `${result.firsttime}`;
  var bbone = `${result.firstroute}`;
  var ccone = `${result.firstbrand}`;
  var ddone = `${result.firstopinion}`;

  var aatwo = `${result.secondtime}`;
  var bbtwo = `${result.secondroute}`;
  var cctwo = `${result.secondbrand}`;
  var ddtwo = `${result.secondopinion}`;

  var aathree = `${result.thirdtime}`;
  var bbthree = `${result.thirdroute}`;
  var ccthree = `${result.thirdbrand}`;
  var ddthree = `${result.thirdopinion}`;

  var aafour = `${result.fourthtime}`;
  var bbfour = `${result.fourthroute}`;
  var ccfour = `${result.fourthbrand}`;
  var ddfour = `${result.fourthopinion}`;

  var aafive = `${result.fifthtime}`;
  var bbfive = `${result.fifthroute}`;
  var ccfive = `${result.fifthbrand}`;
  var ddfive = `${result.fifthopinion}`;

  var aasix = `${result.sixthtime}`;
  var bbsix = `${result.sixthroute}`;
  var ccsix = `${result.sixthbrand}`;
  var ddsix = `${result.sixthopinion}`;

  var aaseven = `${result.seventhtime}`;
  var bbseven = `${result.seventhroute}`;
  var ccseven = `${result.seventhbrand}`;
  var ddseven = `${result.seventhopinion}`;

  var aaeight = `${result.eighthtime}`;
  var bbeight = `${result.eighthroute}`;
  var cceight = `${result.eighthbrand}`;
  var ddeight = `${result.eighthopinion}`;

  var aanine = `${result.ninethtime}`;
  var bbnine = `${result.ninethroute}`;
  var ccnine = `${result.ninethbrand}`;
  var ddnine = `${result.ninethopinion}`;

	//already moving buses
	var a = `${result.rtdba}`;
	var b = `${result.bbtdba}`;
	var c = `${result.nptdba}`;
	var d = `${result.cntdba}`;
	var e = `${result.pntdba}`;
	var f = `${result.lstdba}`;
  var bbtdbaone = `${result.bbtdbaone}`;
	var nptdbatwo = `${result.nptdbatwo}`;
	var cntdbathree = `${result.cntdbathree}`;
	var pntdbafour = `${result.pntdbafour}`;
	var Locationfive = `${result.Locationfive}`;
	var lstdbasix = `${result.lstdbasix}`;
  var bbtdbaseven = `${result.bbtdbaseven}`;
	var nptdbaeight = `${result.nptdbaeight}`;
	var cntdbanine = `${result.cntdbanine}`;
	var pntdbaten = `${result.pntdbaten}`;
	var Locationeleven = `${result.Locationeleven}`;
	var lstdbatwelve = `${result.lstdbatwelve}`;
  var bbtdbathirteen = `${result.bbtdbathirteen}`;
	var nptdbafourteen = `${result.nptdbafourteen}`;
	var cntdbafifteen = `${result.cntdbafifteen}`;
	var pntdbasixteen = `${result.pntdbasixteen}`;
	var Locationseventeen = `${result.Locationseventeen}`;
	var lstdbaeighteen = `${result.lstdbaeighteen}`;
  var bbtdbanineteen = `${result.bbtdbanineteen}`;
	var nptdbatwenty = `${result.nptdbatwenty}`;
	var cntdbatwentyone = `${result.cntdbatwentyone}`;
	var pntdbatwentytwo = `${result.pntdbatwentytwo}`;
	var Locationtwentythree = `${result.Locationtwentythree}`;
	var lstdbatwentyfour = `${result.lstdbatwentyfour}`;
  var bbtdbatwentyfive = `${result.bbtdbatwentyfive}`;
	var nptdbatwentysix = `${result.nptdbatwentysix}`;
	var cntdbatwentyseven = `${result.cntdbatwentyseven}`;
	var pntdbatwentyeight = `${result.pntdbatwentyeight}`;
	var Locationtwentynine = `${result.Locationtwentynine}`;
	var lstdbathirty = `${result.lstdbathirty}`;
  var bbtdbathirtyone = `${result.bbtdbathirtyone}`;
	var nptdbathirtytwo = `${result.nptdbathirtytwo}`;
	var cntdbathirtythree = `${result.cntdbathirtythree}`;
	var pntdbathirtyfour = `${result.pntdbathirtyfour}`;
	var Locationthirtyfive = `${result.Locationthirtyfive}`;
	var lstdbathirtysix = `${result.lstdbathirtysix}`;
  var bbtdbathirtyseven = `${result.bbtdbathirtyseven}`;
	var nptdbathirtyeight = `${result.nptdbathirtyeight}`;
	var cntdbathirtynine = `${result.cntdbathirtynine}`;
	var pntdbafourty = `${result.pntdbafourty}`;
	var Locationfourtyone = `${result.Locationfourtyone}`;
	var lstdbafourtytwo = `${result.lstdbafourtytwo}`;
  var bbtdbafourtythree = `${result.bbtdbafourtythree}`;
	var nptdbafourtyfour = `${result.nptdbafourtyfour}`;
	var cntdbafourtyfive = `${result.cntdbafourtyfive}`;
	var pntdbafourtysix = `${result.pntdbafourtysix}`;
	var Locationfourtyseven = `${result.Locationfourtyseven}`;
	var lstdbafourtyeight = `${result.lstdbafourtyeight}`;
  var bbtdbafourtynine = `${result.bbtdbafourtynine}`;
	var nptdbafifty = `${result.nptdbafifty}`;
	var cntdbafiftyone = `${result.cntdbafiftyone}`;
	var pntdbafiftytwo = `${result.pntdbafiftytwo}`;
	var Locationfiftythree = `${result.Locationfiftythree}`;
	var lstdbafiftyfour = `${result.lstdbafiftyfour}`;
  var rtdbafiftyfive = `${result.rtdbafiftyfive}`;
	var bbtdbafiftysix = `${result.bbtdbafiftysix}`;
	var nptdbafiftyseven = `${result.nptdbafiftyseven}`;
	var cntdbafiftyeight = `${result.cntdbafiftyeight}`;
	var pntdbafiftynine = `${result.pntdbafiftynine}`;
	var Locationsixty = `${result.Locationsixty}`;
  var lstdbasixtyone = `${result.lstdbasixtyone}`;
	var lstdbasixtytwo = `${result.lstdbasixtytwo}`;
	var nptdbasixtythree = `${result.nptdbasixtythree}`;
	var cntdbasixtyfour = `${result.cntdbasixtyfour}`;
	var pntdbasixtyfive = `${result.pntdbasixtyfive}`;
	var Locationsixtysix = `${result.Locationsixtysix}`;
  var lstdbasixtyseven = `${result.lstdbasixtyseven}`;
	var bbtdbasixtyeight = `${result.bbtdbasixtyeight}`;
	var nptdbasixtynine = `${result.nptdbasixtynine}`;
	var cntdbaseventy = `${result.cntdbaseventy}`;
	var pntdbaseventyone = `${result.pntdbaseventyone}`;
	var Locationseventytwo = `${result.Locationseventytwo}`;
  var lstdbaseventythree = `${result.lstdbaseventythree}`;
	var bbtdbaseventyfour = `${result.bbtdbaseventyfour}`;
	var nptdbaseventyfive = `${result.nptdbaseventyfive}`;
	var cntdbaseventysix = `${result.cntdbaseventysix}`;
	var pntdbaseventyseven = `${result.pntdbaseventyseven}`;
	var Locationseventyeight = `${result.Locationseventyeight}`;
  var lstdbaseventynine = `${result.lstdbaseventynine}`;
	var bbtdbaeighty = `${result.bbtdbaeighty}`;
	var nptdbaeightyone = `${result.nptdbaeightyone}`;
	var cntdbaeightytwo = `${result.cntdbaeightytwo}`;
	var pntdbaeightythree = `${result.pntdbaeightythree}`;
	var Locationeightyfour = `${result.Locationeightyfour}`;
  var lstdbaeightyfive = `${result.lstdbaeightyfive}`;
	var bbtdbaeightysix = `${result.bbtdbaeightysix}`;
	var nptdbaeightyseven = `${result.nptdbaeightyseven}`;
	var cntdbaeightyeight = `${result.cntdbaeightyeight}`;
	var pntdbaeightynine = `${result.pntdbaeightynine}`;
	var Locationninety = `${result.Locationninety}`;
  var lstdbaninetyone = `${result.lstdbaninetyone}`;
	var bbtdbaninetytwo = `${result.bbtdbaninetytwo}`;
	var nptdbaninetythree = `${result.nptdbaninetythree}`;
	var cntdbaninetyfour = `${result.cntdbaninetyfour}`;
	var pntdbaninetyfive = `${result.pntdbaninetyfive}`;
	var Locationninetysix = `${result.Locationninetysix}`;
  var lstdbaninetyseven = `${result.lstdbaninetyseven}`;
	var bbtdbaninetyeight = `${result.bbtdbaninetyeight}`;
	var nptdbaninetynine = `${result.nptdbaninetynine}`;
	var cntdbaonehundred = `${result.cntdbaonehundred}`;
	var pntdbaonehundredone = `${result.pntdbaonehundredone}`;
	var Locationonehundredtwo = `${result.Locationonehundredtwo}`;
  var lstdbaonehundredthree = `${result.lstdbaonehundredthree}`;
	var bbtdbaonehundredfour = `${result.bbtdbaonehundredfour}`;
	var nptdbaonehundredfive = `${result.nptdbaonehundredfive}`;
	var cntdbaonehundredsix = `${result.cntdbaonehundredsix}`;
	var pntdbaonehundredseven = `${result.pntdbaonehundredseven}`;
	var Locationonehundredeight = `${result.Locationonehundredeight}`;
  var lstdbaonehundrednine = `${result.lstdbaonehundrednine}`;
	var bbtdbaonehundredten = `${result.bbtdbaonehundredten}`;
	var nptdbaonehundredeleven = `${result.nptdbaonehundredeleven}`;
	var cntdbaonehundredtwelve = `${result.cntdbaonehundredtwelve}`;
	var pntdbaonehundredthirteen = `${result.pntdbaonehundredthirteen}`;
	var Locationonehundredfourteen = `${result.Locationonehundredfourteen}`;
  var lstdbaonehundredfifteen = `${result.lstdbaonehundredfifteen}`;
	var rtdbaonehundredsixteen = `${result.rtdbaonehundredsixteen}`;
	var bbtdbaonehundredseventeen = `${result.bbtdbaonehundredseventeen}`;
	var nptdbaonehundredeighteen = `${result.nptdbaonehundredeighteen}`;
	var cntdbaonehundrednineteen = `${result.cntdbaonehundrednineteen}`;
	var pntdbaonehundredtwenty = `${result.pntdbaonehundredtwenty}`;
  var Locationonehundredtwentyone = `${result.Locationonehundredtwentyone}`;
	var lstdbaonehundredtwentytwo = `${result.lstdbaonehundredtwentytwo}`;
	var bbtdbaonehundredtwentythree = `${result.bbtdbaonehundredtwentythree}`;
	var nptdbaonehundredtwentyfour = `${result.nptdbaonehundredtwentyfour}`;
	var cntdbaonehundredtwentyfive = `${result.cntdbaonehundredtwentyfive}`;
	var pntdbaonehundredtwentysix = `${result.pntdbaonehundredtwentysix}`;
  var Locationonehundredtwentyseven = `${result.Locationonehundredtwentyseven}`;
	var lstdbaonehundredtwentyeight = `${result.lstdbaonehundredtwentyeight}`;
	var bbtdbaonehundredtwentynine = `${result.bbtdbaonehundredtwentynine}`;
	var nptdbaonehundredthirty = `${result.nptdbaonehundredthirty}`;
	var cntdbaonehundredthirtyone = `${result.cntdbaonehundredthirtyone}`;
	var pntdbaonehundredthirtytwo = `${result.pntdbaonehundredthirtytwo}`;
  var Locationonehundredthirtythree = `${result.Locationonehundredthirtythree}`;
	var lstdbaonehundredthirtyfour = `${result.lstdbaonehundredthirtyfour}`;
	var bbtdbaonehundredthirtyfive = `${result.bbtdbaonehundredthirtyfive}`;
	var nptdbaonehundredthirtysix = `${result.nptdbaonehundredthirtysix}`;
	var cntdbaonehundredthirtyseven = `${result.cntdbaonehundredthirtyseven}`;
	var pntdbaonehundredthirtyeight = `${result.pntdbaonehundredthirtyeight}`;
  var Locationonehundredthirtynine = `${result.Locationonehundredthirtynine}`;
	var lstdbaonehundredfourty = `${result.lstdbaonehundredfourty}`;
	var bbtdbaonehundredfourtyone = `${result.bbtdbaonehundredfourtyone}`;
	var bbtdbaonehundredfourtytwo = `${result.bbtdbaonehundredfourtytwo}`;
	var cntdbaonehundredfourtythree = `${result.cntdbaonehundredfourtythree}`;
	var pntdbaonehundredfourtyfour = `${result.pntdbaonehundredfourtyfour}`;
  var Locationonehundredfourtyfive = `${result.Locationonehundredfourtyfive}`;
	var lstdbaonehundredfourtysix = `${result.lstdbaonehundredfourtysix}`;
	var bbtdbaonehundredfourtyseven = `${result.bbtdbaonehundredfourtyseven}`;
	var nptdbaonehundredfourtyeight = `${result.nptdbaonehundredfourtyeight}`;
	var cntdbaonehundredfourtynine = `${result.cntdbaonehundredfourtynine}`;
	var pntdbaonehundredfifty = `${result.pntdbaonehundredfifty}`;
  var Locationonehundredfiftyone = `${result.Locationonehundredfiftyone}`;
	var lstdbaonehundredfiftytwo = `${result.lstdbaonehundredfiftytwo}`;
	var bbtdbaonehundredfiftythree = `${result.bbtdbaonehundredfiftythree}`;
	var nptdbaonehundredfiftyfour = `${result.nptdbaonehundredfiftyfour}`;
	var cntdbaonehundredfiftyfive = `${result.cntdbaonehundredfiftyfive}`;
	var pntdbaonehundredfiftysix = `${result.pntdbaonehundredfiftysix}`;
  var Locationonehundredfiftyseven = `${result.Locationonehundredfiftyseven}`;
	var lstdbaonehundredfiftyeight = `${result.lstdbaonehundredfiftyeight}`;
	var bbtdbaonehundredfiftynine = `${result.bbtdbaonehundredfiftynine}`;
	var nptdbaonehundredsixty = `${result.nptdbaonehundredsixty}`;
	var cntdbaonehundredsixtyone = `${result.cntdbaonehundredsixtyone}`;
	var pntdbaonehundredsixtytwo = `${result.pntdbaonehundredsixtytwo}`;
  var Locationonehundredsixtythree = `${result.Locationonehundredsixtythree}`;
	var lstdbaonehundredsixtyfour = `${result.lstdbaonehundredsixtyfour}`;
	var bbtdbaonehundredsixtyfive = `${result.bbtdbaonehundredsixtyfive}`;
	var nptdbaonehundredsixtysix = `${result.nptdbaonehundredsixtysix}`;
	var cntdbaonehundredsixtyseven = `${result.cntdbaonehundredsixtyseven}`;
	var pntdbaonehundredsixtyeight = `${result.pntdbaonehundredsixtyeight}`;
  var Locationonehundredsixtynine = `${result.Locationonehundredsixtynine}`;
	var rtbaonehundredseventy = `${result.rtbaonehundredseventy}`;
	var bbtdbaonehundredseventyone = `${result.bbtdbaonehundredseventyone}`;
	var nptdbaonehundredseventytwo = `${result.nptdbaonehundredseventytwo}`;
	var cntdbaonehundredseventythree = `${result.cntdbaonehundredseventythree}`;
	var pntdbaonehundredseventyfour = `${result.pntdbaonehundredseventyfour}`;
  var Locationonehundredseventyfive = `${result.Locationonehundredseventyfive}`;
	var lstdbaonehundredseventysix = `${result.lstdbaonehundredseventysix}`;
	var rtdbaonehundredseventyseven = `${result.rtdbaonehundredseventyseven}`;
	var bbtdbaonehundredseventyeight = `${result.bbtdbaonehundredseventyeight}`;
	var nptdbaonehundredseventynine = `${result.nptdbaonehundredseventynine}`;
	var cntdbaonehundredeighty = `${result.cntdbaonehundredeighty}`;
  var pntdbaonehundredeightyone = `${result.pntdbaonehundredeightyone}`;
	var Locationonehundredeightytwo = `${result.Locationonehundredeightytwo}`;
	var lstdbaonehundredeightythree = `${result.lstdbaonehundredeightythree}`;
	var bbtdbaonehundredeightyfour = `${result.bbtdbaonehundredeightyfour}`;
	var nptdbaonehundredeightyfive = `${result.nptdbaonehundredeightyfive}`;
	var cntdbaonehundredeightysix = `${result.cntdbaonehundredeightysix}`;
  var pntdbaonehundredeightyseven = `${result.pntdbaonehundredeightyseven}`;
	var Locationonehundredeightyeight = `${result.Locationonehundredeightyeight}`;
	var lstdbaonehundredeightynine = `${result.lstdbaonehundredeightynine}`;
	var bbtdbaonehundredninety = `${result.bbtdbaonehundredninety}`;
	var nptdbaonehundredninetyone = `${result.nptdbaonehundredninetyone}`;
	var cntdbaonehundredninetytwo = `${result.cntdbaonehundredninetytwo}`;
  var pntdbaonehundredninetythree = `${result.pntdbaonehundredninetythree}`;
	var Locationonehundredninetyfour = `${result.Locationonehundredninetyfour}`;
	var lstdbaonehundredninetyfive = `${result.lstdbaonehundredninetyfive}`;
	var bbtdbaonehundredninetysix = `${result.bbtdbaonehundredninetysix}`;
	var nptdbaonehundredninetyseven = `${result.nptdbaonehundredninetyseven}`;
	var cntdbaonehundredninetyeight = `${result.cntdbaonehundredninetyeight}`;
  var pntdbaonehundredninetynine = `${result.pntdbaonehundredninetynine}`;
	var Locationtwohundred = `${result.Locationtwohundred}`;
	var lstdbatwohundredone = `${result.lstdbatwohundredone}`;
	var bbtdbatwohundredtwo = `${result.bbtdbatwohundredtwo}`;
	var nptdbatwohundredthree = `${result.nptdbatwohundredthree}`;
	var cntdbatwohundredfour = `${result.cntdbatwohundredfour}`;
  var pntdbatwohundredfive = `${result.pntdbatwohundredfive}`;
	var Locationtwohundredsix = `${result.Locationtwohundredsix}`;
	var lstdbatwohundredseven = `${result.lstdbatwohundredseven}`;
	var bbtdbatwohundredeight = `${result.bbtdbatwohundredeight}`;
	var nptdbatwohundrednine = `${result.nptdbatwohundrednine}`;
	var cntdbatwohundredten = `${result.cntdbatwohundredten}`;
  var pntdbatwohundredeleven = `${result.pntdbatwohundredeleven}`;
	var Locationtwohundredtwelve = `${result.Locationtwohundredtwelve}`;
	var lstdbatwohundredthirteen = `${result.lstdbatwohundredthirteen}`;
	var bbtdbatwohundredfourteen = `${result.bbtdbatwohundredfourteen}`;
	var nptdbatwohundredfifteen = `${result.nptdbatwohundredfifteen}`;
	var cntdbatwohundredsixteen = `${result.cntdbatwohundredsixteen}`;
  var pntdbatwohundredseventeen = `${result.pntdbatwohundredseventeen}`;
	var Locationtwohundredeighteen = `${result.Locationtwohundredeighteen}`;
	var lstdbatwohundrednineteen = `${result.lstdbatwohundrednineteen}`;
	var bbtdbatwohundredtwenty = `${result.bbtdbatwohundredtwenty}`;
	var nptdbatwohundredtwentyone = `${result.nptdbatwohundredtwentyone}`;
	var cntdbatwohundredtwentytwo = `${result.cntdbatwohundredtwentytwo}`;
  var pntdbatwohundredtwentythree = `${result.pntdbatwohundredtwentythree}`;
	var Locationtwohundredtwentyfour = `${result.Locationtwohundredtwentyfour}`;
	var lstdbatwohundredtwentyfive = `${result.lstdbatwohundredtwentyfive}`;
	var bbtdbatwohundredtwentysix = `${result.bbtdbatwohundredtwentysix}`;
	var nptdbatwohundredtwentyseven = `${result.nptdbatwohundredtwentyseven}`;
	var cntdbatwohundredtwentyeight = `${result.cntdbatwohundredtwentyeight}`;
  var pntdbatwohundredtwentynine = `${result.pntdbatwohundredtwentynine}`;
	var Locationtwohundredthirty = `${result.Locationtwohundredthirty}`;
	var lstdbatwohundredthirtyone = `${result.lstdbatwohundredthirtyone}`;
	var bbtdbatwohundredthirtytwo = `${result.bbtdbatwohundredthirtytwo}`;
	var nptdbatwohundredthirtythree = `${result.nptdbatwohundredthirtythree}`;
	var cntdbatwohundredthirtyfour = `${result.cntdbatwohundredthirtyfour}`;
  var pntdbatwohundredthirtyfive = `${result.pntdbatwohundredthirtyfive}`;
	var Locationtwohundredthirtysix = `${result.Locationtwohundredthirtysix}`;
	var lstdbatwohundredthirtyseven = `${result.lstdbatwohundredthirtyseven}`;
	var rtdbatwohundredthirtyeight = `${result.rtdbatwohundredthirtyeight}`;
	var bbtdbatwohundredthirtynine = `${result.bbtdbatwohundredthirtynine}`;
	var nptdbatwohundredfourty = `${result.nptdbatwohundredfourty}`;
  var cntdbatwohundredfourtyone = `${result.cntdbatwohundredfourtyone}`;
	var pntdbatwohundredfourtytwo = `${result.pntdbatwohundredfourtytwo}`;
	var Locationtwohundredfourtythree = `${result.Locationtwohundredfourtythree}`;
	var lstdbatwohundredfourtyfour = `${result.lstdbatwohundredfourtyfour}`;
	var bbtdbatwohundredfourtyfive = `${result.bbtdbatwohundredfourtyfive}`;
	var nptdbatwohundredfourtysix = `${result.nptdbatwohundredfourtysix}`;
  var cntdbatwohundredfourtyseven = `${result.cntdbatwohundredfourtyseven}`;
	var pntdbatwohundredfourtyeight = `${result.pntdbatwohundredfourtyeight}`;
	var Locationtwohundredfourtynine = `${result.Locationtwohundredfourtynine}`;
	var lstdbatwohundredfifty = `${result.lstdbatwohundredfifty}`;
	var bbtdbatwohundredfiftyone = `${result.bbtdbatwohundredfiftyone}`;
	var nptdbatwohundredfiftytwo = `${result.nptdbatwohundredfiftytwo}`;
  var cntdbatwohundredfiftythree = `${result.cntdbatwohundredfiftythree}`;
	var pntdbatwohundredfiftyfour = `${result.pntdbatwohundredfiftyfour}`;
	var Locationtwohundredfiftyfive = `${result.Locationtwohundredfiftyfive}`;
	var lstdbatwohundredfiftysix = `${result.lstdbatwohundredfiftysix}`;
	var bbtdbatwohundredfiftyseven = `${result.bbtdbatwohundredfiftyseven}`;
	var nptdbatwohundredfiftyeight = `${result.nptdbatwohundredfiftyeight}`;
  var cntdbatwohundredfiftynine = `${result.cntdbatwohundredfiftynine}`;
	var pntdbatwohundredsixty = `${result.pntdbatwohundredsixty}`;
	var Locationtwohundredsixtyone = `${result.Locationtwohundredsixtyone}`;
	var lstdbatwohundredsixtytwo = `${result.lstdbatwohundredsixtytwo}`;
	var bbtdbatwohundredsixtythree = `${result.bbtdbatwohundredsixtythree}`;
	var nptdbatwohundredsixtyfour = `${result.nptdbatwohundredsixtyfour}`;
  var cntdbatwohundredsixtyfive = `${result.cntdbatwohundredsixtyfive}`;
	var pntdbatwohundredsixtysix = `${result.pntdbatwohundredsixtysix}`;
	var Locationtwohundredsixtyseven = `${result.Locationtwohundredsixtyseven}`;
	var lstdbatwohundredsixtyeight = `${result.lstdbatwohundredsixtyeight}`;
	var bbtdbatwohundredsixtynine = `${result.bbtdbatwohundredsixtynine}`;
	var nptdbatwohundredseventy = `${result.nptdbatwohundredseventy}`;
  var cntdbatwohundredseventyone = `${result.cntdbatwohundredseventyone}`;
	var pntdbatwohundredseventytwo = `${result.pntdbatwohundredseventytwo}`;
	var Locationtwohundredseventythree = `${result.Locationtwohundredseventythree}`;
	var lstdbatwohundredseventyfour = `${result.lstdbatwohundredseventyfour}`;
	var bbtdbatwohundredseventyfive = `${result.bbtdbatwohundredseventyfive}`;
	var nptdbatwohundredseventysix = `${result.nptdbatwohundredseventysix}`;
	var cntdbatwohundredseventyseven = `${result.cntdbatwohundredseventyseven}`;
  var pntdbatwohundredseventyeight = `${result.pntdbatwohundredseventyeight}`;
	var Locationtwohundredseventynine = `${result.Locationtwohundredseventynine}`;
	var lstdbatwohundredeighty = `${result.lstdbatwohundredeighty}`;
	var bbtdbatwohundredeightyone = `${result.bbtdbatwohundredeightyone}`;
	var nptdbatwohundredeightytwo = `${result.nptdbatwohundredeightytwo}`;
	var cntdbatwohundredeightythree = `${result.cntdbatwohundredeightythree}`;
  var pntdbatwohundredeightyfour = `${result.pntdbatwohundredeightyfour}`;
	var Locationtwohundredeightyfive = `${result.Locationtwohundredeightyfive}`;
	var lstdbatwohundredeightysix = `${result.lstdbatwohundredeightysix}`;
	var bbtdbatwohundredeightyseven = `${result.bbtdbatwohundredeightyseven}`;
	var nptdbatwohundredeightyeight = `${result.nptdbatwohundredeightyeight}`;
	var cntdbatwohundredeigtynine = `${result.cntdbatwohundredeigtynine}`;
  var pntdbatwohundredninety = `${result.pntdbatwohundredninety}`;
	var Locationtwohundredninetyone = `${result.Locationtwohundredninetyone}`;
	var lstdbatwohundredninetytwo = `${result.lstdbatwohundredninetytwo}`;
	var bbtdbatwohundredninetythree = `${result.bbtdbatwohundredninetythree}`;
	var nptdbatwohundredninetyfour = `${result.nptdbatwohundredninetyfour}`;
	var cntdbatwohundredninetyfive = `${result.cntdbatwohundredninetyfive}`;
  var pntdbatwohundredninetysix = `${result.pntdbatwohundredninetysix}`;
	var Locationtwohundredninetyseven = `${result.Locationtwohundredninetyseven}`;
	var lstdbatwohundredninetyeight = `${result.lstdbatwohundredninetyeight}`;






	//Payment Method
	/*Paypal*/
	var paypalaccname = ": " + `${result.paypalaccname}`;
	var paypalurl = `${result.paypalurl}`;
	var paypalgreeting = `${result.paypalgreeting}`;
	var paypalclient = `${result.paypalclient}`;
	var paypalnote = `${result.paypalnote}`;
	var paypalinfo = `${result.paypalinfo}`;
	/*Pioneer*/
	var pioneeraccname = ": " + `${result.pioneeraccname}`;
	var pioneerurl = `${result.pioneerurl}`;
	var pioneergreeting = `${result.pioneergreeting}`;
	var pioneerclient = `${result.pioneerclient}`;
	var pioneernote = `${result.pioneernote}`;
	var pioneerinfo = `${result.pioneerinfo}`;
	/*MTNMobileMoney*/
	var mmmaccname = ": " + `${result.mmmaccname}`;
	var mmmaccphonenumber = `${result.mmmaccphonenumber}`;
	var mcodeone = `${result.mcodeone}`;
	var mcodetwo = `${result.mcodetwo}`;
	var mcodethree = `${result.mcodethree}`;
	var mcodefour = `${result.mcodefour}`;
	var mcodefive = `${result.mcodefive}`;
	var mcodesix = `${result.mcodesix}`;
	var mcodeseven = `${result.mcodeseven}`;
	var mcodeeight = `${result.mcodeeight}`;
	var mcodenine = `${result.mcodenine}`;
	var mcodeten = `${result.mcodeten}`;
	var mcodeeleven = `${result.mcodeeleven}`;
	var mcodetwelve = `${result.mcodetwelve}`;
	var mcodethirteen = `${result.mcodethirteen}`;
	var mcodefourteen = `${result.mcodefourteen}`;
	var mcodefifteen = `${result.mcodefifteen}`;
	var totalmmmcodes = mcodeone + mcodetwo + mcodethree + mcodefour + mcodefive + mcodesix + mcodeseven + mcodeeight + mcodenine + mcodeten + mcodeeleven + mcodetwelve + mcodethirteen + mcodefourteen + mcodefifteen;
	/*AirtelMobileMoney*/
	var ammaccname = " : " + `${result.ammaccname}`;
	var ammaccphonenumber = `${result.ammaccphonenumber}`;
	var acodeone = `${result.acodeone}`;
	var acodetwo = `${result.acodetwo}`;
	var acodethree = `${result.acodethree}`;
	var acodefour = `${result.acodefour}`;
	var acodefive = `${result.acodefive}`;
	var acodesix = `${result.acodesix}`;
	var acodeseven = `${result.acodeseven}`;
	var acodeeight = `${result.acodeeight}`;
	var acodenine = `${result.acodenine}`;
	var acodeten = `${result.acodeten}`;
	var acodeeleven = `${result.acodeeleven}`;
	var acodetwelve = `${result.acodetwelve}`;
	var acodethirteen = `${result.acodethirteen}`;
	var totalammcodes = acodeone + acodetwo + acodethree + acodefour + acodefive + acodesix + acodeseven + acodeeight + acodenine + acodeten + acodeeleven + acodetwelve + acodethirteen;

	var mobilemoneygreeting = `${result.mobilemoneygreeting}`;
	var mobilemoneyclient = `${result.mobilemoneyclient}`;
	var mobilemoneynote = `${result.mobilemoneynote}`;
	var mobilemoneyinfo = `${result.mobilemoneyinfo}`;
    var mobilemoneyurl = "http://localhost:3080/";
	var paratopbegina = "<p style='margin: 0; padding: 10px 0 0 0; border: none; width: 100%; height: 80px; background-color: #0b1506; color: white; font-size: 21px; text-align: center; text-shadow: 1px 1px black;' id='paratoponea'>";
	var paratopbegin = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopone'>";
	var paratopbeginone = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratoptwo'>";
	var paratopbegintwo = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopthree'>";
	var paratopbeginthree = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopfour'>";
	var paratopbeginfour = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopfive'>";
	var paratopbeginfive = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopsix'>";
	var paratopbeginsix = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopseven'>";
	var paratopbeginseven = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopeight'>";
	var paratopbegineight = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopnine'>";
	var paratopbeginnine = "<p style='margin: 0; padding: 0; border: none; width: 100%; height: 90px; background-color: darkslateblue; display: none;' id='paratopten'>";

	var topleftspanbegin = "<span style='margin: 0; padding: 0; border: none; display: block; float: left; clear: left; width: 20%; height: 100%; background-color: ;'>";
	var lefttopanchor = "<a href='../eschedule.html' style='margin: 15% 1%; padding: 5px; border: none; display: inline-block; text-align: right; background-color: orange; border-radius: 3px; font-size: 20px; color: white; text-decoration: none;'>";
	var toplefttext = "<===";
	var topleftspanend = "</span>";
	var topmiddlespanbegin = "<span style='margin: 0; padding: 0; border: none; display: block; float: left; clear: none; width: 60%; height: 100%; background-color: ;'>";
	var middletopanchor = "<a style='margin: 0% 0; padding: 5% 0; border: none; display: block; background-color: ; width: 100%; height: 90%; text-align: center; font-size: 21px; color: white;'>";
	var middletoptext = "We Are Currently Here !";
	var topmiddlespanend = "</span>";
	var toprightspanbegin = "<span style='margin: 0; padding: 0; border: none; display: block; float: right; clear: right; width: 20%; height: 100%; background-color: ; text-align: right; color: white;'>";
	var righttopanchor = "<a href ='../payment.html' style='margin: 15% 1%; padding: 5px; border: none; display: inline-block; text-align: right; background-color: orange; border-radius: 3px; font-size: 20px; text-decoration: none;'>";
	const diro = "<a href ='../payment.html' style='text-decoration: none;'>";
	var righttoptext = "Board Now !";
	var toprightspanend = "</span>";
	var allanchorcloser = "</a>";
	var paratopend = "</p>";
	var starts = "<span style='display: block; float: left; clear: left; width: 25%; height: 80px; margin: 0; padding: 0;'>";
	var middles = "<span style='display: block; float: left; clear: none; width: 25%; height: 80px; text-align: center; margin: 0; padding: 0;'>";
	var stops = "<span style='display: block; float: right; clear: right; width: 25%; height: 80px; text-align: right; margin: 0; padding: 0;'>";
	var headings = "<span style='display: block; width: auto; height: 44px; padding: 15px 2px; margin: 3px; background-color: violet; font-weight: bold;'>";
	var bodys = "<span style='display: block; width: auto; height: 44px; padding: 15px 2px; margin: 3px; background-color: violet;'>";
	var closeaspns = "</span>";
	var omega = "</div>";
	var head = "Route:";
	var heads = " > Route";
	var one = "Bus Brand:";
	var two = "Number Plate:";
	var three = "Conductor Name:";
	var four = "Phone Number";
	var five = "Leaving Status:";
	var six = "Time";
	var seven = "Opinion";


	var fn = "function ";
	var opnb = "{";
	var clsb = "}";
	var openq = "'";
	var closeqs = "';";
	var semicolon = ";";
	var tel = "tel";
	var colon = ":";
	var mobilemoneyurlto = tel + colon + totalmmmcodes;
	var mobilemoneyurltoa = tel + colon + totalammcodes;



	var name = "showindow() ";
	var nameone = "introheadoff() ";
	var nametwo = "showtoponeoff() ";
	var namethree = "showtoptwooff() ";
	var namefour = "showtopthreeoff() ";
	var namefive = "showtopfouroff() ";
	var namesix = "showtopfiveoff() ";
	var nameseven = "showtopsixoff() ";
	var nameeight = "showtopsevenoff() ";
	var namenine = "showtopeightoff() ";
	var nameten = "showtopnineoff() ";
	var nameeleven = "showtoptenoff() ";
	var nametwoa = "showtoponeon() ";
	var namethreea = "showtoptwoon() ";
	var namefoura = "showtopthreeon() ";
	var namefivea = "showtopfouron() ";
	var namesixa = "showtopfiveon() ";
	var namesevena = "showtopsixon() ";
	var nameeighta = "showtopsevenon() ";
	var nameninea = "showtopeighton() ";
	var nametena = "showtopnineon() ";
	var nameelevena = "showtoptenon() ";
	var paypa = "paypal()";
	var paypaa = "paypala()";
	var Url = `${result.Location}`;

	var jss = "let url = ";
	var windowname = "let liveloc = ";
	var thename = "liveLocationWindow";
	var prop = "let properties = ";
	var theproperties = "width=1346,height=560";
	var thewindow = "let livelocationwindow = ";
	var inwindow = "window.open(url, liveloc, properties)";
	var openmove = "livelocationwindow.moveBy(0,340)";

	var paratoponeid = "const showoff = document.getElementById('paratoponea');";
	var paratoptwoid = "const showoff = document.getElementById('paratopone');";
	var paratopthreeid = "const showoff = document.getElementById('paratoptwo');";
	var paratopfourid = "const showoff = document.getElementById('paratopthree');";
	var paratopfiveid = "const showoff = document.getElementById('paratopfour');";
	var paratopsixid = "const showoff = document.getElementById('paratopfive');";
	var paratopsevenid = "const showoff = document.getElementById('paratopsix');";
	var paratopeightid = "const showoff = document.getElementById('paratopseven');";
	var paratopnineid = "const showoff = document.getElementById('paratopeight');";
	var paratoptenid = "const showoff = document.getElementById('paratopnine');";
	var paratopelevenid = "const showoff = document.getElementById('paratopten');";
	var pidstyleone = "showoff.style.display = 'none';";
	var pidstyleonea = "showoff.style.display = 'block';";



	var display = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + "</script>" +  "</head>" + "<body onload='' style='margin:0; padding: 0; border: none; width: 100%; height: 100%; background-color: palegreen;'>" + alpha + "<div class='submain' style='margin: 0 auto; padding 5px 0; width: 90%; height: auto; background-color: blue; text-align: left !important;'>" + "<div class='forhead' style='font-size: 18px; float: none; clear: both; height: auto; width: 100%; background-color: palegreen; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: center;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0 auto; width: 40%; height: 100%; font-weight: bolder;'>" + a + heads + "</div>" + "</div>"  + "<div class='forone' style='font-size: medium; float: left; clear: left; height: auto; width: 20%; background-color: pink; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: bold;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + one + "</div>" + "</div>" + "<div class='fortwo' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: pink; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: bold;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + two + "</div>" + "</div>" + "<div class='forthree' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: pink; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: bold;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + three + "</div>" + "</div>" +  "<div class='forfour' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: pink; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: bold;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + four + "</div>" + "</div>" + "<div class='forfive' style='font-size: medium; float: right; clear: right; height: auto; width: 20%; background-color: pink; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: bold;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + five + "</div>" + "</div>" + "<div class='forone' style='font-size: medium; float: left; clear: left; height: auto; width: 20%; background-color: #fff; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: light;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + b + "</div>" + "</div>" + "<div class='fortwo' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: #fff; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: light;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + c + "</div>" + "</div>" + "<div class='forthree' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: #fff; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: light;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + d + "</div>" + "</div>" +  "<div class='forfour' style='font-size: medium; float: left; clear: none; height: auto; width: 20%; background-color: #fff; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: light;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + e + "</div>" + "</div>" + "<div class='forfive' style='font-size: medium; float: right; clear: right; height: auto; width: 20%; background-color: #fff; padding: 5px 0; margin: 0; max-height: 50px; overflow: hidden; text-align: left; font-weight: light;'>" + "<div class='divinside' style='padding: 0 4px; margin: 0; width: auto; height: 100%;'>" + f + "</div>" + "</div>" +    "</div>" + omega + "</body>" + "</html>";
















	var displaya = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + fn + name + opnb + jss + "'" + Url + "';" + windowname + "'" + thename + "';" + prop + "'" + theproperties + "';" + thewindow + inwindow +";"+ openmove + ";" + clsb + ";" + fn + nameone + opnb + paratoponeid + pidstyleone + clsb + semicolon + fn +        nametwo + opnb + paratoptwoid + pidstyleone + clsb + semicolon + fn + namethree + opnb + paratopthreeid + pidstyleone + clsb + semicolon + fn + namefour + opnb + paratopfourid + pidstyleone + clsb + semicolon + fn + namefive + opnb + paratopfiveid + pidstyleone + clsb + semicolon + fn + namesix + opnb + paratopsixid + pidstyleone + clsb + semicolon + fn + nameseven + opnb + paratopsevenid + pidstyleone + clsb + semicolon + fn + nameeight + opnb + paratopeightid + pidstyleone + clsb + semicolon + fn + namenine + opnb + paratopnineid + pidstyleone + clsb + semicolon + fn + nameten + opnb + paratoptenid + pidstyleone + clsb + semicolon + fn + nameeleven + opnb + paratopelevenid + pidstyleone + clsb + semicolon + fn + nametwoa + opnb + paratoptwoid + pidstyleonea + clsb + semicolon + fn + namethreea + opnb + paratopthreeid + pidstyleonea + clsb + semicolon + fn +       namefoura + opnb + paratopfourid + pidstyleonea + clsb + semicolon + fn + namefivea + opnb + paratopfiveid + pidstyleonea + clsb + semicolon + fn + namesixa + opnb + paratopsixid + pidstyleonea + clsb + semicolon + fn + namesevena + opnb + paratopsevenid + pidstyleonea + clsb + semicolon + fn + nameeighta + opnb + paratopeightid + pidstyleonea + clsb + semicolon + fn + nameninea + opnb + paratopnineid + pidstyleonea + clsb + semicolon + fn + nametena + opnb + paratoptenid + pidstyleonea + clsb + semicolon + fn + nameelevena + opnb + paratopelevenid + pidstyleonea + clsb + semicolon + "</script>" + "</head>" + "<body onload='showindow()'>" + alpha + paratopbegina + "To travel, chose the most favourable schedule for you and board, Thank you!" + paratopend + paratopbegin + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginone + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbegintwo + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginthree + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginfour + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginfive + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginsix + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginseven + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbegineight + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + paratopbeginnine + topleftspanbegin + lefttopanchor + toplefttext + allanchorcloser + topleftspanend + topmiddlespanbegin + middletopanchor + middletoptext + allanchorcloser + topmiddlespanend + toprightspanbegin + righttopanchor + righttoptext + allanchorcloser + toprightspanend + paratopend + "<pre>" + "<p style='font-size: 20px;'>" + starts + headings + six + closeaspns + closeaspns + middles + headings + head + closeaspns + closeaspns + middles + headings + one + closeaspns + closeaspns + stops + headings + seven + closeaspns + closeaspns + starts + bodys + aa + closeaspns + closeaspns + middles + bodys + bb + closeaspns + closeaspns + middles + bodys + cc + closeaspns + closeaspns + stops + bodys + "<button onclick='introheadoff() || showtoponeon() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='../publicts/index.html' style='text-decoration: none;' target='_parent'>" + dd + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aaone + closeaspns + closeaspns + middles + bodys + bbone + closeaspns + closeaspns + middles + bodys + ccone + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtoptwoon() || introheadoff() || showtoponeoff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddone + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aatwo + closeaspns + closeaspns + middles + bodys + bbtwo + closeaspns + closeaspns + middles + bodys + cctwo + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopthreeon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddtwo + "</a>" + "</button>" + closeaspns + closeaspns + starts + bodys + aathree + closeaspns + closeaspns + middles + bodys + bbthree + closeaspns + closeaspns + middles + bodys + ccthree + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopfouron() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddthree + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aafour + closeaspns + closeaspns + middles + bodys + bbfour + closeaspns + closeaspns + middles + bodys + ccfour + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopfiveon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddfour + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aafive + closeaspns + closeaspns + middles + bodys + bbfive + closeaspns + closeaspns + middles + bodys + ccfive + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopsixon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddfive + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aasix + closeaspns + closeaspns + middles + bodys + bbsix + closeaspns + closeaspns + middles + bodys + ccsix + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopsevenon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopeightoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddsix + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aaseven + closeaspns + closeaspns + middles + bodys + bbseven + closeaspns + closeaspns + middles + bodys + ccseven + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopeighton() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopnineoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddseven + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aaeight + closeaspns + closeaspns + middles + bodys + bbeight + closeaspns + closeaspns + middles + bodys + cceight + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtopnineon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtoptenoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddeight + "</a>" + "</button>" + closeaspns+ closeaspns + starts + bodys + aanine + closeaspns + closeaspns + middles + bodys + bbnine + closeaspns + closeaspns + middles + bodys + ccnine + closeaspns + closeaspns + stops + bodys + "<button onclick='showindow() || showtoptenon() || introheadoff() || showtoponeoff() || showtoptwooff() || showtopthreeoff() || showtopfouroff() || showtopfiveoff() || showtopsixoff() || showtopsevenoff() || showtopeightoff() || showtopnineoff()'>" + "<a href='#' style='text-decoration: none;' target='_parent'>" + ddnine + "</a>" + "</button>" + closeaspns+ closeaspns +"</p>" + "</pre>" + omega + "</body>" + "</html>";

	var paylinkid = "const payment = document.getElementById('paylink');";
	var gotpaylinkid = "payment.href = ";
	var paylinkida = "const payment = document.getElementById('paylinka');";

	var comma = ",";
	var fullstop = ".";

	var displaye = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + fn + paypa + opnb + paylinkid + gotpaylinkid + "'" + paypalurl + "'" + semicolon + clsb + semicolon + "</script>" + "</head>" + "<body onload='showindow()'>" + alpha + "<div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'>" + "<div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'>" + "<div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'>" + "<div class='payintop' style='width: auto; height: auto; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px;'>" + "<pre>" + paypalgreeting + comma + "\r" + "\r" + paypalclient + semicolon + "\r" + "\r" + paypalnote + fullstop + "\r" + "\r" + paypalinfo + "\r" + "\r" + "This Note is By Management" + paypalaccname + "\r" + "\r" + "<button onclick='paypal()'>" + "<a class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>" + "OK" + "</a>" + "</button>" + "</div>" + "</div>" + "</pre>" + "</div>" + "</div>"  + omega + "</body>" + "</html>";

	var displayf = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + fn + paypa + opnb + paylinkid + gotpaylinkid + "'" + pioneerurl + "'" + semicolon + clsb + semicolon + "</script>" + "</head>" + "<body onload='showindow()'>" + alpha + "<div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'>" + "<div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'>" + "<div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'>" + "<div class='payintop' style='width: auto; height: auto; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px;'>" + "<pre>" + pioneergreeting + comma + "\r" + "\r" + pioneerclient + semicolon + "\r" + "\r" + pioneernote + fullstop + "\r" + "\r" + pioneerinfo + "\r" + "\r" + "This Note is By Management" + pioneeraccname + "\r" + "\r" + "<button onclick='paypal()'>" + "<a class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>" + "OK" + "</a>" + "</button>" + "</div>" + "</div>" + "</pre>" + "</div>" + "</div>"  + omega + "</body>" + "</html>";

	var displayg = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + fn + paypa + opnb + paylinkid + gotpaylinkid + "'" + mobilemoneyurl + "'" + semicolon + clsb + semicolon + "</script>" + "</head>" + "<body onload='showindow()'>" + alpha + "<div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'>" + "<div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'>" + "<div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'>" + "<div class='payintop' style='width: auto; height: auto; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px;'>" + "<pre>" + mobilemoneygreeting + comma + "\r" + "\r" + mobilemoneyclient + semicolon + "\r" + "\r" + mobilemoneynote + fullstop + "\r" + "\r" + mobilemoneyinfo + "\r" + "\r" + "This Note is By Management" + mmmaccname + ammaccname + "\r" + "\r"  + "<a class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>" + "<button onclick='paypal()' value='OK'>" + "OK" + "</button>" + "</a>" + "</div>" + "</div>" + "</pre>" + "</div>" + "</div>"  + omega + "</body>" + "</html>";




	var displayh = "<!DOCTYPE html>" + "<html lang='en'>" + "<head>" + "<meta charset='utf8'>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" + "<title>" + "</title>" + "<script>" + fn + paypa + opnb + paylinkid + gotpaylinkid + "'" + mobilemoneyurlto + "'" + semicolon + clsb + semicolon + fn + paypaa + opnb + paylinkida + gotpaylinkid + "'" + mobilemoneyurltoa + "'" + semicolon + clsb + semicolon + "</script>" + "</head>" + "<body onload='showindow()'>" + alpha + "<div class='paymain' style='width: 100%; height: 600px; margin: 0; padding: 0; border: none; background-color: blue;'>" + "<div class='payinmain' style='margin: 0; padding: 0; border: none; width: 100%; height: 100%; background-color: green;'>" + "<div class='paytop' style='margin: 0; padding: 0; border: none; width: auto; height: 100%; background-color: pink;'>" + "<div class='payintop' style='width: auto; height: auto; margin: 0; padding: 0 5%; border: none; display:flex; justify-content:center; align-items:center; flex-direction:column; background-color: dodgerblue; font-family:arial; color:white; font-size: 20px; text-align: center;'>" + "Please Choose Your Favourate Mobile Money Provider" + "\r" + "\r" +  "<pre>" + "<span class='mmone' style=''>" + "<a href='' class='mmonea' style='background-color: #ffa587; border-radius: 20px/24px; padding: 5px 7px 5px 7px; text-decoration: none;' id='paylink'>" + "<button onclick='paypal()' style='background-color: rgba(255,255,255,0.1); border: none; outline: none;'>" + "AirtelMobileMoney" + "</button>" + "</a>" + "</span>" + "\r" + "\r" + "<span class='mmtwo' style=''>" + "<a href='' class='mmtwoa' style='background-color: yellow; border-radius: 20px/24px; padding: 5px 10px 5px 10px; text-decoration: none;' id='paylinka'>" + "<button onclick='paypala()' style='background-color: rgba(255,255,255,0.1); border: none; outline: none;'>" + "MTN MobileMoney" + "</button>" + "</a>" + "</span>" + "\r" + "\r" + "Click Atleast Any button Above to Pay" + "\r" + "\r" + "<button onclick='paypal()' disabled>" + "<a disabled class='paylink' id='paylink' href='' style='background-color: ; padding: 0px; margin: 0; text-decoration: none;' target='_blank'>" + "Thank You!" + "</a>" + "</button>" + "</div>" + "</div>" + "</pre>" + "</div>" + "</div>"  + omega + "</body>" + "</html>";



	  fs.writeFile(file, display, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(file, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	  	}

	  });

	//removed fs.readFile

	 fs.writeFile(filea, displaya, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(filea, function(err, contenta) {
		  if (err) {
			console.log(`File not Found ${file}`);
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(contenta);
			}
		}
	});


	  	}

	  });

	//removed fs.readFile

	fs.writeFile(filee, displaye, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(filee, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	  	}

	  });

	  //removed fs.readFile


	      fs.writeFile(filef, displayf, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(filef, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	  	}

	  });

	  //removed fs.readFile


	   fs.writeFile(fileg, displayg, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(fileg, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	  	}

	  });

	  //removed fs.readFile

	  fs.writeFile(fileh, displayh, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(fileh, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	  	}

	  });

	  //removed fs.readFile



            res.end(form1);
        });
    }
    else {
        res.end(form1);
    }
});
server.listen(3000, 'localhost', () => {
	console.log('Server 1 Listening at port 3000:');
});
//SERVER TWO STARTS:
const servertwo = http.createServer((req, res) => {
	if (req.method === "POST") {
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;
	    // 1. User Category data memory:
	var captureduser = "New user logged in at "
	var suffixinfom = "with this details "



		//Login data memory:
	var msga = "<div>";
	var clientname = `${result.clientname}`;
	var clientphonenumber = `${result.clientphonenumber}`;
	var from = `${result.from}`;
	var to = `${result.to}`;
	var recieptno = `${result.recieptno}`;
	var currentDate = new Date();
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var company = `${result.company}`;
	var adminpasscode = `${result.adminpasscode}`;
	var recieptemail = `${result.recieptemail}`;
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

	//conditional form rendering to user section

	  // 1. for user category
	  if (clientphonenumber == "" || recieptno == "") {

	  	/*fs.readFile(filee, function(err, content) {
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
	  */

	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:3050/' height='630px' width='100%'>" + "</iframe>");
				res.end();

	  } else if (company == one && adminpasscode == two) {
	  res.writeHead(200, {"Content-type": "text/html"});

	  	res.end(htmlb);



	   }  else {

	 res.writeHead(200, {"Content-type": "text/html"});
	  	res.end(htmla);

	  };


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
	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);
				});
	} else {
			res.statusCode = 200;
			res.end(htmla);
		}
});
servertwo.listen(3010, 'localhost', () => {
	console.log('Server 2 Listening at port 3010:');
});

//SERVER THREE STARTS:
const serverthree = http.createServer((req, res) => {
	if (req.method === "POST") {
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;
	    // 1. User Category data memory:
	var captureduser = "New user logged in at "
	var suffixinfom = "with this details "



		//Login data memory:
	var msga = "<div>";
	var clientname = `${result.clientname}`;
	var clientphonenumber = `${result.clientphonenumber}`;
	var from = `${result.from}`;
	var to = `${result.to}`;
	var recieptno = `${result.recieptno}`;
	var currentDate = new Date();
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var company = `${result.company}`;
	var adminpasscode = `${result.adminpasscode}`;
	var recieptemail = `${result.recieptemail}`;
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

	//conditional form rendering to user section

	  // 1. for user category
	  if (clientphonenumber == "" || recieptno == "") {

	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:3060/' height='630px' width='100%'>" + "</iframe>");
				res.end();

	  } else if (company == one && adminpasscode == two) {
	  res.writeHead(200, {"Content-type": "text/html"});

	  	res.end(htmlb);

	   }  else {

	 res.writeHead(200, {"Content-type": "text/html"});
	  	res.end(htmla);

	  };
	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);
				});
	} else {
			res.statusCode = 200;
			res.end(htmla);
		}
});
serverthree.listen(3020, 'localhost', () => {
	console.log('Server 3 Listening at port 3020:');
});

//SERVER FOUR STARTS:
const serverfour = http.createServer((req, res) => {
	if (req.method === "POST") {
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;
	    // 1. User Category data memory:
	var captureduser = "New user logged in at "
	var suffixinfom = "with this details "



		//Login data memory:
	var msga = "<div>";
	var clientname = `${result.clientname}`;
	var clientphonenumber = `${result.clientphonenumber}`;
	var from = `${result.from}`;
	var to = `${result.to}`;
	var recieptno = `${result.recieptno}`;
	var currentDate = new Date();
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var company = `${result.company}`;
	var adminpasscode = `${result.adminpasscode}`;
	var recieptemail = `${result.recieptemail}`;
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

	//conditional form rendering to user section

	  // 1. for user category
	  if (clientphonenumber == "" || recieptno == "") {


	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:3070/' height='630px' width='100%'>" + "</iframe>");
				res.end();

	  } else if (company == one && adminpasscode == two) {
	  res.writeHead(200, {"Content-type": "text/html"});

	  	res.end(htmlb);



	   }  else {

	 res.writeHead(200, {"Content-type": "text/html"});
	  	res.end(htmla);

	  };



	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);
				});
	} else {
			res.statusCode = 200;
			res.end(htmla);
		}
});
serverfour.listen(3030, 'localhost', () => {
	console.log('Server 4 Listening at port 3030:');
});



//SERVER 5 STARTED:

const serverfive = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;

fs.readFile(filee, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 serverfive.listen(3050, 'localhost', () => {
	console.log('Server 5 Listening at port 3050:');
});

 //SERVER 6 STARTED:

const serversix = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filef =	__dirname + "/publicf/" + path;

fs.readFile(filef, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 serversix.listen(3060, 'localhost', () => {
	console.log('Server 6 Listening at port 3060:');
});

  //SERVER 7 STARTED:

const serverseven = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let fileg =	__dirname + "/publicg/" + path;

fs.readFile(fileg, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 serverseven.listen(3070, 'localhost', () => {
	console.log('Server 7 Listening at port 3070:');
});

//SERVER 8 STARTED:

const servereight = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let fileh =	__dirname + "/publich/" + path;

fs.readFile(fileh, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 servereight.listen(3080, 'localhost', () => {
	console.log('Server 8 Listening at port 3080:');
});


  //SERVER NINE STARTS:
const servernine = http.createServer((req, res) => {
	if (req.method === "POST") {
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;
	    // 1. User Category data memory:
	var captureduser = "New user logged in at "
	var suffixinfom = "with this details "
		//Login data memory:
	var msga = "<div>";
	var clientname = `${result.clientname}`;
	var clientphonenumber = `${result.clientphonenumber}`;
	var Signin = `${result.Signin}`;
	var Signedin = `${result.Signedin}`;
	var key = `${result.key}`;
	var Validatorone = `${result.Validatorone}`;
	var Validatortwo = `${result.Validatortwo}`;
	var currentDate = new Date();
	var companykey = "`89@42#51`.~'."
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var email = `${result.newUserEmail}`;
	var phone = `${result.newUserPhoneNumber}`;
	var emaila = `${result.UserEmail}`;
	var phonea = `${result.UserPhoneNumber}`;
	var e = `${result.pntdba}`;
	var f = `${result.lstdba}`;
	var omega = "</div>";
	var head = "Route:";
	var one = "Bus Brand:";
	var two = "Number Plate:";
	var three = "Conductor Name:";
	var four = "Phone Number";
	var five = "Leaving Status:";
	//conditional form rendering to user section
	  // 1. for user category
	  if (Signin == "Signin") {
	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:4000/' height='630px' width='100%' >" + "</iframe>");
				res.end();

	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);

		} else if (Signedin == "Signin.") {
	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='https://www.travofast.com/eastern.html' height='630px' width='100%' >" + "</iframe>");
				res.end();
	  } else if (key == companykey) {
	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:4020/' height='630px' width='100%' >" + "</iframe>");
				res.end();
	  } else {
	 res.writeHead(200, {"Content-type": "text/html"});
	  	res.end("Blocked Access! Start Again");
	  };
	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);
				});

	} else {
			res.statusCode = 200;
			res.end(logina);
		}




});
servernine.listen(3090, 'localhost', () => {
	console.log('Server 9 Listening at port 3090:');
});

//SERVER 10 STARTED:

const serverten = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filebegin =	__dirname + "/publicbegin/" + path;

fs.readFile(filebegin, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 serverten.listen(4000, 'localhost', () => {
	console.log('Server 10 Listening at port 4000:');
});


//SERVER 11 STARTED:

const servereleven = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;

fs.readFile(filee, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
			}
		}
	});


	});

	 servereleven.listen(4010, 'localhost', () => {
	console.log('Server 11 Listening at port 4010:');
});


//SERVER TWELVE STARTS:
const servertwelve = http.createServer((req, res) => {
	if (req.method === "POST") {
		 collectRequestData(req, result => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "index.html";
	}
	let file = __dirname + "/public/" + path;
	let filee =	__dirname + "/publice/" + path;
	    // 1. User Category data memory:
	var captureduser = "New user logged in at "
	var suffixinfom = "with this details "
		//Login data memory:
	var msga = "<div>";
	var company = `${result.company}`;
	var password = `${result.password}`;
	var from = `${result.from}`;
	var to = `${result.to}`;
	var recieptno = `${result.recieptno}`;
	var currentDate = new Date();
	var msgb = "</div>";
	//Dashboard Data memory:
	var alpha = "<div>";
	var company = `${result.company}`;
	var adminpasscode = `${result.adminpasscode}`;
	var recieptemail = `${result.recieptemail}`;
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
	//conditional form rendering to user section
	  // 1. for user category
	  if (company == "Nile Bus" && password == "Tc25.gRz@mPug+") {
	  	res.writeHead(200, {"Content-type": "text/html"});
				res.write("<iframe src='http://localhost:3000/' height='580px' width='100%'>" + "</iframe>");
				res.end();
	  } else if (company == one && adminpasscode == two) {
	  res.writeHead(200, {"Content-type": "text/html"});
	  	res.end(htmlb);
	   }  else {
	 res.writeHead(200, {"Content-type": "text/html"});
	    res.write("<h1 style='border: 1px solid red; color: brown; font-size: 19px; font-weight: lighter;'>Wrong Login Details,  Retry;</h1>")
	  	res.end(loginb);
	  };
	  console.log(captureduser + currentDate + suffixinfom);
	  console.log(result);
				});
	} else {
			res.statusCode = 200;
			res.end(loginb);
		}
});
servertwelve.listen(4020, 'localhost', () => {
	console.log('Server 12 Listening at port 4020:');
});

//SERVER 13 STARTED:

const serverthirteen = http.createServer((req, res) => {

	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "eastern.html";
	}
	let file = __dirname + "/public/" + path;
	let filedir =	__dirname + "/publicdir/" + path;

fs.readFile(filedir, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.end();
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "eastern.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.end(content);
				break
				case "style.css":
				res.writeHead(200, {"Content-type": "text/css"});
				res.end(content);
			}
		}
	});


	});

	 serverthirteen.listen(4030, 'localhost', () => {
	console.log('Server 13 Listening at port 4030:');
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
