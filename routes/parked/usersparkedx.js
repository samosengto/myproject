
const express = require("express");
const router = express.Router();
const fs = require("fs");
const url = require("url");
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
router.get("/dashboards/componedbx", (req, res) => {

	res.render("users/dashboards/componedbx");

});

router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var bee = "jon";
var few = "sam";
/*Company One*/
/*//Parked Memory //*/

var pcompname = req.body.pcompname; 
 
var stimeonepa = req.body.stimeonepa;
var srouteonepa = req.body.srouteonepa;
var sbrandonepa = req.body.sbrandonepa;
var snumberonepa = req.body.snumberonepa;
var slocationonepa = req.body.slocationonepa;
var sparkonepa = req.body.sparkonepa;
var smoveonepa = req.body.smoveonepa;
var slightonepa = " ";
var sboardonepa = req.body.sboardonepa;

var stimetwo = req.body.stimetwopb;
var sroutetwo = req.body.sroutetwopb;
var sbrandtwo = req.body.sbrandtwopb;
var snumbertwo = req.body.snumbertwopb;
var slocationtwo = req.body.slocationtwopb;
var sparktwo = req.body.sparktwopb;
var spnotwo = req.body.spnotwopb;
var smovetwo = req.body.smovetwopb;
var slighttwo = " ";
var sboardtwo = req.body.sboardtwopb;

var stimethree = req.body.stimethreepc;
var sroutethree = req.body.sroutethreepc;
var sbrandthree = req.body.sbrandthreepc;
var snumberthree = req.body.snumberthreepc;
var slocationthree = req.body.slocationthreepc;
var sparkthree = req.body.sparkthreepc;
var spnothree = req.body.spnothreepc;
var smovethree = req.body.smovethreepc;
var slightthree = " ";
var sboardthree = req.body.sboardthreepc;

var stimefour = req.body.stimefourpd;
var sroutefour = req.body.sroutefourpd;
var sbrandfour = req.body.sbrandfourpd;
var snumberfour = req.body.snumberfourpd;
var slocationfour = req.body.slocationfourpd;
var sparkfour = req.body.sparkfourpd;
var spnofour = req.body.spnofourpd;
var smovefour = req.body.smovefourpd;
var slightfour = " ";
var sboardfour = req.body.sboardfourpd;

var stimefive = req.body.stimefivepe;
var sroutefive = req.body.sroutefivepe;
var sbrandfive = req.body.sbrandfivepe;
var snumberfive = req.body.snumberfivepe;
var slocationfive = req.body.slocationfivepe;
var sparkfive = req.body.sparkfivepe;
var spnofive = req.body.spnofivepe;
var smovefive = req.body.smovefivepe;
var slightfive = " ";
var sboardfive = req.body.sboardfivepe;

var stimesix = req.body.stimesixpf;
var sroutesix = req.body.sroutesixpf;
var sbrandsix = req.body.sbrandsixpf;
var snumbersix = req.body.snumbersixpf;
var slocationsix = req.body.slocationsixpf;
var sparksix = req.body.sparksixpf;
var spnosix = req.body.spnosixpf;
var smovesix = req.body.smovesixpf;
var slightsix = " ";
var sboardsix = req.body.sboardsixpf;

var stimeseven = req.body.stimesevenpg;
var srouteseven = req.body.sroutesevenpg;
var sbrandseven = req.body.sbrandsevenpg;
var snumberseven = req.body.snumbersevenpg;
var slocationseven = req.body.slocationsevenpg;
var sparkseven = req.body.sparksevenpg;
var spnoseven = req.body.spnosevenpg;
var smoveseven = req.body.smovesevenpg;
var slightseven = " ";
var sboardseven = req.body.sboardsevenpg;

var stimeeight = req.body.stimeeightph;
var srouteeight = req.body.srouteeightph;
var sbrandeight = req.body.sbrandeightph;
var snumbereight = req.body.snumbereightph;
var slocationeight = req.body.slocationeightph;
var sparkeight = req.body.sparkeightph;
var spnoeight = req.body.spnoeightph;
var smoveeight = req.body.smoveeightph;
var slighteight = " ";
var sboardeight = req.body.sboardeightph;

var stimenine = req.body.stimeninepi;
var sroutenine = req.body.srouteninepi;
var sbrandnine = req.body.sbrandninepi;
var snumbernine = req.body.snumberninepi;
var slocationnine = req.body.slocationninepi;
var sparknine = req.body.sparkninepi;
var spnonine = req.body.spnoninepi;
var smovenine = req.body.smoveninepi;
var slightnine = " ";
var sboardnine = req.body.sboardninepi;

var stimeten = req.body.stimetenpj;
var srouteten = req.body.sroutetenpj;
var sbrandten = req.body.sbrandtenpj;
var snumberten = req.body.snumbertenpj;
var slocationten = req.body.slocationtenpj;
var sparkten = req.body.sparktenpj;
var spnoten = req.body.spnotenpj;
var smoveten = req.body.smovetenpj;
var slightten = " ";
var sboardten = req.body.sboardtenpj;

var stimeeleven = req.body.stimeelevenpk;
var srouteeleven = req.body.srouteelevenpk;
var sbrandeleven = req.body.sbrandelevenpk;
var snumbereleven = req.body.snumberelevenpk;
var slocationeleven = req.body.slocationelevenpk;
var sparkeleven = req.body.sparkelevenpk;
var spnoeleven = req.body.spnoelevenpk;
var smoveeleven = req.body.smoveelevenpk;
var slighteleven = " ";
var sboardeleven = req.body.sboardelevenpk;

var stimetwelve = req.body.stimetwelvepl;
var sroutetwelve = req.body.sroutetwelvepl;
var sbrandtwelve = req.body.sbrandtwelvepl;
var snumbertwelve = req.body.snumbertwelvepl;
var slocationtwelve = req.body.slocationtwelvepl;
var sparktwelve = req.body.sparktwelvepl;
var spnotwelve = req.body.spnotwelvepl;
var smovetwelve = req.body.smovetwelvepl;
var slighttwelve = " ";
var sboardtwelve = req.body.sboardtwelvepl;

var stimethirteen = req.body.stimethirteenpm;
var sroutethirteen = req.body.sroutethirteenpm;
var sbrandthirteen = req.body.sbrandthirteenpm;
var snumberthirteen = req.body.snumberthirteenpm;
var slocationthirteen = req.body.slocationthirteenpm;
var sparkthirteen = req.body.sparkthirteenpm;
var spnothirteen = req.body.spnothirteenpm;
var smovethirteen = req.body.smovethirteenpm;
var slightthirteen = " ";
var sboardthirteen = req.body.sboardthirteenpm;

var stimefourteen = req.body.stimefourteenpn;
var sroutefourteen = req.body.sroutefourteenpn;
var sbrandfourteen = req.body.sbrandfourteenpn;
var snumberfourteen = req.body.snumberfourteenpn;
var slocationfourteen = req.body.slocationfourteenpn;
var sparkfourteen = req.body.sparkfourteenpn;
var spnofourteen = req.body.spnofourteenpn;
var smovefourteen = req.body.smovefourteenpn;
var slightfourteen = " ";
var sboardfourteen = req.body.sboardfourteenpn;

var stimefifeteen = req.body.stimefifeteenpo;
var sroutefifeteen = req.body.sroutefifeteenpo;
var sbrandfifeteen = req.body.sbrandfifeteenpo;
var snumberfifeteen = req.body.snumberfifeteenpo;
var slocationfifeteen = req.body.slocationfifeteenpo;
var sparkfifeteen = req.body.sparkfifeteenpo;
var spnofifeteen = req.body.spnofifeteenpo;
var smovefifeteen = req.body.smovefifeteenpo;
var slightfifeteen = " ";
var sboardfifeteen = req.body.sboardfifeteenpo;

var stimesixteen = req.body.stimesixteenpp;
var sroutesixteen = req.body.sroutesixteenpp;
var sbrandsixteen = req.body.sbrandsixteenpp;
var snumbersixteen = req.body.snumbersixteenpp;
var slocationsixteen = req.body.slocationsixteenpp;
var sparksixteen = req.body.sparksixteenpp;
var spnosixteen = req.body.spnosixteenpp;
var smovesixteen = req.body.smovesixteenpp;
var slightsixteen = " ";
var sboardsixteen = req.body.sboardsixteenpp;

var stimeseventeen = req.body.stimeseventeenpq;
var srouteseventeen = req.body.srouteseventeenpq;
var sbrandseventeen = req.body.sbrandseventeenpq;
var snumberseventeen = req.body.snumberseventeenpq;
var slocationseventeen = req.body.slocationseventeenpq;
var sparkseventeen = req.body.sparkseventeenpq;
var spnoseventeen = req.body.spnoseventeenpq;
var smoveseventeen = req.body.smoveseventeen;
var slightseventeen = " ";
var sboardseventeen = req.body.sboardseventeenpq;

var stimeeighteen = req.body.stimeeighteenpr;
var srouteeighteen = req.body.srouteeighteenpr;
var sbrandeighteen = req.body.sbrandeighteenpr;
var snumbereighteen = req.body.snumbereighteenpr;
var slocationeighteen = req.body.slocationeighteenpr;
var sparkeighteen = req.body.sparkeighteenpr;
var spnoeighteen = req.body.spnoeighteenpr;
var smoveeighteen = req.body.smoveeighteenpr;
var slighteighteen = " ";
var sboardeighteen = req.body.sboardeighteenpr;

var stimenineteen = req.body.stimenineteenps;
var sroutenineteen = req.body.sroutenineteenps;
var sbrandnineteen = req.body.sbrandnineteenps;
var snumbernineteen = req.body.snumbernineteenps;
var slocationnineteen = req.body.slocationnineteenps;
var sparknineteen = req.body.sparknineteenps;
var spnonineteen = req.body.spnonineteenps;
var smovenineteen = req.body.smovenineteenps;
var slightnineteen = " ";
var sboardnineteen = req.body.sboardnineteenps;

var stimetwenty = req.body.stimetwentypt;
var sroutetwenty = req.body.sroutetwentypt;
var sbrandtwenty = req.body.sbrandtwentypt;
var snumbertwenty = req.body.snumbertwentypt;
var slocationtwenty = req.body.slocationtwentypt;
var sparktwenty = req.body.sparktwentypt;
var spnotwenty = req.body.spnotwentypt;
var smovetwenty = req.body.smovetwentypt;
var slighttwenty = " ";
var sboardtwenty = req.body.sboardtwentypt;

var stimetwentyone = req.body.stimetwentyonepu;
var sroutetwentyone = req.body.sroutetwentyonepu;
var sbrandtwentyone = req.body.sbrandtwentyonepu;
var snumbertwentyone = req.body.snumbertwentyonepu;
var slocationtwentyone = req.body.slocationtwentyonepu;
var sparktwentyone = req.body.sparktwentyonepu;
var spnotwentyone = req.body.spnotwentyonepu;
var smovetwentyone = req.body.smovetwentyonepu;
var slighttwentyone = " ";
var sboardtwentyone = req.body.sboardtwentyonepu;

var stimetwentytwo = req.body.stimetwentytwopv;
var sroutetwentytwo = req.body.sroutetwentytwopv;
var sbrandtwentytwo = req.body.sbrandtwentytwopv;
var snumbertwentytwo = req.body.snumbertwentytwopv;
var slocationtwentytwo = req.body.slocationtwentytwopv;
var sparktwentytwo = req.body.sparktwentytwopv;
var spnotwentytwo = req.body.spnotwentytwopv;
var smovetwentytwo = req.body.smovetwentytwopv;
var slighttwentytwo = " ";
var sboardtwentytwo = req.body.sboardtwentytwopv;

var stimetwentythree = req.body.stimetwentythreepw;
var sroutetwentythree = req.body.sroutetwentythreepw;
var sbrandtwentythree = req.body.sbrandtwentythreepw;
var snumbertwentythree = req.body.snumbertwentythreepw;
var slocationtwentythree = req.body.slocationtwentythreepw;
var sparktwentythree = req.body.sparktwentythreepw;
var spnotwentythree = req.body.spnotwentythreepw;
var smovetwentythree = req.body.smovetwentythreepw;
var slighttwentythree = " ";
var sboardtwentythree = req.body.sboardtwentythreepw;

var stimetwentyfour = req.body.stimetwentyfourpx;
var sroutetwentyfour = req.body.sroutetwentyfourpx;
var sbrandtwentyfour = req.body.sbrandtwentyfourpx;
var snumbertwentyfour = req.body.snumbertwentyfourpx;
var slocationtwentyfour = req.body.slocationtwentyfourpx;
var sparktwentyfour = req.body.sparktwentyfourpx;
var spnotwentyfour = req.body.spnotwentyfourpx;
var smovetwentyfour = req.body.smovetwentyfourpx;
var slighttwentyfour = " ";
var sboardtwentyfour = req.body.sboardtwentyfourpx;

var stimetwentyfive = req.body.stimetwentyfivepy;
var sroutetwentyfive = req.body.sroutetwentyfivepy;
var sbrandtwentyfive = req.body.sbrandtwentyfivepy;
var snumbertwentyfive = req.body.snumbertwentyfivepy;
var slocationtwentyfive = req.body.slocationtwentyfivepy;
var sparktwentyfive = req.body.sparktwentyfivepy;
var spnotwentyfive = req.body.spnotwentyfivepy;
var smovetwentyfive = req.body.smovetwentyfivepy;
var slighttwentyfive = " ";
var sboardtwentyfive = req.body.sboardtwentyfivepy;

var stimetwentysix = req.body.stimetwentysixpz;
var sroutetwentysix = req.body.sroutetwentysixpz;
var sbrandtwentysix = req.body.sbrandtwentysixpz;
var snumbertwentysix = req.body.snumbertwentysixpz;
var slocationtwentysix = req.body.slocationtwentysixpz;
var sparktwentysix = req.body.sparktwentysixpz;
var spnotwentysix = req.body.spnotwentysixpz;
var smovetwentysix = req.body.smovetwentysixpz;
var slighttwentysix = " ";
var sboardtwentysix = req.body.sboardtwentysixpz;

var stimetwentyseven = req.body.stimetwentysevenpaa;
var sroutetwentyseven = req.body.sroutetwentysevenpaa;
var sbrandtwentyseven = req.body.sbrandtwentysevenpaa;
var snumbertwentyseven = req.body.snumbertwentysevenpaa;
var slocationtwentyseven = req.body.slocationtwentysevenpaa;
var sparktwentyseven = req.body.sparktwentysevenpaa;
var spnotwentyseven = req.body.spnotwentysevenpaa;
var smovetwentyseven = req.body.smovetwentysevenpaa;
var slighttwentyseven = " ";
var sboardtwentyseven = req.body.sboardtwentysevenpaa;

var stimetwentyeight = req.body.stimetwentyeightpbb;
var sroutetwentyeight = req.body.sroutetwentyeightpbb;
var sbrandtwentyeight = req.body.sbrandtwentyeightpbb;
var snumbertwentyeight = req.body.snumbertwentyeightpbb;
var slocationtwentyeight = req.body.slocationtwentyeightpbb;
var sparktwentyeight = req.body.sparktwentyeightpbb;
var spnotwentyeight = req.body.spnotwentyeightpbb;
var smovetwentyeight = req.body.smovetwentyeightpbb;
var slighttwentyeight = " ";
var sboardtwentyeight = req.body.sboardtwentyeightpbb;

var stimetwentynine = req.body.stimetwentyninepcc;
var sroutetwentynine = req.body.sroutetwentyninepcc;
var sbrandtwentynine = req.body.sbrandtwentyninepcc;
var snumbertwentynine = req.body.snumbertwentyninepcc;
var slocationtwentynine = req.body.slocationtwentyninepcc;
var sparktwentynine = req.body.sparktwentyninepcc;
var spnotwentynine = req.body.spnotwentyninepcc;
var smovetwentynine = req.body.smovetwentyninepcc;
var slighttwentynine = " ";
var sboardtwentynine = req.body.sboardtwentyninepcc;

var stimethirty = req.body.stimethirtypdd;
var sroutethirty = req.body.sroutethirtypdd;
var sbrandthirty = req.body.sbrandthirtypdd;
var snumberthirty = req.body.snumberthirtypdd;
var slocationthirty = req.body.slocationthirtypdd;
var sparkthirty = req.body.sparkthirtypdd;
var spnothirty = req.body.spnothirtypdd;
var smovethirty = req.body.smovethirtypdd;
var slightthirty = " ";
var sboardthirty = req.body.sboardthirtypdd;

var stimethirtyone = req.body.stimethirtyonepee;
var sroutethirtyone = req.body.sroutethirtyonepee;
var sbrandthirtyone = req.body.sbrandthirtyonepee;
var snumberthirtyone = req.body.snumberthirtyonepee;
var slocationthirtyone = req.body.slocationthirtyonepee;
var sparkthirtyone = req.body.sparkthirtyonepee;
var spnothirtyone = req.body.spnothirtyonepee;
var smovethirtyone = req.body.smovethirtyonepee;
var slightthirtyone = " ";
var sboardthirtyone = req.body.sboardthirtyonepee;

var stimethirtytwo = req.body.stimethirtytwopff;
var sroutethirtytwo = req.body.sroutethirtytwopff;
var sbrandthirtytwo = req.body.sbrandthirtytwopff;
var snumberthirtytwo = req.body.snumberthirtytwopff;
var slocationthirtytwo = req.body.slocationthirtytwopff;
var sparkthirtytwo = req.body.sparkthirtytwopff;
var spnothirtytwo = req.body.spnothirtytwopff;
var smovethirtytwo = req.body.smovethirtytwopff;
var slightthirtytwo = " ";
var sboardthirtytwo = req.body.sboardthirtytwopff;

var stimethirtythree = req.body.stimethirtythreepgg;
var sroutethirtythree = req.body.sroutethirtythreepgg;
var sbrandthirtythree = req.body.sbrandthirtythreepgg;
var snumberthirtythree = req.body.snumberthirtythreepgg;
var slocationthirtythree = req.body.slocationthirtythreepgg;
var sparkthirtythree = req.body.sparkthirtythreepgg;
var spnothirtythree = req.body.spnothirtythreepgg;
var smovethirtythree = req.body.smovethirtythreepgg;
var slightthirtythree = " ";
var sboardthirtythree = req.body.sboardthirtythreepgg;

var stimethirtyfour = req.body.stimethirtyfourphh;
var sroutethirtyfour = req.body.sroutethirtyfourphh;
var sbrandthirtyfour = req.body.sbrandthirtyfourphh;
var snumberthirtyfour = req.body.snumberthirtyfourphh;
var slocationthirtyfour = req.body.slocationthirtyfourphh;
var sparkthirtyfour = req.body.sparkthirtyfourphh;
var spnothirtyfour = req.body.spnothirtyfourphh;
var smovethirtyfour = req.body.smovethirtyfourphh;
var slightthirtyfour = " ";
var sboardthirtyfour = req.body.sboardthirtyfourphh;

var stimethirtyfive = req.body.stimethirtyfivepii;
var sroutethirtyfive = req.body.sroutethirtyfivepii;
var sbrandthirtyfive = req.body.sbrandthirtyfivepii;
var snumberthirtyfive = req.body.snumberthirtyfivepii;
var slocationthirtyfive = req.body.slocationthirtyfivepii;
var sparkthirtyfive = req.body.sparkthirtyfivepii;
var spnothirtyfive = req.body.spnothirtyfivepii;
var smovethirtyfive = req.body.smovethirtyfivepii;
var slightthirtyfive = " ";
var sboardthirtyfive = req.body.sboardthirtyfivepii;

var stimethirtysix = req.body.stimethirtysixpjj;
var sroutethirtysix = req.body.sroutethirtysixpjj;
var sbrandthirtysix = req.body.sbrandthirtysixpjj;
var snumberthirtysix = req.body.snumberthirtysixpjj;
var slocationthirtysix = req.body.slocationthirtysixpjj;
var sparkthirtysix = req.body.sparkthirtysixpjj;
var spnothirtysix = req.body.spnothirtysixpjj;
var smovethirtysix = req.body.smovethirtysixpjj;
var slightthirtysix = " ";
var sboardthirtysix = req.body.sboardthirtysixpjj;

var stimethirtyseven = req.body.stimethirtysevenpkk;
var sroutethirtyseven = req.body.sroutethirtysevenpkk;
var sbrandthirtyseven = req.body.sbrandthirtysevenpkk;
var snumberthirtyseven = req.body.snumberthirtysevenpkk;
var slocationthirtyseven = req.body.slocationthirtysevenpkk;
var sparkthirtyseven = req.body.sparkthirtysevenpkk;
var spnothirtyseven = req.body.spnothirtysevenpkk;
var smovethirtyseven = req.body.smovethirtysevenpkk;
var slightthirtyseven = " ";
var sboardthirtyseven = req.body.sboardthirtysevenpkk;

var stimethirtyeight = req.body.stimethirtyeightpll;
var sroutethirtyeight = req.body.sroutethirtyeightpll;
var sbrandthirtyeight = req.body.sbrandthirtyeightpll;
var snumberthirtyeight = req.body.snumberthirtyeightpll;
var slocationthirtyeight = req.body.slocationthirtyeightpll;
var sparkthirtyeight = req.body.sparkthirtyeightpll;
var spnothirtyeight = req.body.spnothirtyeightpll;
var smovethirtyeight = req.body.smovethirtyeightpll;
var slightthirtyeight = " ";
var sboardthirtyeight = req.body.sboardthirtyeightpll;

var stimethirtynine = req.body.stimethirtyninepmm;
var sroutethirtynine = req.body.sroutethirtyninepmm;
var sbrandthirtynine = req.body.sbrandthirtyninepmm;
var snumberthirtynine = req.body.snumberthirtyninepmm;
var slocationthirtynine = req.body.slocationthirtyninepmm;
var sparkthirtynine = req.body.sparkthirtyninepmm;
var spnothirtynine = req.body.spnothirtyninepmm;
var smovethirtynine = req.body.smovethirtyninepmm;
var slightthirtynine = " ";
var sboardthirtynine = req.body.sboardthirtyninepmm;

var stimefourty = req.body.stimefourtypnn;
var sroutefourty = req.body.sroutefourtypnn;
var sbrandfourty = req.body.sbrandfourtypnn;
var snumberfourty = req.body.snumberfourtypnn;
var slocationfourty = req.body.slocationfourtypnn;
var sparkfourty = req.body.sparkfourtypnn;
var spnofourty = req.body.spnofourtypnn;
var smovefourty = req.body.smovefourtypnn;
var slightfourty  = " ";
var sboardfourty = req.body.sboardfourtypnn;

var stimefourtyone = req.body.stimefourtyonepoo;
var sroutefourtyone = req.body.sroutefourtyonepoo;
var sbrandfourtyone = req.body.sbrandfourtyonepoo;
var snumberfourtyone = req.body.snumberfourtyonepoo;
var slocationfourtyone = req.body.slocationfourtyonepoo;
var sparkfourtyone = req.body.sparkfourtyonepoo;
var spnofourtyone = req.body.spnofourtyonepoo;
var smovefourtyone = req.body.smovefourtyonepoo;
var slightfourtyone  = " ";
var sboardfourtyone = req.body.sboardfourtyonepoo;

var stimefourtytwo = req.body.stimefourtytwoppp;
var sroutefourtytwo = req.body.sroutefourtytwoppp;
var sbrandfourtytwo = req.body.sbrandfourtytwoppp;
var snumberfourtytwo = req.body.snumberfourtytwoppp;
var slocationfourtytwo = req.body.slocationfourtytwoppp;
var sparkfourtytwo = req.body.sparkfourtytwoppp;
var spnofourtytwo = req.body.spnofourtytwoppp;
var smovefourtytwo = req.body.smovefourtytwoppp;
var slightfourtytwo  = " ";
var sboardfourtytwo = req.body.sboardfourtytwoppp;

var stimefourtythree = req.body.stimefourtythreepqq;
var sroutefourtythree = req.body.sroutefourtythreepqq;
var sbrandfourtythree = req.body.sbrandfourtythreepqq;
var snumberfourtythree = req.body.snumberfourtythreepqq;
var slocationfourtythree = req.body.slocationfourtythreepqq;
var sparkfourtythree = req.body.sparkfourtythreepqq;
var spnofourtythree = req.body.spnofourtythreefourtythreepqq;
var smovefourtythree = req.body.smovefourtythreepqq;
var slightfourtythree  = " ";
var sboardfourtythree = req.body.sboardfourtythreepqq;

var stimefourtyfour = req.body.stimefourtyfourprr;
var sroutefourtyfour = req.body.sroutefourtyfourprr;
var sbrandfourtyfour = req.body.sbrandfourtyfourprr;
var snumberfourtyfour = req.body.snumberfourtyfourprr;
var slocationfourtyfour = req.body.slocationfourtyfourprr;
var sparkfourtyfour = req.body.sparkfourtyfourprr;
var spnofourtyfour = req.body.spnofourtyfourprr;
var smovefourtyfour = req.body.smovefourtyfourprr;
var slightfourtyfour  = " ";
var sboardfourtyfour = req.body.sboardfourtyfourprr;

var stimefourtyfive = req.body.stimefourtyfivepss;
var sroutefourtyfive = req.body.sroutefourtyfivepss;
var sbrandfourtyfive = req.body.sbrandfourtyfivepss;
var snumberfourtyfive = req.body.snumberfourtyfivepss;
var slocationfourtyfive = req.body.slocationfourtyfivepss;
var sparkfourtyfive = req.body.sparkfourtyfivepss;
var spnofourtyfive = req.body.spnofourtyfivepss;
var smovefourtyfive = req.body.smovefourtyfivepss;
var slightfourtyfive  = " ";
var sboardfourtyfive = req.body.sboardfourtyfivepss;

var stimefourtysix = req.body.stimefourtysixptt;
var sroutefourtysix = req.body.sroutefourtysixptt;
var sbrandfourtysix = req.body.sbrandfourtysixptt;
var snumberfourtysix = req.body.snumberfourtysixptt;
var slocationfourtysix = req.body.slocationfourtysixptt;
var sparkfourtysix = req.body.sparkfourtysixptt;
var spnofourtysix = req.body.spnofourtysixptt;
var smovefourtysix = req.body.smovefourtysixptt;
var slightfourtysix  = " ";
var sboardfourtysix = req.body.sboardfourtysixptt;

var stimefourtyseven = req.body.stimefourtysevenpuu;
var sroutefourtyseven = req.body.sroutefourtysevenpuu;
var sbrandfourtyseven = req.body.sbrandfourtysevenpuu;
var snumberfourtyseven = req.body.snumberfourtysevenpuu;
var slocationfourtyseven = req.body.slocationfourtysevenpuu;
var sparkfourtyseven = req.body.sparkfourtysevenpuu;
var spnofourtyseven = req.body.spnofourtysevenpuu;
var smovefourtyseven = req.body.smovefourtysevenpuu;
var slightfourtyseven  = " ";
var sboardfourtyseven = req.body.sboardfourtysevenpuu;

var stimefourtyeight = req.body.stimefourtyeightpvv;
var sroutefourtyeight = req.body.sroutefourtyeightpvv;
var sbrandfourtyeight = req.body.sbrandfourtyeightpvv;
var snumberfourtyeight = req.body.snumberfourtyeightpvv;
var slocationfourtyeight = req.body.slocationfourtyeightpvv;
var sparkfourtyeight = req.body.sparkfourtyeightpvv;
var spnofourtyeight = req.body.spnofourtyeightpvv;
var smovefourtyeight = req.body.smovefourtyeightpvv;
var slightfourtyeight  = " ";
var sboardfourtyeight = req.body.sboardfourtyeightpvv;

var stimefourtynine = req.body.stimefourtyninepww;
var sroutefourtynine = req.body.sroutefourtyninepww;
var sbrandfourtynine = req.body.sbrandfourtyninepww;
var snumberfourtynine = req.body.snumberfourtyninepww;
var slocationfourtynine = req.body.slocationfourtyninepww;
var sparkfourtynine = req.body.sparkfourtyninepww;
var spnofourtynine = req.body.spnofourtyninepww;
var smovefourtynine = req.body.smovefourtyninepww;
var slightfourtynine  = " ";
var sboardfourtynine = req.body.sboardfourtyninepww;

var stimefifety = req.body.stimefifetypxx;
var sroutefifety = req.body.sroutefifetypxx;
var sbrandfifety = req.body.sbrandfifetypxx;
var snumberfifety = req.body.snumberfifetypxx;
var slocationfifety = req.body.slocationfifetypxx;
var sparkfifety = req.body.sparkfifetypxx;
var spnofifety = req.body.spnofifetypxx;
var smovefifety = req.body.smovefifetypxx;
var slightfifety  = " ";
var sboardfifety = req.body.sboardfifetypxx;



//compones out put structure;

var formopen = "<form name='major' id='majors' class='majors' style='width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background-color:  !important;'>";
var formclose = "</form>";

var titlespan = "<span id='fortitle' style='width: auto; display: block; margin-left: 0%; background-color: ;'>";
var titlespana = "<span id='fortitle' style='width: auto; display: block; margin-left: 0.5%;'>";
var spanoutone = "<span id='spanroneoutone' style='width: 15%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: left; display: block;'>";
var spanouttwo = "<span id='spanroneouttwo' style='width: 22%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutthree = "<span id='spanroneoutthree' style='width: 20%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutfour = "<span id='spanroneoutfour' style='width: 20%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutfive = "<span id='spanroneoutfive' style='width: 18%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanouteight = "<span id='spanroneouteight' style='width: 5%; height: auto; margin: 0; padding: 0; border: none; float: right; clear: right; display: inline-block;'>";

var spanina = "<span id='spanin' style='width: auto; height: auto; padding: 8px 4px; margin: 0px 0 4px 0; display: block; background-color: pink; text-align: left;'>";

 var spaninrcmp = "<span id='spaninrcmp' class='spaninrcmp' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: inline-block;'>";
var spanin = "<span id='spanin' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: block; background-color: ;'>";
var spaninr = "<span id='spanoneoutone' class='spaninr' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninra = "<span id='spanoneoutone' class='spaninra' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrb = "<span id='spanoneoutone' class='spaninrb' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrc = "<span id='spanoneoutone' class='spaninrc' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrd = "<span id='spanoneoutone' class='spaninrd' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninre = "<span id='spanoneoutone' class='spaninre' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrf = "<span id='spanoneoutone' class='spaninrf' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrg = "<span id='spanoneoutone' class='spaninrg' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrh = "<span id='spanoneoutone' class='spaninrh' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninri = "<span id='spanoneoutone' class='spaninri' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrj = "<span id='spanoneoutone' class='spaninrj' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrk = "<span id='spanoneoutone' class='spaninrk' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrl = "<span id='spanoneoutone' class='spaninrl' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrm = "<span id='spanoneoutone' class='spaninrm' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrn = "<span id='spanoneoutone' class='spaninrn' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninro = "<span id='spanoneoutone' class='spaninro' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrp = "<span id='spanoneoutone' class='spaninrp' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrq = "<span id='spanoneoutone' class='spaninrq' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrr = "<span id='spanoneoutone' class='spaninrr' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrs = "<span id='spanoneoutone' class='spaninrs' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrt = "<span id='spanoneoutone' class='spaninrt' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninru = "<span id='spanoneoutone' class='spaninru' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrv = "<span id='spanoneoutone' class='spaninrv' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrw = "<span id='spanoneoutone' class='spaninrw' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrx = "<span id='spanoneoutone' class='spaninrx' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninry = "<span id='spanoneoutone' class='spaninry' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrz = "<span id='spanoneoutone' class='spaninrz' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninraa = "<span id='spanoneoutone' class='spaninraa' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrbb = "<span id='spanoneoutone' class='spaninrbb' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrcc = "<span id='spanoneoutone' class='spaninrcc' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrdd = "<span id='spanoneoutone' class='spaninrdd' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninree = "<span id='spanoneoutone' class='spaninree' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrff = "<span id='spanoneoutone' class='spaninrff' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrgg = "<span id='spanoneoutone' class='spaninrgg' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrhh = "<span id='spanoneoutone' class='spaninrhh' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrii = "<span id='spanoneoutone' class='spaninrii' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrjj = "<span id='spanoneoutone' class='spaninrjj' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrkk = "<span id='spanoneoutone' class='spaninrkk' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrll = "<span id='spanoneoutone' class='spaninrll' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrmm = "<span id='spanoneoutone' class='spaninrmm' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrnn = "<span id='spanoneoutone' class='spaninrnn' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninroo = "<span id='spanoneoutone' class='spaninroo' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrpp = "<span id='spanoneoutone' class='spaninrpp' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrqq = "<span id='spanoneoutone' class='spaninrqq' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrrr = "<span id='spanoneoutone' class='spaninrrr' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrss = "<span id='spanoneoutone' class='spaninrss' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrtt = "<span id='spanoneoutone' class='spaninrtt' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninruu = "<span id='spanoneoutone' class='spaninruu' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrvv = "<span id='spanoneoutone' class='spaninrvv' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrww = "<span id='spanoneoutone' class='spaninrww' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";
var spaninrxx = "<span id='spanoneoutone' class='spaninrxx' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: inline-block;'>";

var spanclose = "</span>";


//layouts
var maina = "<main class='maina' style='height: 200px; background-color: red; display: block; margin: 0; padding: 0; border: none;'>";
var mainb = "<main class='mainb' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainc = "<main class='mainc' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maind = "<main class='maind' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maine = "<main class='maine' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainf = "<main class='mainf' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maing = "<main class='maing' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainh = "<main class='mainh' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maini = "<main class='maini' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainj = "<main class='mainj' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maink = "<main class='maink' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainl = "<main class='mainl' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainm = "<main class='mainm ' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainn = "<main class='mainn' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maino = "<main class='maino' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainp = "<main class='mainp' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainq = "<main class='mainq' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainr = "<main class='mainr' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mains = "<main class='mains' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maint = "<main class='maint' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainu = "<main class='mainu' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainv = "<main class='mainv' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainw = "<main class='mainw' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainx = "<main class='mainx' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainy = "<main class='mainy' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainz = "<main class='mainz' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainaa = "<main class='mainaa' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainbb = "<main class='mainbb' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maincc = "<main class='maincc' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maindd = "<main class='maindd' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainee = "<main class='mainee' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainff = "<main class='mainff' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maingg = "<main class='maingg' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainhh = "<main class='mainhh' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainii = "<main class='mainii' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainjj = "<main class='mainjj' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainkk = "<main class='mainkk' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainll = "<main class='mainll' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainmm = "<main class='mainmm' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainnn = "<main class='mainnn' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainoo = "<main class='mainoo' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainpp = "<main class='mainpp' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainqq = "<main class='mainqq' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainrr= "<main class='mainrr' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainss = "<main class='mainss' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var maintt = "<main class='maintt' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainuu = "<main class='mainuu' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainvv = "<main class='mainvv' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainww = "<main class='mainww' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainxx = "<main class='mainxx' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainyy = "<main id='mainyy' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainzz = "<main id='mainzz' class='mainzz' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainclose = "</main>";
var loclose = "</div>";
var leftloa = "<div class='leftloa' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloae = "<div class='leftloae' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var rightsloa = "<div class='rightsloa' style='width: 100%; background-color: brown; margin: 0; padding: 0; border: none;'>";
var bottomsloa = "<div class='bottomsloa' style=' width: 100%; margin: 0; padding: 0; border: none;'>";
var keydivs = "<div class='alldivs' style='background-color: ; padding: 4px;'>";
var divclose = "</div>";

var sboardroneanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwoanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthreeanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfouranchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfiveanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsevenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreightanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrelevenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwelveanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifeteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrseventeenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreighteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineteenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyoneanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentytwoanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentythreeanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfouranchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfiveanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysixanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysevenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyeightanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentynineanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyoneanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtytwoanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtythreeanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfouranchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfiveanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysixanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysevenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyeightanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtynineanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyoneanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtytwoanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtythreeanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfouranchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfiveanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysixanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysevenanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyeightanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtynineanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifetyanchor = "<a href='../../ccharges/public/componeccx.html' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var anchorclose = "</a>";

var fnnamena = "openclosena()";
var fnnamea = "openclosea()";
var fnnameb = "opencloseb()";
var fnnamec = "openclosec()";
var fnnamed = "openclosed()";
var fnnamee = "openclosee()";
var fnnamef = "openclosef()";
var fnnameg = "opencloseg()";
var fnnameh = "opencloseh()";
var fnnamei = "openclosei()";
var fnnamej = "openclosej()";
var fnnamek = "openclosek()";
var fnnamel = "openclosel()";
var fnnamem = "openclosem()";
var fnnamen = "openclosen()";
var fnnameo = "opencloseo()";
var fnnamep = "openclosep()";
var fnnameq = "opencloseq()";
var fnnamer = "opencloser()";
var fnnames = "opencloses()";
var fnnamet = "opencloset()";
var fnnameu = "opencloseu()";
var fnnamev = "openclosev()";
var fnnamew = "openclosew()";
var fnnamex = "openclosex()";
var fnnamey = "openclosey()";
var fnnamez = "openclosez()";
var fnnameaa = "opencloseaa()";
var fnnamebb = "openclosebb()";
var fnnamecc = "openclosecc()";
var fnnamedd = "openclosedd()";
var fnnameee = "opencloseee()";
var fnnameff = "opencloseff()";
var fnnamegg = "openclosegg()";
var fnnamehh = "openclosehh()";
var fnnameii = "opencloseii()";
var fnnamejj = "openclosejj()";
var fnnamekk = "openclosekk()";
var fnnamell = "openclosell()";
var fnnamemm = "openclosemm()";
var fnnamenn = "openclosenn()";
var fnnameoo = "opencloseoo()";
var fnnamepp = "openclosepp()";
var fnnameqq = "opencloseqq()";
var fnnamerr = "opencloserr()";
var fnnamess = "openclosess()";
var fnnamett = "openclosett()";
var fnnameuu = "opencloseuu()";
var fnnamevv = "openclosevv()";
var fnnameww = "opencloseww()";
var fnnamexx = "openclosexx()";

var layoutna = "document.querySelector('.spaninrcmp').textContent";
var layoutan = "document.querySelector('.spaninra').textContent";
var layoutbn = "document.querySelector('.spaninrb').textContent";
var layoutcn = "document.querySelector('.spaninrc').textContent";
var layoutdn = "document.querySelector('.spaninrd').textContent";
var layouten = "document.querySelector('.spaninre').textContent";
var layoutfn = "document.querySelector('.spaninrf').textContent";
var layoutgn = "document.querySelector('.spaninrg').textContent";
var layouthn = "document.querySelector('.spaninrh').textContent";
var layoutin = "document.querySelector('.spaninri').textContent";
var layoutjn = "document.querySelector('.spaninrj').textContent";
var layoutkn = "document.querySelector('.spaninrk').textContent";
var layoutln = "document.querySelector('.spaninrl').textContent";
var layoutmn = "document.querySelector('.spaninrm').textContent";
var layoutnnspn = "document.querySelector('.spaninrn').textContent";
var layouton = "document.querySelector('.spaninro').textContent";
var layoutpn = "document.querySelector('.spaninrp').textContent";
var layoutqn = "document.querySelector('.spaninrq').textContent";
var layoutrn = "document.querySelector('.spaninrr').textContent";
var layoutsn = "document.querySelector('.spaninrs').textContent";
var layouttn = "document.querySelector('.spaninrt').textContent";
var layoutun = "document.querySelector('.spaninru').textContent";
var layoutvn = "document.querySelector('.spaninrv').textContent";
var layoutwn = "document.querySelector('.spaninrw').textContent";
var layoutxn = "document.querySelector('.spaninrx').textContent";
var layoutyn = "document.querySelector('.spaninry').textContent";
var layoutzn = "document.querySelector('.spaninrz').textContent";
var layoutaan = "document.querySelector('.spaninraa').textContent";
var layoutbbn = "document.querySelector('.spaninrbb').textContent";
var layoutccn = "document.querySelector('.spaninrcc').textContent";
var layoutddn = "document.querySelector('.spaninrdd').textContent";
var layouteen = "document.querySelector('.spaninree').textContent";
var layoutffn = "document.querySelector('.spaninrff').textContent";
var layoutggn = "document.querySelector('.spaninrgg').textContent";
var layouthhn = "document.querySelector('.spaninrhh').textContent";
var layoutiin = "document.querySelector('.spaninrii').textContent";
var layoutjjn = "document.querySelector('.spaninrjj').textContent";
var layoutkkn = "document.querySelector('.spaninrkk').textContent";
var layoutlln = "document.querySelector('.spaninrll').textContent";
var layoutmmn = "document.querySelector('.spaninrmm').textContent";
var layoutnnn = "document.querySelector('.spaninrnn').textContent";
var layoutoon = "document.querySelector('.spaninroo').textContent";
var layoutppn = "document.querySelector('.spaninrpp').textContent";
var layoutqqn = "document.querySelector('.spaninrqq').textContent";
var layoutrrn = "document.querySelector('.spaninrrr').textContent";
var layoutssn = "document.querySelector('.spaninrss').textContent";
var layoutttn = "document.querySelector('.spaninrtt').textContent";
var layoutuun = "document.querySelector('.spaninruu').textContent";
var layoutvvn = "document.querySelector('.spaninrvv').textContent";
var layoutwwn = "document.querySelector('.spaninrww').textContent";
var layoutxxn = "document.querySelector('.spaninrxx').textContent";


var layoutnas = "document.querySelector('.mainzz').style.display";
var layouta = "document.querySelector('.maina').style.display";
var layoutb = "document.querySelector('.mainb').style.display";
var layoutc = "document.querySelector('.mainc').style.display";
var layoutd = "document.querySelector('.maind').style.display";
var layoute = "document.querySelector('.maine').style.display";
var layoutf = "document.querySelector('.mainf').style.display";
var layoutg = "document.querySelector('.maing').style.display";
var layouth = "document.querySelector('.mainh').style.display";
var layouti = "document.querySelector('.maini').style.display";
var layoutj = "document.querySelector('.mainj').style.display";
var layoutk = "document.querySelector('.maink').style.display";
var layoutl = "document.querySelector('.mainl').style.display";
var layoutm = "document.querySelector('.mainm').style.display";
var layoutn = "document.querySelector('.mainn').style.display";
var layouto = "document.querySelector('.maino').style.display";
var layoutp = "document.querySelector('.mainp').style.display";
var layoutq = "document.querySelector('.mainq').style.display";
var layoutr = "document.querySelector('.mainr').style.display";
var layouts = "document.querySelector('.mains').style.display";
var layoutt = "document.querySelector('.maint').style.display";
var layoutu = "document.querySelector('.mainu').style.display";
var layoutv = "document.querySelector('.mainv').style.display";
var layoutw = "document.querySelector('.mainw').style.display";
var layoutx = "document.querySelector('.mainx').style.display";
var layouty = "document.querySelector('.mainy').style.display";
var layoutz = "document.querySelector('.mainz').style.display";
var layoutaa = "document.querySelector('.mainaa').style.display";
var layoutbb = "document.querySelector('.mainbb').style.display";
var layoutcc = "document.querySelector('.maincc').style.display";
var layoutdd = "document.querySelector('.maindd').style.display";
var layoutee = "document.querySelector('.mainee').style.display";
var layoutff = "document.querySelector('.mainff').style.display";
var layoutgg = "document.querySelector('.maingg').style.display";
var layouthh = "document.querySelector('.mainhh').style.display";
var layoutii = "document.querySelector('.mainii').style.display";
var layoutjj = "document.querySelector('.mainjj').style.display";
var layoutkk = "document.querySelector('.mainkk').style.display";
var layoutll = "document.querySelector('.mainll').style.display";
var layoutmm = "document.querySelector('.mainmm').style.display";
var layoutnn = "document.querySelector('.mainnn').style.display";
var layoutoo = "document.querySelector('.mainoo').style.display";
var layoutpp = "document.querySelector('.mainpp').style.display";
var layoutqq = "document.querySelector('.mainqq').style.display";
var layoutrr = "document.querySelector('.mainrr').style.display";
var layoutss = "document.querySelector('.mainss').style.display";
var layouttt = "document.querySelector('.maintt').style.display";
var layoutuu = "document.querySelector('.mainuu').style.display";
var layoutvv = "document.querySelector('.mainvv').style.display";
var layoutww = "document.querySelector('.mainww').style.display";
var layoutxx = "document.querySelector('.mainxx').style.display";

var spaceit = " ";
var fn = "function";
var openbrace = " {";
var closebrace = " };";
var clsb = "}";
var eef = "if";
var openbracket = "(";
var closebracket = ")";
var equal = " = ";
var equivalent = " === ";
var eelse = " else ";
var empty = "'Nil'";
var displayoffit = "'none'";
var displayonit = "'block'"

var showschedule = "<!DOCTYPE html>" + "<html>" + "<head>" + "<meta charset='utf8'/>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" +"<link rel='stylesheet' href='../../css/main.css' media='screen and (min-width: 0px) and (max-width: 899px)'/>" +"<link rel='stylesheet' href='../../css/big.css' media='screen and (min-width: 900px) and (max-width: 4000px)'/>" + "<style>" + "</style>" + "<script>" + fn + spaceit + fnnamena +   openbrace + eef + openbracket + layoutna + equivalent + empty + closebracket + openbrace + layoutnas + equal + displayoffit + clsb + eelse + openbrace + layoutnas + equal + displayonit + closebrace + closebrace +           fn + spaceit + fnnamea +   openbrace + eef + openbracket + layoutan + equivalent + empty + closebracket + openbrace + layouta + equal + displayoffit + clsb + eelse + openbrace + layouta + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnameb +   openbrace + eef + openbracket + layoutbn + equivalent + empty + closebracket + openbrace + layoutb + equal + displayoffit + clsb + eelse + openbrace + layoutb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamec +   openbrace + eef + openbracket + layoutcn + equivalent + empty + closebracket + openbrace + layoutc + equal + displayoffit + clsb + eelse + openbrace + layoutc + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamed +   openbrace + eef + openbracket + layoutdn + equivalent + empty + closebracket + openbrace + layoutd + equal + displayoffit + clsb + eelse + openbrace + layoutd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamee +   openbrace + eef + openbracket + layouten + equivalent + empty + closebracket + openbrace + layoute + equal + displayoffit + clsb + eelse + openbrace + layoute + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamef +   openbrace + eef + openbracket + layoutfn + equivalent + empty + closebracket + openbrace + layoutf + equal + displayoffit + clsb + eelse + openbrace + layoutf + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameg +   openbrace + eef + openbracket + layoutgn + equivalent + empty + closebracket + openbrace + layoutg + equal + displayoffit + clsb + eelse + openbrace + layoutg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameh +   openbrace + eef + openbracket + layouthn + equivalent + empty + closebracket + openbrace + layouth + equal + displayoffit + clsb + eelse + openbrace + layouth + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamei +   openbrace + eef + openbracket + layoutin + equivalent + empty + closebracket + openbrace + layouti + equal + displayoffit + clsb + eelse + openbrace + layouti + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamej +   openbrace + eef + openbracket + layoutjn + equivalent + empty + closebracket + openbrace + layoutj + equal + displayoffit + clsb + eelse + openbrace + layoutj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamek +   openbrace + eef + openbracket + layoutkn + equivalent + empty + closebracket + openbrace + layoutk + equal + displayoffit + clsb + eelse + openbrace + layoutk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamel +   openbrace + eef + openbracket + layoutln + equivalent + empty + closebracket + openbrace + layoutl + equal + displayoffit + clsb + eelse + openbrace + layoutl + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamem +   openbrace + eef + openbracket + layoutmn + equivalent + empty + closebracket + openbrace + layoutm + equal + displayoffit + clsb + eelse + openbrace + layoutm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamen +   openbrace + eef + openbracket + layoutnnspn + equivalent + empty + closebracket + openbrace + layoutn + equal + displayoffit + clsb + eelse + openbrace + layoutn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameo +   openbrace + eef + openbracket + layouton + equivalent + empty + closebracket + openbrace + layouto + equal + displayoffit + clsb + eelse + openbrace + layouto + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamep +   openbrace + eef + openbracket + layoutpn + equivalent + empty + closebracket + openbrace + layoutp + equal + displayoffit + clsb + eelse + openbrace + layoutp + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameq +   openbrace + eef + openbracket + layoutqn + equivalent + empty + closebracket + openbrace + layoutq + equal + displayoffit + clsb + eelse + openbrace + layoutq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamer +   openbrace + eef + openbracket + layoutrn + equivalent + empty + closebracket + openbrace + layoutr + equal + displayoffit + clsb + eelse + openbrace + layoutr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnames +   openbrace + eef + openbracket + layoutsn + equivalent + empty + closebracket + openbrace + layouts + equal + displayoffit + clsb + eelse + openbrace + layouts + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamet +   openbrace + eef + openbracket + layouttn + equivalent + empty + closebracket + openbrace + layoutt + equal + displayoffit + clsb + eelse + openbrace + layoutt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameu +   openbrace + eef + openbracket + layoutun + equivalent + empty + closebracket + openbrace + layoutu + equal + displayoffit + clsb + eelse + openbrace + layoutu + equal + displayonit + closebrace + closebrace +        fn + spaceit + fnnamev +   openbrace + eef + openbracket + layoutvn + equivalent + empty + closebracket + openbrace + layoutv + equal + displayoffit + clsb + eelse + openbrace + layoutv + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnamew +   openbrace + eef + openbracket + layoutwn + equivalent + empty + closebracket + openbrace + layoutw + equal + displayoffit + clsb + eelse + openbrace + layoutw + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamex +   openbrace + eef + openbracket + layoutxn + equivalent + empty + closebracket + openbrace + layoutx + equal + displayoffit + clsb + eelse + openbrace + layoutx + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamey +   openbrace + eef + openbracket + layoutyn + equivalent + empty + closebracket + openbrace + layouty + equal + displayoffit + clsb + eelse + openbrace + layouty + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamez +   openbrace + eef + openbracket + layoutzn + equivalent + empty + closebracket + openbrace + layoutz + equal + displayoffit + clsb + eelse + openbrace + layoutz + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameaa +   openbrace + eef + openbracket + layoutaan + equivalent + empty + closebracket + openbrace + layoutaa + equal + displayoffit + clsb + eelse + openbrace + layoutaa + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamebb +   openbrace + eef + openbracket + layoutbbn + equivalent + empty + closebracket + openbrace + layoutbb + equal + displayoffit + clsb + eelse + openbrace + layoutbb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamecc +   openbrace + eef + openbracket + layoutccn + equivalent + empty + closebracket + openbrace + layoutcc + equal + displayoffit + clsb + eelse + openbrace + layoutcc + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamedd +   openbrace + eef + openbracket + layoutddn + equivalent + empty + closebracket + openbrace + layoutdd + equal + displayoffit + clsb + eelse + openbrace + layoutdd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameee +   openbrace + eef + openbracket + layouteen + equivalent + empty + closebracket + openbrace + layoutee + equal + displayoffit + clsb + eelse + openbrace + layoutee + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameff +   openbrace + eef + openbracket + layoutffn + equivalent + empty + closebracket + openbrace + layoutff + equal + displayoffit + clsb + eelse + openbrace + layoutff + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamegg +   openbrace + eef + openbracket + layoutggn + equivalent + empty + closebracket + openbrace + layoutgg + equal + displayoffit + clsb + eelse + openbrace + layoutgg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamehh +   openbrace + eef + openbracket + layouthhn + equivalent + empty + closebracket + openbrace + layouthh + equal + displayoffit + clsb + eelse + openbrace + layouthh + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameii +   openbrace + eef + openbracket + layoutiin + equivalent + empty + closebracket + openbrace + layoutii + equal + displayoffit + clsb + eelse + openbrace + layoutii + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamejj +   openbrace + eef + openbracket + layoutjjn + equivalent + empty + closebracket + openbrace + layoutjj + equal + displayoffit + clsb + eelse + openbrace + layoutjj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamekk +   openbrace + eef + openbracket + layoutkkn + equivalent + empty + closebracket + openbrace + layoutkk + equal + displayoffit + clsb + eelse + openbrace + layoutkk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamell +   openbrace + eef + openbracket + layoutlln + equivalent + empty + closebracket + openbrace + layoutll + equal + displayoffit + clsb + eelse + openbrace + layoutll + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamemm +   openbrace + eef + openbracket + layoutmmn + equivalent + empty + closebracket + openbrace + layoutmm + equal + displayoffit + clsb + eelse + openbrace + layoutmm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamenn +   openbrace + eef + openbracket + layoutnnn + equivalent + empty + closebracket + openbrace + layoutnn + equal + displayoffit + clsb + eelse + openbrace + layoutnn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameoo +   openbrace + eef + openbracket + layoutoon + equivalent + empty + closebracket + openbrace + layoutoo + equal + displayoffit + clsb + eelse + openbrace + layoutoo + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamepp +   openbrace + eef + openbracket + layoutppn + equivalent + empty + closebracket + openbrace + layoutpp + equal + displayoffit + clsb + eelse + openbrace + layoutpp + equal + displayonit + closebrace + closebrace +                 fn + spaceit + fnnameqq +   openbrace + eef + openbracket + layoutqqn + equivalent + empty + closebracket + openbrace + layoutqq + equal + displayoffit + clsb + eelse + openbrace + layoutqq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamerr +   openbrace + eef + openbracket + layoutrrn + equivalent + empty + closebracket + openbrace + layoutrr + equal + displayoffit + clsb + eelse + openbrace + layoutrr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamess +   openbrace + eef + openbracket + layoutssn + equivalent + empty + closebracket + openbrace + layoutss + equal + displayoffit + clsb + eelse + openbrace + layoutss + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamett +   openbrace + eef + openbracket + layoutttn + equivalent + empty + closebracket + openbrace + layouttt + equal + displayoffit + clsb + eelse + openbrace + layouttt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameuu +   openbrace + eef + openbracket + layoutuun + equivalent + empty + closebracket + openbrace + layoutuu + equal + displayoffit + clsb + eelse + openbrace + layoutuu + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamevv +   openbrace + eef + openbracket + layoutvvn + equivalent + empty + closebracket + openbrace + layoutvv + equal + displayoffit + clsb + eelse + openbrace + layoutvv + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameww +   openbrace + eef + openbracket + layoutwwn + equivalent + empty + closebracket + openbrace + layoutww + equal + displayoffit + clsb + eelse + openbrace + layoutww + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamexx +   openbrace + eef + openbracket + layoutxxn + equivalent + empty + closebracket + openbrace + layoutxx + equal + displayoffit + clsb + eelse + openbrace + layoutxx + equal + displayonit + closebrace + closebrace +             "</script>" + "</head>" + "<body class='cchargeclass' style='background-color: ; margin: 0; padding: 0; border: none;' onload='openclosena() || openclosea() || opencloseb() || openclosec() || openclosed() || openclosee() || openclosef() || opencloseg() || opencloseh() || openclosei() || openclosej() || openclosek() || openclosel() || openclosem() || openclosen() || opencloseo() || openclosep() || opencloseq() || opencloser() || opencloses() || opencloset() || opencloseu() || openclosev() || openclosew() || openclosex() || openclosey() || openclosez() || opencloseaa() || openclosebb() || openclosecc() || openclosedd() || opencloseee() || opencloseff() || openclosegg() || openclosehh() || opencloseii() || openclosejj() || openclosekk() || openclosell() || openclosemm() || openclosenn() || opencloseoo() || openclosepp() || opencloseqq() || opencloserr() || openclosess() || openclosett() || opencloseuu() || openclosevv() || opencloseww() || openclosexx()'>" + formopen + mainzz +keydivs  +spaninrcmp + pcompname +spanclose + divclose +keydivs + "Parked Buses" + divclose + mainclose  +     maina + leftloae +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +   spanoutone + spanin + spaninr + stimeonepa + spanclose + spanclose + spanclose + spanouttwo + spanin + spaninr + srouteonepa + spanclose + spanclose + spanclose + spanoutthree + spanin + spaninr + sbrandonepa + spanclose + spanclose + spanclose + spanoutfour + spanin + spaninra + snumberonepa + spanclose + spanclose + spanclose + spanoutfive + spanin + spaninr + sparkonepa + spanclose + spanclose + spanclose +      loclose + bottomsloa +   spanouteight + spanin + spaninr + sboardroneanchor + sboardonepa + anchorclose + spanclose + spanclose + spanclose +    loclose  +  mainclose +             mainb + leftloa  +     spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +          loclose +    rightsloa +          spanoutone + spaninr + stimetwo + spanclose + spanclose + spanouttwo + spaninr + sroutetwo + spanclose + spanclose + spanoutthree + spaninr + sbrandtwo + spanclose + spanclose + spanoutfour + spaninrb + snumbertwo + spanclose + spanclose + spanoutfive + spaninr + sparktwo + spanclose + spanclose +     loclose + bottomsloa +    spanouteight + spaninr + sboardrtwoanchor + sboardtwo + anchorclose + spanclose + spanclose +        loclose  +  mainclose +       mainc + leftloa  +               spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +           loclose +    rightsloa +             spanoutone + spaninr + stimethree + spanclose + spanclose + spanouttwo + spaninr + sroutethree + spanclose + spanclose + spanoutthree + spaninr + sbrandthree + spanclose + spanclose + spanoutfour + spaninrc + snumberthree + spanclose + spanclose + spanoutfive + spaninr + sparkthree + spanclose + spanclose +    loclose + bottomsloa +    spanouteight + spaninr + sboardrthreeanchor + sboardthree + anchorclose + spanclose + spanclose +            loclose  +  mainclose +       maind + leftloa  +                  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +              loclose +    rightsloa +          spanoutone + spaninr + stimefour + spanclose + spanclose + spanouttwo + spaninr + sroutefour + spanclose + spanclose + spanoutthree + spaninr + sbrandfour + spanclose + spanclose + spanoutfour + spaninrd + snumberfour + spanclose + spanclose + spanoutfive + spaninr + sparkfour + spanclose + spanclose +    loclose + bottomsloa +     spanouteight + spaninr + sboardrfouranchor + sboardfour + anchorclose + spanclose + spanclose +          loclose  +  mainclose +       maine + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +            loclose +    rightsloa +            spanoutone + spaninr + stimefive + spanclose + spanclose + spanouttwo + spaninr + sroutefive + spanclose + spanclose + spanoutthree + spaninr + sbrandfive + spanclose + spanclose + spanoutfour + spaninre + snumberfive + spanclose + spanclose + spanoutfive + spaninr + sparkfive + spanclose + spanclose +   loclose + bottomsloa +    spanouteight + spaninr + sboardrfiveanchor + sboardfive + anchorclose + spanclose + spanclose +           loclose  +  mainclose +       mainf + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +          spanoutone + spaninr + stimesix + spanclose + spanclose + spanouttwo + spaninr + sroutesix + spanclose + spanclose + spanoutthree + spaninr + sbrandsix + spanclose + spanclose + spanoutfour + spaninrf + snumbersix + spanclose + spanclose + spanoutfive + spaninr + sparksix + spanclose + spanclose +   loclose + bottomsloa +    spanouteight + spaninr + sboardrsixanchor + sboardsix + anchorclose + spanclose + spanclose +            loclose  +  mainclose +       maing  + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +         spanoutone + spaninr + stimeseven + spanclose + spanclose + spanouttwo + spaninr + srouteseven + spanclose + spanclose + spanoutthree + spaninr + sbrandseven + spanclose + spanclose + spanoutfour + spaninrg + snumberseven + spanclose + spanclose + spanoutfive + spaninr + sparkseven + spanclose + spanclose +    loclose + bottomsloa +    spanouteight + spaninr + sboardrsevenanchor + sboardseven + anchorclose + spanclose + spanclose +             loclose  +  mainclose +       mainh + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +        spanoutone + spaninr + stimeeight + spanclose + spanclose + spanouttwo + spaninr + srouteeight + spanclose + spanclose + spanoutthree + spaninr + sbrandeight + spanclose + spanclose + spanoutfour + spaninrh + snumbereight + spanclose + spanclose + spanoutfive + spaninr + sparkeight + spanclose + spanclose +   loclose + bottomsloa +    spanouteight + spaninr + titlespana + spanclose + sboardreightanchor + sboardeight + anchorclose + spanclose + spanclose +               loclose  +  mainclose +       maini + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +           loclose +    rightsloa +          spanoutone + spaninr + stimenine + spanclose + spanclose + spanouttwo + spaninr + sroutenine + spanclose + spanclose + spanoutthree + spaninr + sbrandnine + spanclose + spanclose + spanoutfour + spaninri + snumbernine + spanclose + spanclose + spanoutfive + spaninr + sparknine + spanclose + spanclose +  loclose + bottomsloa +    spanouteight + spaninr + sboardrnineanchor + sboardnine + anchorclose + spanclose + spanclose +            loclose  +  mainclose +       mainj + leftloa  +         spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +           loclose +    rightsloa +          spanoutone + spaninr + stimeten + spanclose + spanclose + spanouttwo + spaninr + srouteten + spanclose + spanclose + spanoutthree + spaninr + sbrandten + spanclose + spanclose + spanoutfour + spaninrj + snumberten + spanclose + spanclose + spanoutfive + spaninr + sparkten + spanclose + spanclose +    loclose + bottomsloa +    spanouteight + spaninr + sboardrtenanchor + sboardten + anchorclose + spanclose + spanclose +           loclose  +  mainclose +       maink + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +           spanoutone + spaninr + stimeeleven + spanclose + spanclose + spanouttwo + spaninr + srouteeleven + spanclose + spanclose + spanoutthree + spaninr + sbrandeleven + spanclose + spanclose + spanoutfour + spaninrk + snumbereleven + spanclose + spanclose + spanoutfive + spaninr + sparkeleven + spanclose + spanclose +   loclose + bottomsloa +   spanouteight + spaninr + sboardrelevenanchor + sboardeleven + anchorclose + spanclose + spanclose +               loclose  +  mainclose +       mainl + leftloa  +               spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +            loclose +    rightsloa +          spanoutone + spaninr + stimetwelve + spanclose + spanclose + spanouttwo + spaninr + sroutetwelve + spanclose + spanclose + spanoutthree + spaninr + sbrandtwelve + spanclose + spanclose + spanoutfour + spaninrl + snumbertwelve + spanclose + spanclose + spanoutfive + spaninr + sparktwelve + spanclose + spanclose +   loclose + bottomsloa +    spanouteight + spaninr + sboardrtwelveanchor + sboardtwelve + anchorclose + spanclose + spanclose +              loclose  +  mainclose +       mainm + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +            loclose +    rightsloa +          spanoutone + spaninr + stimethirteen + spanclose + spanclose + spanouttwo + spaninr + sroutethirteen + spanclose + spanclose + spanoutthree + spaninr + sbrandthirteen + spanclose + spanclose + spanoutfour + spaninrm + snumberthirteen + spanclose + spanclose + spanoutfive + spaninr + sparkthirteen + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + sboardrthirteenanchor + sboardthirteen + anchorclose + spanclose + spanclose +             loclose  +  mainclose +       mainn + leftloa  +              spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +           spanoutone + spaninr + stimefourteen + spanclose + spanclose + spanouttwo + spaninr + sroutefourteen + spanclose + spanclose + spanoutthree + spaninr + sbrandfourteen + spanclose + spanclose + spanoutfour + spaninrn + snumberfourteen + spanclose + spanclose + spanoutfive + spaninr + sparkfourteen + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + sboardrfourteenanchor + sboardfourteen + anchorclose + spanclose + spanclose +             loclose  +  mainclose +       maino + leftloa  +                   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +           spanoutone + spaninr + stimefifeteen + spanclose + spanclose + spanouttwo + spaninr + sroutefifeteen + spanclose + spanclose + spanoutthree + spaninr + sbrandfifeteen + spanclose + spanclose + spanoutfour + spaninro + snumberfifeteen + spanclose + spanclose + spanoutfive + spaninr + sparkfifeteen + spanclose + spanclose +  loclose + bottomsloa +    spanouteight + spaninr + sboardrfifeteenanchor + sboardfifeteen + anchorclose + spanclose + spanclose +                loclose  +  mainclose +       mainp + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +          spanoutone + spaninr + stimesixteen + spanclose + spanclose + spanouttwo + spaninr + sroutesixteen + spanclose + spanclose + spanoutthree + spaninr + sbrandsixteen + spanclose + spanclose + spanoutfour + spaninrp + snumbersixteen + spanclose + spanclose + spanoutfive + spaninr + sparksixteen + spanclose + spanclose +  loclose + bottomsloa +    spanouteight + spaninr + sboardrsixteenanchor + sboardsixteen + anchorclose + spanclose + spanclose +               loclose  +  mainclose +       mainq + leftloa  +              spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +            spanoutone + spaninr + stimeseventeen + spanclose + spanclose + spanouttwo + spaninr + srouteseventeen + spanclose + spanclose + spanoutthree + spaninr + sbrandseventeen + spanclose + spanclose + spanoutfour + spaninrq + snumberseventeen + spanclose + spanclose + spanoutfive + spaninr + sparkseventeen + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrseventeenanchor + sboardseventeen + anchorclose + spanclose + spanclose +               loclose  +  mainclose +       mainr + leftloa  +                    spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +          loclose +    rightsloa +            spanoutone + spaninr + stimeeighteen + spanclose + spanclose + spanouttwo + spaninr + srouteeighteen + spanclose + spanclose + spanoutthree + spaninr + sbrandeighteen + spanclose + spanclose + spanoutfour + spaninrr + snumbereighteen + spanclose + spanclose + spanoutfive + spaninr + sparkeighteen + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardreighteenanchor + sboardeighteen + anchorclose + spanclose + spanclose +          loclose  +  mainclose +       mains + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +             loclose +    rightsloa +        spanoutone + spaninr + stimenineteen + spanclose + spanclose + spanouttwo + spaninr + sroutenineteen + spanclose + spanclose + spanoutthree + spaninr + sbrandnineteen + spanclose + spanclose + spanoutfour + spaninrs + snumbernineteen + spanclose + spanclose + spanoutfive + spaninr + sparknineteen + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + sboardrnineteenanchor + sboardnineteen + anchorclose + spanclose + spanclose +            loclose  +  mainclose +       maint + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +            loclose +    rightsloa +            spanoutone + spaninr + stimetwenty + spanclose + spanclose + spanouttwo + spaninr + sroutetwenty + spanclose + spanclose + spanoutthree + spaninr + sbrandtwenty + spanclose + spanclose + spanoutfour + spaninrt + snumbertwenty + spanclose + spanclose + spanoutfive + spaninr + sparktwenty + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrtwentyanchor + sboardtwenty + anchorclose + spanclose + spanclose +             loclose  +  mainclose +       mainu + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +          loclose +    rightsloa +        spanoutone + spaninr + stimetwentyone + spanclose + spanclose + spanouttwo + spaninr + sroutetwentyone + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentyone + spanclose + spanclose + spanoutfour + spaninru + snumbertwentyone + spanclose + spanclose + spanoutfive + spaninr + sparktwentyone + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrtwentyoneanchor + sboardtwentyone + anchorclose + spanclose + spanclose +             loclose  +  mainclose +       mainv + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +          loclose +    rightsloa +          spanoutone + spaninr + stimetwentytwo + spanclose + spanclose + spanouttwo + spaninr + sroutetwentytwo + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentytwo + spanclose + spanclose + spanoutfour + spaninrv + snumbertwentytwo + spanclose + spanclose + spanoutfive + spaninr + sparktwentytwo + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrtwentytwoanchor + sboardtwentytwo + anchorclose + spanclose + spanclose +               loclose  +  mainclose +       mainw + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +           loclose +    rightsloa +           spanoutone + spaninr + stimetwentythree + spanclose + spanclose + spanouttwo + spaninr + sroutetwentythree + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentythree + spanclose + spanclose + spanoutfour + spaninrw + snumbertwentythree + spanclose + spanclose + spanoutfive + spaninr + sparktwentythree + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + sboardrtwentythreeanchor + sboardtwentythree + anchorclose + spanclose + spanclose +           loclose  +  mainclose +       mainx + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +         spanoutone + spaninr + stimetwentyfour + spanclose + spanclose + spanouttwo + spaninr + sroutetwentyfour + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentyfour + spanclose + spanclose + spanoutfour + spaninrx + snumbertwentyfour + spanclose + spanclose + spanoutfive + spaninr + sparktwentyfour + spanclose + spanclose +  loclose + bottomsloa + spanouteight + spaninr + sboardrtwentyfouranchor + sboardtwentyfour + anchorclose + spanclose + spanclose +          loclose  +  mainclose +       mainy + leftloa  +          spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +     loclose +    rightsloa +        spanoutone + spaninr + stimetwentyfive + spanclose + spanclose + spanouttwo + spaninr + sroutetwentyfive + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentyfive + spanclose + spanclose + spanoutfour + spaninry + snumbertwentyfive + spanclose + spanclose + spanoutfive + spaninr + sparktwentyfive + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + sboardrtwentyfiveanchor + sboardtwentyfive + anchorclose + spanclose + spanclose +           loclose  +  mainclose +       mainz + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +         spanoutone + spaninr + stimetwentysix + spanclose + spanclose + spanouttwo + spaninr + sroutetwentysix + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentysix + spanclose + spanclose + spanoutfour + spaninrz + snumbertwentysix + spanclose + spanclose + spanoutfive + spaninr + sparktwentysix + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrtwentysixanchor + sboardtwentysix + anchorclose + spanclose + spanclose +          loclose  +  mainclose +        mainaa + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +          spanoutone + spaninr + stimetwentyseven + spanclose + spanclose + spanouttwo + spaninr + sroutetwentyseven + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentyseven + spanclose + spanclose + spanoutfour + spaninraa + snumbertwentyseven + spanclose + spanclose + spanoutfive + spaninr + sparktwentyseven + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrtwentysevenanchor + sboardtwentyseven + anchorclose + spanclose + spanclose +            loclose  +  mainclose +        mainbb + leftloa  +                spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +           loclose +    rightsloa +         spanoutone + spaninr + stimetwentyeight + spanclose + spanclose + spanouttwo + spaninr + sroutetwentyeight + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentyeight + spanclose + spanclose + spanoutfour + spaninrbb + snumbertwentyeight + spanclose + spanclose + spanoutfive + spaninr + sparktwentyeight + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrtwentyeightanchor + sboardtwentyeight + anchorclose + spanclose + spanclose +           loclose  +  mainclose +        maincc + leftloa  +               spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +         spanoutone + spaninr + stimetwentynine + spanclose + spanclose + spanouttwo + spaninr + sroutetwentynine + spanclose + spanclose + spanoutthree + spaninr + sbrandtwentynine + spanclose + spanclose + spanoutfour + spaninrcc + snumbertwentynine + spanclose + spanclose + spanoutfive + spaninr + sparktwentynine + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrtwentynineanchor + sboardtwentynine + anchorclose + spanclose + spanclose +            loclose  +  mainclose +        maindd + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +          spanoutone + spaninr + stimethirty + spanclose + spanclose + spanouttwo + spaninr + sroutethirty + spanclose + spanclose + spanoutthree + spaninr + sbrandthirty + spanclose + spanclose + spanoutfour + spaninrdd + snumberthirty + spanclose + spanclose + spanoutfive + spaninr + sparkthirty + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtyanchor + sboardthirty + anchorclose + spanclose + spanclose +          loclose  +  mainclose +        mainee + leftloa  +         spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +        spanoutone + spaninr + stimethirtyone + spanclose + spanclose + spanouttwo + spaninr + sroutethirtyone + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtyone + spanclose + spanclose + spanoutfour + spaninree + snumberthirtyone + spanclose + spanclose + spanoutfive + spaninr + sparkthirtyone + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtyoneanchor + sboardthirtyone + anchorclose + spanclose + spanclose +             loclose  +  mainclose +        mainff + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +          spanoutone + spaninr + stimethirtytwo + spanclose + spanclose + spanouttwo + spaninr + sroutethirtytwo + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtytwo + spanclose + spanclose + spanoutfour + spaninrff + snumberthirtytwo + spanclose + spanclose + spanoutfive + spaninr + sparkthirtytwo + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrthirtytwoanchor + sboardthirtytwo + anchorclose + spanclose + spanclose +        loclose  +  mainclose +        maingg + leftloa  +               spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +         spanoutone + spaninr + stimethirtythree + spanclose + spanclose + spanouttwo + spaninr + sroutethirtythree + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtythree + spanclose + spanclose + spanoutfour + spaninrgg + snumberthirtythree + spanclose + spanclose + spanoutfive + spaninr + sparkthirtythree + spanclose + spanclose + loclose + bottomsloa + spanouteight + spaninr + sboardrthirtythreeanchor + sboardthirtythree + anchorclose + spanclose + spanclose +            loclose  +  mainclose +        mainhh + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +         loclose +    rightsloa +       spanoutone + spaninr + stimethirtyfour + spanclose + spanclose + spanouttwo + spaninr + sroutethirtyfour + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtyfour + spanclose + spanclose + spanoutfour + spaninrhh + snumberthirtyfour + spanclose + spanclose + spanoutfive + spaninr + sparkthirtyfour + spanclose + spanclose + loclose + bottomsloa + spanouteight + spaninr + sboardrthirtyfouranchor + sboardthirtyfour + anchorclose + spanclose + spanclose +           loclose  +  mainclose +        mainii + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +          spanoutone + spaninr + stimethirtyfive + spanclose + spanclose + spanouttwo + spaninr + sroutethirtyfive + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtyfive + spanclose + spanclose + spanoutfour + spaninrii + snumberthirtyfive + spanclose + spanclose + spanoutfive + spaninr + sparkthirtyfive + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtyfiveanchor + sboardthirtyfive + anchorclose + spanclose + spanclose +             loclose  +  mainclose +        mainjj + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +         spanoutone + spaninr + stimethirtysix + spanclose + spanclose + spanouttwo + spaninr + sroutethirtysix + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtysix + spanclose + spanclose + spanoutfour + spaninrjj + snumberthirtysix + spanclose + spanclose + spanoutfive + spaninr + sparkthirtysix + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtysixanchor + sboardthirtysix + anchorclose + spanclose + spanclose +           loclose  +  mainclose +        mainkk + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +       spanoutone + spaninr + stimethirtyseven + spanclose + spanclose + spanouttwo + spaninr + sroutethirtyseven + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtyseven + spanclose + spanclose + spanoutfour + spaninrkk + snumberthirtyseven + spanclose + spanclose + spanoutfive + spaninr + sparkthirtyseven + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrthirtysevenanchor + sboardthirtyseven + anchorclose + spanclose + spanclose +         loclose  +  mainclose +        mainll + leftloa  +          spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +        spanoutone + spaninr + stimethirtyeight + spanclose + spanclose + spanouttwo + spaninr + sroutethirtyeight + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtyeight + spanclose + spanclose + spanoutfour + spaninrll + snumberthirtyeight + spanclose + spanclose + spanoutfive + spaninr + sparkthirtyeight + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtyeightanchor + sboardthirtyeight + anchorclose + spanclose + spanclose +          loclose  +  mainclose +        mainmm + leftloa  +        spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +         spanoutone + spaninr + stimethirtynine + spanclose + spanclose + spanouttwo + spaninr + sroutethirtynine + spanclose + spanclose + spanoutthree + spaninr + sbrandthirtynine + spanclose + spanclose + spanoutfour + spaninrmm + snumberthirtynine + spanclose + spanclose + spanoutfive + spaninr + sparkthirtynine + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrthirtynineanchor + sboardthirtynine + anchorclose + spanclose + spanclose +          loclose  +  mainclose +        mainnn + leftloa  +         spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +       spanoutone + spaninr + stimefourty + spanclose + spanclose + spanouttwo + spaninr + sroutefourty + spanclose + spanclose + spanoutthree + spaninr + sbrandfourty + spanclose + spanclose + spanoutfour + spaninrnn + snumberfourty + spanclose + spanclose + spanoutfive + spaninr + sparkfourty + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrfourtyanchor + sboardfourty + anchorclose + spanclose + spanclose +       loclose  +  mainclose +        mainoo + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +        spanoutone + spaninr + stimefourtyone + spanclose + spanclose + spanouttwo + spaninr + sroutefourtyone + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtyone + spanclose + spanclose + spanoutfour + spaninroo + snumberfourtyone + spanclose + spanclose + spanoutfive + spaninr + sparkfourtyone + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrfourtyoneanchor + sboardfourtyone + anchorclose + spanclose + spanclose +         loclose  +  mainclose +        mainpp + leftloa  +              spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +        spanoutone + spaninr + stimefourtytwo + spanclose + spanclose + spanouttwo + spaninr + sroutefourtytwo + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtytwo + spanclose + spanclose + spanoutfour + spaninrpp + snumberfourtytwo + spanclose + spanclose + spanoutfive + spaninr + sparkfourtytwo + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrfourtytwoanchor + sboardfourtytwo + anchorclose + spanclose + spanclose +          loclose  +  mainclose +        mainqq + leftloa  +          spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +         spanoutone + spaninr + stimefourtythree + spanclose + spanclose + spanouttwo + spaninr + sroutefourtythree + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtythree + spanclose + spanclose + spanoutfour + spaninrqq + snumberfourtythree + spanclose + spanclose + spanoutfive + spaninr + sparkfourtythree + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrfourtythreeanchor + sboardfourtythree + anchorclose + spanclose + spanclose +         loclose  +  mainclose +        mainrr + leftloa  +             spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +        spanoutone + spaninr + stimefourtyfour + spanclose + spanclose + spanouttwo + spaninr + sroutefourtyfour + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtyfour + spanclose + spanclose + spanoutfour + spaninrrr + snumberfourtyfour + spanclose + spanclose + spanoutfive + spaninr + sparkfourtyfour + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + sboardrfourtyfouranchor + sboardfourtyfour + anchorclose + spanclose + spanclose +       loclose  +  mainclose +        mainss + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +        loclose +    rightsloa +       spanoutone + spaninr + stimefourtyfive + spanclose + spanclose + spanouttwo + spaninr + sroutefourtyfive + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtyfive + spanclose + spanclose + spanoutfour + spaninrss + snumberfourtyfive + spanclose + spanclose + spanoutfive + spaninr + sparkfourtyfive + spanclose + spanclose +   loclose + bottomsloa +   spanouteight + spaninr + sboardrfourtyfiveanchor + sboardfourtyfive + anchorclose + spanclose + spanclose +        loclose  +  mainclose +        maintt + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +        spanoutone + spaninr + stimefourtysix + spanclose + spanclose + spanouttwo + spaninr + sroutefourtysix + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtysix + spanclose + spanclose + spanoutfour + spaninrtt + snumberfourtysix + spanclose + spanclose + spanoutfive + spaninr + sparkfourtysix + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + sboardrfourtysixanchor + sboardfourtysix + anchorclose + spanclose + spanclose +    loclose  +  mainclose +        mainuu + leftloa  +            spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +       loclose +    rightsloa +       spanoutone + spaninr + stimefourtyseven + spanclose + spanclose + spanouttwo + spaninr + sroutefourtyseven + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtyseven + spanclose + spanclose + spanoutfour + spaninruu + snumberfourtyseven + spanclose + spanclose + spanoutfive + spaninr + sparkfourtyseven + spanclose + spanclose +  loclose + bottomsloa + spanouteight + spaninr + sboardrfourtysevenanchor + sboardfourtyseven + anchorclose + spanclose + spanclose +         loclose  +  mainclose +        mainvv + leftloa  +        spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +     loclose +    rightsloa +        spanoutone + spaninr + stimefourtyeight + spanclose + spanclose + spanouttwo + spaninr + sroutefourtyeight + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtyeight + spanclose + spanclose + spanoutfour + spaninrvv + snumberfourtyeight + spanclose + spanclose + spanoutfive + spaninr + sparkfourtyeight + spanclose + spanclose + loclose + bottomsloa + spanouteight + spaninr + sboardrfourtyeightanchor + sboardfourtyeight + anchorclose + spanclose + spanclose +        loclose  +  mainclose +        mainww + leftloa  +           spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +        spanoutone + spaninr + stimefourtynine + spanclose + spanclose + spanouttwo + spaninr + sroutefourtynine + spanclose + spanclose + spanoutthree + spaninr + sbrandfourtynine + spanclose + spanclose + spanoutfour + spaninrww + snumberfourtynine + spanclose + spanclose + spanoutfive + spaninr + sparkfourtynine + spanclose + spanclose + loclose + bottomsloa + spanouteight + spaninr + sboardrfourtynineanchor + sboardfourtynine + anchorclose + spanclose + spanclose +         loclose  +  mainclose +        mainxx + leftloa  +          spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +      loclose +    rightsloa +         spanoutone + spaninr + stimefifety + spanclose + spanclose + spanouttwo + spaninr + sroutefifety + spanclose + spanclose + spanoutthree + spaninr + sbrandfifety + spanclose + spanclose + spanoutfour + spaninrxx + snumberfifety + spanclose + spanclose + spanoutfive + spaninr + sparkfifety + spanclose + spanclose + loclose + bottomsloa +spanouteight + spaninr + sboardrfifetyanchor + sboardfifety + anchorclose + spanclose + spanclose +      loclose  +  mainclose +  formclose + "</body>" + "</html>";

let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "componepx.html";
	}

	let file = __dirname + "/public/" + path;
      fs.writeFile(file, showschedule, "utf8", (err) => {
	  	if (err) {
	  		throw err
	  	} else {

	    fs.readFile(file, function(err, content) {
		  if (err) {
			console.log(`File not Found ${file}`);""
			res.send("File doesn't exist");
		} else {
			console.log(`Returning ${path}`);

			switch (path) {

				case "index.html":
				 res.writeHead(200, {"Content-type": "text/html"});
				res.send("File Missing!");
			}
		}
	});

	  	}

	  });

if(saya === bee) {
	console.log(req.body.firstName);
	res.send("True jon");
} else if(wewa === few) {
	res.send("True sam");

		} else {
	console.log("success");
	res.send("<div style='text-align: center; color:green;'>Parked Buses Status Updated Successfully!<br/><a href='https://travofast.herokuapp.com/usersparkedx/dashboards/componedbx' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div> ");
};

});

module.exports = router
