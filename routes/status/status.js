
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
router.get("/signatures/general/tgeneral", (req, res) => {

	res.render("users/signatures/general/tgeneral");

});
router.get("/dashboards/componedb", (req, res) => {

	res.render("users/dashboards/componedb");

});

router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var bee = "jon";
var few = "sam";
/*Company One*/
/*//Schedule Memory //*/
var skey = req.body.skey;
var bcompanynames = req.body.scompname;

var stimeone = req.body.stimeone;
var srouteone = req.body.srouteone;
var sbrandone = req.body.sbrandone;
var snumberone = req.body.snumberone;
var slocationone = req.body.slocationone;
var sparkone = req.body.sparkone;
var smoveone = req.body.smoveone;
var slightone = " ";
var sboardone = req.body.sboardone;

var stimetwo = req.body.stimetwo;
var sroutetwo = req.body.sroutetwo;
var sbrandtwo = req.body.sbrandtwo;
var snumbertwo = req.body.snumbertwo;
var slocationtwo = req.body.slocationtwo;
var sparktwo = req.body.sparktwo;
var spnotwo = req.body.spnotwo;
var smovetwo = req.body.smovetwo;
var slighttwo = " ";
var sboardtwo = req.body.sboardtwo;

var stimethree = req.body.stimethree;
var sroutethree = req.body.sroutethree;
var sbrandthree = req.body.sbrandthree;
var snumberthree = req.body.snumberthree;
var slocationthree = req.body.slocationthree;
var sparkthree = req.body.sparkthree;
var spnothree = req.body.spnothree;
var smovethree = req.body.smovethree;
var slightthree = " ";
var sboardthree = req.body.sboardthree;

var stimefour = req.body.stimefour;
var sroutefour = req.body.sroutefour;
var sbrandfour = req.body.sbrandfour;
var snumberfour = req.body.snumberfour;
var slocationfour = req.body.slocationfour;
var sparkfour = req.body.sparkfour;
var spnofour = req.body.spnofour;
var smovefour = req.body.smovefour;
var slightfour = " ";
var sboardfour = req.body.sboardfour;

var stimefive = req.body.stimefive;
var sroutefive = req.body.sroutefive;
var sbrandfive = req.body.sbrandfive;
var snumberfive = req.body.snumberfive;
var slocationfive = req.body.slocationfive;
var sparkfive = req.body.sparkfive;
var spnofive = req.body.spnofive;
var smovefive = req.body.smovefive;
var slightfive = " ";
var sboardfive = req.body.sboardfive;

var stimesix = req.body.stimesix;
var sroutesix = req.body.sroutesix;
var sbrandsix = req.body.sbrandsix;
var snumbersix = req.body.snumbersix;
var slocationsix = req.body.slocationsix;
var sparksix = req.body.sparksix;
var spnosix = req.body.spnosix;
var smovesix = req.body.smovesix;
var slightsix = " ";
var sboardsix = req.body.sboardsix;

var stimeseven = req.body.stimeseven;
var srouteseven = req.body.srouteseven;
var sbrandseven = req.body.sbrandseven;
var snumberseven = req.body.snumberseven;
var slocationseven = req.body.slocationseven;
var sparkseven = req.body.sparkseven;
var spnoseven = req.body.spnoseven;
var smoveseven = req.body.smoveseven;
var slightseven = " ";
var sboardseven = req.body.sboardseven;

var stimeeight = req.body.stimeeight;
var srouteeight = req.body.srouteeight;
var sbrandeight = req.body.sbrandeight;
var snumbereight = req.body.snumbereight;
var slocationeight = req.body.slocationeight;
var sparkeight = req.body.sparkeight;
var spnoeight = req.body.spnoeight;
var smoveeight = req.body.smoveeight;
var slighteight = " ";
var sboardeight = req.body.sboardeight;

var stimenine = req.body.stimenine;
var sroutenine = req.body.sroutenine;
var sbrandnine = req.body.sbrandnine;
var snumbernine = req.body.snumbernine;
var slocationnine = req.body.slocationnine;
var sparknine = req.body.sparknine;
var spnonine = req.body.spnonine;
var smovenine = req.body.smovenine;
var slightnine = " ";
var sboardnine = req.body.sboardnine;

var stimeten = req.body.stimeten;
var srouteten = req.body.srouteten;
var sbrandten = req.body.sbrandten;
var snumberten = req.body.snumberten;
var slocationten = req.body.slocationten;
var sparkten = req.body.sparkten;
var spnoten = req.body.spnoten;
var smoveten = req.body.smoveten;
var slightten = " ";
var sboardten = req.body.sboardten;

var stimeeleven = req.body.stimeeleven;
var srouteeleven = req.body.srouteeleven;
var sbrandeleven = req.body.sbrandeleven;
var snumbereleven = req.body.snumbereleven;
var slocationeleven = req.body.slocationeleven;
var sparkeleven = req.body.sparkeleven;
var spnoeleven = req.body.spnoeleven;
var smoveeleven = req.body.smoveeleven;
var slighteleven = " ";
var sboardeleven = req.body.sboardeleven;

var stimetwelve = req.body.stimetwelve;
var sroutetwelve = req.body.sroutetwelve;
var sbrandtwelve = req.body.sbrandtwelve;
var snumbertwelve = req.body.snumbertwelve;
var slocationtwelve = req.body.slocationtwelve;
var sparktwelve = req.body.sparktwelve;
var spnotwelve = req.body.spnotwelve;
var smovetwelve = req.body.smovetwelve;
var slighttwelve = " ";
var sboardtwelve = req.body.sboardtwelve;

var stimethirteen = req.body.stimethirteen;
var sroutethirteen = req.body.sroutethirteen;
var sbrandthirteen = req.body.sbrandthirteen;
var snumberthirteen = req.body.snumberthirteen;
var slocationthirteen = req.body.slocationthirteen;
var sparkthirteen = req.body.sparkthirteen;
var spnothirteen = req.body.spnothirteen;
var smovethirteen = req.body.smovethirteen;
var slightthirteen = " ";
var sboardthirteen = req.body.sboardthirteen;

var stimefourteen = req.body.stimefourteen;
var sroutefourteen = req.body.sroutefourteen;
var sbrandfourteen = req.body.sbrandfourteen;
var snumberfourteen = req.body.snumberfourteen;
var slocationfourteen = req.body.slocationfourteen;
var sparkfourteen = req.body.sparkfourteen;
var spnofourteen = req.body.spnofourteen;
var smovefourteen = req.body.smovefourteen;
var slightfourteen = " ";
var sboardfourteen = req.body.sboardfourteen;

var stimefifeteen = req.body.stimefifeteen;
var sroutefifeteen = req.body.sroutefifeteen;
var sbrandfifeteen = req.body.sbrandfifeteen;
var snumberfifeteen = req.body.snumberfifeteen;
var slocationfifeteen = req.body.slocationfifeteen;
var sparkfifeteen = req.body.sparkfifeteen;
var spnofifeteen = req.body.spnofifeteen;
var smovefifeteen = req.body.smovefifeteen;
var slightfifeteen = " ";
var sboardfifeteen = req.body.sboardfifeteen;

var stimesixteen = req.body.stimesixteen;
var sroutesixteen = req.body.sroutesixteen;
var sbrandsixteen = req.body.sbrandsixteen;
var snumbersixteen = req.body.snumbersixteen;
var slocationsixteen = req.body.slocationsixteen;
var sparksixteen = req.body.sparksixteen;
var spnosixteen = req.body.spnosixteen;
var smovesixteen = req.body.smovesixteen;
var slightsixteen = " ";
var sboardsixteen = req.body.sboardsixteen;

var stimeseventeen = req.body.stimeseventeen;
var srouteseventeen = req.body.srouteseventeen;
var sbrandseventeen = req.body.sbrandseventeen;
var snumberseventeen = req.body.snumberseventeen;
var slocationseventeen = req.body.slocationseventeen;
var sparkseventeen = req.body.sparkseventeen;
var spnoseventeen = req.body.spnoseventeen;
var smoveseventeen = req.body.smoveseventeen;
var slightseventeen = " ";
var sboardseventeen = req.body.sboardseventeen;

var stimeeighteen = req.body.stimeeighteen;
var srouteeighteen = req.body.srouteeighteen;
var sbrandeighteen = req.body.sbrandeighteen;
var snumbereighteen = req.body.snumbereighteen;
var slocationeighteen = req.body.slocationeighteen;
var sparkeighteen = req.body.sparkeighteen;
var spnoeighteen = req.body.spnoeighteen;
var smoveeighteen = req.body.smoveeighteen;
var slighteighteen = " ";
var sboardeighteen = req.body.sboardeighteen;

var stimenineteen = req.body.stimenineteen;
var sroutenineteen = req.body.sroutenineteen;
var sbrandnineteen = req.body.sbrandnineteen;
var snumbernineteen = req.body.snumbernineteen;
var slocationnineteen = req.body.slocationnineteen;
var sparknineteen = req.body.sparknineteen;
var spnonineteen = req.body.spnonineteen;
var smovenineteen = req.body.smovenineteen;
var slightnineteen = " ";
var sboardnineteen = req.body.sboardnineteen;

var stimetwenty = req.body.stimetwenty;
var sroutetwenty = req.body.sroutetwenty;
var sbrandtwenty = req.body.sbrandtwenty;
var snumbertwenty = req.body.snumbertwenty;
var slocationtwenty = req.body.slocationtwenty;
var sparktwenty = req.body.sparktwenty;
var spnotwenty = req.body.spnotwenty;
var smovetwenty = req.body.smovetwenty;
var slighttwenty = " ";
var sboardtwenty = req.body.sboardtwenty;

var stimetwentyone = req.body.stimetwentyone;
var sroutetwentyone = req.body.sroutetwentyone;
var sbrandtwentyone = req.body.sbrandtwentyone;
var snumbertwentyone = req.body.snumbertwentyone;
var slocationtwentyone = req.body.slocationtwentyone;
var sparktwentyone = req.body.sparktwentyone;
var spnotwentyone = req.body.spnotwentyone;
var smovetwentyone = req.body.smovetwentyone;
var slighttwentyone = " ";
var sboardtwentyone = req.body.sboardtwentyone;

var stimetwentytwo = req.body.stimetwentytwo;
var sroutetwentytwo = req.body.sroutetwentytwo;
var sbrandtwentytwo = req.body.sbrandtwentytwo;
var snumbertwentytwo = req.body.snumbertwentytwo;
var slocationtwentytwo = req.body.slocationtwentytwo;
var sparktwentytwo = req.body.sparktwentytwo;
var spnotwentytwo = req.body.spnotwentytwo;
var smovetwentytwo = req.body.smovetwentytwo;
var slighttwentytwo = " ";
var sboardtwentytwo = req.body.sboardtwentytwo;

var stimetwentythree = req.body.stimetwentythree;
var sroutetwentythree = req.body.sroutetwentythree;
var sbrandtwentythree = req.body.sbrandtwentythree;
var snumbertwentythree = req.body.snumbertwentythree;
var slocationtwentythree = req.body.slocationtwentythree;
var sparktwentythree = req.body.sparktwentythree;
var spnotwentythree = req.body.spnotwentythree;
var smovetwentythree = req.body.smovetwentythree;
var slighttwentythree = " ";
var sboardtwentythree = req.body.sboardtwentythree;

var stimetwentyfour = req.body.stimetwentyfour;
var sroutetwentyfour = req.body.sroutetwentyfour;
var sbrandtwentyfour = req.body.sbrandtwentyfour;
var snumbertwentyfour = req.body.snumbertwentyfour;
var slocationtwentyfour = req.body.slocationtwentyfour;
var sparktwentyfour = req.body.sparktwentyfour;
var spnotwentyfour = req.body.spnotwentyfour;
var smovetwentyfour = req.body.smovetwentyfour;
var slighttwentyfour = " ";
var sboardtwentyfour = req.body.sboardtwentyfour;

var stimetwentyfive = req.body.stimetwentyfive;
var sroutetwentyfive = req.body.sroutetwentyfive;
var sbrandtwentyfive = req.body.sbrandtwentyfive;
var snumbertwentyfive = req.body.snumbertwentyfive;
var slocationtwentyfive = req.body.slocationtwentyfive;
var sparktwentyfive = req.body.sparktwentyfive;
var spnotwentyfive = req.body.spnotwentyfive;
var smovetwentyfive = req.body.smovetwentyfive;
var slighttwentyfive = " ";
var sboardtwentyfive = req.body.sboardtwentyfive;

var stimetwentysix = req.body.stimetwentysix;
var sroutetwentysix = req.body.sroutetwentysix;
var sbrandtwentysix = req.body.sbrandtwentysix;
var snumbertwentysix = req.body.snumbertwentysix;
var slocationtwentysix = req.body.slocationtwentysix;
var sparktwentysix = req.body.sparktwentysix;
var spnotwentysix = req.body.spnotwentysix;
var smovetwentysix = req.body.smovetwentysix;
var slighttwentysix = " ";
var sboardtwentysix = req.body.sboardtwentysix;

var stimetwentyseven = req.body.stimetwentyseven;
var sroutetwentyseven = req.body.sroutetwentyseven;
var sbrandtwentyseven = req.body.sbrandtwentyseven;
var snumbertwentyseven = req.body.snumbertwentyseven;
var slocationtwentyseven = req.body.slocationtwentyseven;
var sparktwentyseven = req.body.sparktwentyseven;
var spnotwentyseven = req.body.spnotwentyseven;
var smovetwentyseven = req.body.smovetwentyseven;
var slighttwentyseven = " ";
var sboardtwentyseven = req.body.sboardtwentyseven;

var stimetwentyeight = req.body.stimetwentyeight;
var sroutetwentyeight = req.body.sroutetwentyeight;
var sbrandtwentyeight = req.body.sbrandtwentyeight;
var snumbertwentyeight = req.body.snumbertwentyeight;
var slocationtwentyeight = req.body.slocationtwentyeight;
var sparktwentyeight = req.body.sparktwentyeight;
var spnotwentyeight = req.body.spnotwentyeight;
var smovetwentyeight = req.body.smovetwentyeight;
var slighttwentyeight = " ";
var sboardtwentyeight = req.body.sboardtwentyeight;

var stimetwentynine = req.body.stimetwentynine;
var sroutetwentynine = req.body.sroutetwentynine;
var sbrandtwentynine = req.body.sbrandtwentynine;
var snumbertwentynine = req.body.snumbertwentynine;
var slocationtwentynine = req.body.slocationtwentynine;
var sparktwentynine = req.body.sparktwentynine;
var spnotwentynine = req.body.spnotwentynine;
var smovetwentynine = req.body.smovetwentynine;
var slighttwentynine = " ";
var sboardtwentynine = req.body.sboardtwentynine;

var stimethirty = req.body.stimethirty;
var sroutethirty = req.body.sroutethirty;
var sbrandthirty = req.body.sbrandthirty;
var snumberthirty = req.body.snumberthirty;
var slocationthirty = req.body.slocationthirty;
var sparkthirty = req.body.sparkthirty;
var spnothirty = req.body.spnothirty;
var smovethirty = req.body.smovethirty;
var slightthirty = " ";
var sboardthirty = req.body.sboardthirty;

var stimethirtyone = req.body.stimethirtyone;
var sroutethirtyone = req.body.sroutethirtyone;
var sbrandthirtyone = req.body.sbrandthirtyone;
var snumberthirtyone = req.body.snumberthirtyone;
var slocationthirtyone = req.body.slocationthirtyone;
var sparkthirtyone = req.body.sparkthirtyone;
var spnothirtyone = req.body.spnothirtyone;
var smovethirtyone = req.body.smovethirtyone;
var slightthirtyone = " ";
var sboardthirtyone = req.body.sboardthirtyone;

var stimethirtytwo = req.body.stimethirtytwo;
var sroutethirtytwo = req.body.sroutethirtytwo;
var sbrandthirtytwo = req.body.sbrandthirtytwo;
var snumberthirtytwo = req.body.snumberthirtytwo;
var slocationthirtytwo = req.body.slocationthirtytwo;
var sparkthirtytwo = req.body.sparkthirtytwo;
var spnothirtytwo = req.body.spnothirtytwo;
var smovethirtytwo = req.body.smovethirtytwo;
var slightthirtytwo = " ";
var sboardthirtytwo = req.body.sboardthirtytwo;

var stimethirtythree = req.body.stimethirtythree;
var sroutethirtythree = req.body.sroutethirtythree;
var sbrandthirtythree = req.body.sbrandthirtythree;
var snumberthirtythree = req.body.snumberthirtythree;
var slocationthirtythree = req.body.slocationthirtythree;
var sparkthirtythree = req.body.sparkthirtythree;
var spnothirtythree = req.body.spnothirtythree;
var smovethirtythree = req.body.smovethirtythree;
var slightthirtythree = " ";
var sboardthirtythree = req.body.sboardthirtythree;

var stimethirtyfour = req.body.stimethirtyfour;
var sroutethirtyfour = req.body.sroutethirtyfour;
var sbrandthirtyfour = req.body.sbrandthirtyfour;
var snumberthirtyfour = req.body.snumberthirtyfour;
var slocationthirtyfour = req.body.slocationthirtyfour;
var sparkthirtyfour = req.body.sparkthirtyfour;
var spnothirtyfour = req.body.spnothirtyfour;
var smovethirtyfour = req.body.smovethirtyfour;
var slightthirtyfour = " ";
var sboardthirtyfour = req.body.sboardthirtyfour;

var stimethirtyfive = req.body.stimethirtyfive;
var sroutethirtyfive = req.body.sroutethirtyfive;
var sbrandthirtyfive = req.body.sbrandthirtyfive;
var snumberthirtyfive = req.body.snumberthirtyfive;
var slocationthirtyfive = req.body.slocationthirtyfive;
var sparkthirtyfive = req.body.sparkthirtyfive;
var spnothirtyfive = req.body.spnothirtyfive;
var smovethirtyfive = req.body.smovethirtyfive;
var slightthirtyfive = " ";
var sboardthirtyfive = req.body.sboardthirtyfive;

var stimethirtysix = req.body.stimethirtysix;
var sroutethirtysix = req.body.sroutethirtysix;
var sbrandthirtysix = req.body.sbrandthirtysix;
var snumberthirtysix = req.body.snumberthirtysix;
var slocationthirtysix = req.body.slocationthirtysix;
var sparkthirtysix = req.body.sparkthirtysix;
var spnothirtysix = req.body.spnothirtysix;
var smovethirtysix = req.body.smovethirtysix;
var slightthirtysix = " ";
var sboardthirtysix = req.body.sboardthirtysix;

var stimethirtyseven = req.body.stimethirtyseven;
var sroutethirtyseven = req.body.sroutethirtyseven;
var sbrandthirtyseven = req.body.sbrandthirtyseven;
var snumberthirtyseven = req.body.snumberthirtyseven;
var slocationthirtyseven = req.body.slocationthirtyseven;
var sparkthirtyseven = req.body.sparkthirtyseven;
var spnothirtyseven = req.body.spnothirtyseven;
var smovethirtyseven = req.body.smovethirtyseven;
var slightthirtyseven = " ";
var sboardthirtyseven = req.body.sboardthirtyseven;

var stimethirtyeight = req.body.stimethirtyeight;
var sroutethirtyeight = req.body.sroutethirtyeight;
var sbrandthirtyeight = req.body.sbrandthirtyeight;
var snumberthirtyeight = req.body.snumberthirtyeight;
var slocationthirtyeight = req.body.slocationthirtyeight;
var sparkthirtyeight = req.body.sparkthirtyeight;
var spnothirtyeight = req.body.spnothirtyeight;
var smovethirtyeight = req.body.smovethirtyeight;
var slightthirtyeight = " ";
var sboardthirtyeight = req.body.sboardthirtyeight;

var stimethirtynine = req.body.stimethirtynine;
var sroutethirtynine = req.body.sroutethirtynine;
var sbrandthirtynine = req.body.sbrandthirtynine;
var snumberthirtynine = req.body.snumberthirtynine;
var slocationthirtynine = req.body.slocationthirtynine;
var sparkthirtynine = req.body.sparkthirtynine;
var spnothirtynine = req.body.spnothirtynine;
var smovethirtynine = req.body.smovethirtynine;
var slightthirtynine = " ";
var sboardthirtynine = req.body.sboardthirtynine;

var stimefourty = req.body.stimefourty;
var sroutefourty = req.body.sroutefourty;
var sbrandfourty = req.body.sbrandfourty;
var snumberfourty = req.body.snumberfourty;
var slocationfourty = req.body.slocationfourty;
var sparkfourty = req.body.sparkfourty;
var spnofourty = req.body.spnofourty;
var smovefourty = req.body.smovefourty;
var slightfourty  = " ";
var sboardfourty = req.body.sboardfourty;

var stimefourtyone = req.body.stimefourtyone;
var sroutefourtyone = req.body.sroutefourtyone;
var sbrandfourtyone = req.body.sbrandfourtyone;
var snumberfourtyone = req.body.snumberfourtyone;
var slocationfourtyone = req.body.slocationfourtyone;
var sparkfourtyone = req.body.sparkfourtyone;
var spnofourtyone = req.body.spnofourtyone;
var smovefourtyone = req.body.smovefourtyone;
var slightfourtyone  = " ";
var sboardfourtyone = req.body.sboardfourtyone;

var stimefourtytwo = req.body.stimefourtytwo;
var sroutefourtytwo = req.body.sroutefourtytwo;
var sbrandfourtytwo = req.body.sbrandfourtytwo;
var snumberfourtytwo = req.body.snumberfourtytwo;
var slocationfourtytwo = req.body.slocationfourtytwo;
var sparkfourtytwo = req.body.sparkfourtytwo;
var spnofourtytwo = req.body.spnofourtytwo;
var smovefourtytwo = req.body.smovefourtytwo;
var slightfourtytwo  = " ";
var sboardfourtytwo = req.body.sboardfourtytwo;

var stimefourtythree = req.body.stimefourtythree;
var sroutefourtythree = req.body.sroutefourtythree;
var sbrandfourtythree = req.body.sbrandfourtythree;
var snumberfourtythree = req.body.snumberfourtythree;
var slocationfourtythree = req.body.slocationfourtythree;
var sparkfourtythree = req.body.sparkfourtythree;
var spnofourtythree = req.body.spnofourtythreefourtythree;
var smovefourtythree = req.body.smovefourtythree;
var slightfourtythree  = " ";
var sboardfourtythree = req.body.sboardfourtythree;

var stimefourtyfour = req.body.stimefourtyfour;
var sroutefourtyfour = req.body.sroutefourtyfour;
var sbrandfourtyfour = req.body.sbrandfourtyfour;
var snumberfourtyfour = req.body.snumberfourtyfour;
var slocationfourtyfour = req.body.slocationfourtyfour;
var sparkfourtyfour = req.body.sparkfourtyfour;
var spnofourtyfour = req.body.spnofourtyfour;
var smovefourtyfour = req.body.smovefourtyfour;
var slightfourtyfour  = " ";
var sboardfourtyfour = req.body.sboardfourtyfour;

var stimefourtyfive = req.body.stimefourtyfive;
var sroutefourtyfive = req.body.sroutefourtyfive;
var sbrandfourtyfive = req.body.sbrandfourtyfive;
var snumberfourtyfive = req.body.snumberfourtyfive;
var slocationfourtyfive = req.body.slocationfourtyfive;
var sparkfourtyfive = req.body.sparkfourtyfive;
var spnofourtyfive = req.body.spnofourtyfive;
var smovefourtyfive = req.body.smovefourtyfive;
var slightfourtyfive  = " ";
var sboardfourtyfive = req.body.sboardfourtyfive;

var stimefourtysix = req.body.stimefourtysix;
var sroutefourtysix = req.body.sroutefourtysix;
var sbrandfourtysix = req.body.sbrandfourtysix;
var snumberfourtysix = req.body.snumberfourtysix;
var slocationfourtysix = req.body.slocationfourtysix;
var sparkfourtysix = req.body.sparkfourtysix;
var spnofourtysix = req.body.spnofourtysix;
var smovefourtysix = req.body.smovefourtysix;
var slightfourtysix  = " ";
var sboardfourtysix = req.body.sboardfourtysix;

var stimefourtyseven = req.body.stimefourtyseven;
var sroutefourtyseven = req.body.sroutefourtyseven;
var sbrandfourtyseven = req.body.sbrandfourtyseven;
var snumberfourtyseven = req.body.snumberfourtyseven;
var slocationfourtyseven = req.body.slocationfourtyseven;
var sparkfourtyseven = req.body.sparkfourtyseven;
var spnofourtyseven = req.body.spnofourtyseven;
var smovefourtyseven = req.body.smovefourtyseven;
var slightfourtyseven  = " ";
var sboardfourtyseven = req.body.sboardfourtyseven;

var stimefourtyeight = req.body.stimefourtyeight;
var sroutefourtyeight = req.body.sroutefourtyeight;
var sbrandfourtyeight = req.body.sbrandfourtyeight;
var snumberfourtyeight = req.body.snumberfourtyeight;
var slocationfourtyeight = req.body.slocationfourtyeight;
var sparkfourtyeight = req.body.sparkfourtyeight;
var spnofourtyeight = req.body.spnofourtyeight;
var smovefourtyeight = req.body.smovefourtyeight;
var slightfourtyeight  = " ";
var sboardfourtyeight = req.body.sboardfourtyeight;

var stimefourtynine = req.body.stimefourtynine;
var sroutefourtynine = req.body.sroutefourtynine;
var sbrandfourtynine = req.body.sbrandfourtynine;
var snumberfourtynine = req.body.snumberfourtynine;
var slocationfourtynine = req.body.slocationfourtynine;
var sparkfourtynine = req.body.sparkfourtynine;
var spnofourtynine = req.body.spnofourtynine;
var smovefourtynine = req.body.smovefourtynine;
var slightfourtynine  = " ";
var sboardfourtynine = req.body.sboardfourtynine;

var stimefifety = req.body.stimefifety;
var sroutefifety = req.body.sroutefifety;
var sbrandfifety = req.body.sbrandfifety;
var snumberfifety = req.body.snumberfifety;
var slocationfifety = req.body.slocationfifety;
var sparkfifety = req.body.sparkfifety;
var spnofifety = req.body.spnofifety;
var smovefifety = req.body.smovefifety;
var slightfifety  = " ";
var sboardfifety = req.body.sboardfifety;



//compones out put structure;

var formopen = "<form name='major' id='major' class='majors' style='width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background-color: none !important;'>";
var formclose = "</form>";

var titlespan = "<span id='fortitle' style='width: auto; display: block; margin-left: 10%; background-color: ;'>";
var titlespana = "<span id='fortitle' style='width: auto; display: block; margin-left: 2%;'>";
var spanoutone = "<span id='spanroneoutone' class='spanroneoutonefma' style='width: 13%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: left; display: block;'>";
var spanouttwo = "<span id='spanroneouttwo' style='width: 20%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutthree = "<span id='spanroneoutthree' style='width: 18%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutfour = "<span id='spanroneoutfour' style='width: 18%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutfive = "<span id='spanroneoutfive' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutsix = "<span id='spanroneoutsix' style='width: 0%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; visibility: hidden;'>";
var spanoutseven = "<span id='spanroneoutseven' style='width: 10%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; text-align: center;'>";
var spanouteight = "<span id='spanroneouteight' class='spanroneouteightfm' style='width: 5%; height: auto; margin: 0; padding: 0; border: none; float: right; clear: right; display: block;'>";

var spanina = "<span id='spaninfs' style='width: auto; height: auto; padding: 8px 4px; margin: 0px 0 4px 0; display: block; background-color: pink;'>";
var spanin = "<span id='spanin' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: block; background-color: ;'>";

var spaninrcmp = "<span id='spaninrcmp' class='spaninrcmp' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: inline-block;'>";
var spaninroneone = "<span id='spanoneoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninronetwo = "<span id='spanoneouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninronethree = "<span id='spanoneoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninronefour = "<span id='spanoneoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninronefive = "<span id='spanoneoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninronesix = "<span id='spanoneoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninroneseven = "<span id='spanoneoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninroneeight = "<span id='spanoneouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwoone = "<span id='spantwooutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwotwo = "<span id='spantwoouttwo' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwothree = "<span id='spantwooutthree' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwofour = "<span id='spantwooutfour' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwofive = "<span id='spantwooutfive' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwosix = "<span id='spantwooutsix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwoseven = "<span id='spantwooutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwoeight = "<span id='spantwoouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";



var spaninrthreeone = "<span id='spanthreeoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreetwo = "<span id='spanthreeouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreethree = "<span id='spanthreeoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreefour = "<span id='spanthreeoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreefive = "<span id='spanthreeoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreesix = "<span id='spanthreeoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreeseven = "<span id='spanthreeoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthreeeight = "<span id='spanthreeouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourone = "<span id='spanfouroutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtwo = "<span id='spanfourouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourthree = "<span id='spanfouroutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourfour = "<span id='spanfouroutfour' class='spanouttwotosix' class='spanouttwotoeight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourfive = "<span id='spanfouroutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfoursix = "<span id='spanfouroutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourseven = "<span id='spanfouroutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfoureight = "<span id='spanfourouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfiveone = "<span id='spanfiveoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfivetwo = "<span id='spanfiveouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfivethree = "<span id='spanfiveoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfivefour = "<span id='spanfiveoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfivefive = "<span id='spanfiveoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfivesix = "<span id='spanfiveoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfiveseven = "<span id='spanfiveoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfiveeight = "<span id='spanfiveouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrsixone = "<span id='spansixoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixtwo = "<span id='spansixouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixthree = "<span id='spansixoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixfour = "<span id='spansixoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixfive = "<span id='spansixoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixsix = "<span id='spansixoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixseven = "<span id='spansixoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixeight = "<span id='spansixouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrsevenone = "<span id='spansevenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventwo = "<span id='spansevenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventhree = "<span id='spansevenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsevenfour = "<span id='spansevenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsevenfive = "<span id='spansevenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsevensix = "<span id='spansevenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsevenseven = "<span id='spansevenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseveneight = "<span id='spansevenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninreightone = "<span id='spaneightoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighttwo = "<span id='spaneightouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreightthree = "<span id='spaneightoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreightfour = "<span id='spaneightoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreightfive = "<span id='spaneightoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreightsix = "<span id='spaneightoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreightseven = "<span id='spaneightoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteight = "<span id='spaneightouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrnineone = "<span id='spannineoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrninetwo = "<span id='spannineouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrninethree = "<span id='spannineoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrninefour = "<span id='spannineoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrninefive = "<span id='spannineoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrninesix = "<span id='spannineoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineseven = "<span id='spannineoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineeight = "<span id='spannineouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtenone = "<span id='spantenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtentwo = "<span id='spantenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtenthree = "<span id='spantenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtenfour = "<span id='spantenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtenfive = "<span id='spantenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtensix = "<span id='spantenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtenseven = "<span id='spantenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrteneight = "<span id='spantenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrelevenone = "<span id='spanelevenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreleventwo = "<span id='spanelevenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreleventhree = "<span id='spanelevenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrelevenfour = "<span id='spanelevenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrelevenfive = "<span id='spanelevenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrelevensix = "<span id='spanelevenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrelevenseven = "<span id='spanelevenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreleveneight = "<span id='spanelevenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwelveone = "<span id='spantwelveoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelvetwo = "<span id='spantwelveouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelvethree = "<span id='spantwelveoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelvefour = "<span id='spantwelveoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelvefive = "<span id='spantwelveoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelvesix = "<span id='spantwelveoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelveseven = "<span id='spantwelveoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwelveeight = "<span id='spantwelveouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirteenone = "<span id='spanthirteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteentwo = "<span id='spanthirteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteenthree = "<span id='spanthirteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteenfour = "<span id='spanthirteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteenfive = "<span id='spanthirteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteensix = "<span id='spanthirteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteenseven = "<span id='spanthirteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirteeneight = "<span id='spanthirteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourteenone = "<span id='spanfourteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteentwo = "<span id='spanfourteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteenthree = "<span id='spanfourteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteenfour = "<span id='spanfourteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteenfive = "<span id='spanfourteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteensix = "<span id='spanfourteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteenseven = "<span id='spanfourteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourteeneight = "<span id='spanfourteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfifeteenone = "<span id='spanfifeteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteentwo = "<span id='spanfifeteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteenthree = "<span id='spanfifeteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteenfour = "<span id='spanfifeteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteenfive = "<span id='spanfifeteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteensix = "<span id='spanfifeteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteenseven = "<span id='spanfifeteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifeteeneight = "<span id='spanfifeteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrsixteenone = "<span id='spansixteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteentwo = "<span id='spansixteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteenthree = "<span id='spansixteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteenfour = "<span id='spansixteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteenfive = "<span id='spansixteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteensix = "<span id='spansixteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteenseven = "<span id='spansixteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrsixteeneight = "<span id='spansixteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrseventeenone = "<span id='spanseventeenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeentwo = "<span id='spanseventeenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeenthree = "<span id='spanseventeenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeenfour = "<span id='spanseventeenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeenfive = "<span id='spanseventeenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeensix = "<span id='spanseventeenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeenseven = "<span id='spanseventeenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrseventeeneight = "<span id='spanseventeenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninreighteenone = "<span id='spaneighteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteentwo = "<span id='spaneighteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteenthree = "<span id='spaneighteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteenfour = "<span id='spaneighteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteenfive = "<span id='spaneighteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteensix = "<span id='spaneighteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteenseven = "<span id='spaneighteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninreighteeneight = "<span id='spaneighteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrnineteenone = "<span id='spannineteenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteentwo = "<span id='spannineteenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteenthree = "<span id='spannineteenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteenfour = "<span id='spannineteenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteenfive = "<span id='spannineteenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteensix = "<span id='spannineteenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteenseven = "<span id='spannineteenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrnineteeneight = "<span id='spannineteenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentyone = "<span id='spantwentyoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwo = "<span id='spantwentyouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythree = "<span id='spantwentyoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfour = "<span id='spantwentyoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfive = "<span id='spantwentyoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysix = "<span id='spantwentyoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyseven = "<span id='spantwentyoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeight = "<span id='spantwentyouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentyoneone = "<span id='spantwentyoneoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyonetwo = "<span id='spantwentyoneouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyonethree = "<span id='spantwentyoneoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyonefour = "<span id='spantwentyoneoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyonefive = "<span id='spantwentyoneoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyonesix = "<span id='spantwentyoneoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyoneseven = "<span id='spantwentyoneoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyoneeight = "<span id='spantwentyoneouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentytwoone = "<span id='spantwentytwooutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwotwo = "<span id='spantwentytwoouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwothree = "<span id='spantwentytwooutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwofour = "<span id='spantwentytwooutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwofive = "<span id='spantwentytwooutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwosix = "<span id='spantwentytwooutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwoseven = "<span id='spantwentytwooutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentytwoeight = "<span id='spantwentytwoouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentythreeone = "<span id='spantwentythreeoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreetwo = "<span id='spantwentythreeouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreethree = "<span id='spantwentythreeoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreefour = "<span id='spantwentythreeoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreefive = "<span id='spantwentythreeoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreesix = "<span id='spantwentythreeoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreeseven = "<span id='spantwentythreeoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentythreeeight = "<span id='spantwentythreeouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentyfourone = "<span id='spantwentyfouroutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfourtwo = "<span id='spantwentyfourouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfourthree = "<span id='spantwentyfouroutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfourfour = "<span id='spantwentyfouroutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfourfive = "<span id='spantwentyfouroutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfoursix = "<span id='spantwentyfouroutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfourseven = "<span id='spantwentyfouroutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfoureight = "<span id='spantwentyfourouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentyfiveone = "<span id='spantwentyfiveoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfivetwo = "<span id='spantwentyfiveouttwo'  class='spanouttwotosix'style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfivethree = "<span id='spantwentyfiveoutthree'  class='spanouttwotosix'style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfivefour = "<span id='spantwentyfiveoutfour'  class='spanouttwotosix'style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfivefive = "<span id='spantwentyfiveoutfive'  class='spanouttwotosix'style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfivesix = "<span id='spantwentyfiveoutsix'  class='spanouttwotosix'style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfiveseven = "<span id='spantwentyfiveoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyfiveeight = "<span id='spantwentyfiveouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentysixone = "<span id='spantwentysixoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixtwo = "<span id='spantwentysixouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixthree = "<span id='spantwentysixoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixfour = "<span id='spantwentysixoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixfive = "<span id='spantwentysixoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixsix = "<span id='spantwentysixoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixseven = "<span id='spantwentysixoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysixeight = "<span id='spantwentysixouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentysevenone = "<span id='spantwentysevenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyseventwo = "<span id='spantwentysevenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyseventhree = "<span id='spantwentysevenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysevenfour = "<span id='spantwentysevenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysevenfive = "<span id='spantwentysevenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysevensix = "<span id='spantwentysevenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentysevenseven = "<span id='spantwentysevenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyseveneight = "<span id='spantwentysevenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentyeightone = "<span id='spantwentyeightoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeighttwo = "<span id='spantwentyeightouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeightthree = "<span id='spantwentyeightoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeightfour = "<span id='spantwentyeightoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeightfive = "<span id='spantwentyeightoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeightsix = "<span id='spantwentyeightoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeightseven = "<span id='spantwentyeightoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyeighteight = "<span id='spantwentyeightouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrtwentynineone = "<span id='spantwentynineoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyninetwo = "<span id='spantwentynineouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyninethree = "<span id='spantwentynineoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyninefour = "<span id='spantwentynineoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyninefive = "<span id='spantwentynineoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentyninesix = "<span id='spantwentynineoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentynineseven = "<span id='spantwentynineoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrtwentynineeight = "<span id='spantwentynineouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtyone = "<span id='spanthirtyoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwo = "<span id='spanthirtyouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythree = "<span id='spanthirtyoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfour = "<span id='spanthirtyoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfive = "<span id='spanthirtyoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysix = "<span id='spanthirtyoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyseven = "<span id='spanthirtyoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeight = "<span id='spanthirtyouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtyoneone = "<span id='spanthirtyoneoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyonetwo = "<span id='spanthirtyoneouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyonethree = "<span id='spanthirtyoneoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyonefour = "<span id='spanthirtyoneoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyonefive = "<span id='spanthirtyoneoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyonesix = "<span id='spanthirtyoneoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyoneseven = "<span id='spanthirtyoneoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyoneeight = "<span id='spanthirtyoneouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtytwoone = "<span id='spanthirtytwooutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwotwo = "<span id='spanthirtytwoouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwothree = "<span id='spanthirtytwooutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwofour = "<span id='spanthirtytwooutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwofive = "<span id='spanthirtytwooutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwosix = "<span id='spanthirtytwooutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwoseven = "<span id='spanthirtytwooutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtytwoeight = "<span id='spanthirtytwoouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtythreeone = "<span id='spanthirtythreeoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreetwo = "<span id='spanthirtythreeouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreethree = "<span id='spanthirtythreeoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreefour = "<span id='spanthirtythreeoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreefive = "<span id='spanthirtythreeoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreesix = "<span id='spanthirtythreeoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreeseven = "<span id='spanthirtythreeoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtythreeeight = "<span id='spanthirtythreeouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtyfourone = "<span id='spanthirtyfouroutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfourtwo = "<span id='spanthirtyfourouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfourthree = "<span id='spanthirtyfouroutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfourfour = "<span id='spanthirtyfouroutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfourfive = "<span id='spanthirtyfouroutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfoursix = "<span id='spanthirtyfouroutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfourseven = "<span id='spanthirtyfouroutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfoureight = "<span id='spanthirtyfourouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtyfiveone = "<span id='spanthirtyfiveoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfivetwo = "<span id='spanthirtyfiveouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfivethree = "<span id='spanthirtyfiveoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfivefour = "<span id='spanthirtyfiveoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfivefive = "<span id='spanthirtyfiveoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfivesix = "<span id='spanthirtyfiveoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfiveseven = "<span id='spanthirtyfiveoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyfiveeight = "<span id='spanthirtyfiveouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtysixone = "<span id='spanthirtysixoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixtwo = "<span id='spanthirtysixouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixthree = "<span id='spanthirtysixoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixfour = "<span id='spanthirtysixoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixfive = "<span id='spanthirtysixoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixsix = "<span id='spanthirtysixoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixseven = "<span id='spanthirtysixoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysixeight = "<span id='spanthirtysixouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtysevenone = "<span id='spanthirtysevenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyseventwo = "<span id='spanthirtysevenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyseventhree = "<span id='spanthirtysevenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysevenfour = "<span id='spanthirtysevenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysevenfive = "<span id='spanthirtysevenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysevensix = "<span id='spanthirtysevenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtysevenseven = "<span id='spanthirtysevenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyseveneight = "<span id='spanthirtysevenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtyeightone = "<span id='spanthirtyeightoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeighttwo = "<span id='spanthirtyeightouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeightthree = "<span id='spanthirtyeightoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeightfour = "<span id='spanthirtyeightoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeightfive = "<span id='spanthirtyeightoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeightsix = "<span id='spanthirtyeightoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeightseven = "<span id='spanthirtyeightoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyeighteight = "<span id='spanthirtyeightouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrthirtynineone = "<span id='spanthirtynineoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyninetwo = "<span id='spanthirtynineouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyninethree = "<span id='spanthirtynineoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyninefour = "<span id='spanthirtynineoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyninefive = "<span id='spanthirtynineoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtyninesix = "<span id='spanthirtynineoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtynineseven = "<span id='spanthirtynineoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrthirtynineeight = "<span id='spanthirtynineouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtyone = "<span id='spanfourtyoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwo = "<span id='spanfourtyouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythree = "<span id='spanfourtyoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfour = "<span id='spanfourtyoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfive = "<span id='spanfourtyoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysix = "<span id='spanfourtyoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyseven = "<span id='spanfourtyoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeight = "<span id='spanfourtyouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtyoneone = "<span id='spanfourtyoneoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyonetwo = "<span id='spanfourtyoneouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyonethree = "<span id='spanfourtyoneoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyonefour = "<span id='spanfourtyoneoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyonefive = "<span id='spanfourtyoneoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyonesix = "<span id='spanfourtyoneoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyoneseven = "<span id='spanfourtyoneoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyoneeight = "<span id='spanfourtyoneouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtytwoone = "<span id='spanfourtytwooutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwotwo = "<span id='spanfourtytwoouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwothree = "<span id='spanfourtytwooutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwofour = "<span id='spanfourtytwooutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwofive = "<span id='spanfourtytwooutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwosix = "<span id='spanfourtytwooutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwoseven = "<span id='spanfourtytwooutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtytwoeight = "<span id='spanfourtytwoouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtythreeone = "<span id='spanfourtythreeoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreetwo = "<span id='spanfourtythreeouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreethree = "<span id='spanfourtythreeoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreefour = "<span id='spanfourtythreeoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreefive = "<span id='spanfourtythreeoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreesix = "<span id='spanfourtythreeoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreeseven = "<span id='spanfourtythreeoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtythreeeight = "<span id='spanfourtythreeouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtyfourone = "<span id='spanfourtyfouroutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfourtwo = "<span id='spanfourtyfourouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfourthree = "<span id='spanfourtyfouroutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfourfour = "<span id='spanfourtyfouroutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfourfive = "<span id='spanfourtyfouroutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfoursix = "<span id='spanfourtyfouroutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfourseven = "<span id='spanfourtyfouroutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfoureight = "<span id='spanfourtyfourouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtyfiveone = "<span id='spanfourtyfiveoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfivetwo = "<span id='spanfourtyfiveouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfivethree = "<span id='spanfourtyfiveoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfivefour = "<span id='spanfourtyfiveoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfivefive = "<span id='spanfourtyfiveoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfivesix = "<span id='spanfourtyfiveoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfiveseven = "<span id='spanfourtyfiveoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyfiveeight = "<span id='spanfourtyfiveouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtysixone = "<span id='spanfourtysixoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixtwo = "<span id='spanfourtysixouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixthree = "<span id='spanfourtysixoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixfour = "<span id='spanfourtysixoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixfive = "<span id='spanfourtysixoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixsix = "<span id='spanfourtysixoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixseven = "<span id='spanfourtysixoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysixeight = "<span id='spanfourtysixouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtysevenone = "<span id='spanfourtysevenoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyseventwo = "<span id='spanfourtysevenouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyseventhree = "<span id='spanfourtysevenoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysevenfour = "<span id='spanfourtysevenoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysevenfive = "<span id='spanfourtysevenoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysevensix = "<span id='spanfourtysevenoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtysevenseven = "<span id='spanfourtysevenoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyseveneight = "<span id='spanfourtysevenouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtyeightone = "<span id='spanfourtyeightoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeighttwo = "<span id='spanfourtyeightouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeightthree = "<span id='spanfourtyeightoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeightfour = "<span id='spanfourtyeightoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeightfive = "<span id='spanfourtyeightoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeightsix = "<span id='spanfourtyeightoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeightseven = "<span id='spanfourtyeightoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyeighteight = "<span id='spanfourtyeightouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfourtynineone = "<span id='spanfourtynineoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyninetwo = "<span id='spanfourtynineouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyninethree = "<span id='spanfourtynineoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyninefour = "<span id='spanfourtynineoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyninefive = "<span id='spanfourtynineoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtyninesix = "<span id='spanfourtynineoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtynineseven = "<span id='spanfourtynineoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfourtynineeight = "<span id='spanfourtynineouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";

var spaninrfifetyone = "<span id='spanfifetyoutone' class='spanoutforone' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetytwo = "<span id='spanfifetyouttwo' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetythree = "<span id='spanfifetyoutthree' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetyfour = "<span id='spanfifetyoutfour' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetyfive = "<span id='spanfifetyoutfive' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetysix = "<span id='spanfifetyoutsix' class='spanouttwotosix' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetyseven = "<span id='spanfifetyoutseven' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";
var spaninrfifetyeight = "<span id='spanfifetyouteight' style='width: auto; height: auto; padding: 4px; margin: 4px 0; display: block;'>";





var spanclose = "</span>";

var smoveroneinput = "<input type='text' name='smoveone' id='smoveone' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightroneinput = "<input type='text' name='slightone' id='slightone' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardroneanchor = "<a href='../msrc/publicts/index.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";


var smovertwoinput = "<input type='text' name='smovetwo' id='smovetwo' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwoinput = "<input type='text' name='slighttwo' id='slighttwo' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwoanchor = "<a href='' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smoverthreeinput = "<input type='text' name='smovethree' id='smovethree' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthreeinput = "<input type='text' name='slightthree' id='slightthree' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthreeanchor = "<a href='' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smoverfourinput = "<input type='text' name='smovefour' id='smovefour' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourinput = "<input type='text' name='slightfour' id='slightfour' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfouranchor = "<a href='' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";




var smoverfiveinput = "<input type='text' name='smovefive' id='smovefive' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfiveinput = "<input type='text' name='slightfive' id='slightfive' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfiveanchor = "<a href='' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoversixinput = "<input type='text' name='smovesix' id='smovesix' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrsixinput = "<input type='text' name='slightsix' id='slightsix' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrsixanchor = "<a href='' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverseveninput = "<input type='text' name='smoveseven' id='smoveseven' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrseveninput = "<input type='text' name='slightseven' id='slightseven' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrsevenanchor = "<a href='' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovereightinput = "<input type='text' name='smoveeight' id='smoveeight' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightreightinput = "<input type='text' name='slighteight' id='slighteight' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardreightanchor = "<a href='' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovernineinput = "<input type='text' name='smovenine' id='smovenine' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrnineinput = "<input type='text' name='slightnine' id='slightnine' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrnineanchor = "<a href='' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverteninput = "<input type='text' name='smoveten' id='smoveten' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrteninput = "<input type='text' name='slightten' id='slightten' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtenanchor = "<a href='' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovereleveninput = "<input type='text' name='smoveeleven' id='smoveeleven' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightreleveninput = "<input type='text' name='slighteleven' id='slighteleven' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrelevenanchor = "<a href='' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwelveinput = "<input type='text' name='smovetwelve' id='smovetwelve' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwelveinput = "<input type='text' name='slighttwelve' id='slighttwelve' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwelveanchor = "<a href='' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirteeninput = "<input type='text' name='smovethirteen' id='smovethirteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirteeninput = "<input type='text' name='slightthirteen' id='slightthirteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirteenanchor = "<a href='' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smoverfourteeninput = "<input type='text' name='smovefourteen' id='smovefourteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourteeninput = "<input type='text' name='slightfourteen' id='slightfourteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourteenanchor = "<a href='' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";




var smoverfifeteeninput = "<input type='text' name='smovefifeteen' id='smovefifeteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfifeteeninput = "<input type='text' name='slightfifeteen' id='slightfifeteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfifeteenanchor = "<a href='' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoversixteeninput = "<input type='text' name='smovesixteen' id='smovesixteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrsixteeninput = "<input type='text' name='slightsixteen' id='slightsixteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrsixteenanchor = "<a href='' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverseventeeninput = "<input type='text' name='smoveseventeen' id='smoveseventeen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrseventeeninput = "<input type='text' name='slightseventeen' id='slightseventeen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrseventeenanchor = "<a href='' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovereighteeninput = "<input type='text' name='smoveeighteen' id='smoveeighteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightreighteeninput = "<input type='text' name='slighteighteen' id='slighteighteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardreighteenanchor = "<a href='' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovernineteeninput = "<input type='text' name='smovenineteen' id='smovenineteen' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrnineteeninput = "<input type='text' name='slightnineteen' id='slightnineteen' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrnineteenanchor = "<a href='' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentyinput = "<input type='text' name='smovetwenty' id='smovetwenty' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyinput = "<input type='text' name='slighttwenty' id='slighttwenty' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentyanchor = "<a href='' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentyoneinput = "<input type='text' name='smovetwentyone' id='smovetwentyone' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyoneinput = "<input type='text' name='slighttwentyone' id='slighttwentyone' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentyoneanchor = "<a href='' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentytwoinput = "<input type='text' name='smovetwentytwo' id='smovetwentytwo' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentytwoinput = "<input type='text' name='slighttwentytwo' id='slighttwentytwo' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentytwoanchor = "<a href='' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentythreeinput = "<input type='text' name='smovetwentythree' id='smovetwentythree' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentythreeinput = "<input type='text' name='slighttwentythree' id='slighttwentythree' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentythreeanchor = "<a href='' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smovertwentyfourinput = "<input type='text' name='smovetwentyfour' id='smovetwentyfour' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyfourinput = "<input type='text' name='slighttwentyfour' id='slighttwentyfour' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentyfouranchor = "<a href='' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";




var smovertwentyfiveinput = "<input type='text' name='smovetwentyfive' id='smovetwentyfive' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyfiveinput = "<input type='text' name='slighttwentyfive' id='slighttwentyfive' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentyfiveanchor = "<a href='' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentysixinput = "<input type='text' name='smovetwentysix' id='smovetwentysix' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentysixinput = "<input type='text' name='slighttwentysix' id='slighttwentysix' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentysixanchor = "<a href='' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentyseveninput = "<input type='text' name='smovetwentyseven' id='smovetwentyseven' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyseveninput = "<input type='text' name='slighttwentyseven' id='slighttwentyseven' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentysevenanchor = "<a href='' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentyeightinput = "<input type='text' name='smovetwentyeight' id='smovetwentyeight' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentyeightinput = "<input type='text' name='slighttwentyeight' id='slighttwentyeight' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentyeightanchor = "<a href='' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smovertwentynineinput = "<input type='text' name='smovetwentynine' id='smovetwentynine' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrtwentynineinput = "<input type='text' name='slighttwentynine' id='slighttwentynine' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrtwentynineanchor = "<a href='' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtyinput = "<input type='text' name='smovethirty' id='smovethirty' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyinput = "<input type='text' name='slightthirty' id='slightthirty' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtyanchor = "<a href='' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtyoneinput = "<input type='text' name='smovethirtyone' id='smovethirtyone' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyoneinput = "<input type='text' name='slightthirtyone' id='slightthirtyone' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtyoneanchor = "<a href='' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtytwoinput = "<input type='text' name='smovethirtytwo' id='smovethirtytwo' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtytwoinput = "<input type='text' name='slightthirtytwo' id='slightthirtytwo' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtytwoanchor = "<a href='' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtythreeinput = "<input type='text' name='smovethirtythree' id='smovethirtythree' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtythreeinput = "<input type='text' name='slightthirtythree' id='slightthirtythree' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtythreeanchor = "<a href='' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smoverthirtyfourinput = "<input type='text' name='smovethirtyfour' id='smovethirtyfour' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyfourinput = "<input type='text' name='slightthirtyfour' id='slightthirtyfour' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtyfouranchor = "<a href='' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";




var smoverthirtyfiveinput = "<input type='text' name='smovethirtyfive' id='smovethirtyfive' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyfiveinput = "<input type='text' name='slightthirtyfive' id='slightthirtyfive' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtyfiveanchor = "<a href='' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtysixinput = "<input type='text' name='smovethirtysix' id='smovethirtysix' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtysixinput = "<input type='text' name='slightthirtysix' id='slightthirtysix' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtysixanchor = "<a href='' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtyseveninput = "<input type='text' name='smovethirtyseven' id='smovethirtyseven' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyseveninput = "<input type='text' name='slightthirtyseven' id='slightthirtyseven' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtysevenanchor = "<a href='' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtyeightinput = "<input type='text' name='smovethirtyeight' id='smovethirtyeight' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtyeightinput = "<input type='text' name='slightthirtyeight' id='slightthirtyeight' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtyeightanchor = "<a href='' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverthirtynineinput = "<input type='text' name='smovethirtynine' id='smovethirtynine' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrthirtynineinput = "<input type='text' name='slightthirtynine' id='slightthirtynine' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrthirtynineanchor = "<a href='' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtyinput = "<input type='text' name='smovefourty' id='smovefourty' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyinput = "<input type='text' name='slightfourty' id='slightfourty' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtyanchor = "<a href='' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtyoneinput = "<input type='text' name='smovefourtyone' id='smovefourtyone' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyoneinput = "<input type='text' name='slightfourtyone' id='slightfourtyone' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtyoneanchor = "<a href='' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtytwoinput = "<input type='text' name='smovefourtytwo' id='smovefourtytwo' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtytwoinput = "<input type='text' name='slightfourtytwo' id='slightfourtytwo' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtytwoanchor = "<a href='' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtythreeinput = "<input type='text' name='smovefourtythree' id='smovefourtythree' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtythreeinput = "<input type='text' name='slightfourtythree' id='slightfourtythree' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtythreeanchor = "<a href='' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";



var smoverfourtyfourinput = "<input type='text' name='smovefourtyfour' id='smovefourtyfour' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyfourinput = "<input type='text' name='slightfourtyfour' id='slightfourtyfour' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtyfouranchor = "<a href='' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";




var smoverfourtyfiveinput = "<input type='text' name='smovefourtyfive' id='smovefourtyfive' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyfiveinput = "<input type='text' name='slightfourtyfive' id='slightfourtyfive' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtyfiveanchor = "<a href='' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtysixinput = "<input type='text' name='smovefourtysix' id='smovefourtysix' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtysixinput = "<input type='text' name='slightfourtysix' id='slightfourtysix' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtysixanchor = "<a href='' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtyseveninput = "<input type='text' name='smovefourtyseven' id='smovefourtyseven' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyseveninput = "<input type='text' name='slightfourtyseven' id='slightfourtyseven' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtysevenanchor = "<a href='' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtyeightinput = "<input type='text' name='smovefourtyeight' id='smovefourtyeight' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtyeightinput = "<input type='text' name='slightfourtyeight' id='slightfourtyeight' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtyeightanchor = "<a href='' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfourtynineinput = "<input type='text' name='smovefourtynine' id='smovefourtynine' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfourtynineinput = "<input type='text' name='slightfourtynine' id='slightfourtynine' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfourtynineanchor = "<a href='' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";






var smoverfifetyinput = "<input type='text' name='smovefifety' id='smovefifety' style='height: auto; width: 20px; min-height: 0px; text-align: right;' readonly/>";
var slightrfifetyinput = "<input type='text' name='slightfifety' id='slightfifety' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none;' readonly/>";
var sboardrfifetyanchor = "<a href='' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0.5px 8px; text-decoration: none; margin-top: 2px; display: inline-block;'>";

var anchorclose = "</a>";
var keydivsa = "<div class='alldivsa' style='background-color: ; padding: 4px;'>";
var keydivs = "<div class='alldivs' style='background-color: ; padding: 4px;'>";
var keydivsb = "<div class='alldivsb' style='background-color: ; padding: 4px;'>";
var divclose = "</div>";
var keylightone = "<input type='text' name='keylightone' id='keylightone' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none; background-color: green;' readonly/>";
var keylighttwo = "<input type='text' name='keylighttwo' id='keylighttwo' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none; background-color: yellow;' readonly/>";
var keylightthree = "<input type='text' name='keylightthree' id='keylightthree' style='width: 18px; height: 18px; margin: ; border-radius: 26px/24px; min-height: 0px; border: none; background-color: red;' readonly/>";
var labelonespan = "<span class='labelonespan' style='display: inline-block; padding-left: 15px;'>";
var labeltwospan = "<span class='labeltwospan' style='display: inline-block; padding-left: 15px;'>";
var labeltwospan = "<span class='labeltwospan' style='display: inline-block; padding-left: 15px;'>";


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
var mainyy = "<main id='mainyy' class='mainyy' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainzz = "<main id='mainzz' class='mainzz' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainclose = "</main>";
var loclose = "</div>";
var leftloa = "<div class='leftloa' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloae = "<div class='leftloae' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var rightsloa = "<div class='rightsloa' style='width: 100%; background-color: brown; margin: 0; padding: 0; border: none;'>";
var bottomsloa = "<div class='bottomsloa' style=' width: 100%; margin: 0; padding: 0; border: none;'>";



var valuesixstring = "document.major.smoveone.value";
var valuesevenstring = "document.major.slightone.value";

var valuesixstringa = "document.major.smovetwo.value";
var valuesevenstringa = "document.major.slighttwo.value";

var valuesixstringb = "document.major.smovethree.value";
var valuesevenstringb = "document.major.slightthree.value";

var valuesixstringc = "document.major.smovefour.value";
var valuesevenstringc = "document.major.slightfour.value";

var valuesixstringd = "document.major.smovefive.value";
var valuesevenstringd = "document.major.slightfive.value";

var valuesixstringe = "document.major.smovesix.value";
var valuesevenstringe = "document.major.slightsix.value";

var valuesixstringf = "document.major.smoveseven.value";
var valuesevenstringf = "document.major.slightseven.value";

var valuesixstringg = "document.major.smoveeight.value";
var valuesevenstringg = "document.major.slighteight.value";

var valuesixstringh = "document.major.smovenine.value";
var valuesevenstringh = "document.major.slightnine.value";

var valuesixstringi = "document.major.smoveten.value";
var valuesevenstringi = "document.major.slightten.value";

var valuesixstringj = "document.major.smoveeleven.value";
var valuesevenstringj = "document.major.slighteleven.value";

var valuesixstringk = "document.major.smovetwelve.value";
var valuesevenstringk = "document.major.slighttwelve.value";

var valuesixstringl = "document.major.smovethirteen.value";
var valuesevenstringl = "document.major.slightthirteen.value";

var valuesixstringm = "document.major.smovefourteen.value";
var valuesevenstringm = "document.major.slightfourteen.value";

var valuesixstringn = "document.major.smovefifeteen.value";
var valuesevenstringn = "document.major.slightfifeteen.value";

var valuesixstringo = "document.major.smovesixteen.value";
var valuesevenstringo = "document.major.slightsixteen.value";

var valuesixstringp = "document.major.smoveseventeen.value";
var valuesevenstringp = "document.major.slightseventeen.value";

var valuesixstringq = "document.major.smoveeighteen.value";
var valuesevenstringq = "document.major.slighteighteen.value";

var valuesixstringr = "document.major.smovenineteen.value";
var valuesevenstringr = "document.major.slightnineteen.value";

var valuesixstrings= "document.major.smovetwenty.value";
var valuesevenstrings = "document.major.slighttwenty.value";

var valuesixstringt = "document.major.smovetwentyone.value";
var valuesevenstringt = "document.major.slighttwentyone.value";

var valuesixstringu = "document.major.smovetwentytwo.value";
var valuesevenstringu = "document.major.slighttwentytwo.value";

var valuesixstringv = "document.major.smovetwentythree.value";
var valuesevenstringv = "document.major.slighttwentythree.value";

var valuesixstringw = "document.major.smovetwentyfour.value";
var valuesevenstringw = "document.major.slighttwentyfour.value";

var valuesixstringx = "document.major.smovetwentyfive.value";
var valuesevenstringx = "document.major.slighttwentyfive.value";

var valuesixstringy = "document.major.smovetwentysix.value";
var valuesevenstringy = "document.major.slighttwentysix.value";

var valuesixstringz = "document.major.smovetwentyseven.value";
var valuesevenstringz = "document.major.slighttwentyseven.value";

var valuesixstringaa = "document.major.smovetwentyeight.value";
var valuesevenstringaa = "document.major.slighttwentyeight.value";

var valuesixstringbb = "document.major.smovetwentynine.value";
var valuesevenstringbb = "document.major.slighttwentynine.value";

var valuesixstringcc = "document.major.smovethirty.value";
var valuesevenstringcc = "document.major.slightthirty.value";

var valuesixstringdd = "document.major.smovethirtyone.value";
var valuesevenstringdd = "document.major.slightthirtyone.value";

var valuesixstringee = "document.major.smovethirtytwo.value";
var valuesevenstringee = "document.major.slightthirtytwo.value";

var valuesixstringff = "document.major.smovethirtythree.value";
var valuesevenstringff = "document.major.slightthirtythree.value";

var valuesixstringgg = "document.major.smovethirtyfour.value";
var valuesevenstringgg = "document.major.slightthirtyfour.value";

var valuesixstringhh = "document.major.smovethirtyfive.value";
var valuesevenstringhh = "document.major.slightthirtyfive.value";

var valuesixstringii = "document.major.smovethirtysix.value";
var valuesevenstringii = "document.major.slightthirtysix.value";

var valuesixstringjj = "document.major.smovethirtyseven.value";
var valuesevenstringjj = "document.major.slightthirtyseven.value";

var valuesixstringkk = "document.major.smovethirtyeight.value";
var valuesevenstringkk = "document.major.slightthirtyeight.value";

var valuesixstringll = "document.major.smovethirtynine.value";
var valuesevenstringll = "document.major.slightthirtynine.value";

var valuesixstringmm = "document.major.smovefourty.value";
var valuesevenstringmm = "document.major.slightfourty.value";

var valuesixstringnn = "document.major.smovefourtyone.value";
var valuesevenstringnn = "document.major.slightfourtyone.value";

var valuesixstringoo = "document.major.smovefourtytwo.value";
var valuesevenstringoo = "document.major.slightfourtytwo.value";

var valuesixstringpp = "document.major.smovefourtythree.value";
var valuesevenstringpp = "document.major.slightfourtythree.value";

var valuesixstringqq = "document.major.smovefourtyfour.value";
var valuesevenstringqq = "document.major.slightfourtyfour.value";

var valuesixstringrr = "document.major.smovefourtyfive.value";
var valuesevenstringrr = "document.major.slightfourtyfive.value";

var valuesixstringss = "document.major.smovefourtysix.value";
var valuesevenstringss = "document.major.slightfourtysix.value";

var valuesixstringtt = "document.major.smovefourtyseven.value";
var valuesevenstringtt = "document.major.slightfourtyseven.value";

var valuesixstringuu = "document.major.smovefourtyeight.value";
var valuesevenstringuu = "document.major.slightfourtyeight.value";

var valuesixstringvv = "document.major.smovefourtynine.value";
var valuesevenstringvv = "document.major.slightfourtynine.value";

var valuesixstringww = "document.major.smovefifety.value";
var valuesevenstringww = "document.major.slightfifety.value";

var valuecolorstring = "document.major.slightone.style.backgroundColor";
var valuecolorstringa = "document.major.slighttwo.style.backgroundColor";
var valuecolorstringb = "document.major.slightthree.style.backgroundColor";
var valuecolorstringc = "document.major.slightfour.style.backgroundColor";
var valuecolorstringd = "document.major.slightfive.style.backgroundColor";
var valuecolorstringe = "document.major.slightsix.style.backgroundColor";
var valuecolorstringf = "document.major.slightseven.style.backgroundColor";
var valuecolorstringg = "document.major.slighteight.style.backgroundColor";
var valuecolorstringh = "document.major.slightnine.style.backgroundColor";
var valuecolorstringi = "document.major.slightten.style.backgroundColor";
var valuecolorstringj = "document.major.slighteleven.style.backgroundColor";
var valuecolorstringk = "document.major.slighttwelve.style.backgroundColor";
var valuecolorstringl = "document.major.slightthirteen.style.backgroundColor";
var valuecolorstringm = "document.major.slightfourteen.style.backgroundColor";
var valuecolorstringn = "document.major.slightfifeteen.style.backgroundColor";
var valuecolorstringo = "document.major.slightsixteen.style.backgroundColor";
var valuecolorstringp = "document.major.slightseventeen.style.backgroundColor";
var valuecolorstringq = "document.major.slighteighteen.style.backgroundColor";
var valuecolorstringr = "document.major.slightnineteen.style.backgroundColor";
var valuecolorstrings = "document.major.slighttwenty.style.backgroundColor";
var valuecolorstringt = "document.major.slighttwentyone.style.backgroundColor";
var valuecolorstringu = "document.major.slighttwentytwo.style.backgroundColor";
var valuecolorstringv = "document.major.slighttwentythree.style.backgroundColor";
var valuecolorstringw = "document.major.slighttwentyfour.style.backgroundColor";
var valuecolorstringx = "document.major.slighttwentyfive.style.backgroundColor";
var valuecolorstringy = "document.major.slighttwentysix.style.backgroundColor";
var valuecolorstringz = "document.major.slighttwentyseven.style.backgroundColor";
var valuecolorstringaa = "document.major.slighttwentyeight.style.backgroundColor";
var valuecolorstringbb = "document.major.slighttwentynine.style.backgroundColor";
var valuecolorstringcc = "document.major.slightthirty.style.backgroundColor";
var valuecolorstringdd = "document.major.slightthirtyone.style.backgroundColor";
var valuecolorstringee = "document.major.slightthirtytwo.style.backgroundColor";
var valuecolorstringff = "document.major.slightthirtythree.style.backgroundColor";
var valuecolorstringgg = "document.major.slightthirtyfour.style.backgroundColor";
var valuecolorstringhh = "document.major.slightthirtyfive.style.backgroundColor";
var valuecolorstringii = "document.major.slightthirtysix.style.backgroundColor";
var valuecolorstringjj = "document.major.slightthirtyseven.style.backgroundColor";
var valuecolorstringkk = "document.major.slightthirtyeight.style.backgroundColor";
var valuecolorstringll = "document.major.slightthirtynine.style.backgroundColor";
var valuecolorstringmm = "document.major.slightfourty.style.backgroundColor";
var valuecolorstringnn = "document.major.slightfourtyone.style.backgroundColor";
var valuecolorstringoo = "document.major.slightfourtytwo.style.backgroundColor";
var valuecolorstringpp = "document.major.slightfourtythree.style.backgroundColor";
var valuecolorstringqq = "document.major.slightfourtyfour.style.backgroundColor";
var valuecolorstringrr = "document.major.slightfourtyfive.style.backgroundColor";
var valuecolorstringss = "document.major.slightfourtysix.style.backgroundColor";
var valuecolorstringtt = "document.major.slightfourtyseven.style.backgroundColor";
var valuecolorstringuu = "document.major.slightfourtyeight.style.backgroundColor";
var valuecolorstringvv = "document.major.slightfourtynine.style.backgroundColor";
var valuecolorstringww = "document.major.slightfifety.style.backgroundColor";


var valueselectstringa = "document.querySelector('#spanoneoutone').style.display";
var valueselectstringb = "document.querySelector('#spanoneouttwo').style.display";
var valueselectstringc = "document.querySelector('#spanoneoutthree').style.display";
var valueselectstringd = "document.querySelector('#spanoneoutfour').style.display";
var valueselectstringe = "document.querySelector('#spanoneoutfive').style.display";
var valueselectstringf = "document.querySelector('#spanoneoutsix').style.display";
var valueselectstringg = "document.querySelector('#spanoneoutseven').style.display";
var valueselectstringh = "document.querySelector('#spanoneouteight').style.display";

var valueselectstringaa = "document.querySelector('#spantwooutone').style.display";
var valueselectstringba = "document.querySelector('#spantwoouttwo').style.display";
var valueselectstringca = "document.querySelector('#spantwooutthree').style.display";
var valueselectstringda = "document.querySelector('#spantwooutfour').style.display";
var valueselectstringea = "document.querySelector('#spantwooutfive').style.display";
var valueselectstringfa = "document.querySelector('#spantwooutsix').style.display";
var valueselectstringga = "document.querySelector('#spantwooutseven').style.display";
var valueselectstringha = "document.querySelector('#spantwoouteight').style.display";

var valueselectstringab = "document.querySelector('#spanthreeoutone').style.display";
var valueselectstringbb = "document.querySelector('#spanthreeouttwo').style.display";
var valueselectstringcb = "document.querySelector('#spanthreeoutthree').style.display";
var valueselectstringdb = "document.querySelector('#spanthreeoutfour').style.display";
var valueselectstringeb = "document.querySelector('#spanthreeoutfive').style.display";
var valueselectstringfb = "document.querySelector('#spanthreeoutsix').style.display";
var valueselectstringgb = "document.querySelector('#spanthreeoutseven').style.display";
var valueselectstringhb = "document.querySelector('#spanthreeouteight').style.display";

var valueselectstringac = "document.querySelector('#spanfouroutone').style.display";
var valueselectstringbc = "document.querySelector('#spanfourouttwo').style.display";
var valueselectstringcc = "document.querySelector('#spanfouroutthree').style.display";
var valueselectstringdc = "document.querySelector('#spanfouroutfour').style.display";
var valueselectstringec = "document.querySelector('#spanfouroutfive').style.display";
var valueselectstringfc = "document.querySelector('#spanfouroutsix').style.display";
var valueselectstringgc = "document.querySelector('#spanfouroutseven').style.display";
var valueselectstringhc = "document.querySelector('#spanfourouteight').style.display";

var valueselectstringad = "document.querySelector('#spanfiveoutone').style.display";
var valueselectstringbd = "document.querySelector('#spanfiveouttwo').style.display";
var valueselectstringcd = "document.querySelector('#spanfiveoutthree').style.display";
var valueselectstringdd = "document.querySelector('#spanfiveoutfour').style.display";
var valueselectstringed = "document.querySelector('#spanfiveoutfive').style.display";
var valueselectstringfd = "document.querySelector('#spanfiveoutsix').style.display";
var valueselectstringgd = "document.querySelector('#spanfiveoutseven').style.display";
var valueselectstringhd = "document.querySelector('#spanfiveouteight').style.display";

var valueselectstringae = "document.querySelector('#spansixoutone').style.display";
var valueselectstringbe = "document.querySelector('#spansixouttwo').style.display";
var valueselectstringce = "document.querySelector('#spansixoutthree').style.display";
var valueselectstringde = "document.querySelector('#spansixoutfour').style.display";
var valueselectstringee = "document.querySelector('#spansixoutfive').style.display";
var valueselectstringfe = "document.querySelector('#spansixoutsix').style.display";
var valueselectstringge = "document.querySelector('#spansixoutseven').style.display";
var valueselectstringhe = "document.querySelector('#spansixouteight').style.display";

var valueselectstringaf = "document.querySelector('#spansevenoutone').style.display";
var valueselectstringbf = "document.querySelector('#spansevenouttwo').style.display";
var valueselectstringcf = "document.querySelector('#spansevenoutthree').style.display";
var valueselectstringdf = "document.querySelector('#spansevenoutfour').style.display";
var valueselectstringef = "document.querySelector('#spansevenoutfive').style.display";
var valueselectstringff = "document.querySelector('#spansevenoutsix').style.display";
var valueselectstringgf = "document.querySelector('#spansevenoutseven').style.display";
var valueselectstringhf = "document.querySelector('#spansevenouteight').style.display";

var valueselectstringag = "document.querySelector('#spaneightoutone').style.display";
var valueselectstringbg = "document.querySelector('#spaneightouttwo').style.display";
var valueselectstringcg = "document.querySelector('#spaneightoutthree').style.display";
var valueselectstringdg = "document.querySelector('#spaneightoutfour').style.display";
var valueselectstringeg = "document.querySelector('#spaneightoutfive').style.display";
var valueselectstringfg = "document.querySelector('#spaneightoutsix').style.display";
var valueselectstringgg = "document.querySelector('#spaneightoutseven').style.display";
var valueselectstringhg = "document.querySelector('#spaneightouteight').style.display";

var valueselectstringah = "document.querySelector('#spannineoutone').style.display";
var valueselectstringbh = "document.querySelector('#spannineouttwo').style.display";
var valueselectstringch = "document.querySelector('#spannineoutthree').style.display";
var valueselectstringdh = "document.querySelector('#spannineoutfour').style.display";
var valueselectstringeh = "document.querySelector('#spannineoutfive').style.display";
var valueselectstringfh = "document.querySelector('#spannineoutsix').style.display";
var valueselectstringgh = "document.querySelector('#spannineoutseven').style.display";
var valueselectstringhh = "document.querySelector('#spannineouteight').style.display";

var valueselectstringai = "document.querySelector('#spantenoutone').style.display";
var valueselectstringbi = "document.querySelector('#spantenouttwo').style.display";
var valueselectstringci = "document.querySelector('#spantenoutthree').style.display";
var valueselectstringdi = "document.querySelector('#spantenoutfour').style.display";
var valueselectstringei = "document.querySelector('#spantenoutfive').style.display";
var valueselectstringfi = "document.querySelector('#spantenoutsix').style.display";
var valueselectstringgi = "document.querySelector('#spantenoutseven').style.display";
var valueselectstringhi = "document.querySelector('#spantenouteight').style.display";

var valueselectstringaj = "document.querySelector('#spanelevenoutone').style.display";
var valueselectstringbj = "document.querySelector('#spanelevenouttwo').style.display";
var valueselectstringcj = "document.querySelector('#spanelevenoutthree').style.display";
var valueselectstringdj = "document.querySelector('#spanelevenoutfour').style.display";
var valueselectstringej = "document.querySelector('#spanelevenoutfive').style.display";
var valueselectstringfj = "document.querySelector('#spanelevenoutsix').style.display";
var valueselectstringgj = "document.querySelector('#spanelevenoutseven').style.display";
var valueselectstringhj = "document.querySelector('#spanelevenouteight').style.display";

var valueselectstringak = "document.querySelector('#spantwelveoutone').style.display";
var valueselectstringbk = "document.querySelector('#spantwelveouttwo').style.display";
var valueselectstringck = "document.querySelector('#spantwelveoutthree').style.display";
var valueselectstringdk = "document.querySelector('#spantwelveoutfour').style.display";
var valueselectstringek = "document.querySelector('#spantwelveoutfive').style.display";
var valueselectstringfk = "document.querySelector('#spantwelveoutsix').style.display";
var valueselectstringgk = "document.querySelector('#spantwelveoutseven').style.display";
var valueselectstringhk = "document.querySelector('#spantwelveouteight').style.display";

var valueselectstringal = "document.querySelector('#spanthirteenoutone').style.display";
var valueselectstringbl = "document.querySelector('#spanthirteenouttwo').style.display";
var valueselectstringcl = "document.querySelector('#spanthirteenoutthree').style.display";
var valueselectstringdl = "document.querySelector('#spanthirteenoutfour').style.display";
var valueselectstringel = "document.querySelector('#spanthirteenoutfive').style.display";
var valueselectstringfl = "document.querySelector('#spanthirteenoutsix').style.display";
var valueselectstringgl = "document.querySelector('#spanthirteenoutseven').style.display";
var valueselectstringhl = "document.querySelector('#spanthirteenouteight').style.display";

var valueselectstringam = "document.querySelector('#spanfourteenoutone').style.display";
var valueselectstringbm = "document.querySelector('#spanfourteenouttwo').style.display";
var valueselectstringcm = "document.querySelector('#spanfourteenoutthree').style.display";
var valueselectstringdm = "document.querySelector('#spanfourteenoutfour').style.display";
var valueselectstringem = "document.querySelector('#spanfourteenoutfive').style.display";
var valueselectstringfm = "document.querySelector('#spanfourteenoutsix').style.display";
var valueselectstringgm = "document.querySelector('#spanfourteenoutseven').style.display";
var valueselectstringhm = "document.querySelector('#spanfourteenouteight').style.display";

var valueselectstringan = "document.querySelector('#spanfifeteenoutone').style.display";
var valueselectstringbn = "document.querySelector('#spanfifeteenouttwo').style.display";
var valueselectstringcn = "document.querySelector('#spanfifeteenoutthree').style.display";
var valueselectstringdn = "document.querySelector('#spanfifeteenoutfour').style.display";
var valueselectstringen = "document.querySelector('#spanfifeteenoutfive').style.display";
var valueselectstringfn = "document.querySelector('#spanfifeteenoutsix').style.display";
var valueselectstringgn = "document.querySelector('#spanfifeteenoutseven').style.display";
var valueselectstringhn = "document.querySelector('#spanfifeteenouteight').style.display";

var valueselectstringao = "document.querySelector('#spansixteenoutone').style.display";
var valueselectstringbo = "document.querySelector('#spansixteenouttwo').style.display";
var valueselectstringco = "document.querySelector('#spansixteenoutthree').style.display";
var valueselectstringdo = "document.querySelector('#spansixteenoutfour').style.display";
var valueselectstringeo = "document.querySelector('#spansixteenoutfive').style.display";
var valueselectstringfo = "document.querySelector('#spansixteenoutsix').style.display";
var valueselectstringgo = "document.querySelector('#spansixteenoutseven').style.display";
var valueselectstringho = "document.querySelector('#spansixteenouteight').style.display";

var valueselectstringap = "document.querySelector('#spanseventeenoutone').style.display";
var valueselectstringbp = "document.querySelector('#spanseventeenouttwo').style.display";
var valueselectstringcp = "document.querySelector('#spanseventeenoutthree').style.display";
var valueselectstringdp = "document.querySelector('#spanseventeenoutfour').style.display";
var valueselectstringep = "document.querySelector('#spanseventeenoutfive').style.display";
var valueselectstringfp = "document.querySelector('#spanseventeenoutsix').style.display";
var valueselectstringgp = "document.querySelector('#spanseventeenoutseven').style.display";
var valueselectstringhp = "document.querySelector('#spanseventeenouteight').style.display";

var valueselectstringaq = "document.querySelector('#spaneighteenoutone').style.display";
var valueselectstringbq = "document.querySelector('#spaneighteenouttwo').style.display";
var valueselectstringcq = "document.querySelector('#spaneighteenoutthree').style.display";
var valueselectstringdq = "document.querySelector('#spaneighteenoutfour').style.display";
var valueselectstringeq = "document.querySelector('#spaneighteenoutfive').style.display";
var valueselectstringfq = "document.querySelector('#spaneighteenoutsix').style.display";
var valueselectstringgq = "document.querySelector('#spaneighteenoutseven').style.display";
var valueselectstringhq = "document.querySelector('#spaneighteenouteight').style.display";

var valueselectstringar = "document.querySelector('#spannineteenoutone').style.display";
var valueselectstringbr = "document.querySelector('#spannineteenouttwo').style.display";
var valueselectstringcr = "document.querySelector('#spannineteenoutthree').style.display";
var valueselectstringdr = "document.querySelector('#spannineteenoutfour').style.display";
var valueselectstringer = "document.querySelector('#spannineteenoutfive').style.display";
var valueselectstringfr = "document.querySelector('#spannineteenoutsix').style.display";
var valueselectstringgr = "document.querySelector('#spannineteenoutseven').style.display";
var valueselectstringhr = "document.querySelector('#spannineteenouteight').style.display";

var valueselectstringas = "document.querySelector('#spantwentyoutone').style.display";
var valueselectstringbs = "document.querySelector('#spantwentyouttwo').style.display";
var valueselectstringcs = "document.querySelector('#spantwentyoutthree').style.display";
var valueselectstringds = "document.querySelector('#spantwentyoutfour').style.display";
var valueselectstringes = "document.querySelector('#spantwentyoutfive').style.display";
var valueselectstringfs = "document.querySelector('#spantwentyoutsix').style.display";
var valueselectstringgs = "document.querySelector('#spantwentyoutseven').style.display";
var valueselectstringhs = "document.querySelector('#spantwentyouteight').style.display";

var valueselectstringat = "document.querySelector('#spantwentyoneoutone').style.display";
var valueselectstringbt = "document.querySelector('#spantwentyoneouttwo').style.display";
var valueselectstringct = "document.querySelector('#spantwentyoneoutthree').style.display";
var valueselectstringdt = "document.querySelector('#spantwentyoneoutfour').style.display";
var valueselectstringet = "document.querySelector('#spantwentyoneoutfive').style.display";
var valueselectstringft = "document.querySelector('#spantwentyoneoutsix').style.display";
var valueselectstringgt = "document.querySelector('#spantwentyoneoutseven').style.display";
var valueselectstringht = "document.querySelector('#spantwentyoneouteight').style.display";

var valueselectstringau = "document.querySelector('#spantwentytwooutone').style.display";
var valueselectstringbu = "document.querySelector('#spantwentytwoouttwo').style.display";
var valueselectstringcu = "document.querySelector('#spantwentytwooutthree').style.display";
var valueselectstringdu = "document.querySelector('#spantwentytwooutfour').style.display";
var valueselectstringeu = "document.querySelector('#spantwentytwooutfive').style.display";
var valueselectstringfu = "document.querySelector('#spantwentytwooutsix').style.display";
var valueselectstringgu = "document.querySelector('#spantwentytwooutseven').style.display";
var valueselectstringhu = "document.querySelector('#spantwentytwoouteight').style.display";

var valueselectstringav = "document.querySelector('#spantwentythreeoutone').style.display";
var valueselectstringbv = "document.querySelector('#spantwentythreeouttwo').style.display";
var valueselectstringcv = "document.querySelector('#spantwentythreeoutthree').style.display";
var valueselectstringdv = "document.querySelector('#spantwentythreeoutfour').style.display";
var valueselectstringev = "document.querySelector('#spantwentythreeoutfive').style.display";
var valueselectstringfv = "document.querySelector('#spantwentythreeoutsix').style.display";
var valueselectstringgv = "document.querySelector('#spantwentythreeoutseven').style.display";
var valueselectstringhv = "document.querySelector('#spantwentythreeouteight').style.display";

var valueselectstringaw = "document.querySelector('#spantwentyfouroutone').style.display";
var valueselectstringbw = "document.querySelector('#spantwentyfourouttwo').style.display";
var valueselectstringcw = "document.querySelector('#spantwentyfouroutthree').style.display";
var valueselectstringdw = "document.querySelector('#spantwentyfouroutfour').style.display";
var valueselectstringew = "document.querySelector('#spantwentyfouroutfive').style.display";
var valueselectstringfw = "document.querySelector('#spantwentyfouroutsix').style.display";
var valueselectstringgw = "document.querySelector('#spantwentyfouroutseven').style.display";
var valueselectstringhw = "document.querySelector('#spantwentyfourouteight').style.display";

var valueselectstringax = "document.querySelector('#spantwentyfiveoutone').style.display";
var valueselectstringbx = "document.querySelector('#spantwentyfiveouttwo').style.display";
var valueselectstringcx = "document.querySelector('#spantwentyfiveoutthree').style.display";
var valueselectstringdx = "document.querySelector('#spantwentyfiveoutfour').style.display";
var valueselectstringex = "document.querySelector('#spantwentyfiveoutfive').style.display";
var valueselectstringfx = "document.querySelector('#spantwentyfiveoutsix').style.display";
var valueselectstringgx = "document.querySelector('#spantwentyfiveoutseven').style.display";
var valueselectstringhx = "document.querySelector('#spantwentyfiveouteight').style.display";

var valueselectstringay = "document.querySelector('#spantwentysixoutone').style.display";
var valueselectstringby = "document.querySelector('#spantwentysixouttwo').style.display";
var valueselectstringcy = "document.querySelector('#spantwentysixoutthree').style.display";
var valueselectstringdy = "document.querySelector('#spantwentysixoutfour').style.display";
var valueselectstringey = "document.querySelector('#spantwentysixoutfive').style.display";
var valueselectstringfy = "document.querySelector('#spantwentysixoutsix').style.display";
var valueselectstringgy = "document.querySelector('#spantwentysixoutseven').style.display";
var valueselectstringhy = "document.querySelector('#spantwentysixouteight').style.display";

var valueselectstringaz = "document.querySelector('#spantwentysevenoutone').style.display";
var valueselectstringbz = "document.querySelector('#spantwentysevenouttwo').style.display";
var valueselectstringcz = "document.querySelector('#spantwentysevenoutthree').style.display";
var valueselectstringdz = "document.querySelector('#spantwentysevenoutfour').style.display";
var valueselectstringez = "document.querySelector('#spantwentysevenoutfive').style.display";
var valueselectstringfz = "document.querySelector('#spantwentysevenoutsix').style.display";
var valueselectstringgz = "document.querySelector('#spantwentysevenoutseven').style.display";
var valueselectstringhz = "document.querySelector('#spantwentysevenouteight').style.display";

var valueselectstringaaa = "document.querySelector('#spantwentyeightoutone').style.display";
var valueselectstringbaa = "document.querySelector('#spantwentyeightouttwo').style.display";
var valueselectstringcaa = "document.querySelector('#spantwentyeightoutthree').style.display";
var valueselectstringdaa = "document.querySelector('#spantwentyeightoutfour').style.display";
var valueselectstringeaa = "document.querySelector('#spantwentyeightoutfive').style.display";
var valueselectstringfaa = "document.querySelector('#spantwentyeightoutsix').style.display";
var valueselectstringgaa = "document.querySelector('#spantwentyeightoutseven').style.display";
var valueselectstringhaa = "document.querySelector('#spantwentyeightouteight').style.display";

var valueselectstringabb = "document.querySelector('#spantwentynineoutone').style.display";
var valueselectstringbbb = "document.querySelector('#spantwentynineouttwo').style.display";
var valueselectstringcbb = "document.querySelector('#spantwentynineoutthree').style.display";
var valueselectstringdbb = "document.querySelector('#spantwentynineoutfour').style.display";
var valueselectstringebb = "document.querySelector('#spantwentynineoutfive').style.display";
var valueselectstringfbb = "document.querySelector('#spantwentynineoutsix').style.display";
var valueselectstringgbb = "document.querySelector('#spantwentynineoutseven').style.display";
var valueselectstringhbb = "document.querySelector('#spantwentynineouteight').style.display";

var valueselectstringacc = "document.querySelector('#spanthirtyoutone').style.display";
var valueselectstringbcc = "document.querySelector('#spanthirtyouttwo').style.display";
var valueselectstringccc = "document.querySelector('#spanthirtyoutthree').style.display";
var valueselectstringdcc = "document.querySelector('#spanthirtyoutfour').style.display";
var valueselectstringecc = "document.querySelector('#spanthirtyoutfive').style.display";
var valueselectstringfcc = "document.querySelector('#spanthirtyoutsix').style.display";
var valueselectstringgcc = "document.querySelector('#spanthirtyoutseven').style.display";
var valueselectstringhcc = "document.querySelector('#spanthirtyouteight').style.display";

var valueselectstringadd = "document.querySelector('#spanthirtyoneoutone').style.display";
var valueselectstringbdd = "document.querySelector('#spanthirtyoneouttwo').style.display";
var valueselectstringcdd = "document.querySelector('#spanthirtyoneoutthree').style.display";
var valueselectstringddd = "document.querySelector('#spanthirtyoneoutfour').style.display";
var valueselectstringedd = "document.querySelector('#spanthirtyoneoutfive').style.display";
var valueselectstringfdd = "document.querySelector('#spanthirtyoneoutsix').style.display";
var valueselectstringgdd = "document.querySelector('#spanthirtyoneoutseven').style.display";
var valueselectstringhdd = "document.querySelector('#spanthirtyoneouteight').style.display";

var valueselectstringaee = "document.querySelector('#spanthirtytwooutone').style.display";
var valueselectstringbee = "document.querySelector('#spanthirtytwoouttwo').style.display";
var valueselectstringcee = "document.querySelector('#spanthirtytwooutthree').style.display";
var valueselectstringdee = "document.querySelector('#spanthirtytwooutfour').style.display";
var valueselectstringeee = "document.querySelector('#spanthirtytwooutfive').style.display";
var valueselectstringfee = "document.querySelector('#spanthirtytwooutsix').style.display";
var valueselectstringgee = "document.querySelector('#spanthirtytwooutseven').style.display";
var valueselectstringhee = "document.querySelector('#spanthirtytwoouteight').style.display";

var valueselectstringaff = "document.querySelector('#spanthirtythreeoutone').style.display";
var valueselectstringbff = "document.querySelector('#spanthirtythreeouttwo').style.display";
var valueselectstringcff = "document.querySelector('#spanthirtythreeoutthree').style.display";
var valueselectstringdff = "document.querySelector('#spanthirtythreeoutfour').style.display";
var valueselectstringeff = "document.querySelector('#spanthirtythreeoutfive').style.display";
var valueselectstringfff = "document.querySelector('#spanthirtythreeoutsix').style.display";
var valueselectstringgff = "document.querySelector('#spanthirtythreeoutseven').style.display";
var valueselectstringhff = "document.querySelector('#spanthirtythreeouteight').style.display";

var valueselectstringagg = "document.querySelector('#spanthirtyfouroutone').style.display";
var valueselectstringbgg = "document.querySelector('#spanthirtyfourouttwo').style.display";
var valueselectstringcgg = "document.querySelector('#spanthirtyfouroutthree').style.display";
var valueselectstringdgg = "document.querySelector('#spanthirtyfouroutfour').style.display";
var valueselectstringegg = "document.querySelector('#spanthirtyfouroutfive').style.display";
var valueselectstringfgg = "document.querySelector('#spanthirtyfouroutsix').style.display";
var valueselectstringggg = "document.querySelector('#spanthirtyfouroutseven').style.display";
var valueselectstringhgg = "document.querySelector('#spanthirtyfourouteight').style.display";

var valueselectstringahh = "document.querySelector('#spanthirtyfiveoutone').style.display";
var valueselectstringbhh = "document.querySelector('#spanthirtyfiveouttwo').style.display";
var valueselectstringchh = "document.querySelector('#spanthirtyfiveoutthree').style.display";
var valueselectstringdhh = "document.querySelector('#spanthirtyfiveoutfour').style.display";
var valueselectstringehh = "document.querySelector('#spanthirtyfiveoutfive').style.display";
var valueselectstringfhh = "document.querySelector('#spanthirtyfiveoutsix').style.display";
var valueselectstringghh = "document.querySelector('#spanthirtyfiveoutseven').style.display";
var valueselectstringhhh = "document.querySelector('#spanthirtyfiveouteight').style.display";

var valueselectstringaii = "document.querySelector('#spanthirtysixoutone').style.display";
var valueselectstringbii = "document.querySelector('#spanthirtysixouttwo').style.display";
var valueselectstringcii = "document.querySelector('#spanthirtysixoutthree').style.display";
var valueselectstringdii = "document.querySelector('#spanthirtysixoutfour').style.display";
var valueselectstringeii = "document.querySelector('#spanthirtysixoutfive').style.display";
var valueselectstringfii = "document.querySelector('#spanthirtysixoutsix').style.display";
var valueselectstringgii = "document.querySelector('#spanthirtysixoutseven').style.display";
var valueselectstringhii = "document.querySelector('#spanthirtysixouteight').style.display";

var valueselectstringajj = "document.querySelector('#spanthirtysevenoutone').style.display";
var valueselectstringbjj = "document.querySelector('#spanthirtysevenouttwo').style.display";
var valueselectstringcjj = "document.querySelector('#spanthirtysevenoutthree').style.display";
var valueselectstringdjj = "document.querySelector('#spanthirtysevenoutfour').style.display";
var valueselectstringejj = "document.querySelector('#spanthirtysevenoutfive').style.display";
var valueselectstringfjj = "document.querySelector('#spanthirtysevenoutsix').style.display";
var valueselectstringgjj = "document.querySelector('#spanthirtysevenoutseven').style.display";
var valueselectstringhjj = "document.querySelector('#spanthirtysevenouteight').style.display";

var valueselectstringakk = "document.querySelector('#spanthirtyeightoutone').style.display";
var valueselectstringbkk = "document.querySelector('#spanthirtyeightouttwo').style.display";
var valueselectstringckk = "document.querySelector('#spanthirtyeightoutthree').style.display";
var valueselectstringdkk = "document.querySelector('#spanthirtyeightoutfour').style.display";
var valueselectstringekk = "document.querySelector('#spanthirtyeightoutfive').style.display";
var valueselectstringfkk = "document.querySelector('#spanthirtyeightoutsix').style.display";
var valueselectstringgkk = "document.querySelector('#spanthirtyeightoutseven').style.display";
var valueselectstringhkk = "document.querySelector('#spanthirtyeightouteight').style.display";

var valueselectstringall = "document.querySelector('#spanthirtynineoutone').style.display";
var valueselectstringbll = "document.querySelector('#spanthirtynineouttwo').style.display";
var valueselectstringcll = "document.querySelector('#spanthirtynineoutthree').style.display";
var valueselectstringdll = "document.querySelector('#spanthirtynineoutfour').style.display";
var valueselectstringell = "document.querySelector('#spanthirtynineoutfive').style.display";
var valueselectstringfll = "document.querySelector('#spanthirtynineoutsix').style.display";
var valueselectstringgll = "document.querySelector('#spanthirtynineoutseven').style.display";
var valueselectstringhll = "document.querySelector('#spanthirtynineouteight').style.display";

var valueselectstringamm = "document.querySelector('#spanfourtyoutone').style.display";
var valueselectstringbmm = "document.querySelector('#spanfourtyouttwo').style.display";
var valueselectstringcmm = "document.querySelector('#spanfourtyoutthree').style.display";
var valueselectstringdmm = "document.querySelector('#spanfourtyoutfour').style.display";
var valueselectstringemm = "document.querySelector('#spanfourtyoutfive').style.display";
var valueselectstringfmm = "document.querySelector('#spanfourtyoutsix').style.display";
var valueselectstringgmm = "document.querySelector('#spanfourtyoutseven').style.display";
var valueselectstringhmm = "document.querySelector('#spanfourtyouteight').style.display";

var valueselectstringann = "document.querySelector('#spanfourtyoneoutone').style.display";
var valueselectstringbnn = "document.querySelector('#spanfourtyoneouttwo').style.display";
var valueselectstringcnn = "document.querySelector('#spanfourtyoneoutthree').style.display";
var valueselectstringdnn = "document.querySelector('#spanfourtyoneoutfour').style.display";
var valueselectstringenn = "document.querySelector('#spanfourtyoneoutfive').style.display";
var valueselectstringfnn = "document.querySelector('#spanfourtyoneoutsix').style.display";
var valueselectstringgnn = "document.querySelector('#spanfourtyoneoutseven').style.display";
var valueselectstringhnn = "document.querySelector('#spanfourtyoneouteight').style.display";

var valueselectstringaoo = "document.querySelector('#spanfourtytwooutone').style.display";
var valueselectstringboo = "document.querySelector('#spanfourtytwoouttwo').style.display";
var valueselectstringcoo = "document.querySelector('#spanfourtytwooutthree').style.display";
var valueselectstringdoo = "document.querySelector('#spanfourtytwooutfour').style.display";
var valueselectstringeoo = "document.querySelector('#spanfourtytwooutfive').style.display";
var valueselectstringfoo = "document.querySelector('#spanfourtytwooutsix').style.display";
var valueselectstringgoo = "document.querySelector('#spanfourtytwooutseven').style.display";
var valueselectstringhoo = "document.querySelector('#spanfourtytwoouteight').style.display";

var valueselectstringapp = "document.querySelector('#spanfourtythreeoutone').style.display";
var valueselectstringbpp = "document.querySelector('#spanfourtythreeouttwo').style.display";
var valueselectstringcpp = "document.querySelector('#spanfourtythreeoutthree').style.display";
var valueselectstringdpp = "document.querySelector('#spanfourtythreeoutfour').style.display";
var valueselectstringepp = "document.querySelector('#spanfourtythreeoutfive').style.display";
var valueselectstringfpp = "document.querySelector('#spanfourtythreeoutsix').style.display";
var valueselectstringgpp = "document.querySelector('#spanfourtythreeoutseven').style.display";
var valueselectstringhpp = "document.querySelector('#spanfourtythreeouteight').style.display";

var valueselectstringaqq = "document.querySelector('#spanfourtyfouroutone').style.display";
var valueselectstringbqq = "document.querySelector('#spanfourtyfourouttwo').style.display";
var valueselectstringcqq = "document.querySelector('#spanfourtyfouroutthree').style.display";
var valueselectstringdqq = "document.querySelector('#spanfourtyfouroutfour').style.display";
var valueselectstringeqq = "document.querySelector('#spanfourtyfouroutfive').style.display";
var valueselectstringfqq = "document.querySelector('#spanfourtyfouroutsix').style.display";
var valueselectstringgqq = "document.querySelector('#spanfourtyfouroutseven').style.display";
var valueselectstringhqq = "document.querySelector('#spanfourtyfourouteight').style.display";

var valueselectstringarr = "document.querySelector('#spanfourtyfiveoutone').style.display";
var valueselectstringbrr = "document.querySelector('#spanfourtyfiveouttwo').style.display";
var valueselectstringcrr = "document.querySelector('#spanfourtyfiveoutthree').style.display";
var valueselectstringdrr = "document.querySelector('#spanfourtyfiveoutfour').style.display";
var valueselectstringerr = "document.querySelector('#spanfourtyfiveoutfive').style.display";
var valueselectstringfrr = "document.querySelector('#spanfourtyfiveoutsix').style.display";
var valueselectstringgrr = "document.querySelector('#spanfourtyfiveoutseven').style.display";
var valueselectstringhrr = "document.querySelector('#spanfourtyfiveouteight').style.display";

var valueselectstringass = "document.querySelector('#spanfourtysixoutone').style.display";
var valueselectstringbss = "document.querySelector('#spanfourtysixouttwo').style.display";
var valueselectstringcss = "document.querySelector('#spanfourtysixoutthree').style.display";
var valueselectstringdss = "document.querySelector('#spanfourtysixoutfour').style.display";
var valueselectstringess = "document.querySelector('#spanfourtysixoutfive').style.display";
var valueselectstringfss = "document.querySelector('#spanfourtysixoutsix').style.display";
var valueselectstringgss = "document.querySelector('#spanfourtysixoutseven').style.display";
var valueselectstringhss = "document.querySelector('#spanfourtysixouteight').style.display";

var valueselectstringatt = "document.querySelector('#spanfourtysevenoutone').style.display";
var valueselectstringbtt = "document.querySelector('#spanfourtysevenouttwo').style.display";
var valueselectstringctt = "document.querySelector('#spanfourtysevenoutthree').style.display";
var valueselectstringdtt = "document.querySelector('#spanfourtysevenoutfour').style.display";
var valueselectstringett = "document.querySelector('#spanfourtysevenoutfive').style.display";
var valueselectstringftt = "document.querySelector('#spanfourtysevenoutsix').style.display";
var valueselectstringgtt = "document.querySelector('#spanfourtysevenoutseven').style.display";
var valueselectstringhtt = "document.querySelector('#spanfourtysevenouteight').style.display";

var valueselectstringauu = "document.querySelector('#spanfourtyeightoutone').style.display";
var valueselectstringbuu = "document.querySelector('#spanfourtyeightouttwo').style.display";
var valueselectstringcuu = "document.querySelector('#spanfourtyeightoutthree').style.display";
var valueselectstringduu = "document.querySelector('#spanfourtyeightoutfour').style.display";
var valueselectstringeuu = "document.querySelector('#spanfourtyeightoutfive').style.display";
var valueselectstringfuu = "document.querySelector('#spanfourtyeightoutsix').style.display";
var valueselectstringguu = "document.querySelector('#spanfourtyeightoutseven').style.display";
var valueselectstringhuu = "document.querySelector('#spanfourtyeightouteight').style.display";

var valueselectstringavv = "document.querySelector('#spanfourtynineoutone').style.display";
var valueselectstringbvv = "document.querySelector('#spanfourtynineouttwo').style.display";
var valueselectstringcvv = "document.querySelector('#spanfourtynineoutthree').style.display";
var valueselectstringdvv = "document.querySelector('#spanfourtynineoutfour').style.display";
var valueselectstringevv = "document.querySelector('#spanfourtynineoutfive').style.display";
var valueselectstringfvv = "document.querySelector('#spanfourtynineoutsix').style.display";
var valueselectstringgvv = "document.querySelector('#spanfourtynineoutseven').style.display";
var valueselectstringhvv = "document.querySelector('#spanfourtynineouteight').style.display";

var valueselectstringaww = "document.querySelector('#spanfifetyoutone').style.display";
var valueselectstringbww = "document.querySelector('#spanfifetyouttwo').style.display";
var valueselectstringcww = "document.querySelector('#spanfifetyoutthree').style.display";
var valueselectstringdww = "document.querySelector('#spanfifetyoutfour').style.display";
var valueselectstringeww = "document.querySelector('#spanfifetyoutfive').style.display";
var valueselectstringfww = "document.querySelector('#spanfifetyoutsix').style.display";
var valueselectstringgww = "document.querySelector('#spanfifetyoutseven').style.display";
var valueselectstringhww = "document.querySelector('#spanfifetyouteight').style.display";


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
 var layoutnayy = "document.querySelector('.mainyy').style.display";   
var layoutna = "document.querySelector('.spaninrcmp').textContent";

var fnnamena = "openclosena()";
var functionnameonea = " rowones()";
var functionnameoneb = " lightrone()";
var functionnameonec = " dmoverone()";

var functionnameoneaa = " rowtwos()";
var functionnameoneba = " lightrtwo()";
var functionnameoneca = " dmovertwo()";

var functionnameoneab = " rowthrees()";
var functionnameonebb = " lightrthree()";
var functionnameonecb = " dmoverthree()";

var functionnameoneac = " rowfours()";
var functionnameonebc = " lightrfour()";
var functionnameonecc = " dmoverfour()";

var functionnameonead = " rowfives()";
var functionnameonebd = " lightrfive()";
var functionnameonecd = " dmoverfive()";

var functionnameoneae = " rowsixs()";
var functionnameonebe = " lightrsix()";
var functionnameonece = " dmoversix()";

var functionnameoneaf = " rowsevens()";
var functionnameonebf = " lightrseven()";
var functionnameonecf = " dmoverseven()";

var functionnameoneag = " roweights()";
var functionnameonebg = " lightreight()";
var functionnameonecg = " dmovereight()";

var functionnameoneah = " rownines()";
var functionnameonebh = " lightrnine()";
var functionnameonech = " dmovernine()";

var functionnameoneai = " rowtens()";
var functionnameonebi = " lightrten()";
var functionnameoneci = " dmoverten()";

var functionnameoneaj = " rowelevens()";
var functionnameonebj = " lightreleven()";
var functionnameonecj = " dmovereleven()";

var functionnameoneak = " rowtwelves()";
var functionnameonebk = " lightrtwelve()";
var functionnameoneck = " dmovertwelve()";

var functionnameoneal = " rowthirteens()";
var functionnameonebl = " lightrthirteen()";
var functionnameonecl = " dmoverthirteen()";

var functionnameoneam = " rowfourteens()";
var functionnameonebm = " lightrfourteen()";
var functionnameonecm = " dmoverfourteen()";

var functionnameonean = " rowfifeteens()";
var functionnameonebn = " lightrfifeteen()";
var functionnameonecn = " dmoverfifeteen()";

var functionnameoneao = " rowsixteens()";
var functionnameonebo = " lightrsixteen()";
var functionnameoneco = " dmoversixteen()";

var functionnameoneap = " rowseventeens()";
var functionnameonebp = " lightrseventeen()";
var functionnameonecp = " dmoverseventeen()";

var functionnameoneaq = " roweighteens()";
var functionnameonebq = " lightreighteen()";
var functionnameonecq = " dmovereighteen()";

var functionnameonear = " rownineteens()";
var functionnameonebr = " lightrnineteen()";
var functionnameonecr = " dmovernineteen()";

var functionnameoneas = " rowtwentys()";
var functionnameonebs = " lightrtwenty()";
var functionnameonecs = " dmovertwenty()";

var functionnameoneat = " rowtwentyones()";
var functionnameonebt = " lightrtwentyone()";
var functionnameonect = " dmovertwentyone()";

var functionnameoneau = " rowtwentytwos()";
var functionnameonebu = " lightrtwentytwo()";
var functionnameonecu = " dmovertwentytwo()";

var functionnameoneav = " rowtwentythrees()";
var functionnameonebv = " lightrtwentythree()";
var functionnameonecv = " dmovertwentythree()";

var functionnameoneaw = " rowtwentyfours()";
var functionnameonebw = " lightrtwentyfour()";
var functionnameonecw = " dmovertwentyfour()";

var functionnameoneax = " rowtwentyfives()";
var functionnameonebx = " lightrtwentyfive()";
var functionnameonecx = " dmovertwentyfive()";

var functionnameoneay = " rowtwentysixs()";
var functionnameoneby = " lightrtwentysix()";
var functionnameonecy = " dmovertwentysix()";

var functionnameoneaz = " rowtwentysevens()";
var functionnameonebz = " lightrtwentyseven()";
var functionnameonecz = " dmovertwentyseven()";

var functionnameoneaaa = " rowtwentyeights()";
var functionnameonebaa = " lightrtwentyeight()";
var functionnameonecaa = " dmovertwentyeight()";

var functionnameoneabb = " rowtwentynines()";
var functionnameonebbb = " lightrtwentynine()";
var functionnameonecbb = " dmovertwentynine()";

var functionnameoneacc = " rowthirtys()";
var functionnameonebcc = " lightrthirty()";
var functionnameoneccc = " dmoverthirty()";

var functionnameoneadd = " rowthirtyones()";
var functionnameonebdd = " lightrthirtyone()";
var functionnameonecdd = " dmoverthirtyone()";

var functionnameoneaee = " rowthirtytwos()";
var functionnameonebee = " lightrthirtytwo()";
var functionnameonecee = " dmoverthirtytwo()";

var functionnameoneaff = " rowthirtythrees()";
var functionnameonebff = " lightrthirtythree()";
var functionnameonecff = " dmoverthirtythree()";

var functionnameoneagg = " rowthirtyfours()";
var functionnameonebgg = " lightrthirtyfour()";
var functionnameonecgg = " dmoverthirtyfour()";

var functionnameoneahh = " rowthirtyfives()";
var functionnameonebhh = " lightrthirtyfive()";
var functionnameonechh = " dmoverthirtyfive()";

var functionnameoneaii = " rowthirtysixs()";
var functionnameonebii = " lightrthirtysix()";
var functionnameonecii = " dmoverthirtysix()";

var functionnameoneajj = " rowthirtysevens()";
var functionnameonebjj = " lightrthirtyseven()";
var functionnameonecjj = " dmoverthirtyseven()";

var functionnameoneakk = " rowthirtyeights()";
var functionnameonebkk = " lightrthirtyeight()";
var functionnameoneckk = " dmoverthirtyeight()";

var functionnameoneall = " rowthirtynines()";
var functionnameonebll = " lightrthirtynine()";
var functionnameonecll = " dmoverthirtynine()";

var functionnameoneamm = " rowfourtys()";
var functionnameonebmm = " lightrfourty()";
var functionnameonecmm = " dmoverfourty()";

var functionnameoneann = " rowfourtyones()";
var functionnameonebnn = " lightrfourtyone()";
var functionnameonecnn = " dmoverfourtyone()";

var functionnameoneaoo = " rowfourtytwos()";
var functionnameoneboo = " lightrfourtytwo()";
var functionnameonecoo = " dmoverfourtytwo()";

var functionnameoneapp = " rowfourtythrees()";
var functionnameonebpp = " lightrfourtythree()";
var functionnameonecpp = " dmoverfourtythree()";

var functionnameoneaqq = " rowfourtyfours()";
var functionnameonebqq = " lightrfourtyfour()";
var functionnameonecqq = " dmoverfourtyfour()";

var functionnameonearr = " rowfourtyfives()";
var functionnameonebrr = " lightrfourtyfive()";
var functionnameonecrr = " dmoverfourtyfive()";

var functionnameoneass = " rowfourtysixs()";
var functionnameonebss = " lightrfourtysix()";
var functionnameonecss = " dmoverfourtysix()";

var functionnameoneatt = " rowfourtysevens()";
var functionnameonebtt = " lightrfourtyseven()";
var functionnameonectt = " dmoverfourtyseven()";

var functionnameoneauu = " rowfourtyeights()";
var functionnameonebuu = " lightrfourtyeight()";
var functionnameonecuu = " dmoverfourtyeight()";

var functionnameoneavv = " rowfourtynines()";
var functionnameonebvv = " lightrfourtynine()";
var functionnameonecvv = " dmoverfourtynine()";

var functionnameoneaww = " rowfifetys()";
var functionnameonebww = " lightrfifety()";
var functionnameonecww = " dmoverfifety()";


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
var pee = "'P'";
var green = "'green'";
var tee = "'T'";
var yellow = "'yellow'";
var rrr = "'R'";
var red = "'red'";
var white = "white";
var empty = "'Nil'";
var displayoffit = "'none'";
var displayonit = "'block'"
var openstyle = "<style>";
var closestyle = "</style>";


var showschedule = "<!DOCTYPE html>" + "<html>" + "<head>" + "<meta charset='utf8'/>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" +"<link rel='stylesheet' href='../css/main.css' media='screen and (min-width: 0px) and (max-width: 899px)'/>" +"<link rel='stylesheet' href='../css/big.css' media='screen and (min-width: 900px) and (max-width: 4000px)'/>" + "<style>" + "</style>" +  "<script>" + fn + spaceit + fnnamena +   openbrace + eef + openbracket + layoutna + equivalent + empty + closebracket + openbrace + layoutnas + equal + displayoffit + ";" + layoutnayy + equal + displayoffit + ";" + clsb + eelse + openbrace + layoutnas + equal + displayonit + closebrace + closebrace +           fn + functionnameonea + openbrace + valuesixstring + equal + "'" + smoveone + "'" + ";" + valuesevenstring + equal + "'" + slightone + "'" + ";" + closebrace + spaceit +          fn + functionnameoneb + openbrace + eef + openbracket + valuesixstring + equivalent + pee + closebracket + openbrace + valuecolorstring + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstring + equivalent + tee + closebracket + openbrace + valuecolorstring + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstring + equivalent + rrr + closebracket + openbrace + valuecolorstring + equal + red + ";" + clsb + eelse + openbrace + valuecolorstring + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonec + openbrace + eef + openbracket + valuecolorstring + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringa+ equal +displayoffit+ ";" +valueselectstringb+ equal +displayoffit+ ";" +valueselectstringc+ equal +displayoffit+ ";" +valueselectstringd+ equal +displayoffit+ ";" +valueselectstringe+ equal +displayoffit+ ";" +valueselectstringf+ equal +displayoffit+ ";" +valueselectstringg+ equal +displayoffit+ ";" +valueselectstringh+ equal +displayoffit+ ";" +layouta+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringa + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaa + openbrace + valuesixstringa + equal + "'" + smovetwo + "'" + ";" + valuesevenstringa + equal + "'" + slighttwo + "'" + ";" + closebrace + spaceit +          fn + functionnameoneba + openbrace + eef + openbracket + valuesixstringa + equivalent + pee + closebracket + openbrace + valuecolorstringa + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringa + equivalent + tee + closebracket + openbrace + valuecolorstringa + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringa + equivalent + rrr + closebracket + openbrace + valuecolorstringa + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringa + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneca + openbrace + eef + openbracket + valuecolorstringa + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaa+ equal +displayoffit+ ";" +valueselectstringba+ equal +displayoffit+ ";" +valueselectstringca+ equal +displayoffit+ ";" +valueselectstringda+ equal +displayoffit+ ";" +valueselectstringea+ equal +displayoffit+ ";" +valueselectstringfa+ equal +displayoffit+ ";" +valueselectstringga+ equal +displayoffit+ ";" +valueselectstringha+ equal +displayoffit+ ";" +layoutb+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringaa + equal + displayonit + ";" + closebrace  +  closebrace +         fn + functionnameoneab + openbrace + valuesixstringb + equal + "'" + smovethree + "'" + ";" + valuesevenstringb + equal + "'" + slightthree + "'" + ";" + closebrace + spaceit +          fn + functionnameonebb + openbrace + eef + openbracket + valuesixstringb + equivalent + pee + closebracket + openbrace + valuecolorstringb + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringb + equivalent + tee + closebracket + openbrace + valuecolorstringb + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringb + equivalent + rrr + closebracket + openbrace + valuecolorstringb + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringb + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecb + openbrace + eef + openbracket + valuecolorstringb + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringab+ equal +displayoffit+ ";" +valueselectstringbb+ equal +displayoffit+ ";" +valueselectstringcb+ equal +displayoffit+ ";" +valueselectstringdb+ equal +displayoffit+ ";" +valueselectstringeb+ equal +displayoffit+ ";" +valueselectstringfb+ equal +displayoffit+ ";" +valueselectstringgb+ equal +displayoffit+ ";" +valueselectstringhb+ equal +displayoffit+ ";" +layoutc+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringab + equal + displayonit + ";" + closebrace  +  closebrace +            fn + functionnameoneac + openbrace + valuesixstringc + equal + "'" + smovefour + "'" + ";" + valuesevenstringc + equal + "'" + slightfour + "'" + ";" + closebrace + spaceit +          fn + functionnameonebc + openbrace + eef + openbracket + valuesixstringc + equivalent + pee + closebracket + openbrace + valuecolorstringc + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringc + equivalent + tee + closebracket + openbrace + valuecolorstringc + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringc + equivalent + rrr + closebracket + openbrace + valuecolorstringc + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringc + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecc + openbrace + eef + openbracket + valuecolorstringc + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringac+ equal +displayoffit+ ";" +valueselectstringbc+ equal +displayoffit+ ";" +valueselectstringcc+ equal +displayoffit+ ";" +valueselectstringdc+ equal +displayoffit+ ";" +valueselectstringec+ equal +displayoffit+ ";" +valueselectstringfc+ equal +displayoffit+ ";" +valueselectstringgc+ equal +displayoffit+ ";" +valueselectstringhc+ equal +displayoffit+ ";" +layoutd+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringac + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameonead + openbrace + valuesixstringd + equal + "'" + smovefive + "'" + ";" + valuesevenstringd + equal + "'" + slightfive + "'" + ";" + closebrace + spaceit +          fn + functionnameonebd + openbrace + eef + openbracket + valuesixstringd + equivalent + pee + closebracket + openbrace + valuecolorstringd + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringd + equivalent + tee + closebracket + openbrace + valuecolorstringd + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringd + equivalent + rrr + closebracket + openbrace + valuecolorstringd + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringd + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecd + openbrace + eef + openbracket + valuecolorstringd + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringad+ equal +displayoffit+ ";" +valueselectstringbd+ equal +displayoffit+ ";" +valueselectstringcd+ equal +displayoffit+ ";" +valueselectstringdd+ equal +displayoffit+ ";" +valueselectstringed+ equal +displayoffit+ ";" +valueselectstringfd+ equal +displayoffit+ ";" +valueselectstringgd+ equal +displayoffit+ ";" +valueselectstringhd+ equal +displayoffit+ ";" +layoute+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringad + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneae + openbrace + valuesixstringe + equal + "'" + smovesix + "'" + ";" + valuesevenstringe + equal + "'" + slightsix + "'" + ";" + closebrace + spaceit +          fn + functionnameonebe + openbrace + eef + openbracket + valuesixstringe + equivalent + pee + closebracket + openbrace + valuecolorstringe + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringe + equivalent + tee + closebracket + openbrace + valuecolorstringe + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringe + equivalent + rrr + closebracket + openbrace + valuecolorstringe + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringe + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonece + openbrace + eef + openbracket + valuecolorstringe + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringae+ equal +displayoffit+ ";" +valueselectstringbe+ equal +displayoffit+ ";" +valueselectstringce+ equal +displayoffit+ ";" +valueselectstringde+ equal +displayoffit+ ";" +valueselectstringee+ equal +displayoffit+ ";" +valueselectstringfe+ equal +displayoffit+ ";" +valueselectstringge+ equal +displayoffit+ ";" +valueselectstringhe+ equal +displayoffit+ ";" +layoutf+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringae + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaf + openbrace + valuesixstringf + equal + "'" + smoveseven + "'" + ";" + valuesevenstringf + equal + "'" + slightseven + "'" + ";" + closebrace + spaceit +          fn + functionnameonebf + openbrace + eef + openbracket + valuesixstringf + equivalent + pee + closebracket + openbrace + valuecolorstringf + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringf + equivalent + tee + closebracket + openbrace + valuecolorstringf + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringf + equivalent + rrr + closebracket + openbrace + valuecolorstringf + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringf + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecf + openbrace + eef + openbracket + valuecolorstringf + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaf+ equal +displayoffit+ ";" +valueselectstringbf+ equal +displayoffit+ ";" +valueselectstringcf+ equal +displayoffit+ ";" +valueselectstringdf+ equal +displayoffit+ ";" +valueselectstringef+ equal +displayoffit+ ";" +valueselectstringff+ equal +displayoffit+ ";" +valueselectstringgf+ equal +displayoffit+ ";" +valueselectstringhf+ equal +displayoffit+ ";" +layoutg+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringaf + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneag + openbrace + valuesixstringg + equal + "'" + smoveeight + "'" + ";" + valuesevenstringg + equal + "'" + slighteight + "'" + ";" + closebrace + spaceit +          fn + functionnameonebg + openbrace + eef + openbracket + valuesixstringg + equivalent + pee + closebracket + openbrace + valuecolorstringg + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringg + equivalent + tee + closebracket + openbrace + valuecolorstringg + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringg + equivalent + rrr + closebracket + openbrace + valuecolorstringg + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringg + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecg + openbrace + eef + openbracket + valuecolorstringg + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringag+ equal +displayoffit+ ";" +valueselectstringbg+ equal +displayoffit+ ";" +valueselectstringcg+ equal +displayoffit+ ";" +valueselectstringdg+ equal +displayoffit+ ";" +valueselectstringeg+ equal +displayoffit+ ";" +valueselectstringfg+ equal +displayoffit+ ";" +valueselectstringgg+ equal +displayoffit+ ";" +valueselectstringhg+ equal +displayoffit+ ";" +layouth+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringag + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneah + openbrace + valuesixstringh + equal + "'" + smovenine + "'" + ";" + valuesevenstringh + equal + "'" + slightnine + "'" + ";" + closebrace + spaceit +          fn + functionnameonebh + openbrace + eef + openbracket + valuesixstringh + equivalent + pee + closebracket + openbrace + valuecolorstringh + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringh + equivalent + tee + closebracket + openbrace + valuecolorstringh + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringh + equivalent + rrr + closebracket + openbrace + valuecolorstringh + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringh + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonech + openbrace + eef + openbracket + valuecolorstringh + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringah+ equal +displayoffit+ ";" +valueselectstringbh+ equal +displayoffit+ ";" +valueselectstringch+ equal +displayoffit+ ";" +valueselectstringdh+ equal +displayoffit+ ";" +valueselectstringeh+ equal +displayoffit+ ";" +valueselectstringfh+ equal +displayoffit+ ";" +valueselectstringgh+ equal +displayoffit+ ";" +valueselectstringhh+ equal +displayoffit+ ";" +layouti+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringah + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneai + openbrace + valuesixstringi + equal + "'" + smoveten + "'" + ";" + valuesevenstringi + equal + "'" + slightten + "'" + ";" + closebrace + spaceit +          fn + functionnameonebi + openbrace + eef + openbracket + valuesixstringi + equivalent + pee + closebracket + openbrace + valuecolorstringi + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringi + equivalent + tee + closebracket + openbrace + valuecolorstringi + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringi + equivalent + rrr + closebracket + openbrace + valuecolorstringi + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringi + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneci + openbrace + eef + openbracket + valuecolorstringi + equivalent + "'" + white + "'" + closebracket + openbrace  +layoutj+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringai + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaj + openbrace + valuesixstringj + equal + "'" + smoveeleven + "'" + ";" + valuesevenstringj + equal + "'" + slighteleven + "'" + ";" + closebrace + spaceit +          fn + functionnameonebj + openbrace + eef + openbracket + valuesixstringj + equivalent + pee + closebracket + openbrace + valuecolorstringj + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringj + equivalent + tee + closebracket + openbrace + valuecolorstringj + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringj + equivalent + rrr + closebracket + openbrace + valuecolorstringj + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringj + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecj + openbrace + eef + openbracket + valuecolorstringj + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaj+ equal +displayoffit+ ";" +valueselectstringbj+ equal +displayoffit+ ";" +valueselectstringcj+ equal +displayoffit+ ";" +valueselectstringdj+ equal +displayoffit+ ";" +valueselectstringej+ equal +displayoffit+ ";" +valueselectstringfj+ equal +displayoffit+ ";" +valueselectstringgj+ equal +displayoffit+ ";" +valueselectstringhj+ equal +displayoffit+ ";" +layoutk+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaj + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneak + openbrace + valuesixstringk + equal + "'" + smovetwelve + "'" + ";" + valuesevenstringk + equal + "'" + slighttwelve + "'" + ";" + closebrace + spaceit +          fn + functionnameonebk + openbrace + eef + openbracket + valuesixstringk + equivalent + pee + closebracket + openbrace + valuecolorstringk + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringk + equivalent + tee + closebracket + openbrace + valuecolorstringk + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringk + equivalent + rrr + closebracket + openbrace + valuecolorstringk + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringk + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneck + openbrace + eef + openbracket + valuecolorstringk + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringak+ equal +displayoffit+ ";" +valueselectstringbk+ equal +displayoffit+ ";" +valueselectstringck+ equal +displayoffit+ ";" +valueselectstringdk+ equal +displayoffit+ ";" +valueselectstringek+ equal +displayoffit+ ";" +valueselectstringfk+ equal +displayoffit+ ";" +valueselectstringgk+ equal +displayoffit+ ";" +valueselectstringhk+ equal +displayoffit+ ";" +layoutl+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringak + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneal + openbrace + valuesixstringl + equal + "'" + smovethirteen + "'" + ";" + valuesevenstringl + equal + "'" + slightthirteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebl + openbrace + eef + openbracket + valuesixstringl + equivalent + pee + closebracket + openbrace + valuecolorstringl + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringl + equivalent + tee + closebracket + openbrace + valuecolorstringl + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringl + equivalent + rrr + closebracket + openbrace + valuecolorstringl + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringl + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecl + openbrace + eef + openbracket + valuecolorstringl + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringal+ equal +displayoffit+ ";" +valueselectstringbl+ equal +displayoffit+ ";" +valueselectstringcl+ equal +displayoffit+ ";" +valueselectstringdl+ equal +displayoffit+ ";" +valueselectstringel+ equal +displayoffit+ ";" +valueselectstringfl+ equal +displayoffit+ ";" +valueselectstringgl+ equal +displayoffit+ ";" +valueselectstringhl+ equal +displayoffit+ ";" +layoutm+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringal + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneam + openbrace + valuesixstringm + equal + "'" + smovefourteen + "'" + ";" + valuesevenstringm + equal + "'" + slightfourteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebm + openbrace + eef + openbracket + valuesixstringm + equivalent + pee + closebracket + openbrace + valuecolorstringm + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringm + equivalent + tee + closebracket + openbrace + valuecolorstringm + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringm + equivalent + rrr + closebracket + openbrace + valuecolorstringm + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringm + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecm + openbrace + eef + openbracket + valuecolorstringm + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringam+ equal +displayoffit+ ";" +valueselectstringbm+ equal +displayoffit+ ";" +valueselectstringcm+ equal +displayoffit+ ";" +valueselectstringdm+ equal +displayoffit+ ";" +valueselectstringem+ equal +displayoffit+ ";" +valueselectstringfm+ equal +displayoffit+ ";" +valueselectstringgm+ equal +displayoffit+ ";" +valueselectstringhm+ equal +displayoffit+ ";" +layoutn+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringam + equal + displayonit + ";" + closebrace  +  closebrace +            fn + functionnameonean + openbrace + valuesixstringn + equal + "'" + smovefifeteen + "'" + ";" + valuesevenstringn + equal + "'" + slightfifeteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebn + openbrace + eef + openbracket + valuesixstringn + equivalent + pee + closebracket + openbrace + valuecolorstringn + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringn + equivalent + tee + closebracket + openbrace + valuecolorstringn + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringn + equivalent + rrr + closebracket + openbrace + valuecolorstringn + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringn + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecn + openbrace + eef + openbracket + valuecolorstringn + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringan+ equal +displayoffit+ ";" +valueselectstringbn+ equal +displayoffit+ ";" +valueselectstringcn+ equal +displayoffit+ ";" +valueselectstringdn+ equal +displayoffit+ ";" +valueselectstringen+ equal +displayoffit+ ";" +valueselectstringfn+ equal +displayoffit+ ";" +valueselectstringgn+ equal +displayoffit+ ";" +valueselectstringhn+ equal +displayoffit+ ";" +layouto+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringan + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneao + openbrace + valuesixstringo + equal + "'" + smovesixteen + "'" + ";" + valuesevenstringo + equal + "'" + slightsixteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebo + openbrace + eef + openbracket + valuesixstringo + equivalent + pee + closebracket + openbrace + valuecolorstringo + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringo + equivalent + tee + closebracket + openbrace + valuecolorstringo + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringo + equivalent + rrr + closebracket + openbrace + valuecolorstringo + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringo + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneco + openbrace + eef + openbracket + valuecolorstringo + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringao+ equal +displayoffit+ ";" +valueselectstringbo+ equal +displayoffit+ ";" +valueselectstringco+ equal +displayoffit+ ";" +valueselectstringdo+ equal +displayoffit+ ";" +valueselectstringeo+ equal +displayoffit+ ";" +valueselectstringfo+ equal +displayoffit+ ";" +valueselectstringgo+ equal +displayoffit+ ";" +valueselectstringho+ equal +displayoffit+ ";" +layoutp+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringao + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneap + openbrace + valuesixstringp + equal + "'" + smoveseventeen + "'" + ";" + valuesevenstringp + equal + "'" + slightseventeen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebp + openbrace + eef + openbracket + valuesixstringp + equivalent + pee + closebracket + openbrace + valuecolorstringp + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringp + equivalent + tee + closebracket + openbrace + valuecolorstringp + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringp + equivalent + rrr + closebracket + openbrace + valuecolorstringp + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringp + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecp + openbrace + eef + openbracket + valuecolorstringp + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringap+ equal +displayoffit+ ";" +valueselectstringbp+ equal +displayoffit+ ";" +valueselectstringcp+ equal +displayoffit+ ";" +valueselectstringdp+ equal +displayoffit+ ";" +valueselectstringep+ equal +displayoffit+ ";" +valueselectstringfp+ equal +displayoffit+ ";" +valueselectstringgp+ equal +displayoffit+ ";" +valueselectstringhp+ equal +displayoffit+ ";" +layoutq+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringap + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaq + openbrace + valuesixstringq + equal + "'" + smoveeighteen + "'" + ";" + valuesevenstringq + equal + "'" + slighteighteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebq + openbrace + eef + openbracket + valuesixstringq + equivalent + pee + closebracket + openbrace + valuecolorstringq + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringq + equivalent + tee + closebracket + openbrace + valuecolorstringq + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringq + equivalent + rrr + closebracket + openbrace + valuecolorstringq + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringq + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecq + openbrace + eef + openbracket + valuecolorstringq + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaq+ equal +displayoffit+ ";" +valueselectstringbq+ equal +displayoffit+ ";" +valueselectstringcq+ equal +displayoffit+ ";" +valueselectstringdq+ equal +displayoffit+ ";" +valueselectstringeq+ equal +displayoffit+ ";" +valueselectstringfq+ equal +displayoffit+ ";" +valueselectstringgq+ equal +displayoffit+ ";" +valueselectstringhq+ equal +displayoffit+ ";" +layoutr+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaq + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameonear + openbrace + valuesixstringr + equal + "'" + smovenineteen + "'" + ";" + valuesevenstringr + equal + "'" + slightnineteen + "'" + ";" + closebrace + spaceit +          fn + functionnameonebr + openbrace + eef + openbracket + valuesixstringr + equivalent + pee + closebracket + openbrace + valuecolorstringr + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringr + equivalent + tee + closebracket + openbrace + valuecolorstringr + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringr + equivalent + rrr + closebracket + openbrace + valuecolorstringr + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringr + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecr + openbrace + eef + openbracket + valuecolorstringr + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringar+ equal +displayoffit+ ";" +valueselectstringbr+ equal +displayoffit+ ";" +valueselectstringcr+ equal +displayoffit+ ";" +valueselectstringdr+ equal +displayoffit+ ";" +valueselectstringer+ equal +displayoffit+ ";" +valueselectstringfr+ equal +displayoffit+ ";" +valueselectstringgr+ equal +displayoffit+ ";" +valueselectstringhr+ equal +displayoffit+ ";" +layouts+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringar + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneas + openbrace + valuesixstrings + equal + "'" + smovetwenty + "'" + ";" + valuesevenstrings + equal + "'" + slighttwenty + "'" + ";" + closebrace + spaceit +          fn + functionnameonebs + openbrace + eef + openbracket + valuesixstrings + equivalent + pee + closebracket + openbrace + valuecolorstrings + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstrings + equivalent + tee + closebracket + openbrace + valuecolorstrings + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstrings + equivalent + rrr + closebracket + openbrace + valuecolorstrings + equal + red + ";" + clsb + eelse + openbrace + valuecolorstrings + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecs + openbrace + eef + openbracket + valuecolorstrings + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringas+ equal +displayoffit+ ";" +valueselectstringbs+ equal +displayoffit+ ";" +valueselectstringcs+ equal +displayoffit+ ";" +valueselectstringds+ equal +displayoffit+ ";" +valueselectstringes+ equal +displayoffit+ ";" +valueselectstringfs+ equal +displayoffit+ ";" +valueselectstringgs+ equal +displayoffit+ ";" +valueselectstringhs+ equal +displayoffit+ ";" +layoutt+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringas + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneat + openbrace + valuesixstringt + equal + "'" + smovetwentyone + "'" + ";" + valuesevenstringt + equal + "'" + slighttwentyone + "'" + ";" + closebrace + spaceit +          fn + functionnameonebt + openbrace + eef + openbracket + valuesixstringt + equivalent + pee + closebracket + openbrace + valuecolorstringt + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringt + equivalent + tee + closebracket + openbrace + valuecolorstringt + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringt + equivalent + rrr + closebracket + openbrace + valuecolorstringt + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringt + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonect + openbrace + eef + openbracket + valuecolorstringt + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringat+ equal +displayoffit+ ";" +valueselectstringbt+ equal +displayoffit+ ";" +valueselectstringct+ equal +displayoffit+ ";" +valueselectstringdt+ equal +displayoffit+ ";" +valueselectstringet+ equal +displayoffit+ ";" +valueselectstringft+ equal +displayoffit+ ";" +valueselectstringgt+ equal +displayoffit+ ";" +valueselectstringht+ equal +displayoffit+ ";" + layoutu+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringat + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneau + openbrace + valuesixstringu + equal + "'" + smovetwentytwo + "'" + ";" + valuesevenstringu + equal + "'" + slighttwentytwo + "'" + ";" + closebrace + spaceit +          fn + functionnameonebu + openbrace + eef + openbracket + valuesixstringu + equivalent + pee + closebracket + openbrace + valuecolorstringu + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringu + equivalent + tee + closebracket + openbrace + valuecolorstringu + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringu + equivalent + rrr + closebracket + openbrace + valuecolorstringu + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringu + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecu + openbrace + eef + openbracket + valuecolorstringu + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringau+ equal +displayoffit+ ";" +valueselectstringbu+ equal +displayoffit+ ";" +valueselectstringcu+ equal +displayoffit+ ";" +valueselectstringdu+ equal +displayoffit+ ";" +valueselectstringeu+ equal +displayoffit+ ";" +valueselectstringfu+ equal +displayoffit+ ";" +valueselectstringgu+ equal +displayoffit+ ";" +valueselectstringhu+ equal +displayoffit+ ";" +layoutv+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringau + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneav + openbrace + valuesixstringv + equal + "'" + smovetwentythree + "'" + ";" + valuesevenstringv + equal + "'" + slighttwentythree + "'" + ";" + closebrace + spaceit +          fn + functionnameonebv + openbrace + eef + openbracket + valuesixstringv + equivalent + pee + closebracket + openbrace + valuecolorstringv + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringv + equivalent + tee + closebracket + openbrace + valuecolorstringv + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringv + equivalent + rrr + closebracket + openbrace + valuecolorstringv + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringv + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecv + openbrace + eef + openbracket + valuecolorstringv + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringav+ equal +displayoffit+ ";" +valueselectstringbv+ equal +displayoffit+ ";" +valueselectstringcv+ equal +displayoffit+ ";" +valueselectstringdv+ equal +displayoffit+ ";" +valueselectstringev+ equal +displayoffit+ ";" +valueselectstringfv+ equal +displayoffit+ ";" +valueselectstringgv+ equal +displayoffit+ ";" +valueselectstringhv+ equal +displayoffit+ ";" +layoutw+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringav + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaw + openbrace + valuesixstringw + equal + "'" + smovetwentyfour + "'" + ";" + valuesevenstringw + equal + "'" + slighttwentyfour + "'" + ";" + closebrace + spaceit +          fn + functionnameonebw + openbrace + eef + openbracket + valuesixstringw + equivalent + pee + closebracket + openbrace + valuecolorstringw + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringw + equivalent + tee + closebracket + openbrace + valuecolorstringw + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringw + equivalent + rrr + closebracket + openbrace + valuecolorstringw + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringw + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecw + openbrace + eef + openbracket + valuecolorstringw + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaw+ equal +displayoffit+ ";" +valueselectstringbw+ equal +displayoffit+ ";" +valueselectstringcw+ equal +displayoffit+ ";" +valueselectstringdw+ equal +displayoffit+ ";" +valueselectstringew+ equal +displayoffit+ ";" +valueselectstringfw+ equal +displayoffit+ ";" +valueselectstringgw+ equal +displayoffit+ ";" +valueselectstringhw+ equal +displayoffit+ ";" +layoutx+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaw + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneax + openbrace + valuesixstringx + equal + "'" + smovetwentyfive + "'" + ";" + valuesevenstringx + equal + "'" + slighttwentyfive + "'" + ";" + closebrace + spaceit +          fn + functionnameonebx + openbrace + eef + openbracket + valuesixstringx + equivalent + pee + closebracket + openbrace + valuecolorstringx + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringx + equivalent + tee + closebracket + openbrace + valuecolorstringx + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringx + equivalent + rrr + closebracket + openbrace + valuecolorstringx + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringx + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecx + openbrace + eef + openbracket + valuecolorstringx + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringax+ equal +displayoffit+ ";" +valueselectstringbx+ equal +displayoffit+ ";" +valueselectstringcx+ equal +displayoffit+ ";" +valueselectstringdx+ equal +displayoffit+ ";" +valueselectstringex+ equal +displayoffit+ ";" +valueselectstringfx+ equal +displayoffit+ ";" +valueselectstringgx+ equal +displayoffit+ ";" +valueselectstringhx+ equal +displayoffit+ ";" +layouty+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringax + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneay + openbrace + valuesixstringy + equal + "'" + smovetwentysix + "'" + ";" + valuesevenstringy + equal + "'" + slighttwentysix + "'" + ";" + closebrace + spaceit +          fn + functionnameoneby + openbrace + eef + openbracket + valuesixstringy + equivalent + pee + closebracket + openbrace + valuecolorstringy + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringy + equivalent + tee + closebracket + openbrace + valuecolorstringy + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringy + equivalent + rrr + closebracket + openbrace + valuecolorstringy + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringy + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecy + openbrace + eef + openbracket + valuecolorstringy + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringay+ equal +displayoffit+ ";" +valueselectstringby+ equal +displayoffit+ ";" +valueselectstringcy+ equal +displayoffit+ ";" +valueselectstringdy+ equal +displayoffit+ ";" +valueselectstringey+ equal +displayoffit+ ";" +valueselectstringfy+ equal +displayoffit+ ";" +valueselectstringgy+ equal +displayoffit+ ";" +valueselectstringhy+ equal +displayoffit+ ";" +layoutz+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringay + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaz + openbrace + valuesixstringz + equal + "'" + smovetwentyseven + "'" + ";" + valuesevenstringz + equal + "'" + slighttwentyseven + "'" + ";" + closebrace + spaceit +          fn + functionnameonebz + openbrace + eef + openbracket + valuesixstringz + equivalent + pee + closebracket + openbrace + valuecolorstringz + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringz + equivalent + tee + closebracket + openbrace + valuecolorstringz + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringz + equivalent + rrr + closebracket + openbrace + valuecolorstringz + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringz + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecz + openbrace + eef + openbracket + valuecolorstringz + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaz+ equal +displayoffit+ ";" +valueselectstringbz+ equal +displayoffit+ ";" +valueselectstringcz+ equal +displayoffit+ ";" +valueselectstringdz+ equal +displayoffit+ ";" +valueselectstringez+ equal +displayoffit+ ";" +valueselectstringfz+ equal +displayoffit+ ";" +valueselectstringgz+ equal +displayoffit+ ";" +valueselectstringhz+ equal +displayoffit+ ";" +layoutaa+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaz + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaaa + openbrace + valuesixstringaa + equal + "'" + smovetwentyeight + "'" + ";" + valuesevenstringaa + equal + "'" + slighttwentyeight + "'" + ";" + closebrace + spaceit +          fn + functionnameonebaa + openbrace + eef + openbracket + valuesixstringaa + equivalent + pee + closebracket + openbrace + valuecolorstringaa + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringaa + equivalent + tee + closebracket + openbrace + valuecolorstringaa + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringaa + equivalent + rrr + closebracket + openbrace + valuecolorstringaa + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringaa + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecaa + openbrace + eef + openbracket + valuecolorstringaa + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaaa+ equal +displayoffit+ ";" +valueselectstringbaa+ equal +displayoffit+ ";" +valueselectstringcaa+ equal +displayoffit+ ";" +valueselectstringdaa+ equal +displayoffit+ ";" +valueselectstringeaa+ equal +displayoffit+ ";" +valueselectstringfaa+ equal +displayoffit+ ";" +valueselectstringgaa+ equal +displayoffit+ ";" +valueselectstringhaa+ equal +displayoffit+ ";" +layoutbb+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaaa + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneabb + openbrace + valuesixstringbb + equal + "'" + smovetwentynine + "'" + ";" + valuesevenstringbb + equal + "'" + slighttwentynine + "'" + ";" + closebrace + spaceit +          fn + functionnameonebbb + openbrace + eef + openbracket + valuesixstringbb + equivalent + pee + closebracket + openbrace + valuecolorstringbb + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringbb + equivalent + tee + closebracket + openbrace + valuecolorstringbb + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringbb + equivalent + rrr + closebracket + openbrace + valuecolorstringbb + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringbb + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecbb + openbrace + eef + openbracket + valuecolorstringbb + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringabb+ equal +displayoffit+ ";" +valueselectstringbbb+ equal +displayoffit+ ";" +valueselectstringcbb+ equal +displayoffit+ ";" +valueselectstringdbb+ equal +displayoffit+ ";" +valueselectstringebb+ equal +displayoffit+ ";" +valueselectstringfbb+ equal +displayoffit+ ";" +valueselectstringgbb+ equal +displayoffit+ ";" +valueselectstringhbb+ equal +displayoffit+ ";" +layoutcc+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringabb + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneacc + openbrace + valuesixstringcc + equal + "'" + smovethirty + "'" + ";" + valuesevenstringcc + equal + "'" + slightthirty + "'" + ";" + closebrace + spaceit +          fn + functionnameonebcc + openbrace + eef + openbracket + valuesixstringcc + equivalent + pee + closebracket + openbrace + valuecolorstringcc + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringcc + equivalent + tee + closebracket + openbrace + valuecolorstringcc + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringcc + equivalent + rrr + closebracket + openbrace + valuecolorstringcc + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringcc + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneccc + openbrace + eef + openbracket + valuecolorstringcc + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringacc+ equal +displayoffit+ ";" +valueselectstringbcc+ equal +displayoffit+ ";" +valueselectstringccc+ equal +displayoffit+ ";" +valueselectstringdcc+ equal +displayoffit+ ";" +valueselectstringecc+ equal +displayoffit+ ";" +valueselectstringfcc+ equal +displayoffit+ ";" +valueselectstringgcc+ equal +displayoffit+ ";" +valueselectstringhcc+ equal +displayoffit+ ";" +layoutdd+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringacc + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneadd + openbrace + valuesixstringdd + equal + "'" + smovethirtyone + "'" + ";" + valuesevenstringdd + equal + "'" + slightthirtyone + "'" + ";" + closebrace + spaceit +          fn + functionnameonebdd + openbrace + eef + openbracket + valuesixstringdd + equivalent + pee + closebracket + openbrace + valuecolorstringdd + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringdd + equivalent + tee + closebracket + openbrace + valuecolorstringdd + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringdd + equivalent + rrr + closebracket + openbrace + valuecolorstringdd + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringdd + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecdd + openbrace + eef + openbracket + valuecolorstringdd + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringadd+ equal +displayoffit+ ";" +valueselectstringbdd+ equal +displayoffit+ ";" +valueselectstringcdd+ equal +displayoffit+ ";" +valueselectstringddd+ equal +displayoffit+ ";" +valueselectstringedd+ equal +displayoffit+ ";" +valueselectstringfdd+ equal +displayoffit+ ";" +valueselectstringgdd+ equal +displayoffit+ ";" +valueselectstringhdd+ equal +displayoffit+ ";" +layoutee+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringadd + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaee + openbrace + valuesixstringee + equal + "'" + smovethirtytwo + "'" + ";" + valuesevenstringee+ equal + "'" + slightthirtytwo + "'" + ";" + closebrace + spaceit +          fn + functionnameonebee + openbrace + eef + openbracket + valuesixstringee + equivalent + pee + closebracket + openbrace + valuecolorstringee + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringee + equivalent + tee + closebracket + openbrace + valuecolorstringee + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringee + equivalent + rrr + closebracket + openbrace + valuecolorstringee + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringee + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecee + openbrace + eef + openbracket + valuecolorstringee + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaee+ equal +displayoffit+ ";" +valueselectstringbee+ equal +displayoffit+ ";" +valueselectstringcee+ equal +displayoffit+ ";" +valueselectstringdee+ equal +displayoffit+ ";" +valueselectstringeee+ equal +displayoffit+ ";" +valueselectstringfee+ equal +displayoffit+ ";" +valueselectstringgee+ equal +displayoffit+ ";" +valueselectstringhee+ equal +displayoffit+ ";" +layoutff+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaee + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaff + openbrace + valuesixstringff + equal + "'" + smovethirtythree + "'" + ";" + valuesevenstringff+ equal + "'" + slightthirtythree + "'" + ";" + closebrace + spaceit +          fn + functionnameonebff + openbrace + eef + openbracket + valuesixstringff + equivalent + pee + closebracket + openbrace + valuecolorstringff + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringff + equivalent + tee + closebracket + openbrace + valuecolorstringff + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringff + equivalent + rrr + closebracket + openbrace + valuecolorstringff + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringff + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecff + openbrace + eef + openbracket + valuecolorstringff + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaff+ equal +displayoffit+ ";" +valueselectstringbff+ equal +displayoffit+ ";" +valueselectstringcff+ equal +displayoffit+ ";" +valueselectstringdff+ equal +displayoffit+ ";" +valueselectstringeff+ equal +displayoffit+ ";" +valueselectstringfff+ equal +displayoffit+ ";" +valueselectstringgff+ equal +displayoffit+ ";" +valueselectstringhff+ equal +displayoffit+ ";" + layoutgg+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringaff + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneagg + openbrace + valuesixstringgg + equal + "'" + smovethirtyfour + "'" + ";" + valuesevenstringgg+ equal + "'" + slightthirtyfour + "'" + ";" + closebrace + spaceit +          fn + functionnameonebgg + openbrace + eef + openbracket + valuesixstringgg + equivalent + pee + closebracket + openbrace + valuecolorstringgg + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringgg + equivalent + tee + closebracket + openbrace + valuecolorstringgg + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringgg + equivalent + rrr + closebracket + openbrace + valuecolorstringgg + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringgg + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecgg + openbrace + eef + openbracket + valuecolorstringgg + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringagg+ equal +displayoffit+ ";" +valueselectstringbgg+ equal +displayoffit+ ";" +valueselectstringcgg+ equal +displayoffit+ ";" +valueselectstringdgg+ equal +displayoffit+ ";" +valueselectstringegg+ equal +displayoffit+ ";" +valueselectstringfgg+ equal +displayoffit+ ";" +valueselectstringggg+ equal +displayoffit+ ";" +valueselectstringhgg+ equal +displayoffit+ ";" + layouthh+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringagg + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneahh + openbrace + valuesixstringhh + equal + "'" + smovethirtyfive + "'" + ";" + valuesevenstringhh+ equal + "'" + slightthirtyfive + "'" + ";" + closebrace + spaceit +          fn + functionnameonebhh + openbrace + eef + openbracket + valuesixstringhh + equivalent + pee + closebracket + openbrace + valuecolorstringhh + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringhh + equivalent + tee + closebracket + openbrace + valuecolorstringhh + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringhh + equivalent + rrr + closebracket + openbrace + valuecolorstringhh + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringhh + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonechh + openbrace + eef + openbracket + valuecolorstringhh + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringahh+ equal +displayoffit+ ";" +valueselectstringbhh+ equal +displayoffit+ ";" +valueselectstringchh+ equal +displayoffit+ ";" +valueselectstringdhh+ equal +displayoffit+ ";" +valueselectstringehh+ equal +displayoffit+ ";" +valueselectstringfhh+ equal +displayoffit+ ";" +valueselectstringghh+ equal +displayoffit+ ";" +valueselectstringhhh+ equal +displayoffit+ ";" + layoutii+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringahh + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneaii + openbrace + valuesixstringii + equal + "'" + smovethirtysix + "'" + ";" + valuesevenstringii+ equal + "'" + slightthirtysix + "'" + ";" + closebrace + spaceit +          fn + functionnameonebii + openbrace + eef + openbracket + valuesixstringii + equivalent + pee + closebracket + openbrace + valuecolorstringii + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringii + equivalent + tee + closebracket + openbrace + valuecolorstringii + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringii + equivalent + rrr + closebracket + openbrace + valuecolorstringii + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringii + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecii + openbrace + eef + openbracket + valuecolorstringii + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaii+ equal +displayoffit+ ";" +valueselectstringbii+ equal +displayoffit+ ";" +valueselectstringcii+ equal +displayoffit+ ";" +valueselectstringdii+ equal +displayoffit+ ";" +valueselectstringeii+ equal +displayoffit+ ";" +valueselectstringfii+ equal +displayoffit+ ";" +valueselectstringgii+ equal +displayoffit+ ";" +valueselectstringhii+ equal +displayoffit+ ";" + layoutjj+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringaii + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneajj + openbrace + valuesixstringjj + equal + "'" + smovethirtyseven + "'" + ";" + valuesevenstringjj+ equal + "'" + slightthirtyseven + "'" + ";" + closebrace + spaceit +          fn + functionnameonebjj + openbrace + eef + openbracket + valuesixstringjj + equivalent + pee + closebracket + openbrace + valuecolorstringjj + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringjj + equivalent + tee + closebracket + openbrace + valuecolorstringjj + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringjj + equivalent + rrr + closebracket + openbrace + valuecolorstringjj + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringjj + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecjj + openbrace + eef + openbracket + valuecolorstringjj + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringajj+ equal +displayoffit+ ";" +valueselectstringbjj+ equal +displayoffit+ ";" +valueselectstringcjj+ equal +displayoffit+ ";" +valueselectstringdjj+ equal +displayoffit+ ";" +valueselectstringejj+ equal +displayoffit+ ";" +valueselectstringfjj+ equal +displayoffit+ ";" +valueselectstringgjj+ equal +displayoffit+ ";" +valueselectstringhjj+ equal +displayoffit+ ";" + layoutkk+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringajj + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneakk + openbrace + valuesixstringkk + equal + "'" + smovethirtyeight + "'" + ";" + valuesevenstringkk+ equal + "'" + slightthirtyeight + "'" + ";" + closebrace + spaceit +          fn + functionnameonebkk + openbrace + eef + openbracket + valuesixstringkk + equivalent + pee + closebracket + openbrace + valuecolorstringkk + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringkk + equivalent + tee + closebracket + openbrace + valuecolorstringkk + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringkk + equivalent + rrr + closebracket + openbrace + valuecolorstringkk + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringkk + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameoneckk + openbrace + eef + openbracket + valuecolorstringkk + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringakk+ equal +displayoffit+ ";" +valueselectstringbkk+ equal +displayoffit+ ";" +valueselectstringckk+ equal +displayoffit+ ";" +valueselectstringdkk+ equal +displayoffit+ ";" +valueselectstringekk+ equal +displayoffit+ ";" +valueselectstringfkk+ equal +displayoffit+ ";" +valueselectstringgkk+ equal +displayoffit+ ";" +valueselectstringhkk+ equal +displayoffit+ ";" +layoutll+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringakk + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneall + openbrace + valuesixstringll + equal + "'" + smovethirtynine + "'" + ";" + valuesevenstringll+ equal + "'" + slightthirtynine + "'" + ";" + closebrace + spaceit +          fn + functionnameonebll + openbrace + eef + openbracket + valuesixstringll + equivalent + pee + closebracket + openbrace + valuecolorstringll + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringll + equivalent + tee + closebracket + openbrace + valuecolorstringll + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringll + equivalent + rrr + closebracket + openbrace + valuecolorstringll + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringll + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecll + openbrace + eef + openbracket + valuecolorstringll + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringall+ equal +displayoffit+ ";" +valueselectstringbll+ equal +displayoffit+ ";" +valueselectstringcll+ equal +displayoffit+ ";" +valueselectstringdll+ equal +displayoffit+ ";" +valueselectstringell+ equal +displayoffit+ ";" +valueselectstringfll+ equal +displayoffit+ ";" +valueselectstringgll+ equal +displayoffit+ ";" +valueselectstringhll+ equal +displayoffit+ ";" + layoutmm+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringall + equal + displayonit + ";" + closebrace  +  closebrace +           fn + functionnameoneamm + openbrace + valuesixstringmm + equal + "'" + smovefourty + "'" + ";" + valuesevenstringmm+ equal + "'" + slightfourty + "'" + ";" + closebrace + spaceit +          fn + functionnameonebmm + openbrace + eef + openbracket + valuesixstringmm + equivalent + pee + closebracket + openbrace + valuecolorstringmm + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringmm + equivalent + tee + closebracket + openbrace + valuecolorstringmm + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringmm + equivalent + rrr + closebracket + openbrace + valuecolorstringmm + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringmm + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecmm + openbrace + eef + openbracket + valuecolorstringmm + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringamm+ equal +displayoffit+ ";" +valueselectstringbmm+ equal +displayoffit+ ";" +valueselectstringcmm+ equal +displayoffit+ ";" +valueselectstringdmm+ equal +displayoffit+ ";" +valueselectstringemm+ equal +displayoffit+ ";" +valueselectstringfmm+ equal +displayoffit+ ";" +valueselectstringgmm+ equal +displayoffit+ ";" +valueselectstringhmm+ equal +displayoffit+ ";" +layoutnn+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringamm + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneann + openbrace + valuesixstringnn + equal + "'" + smovefourtyone + "'" + ";" + valuesevenstringnn+ equal + "'" + slightfourtyone + "'" + ";" + closebrace + spaceit +          fn + functionnameonebnn + openbrace + eef + openbracket + valuesixstringnn + equivalent + pee + closebracket + openbrace + valuecolorstringnn + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringnn + equivalent + tee + closebracket + openbrace + valuecolorstringnn + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringnn + equivalent + rrr + closebracket + openbrace + valuecolorstringnn + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringnn + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecnn + openbrace + eef + openbracket + valuecolorstringnn + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringann+ equal +displayoffit+ ";" +valueselectstringbnn+ equal +displayoffit+ ";" +valueselectstringcnn+ equal +displayoffit+ ";" +valueselectstringdnn+ equal +displayoffit+ ";" +valueselectstringenn+ equal +displayoffit+ ";" +valueselectstringfnn+ equal +displayoffit+ ";" +valueselectstringgnn+ equal +displayoffit+ ";" +valueselectstringhnn+ equal +displayoffit+ ";" +layoutoo+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringann + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneaoo + openbrace + valuesixstringoo + equal + "'" + smovefourtytwo + "'" + ";" + valuesevenstringoo+ equal + "'" + slightfourtytwo + "'" + ";" + closebrace + spaceit +          fn + functionnameoneboo + openbrace + eef + openbracket + valuesixstringoo + equivalent + pee + closebracket + openbrace + valuecolorstringoo + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringoo + equivalent + tee + closebracket + openbrace + valuecolorstringoo + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringoo + equivalent + rrr + closebracket + openbrace + valuecolorstringoo + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringoo + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecoo + openbrace + eef + openbracket + valuecolorstringoo + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaoo+ equal +displayoffit+ ";" +valueselectstringboo+ equal +displayoffit+ ";" +valueselectstringcoo+ equal +displayoffit+ ";" +valueselectstringdoo+ equal +displayoffit+ ";" +valueselectstringeoo+ equal +displayoffit+ ";" +valueselectstringfoo+ equal +displayoffit+ ";" +valueselectstringgoo+ equal +displayoffit+ ";" +valueselectstringhoo+ equal +displayoffit+ ";" +layoutpp+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaoo + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneapp + openbrace + valuesixstringpp + equal + "'" + smovefourtythree + "'" + ";" + valuesevenstringpp+ equal + "'" + slightfourtythree + "'" + ";" + closebrace + spaceit +          fn + functionnameonebpp + openbrace + eef + openbracket + valuesixstringpp + equivalent + pee + closebracket + openbrace + valuecolorstringpp + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringpp + equivalent + tee + closebracket + openbrace + valuecolorstringpp + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringpp + equivalent + rrr + closebracket + openbrace + valuecolorstringpp + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringpp + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecpp + openbrace + eef + openbracket + valuecolorstringpp + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringapp+ equal +displayoffit+ ";" +valueselectstringbpp+ equal +displayoffit+ ";" +valueselectstringcpp+ equal +displayoffit+ ";" +valueselectstringdpp+ equal +displayoffit+ ";" +valueselectstringepp+ equal +displayoffit+ ";" +valueselectstringfpp+ equal +displayoffit+ ";" +valueselectstringgpp+ equal +displayoffit+ ";" +valueselectstringhpp+ equal +displayoffit+ ";" +layoutqq+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringapp + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneaqq + openbrace + valuesixstringqq + equal + "'" + smovefourtyfour + "'" + ";" + valuesevenstringqq+ equal + "'" + slightfourtyfour + "'" + ";" + closebrace + spaceit +          fn + functionnameonebqq + openbrace + eef + openbracket + valuesixstringqq + equivalent + pee + closebracket + openbrace + valuecolorstringqq + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringqq + equivalent + tee + closebracket + openbrace + valuecolorstringqq + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringqq + equivalent + rrr + closebracket + openbrace + valuecolorstringqq + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringqq + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecqq + openbrace + eef + openbracket + valuecolorstringqq + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaqq+ equal +displayoffit+ ";" +valueselectstringbqq+ equal +displayoffit+ ";" +valueselectstringcqq+ equal +displayoffit+ ";" +valueselectstringdqq+ equal +displayoffit+ ";" +valueselectstringeqq+ equal +displayoffit+ ";" +valueselectstringfqq+ equal +displayoffit+ ";" +valueselectstringgqq+ equal +displayoffit+ ";" +valueselectstringhqq+ equal +displayoffit+ ";" + layoutrr+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringaqq + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameonearr + openbrace + valuesixstringrr + equal + "'" + smovefourtyfive + "'" + ";" + valuesevenstringrr+ equal + "'" + slightfourtyfive + "'" + ";" + closebrace + spaceit +          fn + functionnameonebrr + openbrace + eef + openbracket + valuesixstringrr + equivalent + pee + closebracket + openbrace + valuecolorstringrr + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringrr + equivalent + tee + closebracket + openbrace + valuecolorstringrr + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringrr + equivalent + rrr + closebracket + openbrace + valuecolorstringrr + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringrr + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecrr + openbrace + eef + openbracket + valuecolorstringrr + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringarr+ equal +displayoffit+ ";" +valueselectstringbrr+ equal +displayoffit+ ";" +valueselectstringcrr+ equal +displayoffit+ ";" +valueselectstringdrr+ equal +displayoffit+ ";" +valueselectstringerr+ equal +displayoffit+ ";" +valueselectstringfrr+ equal +displayoffit+ ";" +valueselectstringgrr+ equal +displayoffit+ ";" +valueselectstringhrr+ equal +displayoffit+ ";" + layoutss+ equal +displayoffit+ ";" + clsb + eelse + openbrace + valueselectstringarr + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneass + openbrace + valuesixstringss + equal + "'" + smovefourtysix + "'" + ";" + valuesevenstringss+ equal + "'" + slightfourtysix + "'" + ";" + closebrace + spaceit +          fn + functionnameonebss + openbrace + eef + openbracket + valuesixstringss + equivalent + pee + closebracket + openbrace + valuecolorstringss + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringss + equivalent + tee + closebracket + openbrace + valuecolorstringss + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringss + equivalent + rrr + closebracket + openbrace + valuecolorstringss + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringss + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecss + openbrace + eef + openbracket + valuecolorstringss + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringass+ equal +displayoffit+ ";" +valueselectstringbss+ equal +displayoffit+ ";" +valueselectstringcss+ equal +displayoffit+ ";" +valueselectstringdss+ equal +displayoffit+ ";" +valueselectstringess+ equal +displayoffit+ ";" +valueselectstringfss+ equal +displayoffit+ ";" +valueselectstringgss+ equal +displayoffit+ ";" +valueselectstringhss+ equal +displayoffit+ ";" +layouttt+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringass + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneatt + openbrace + valuesixstringtt + equal + "'" + smovefourtyseven + "'" + ";" + valuesevenstringtt+ equal + "'" + slightfourtyseven + "'" + ";" + closebrace + spaceit +          fn + functionnameonebtt + openbrace + eef + openbracket + valuesixstringtt + equivalent + pee + closebracket + openbrace + valuecolorstringtt + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringtt + equivalent + tee + closebracket + openbrace + valuecolorstringtt + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringtt + equivalent + rrr + closebracket + openbrace + valuecolorstringtt + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringtt + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonectt + openbrace + eef + openbracket + valuecolorstringtt + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringatt+ equal +displayoffit+ ";" +valueselectstringbtt+ equal +displayoffit+ ";" +valueselectstringctt+ equal +displayoffit+ ";" +valueselectstringdtt+ equal +displayoffit+ ";" +valueselectstringett+ equal +displayoffit+ ";" +valueselectstringftt+ equal +displayoffit+ ";" +valueselectstringgtt+ equal +displayoffit+ ";" +valueselectstringhtt+ equal +displayoffit+ ";" +layoutuu+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringatt + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneauu + openbrace + valuesixstringuu + equal + "'" + smovefourtyeight + "'" + ";" + valuesevenstringuu+ equal + "'" + slightfourtyeight + "'" + ";" + closebrace + spaceit +          fn + functionnameonebuu + openbrace + eef + openbracket + valuesixstringuu + equivalent + pee + closebracket + openbrace + valuecolorstringuu + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringuu + equivalent + tee + closebracket + openbrace + valuecolorstringuu + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringuu + equivalent + rrr + closebracket + openbrace + valuecolorstringuu + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringuu + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecuu + openbrace + eef + openbracket + valuecolorstringuu + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringauu+ equal +displayoffit+ ";" +valueselectstringbuu+ equal +displayoffit+ ";" +valueselectstringcuu+ equal +displayoffit+ ";" +valueselectstringduu+ equal +displayoffit+ ";" +valueselectstringeuu+ equal +displayoffit+ ";" +valueselectstringfuu+ equal +displayoffit+ ";" +valueselectstringguu+ equal +displayoffit+ ";" +valueselectstringhuu+ equal +displayoffit+ ";" +layoutvv+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringauu + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneavv + openbrace + valuesixstringvv + equal + "'" + smovefourtynine + "'" + ";" + valuesevenstringvv+ equal + "'" + slightfourtynine + "'" + ";" + closebrace + spaceit +          fn + functionnameonebvv + openbrace + eef + openbracket + valuesixstringvv + equivalent + pee + closebracket + openbrace + valuecolorstringvv + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringvv + equivalent + tee + closebracket + openbrace + valuecolorstringvv + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringvv + equivalent + rrr + closebracket + openbrace + valuecolorstringvv + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringvv + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecvv + openbrace + eef + openbracket + valuecolorstringvv + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringavv+ equal +displayoffit+ ";" +valueselectstringbvv+ equal +displayoffit+ ";" +valueselectstringcvv+ equal +displayoffit+ ";" +valueselectstringdvv+ equal +displayoffit+ ";" +valueselectstringevv+ equal +displayoffit+ ";" +valueselectstringfvv+ equal +displayoffit+ ";" +valueselectstringgvv+ equal +displayoffit+ ";" +valueselectstringhvv+ equal +displayoffit+ ";" +layoutww+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringavv + equal + displayonit + ";" + closebrace  +  closebrace +          fn + functionnameoneaww + openbrace + valuesixstringww + equal + "'" + smovefifety + "'" + ";" + valuesevenstringww+ equal + "'" + slightfifety + "'" + ";" + closebrace + spaceit +          fn + functionnameonebww + openbrace + eef + openbracket + valuesixstringww + equivalent + pee + closebracket + openbrace + valuecolorstringww + equal + green + ";" + clsb + eelse + eef + openbracket + valuesixstringww + equivalent + tee + closebracket + openbrace + valuecolorstringww + equal + yellow + ";" + clsb + eelse + eef + openbracket + valuesixstringww + equivalent + rrr + closebracket + openbrace + valuecolorstringww + equal + red + ";" + clsb + eelse + openbrace + valuecolorstringww + equal + "'" + white + "'" + ";" + closebrace  +  closebrace +       fn + functionnameonecww + openbrace + eef + openbracket + valuecolorstringww + equivalent + "'" + white + "'" + closebracket + openbrace +valueselectstringaww+ equal +displayoffit+ ";" +valueselectstringbww+ equal +displayoffit+ ";" +valueselectstringcww+ equal +displayoffit+ ";" +valueselectstringdww+ equal +displayoffit+ ";" +valueselectstringeww+ equal +displayoffit+ ";" +valueselectstringfww+ equal +displayoffit+ ";" +valueselectstringgww+ equal +displayoffit+ ";" +valueselectstringhww+ equal +displayoffit+ ";" +layoutxx+ equal +displayoffit+ ";" +  clsb + eelse + openbrace + valueselectstringaww + equal + displayonit + ";" + closebrace  +  closebrace +                   "</script>" + "</head>" + "<body onload='openclosena() || rowones() || lightrone() || dmoverone() || rowtwos() || lightrtwo() || dmovertwo() || rowthrees() || lightrthree() || dmoverthree() || rowfours() || lightrfour() || dmoverfour() || rowfives() || lightrfive() || dmoverfive() || rowsixs() || lightrsix() || dmoversix() || rowsevens() || lightrseven() || dmoverseven() || roweights() || lightreight() || dmovereight() || rownines() || lightrnine() || dmovernine() || rowtens() || lightrten() || dmoverten() || rowelevens() || lightreleven() || dmovereleven() || rowtwelves() || lightrtwelve() || dmovertwelve() || rowthirteens() || lightrthirteen() || dmoverthirteen() || rowfourteens() || lightrfourteen() || dmoverfourteen() || rowfifeteens() || lightrfifeteen() || dmoverfifeteen() || rowsixteens() || lightrsixteen() || dmoversixteen() || rowseventeens() || lightrseventeen() || dmoverseventeen() || roweighteens() || lightreighteen() || dmovereighteen() || rownineteens() || lightrnineteen() || dmovernineteen() || rowtwentys() || lightrtwenty() || dmovertwenty() || rowtwentyones() || lightrtwentyone() || dmovertwentyone() || rowtwentytwos() || lightrtwentytwo() || dmovertwentytwo() || rowtwentythrees() || lightrtwentythree() || dmovertwentythree() || rowtwentyfours() || lightrtwentyfour() || dmovertwentyfour() || rowtwentyfives() || lightrtwentyfive() || dmovertwentyfive() || rowtwentysixs() || lightrtwentysix() || dmovertwentysix() || rowtwentysevens() || lightrtwentyseven() || dmovertwentyseven() || rowtwentyeights() || lightrtwentyeight() || dmovertwentyeight() || rowtwentynines() || lightrtwentynine() || dmovertwentynine() || rowthirtys() || lightrthirty() || dmoverthirty() || rowthirtyones() || lightrthirtyone() || dmoverthirtyone() || rowthirtytwos() || lightrthirtytwo() || dmoverthirtytwo() || rowthirtythrees() || lightrthirtythree() || dmoverthirtythree() || rowthirtyfours() || lightrthirtyfour() || dmoverthirtyfour() || rowthirtyfives() || lightrthirtyfive() || dmoverthirtyfive() || rowthirtysixs() || lightrthirtysix() || dmoverthirtysix() || rowthirtysevens() || lightrthirtyseven() || dmoverthirtyseven() || rowthirtyeights() || lightrthirtyeight() || dmoverthirtyeight() || rowthirtynines() || lightrthirtynine() || dmoverthirtynine() || rowfourtys() || lightrfourty() || dmoverfourty() || rowfourtyones() || lightrfourtyone() || dmoverfourtyone() || rowfourtytwos() || lightrfourtytwo() || dmoverfourtytwo() || rowfourtythrees() || lightrfourtythree() || dmoverfourtythree() || rowfourtyfours() || lightrfourtyfour() || dmoverfourtyfour() || rowfourtyfives() || lightrfourtyfive() || dmoverfourtyfive() || rowfourtysixs() || lightrfourtysix() || dmoverfourtysix() || rowfourtysevens() || lightrfourtyseven() || dmoverfourtyseven() || rowfourtyeights() || lightrfourtyeight() || dmoverfourtyeight() || rowfourtynines() || lightrfourtynine() || dmoverfourtynine() || rowfifetys() || lightrfifety() || dmoverfifety()' style='background-color: blue; margin: 0; padding: 0; border: none;'>" + formopen + mainzz +keydivs +  spaninrcmp + bcompanynames +spanclose +  divclose +keydivs + "Bus Schedule" + divclose + mainclose  +maina + leftloae + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spanin + titlespana + spanclose + spaninroneone + stimeone + spanclose + spanclose + spanclose + spanouttwo + spanin + titlespan + spanclose + spaninronetwo + srouteone + spanclose + spanclose + spanclose + spanoutthree + spanin + titlespan + spanclose + spaninronethree + sbrandone + spanclose + spanclose + spanclose + spanoutfour + spanin + titlespana + spanclose + spaninronefour + snumberone + spanclose + spanclose + spanclose + spanoutfive + spanin + titlespan + spanclose + spaninronefive + sparkone + spanclose + spanclose + spanclose + spanoutsix + spanin + titlespan + spanclose + spaninronesix + smoveroneinput + spanclose + spanclose + spanclose + loclose + bottomsloa +  spanoutseven +spanin + titlespan + spanclose + spaninroneseven + slightroneinput + spanclose + spanclose + spanclose + spanouteight + spanin + titlespana + spanclose + spaninroneeight + sboardroneanchor + sboardone + anchorclose + spanclose + spanclose + spanclose + loclose  + mainclose +         mainb + leftloa +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +                   spanoutone + spaninrtwoone + titlespana + spanclose + stimetwo + spanclose + spanclose + spanouttwo + spaninrtwotwo + titlespan + spanclose + sroutetwo + spanclose + spanclose + spanoutthree + spaninrtwothree + titlespan + spanclose + sbrandtwo + spanclose + spanclose + spanoutfour + spaninrtwofour + titlespana + spanclose + snumbertwo + spanclose + spanclose + spanoutfive + spaninrtwofive + titlespan + spanclose + sparktwo + spanclose + spanclose + spanoutsix + spaninrtwosix + titlespan + spanclose + smovertwoinput + spanclose + spanclose + loclose + bottomsloa + spanoutseven + spaninrtwoseven + titlespan + spanclose + slightrtwoinput + spanclose + spanclose + spanouteight + spaninrtwoeight + titlespana + spanclose + sboardrtwoanchor + sboardtwo + anchorclose + spanclose + spanclose +  loclose  + mainclose +                mainc + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +                   spanoutone + spaninrthreeone + titlespana + spanclose + stimethree + spanclose + spanclose + spanouttwo + spaninrthreetwo + titlespan + spanclose + sroutethree + spanclose + spanclose + spanoutthree + spaninrthreethree + titlespan + spanclose + sbrandthree + spanclose + spanclose + spanoutfour + spaninrthreefour + titlespana + spanclose + snumberthree + spanclose + spanclose + spanoutfive + spaninrthreefive + titlespan + spanclose + sparkthree + spanclose + spanclose + spanoutsix + spaninrthreesix + titlespan + spanclose + smoverthreeinput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrthreeseven + titlespan + spanclose + slightrthreeinput + spanclose + spanclose + spanouteight + spaninrthreeeight + titlespana + spanclose + sboardrthreeanchor + sboardthree + anchorclose + spanclose + spanclose +  loclose  + mainclose +                maind + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrfourone + titlespana + spanclose + stimefour + spanclose + spanclose + spanouttwo + spaninrfourtwo + titlespan + spanclose + sroutefour + spanclose + spanclose + spanoutthree + spaninrfourthree + titlespan + spanclose + sbrandfour + spanclose + spanclose + spanoutfour + spaninrfourfour + titlespana + spanclose + snumberfour + spanclose + spanclose + spanoutfive + spaninrfourfive + titlespan + spanclose + sparkfour + spanclose + spanclose + spanoutsix + spaninrfoursix + titlespan + spanclose + smoverfourinput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrfourseven + titlespan + spanclose + slightrfourinput + spanclose + spanclose + spanouteight + spaninrfoureight + titlespana + spanclose + sboardrfouranchor + sboardfour + anchorclose + spanclose + spanclose +  loclose  + mainclose +                maine + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrfiveone + titlespana + spanclose + stimefive + spanclose + spanclose + spanouttwo + spaninrfivetwo + titlespan + spanclose + sroutefive + spanclose + spanclose + spanoutthree + spaninrfivethree + titlespan + spanclose + sbrandfive + spanclose + spanclose + spanoutfour + spaninrfivefour + titlespana + spanclose + snumberfive + spanclose + spanclose + spanoutfive + spaninrfivefive + titlespan + spanclose + sparkfive + spanclose + spanclose + spanoutsix + spaninrfivesix + titlespan + spanclose + smoverfiveinput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrfiveseven + titlespan + spanclose + slightrfiveinput + spanclose + spanclose + spanouteight + spaninrfiveeight + titlespana + spanclose + sboardrfiveanchor + sboardfive + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainf + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrsixone + titlespana + spanclose + stimesix + spanclose + spanclose + spanouttwo + spaninrsixtwo + titlespan + spanclose + sroutesix + spanclose + spanclose + spanoutthree + spaninrsixthree + titlespan + spanclose + sbrandsix + spanclose + spanclose + spanoutfour + spaninrsixfour + titlespana + spanclose + snumbersix + spanclose + spanclose + spanoutfive + spaninrsixfive + titlespan + spanclose + sparksix + spanclose + spanclose + spanoutsix + spaninrsixsix + titlespan + spanclose + smoversixinput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrsixseven + titlespan + spanclose + slightrsixinput + spanclose + spanclose + spanouteight + spaninrsixeight + titlespana + spanclose + sboardrsixanchor + sboardsix + anchorclose + spanclose + spanclose + loclose  + mainclose +                 maing + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +spanoutone + spaninrsevenone + titlespana + spanclose + stimeseven + spanclose + spanclose + spanouttwo + spaninrseventwo + titlespan + spanclose + srouteseven + spanclose + spanclose + spanoutthree + spaninrseventhree + titlespan + spanclose + sbrandseven + spanclose + spanclose + spanoutfour + spaninrsevenfour + titlespana + spanclose + snumberseven + spanclose + spanclose + spanoutfive + spaninrsevenfive + titlespan + spanclose + sparkseven + spanclose + spanclose + spanoutsix + spaninrsevensix + titlespan + spanclose + smoverseveninput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrsevenseven + titlespan + spanclose + slightrseveninput + spanclose + spanclose + spanouteight + spaninrseveneight + titlespana + spanclose + sboardrsevenanchor + sboardseven + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainh + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +spanoutone + spaninreightone + titlespana + spanclose + stimeeight + spanclose + spanclose + spanouttwo + spaninreighttwo + titlespan + spanclose + srouteeight + spanclose + spanclose + spanoutthree + spaninreightthree + titlespan + spanclose + sbrandeight + spanclose + spanclose + spanoutfour + spaninreightfour + titlespana + spanclose + snumbereight + spanclose + spanclose + spanoutfive + spaninreightfive + titlespan + spanclose + sparkeight + spanclose + spanclose + spanoutsix + spaninreightsix + titlespan + spanclose + smovereightinput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninreightseven + titlespan + spanclose + slightreightinput + spanclose + spanclose + spanouteight + spaninreighteight + titlespana + spanclose + sboardreightanchor + sboardeight + anchorclose + spanclose + spanclose + loclose  + mainclose +                 maini + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrnineone + titlespana + spanclose + stimenine + spanclose + spanclose + spanouttwo + spaninrninetwo + titlespan + spanclose + sroutenine + spanclose + spanclose + spanoutthree + spaninrninethree + titlespan + spanclose + sbrandnine + spanclose + spanclose + spanoutfour + spaninrninefour + titlespana + spanclose + snumbernine + spanclose + spanclose + spanoutfive + spaninrninefive + titlespan + spanclose + sparknine + spanclose + spanclose + spanoutsix + spaninrninesix + titlespan + spanclose + smovernineinput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrnineseven + titlespan + spanclose + slightrnineinput + spanclose + spanclose + spanouteight + spaninrnineeight + titlespana + spanclose + sboardrnineanchor + sboardnine + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainj + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtenone + titlespana + spanclose + stimeten + spanclose + spanclose + spanouttwo + spaninrtentwo + titlespan + spanclose + srouteten + spanclose + spanclose + spanoutthree + spaninrtenthree + titlespan + spanclose + sbrandten + spanclose + spanclose + spanoutfour + spaninrtenfour + titlespana + spanclose + snumberten + spanclose + spanclose + spanoutfive + spaninrthreefive + titlespan + spanclose + sparkten + spanclose + spanclose + spanoutsix + spaninrtensix + titlespan + spanclose + smoverteninput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrtenseven + titlespan + spanclose + slightrteninput + spanclose + spanclose + spanouteight + spaninrteneight + titlespana + spanclose + sboardrtenanchor + sboardten + anchorclose + spanclose + spanclose + loclose  + mainclose +                 maink + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrelevenone + titlespana + spanclose + stimeeleven + spanclose + spanclose + spanouttwo + spaninreleventwo + titlespan + spanclose + srouteeleven + spanclose + spanclose + spanoutthree + spaninreleventhree + titlespan + spanclose + sbrandeleven + spanclose + spanclose + spanoutfour + spaninrelevenfour + titlespana + spanclose + snumbereleven + spanclose + spanclose + spanoutfive + spaninrelevenfive + titlespan + spanclose + sparkeleven + spanclose + spanclose + spanoutsix + spaninrelevensix + titlespan + spanclose + smovereleveninput + spanclose + spanclose + loclose +       bottomsloa + spanoutseven + spaninrelevenseven + titlespan + spanclose + slightreleveninput + spanclose + spanclose + spanouteight + spaninreleveneight + titlespana + spanclose + sboardrelevenanchor + sboardeleven + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainl + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwelveone + titlespana + spanclose + stimetwelve + spanclose + spanclose + spanouttwo + spaninrtwelvetwo + titlespan + spanclose + sroutetwelve + spanclose + spanclose + spanoutthree + spaninrtwelvethree + titlespan + spanclose + sbrandtwelve + spanclose + spanclose + spanoutfour + spaninrtwelvefour + titlespana + spanclose + snumbertwelve + spanclose + spanclose + spanoutfive + spaninrtwelvefive + titlespan + spanclose + sparktwelve + spanclose + spanclose + spanoutsix + spaninrtwelvesix + titlespan + spanclose + smovertwelveinput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrtwelveseven + titlespan + spanclose + slightrtwelveinput + spanclose + spanclose + spanouteight + spaninrtwelveeight + titlespana + spanclose + sboardrtwelveanchor + sboardtwelve + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainm + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrthirteenone + titlespana + spanclose + stimethirteen + spanclose + spanclose + spanouttwo + spaninrthirteentwo + titlespan + spanclose + sroutethirteen + spanclose + spanclose + spanoutthree + spaninrthirteenthree + titlespan + spanclose + sbrandthirteen + spanclose + spanclose + spanoutfour + spaninrthirteenfour + titlespana + spanclose + snumberthirteen + spanclose + spanclose + spanoutfive + spaninrthirteenfive + titlespan + spanclose + sparkthirteen + spanclose + spanclose + spanoutsix + spaninrthirteensix + titlespan + spanclose + smoverthirteeninput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrthirteenseven + titlespan + spanclose + slightrthirteeninput + spanclose + spanclose + spanouteight + spaninrthirteeneight + titlespana + spanclose + sboardrthirteenanchor + sboardthirteen + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainn + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrfourteenone + titlespana + spanclose + stimefourteen + spanclose + spanclose + spanouttwo + spaninrfourteentwo + titlespan + spanclose + sroutefourteen + spanclose + spanclose + spanoutthree + spaninrfourteenthree + titlespan + spanclose + sbrandfourteen + spanclose + spanclose + spanoutfour + spaninrfourteenfour + titlespana + spanclose + snumberfourteen + spanclose + spanclose + spanoutfive + spaninrfourteenfive + titlespan + spanclose + sparkfourteen + spanclose + spanclose + spanoutsix + spaninrfourteensix + titlespan + spanclose + smoverfourteeninput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrfourteenseven + titlespan + spanclose + slightrfourteeninput + spanclose + spanclose + spanouteight + spaninrfourteeneight + titlespana + spanclose + sboardrfourteenanchor + sboardfourteen + anchorclose + spanclose + spanclose + loclose  + mainclose +                 maino + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrfifeteenone + titlespana + spanclose + stimefifeteen + spanclose + spanclose + spanouttwo + spaninrfifeteentwo + titlespan + spanclose + sroutefifeteen + spanclose + spanclose + spanoutthree + spaninrfifeteenthree + titlespan + spanclose + sbrandfifeteen + spanclose + spanclose + spanoutfour + spaninrfifeteenfour + titlespana + spanclose + snumberfifeteen + spanclose + spanclose + spanoutfive + spaninrfifeteenfive + titlespan + spanclose + sparkfifeteen + spanclose + spanclose + spanoutsix + spaninrfifeteensix + titlespan + spanclose + smoverfifeteeninput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrfifeteenseven + titlespan + spanclose + slightrfifeteeninput + spanclose + spanclose + spanouteight + spaninrfifeteeneight + titlespana + spanclose + sboardrfifeteenanchor + sboardfifeteen + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainp + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrsixteenone + titlespana + spanclose + stimesixteen + spanclose + spanclose + spanouttwo + spaninrsixteentwo + titlespan + spanclose + sroutesixteen + spanclose + spanclose + spanoutthree + spaninrsixteenthree + titlespan + spanclose + sbrandsixteen + spanclose + spanclose + spanoutfour + spaninrsixteenfour + titlespana + spanclose + snumbersixteen + spanclose + spanclose + spanoutfive + spaninrsixteenfive + titlespan + spanclose + sparksixteen + spanclose + spanclose + spanoutsix + spaninrsixteensix + titlespan + spanclose + smoversixteeninput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrsixteenseven + titlespan + spanclose + slightrsixteeninput + spanclose + spanclose + spanouteight + spaninrsixteeneight + titlespana + spanclose + sboardrsixteenanchor + sboardsixteen + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainq + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrseventeenone + titlespana + spanclose + stimeseventeen + spanclose + spanclose + spanouttwo + spaninrseventeentwo + titlespan + spanclose + srouteseventeen + spanclose + spanclose + spanoutthree + spaninrseventeenthree + titlespan + spanclose + sbrandseventeen + spanclose + spanclose + spanoutfour + spaninrseventeenfour + titlespana + spanclose + snumberseventeen + spanclose + spanclose + spanoutfive + spaninrseventeenfive + titlespan + spanclose + sparkseventeen + spanclose + spanclose + spanoutsix + spaninrseventeensix + titlespan + spanclose + smoverseventeeninput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninrseventeenseven + titlespan + spanclose + slightrseventeeninput + spanclose + spanclose + spanouteight + spaninrseventeeneight + titlespana + spanclose + sboardrseventeenanchor + sboardseventeen + anchorclose + spanclose + spanclose + loclose  + mainclose +                 mainr + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +   spanoutone + spaninreighteenone + titlespana + spanclose + stimeeighteen + spanclose + spanclose + spanouttwo + spaninreighteentwo + titlespan + spanclose + srouteeighteen + spanclose + spanclose + spanoutthree + spaninreighteenthree + titlespan + spanclose + sbrandeighteen + spanclose + spanclose + spanoutfour + spaninreighteenfour + titlespana + spanclose + snumbereighteen + spanclose + spanclose + spanoutfive + spaninreighteenfive + titlespan + spanclose + sparkeighteen + spanclose + spanclose + spanoutsix + spaninreighteensix + titlespan + spanclose + smovereighteeninput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninreighteenseven + titlespan + spanclose + slightreighteeninput + spanclose + spanclose + spanouteight + spaninreighteeneight + titlespana + spanclose + sboardreighteenanchor + sboardeighteen + anchorclose + spanclose + spanclose + loclose  + mainclose +             mains + leftloa +       spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +              spanoutone + spaninrnineteenone + titlespana + spanclose + stimenineteen + spanclose + spanclose + spanouttwo + spaninrnineteentwo + titlespan + spanclose + sroutenineteen + spanclose + spanclose + spanoutthree + spaninrnineteenthree + titlespan + spanclose + sbrandnineteen + spanclose + spanclose + spanoutfour + spaninrnineteenfour + titlespana + spanclose + snumbernineteen + spanclose + spanclose + spanoutfive + spaninrnineteenfive + titlespan + spanclose + sparknineteen + spanclose + spanclose + spanoutsix + spaninrnineteensix + titlespan + spanclose + smovernineteeninput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrnineteenseven + titlespan + spanclose + slightrnineteeninput + spanclose + spanclose + spanouteight + spaninrnineteeneight + titlespana + spanclose + sboardrnineteenanchor + sboardnineteen + anchorclose + spanclose + spanclose + loclose  + mainclose +             maint + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +        spanoutone + spaninrtwentyone + titlespana + spanclose + stimetwenty + spanclose + spanclose + spanouttwo + spaninrtwentytwo + titlespan + spanclose + sroutetwenty + spanclose + spanclose + spanoutthree + spaninrtwentythree + titlespan + spanclose + sbrandtwenty + spanclose + spanclose + spanoutfour + spaninrtwentyfour + titlespana + spanclose + snumbertwenty + spanclose + spanclose + spanoutfive + spaninrtwentyfive + titlespan + spanclose + sparktwenty + spanclose + spanclose + spanoutsix + spaninrtwentysix + titlespan + spanclose + smovertwentyinput + spanclose + spanclose + loclose +       bottomsloa +  spanoutseven + spaninrtwentyseven + titlespan + spanclose + slightrtwentyinput + spanclose + spanclose + spanouteight + spaninrtwentyeight + titlespana + spanclose + sboardrtwentyanchor + sboardtwenty + anchorclose + spanclose + spanclose + loclose  + mainclose +             mainu + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +      spanoutone + spaninrtwentyoneone + titlespana + spanclose + stimetwentyone + spanclose + spanclose + spanouttwo + spaninrtwentyonetwo + titlespan + spanclose + sroutetwentyone + spanclose + spanclose + spanoutthree + spaninrtwentyonethree + titlespan + spanclose + sbrandtwentyone + spanclose + spanclose + spanoutfour + spaninrtwentyonefour + titlespana + spanclose + snumbertwentyone + spanclose + spanclose + spanoutfive + spaninrtwentyonefive + titlespan + spanclose + sparktwentyone + spanclose + spanclose + spanoutsix + spaninrtwentyonesix + titlespan + spanclose + smovertwentyoneinput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrtwentyoneseven + titlespan + spanclose + slightrtwentyoneinput + spanclose + spanclose + spanouteight + spaninrtwentyoneeight + titlespana + spanclose + sboardrtwentyoneanchor + sboardtwentyone + anchorclose + spanclose + spanclose + loclose  + mainclose +             mainv + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentytwoone + titlespana + spanclose + stimetwentytwo + spanclose + spanclose + spanouttwo + spaninrtwentytwotwo + titlespan + spanclose + sroutetwentytwo + spanclose + spanclose + spanoutthree + spaninrtwentytwothree + titlespan + spanclose + sbrandtwentytwo + spanclose + spanclose + spanoutfour + spaninrtwentytwofour + titlespana + spanclose + snumbertwentytwo + spanclose + spanclose + spanoutfive + spaninrtwentytwofive + titlespan + spanclose + sparktwentytwo + spanclose + spanclose + spanoutsix + spaninrtwentytwosix + titlespan + spanclose + smovertwentytwoinput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrtwentytwoseven + titlespan + spanclose + slightrtwentytwoinput + spanclose + spanclose + spanouteight + spaninrtwentytwoeight + titlespana + spanclose + sboardrtwentytwoanchor + sboardtwentytwo + anchorclose + spanclose + spanclose + loclose  +  mainclose +             mainw + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa +  spanoutone + spaninrtwentythreeone + titlespana + spanclose + stimetwentythree + spanclose + spanclose + spanouttwo + spaninrtwentythreetwo + titlespan + spanclose + sroutetwentythree + spanclose + spanclose + spanoutthree + spaninrtwentythreethree + titlespan + spanclose + sbrandtwentythree + spanclose + spanclose + spanoutfour + spaninrtwentythreefour + titlespana + spanclose + snumbertwentythree + spanclose + spanclose + spanoutfive + spaninrtwentythreefive + titlespan + spanclose + sparktwentythree + spanclose + spanclose + spanoutsix + spaninrtwentythreesix + titlespan + spanclose + smovertwentythreeinput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninrtwentythreeseven + titlespan + spanclose + slightrtwentythreeinput + spanclose + spanclose + spanouteight + spaninrtwentythreeeight + titlespana + spanclose + sboardrtwentythreeanchor + sboardtwentythree + anchorclose + spanclose + spanclose + loclose  +  mainclose +             mainx + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentyfourone + titlespana + spanclose + stimetwentyfour + spanclose + spanclose + spanouttwo + spaninrtwentyfourtwo + titlespan + spanclose + sroutetwentyfour + spanclose + spanclose + spanoutthree + spaninrtwentyfourthree + titlespan + spanclose + sbrandtwentyfour + spanclose + spanclose + spanoutfour + spaninrtwentyfourfour + titlespana + spanclose + snumbertwentyfour + spanclose + spanclose + spanoutfive + spaninrtwentyfourfive + titlespan + spanclose + sparktwentyfour + spanclose + spanclose + spanoutsix + spaninrtwentyfoursix + titlespan + spanclose + smovertwentyfourinput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrtwentyfourseven + titlespan + spanclose + slightrtwentyfourinput + spanclose + spanclose + spanouteight + spaninrtwentyfoureight + titlespana + spanclose + sboardrtwentyfouranchor + sboardtwentyfour + anchorclose + spanclose + spanclose + loclose  +  mainclose +             mainy + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentyfiveone + titlespana + spanclose + stimetwentyfive + spanclose + spanclose + spanouttwo + spaninrtwentyfivetwo + titlespan + spanclose + sroutetwentyfive + spanclose + spanclose + spanoutthree + spaninrtwentyfivethree + titlespan + spanclose + sbrandtwentyfive + spanclose + spanclose + spanoutfour + spaninrtwentyfivefour + titlespana + spanclose + snumbertwentyfive + spanclose + spanclose + spanoutfive + spaninrtwentyfivefive + titlespan + spanclose + sparktwentyfive + spanclose + spanclose + spanoutsix + spaninrtwentyfivesix + titlespan + spanclose + smovertwentyfiveinput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrtwentyfiveseven + titlespan + spanclose + slightrtwentyfiveinput + spanclose + spanclose + spanouteight + spaninrtwentyfiveeight + titlespana + spanclose + sboardrtwentyfiveanchor + sboardtwentyfive + anchorclose + spanclose + spanclose + loclose  +  mainclose +             mainz + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentysixone + titlespana + spanclose + stimetwentysix + spanclose + spanclose + spanouttwo + spaninrtwentysixtwo + titlespan + spanclose + sroutetwentysix + spanclose + spanclose + spanoutthree + spaninrtwentysixthree + titlespan + spanclose + sbrandtwentysix + spanclose + spanclose + spanoutfour + spaninrtwentysixfour + titlespana + spanclose + snumbertwentysix + spanclose + spanclose + spanoutfive + spaninrtwentysixfive + titlespan + spanclose + sparktwentysix + spanclose + spanclose + spanoutsix + spaninrtwentysixsix + titlespan + spanclose + smovertwentysixinput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninrtwentysixseven + titlespan + spanclose + slightrtwentysixinput + spanclose + spanclose + spanouteight + spaninrtwentysixeight + titlespana + spanclose + sboardrtwentysixanchor + sboardtwentysix + anchorclose + spanclose + spanclose + loclose  +  mainclose +           mainaa + leftloa +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentysevenone + titlespana + spanclose + stimetwentyseven + spanclose + spanclose + spanouttwo + spaninrtwentyseventwo + titlespan + spanclose + sroutetwentyseven + spanclose + spanclose + spanoutthree + spaninrtwentyseventhree + titlespan + spanclose + sbrandtwentyseven + spanclose + spanclose + spanoutfour + spaninrtwentysevenfour + titlespana + spanclose + snumbertwentyseven + spanclose + spanclose + spanoutfive + spaninrtwentysevenfive + titlespan + spanclose + sparktwentyseven + spanclose + spanclose + spanoutsix + spaninrtwentysevensix + titlespan + spanclose + smovertwentyseveninput + spanclose + spanclose + loclose +       bottomsloa +   spanoutseven + spaninrtwentysevenseven + titlespan + spanclose + slightrtwentyseveninput + spanclose + spanclose + spanouteight + spaninrtwentyseveneight + titlespana + spanclose + sboardrtwentysevenanchor + sboardtwentyseven + anchorclose + spanclose + spanclose + loclose  +  mainclose +           mainbb + leftloa +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentyeightone + titlespana + spanclose + stimetwentyeight + spanclose + spanclose + spanouttwo + spaninrtwentyeighttwo + titlespan + spanclose + sroutetwentyeight + spanclose + spanclose + spanoutthree + spaninrtwentyeightthree + titlespan + spanclose + sbrandtwentyeight + spanclose + spanclose + spanoutfour + spaninrtwentyeightfour + titlespana + spanclose + snumbertwentyeight + spanclose + spanclose + spanoutfive + spaninrtwentyeightfive + titlespan + spanclose + sparktwentyeight + spanclose + spanclose + spanoutsix + spaninrtwentyeightsix + titlespan + spanclose + smovertwentyeightinput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninrtwentyeightseven + titlespan + spanclose + slightrtwentyeightinput + spanclose + spanclose + spanouteight + spaninrtwentyeighteight + titlespana + spanclose + sboardrtwentyeightanchor + sboardtwentyeight + anchorclose + spanclose + spanclose + loclose  +   mainclose +           maincc + leftloa +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +            rightsloa + spanoutone + spaninrtwentynineone + titlespana + spanclose + stimetwentynine + spanclose + spanclose + spanouttwo + spaninrtwentyninetwo + titlespan + spanclose + sroutetwentynine + spanclose + spanclose + spanoutthree + spaninrtwentyninethree + titlespan + spanclose + sbrandtwentynine + spanclose + spanclose + spanoutfour + spaninrtwentyninefour + titlespana + spanclose + snumbertwentynine + spanclose + spanclose + spanoutfive + spaninrtwentyninefive + titlespan + spanclose + sparktwentynine + spanclose + spanclose + spanoutsix + spaninrtwentyninesix + titlespan + spanclose + smovertwentynineinput + spanclose + spanclose + loclose +       bottomsloa +    spanoutseven + spaninrtwentynineseven + titlespan + spanclose + slightrtwentynineinput + spanclose + spanclose + spanouteight + spaninrtwentynineeight + titlespana + spanclose + sboardrtwentynineanchor + sboardtwentynine + anchorclose + spanclose + spanclose + loclose  +   mainclose +           maindd + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +     spanoutone + spaninrthirtyone + titlespana + spanclose + stimethirty + spanclose + spanclose + spanouttwo + spaninrthirtytwo + titlespan + spanclose + sroutethirty + spanclose + spanclose + spanoutthree + spaninrthirtythree + titlespan + spanclose + sbrandthirty + spanclose + spanclose + spanoutfour + spaninrthirtyfour + titlespana + spanclose + snumberthirty + spanclose + spanclose + spanoutfive + spaninrthirtyfive + titlespan + spanclose + sparkthirty + spanclose + spanclose + spanoutsix + spaninrthirtysix + titlespan + spanclose + smoverthirtyinput + spanclose + spanclose + loclose +            bottomsloa +    spanoutseven + spaninrthirtyseven + titlespan + spanclose + slightrthirtyinput + spanclose + spanclose + spanouteight + spaninrthirtyeight + titlespana + spanclose + sboardrthirtyanchor + sboardthirty + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainee + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +     spanoutone + spaninrthirtyoneone + titlespana + spanclose + stimethirtyone + spanclose + spanclose + spanouttwo + spaninrthirtyonetwo + titlespan + spanclose + sroutethirtyone + spanclose + spanclose + spanoutthree + spaninrthirtyonethree + titlespan + spanclose + sbrandthirtyone + spanclose + spanclose + spanoutfour + spaninrthirtyonefour + titlespana + spanclose + snumberthirtyone + spanclose + spanclose + spanoutfive + spaninrthirtyonefive + titlespan + spanclose + sparkthirtyone + spanclose + spanclose + spanoutsix + spaninrthirtyonesix + titlespan + spanclose + smoverthirtyoneinput + spanclose + spanclose + loclose +            bottomsloa +     spanoutseven + spaninrthirtyoneseven + titlespan + spanclose + slightrthirtyoneinput + spanclose + spanclose + spanouteight + spaninrthirtyoneeight + titlespana + spanclose + sboardrthirtyoneanchor + sboardthirtyone + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainff + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +    spanoutone + spaninrthirtytwoone + titlespana + spanclose + stimethirtytwo + spanclose + spanclose + spanouttwo + spaninrthirtytwotwo + titlespan + spanclose + sroutethirtytwo + spanclose + spanclose + spanoutthree + spaninrthirtytwothree + titlespan + spanclose + sbrandthirtytwo + spanclose + spanclose + spanoutfour + spaninrthirtytwofour + titlespana + spanclose + snumberthirtytwo + spanclose + spanclose + spanoutfive + spaninrthirtytwofive + titlespan + spanclose + sparkthirtytwo + spanclose + spanclose + spanoutsix + spaninrthirtytwosix + titlespan + spanclose + smoverthirtytwoinput + spanclose + spanclose + loclose +            bottomsloa +      spanoutseven + spaninrthirtytwoseven + titlespan + spanclose + slightrthirtytwoinput + spanclose + spanclose + spanouteight + spaninrthirtytwoeight + titlespana + spanclose + sboardrthirtytwoanchor + sboardthirtytwo + anchorclose + spanclose + spanclose + loclose  +   mainclose +           maingg + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +    spanoutone + spaninrthirtythreeone + titlespana + spanclose + stimethirtythree + spanclose + spanclose + spanouttwo + spaninrthirtythreetwo + titlespan + spanclose + sroutethirtythree + spanclose + spanclose + spanoutthree + spaninrthirtythreethree + titlespan + spanclose + sbrandthirtythree + spanclose + spanclose + spanoutfour + spaninrthirtythreefour + titlespana + spanclose + snumberthirtythree + spanclose + spanclose + spanoutfive + spaninrthirtythreefive + titlespan + spanclose + sparkthirtythree + spanclose + spanclose + spanoutsix + spaninrthirtythreesix + titlespan + spanclose + smoverthirtythreeinput + spanclose + spanclose + loclose +            bottomsloa +       spanoutseven + spaninrthirtythreeseven + titlespan + spanclose + slightrthirtythreeinput + spanclose + spanclose + spanouteight + spaninrthirtythreeeight + titlespana + spanclose + sboardrthirtythreeanchor + sboardthirtythree + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainhh + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +   spanoutone + spaninrthirtyfourone + titlespana + spanclose + stimethirtyfour + spanclose + spanclose + spanouttwo + spaninrthirtyfourtwo + titlespan + spanclose + sroutethirtyfour + spanclose + spanclose + spanoutthree + spaninrthirtyfourthree + titlespan + spanclose + sbrandthirtyfour + spanclose + spanclose + spanoutfour + spaninrthirtyfourfour + titlespana + spanclose + snumberthirtyfour + spanclose + spanclose + spanoutfive + spaninrthirtyfourfive + titlespan + spanclose + sparkthirtyfour + spanclose + spanclose + spanoutsix + spaninrthirtyfoursix + titlespan + spanclose + smoverthirtyfourinput + spanclose + spanclose +  loclose +            bottomsloa +   spanoutseven + spaninrthirtyfourseven + titlespan + spanclose + slightrthirtyfourinput + spanclose + spanclose + spanouteight + spaninrthirtyfoureight + titlespana + spanclose + sboardrthirtyfouranchor + sboardthirtyfour + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainii + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +  spanoutone + spaninrthirtyfiveone + titlespana + spanclose + stimethirtyfive + spanclose + spanclose + spanouttwo + spaninrthirtyfivetwo + titlespan + spanclose + sroutethirtyfive + spanclose + spanclose + spanoutthree + spaninrthirtyfivethree + titlespan + spanclose + sbrandthirtyfive + spanclose + spanclose + spanoutfour + spaninrthirtyfivefour + titlespana + spanclose + snumberthirtyfive + spanclose + spanclose + spanoutfive + spaninrthirtyfivefive + titlespan + spanclose + sparkthirtyfive + spanclose + spanclose + spanoutsix + spaninrthirtyfivesix + titlespan + spanclose + smoverthirtyfiveinput + spanclose + spanclose + loclose +            bottomsloa +   spanoutseven + spaninrthirtyfiveseven + titlespan + spanclose + slightrthirtyfiveinput + spanclose + spanclose + spanouteight + spaninrthirtyfiveeight + titlespana + spanclose + sboardrthirtyfiveanchor + sboardthirtyfive + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainjj + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa + spanoutone + spaninrthirtysixone + titlespana + spanclose + stimethirtysix + spanclose + spanclose + spanouttwo + spaninrthirtysixtwo + titlespan + spanclose + sroutethirtysix + spanclose + spanclose + spanoutthree + spaninrthirtysixthree + titlespan + spanclose + sbrandthirtysix + spanclose + spanclose + spanoutfour + spaninrthirtysixfour + titlespana + spanclose + snumberthirtysix + spanclose + spanclose + spanoutfive + spaninrthirtysixfive + titlespan + spanclose + sparkthirtysix + spanclose + spanclose + spanoutsix + spaninrthirtysixsix + titlespan + spanclose + smoverthirtysixinput + spanclose + spanclose + loclose +            bottomsloa +    spanoutseven + spaninrthirtysixseven + titlespan + spanclose + slightrthirtysixinput + spanclose + spanclose + spanouteight + spaninrthirtysixeight + titlespana + spanclose + sboardrthirtysixanchor + sboardthirtysix + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainkk + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +   spanoutone + spaninrthirtysevenone + titlespana + spanclose + stimethirtyseven + spanclose + spanclose + spanouttwo + spaninrthirtyseventwo + titlespan + spanclose + sroutethirtyseven + spanclose + spanclose + spanoutthree + spaninrthirtyseventhree + titlespan + spanclose + sbrandthirtyseven + spanclose + spanclose + spanoutfour + spaninrthirtysevenfour + titlespana + spanclose + snumberthirtyseven + spanclose + spanclose + spanoutfive + spaninrthirtysevenfive + titlespan + spanclose + sparkthirtyseven + spanclose + spanclose + spanoutsix + spaninrthirtysevensix + titlespan + spanclose + smoverthirtyseveninput + spanclose + spanclose + loclose +            bottomsloa +    spanoutseven + spaninrthirtysevenseven + titlespan + spanclose + slightrthirtyseveninput + spanclose + spanclose + spanouteight + spaninrthirtyseveneight + titlespana + spanclose + sboardrthirtysevenanchor + sboardthirtyseven + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainll + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +   spanoutone + spaninrthirtyeightone + titlespana + spanclose + stimethirtyeight + spanclose + spanclose + spanouttwo + spaninrthirtyeighttwo + titlespan + spanclose + sroutethirtyeight + spanclose + spanclose + spanoutthree + spaninrthirtyeightthree + titlespan + spanclose + sbrandthirtyeight + spanclose + spanclose + spanoutfour + spaninrthirtyeightfour + titlespana + spanclose + snumberthirtyeight + spanclose + spanclose + spanoutfive + spaninrthirtyeightfive + titlespan + spanclose + sparkthirtyeight + spanclose + spanclose + spanoutsix + spaninrthirtyeightsix + titlespan + spanclose + smoverthirtyeightinput + spanclose + spanclose + loclose +            bottomsloa +     spanoutseven + spaninrthirtyeightseven + titlespan + spanclose + slightrthirtyeightinput + spanclose + spanclose + spanouteight + spaninrthirtyeighteight + titlespana + spanclose + sboardrthirtyeightanchor + sboardthirtyeight + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainmm + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa +  spanoutone + spaninrthirtynineone + titlespana + spanclose + stimethirtynine + spanclose + spanclose + spanouttwo + spaninrthirtyninetwo + titlespan + spanclose + sroutethirtynine + spanclose + spanclose + spanoutthree + spaninrthirtyninethree + titlespan + spanclose + sbrandthirtynine + spanclose + spanclose + spanoutfour + spaninrthirtyninefour + titlespana + spanclose + snumberthirtynine + spanclose + spanclose + spanoutfive + spaninrthirtyninefive + titlespan + spanclose + sparkthirtynine + spanclose + spanclose + spanoutsix + spaninrthirtyninesix + titlespan + spanclose + smoverthirtynineinput + spanclose + spanclose + loclose +            bottomsloa +      spanoutseven + spaninrthirtynineseven + titlespan + spanclose + slightrthirtynineinput + spanclose + spanclose + spanouteight + spaninrthirtynineeight + titlespana + spanclose + sboardrthirtynineanchor + sboardthirtynine + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainnn + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa + spanoutone + spaninrfourtyone + titlespana + spanclose + stimefourty + spanclose + spanclose + spanouttwo + spaninrfourtytwo + titlespan + spanclose + sroutefourty + spanclose + spanclose + spanoutthree + spaninrfourtythree + titlespan + spanclose + sbrandfourty + spanclose + spanclose + spanoutfour + spaninrfourtyfour + titlespana + spanclose + snumberfourty + spanclose + spanclose + spanoutfive + spaninrfourtyfive + titlespan + spanclose + sparkfourty + spanclose + spanclose + spanoutsix + spaninrfourtysix + titlespan + spanclose + smoverfourtyinput + spanclose + spanclose + loclose +            bottomsloa +       spanoutseven + spaninrfourtyseven + titlespan + spanclose + slightrfourtyinput + spanclose + spanclose + spanouteight + spaninrfourtyeight + titlespana + spanclose + sboardrfourtyanchor + sboardfourty + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainoo + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  + loclose +                rightsloa + spanoutone + spaninrfourtyoneone + titlespana + spanclose + stimefourtyone + spanclose + spanclose + spanouttwo + spaninrfourtyonetwo + titlespan + spanclose + sroutefourtyone + spanclose + spanclose + spanoutthree + spaninrfourtyonethree + titlespan + spanclose + sbrandfourtyone + spanclose + spanclose + spanoutfour + spaninrfourtyonefour + titlespana + spanclose + snumberfourtyone + spanclose + spanclose + spanoutfive + spaninrfourtyonefive + titlespan + spanclose + sparkfourtyone + spanclose + spanclose + spanoutsix + spaninrfourtyonesix + titlespan + spanclose + smoverfourtyoneinput + spanclose + spanclose + loclose +            bottomsloa +       spanoutseven + spaninrfourtyoneseven + titlespan + spanclose + slightrfourtyoneinput + spanclose + spanclose + spanouteight + spaninrfourtyoneeight + titlespana + spanclose + sboardrfourtyoneanchor + sboardfourtyone + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainpp + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +     loclose +                rightsloa +  spanoutone + spaninrfourtytwoone + titlespana + spanclose + stimefourtytwo + spanclose + spanclose + spanouttwo + spaninrfourtytwotwo + titlespan + spanclose + sroutefourtytwo + spanclose + spanclose + spanoutthree + spaninrfourtytwothree + titlespan + spanclose + sbrandfourtytwo + spanclose + spanclose + spanoutfour + spaninrfourtytwofour + titlespana + spanclose + snumberfourtytwo + spanclose + spanclose + spanoutfive + spaninrfourtytwofive + titlespan + spanclose + sparkfourtytwo + spanclose + spanclose + spanoutsix + spaninrfourtytwosix + titlespan + spanclose + smoverfourtytwoinput + spanclose + spanclose +  loclose +            bottomsloa +      spanoutseven + spaninrfourtytwoseven + titlespan + spanclose + slightrfourtytwoinput + spanclose + spanclose + spanouteight + spaninrfourtytwoeight + titlespana + spanclose + sboardrfourtytwoanchor + sboardfourtytwo + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainqq + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +    loclose +                rightsloa + spanoutone + spaninrfourtythreeone + titlespana + spanclose + stimefourtythree + spanclose + spanclose + spanouttwo + spaninrfourtythreetwo + titlespan + spanclose + sroutefourtythree + spanclose + spanclose + spanoutthree + spaninrfourtythreethree + titlespan + spanclose + sbrandfourtythree + spanclose + spanclose + spanoutfour + spaninrfourtythreefour + titlespana + spanclose + snumberfourtythree + spanclose + spanclose + spanoutfive + spaninrfourtythreefive + titlespan + spanclose + sparkfourtythree + spanclose + spanclose + spanoutsix + spaninrfourtythreesix + titlespan + spanclose + smoverfourtythreeinput + spanclose + spanclose +  loclose +            bottomsloa +    spanoutseven + spaninrfourtythreeseven + titlespan + spanclose + slightrfourtythreeinput + spanclose + spanclose + spanouteight + spaninrfourtythreeeight + titlespana + spanclose + sboardrfourtythreeanchor + sboardfourtythree + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainrr + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +    loclose +                rightsloa + spanoutone + spaninrfourtyfourone + titlespana + spanclose + stimefourtyfour + spanclose + spanclose + spanouttwo + spaninrfourtyfourtwo + titlespan + spanclose + sroutefourtyfour + spanclose + spanclose + spanoutthree + spaninrfourtyfourthree + titlespan + spanclose + sbrandfourtyfour + spanclose + spanclose + spanoutfour + spaninrfourtyfourfour + titlespana + spanclose + snumberfourtyfour + spanclose + spanclose + spanoutfive + spaninrfourtyfourfive + titlespan + spanclose + sparkfourtyfour + spanclose + spanclose + spanoutsix + spaninrfourtyfoursix + titlespan + spanclose + smoverfourtyfourinput + spanclose + spanclose +  loclose +            bottomsloa +     spanoutseven + spaninrfourtyfourseven + titlespan + spanclose + slightrfourtyfourinput + spanclose + spanclose + spanouteight + spaninrfourtyfoureight + titlespana + spanclose + sboardrfourtyfouranchor + sboardfourtyfour + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainss+ leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +    loclose +                rightsloa + spanoutone + spaninrfourtyfiveone + titlespana + spanclose + stimefourtyfive + spanclose + spanclose + spanouttwo + spaninrfourtyfivetwo + titlespan + spanclose + sroutefourtyfive + spanclose + spanclose + spanoutthree + spaninrfourtyfivethree + titlespan + spanclose + sbrandfourtyfive + spanclose + spanclose + spanoutfour + spaninrfourtyfivefour + titlespana + spanclose + snumberfourtyfive + spanclose + spanclose + spanoutfive + spaninrfourtyfivefive + titlespan + spanclose + sparkfourtyfive + spanclose + spanclose + spanoutsix + spaninrfourtyfivesix + titlespan + spanclose + smoverfourtyfiveinput + spanclose + spanclose +  loclose +            bottomsloa +     spanoutseven + spaninrfourtyfiveseven + titlespan + spanclose + slightrfourtyfiveinput + spanclose + spanclose + spanouteight + spaninrfourtyfiveeight + titlespana + spanclose + sboardrfourtyfiveanchor + sboardfourtyfive + anchorclose + spanclose + spanclose + loclose  +   mainclose +           maintt  + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +   loclose +                rightsloa + spanoutone + spaninrfourtysixone + titlespana + spanclose + stimefourtysix + spanclose + spanclose + spanouttwo + spaninrfourtysixtwo + titlespan + spanclose + sroutefourtysix + spanclose + spanclose + spanoutthree + spaninrfourtysixthree + titlespan + spanclose + sbrandfourtysix + spanclose + spanclose + spanoutfour + spaninrfourtysixfour + titlespana + spanclose + snumberfourtysix + spanclose + spanclose + spanoutfive + spaninrfourtysixfive + titlespan + spanclose + sparkfourtysix + spanclose + spanclose + spanoutsix + spaninrfourtysixsix + titlespan + spanclose + smoverfourtysixinput + spanclose + spanclose +  loclose +            bottomsloa +     spanoutseven + spaninrfourtysixseven + titlespan + spanclose + slightrfourtysixinput + spanclose + spanclose + spanouteight + spaninrfourtysixeight + titlespana + spanclose + sboardrfourtysixanchor + sboardfourtysix + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainuu  + leftloa +   spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +   loclose +                rightsloa +  spanoutone + spaninrfourtysevenone + titlespana + spanclose + stimefourtyseven + spanclose + spanclose + spanouttwo + spaninrfourtyseventwo + titlespan + spanclose + sroutefourtyseven + spanclose + spanclose + spanoutthree + spaninrfourtyseventhree + titlespan + spanclose + sbrandfourtyseven + spanclose + spanclose + spanoutfour + spaninrfourtysevenfour + titlespana + spanclose + snumberfourtyseven + spanclose + spanclose + spanoutfive + spaninrfourtysevenfive + titlespan + spanclose + sparkfourtyseven + spanclose + spanclose + spanoutsix + spaninrfourtysevensix + titlespan + spanclose + smoverfourtyseveninput + spanclose + spanclose +  loclose +            bottomsloa +      spanoutseven + spaninrfourtysevenseven + titlespan + spanclose + slightrfourtyseveninput + spanclose + spanclose + spanouteight + spaninrfourtyseveneight + titlespana + spanclose + sboardrfourtysevenanchor + sboardfourtyseven + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainvv  + leftloa +  spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +   loclose +                rightsloa +  spanoutone + spaninrfourtyeightone + titlespana + spanclose + stimefourtyeight + spanclose + spanclose + spanouttwo + spaninrfourtyeighttwo + titlespan + spanclose + sroutefourtyeight + spanclose + spanclose + spanoutthree + spaninrfourtyeightthree + titlespan + spanclose + sbrandfourtyeight + spanclose + spanclose + spanoutfour + spaninrfourtyeightfour + titlespana + spanclose + snumberfourtyeight + spanclose + spanclose + spanoutfive + spaninrfourtyeightfive + titlespan + spanclose + sparkfourtyeight + spanclose + spanclose + spanoutsix + spaninrfourtyeightsix + titlespan + spanclose + smoverfourtyeightinput + spanclose + spanclose +  loclose +            bottomsloa +   spanoutseven + spaninrfourtyeightseven + titlespan + spanclose + slightrfourtyeightinput + spanclose + spanclose + spanouteight + spaninrfourtyeighteight + titlespana + spanclose + sboardrfourtyeightanchor + sboardfourtyeight + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainww  + leftloa + spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +  loclose +                rightsloa +  spanoutone + spaninrfourtynineone + titlespana + spanclose + stimefourtynine + spanclose + spanclose + spanouttwo + spaninrfourtyninetwo + titlespan + spanclose + sroutefourtynine + spanclose + spanclose + spanoutthree + spaninrfourtyninethree + titlespan + spanclose + sbrandfourtynine + spanclose + spanclose + spanoutfour + spaninrfourtyninefour + titlespana + spanclose + snumberfourtynine + spanclose + spanclose + spanoutfive + spaninrfourtyninefive + titlespan + spanclose + sparkfourtynine + spanclose + spanclose + spanoutsix + spaninrfourtyninesix + titlespan + spanclose + smoverfourtynineinput + spanclose + spanclose +  loclose +            bottomsloa +    spanoutseven + spaninrfourtynineseven + titlespan + spanclose + slightrfourtynineinput + spanclose + spanclose + spanouteight + spaninrfourtynineeight + titlespana + spanclose + sboardrfourtynineanchor + sboardfourtynine + anchorclose + spanclose + spanclose + loclose  +   mainclose +           mainxx  + leftloa +spanoutone + spanina + titlespana + "Time:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Route:" + spanclose + spanclose + spanclose + spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Park Name:" + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + "Move:" + spanclose + spanclose + spanclose + spanoutseven + spanina + titlespan + "Indicator:" + spanclose + spanclose + spanclose + spanouteight + spanina + titlespana + "Opinion:" + spanclose + spanclose + spanclose  +  loclose +                rightsloa + spanoutone + spaninrfifetyone + titlespana + spanclose + stimefifety + spanclose + spanclose + spanouttwo + spaninrfifetytwo + titlespan + spanclose + sroutefifety + spanclose + spanclose + spanoutthree + spaninrfifetythree + titlespan + spanclose + sbrandfifety + spanclose + spanclose + spanoutfour + spaninrfifetyfour + titlespana + spanclose + snumberfifety + spanclose + spanclose + spanoutfive + spaninrfifetyfive + titlespan + spanclose + sparkfifety + spanclose + spanclose + spanoutsix + spaninrfifetysix + titlespan + spanclose + smoverfifetyinput + spanclose + spanclose + loclose +            bottomsloa +   spanoutseven + spaninrfifetyseven + titlespan + spanclose + slightrfifetyinput + spanclose + spanclose + spanouteight + spaninrfifetyeight + titlespana + spanclose + sboardrfifetyanchor + sboardfifety + anchorclose + spanclose + spanclose + loclose  +   mainclose +          "<br/>" + "<br/>" + mainyy  +  keydivsa + "KEY" + divclose + keydivs + keylightone + labelonespan + "Parked Bus" + spanclose + divclose + keydivs + keylighttwo + labelonespan + "Aready Moving  Bus" + spanclose + divclose + keydivs + keylightthree + labelonespan + "Already Reached to Destiny Bus" + spanclose + divclose + keydivsb + "NB: Board only Buses with "+ keylightone + " and " + keylighttwo + "<br/>" + "The " + keylightthree + " buses have already reached to thier destiny and not available for boarding" + divclose +  mainclose +      formclose + "</body>" + "</html>";

let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "componessts.html";
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
	console.log("Error");
	res.send("<div style='text-align: center; color:green;'>Schedule Status Updated Successfully!<br/><a href='http://localhost:3000/users/dashboards/componedb' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div> ");
};

});

module.exports = router
