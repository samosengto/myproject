
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
router.get("/dashboards/componedb", (req, res) => {

	res.render("users/dashboards/componedb");

});

router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var bee = "jon";
var few = "sam";
/*Company One*/
/*//Destiny buses Memory //*/
var dbcompname = req.body.dbcompname;
  
var firstroute = req.body.arouteada;
var secondroute = req.body.arouteede;
var thirdroute = req.body.arouteidi;
var fourthroute = req.body.arouteodo;
var fifethroute = req.body.arouteudu;

var stitlea = req.body.stitlea;
var stitleb = req.body.stitleb;
var stitlec = req.body.stitlec;
var stitled = req.body.stitled;
var stitlee = req.body.stitlee;

var headingonea = req.body.busbrand;
var headingtwoa = req.body.numberplate;
var headingthreea = req.body.conductorname;
var headingfoura = req.body.phonenumber;
var headingfivea = req.body.parkname;
var headingsixa = req.body.dtime;
var headingsevena = req.body.opinion;

var headingoneb = req.body.busbranda;
var headingtwob = req.body.numberplatea;
var headingthreeb = req.body.conductornamea;
var headingfourb = req.body.phonenumbera;
var headingfiveb = req.body.parknamea;
var headingsixb = req.body.dtimea;
var headingsevenb = req.body.opiniona;

var headingonec = req.body.busbrandb;
var headingtwoc = req.body.numberplateb;
var headingthreec = req.body.conductornameb;
var headingfourc = req.body.phonenumberb;
var headingfivec = req.body.parknameb;
var headingsixc = req.body.dtimeb;
var headingsevenc = req.body.opinionb;

var headingoned = req.body.busbrandc;
var headingtwod = req.body.numberplatec;
var headingthreed = req.body.conductornamec;
var headingfourd = req.body.phonenumberc;
var headingfived = req.body.parknamec;
var headingsixd = req.body.dtimec;
var headingsevend = req.body.opinionc;

var headingonee = req.body.busbrandd;
var headingtwoe = req.body.numberplated;
var headingthreee = req.body.conductornamed;
var headingfoure = req.body.phonenumberd;
var headingfivee = req.body.parknamed;
var headingsixe = req.body.dtimed;
var headingsevene = req.body.opiniond;


var stimeone = req.body.stimeoneada;
var srouteone = req.body.srouteoneada;
var psrouteone = "tel:" + " " + req.body.srouteoneada;
var sbrandone = req.body.sbrandoneadada;
var snumberone = req.body.snumberoneada;
var slocationone = req.body.slocationoneada;
var sparkone = req.body.sparkoneada;
var smoveone = req.body.smoveoneada;
var cntdbaaa = req.body.cntdbaaada;
var sboardone = req.body.sboardoneada;

var stimetwo = req.body.stimetwobdb;
var sroutetwo = req.body.sroutetwobdb;
var psroutetwo = "tel:" + " " + req.body.sroutetwobdb;
var sbrandtwo = req.body.sbrandtwobdb;
var snumbertwo = req.body.snumbertwobdb;
var slocationtwo = req.body.slocationtwobdb;
var sparktwo = req.body.sparktwobdb;
var spnotwo = req.body.spnotwobdb;
var smovetwo = req.body.smovetwobdb;
var cntdbaab = req.body.cntdbaabdb;
var sboardtwo = req.body.sboardtwobdb;

var stimethree = req.body.stimethreeadc;
var sroutethree = req.body.sroutethreeadc;
var psroutethree = "tel:" + " " + req.body.sroutethreeadc;
var sbrandthree = req.body.sbrandthreeadc;
var snumberthree = req.body.snumberthreeadc;
var slocationthree = req.body.slocationthreeadc;
var sparkthree = req.body.sparkthreeadc;
var spnothree = req.body.spnothreeadc;
var smovethree = req.body.smovethreeadc;
var cntdbaa = req.body.cntdbaadc;
var sboardthree = req.body.sboardthreeadc;

var stimethreeb = req.body.stimethreebdd;
var sroutethreeb = req.body.sroutethreebdd;
var psroutethreeb = "tel:" + " " + req.body.sroutethreebdd;
var sbrandthreeb = req.body.sbrandthreebdd;
var snumberthreeb = req.body.snumberthreebdd;
var slocationthreeb = req.body.slocationthreebdd;
var sparkthreeb = req.body.sparkthreebdd;
var spnothreeb = req.body.spnothreebdd;
var smovethreeb = req.body.smovethreebdd;
var cntdbab = req.body.cntdbabdd;
var sboardthreeb = req.body.sboardthreebdd;

var stimethreec = req.body.stimethreecde;
var sroutethreec = req.body.sroutethreecde;
var psroutethreec = "tel:" + " " + req.body.sroutethreecde;
var sbrandthreec = req.body.sbrandthreecde;
var snumberthreec = req.body.snumberthreecde;
var slocationthreec = req.body.slocationthreecde;
var sparkthreec = req.body.sparkthreecde;
var spnothreec = req.body.spnothreecde;
var smovethreec = req.body.smovethreecde;
var cntdbac = req.body.cntdbacde;
var sboardthreec = req.body.sboardthreecde;

var stimethreed = req.body.stimethreeddf;
var sroutethreed = req.body.sroutethreeddf;
var psroutethreed = "tel:" + " " + req.body.sroutethreeddf;
var sbrandthreed = req.body.sbrandthreeddf;
var snumberthreed = req.body.snumberthreeddf;
var slocationthreed = req.body.slocationthreeddf;
var sparkthreed = req.body.sparkthreeddf;
var spnothreed = req.body.spnothreeddf;
var smovethreed = req.body.smovethreeddf;
var cntdbad = req.body.cntdbaddf;
var sboardthreed = req.body.sboardthreeddf;

var stimethreee = req.body.stimethreeedg;
var sroutethreee = req.body.sroutethreeedg;
var psroutethreee = "tel:" + " " + req.body.sroutethreeedg;
var sbrandthreee = req.body.sbrandthreeedg;
var snumberthreee = req.body.snumberthreeedg;
var slocationthreee = req.body.slocationthreeedg;
var sparkthreee = req.body.sparkthreeedg;
var spnothreee = req.body.spnothreeedg;
var smovethreee = req.body.smovethreeedg;
var cntdbae = req.body.cntdbaedg;
var sboardthreee = req.body.sboardthreeedg;

var stimethreef = req.body.stimethreefdh;
var sroutethreef = req.body.sroutethreefdh;
var psroutethreef = "tel:" + " " + req.body.sroutethreefdh;
var sbrandthreef = req.body.sbrandthreefdh;
var snumberthreef = req.body.snumberthreefdh;
var slocationthreef = req.body.slocationthreefdh;
var sparkthreef = req.body.sparkthreefdh;
var spnothreef = req.body.spnothreefdh;
var smovethreef = req.body.smovethreefdh;
var cntdbaf = req.body.cntdbafdh;
var sboardthreef = req.body.sboardthreefdh;

var stimethreeg = req.body.stimethreegdi;
var sroutethreeg = req.body.sroutethreegdi;
var psroutethreeg = "tel:" + " " + req.body.sroutethreegdi;
var sbrandthreeg = req.body.sbrandthreegdi;
var snumberthreeg = req.body.snumberthreegdi;
var slocationthreeg = req.body.slocationthreegdi;
var sparkthreeg = req.body.sparkthreegdi;
var spnothreeg = req.body.spnothreegdi;
var smovethreeg = req.body.smovethreegdi;
var cntdbag = req.body.cntdbagdi;
var sboardthreeg = req.body.sboardthreegdi;

var stimethreeh = req.body.stimethreehdj;
var sroutethreeh = req.body.sroutethreehdj;
var psroutethreeh = "tel:" + " " + req.body.sroutethreehdj;
var sbrandthreeh = req.body.sbrandthreehdj;
var snumberthreeh = req.body.snumberthreehdj;
var slocationthreeh = req.body.slocationthreehdj;
var sparkthreeh = req.body.sparkthreehdj;
var spnothreeh = req.body.spnothreehdj;
var smovethreeh = req.body.smovethreehdj;
var cntdbah = req.body.cntdbahdj;
var sboardthreeh = req.body.sboardthreehdj;

var stimethreei = req.body.stimethreeidk;
var sroutethreei = req.body.sroutethreeidk;
var psroutethreei = "tel:" + " " + req.body.sroutethreeidk;
var sbrandthreei = req.body.sbrandthreeidk;
var snumberthreei = req.body.snumberthreeidk;
var slocationthreei = req.body.slocationthreeidk;
var sparkthreei = req.body.sparkthreeidk;
var spnothreei = req.body.spnothreeidk;
var smovethreei = req.body.smovethreeidk;
var cntdbai = req.body.cntdbaidk;
var sboardthreei = req.body.sboardthreeidk;

var stimethreej = req.body.stimethreejdl;
var sroutethreej = req.body.sroutethreejdl;
var psroutethreej = "tel:" + " " + req.body.sroutethreejdl;
var sbrandthreej = req.body.sbrandthreejdl;
var snumberthreej = req.body.snumberthreejdl;
var slocationthreej = req.body.slocationthreejdl;
var sparkthreej = req.body.sparkthreejdl;
var spnothreej = req.body.spnothreejdl;
var smovethreej = req.body.smovethreejdl;
var cntdbaj = req.body.cntdbajdl;
var sboardthreej = req.body.sboardthreejdl;

var stimethreek = req.body.stimethreekdm;
var sroutethreek = req.body.sroutethreekdm;
var psroutethreek = "tel:" + " " + req.body.sroutethreekdm;
var sbrandthreek = req.body.sbrandthreekdm;
var snumberthreek = req.body.snumberthreekdm;
var slocationthreek = req.body.slocationthreekdm;
var sparkthreek = req.body.sparkthreekdm;
var spnothreek = req.body.spnothreekdm;
var smovethreek = req.body.smovethreekdm;
var cntdbak = req.body.cntdbakdm;
var sboardthreek = req.body.sboardthreekdm;

var stimethreel = req.body.stimethreeldn;
var sroutethreel = req.body.sroutethreeldn;
var psroutethreel = "tel:" + " " + req.body.sroutethreeldn;
var sbrandthreel = req.body.sbrandthreeldn;
var snumberthreel = req.body.snumberthreeldn;
var slocationthreel = req.body.slocationthreeldn;
var sparkthreel = req.body.sparkthreeldn;
var spnothreel = req.body.spnothreeldn;
var smovethreel = req.body.smovethreeldn;
var cntdbal = req.body.cntdbaldn;
var sboardthreel = req.body.sboardthreeldn;

var stimethreem = req.body.stimethreemdo;
var sroutethreem = req.body.sroutethreemdo;
var psroutethreem = "tel:" + " " + req.body.sroutethreemdo;
var sbrandthreem = req.body.sbrandthreemdo;
var snumberthreem = req.body.snumberthreemdo;
var slocationthreem = req.body.slocationthreemdo;
var sparkthreem = req.body.sparkthreemdo;
var spnothreem = req.body.spnothreemdo;
var smovethreem = req.body.smovethreemdo;
var cntdbam = req.body.cntdbamdo;
var sboardthreem = req.body.sboardthreemdo;

var stimethreen = req.body.stimethreendp;
var sroutethreen = req.body.sroutethreendp;
var psroutethreen = "tel:" + " " + req.body.sroutethreendp;
var sbrandthreen = req.body.sbrandthreendp;
var snumberthreen = req.body.snumberthreendp;
var slocationthreen = req.body.slocationthreendp;
var sparkthreen = req.body.sparkthreendp;
var spnothreen = req.body.spnothreendp;
var smovethreen = req.body.smovethreendp;
var cntdban = req.body.cntdbandp;
var sboardthreen = req.body.sboardthreendp;

var stimethreeo = req.body.stimethreeodq;
var sroutethreeo = req.body.sroutethreeodq;
var psroutethreeo = "tel:" + " " + req.body.sroutethreeodq;
var sbrandthreeo = req.body.sbrandthreeodq;
var snumberthreeo = req.body.snumberthreeodq;
var slocationthreeo = req.body.slocationthreeodq;
var sparkthreeo = req.body.sparkthreeodq;
var spnothreeo = req.body.spnothreeodq;
var smovethreeo = req.body.smovethreeodq;
var cntdbao = req.body.cntdbaodq;
var sboardthreeo = req.body.sboardthreeodq;

var stimethreep = req.body.stimethreepdr;
var sroutethreep = req.body.sroutethreepdr;
var psroutethreep = "tel:" + " " + req.body.sroutethreepdr;
var sbrandthreep = req.body.sbrandthreepdr;
var snumberthreep = req.body.snumberthreepdr;
var slocationthreep = req.body.slocationthreepdr;
var sparkthreep = req.body.sparkthreepdr;
var spnothreep = req.body.spnothreepdr;
var smovethreep = req.body.smovethreepdr;
var cntdbap = req.body.cntdbapdr;
var sboardthreep = req.body.sboardthreepdr;

var stimethreeq = req.body.stimethreeqds;
var sroutethreeq = req.body.sroutethreeqds;
var psroutethreeq = "tel:" + " " + req.body.sroutethreeqds;
var sbrandthreeq = req.body.sbrandthreeqds;
var snumberthreeq = req.body.snumberthreeqds;
var slocationthreeq = req.body.slocationthreeqds;
var sparkthreeq = req.body.sparkthreeqds;
var spnothreeq = req.body.spnothreeqds;
var smovethreeq = req.body.smovethreeqds;
var cntdbaq = req.body.cntdbaqds;
var sboardthreeq = req.body.sboardthreeqds;

var stimethreer = req.body.stimethreerdt;
var sroutethreer = req.body.sroutethreerdt;
var psroutethreer = "tel:" + " " + req.body.sroutethreerdt;
var sbrandthreer = req.body.sbrandthreerdt;
var snumberthreer = req.body.snumberthreerdt;
var slocationthreer = req.body.slocationthreerdt;
var sparkthreer = req.body.sparkthreerdt;
var spnothreer = req.body.spnothreerdt;
var smovethreer = req.body.smovethreerdt;
var cntdbar = req.body.cntdbardt;
var sboardthreer = req.body.sboardthreerdt;

var stimethrees = req.body.stimethreesdu;
var sroutethrees = req.body.sroutethreesdu;
var psroutethrees = "tel:" + " " + req.body.sroutethreesdu;
var sbrandthrees = req.body.sbrandthreesdu;
var snumberthrees = req.body.snumberthreesdu;
var slocationthrees = req.body.slocationthreesdu;
var sparkthrees = req.body.sparkthreesdu;
var spnothrees = req.body.spnothreesdu;
var smovethrees = req.body.smovethreesdu;
var cntdbas = req.body.cntdbasdu;
var sboardthrees = req.body.sboardthreesdu;

var stimethreet = req.body.stimethreetdxx;
var sroutethreet = req.body.sroutethreetdxx;
var psroutethreet = "tel:" + " " + req.body.sroutethreetdxx;
var sbrandthreet = req.body.sbrandthreetdxx;
var snumberthreet = req.body.snumberthreetdxx;
var slocationthreet = req.body.slocationthreetdxx;
var sparkthreet = req.body.sparkthreetdxx;
var spnothreet = req.body.spnothreetdxx;
var smovethreet = req.body.smovethreetdxx;
var cntdbat = req.body.cntdbatdxx;
var sboardthreet = req.body.sboardthreetdxx;

var stimethreeu = req.body.stimethreeudv;
var sroutethreeu = req.body.sroutethreeudv;
var psroutethreeu = "tel:" + " " + req.body.sroutethreeudv;
var sbrandthreeu = req.body.sbrandthreeudv;
var snumberthreeu = req.body.snumberthreeudv;
var slocationthreeu = req.body.slocationthreeudv;
var sparkthreeu = req.body.sparkthreeudv;
var spnothreeu = req.body.spnothreeudv;
var smovethreeu = req.body.smovethreeudv;
var cntdbau = req.body.cntdbaudv;
var sboardthreeu = req.body.sboardthreeudv;

var stimethreev = req.body.stimethreevdw;
var sroutethreev = req.body.sroutethreevdw;
var psroutethreev = "tel:" + " " + req.body.sroutethreevdw;
var sbrandthreev = req.body.sbrandthreevdw;
var snumberthreev = req.body.snumberthreevdw;
var slocationthreev = req.body.slocationthreevdw;
var sparkthreev = req.body.sparkthreevdw;
var spnothreev = req.body.spnothreevdw;
var smovethreev = req.body.smovethreevdw;
var cntdbav = req.body.cntdbavdw;
var sboardthreev = req.body.sboardthreevdw;

var stimethreew = req.body.stimethreewdx;
var sroutethreew = req.body.sroutethreewdx;
var psroutethreew = "tel:" + " " + req.body.sroutethreewdx;
var sbrandthreew = req.body.sbrandthreewdx;
var snumberthreew = req.body.snumberthreewdx;
var slocationthreew = req.body.slocationthreewdx;
var sparkthreew = req.body.sparkthreewdx;
var spnothreew = req.body.spnothreewdx;
var smovethreew = req.body.smovethreewdx;
var cntdbaw = req.body.cntdbawdx;
var sboardthreew = req.body.sboardthreewdx;

var stimethreex = req.body.stimethreexdy;
var sroutethreex = req.body.sroutethreexdy;
var psroutethreex = "tel:" + " " + req.body.sroutethreexdy;
var sbrandthreex = req.body.sbrandthreexdy;
var snumberthreex = req.body.snumberthreexdy;
var slocationthreex = req.body.slocationthreexdy;
var sparkthreex = req.body.sparkthreexdy;
var spnothreex = req.body.spnothreexdy;
var smovethreex = req.body.smovethreexdy;
var cntdbax = req.body.cntdbaxdy;
var sboardthreex = req.body.sboardthreexdy;

var stimethreey = req.body.stimethreeydz;
var sroutethreey = req.body.sroutethreeydz;
var psroutethreey = "tel:" + " " + req.body.sroutethreeydz;
var sbrandthreey = req.body.sbrandthreeydz;
var snumberthreey = req.body.snumberthreeydz;
var slocationthreey = req.body.slocationthreeydz;
var sparkthreey = req.body.sparkthreeydz;
var spnothreey = req.body.spnothreeydz;
var smovethreey = req.body.smovethreeydz;
var cntdbay = req.body.cntdbaydz;
var sboardthreey = req.body.sboardthreeydz;

var stimethreez = req.body.stimethreezdaa;
var sroutethreez = req.body.sroutethreezdaa;
var psroutethreez = "tel:" + " " + req.body.sroutethreezdaa;
var sbrandthreez = req.body.sbrandthreezdaa;
var snumberthreez = req.body.snumberthreezdaa;
var slocationthreez = req.body.slocationthreezdaa;
var sparkthreez = req.body.sparkthreezdaa;
var spnothreez = req.body.spnothreezdaa;
var smovethreez = req.body.smovethreezdaa;
var cntdbaz = req.body.cntdbazdaa;
var sboardthreez = req.body.sboardthreezdaa;

var stimethreeaa = req.body.stimethreeaadbb;
var sroutethreeaa = req.body.sroutethreeaadbb;
var psroutethreeaa = "tel:" + " " + req.body.sroutethreeaadbb;
var sbrandthreeaa = req.body.sbrandthreeaadbb;
var snumberthreeaa = req.body.snumberthreeaadbb;
var slocationthreeaa = req.body.slocationthreeaadbb;
var sparkthreeaa = req.body.sparkthreeaadbb;
var spnothreeaa = req.body.spnothreeaadbb;
var smovethreeaa = req.body.smovethreeaadbb;
var cntdbaaaa = req.body.cntdbaaaadbb;
var sboardthreeaa = req.body.sboardthreeaadbb;

var stimethreebb = req.body.stimethreebbdcc;
var sroutethreebb = req.body.sroutethreebbdcc;
var psroutethreebb = "tel:" + " " + req.body.sroutethreebbdcc;
var sbrandthreebb = req.body.sbrandthreebbdcc;
var snumberthreebb = req.body.snumberthreebbdcc;
var slocationthreebb = req.body.slocationthreebbdcc;
var sparkthreebb = req.body.sparkthreebbdcc;
var spnothreebb = req.body.spnothreebbdcc;
var smovethreebb = req.body.smovethreebbdcc;
var cntdbabb = req.body.cntdbabbdcc;
var sboardthreebb = req.body.sboardthreebbdcc;

var stimethreecc = req.body.stimethreeccddd;
var sroutethreecc = req.body.sroutethreeccddd;
var psroutethreecc = "tel:" + " " + req.body.sroutethreeccddd;
var sbrandthreecc = req.body.sbrandthreeccddd;
var snumberthreecc = req.body.snumberthreeccddd;
var slocationthreecc = req.body.slocationthreeccddd;
var sparkthreecc = req.body.sparkthreeccddd;
var spnothreecc = req.body.spnothreeccddd;
var smovethreecc = req.body.smovethreeccddd;
var cntdbacc = req.body.cntdbaccddd;
var sboardthreecc = req.body.sboardthreeccddd;

var stimethreedd = req.body.stimethreedddee;
var sroutethreedd = req.body.sroutethreedddee;
var psroutethreedd = "tel:" + " " + req.body.sroutethreedddee;
var sbrandthreedd = req.body.sbrandthreedddee;
var snumberthreedd = req.body.snumberthreedddee;
var slocationthreedd = req.body.slocationthreedddee;
var sparkthreedd = req.body.sparkthreedddee;
var spnothreedd = req.body.spnothreedddee;
var smovethreedd = req.body.smovethreedddee;
var cntdbadd = req.body.cntdbadddee;
var sboardthreedd = req.body.sboardthreedddee;

var stimethreeee = req.body.stimethreeeedff;
var sroutethreeee = req.body.sroutethreeeedff;
var psroutethreeee = "tel:" + " " + req.body.sroutethreeeedff;
var sbrandthreeee = req.body.sbrandthreeeedff;
var snumberthreeee = req.body.snumberthreeeedff;
var slocationthreeee = req.body.slocationthreeeedff;
var sparkthreeee = req.body.sparkthreeeedff;
var spnothreeee = req.body.spnothreeeedff;
var smovethreeee = req.body.smovethreeeedff;
var cntdbaee = req.body.cntdbaeedff;
var sboardthreeee = req.body.sboardthreeeedff;

var stimethreeff = req.body.stimethreeffdgg;
var sroutethreeff = req.body.sroutethreeffdgg;
var psroutethreeff = "tel:" + " " + req.body.sroutethreeffdgg;
var sbrandthreeff = req.body.sbrandthreeffdgg;
var snumberthreeff = req.body.snumberthreeffdgg;
var slocationthreeff = req.body.slocationthreeffdgg;
var sparkthreeff = req.body.sparkthreeffdgg;
var spnothreeff = req.body.spnothreeffdgg;
var smovethreeff = req.body.smovethreeffdgg;
var cntdbaff = req.body.cntdbaffdgg;
var sboardthreeff = req.body.sboardthreeffdgg;

var stimethreegg = req.body.stimethreeggdhh;
var sroutethreegg = req.body.sroutethreeggdhh;
var psroutethreegg = "tel:" + " " + req.body.sroutethreeggdhh;
var sbrandthreegg = req.body.sbrandthreeggdhh;
var snumberthreegg = req.body.snumberthreeggdhh;
var slocationthreegg = req.body.slocationthreeggdhh;
var sparkthreegg = req.body.sparkthreeggdhh;
var spnothreegg = req.body.spnothreeggdhh;
var smovethreegg = req.body.smovethreeggdhh;
var cntdbagg = req.body.cntdbaggdhh;
var sboardthreegg = req.body.sboardthreeggdhh;

var stimethreehh = req.body.stimethreehhdii;
var sroutethreehh = req.body.sroutethreehhdii;
var psroutethreehh = "tel:" + " " + req.body.sroutethreehhdii;
var sbrandthreehh = req.body.sbrandthreehhdii;
var snumberthreehh = req.body.snumberthreehhdii;
var slocationthreehh = req.body.slocationthreehhdii;
var sparkthreehh = req.body.sparkthreehhdii;
var spnothreehh = req.body.spnothreehhdii;
var smovethreehh = req.body.smovethreehhdii;
var cntdbahh = req.body.cntdbahhdii;
var sboardthreehh = req.body.sboardthreehhdii;

var stimethreeii = req.body.stimethreeiidjj;
var sroutethreeii = req.body.sroutethreeiidjj;
var psroutethreeii = "tel:" + " " + req.body.sroutethreeiidjj;
var sbrandthreeii = req.body.sbrandthreeiidjj;
var snumberthreeii = req.body.snumberthreeiidjj;
var slocationthreeii = req.body.slocationthreeiidjj;
var sparkthreeii = req.body.sparkthreeiidjj;
var spnothreeii = req.body.spnothreeiidjj;
var smovethreeii = req.body.smovethreeiidjj;
var cntdbaii = req.body.cntdbaiidjj;
var sboardthreeii = req.body.sboardthreeiidjj;

var stimethreejj = req.body.stimethreejjdkk;
var sroutethreejj = req.body.sroutethreejjdkk;
var psroutethreejj = "tel:" + " " + req.body.sroutethreejjdkk;
var sbrandthreejj = req.body.sbrandthreejjdkk;
var snumberthreejj = req.body.snumberthreejjdkk;
var slocationthreejj = req.body.slocationthreejjdkk;
var sparkthreejj = req.body.sparkthreejjdkk;
var spnothreejj = req.body.spnothreejjdkk;
var smovethreejj = req.body.smovethreejjdkk;
var cntdbajj = req.body.cntdbajjdkk;
var sboardthreejj = req.body.sboardthreejjdkk;

var stimethreekk = req.body.stimethreekkdll;
var sroutethreekk = req.body.sroutethreekkdll;
var psroutethreekk = "tel:" + " " + req.body.sroutethreekkdll;
var sbrandthreekk = req.body.sbrandthreekkdll;
var snumberthreekk = req.body.snumberthreekkdll;
var slocationthreekk = req.body.slocationthreekkdll;
var sparkthreekk = req.body.sparkthreekkdll;
var spnothreekk = req.body.spnothreekkdll;
var smovethreekk = req.body.smovethreekkdll;
var cntdbakk = req.body.cntdbakkdll;
var sboardthreekk = req.body.sboardthreekkdll;

var stimethreell = req.body.stimethreelldmm;
var sroutethreell = req.body.sroutethreelldmm;
var psroutethreell = "tel:" + " " + req.body.sroutethreelldmm;
var sbrandthreell = req.body.sbrandthreelldmm;
var snumberthreell = req.body.snumberthreelldmm;
var slocationthreell = req.body.slocationthreelldmm;
var sparkthreell = req.body.sparkthreelldmm;
var spnothreell = req.body.spnothreelldmm;
var smovethreell = req.body.smovethreelldmm;
var cntdball = req.body.cntdballdmm;
var sboardthreell = req.body.sboardthreelldmm;

var stimethreemm = req.body.stimethreemmdnn;
var sroutethreemm = req.body.sroutethreemmdnn;
var psroutethreemm = "tel:" + " " + req.body.sroutethreemmdnn;
var sbrandthreemm = req.body.sbrandthreemmdnn;
var snumberthreemm = req.body.snumberthreemmdnn;
var slocationthreemm = req.body.slocationthreemmdnn;
var sparkthreemm = req.body.sparkthreemmdnn;
var spnothreemm = req.body.spnothreemmdnn;
var smovethreemm = req.body.smovethreemmdnn;
var cntdbamm = req.body.cntdbammdnn;
var sboardthreemm = req.body.sboardthreemmdnn;

var stimethreenn = req.body.stimethreenndoo;
var sroutethreenn = req.body.sroutethreenndoo;
var psroutethreenn = "tel:" + " " + req.body.sroutethreenndoo;
var sbrandthreenn = req.body.sbrandthreenndoo;
var snumberthreenn = req.body.snumberthreenndoo;
var slocationthreenn = req.body.slocationthreenndoo;
var sparkthreenn = req.body.sparkthreenndoo;
var spnothreenn = req.body.spnothreenndoo;
var smovethreenn = req.body.smovethreenndoo;
var cntdbann = req.body.cntdbanndoo;
var sboardthreenn = req.body.sboardthreenndoo;

var stimethreeoo = req.body.stimethreeoodpp;
var sroutethreeoo = req.body.sroutethreeoodpp;
var psroutethreeoo = "tel:" + " " + req.body.sroutethreeoodpp;
var sbrandthreeoo = req.body.sbrandthreeoodpp;
var snumberthreeoo = req.body.snumberthreeoodpp;
var slocationthreeoo = req.body.slocationthreeoodpp;
var sparkthreeoo = req.body.sparkthreeoodpp;
var spnothreeoo = req.body.spnothreeoodpp;
var smovethreeoo = req.body.smovethreeoodpp;
var cntdbaoo = req.body.cntdbaoodpp;
var sboardthreeoo = req.body.sboardthreeoodpp;

var stimethreepp = req.body.stimethreeppdqq;
var sroutethreepp = req.body.sroutethreeppdqq;
var psroutethreepp = "tel:" + " " + req.body.sroutethreeppdqq;
var sbrandthreepp = req.body.sbrandthreeppdqq;
var snumberthreepp = req.body.snumberthreeppdqq;
var slocationthreepp = req.body.slocationthreeppdqq;
var sparkthreepp = req.body.sparkthreeppdqq;
var spnothreepp = req.body.spnothreeppdqq;
var smovethreepp = req.body.smovethreeppdqq;
var cntdbapp = req.body.cntdbappdqq;
var sboardthreepp = req.body.sboardthreeppdqq;

var stimethreeqq = req.body.stimethreeqqdrr;
var sroutethreeqq = req.body.sroutethreeqqdrr;
var psroutethreeqq = "tel:" + " " + req.body.sroutethreeqqdrr;
var sbrandthreeqq = req.body.sbrandthreeqqdrr;
var snumberthreeqq = req.body.snumberthreeqqdrr;
var slocationthreeqq = req.body.slocationthreeqqdrr;
var sparkthreeqq = req.body.sparkthreeqqdrr;
var spnothreeqq = req.body.spnothreeqqdrr;
var smovethreeqq = req.body.smovethreeqqdrr;
var cntdbaqq = req.body.cntdbaqqdrr;
var sboardthreeqq = req.body.sboardthreeqqdrr;

var stimethreerr = req.body.stimethreerrdss;
var sroutethreerr = req.body.sroutethreerrdss;
var psroutethreerr = "tel:" + " " + req.body.sroutethreerrdss;
var sbrandthreerr = req.body.sbrandthreerrdss;
var snumberthreerr = req.body.snumberthreerrdss;
var slocationthreerr = req.body.slocationthreerrdss;
var sparkthreerr = req.body.sparkthreerrdss;
var spnothreerr = req.body.spnothreerrdss;
var smovethreerr = req.body.smovethreerrdss;
var cntdbarr = req.body.cntdbarrdss;
var sboardthreerr = req.body.sboardthreerrdss;

var stimethreess = req.body.stimethreessdtt;
var sroutethreess = req.body.sroutethreessdtt;
var psroutethreess = "tel:" + " " + req.body.sroutethreessdtt;
var sbrandthreess = req.body.sbrandthreessdtt;
var snumberthreess = req.body.snumberthreessdtt;
var slocationthreess = req.body.slocationthreessdtt;
var sparkthreess = req.body.sparkthreessdtt;
var spnothreess = req.body.spnothreessdtt;
var smovethreess = req.body.smovethreessdtt;
var cntdbass = req.body.cntdbassdtt;
var sboardthreess = req.body.sboardthreessdtt;

var stimethreett = req.body.stimethreettduu;
var sroutethreett = req.body.sroutethreettduu;
var psroutethreett = "tel:" + " " + req.body.sroutethreettduu;
var sbrandthreett = req.body.sbrandthreettduu;
var snumberthreett = req.body.snumberthreettduu;
var slocationthreett = req.body.slocationthreettduu;
var sparkthreett = req.body.sparkthreettduu;
var spnothreett = req.body.spnothreettduu;
var smovethreett = req.body.smovethreettduu;
var cntdbatt = req.body.cntdbattduu;
var sboardthreett = req.body.sboardthreettduu;

var stimethreeuu = req.body.stimethreeuudvv;
var sroutethreeuu = req.body.sroutethreeuudvv;
var psroutethreeuu = "tel:" + " " + req.body.sroutethreeuudvv;
var sbrandthreeuu = req.body.sbrandthreeuudvv;
var snumberthreeuu = req.body.snumberthreeuudvv;
var slocationthreeuu = req.body.slocationthreeuudvv;
var sparkthreeuu = req.body.sparkthreeuudvv;
var spnothreeuu = req.body.spnothreeuudvv;
var smovethreeuu = req.body.smovethreeuudvv;
var cntdbauu = req.body.cntdbauudvv;
var sboardthreeuu = req.body.sboardthreeuudvv;

var stimethreevv = req.body.stimethreevvdww;
var sroutethreevv = req.body.sroutethreevvdww;
var psroutethreevv = "tel:" + " " + req.body.sroutethreevvdww;
var sbrandthreevv = req.body.sbrandthreevvdww;
var snumberthreevv = req.body.snumberthreevvdww;
var slocationthreevv = req.body.slocationthreevvdww;
var sparkthreevv = req.body.sparkthreevvdww;
var spnothreevv = req.body.spnothreevvdww;
var smovethreevv = req.body.smovethreevvdww;
var cntdbavv = req.body.cntdbavvdww;
var sboardthreevv = req.body.sboardthreevvdww;

//compones out put structure;

var formopen = "<form name='major' id='majorfd' class='majoramd' style='width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background-color:  !important;'>";
var formclose = "</form>";
var routeaamd = "<span class='routeaamd' id='routeaamd' style='width: auto; background-color: green; padding: 5px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both;'>";
var routea = "<span class='routea' id='routea' style='width: auto; background-color:  !important; padding: 5px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both;'>";
var routee = "<div class='routea' id='routee' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routei = "<div class='routei' id='routei' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routeo = "<div class='routeo' id='routeo' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routeu = "<div class='routeu' id='routeu' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var divclose = "</div>";
var ampgt = " &gt;";
var ampgta = "&gt;";
var sect = " Route:"
var titlespan = "<span id='fortitle' style='width: auto; display: block; margin-left: 0%; background-color: ;'>";
var titlespana = "<span id='fortitle' style='width: auto; display: block; margin-left: 0.5%;'>";
titlespanaes = "<span id='fortitleas' style='width: auto; display: block; margin-left: 0.5%; text-align: center;'>"
var spanoutone = "<span id='spanroneoutone' style='width: 15%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;  min-height: 0px;'>";
var spanouttwo = "<span id='spanroneouttwo' style='width: 17%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; min-height: 0px; '>";
var spanoutthree = "<span id='spanroneoutthree' style='width: 20%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: left; display: min-height: 0px;'>";
var spanoutfour = "<span id='spanroneoutfour' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; min-height: 0px;'>";
var spanoutfive = "<span id='spanroneoutfive' style='width: 8%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; min-height: 0px;'>";
var spanoutsix = "<span id='spanroneoutsix' style='width: 8%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block; min-height: 0px;'>";
var spanouteight = "<span id='spanroneouteight' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: right; clear: right; display: inline-block; block; background-color: ; text-align: center; min-height: 0px;'>";

var spanina = "<span id='spanina' style='width: auto; height: auto; padding: 8px 4px; margin: 0px 0 4px 0; display: block; background-color: pink; text-align: left;'>";
var spanine = "<span id='spanine' style='width: auto; height: auto; padding: 8px 2% 8px 16%; margin: 0px 0 2% 0; display: block; background-color: pink; text-align: left;'>";
var spanin = "<span id='spanin' style='width: auto; height: auto; padding:4px  0px; margin: 4px auto; display: block; background-color: ;'>";

var spaninr = "<span id='spaninr' style='width: auto; height: auto; padding: 4px 0; margin: 4px auto; display: block; min-height: 0px;'>";
var spaninrmd = "<span id='spaninrmd' style='width: auto; height: auto; padding: 4px 0; margin: 4px auto; display: block; min-height: 0px;'>";
var spaninrcmp = "<span id='spaninrcmp' class='spaninrcmp' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: inline-block;'>";
var spanink = "<span id='spanink' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: left; clear: left; text-align: right; background-color: ; min-height: 0px;'>";
var spaninkmd = "<span id='spaninkmd' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: left; clear: left; text-align: right; background-color: ; min-height: 0px;'>";
var spanint = "<span id='spanint' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: right; clear: right; background-color: ; min-height: 0px;'>";
var spanintmd = "<span id='spanintmd' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: right; clear: right; background-color: ; min-height: 0px;'>";

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



//board anchors
var sboardroneanchora = "<a href='../../../publicts/index.html' name='sboardone' id='sboardone' style='height: auto; width: auto; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;'>";

var sboardrtwoanchorb = "<a href='' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthreeanchorc = "<a href='' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfouranchord = "<a href='' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfiveanchore = "<a href='' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixanchorf = "<a href='' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsevenanchorg = "<a href='' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreightanchorh = "<a href='' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineanchori = "<a href='' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtenanchorj = "<a href='' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrelevenanchork = "<a href='' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwelveanchorl = "<a href='' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirteenanchorm = "<a href='' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourteenanchorn = "<a href='' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifeteenanchoro = "<a href='' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixteenanchorp = "<a href='' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrseventeenanchorq = "<a href='' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreighteenanchorr = "<a href='' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineteenanchors = "<a href='' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyanchort = "<a href='' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyoneanchoru = "<a href='' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentytwoanchorv = "<a href='' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentythreeanchorw = "<a href='' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfouranchorx = "<a href='' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfiveanchory = "<a href='' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysixanchorz = "<a href='' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysevenanchora = "<a href='' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyeightanchorb = "<a href='' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentynineanchorc = "<a href='' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyanchord = "<a href='' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyoneanchore = "<a href='' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtytwoanchorf = "<a href='' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtythreeanchorg = "<a href='' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfouranchorh = "<a href='' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfiveanchori = "<a href='' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysixanchorj = "<a href='' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysevenanchork = "<a href='' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyeightanchorl = "<a href='' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtynineanchorm = "<a href='' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyanchorn = "<a href='' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyoneanchoro = "<a href='' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtytwoanchorp = "<a href='' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtythreeanchorq = "<a href='' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfouranchorr = "<a href='' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfiveanchors = "<a href='' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysixanchort = "<a href='' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysevenanchoru = "<a href='' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyeightanchorv = "<a href='' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtynineanchorw = "<a href='' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifetyanchorx = "<a href='' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";
var anchorclose = "</a>";


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
var mainzz = "<main id='mainzz' class='mainzz' style='height: 200px; background-color: yellow; display: block; margin: 0; padding: 0; border: none;'>";
var mainclose = "</main>";
var loclose = "</div>";
var leftloaamd = "<div class='leftloaamd' id='leftloaamd' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloa = "<div class='leftloa' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloae = "<div class='leftloae' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var rightsloa = "<div class='rightsloa' style='width: 100%; background-color: brown; margin: 0; padding: 0; border: none;'>";
var bottomsloa = "<div class='bottomsloa' style=' width: 100%; margin: 0; padding: 0; border: none;'>";
var keydivs = "<div class='alldivs' style='background-color: ; padding: 4px;'>";
var divclose = "</div>";

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

//call links

      var abopn = "<";      
      var anka = "a";
      var spc = " ";
      var hreef = "href";
      var equol = "=";
      var lrsqm = "'";
      var aidi = "id";
      var calllinkid = "calllinkid";
      var abclsn = ">";


var showschedule = "<!DOCTYPE html>" + "<html>" + "<head>" + "<meta charset='utf8'/>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" +"<link rel='stylesheet' href='../../css/main.css' media='screen and (min-width: 0px) and (max-width: 899px)'/>" +"<link rel='stylesheet' href='../../css/big.css' media='screen and (min-width: 900px) and (max-width: 4000px)'/>" + "<style>" + "</style>" + "<script>" + fn + spaceit + fnnamena +   openbrace + eef + openbracket + layoutna + equivalent + empty + closebracket + openbrace + layoutnas + equal + displayoffit + clsb + eelse + openbrace + layoutnas + equal + displayonit + closebrace + closebrace +           fn + spaceit + fnnamea +   openbrace + eef + openbracket + layoutan + equivalent + empty + closebracket + openbrace + layouta + equal + displayoffit + clsb + eelse + openbrace + layouta + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnameb +   openbrace + eef + openbracket + layoutbn + equivalent + empty + closebracket + openbrace + layoutb + equal + displayoffit + clsb + eelse + openbrace + layoutb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamec +   openbrace + eef + openbracket + layoutcn + equivalent + empty + closebracket + openbrace + layoutc + equal + displayoffit + clsb + eelse + openbrace + layoutc + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamed +   openbrace + eef + openbracket + layoutdn + equivalent + empty + closebracket + openbrace + layoutd + equal + displayoffit + clsb + eelse + openbrace + layoutd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamee +   openbrace + eef + openbracket + layouten + equivalent + empty + closebracket + openbrace + layoute + equal + displayoffit + clsb + eelse + openbrace + layoute + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamef +   openbrace + eef + openbracket + layoutfn + equivalent + empty + closebracket + openbrace + layoutf + equal + displayoffit + clsb + eelse + openbrace + layoutf + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameg +   openbrace + eef + openbracket + layoutgn + equivalent + empty + closebracket + openbrace + layoutg + equal + displayoffit + clsb + eelse + openbrace + layoutg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameh +   openbrace + eef + openbracket + layouthn + equivalent + empty + closebracket + openbrace + layouth + equal + displayoffit + clsb + eelse + openbrace + layouth + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamei +   openbrace + eef + openbracket + layoutin + equivalent + empty + closebracket + openbrace + layouti + equal + displayoffit + clsb + eelse + openbrace + layouti + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamej +   openbrace + eef + openbracket + layoutjn + equivalent + empty + closebracket + openbrace + layoutj + equal + displayoffit + clsb + eelse + openbrace + layoutj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamek +   openbrace + eef + openbracket + layoutkn + equivalent + empty + closebracket + openbrace + layoutk + equal + displayoffit + clsb + eelse + openbrace + layoutk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamel +   openbrace + eef + openbracket + layoutln + equivalent + empty + closebracket + openbrace + layoutl + equal + displayoffit + clsb + eelse + openbrace + layoutl + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamem +   openbrace + eef + openbracket + layoutmn + equivalent + empty + closebracket + openbrace + layoutm + equal + displayoffit + clsb + eelse + openbrace + layoutm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamen +   openbrace + eef + openbracket + layoutnnspn + equivalent + empty + closebracket + openbrace + layoutn + equal + displayoffit + clsb + eelse + openbrace + layoutn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameo +   openbrace + eef + openbracket + layouton + equivalent + empty + closebracket + openbrace + layouto + equal + displayoffit + clsb + eelse + openbrace + layouto + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamep +   openbrace + eef + openbracket + layoutpn + equivalent + empty + closebracket + openbrace + layoutp + equal + displayoffit + clsb + eelse + openbrace + layoutp + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameq +   openbrace + eef + openbracket + layoutqn + equivalent + empty + closebracket + openbrace + layoutq + equal + displayoffit + clsb + eelse + openbrace + layoutq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamer +   openbrace + eef + openbracket + layoutrn + equivalent + empty + closebracket + openbrace + layoutr + equal + displayoffit + clsb + eelse + openbrace + layoutr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnames +   openbrace + eef + openbracket + layoutsn + equivalent + empty + closebracket + openbrace + layouts + equal + displayoffit + clsb + eelse + openbrace + layouts + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamet +   openbrace + eef + openbracket + layouttn + equivalent + empty + closebracket + openbrace + layoutt + equal + displayoffit + clsb + eelse + openbrace + layoutt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameu +   openbrace + eef + openbracket + layoutun + equivalent + empty + closebracket + openbrace + layoutu + equal + displayoffit + clsb + eelse + openbrace + layoutu + equal + displayonit + closebrace + closebrace +        fn + spaceit + fnnamev +   openbrace + eef + openbracket + layoutvn + equivalent + empty + closebracket + openbrace + layoutv + equal + displayoffit + clsb + eelse + openbrace + layoutv + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnamew +   openbrace + eef + openbracket + layoutwn + equivalent + empty + closebracket + openbrace + layoutw + equal + displayoffit + clsb + eelse + openbrace + layoutw + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamex +   openbrace + eef + openbracket + layoutxn + equivalent + empty + closebracket + openbrace + layoutx + equal + displayoffit + clsb + eelse + openbrace + layoutx + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamey +   openbrace + eef + openbracket + layoutyn + equivalent + empty + closebracket + openbrace + layouty + equal + displayoffit + clsb + eelse + openbrace + layouty + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamez +   openbrace + eef + openbracket + layoutzn + equivalent + empty + closebracket + openbrace + layoutz + equal + displayoffit + clsb + eelse + openbrace + layoutz + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameaa +   openbrace + eef + openbracket + layoutaan + equivalent + empty + closebracket + openbrace + layoutaa + equal + displayoffit + clsb + eelse + openbrace + layoutaa + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamebb +   openbrace + eef + openbracket + layoutbbn + equivalent + empty + closebracket + openbrace + layoutbb + equal + displayoffit + clsb + eelse + openbrace + layoutbb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamecc +   openbrace + eef + openbracket + layoutccn + equivalent + empty + closebracket + openbrace + layoutcc + equal + displayoffit + clsb + eelse + openbrace + layoutcc + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamedd +   openbrace + eef + openbracket + layoutddn + equivalent + empty + closebracket + openbrace + layoutdd + equal + displayoffit + clsb + eelse + openbrace + layoutdd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameee +   openbrace + eef + openbracket + layouteen + equivalent + empty + closebracket + openbrace + layoutee + equal + displayoffit + clsb + eelse + openbrace + layoutee + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameff +   openbrace + eef + openbracket + layoutffn + equivalent + empty + closebracket + openbrace + layoutff + equal + displayoffit + clsb + eelse + openbrace + layoutff + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamegg +   openbrace + eef + openbracket + layoutggn + equivalent + empty + closebracket + openbrace + layoutgg + equal + displayoffit + clsb + eelse + openbrace + layoutgg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamehh +   openbrace + eef + openbracket + layouthhn + equivalent + empty + closebracket + openbrace + layouthh + equal + displayoffit + clsb + eelse + openbrace + layouthh + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameii +   openbrace + eef + openbracket + layoutiin + equivalent + empty + closebracket + openbrace + layoutii + equal + displayoffit + clsb + eelse + openbrace + layoutii + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamejj +   openbrace + eef + openbracket + layoutjjn + equivalent + empty + closebracket + openbrace + layoutjj + equal + displayoffit + clsb + eelse + openbrace + layoutjj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamekk +   openbrace + eef + openbracket + layoutkkn + equivalent + empty + closebracket + openbrace + layoutkk + equal + displayoffit + clsb + eelse + openbrace + layoutkk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamell +   openbrace + eef + openbracket + layoutlln + equivalent + empty + closebracket + openbrace + layoutll + equal + displayoffit + clsb + eelse + openbrace + layoutll + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamemm +   openbrace + eef + openbracket + layoutmmn + equivalent + empty + closebracket + openbrace + layoutmm + equal + displayoffit + clsb + eelse + openbrace + layoutmm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamenn +   openbrace + eef + openbracket + layoutnnn + equivalent + empty + closebracket + openbrace + layoutnn + equal + displayoffit + clsb + eelse + openbrace + layoutnn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameoo +   openbrace + eef + openbracket + layoutoon + equivalent + empty + closebracket + openbrace + layoutoo + equal + displayoffit + clsb + eelse + openbrace + layoutoo + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamepp +   openbrace + eef + openbracket + layoutppn + equivalent + empty + closebracket + openbrace + layoutpp + equal + displayoffit + clsb + eelse + openbrace + layoutpp + equal + displayonit + closebrace + closebrace +                 fn + spaceit + fnnameqq +   openbrace + eef + openbracket + layoutqqn + equivalent + empty + closebracket + openbrace + layoutqq + equal + displayoffit + clsb + eelse + openbrace + layoutqq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamerr +   openbrace + eef + openbracket + layoutrrn + equivalent + empty + closebracket + openbrace + layoutrr + equal + displayoffit + clsb + eelse + openbrace + layoutrr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamess +   openbrace + eef + openbracket + layoutssn + equivalent + empty + closebracket + openbrace + layoutss + equal + displayoffit + clsb + eelse + openbrace + layoutss + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamett +   openbrace + eef + openbracket + layoutttn + equivalent + empty + closebracket + openbrace + layouttt + equal + displayoffit + clsb + eelse + openbrace + layouttt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameuu +   openbrace + eef + openbracket + layoutuun + equivalent + empty + closebracket + openbrace + layoutuu + equal + displayoffit + clsb + eelse + openbrace + layoutuu + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamevv +   openbrace + eef + openbracket + layoutvvn + equivalent + empty + closebracket + openbrace + layoutvv + equal + displayoffit + clsb + eelse + openbrace + layoutvv + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameww +   openbrace + eef + openbracket + layoutwwn + equivalent + empty + closebracket + openbrace + layoutww + equal + displayoffit + clsb + eelse + openbrace + layoutww + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamexx +   openbrace + eef + openbracket + layoutxxn + equivalent + empty + closebracket + openbrace + layoutxx + equal + displayoffit + clsb + eelse + openbrace + layoutxx + equal + displayonit + closebrace + closebrace +               "</script>" + "</head>" + "<body class='amclass' style='background-color: !important; margin: 0; padding: 0; border: none;' onload='openclosena() || openclosea() || opencloseb() || openclosec() || openclosed() || openclosee() || openclosef() || opencloseg() || opencloseh() || openclosei() || openclosej() || openclosek() || openclosel() || openclosem() || openclosen() || opencloseo() || openclosep() || opencloseq() || opencloser() || opencloses() || opencloset() || opencloseu() || openclosev() || openclosew() || openclosex() || openclosey() || openclosez() || opencloseaa() || openclosebb() || openclosecc() || openclosedd() || opencloseee() || opencloseff() || openclosegg() || openclosehh() || opencloseii() || openclosejj() || openclosekk() || openclosell() || openclosemm() || openclosenn() || opencloseoo() || openclosepp() || opencloseqq() || opencloserr() || openclosess() || openclosett() || opencloseuu() || openclosevv() || opencloseww() || openclosexx()'>" + formopen + mainzz +keydivs +spaninrcmp + dbcompname  + spanclose +  divclose +keydivs + "Buses at their Destiny" + divclose + mainclose  +   maina + routeaamd + firstroute + stitlea + spanclose  + leftloaamd +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +        spanoutthree + spanin + spaninr + sbrandone + spanclose + spanclose + spanclose + spanoutfour + spanin + spaninra + snumberone + spanclose + spanclose + spanclose + spanoutone + spanin + spaninr + cntdbaaa + spanclose + spanclose + spanclose + spanouttwo + spanin + spaninr + srouteone + spanclose + spanclose + spanclose + spanoutfive + spanin + spaninr + sparkone + spanclose + spanclose + spanclose +  spanoutsix + spanin + stimeone + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spanin + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psrouteone + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn
 + smoveone + anchorclose + spanclose + spanint + sboardroneanchora + sboardone + anchorclose + spanclose +   spanclose + spanclose + loclose + mainclose +       mainb + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                 spanoutthree + spaninr + sbrandtwo + spanclose + spanclose + spanoutfour + spaninrb + snumbertwo + spanclose + spanclose + spanoutone + spaninr + cntdbaab + spanclose + spanclose + spanouttwo + spaninr + sroutetwo + spanclose + spanclose + spanoutfive + spaninr + sparktwo + spanclose + spanclose +  spanoutsix + spaninr + stimetwo + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutetwo + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovetwo + anchorclose + spanclose + spanint + sboardrtwoanchorb + sboardtwo + anchorclose + spanclose + spanclose + spanclose +        loclose + mainclose +       mainc + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                   spanoutthree + spaninr + sbrandthree + spanclose + spanclose + spanoutfour + spaninrc + snumberthree + spanclose + spanclose + spanoutone + spaninr + cntdbaa + spanclose + spanclose + spanouttwo + spaninr + sroutethree + spanclose + spanclose + spanoutfive + spaninr + sparkthree + spanclose + spanclose +  spanoutsix + spaninr + stimethree + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethree + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethree + anchorclose + spanclose + spanint + sboardrthreeanchorc + sboardthree + anchorclose + spanclose + spanclose + spanclose     + loclose + mainclose +       maind + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                  spanoutthree + spaninr + sbrandthreeb + spanclose + spanclose + spanoutfour + spaninrd + snumberthreeb + spanclose + spanclose + spanoutone + spaninr + cntdbab + spanclose + spanclose + spanouttwo + spaninr + sroutethreeb + spanclose + spanclose + spanoutfive + spaninr + sparkthreeb + spanclose + spanclose +  spanoutsix + spaninr + stimethreeb + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeb + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeb + anchorclose + spanclose + spanint + sboardrfouranchord + sboardthreeb + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +       maine + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +               spanoutthree + spaninr + sbrandthreec + spanclose + spanclose + spanoutfour + spaninre + snumberthreec + spanclose + spanclose + spanoutone + spaninr + cntdbac + spanclose + spanclose + spanouttwo + spaninr + sroutethreec + spanclose + spanclose + spanoutfive + spaninr + sparkthreec + spanclose + spanclose +  spanoutsix + spaninr + stimethreec + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreec + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreec + anchorclose + spanclose + spanint + sboardrfiveanchore + sboardthreec + anchorclose + spanclose + spanclose + spanclose +           loclose + mainclose +       mainf + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                    spanoutthree + spaninr + sbrandthreed + spanclose + spanclose + spanoutfour + spaninrf + snumberthreed + spanclose + spanclose + spanoutone + spaninr + cntdbad + spanclose + spanclose + spanouttwo + spaninr + sroutethreed + spanclose + spanclose + spanoutfive + spaninr + sparkthreed + spanclose + spanclose +  spanoutsix + spaninr + stimethreed + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreed + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreed + anchorclose + spanclose + spanint + sboardrsixanchorf + sboardthreed + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +       maing + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +               spanoutthree + spaninr + sbrandthreee + spanclose + spanclose + spanoutfour + spaninrg + snumberthreee + spanclose + spanclose + spanoutone + spaninr + cntdbae + spanclose + spanclose + spanouttwo + spaninr + sroutethreee + spanclose + spanclose + spanoutfive + spaninr + sparkthreee + spanclose + spanclose +  spanoutsix + spaninr + stimethreee + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreee + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreee + anchorclose + spanclose + spanint + sboardrsevenanchorg + sboardthreee + anchorclose + spanclose + spanclose + spanclose +            loclose + mainclose +       mainh + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                    spanoutthree + spaninr + sbrandthreef + spanclose + spanclose + spanoutfour + spaninrh + snumberthreef + spanclose + spanclose + spanoutone + spaninr + cntdbaf + spanclose + spanclose + spanouttwo + spaninr + sroutethreef + spanclose + spanclose + spanoutfive + spaninr + sparkthreef + spanclose + spanclose +  spanoutsix + spaninr + stimethreef + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreef + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreef + anchorclose + spanclose + spanint + sboardreightanchorh + sboardthreef + anchorclose + spanclose + spanclose + spanclose +          loclose + mainclose +       maini + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +             spanoutthree + spaninr + sbrandthreeg + spanclose + spanclose + spanoutfour + spaninri + snumberthreeg + spanclose + spanclose +  spanoutone + spaninr + cntdbag + spanclose + spanclose + spanouttwo + spaninr + sroutethreeg + spanclose + spanclose + spanoutfive + spaninr + sparkthreeg + spanclose + spanclose +  spanoutsix + spaninr + stimethreeg + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeg + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeg + anchorclose + spanclose + spanint + sboardrnineanchori + sboardthreeg + anchorclose + spanclose + spanclose + spanclose +            loclose + mainclose +       mainj + routea + firstroute + stitlea + spanclose  + leftloa +    spanoutthree + spanina + titlespan + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +            rightsloa +                   spanoutthree + spaninr + sbrandthreeh + spanclose + spanclose + spanoutfour + spaninrj + snumberthreeh + spanclose + spanclose + spanoutone + spaninr + cntdbah + spanclose + spanclose + spanouttwo + spaninr + sroutethreeh + spanclose + spanclose + spanoutfive + spaninr + sparkthreeh + spanclose + spanclose +  spanoutsix + spaninr + stimethreeh + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeh + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeh + anchorclose + spanclose + spanint + sboardrtenanchorj + sboardthreeh + anchorclose + spanclose + spanclose + spanclose +        loclose + mainclose +        maink +   routeaamd + secondroute + stitleb +  spanclose  + leftloaamd + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +          spanoutthree + spaninr + sbrandthreei + spanclose + spanclose + spanoutfour + spaninrk + snumberthreei + spanclose + spanclose + spanoutone + spaninr + cntdbai + spanclose + spanclose + spanouttwo + spaninr + sroutethreei + spanclose + spanclose + spanoutfive + spaninr + sparkthreei + spanclose + spanclose +  spanoutsix + spaninr + stimethreei + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreei + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreei + anchorclose + spanclose + spanint + sboardrelevenanchork + sboardthreei + anchorclose + spanclose + spanclose + spanclose +               loclose + mainclose +        mainl +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                 spanoutthree + spaninr + sbrandthreej + spanclose + spanclose + spanoutfour + spaninrl + snumberthreej + spanclose + spanclose + spanoutone + spaninr + cntdbaj + spanclose + spanclose + spanouttwo + spaninr + sroutethreej + spanclose + spanclose + spanoutfive + spaninr + sparkthreej + spanclose + spanclose +  spanoutsix + spaninr + stimethreej + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreej + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreej + anchorclose + spanclose + spanint + sboardrtwelveanchorl + sboardthreej + anchorclose + spanclose + spanclose + spanclose +               loclose + mainclose +        mainm +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                  spanoutthree + spaninr + sbrandthreek + spanclose + spanclose + spanoutfour + spaninrm + snumberthreek + spanclose + spanclose + spanoutone + spaninr + cntdbak + spanclose + spanclose + spanouttwo + spaninr + sroutethreek + spanclose + spanclose + spanoutfive + spaninr + sparkthreek + spanclose + spanclose +  spanoutsix + spaninr + stimethreek + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreek + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreek + anchorclose + spanclose + spanint + sboardrthirteenanchorm + sboardthreek + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +        mainn +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +       spanoutthree + spaninr + sbrandthreel + spanclose + spanclose + spanoutfour + spaninrn + snumberthreel + spanclose + spanclose + spanoutone + spaninr + cntdbal + spanclose + spanclose + spanouttwo + spaninr + sroutethreel + spanclose + spanclose + spanoutfive + spaninr + sparkthreel + spanclose + spanclose +  spanoutsix + spaninr + stimethreel + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreel + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreel + anchorclose + spanclose + spanint + sboardrfourteenanchorn + sboardthreel + anchorclose + spanclose + spanclose + spanclose +             loclose + mainclose +        maino +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                    spanoutthree + spaninr + sbrandthreem + spanclose + spanclose + spanoutfour + spaninro + snumberthreem + spanclose + spanclose + spanoutone + spaninr + cntdbam + spanclose + spanclose + spanouttwo + spaninr + sroutethreem + spanclose + spanclose + spanoutfive + spaninr + sparkthreem + spanclose + spanclose +  spanoutsix + spaninr + stimethreem + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreem + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreem + anchorclose + spanclose + spanint + sboardrfifeteenanchoro + sboardthreem + anchorclose + spanclose + spanclose + spanclose +              loclose + mainclose +        mainp +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                   spanoutthree + spaninr + sbrandthreen + spanclose + spanclose + spanoutfour + spaninrp + snumberthreen + spanclose + spanclose + spanoutone + spaninr + cntdban + spanclose + spanclose + spanouttwo + spaninr + sroutethreen + spanclose + spanclose + spanoutfive + spaninr + sparkthreen + spanclose + spanclose +  spanoutsix + spaninr + stimethreen + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreen + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreen + anchorclose + spanclose + spanint + sboardrsixteenanchorp + sboardthreen + anchorclose + spanclose + spanclose + spanclose +            loclose + mainclose +        mainq +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                    spanoutthree + spaninr + sbrandthreeo + spanclose + spanclose + spanoutfour + spaninrq + snumberthreeo + spanclose + spanclose +  spanoutone + spaninr + cntdbao + spanclose + spanclose + spanouttwo + spaninr + sroutethreeo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeo + spanclose + spanclose +  spanoutsix + spaninr + stimethreeo + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeo + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeo + anchorclose + spanclose + spanint + sboardrseventeenanchorq + sboardthreeo + anchorclose + spanclose + spanclose + spanclose +             loclose + mainclose +        mainr +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                   spanoutthree + spaninr + sbrandthreep + spanclose + spanclose + spanoutfour + spaninrr + snumberthreep + spanclose + spanclose +  spanoutone + spaninr + cntdbap + spanclose + spanclose + spanouttwo + spaninr + sroutethreep + spanclose + spanclose + spanoutfive + spaninr + sparkthreep + spanclose + spanclose +  spanoutsix + spaninr + stimethreep + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreep + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreep + anchorclose + spanclose + spanint + sboardreighteenanchorr + sboardthreep + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +        mains +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                spanoutthree + spaninr + sbrandthreeq + spanclose + spanclose + spanoutfour + spaninrs + snumberthreeq + spanclose + spanclose + spanoutone + spaninr + cntdbaq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeq + spanclose + spanclose +  spanoutsix + spaninr + stimethreeq + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeq + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeq + anchorclose + spanclose + spanint + sboardrnineteenanchors + sboardthreeq + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +        maint +   routea + secondroute + stitleb +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +        loclose +            rightsloa +                spanoutthree + spaninr + sbrandthreer + spanclose + spanclose + spanoutfour + spaninrt + snumberthreer + spanclose + spanclose + spanoutone + spaninr + cntdbar + spanclose + spanclose + spanouttwo + spaninr + sroutethreer + spanclose + spanclose + spanoutfive + spaninr + sparkthreer + spanclose + spanclose +  spanoutsix + spaninr + stimethreer + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreer + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreer + anchorclose + spanclose + spanint + sboardrtwentyanchort + sboardthreer + anchorclose + spanclose + spanclose + spanclose +        loclose + mainclose +       mainu +   routeaamd + thirdroute + stitlec +  spanclose  + leftloaamd + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +          spanoutthree + spaninr + sbrandthrees + spanclose + spanclose + spanoutfour + spaninru + snumberthrees + spanclose + spanclose + spanoutone + spaninr + cntdbas + spanclose + spanclose + spanouttwo + spaninr + sroutethrees + spanclose + spanclose + spanoutfive + spaninr + sparkthrees + spanclose + spanclose +  spanoutsix + spaninr + stimethrees + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethrees + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethrees + anchorclose + spanclose + spanint + sboardrtwentyoneanchoru + sboardthrees + anchorclose + spanclose + spanclose + spanclose +           loclose + mainclose +       mainv +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +          spanoutthree + spaninr + sbrandthreet + spanclose + spanclose + spanoutfour + spaninrv + snumberthreet + spanclose + spanclose + spanoutone + spaninr + cntdbat + spanclose + spanclose + spanouttwo + spaninr + sroutethreet + spanclose + spanclose + spanoutfive + spaninr + sparkthreet + spanclose + spanclose +  spanoutsix + spaninr + stimethreet + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreet + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreet + anchorclose + spanclose + spanint + sboardrtwentytwoanchorv + sboardthreet + anchorclose + spanclose + spanclose + spanclose +               loclose + mainclose +       mainw +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                 spanoutthree + spaninr + sbrandthreeu + spanclose + spanclose + spanoutfour + spaninrw + snumberthreeu + spanclose + spanclose +  spanoutone + spaninr + cntdbau + spanclose + spanclose + spanouttwo + spaninr + sroutethreeu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeu + spanclose + spanclose +  spanoutsix + spaninr + stimethreeu + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeu + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeu + anchorclose + spanclose + spanint + sboardrtwentythreeanchorw + sboardthreeu + anchorclose + spanclose + spanclose + spanclose +                   loclose + mainclose +       mainx +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +              spanoutthree + spaninr + sbrandthreev + spanclose + spanclose + spanoutfour + spaninrx + snumberthreev + spanclose + spanclose + spanoutone + spaninr + cntdbav + spanclose + spanclose + spanouttwo + spaninr + sroutethreev + spanclose + spanclose + spanoutfive + spaninr + sparkthreev + spanclose + spanclose +  spanoutsix + spaninr + stimethreev + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreev + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreev + anchorclose + spanclose + spanint + sboardrtwentyfouranchorx + sboardthreev + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +       mainy +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                 spanoutthree + spaninr + sbrandthreew + spanclose + spanclose + spanoutfour + spaninry + snumberthreew + spanclose + spanclose + spanoutone + spaninr + cntdbaw + spanclose + spanclose + spanouttwo + spaninr + sroutethreew + spanclose + spanclose + spanoutfive + spaninr + sparkthreew + spanclose + spanclose +  spanoutsix + spaninr + stimethreew + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreew + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreew + anchorclose + spanclose + spanint + sboardrtwentyfiveanchory + sboardthreew + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +       mainz +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                spanoutthree + spaninr + sbrandthreex + spanclose + spanclose + spanoutfour + spaninrz + snumberthreex + spanclose + spanclose + spanoutone + spaninr + cntdbax + spanclose + spanclose + spanouttwo + spaninr + sroutethreex + spanclose + spanclose + spanoutfive + spaninr + sparkthreex + spanclose + spanclose +  spanoutsix + spaninr + stimethreex + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreex + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreex + anchorclose + spanclose + spanint + sboardrtwentysixanchorz + sboardthreex + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +       mainaa +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                spanoutthree + spaninr + sbrandthreey + spanclose + spanclose + spanoutfour + spaninraa + snumberthreey + spanclose + spanclose + spanoutone + spaninr + cntdbay + spanclose + spanclose + spanouttwo + spaninr + sroutethreey + spanclose + spanclose + spanoutfive + spaninr + sparkthreey + spanclose + spanclose +  spanoutsix + spaninr + stimethreey + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreey + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreey + anchorclose + spanclose + spanint + sboardrtwentysevenanchora + sboardthreey + anchorclose + spanclose + spanclose + spanclose +                  loclose + mainclose +       mainbb +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +               spanoutthree + spaninr + sbrandthreez + spanclose + spanclose + spanoutfour + spaninrbb + snumberthreez + spanclose + spanclose + spanoutone + spaninr + cntdbaz + spanclose + spanclose + spanouttwo + spaninr + sroutethreez + spanclose + spanclose + spanoutfive + spaninr + sparkthreez + spanclose + spanclose +  spanoutsix + spaninr + stimethreez + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreez + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreez + anchorclose + spanclose + spanint + sboardrtwentyeightanchorb + sboardthreez + anchorclose + spanclose + spanclose + spanclose +               loclose + mainclose +       maincc +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                  spanoutthree + spaninr + sbrandthreeaa + spanclose + spanclose + spanoutfour + spaninrcc + snumberthreeaa + spanclose + spanclose + spanoutone + spaninr + cntdbaaaa + spanclose + spanclose + spanouttwo + spaninr + sroutethreeaa + spanclose + spanclose + spanoutfive + spaninr + sparkthreeaa + spanclose + spanclose +  spanoutsix + spaninr + stimethreeaa + spanclose + spanclose + loclose + bottomsloa +    spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeaa + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeaa + anchorclose + spanclose + spanint + sboardrtwentynineanchorc + sboardthreeaa + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +       maindd +   routea + thirdroute + stitlec +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +     loclose + rightsloa +                 spanoutthree + spaninr + sbrandthreebb + spanclose + spanclose + spanoutfour + spaninrdd + snumberthreebb + spanclose + spanclose + spanoutone + spaninr + cntdbabb + spanclose + spanclose + spanouttwo + spaninr + sroutethreebb + spanclose + spanclose + spanoutfive + spaninr + sparkthreebb + spanclose + spanclose +  spanoutsix + spaninr + stimethreebb + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreebb + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreebb + anchorclose + spanclose + spanint + sboardrthirtyanchord + sboardthreebb + anchorclose + spanclose + spanclose + spanclose +              loclose + mainclose +          mainee  +      routeaamd + fourthroute + stitled +  spanclose  + leftloaamd + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +       spanoutthree + spaninr + sbrandthreecc + spanclose + spanclose + spanoutfour + spaninree + snumberthreecc + spanclose + spanclose + spanoutone + spaninr + cntdbacc + spanclose + spanclose + spanouttwo + spaninr + sroutethreecc + spanclose + spanclose + spanoutfive + spaninr + sparkthreecc + spanclose + spanclose +   spanoutsix + spaninr + stimethreecc + spanclose + spanclose +  loclose + bottomsloa + spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreecc + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreecc + anchorclose + spanclose + spanint + sboardrthirtyoneanchore + sboardthreecc + anchorclose + spanclose + spanclose + spanclose +             loclose + mainclose +          mainff  +      routea + fourthroute + stitled +  spanclose  + leftloa  + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +           spanoutthree + spaninr + sbrandthreedd + spanclose + spanclose + spanoutfour + spaninrff + snumberthreedd + spanclose + spanclose + spanoutone + spaninr + cntdbadd + spanclose + spanclose + spanouttwo + spaninr + sroutethreedd + spanclose + spanclose + spanoutfive + spaninr + sparkthreedd + spanclose + spanclose +  spanoutsix + spaninr + stimethreedd + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreedd + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreedd + anchorclose + spanclose + spanint + sboardrthirtytwoanchorf + sboardthreedd + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +          maingg  +      routea + fourthroute + stitled +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +               spanoutthree + spaninr + sbrandthreeee + spanclose + spanclose + spanoutfour + spaninrgg + snumberthreeee + spanclose + spanclose + spanoutone + spaninr + cntdbaee + spanclose + spanclose + spanouttwo + spaninr + sroutethreeee + spanclose + spanclose + spanoutfive + spaninr + sparkthreeee + spanclose + spanclose +  spanoutsix + spaninr + stimethreeee + spanclose + spanclose +   loclose + bottomsloa + spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeee + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeee + anchorclose + spanclose + spanint + sboardrthirtythreeanchorg + sboardthreeee + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +          mainhh  +      routea + fourthroute + stitled +  spanclose  + leftloa  + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +               spanoutthree + spaninr + sbrandthreeff + spanclose + spanclose + spanoutfour + spaninrhh + snumberthreeff + spanclose + spanclose + spanoutone + spaninr + cntdbaff + spanclose + spanclose + spanouttwo + spaninr + sroutethreeff + spanclose + spanclose + spanoutfive + spaninr + sparkthreeff + spanclose + spanclose +  spanoutsix + spaninr + stimethreeff + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeff + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeff + anchorclose + spanclose + spanint + sboardrthirtyfouranchorh + sboardthreeff + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +          mainii  +      routea + fourthroute + stitled +  spanclose  + leftloa  + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +               spanoutthree + spaninr + sbrandthreegg + spanclose + spanclose + spanoutfour + spaninrii + snumberthreegg + spanclose + spanclose + spanoutone + spaninr + cntdbagg + spanclose + spanclose + spanouttwo + spaninr + sroutethreegg + spanclose + spanclose + spanoutfive + spaninr + sparkthreegg + spanclose + spanclose +  spanoutsix + spaninr + stimethreegg + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreegg + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreegg + anchorclose + spanclose + spanint + sboardrthirtyfiveanchori + sboardthreegg + anchorclose + spanclose + spanclose + spanclose +                  loclose + mainclose +          mainjj  +      routea + fourthroute + stitled +  spanclose  + leftloa  + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +             spanoutthree + spaninr + sbrandthreehh + spanclose + spanclose + spanoutfour + spaninrjj + snumberthreehh + spanclose + spanclose + spanoutone + spaninr + cntdbahh + spanclose + spanclose + spanouttwo + spaninr + sroutethreehh + spanclose + spanclose + spanoutfive + spaninr + sparkthreehh + spanclose + spanclose +  spanoutsix + spaninr + stimethreehh + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreehh + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreehh + anchorclose + spanclose + spanint + sboardrthirtysixanchorj + sboardthreehh + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +          mainkk  +      routea + fourthroute + stitled +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +               spanoutthree + spaninr + sbrandthreeii + spanclose + spanclose + spanoutfour + spaninrkk + snumberthreeii + spanclose + spanclose + spanoutone + spaninr + cntdbaii + spanclose + spanclose + spanouttwo + spaninr + sroutethreeii + spanclose + spanclose + spanoutfive + spaninr + sparkthreeii + spanclose + spanclose +  spanoutsix + spaninr + stimethreeii + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeii + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeii + anchorclose + spanclose + spanint + sboardrthirtysevenanchork + sboardthreeii + anchorclose + spanclose + spanclose + spanclose +               loclose + mainclose +          mainll  +      routea + fourthroute + stitled +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +                spanoutthree + spaninr + sbrandthreejj + spanclose + spanclose + spanoutfour + spaninrll + snumberthreejj + spanclose + spanclose + spanoutone + spaninr + cntdbajj + spanclose + spanclose + spanouttwo + spaninr + sroutethreejj + spanclose + spanclose + spanoutfive + spaninr + sparkthreejj + spanclose + spanclose +  spanoutsix + spaninr + stimethreejj + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreejj + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreejj + anchorclose + spanclose + spanint + sboardrthirtyeightanchorl + sboardthreejj + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +          mainmm  +      routea + fourthroute + stitled +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +              spanoutthree + spaninr + sbrandthreekk + spanclose + spanclose + spanoutfour + spaninrmm + snumberthreekk + spanclose + spanclose + spanoutone + spaninr + cntdbakk + spanclose + spanclose + spanouttwo + spaninr + sroutethreekk + spanclose + spanclose + spanoutfive + spaninr + sparkthreekk + spanclose + spanclose +  spanoutsix + spaninr + stimethreekk + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreekk + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreekk + anchorclose + spanclose + spanint + sboardrthirtynineanchorm + sboardthreekk + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +          mainnn  +      routea + fourthroute + stitled +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + headingsevend + spanclose + spanclose + spanclose  + loclose  +  rightsloa       +              spanoutthree + spaninr + sbrandthreell + spanclose + spanclose + spanoutfour + spaninrnn + snumberthreell + spanclose + spanclose + spanoutone + spaninr + cntdball + spanclose + spanclose + spanouttwo + spaninr + sroutethreell + spanclose + spanclose + spanoutfive + spaninr + sparkthreell + spanclose + spanclose +  spanoutsix + spaninr + stimethreell + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreell + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreell + anchorclose + spanclose + spanint + sboardrfourtyanchorn + sboardthreell + anchorclose + spanclose + spanclose + spanclose +           loclose + mainclose +          mainoo  +        routeaamd + fifethroute + stitlee +  spanclose  + leftloaamd + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +     spanoutthree + spaninr + sbrandthreemm + spanclose + spanclose + spanoutfour + spaninroo + snumberthreemm + spanclose + spanclose + spanoutone + spaninr + cntdbamm + spanclose + spanclose + spanouttwo + spaninr + sroutethreemm + spanclose + spanclose + spanoutfive + spaninr + sparkthreemm + spanclose + spanclose +  spanoutsix + spaninr + stimethreemm + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreemm + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreemm + anchorclose + spanclose + spanint + sboardrfourtyoneanchoro + sboardthreemm + anchorclose + spanclose + spanclose + spanclose +                  loclose + mainclose +          mainpp  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +           spanoutthree + spaninr + sbrandthreenn + spanclose + spanclose + spanoutfour + spaninrpp + snumberthreenn + spanclose + spanclose + spanoutone + spaninr + cntdbann + spanclose + spanclose + spanouttwo + spaninr + sroutethreenn + spanclose + spanclose + spanoutfive + spaninr + sparkthreenn + spanclose + spanclose +  spanoutsix + spaninr + stimethreenn + spanclose + spanclose + loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreenn + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreenn + anchorclose + spanclose + spanint + sboardrfourtytwoanchorp + sboardthreenn + anchorclose + spanclose + spanclose + spanclose +             loclose + mainclose +          mainqq  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +     spanoutthree + spaninr + sbrandthreeoo + spanclose + spanclose + spanoutfour + spaninrqq + snumberthreeoo + spanclose + spanclose + spanoutone + spaninr + cntdbaoo + spanclose + spanclose + spanouttwo + spaninr + sroutethreeoo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeoo + spanclose + spanclose +  spanoutsix + spaninr + stimethreeoo + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeoo + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeoo + anchorclose + spanclose + spanint + sboardrfourtythreeanchorq + sboardthreeoo + anchorclose + spanclose + spanclose + spanclose +                        loclose + mainclose +          mainrr  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +     spanoutthree + spaninr + sbrandthreepp + spanclose + spanclose + spanoutfour + spaninrrr + snumberthreepp + spanclose + spanclose + spanoutone + spaninr + cntdbapp + spanclose + spanclose + spanouttwo + spaninr + sroutethreepp + spanclose + spanclose + spanoutfive + spaninr + sparkthreepp + spanclose + spanclose +  spanoutsix + spaninr + stimethreepp + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreepp + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreepp + anchorclose + spanclose + spanint + sboardrfourtyfouranchorr + sboardthreepp + anchorclose + spanclose + spanclose + spanclose +                        loclose + mainclose +          mainss  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +     spanoutthree + spaninr + sbrandthreeqq + spanclose + spanclose + spanoutfour + spaninrss + snumberthreeqq + spanclose + spanclose + spanoutone + spaninr + cntdbaqq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeqq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeqq + spanclose + spanclose +  spanoutsix + spaninr + stimethreeqq + spanclose + spanclose +  loclose + bottomsloa +  spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeqq + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeqq + anchorclose + spanclose + spanint + sboardrfourtyfiveanchors + sboardthreeqq + anchorclose + spanclose + spanclose + spanclose +                loclose + mainclose +          maintt  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +             spanoutthree + spaninr + sbrandthreerr + spanclose + spanclose + spanoutfour + spaninrtt + snumberthreerr + spanclose + spanclose + spanoutone + spaninr + cntdbarr + spanclose + spanclose + spanouttwo + spaninr + sroutethreerr + spanclose + spanclose + spanoutfive + spaninr + sparkthreerr + spanclose + spanclose +  spanoutsix + spaninr + stimethreerr + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreerr + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreerr + anchorclose + spanclose + spanint + sboardrfourtysixanchort + sboardthreerr + anchorclose + spanclose + spanclose + spanclose +                    loclose + mainclose +          mainuu  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +         spanoutthree + spaninr + sbrandthreess + spanclose + spanclose + spanoutfour + spaninruu + snumberthreess + spanclose + spanclose + spanoutone + spaninr + cntdbass + spanclose + spanclose + spanouttwo + spaninr + sroutethreess + spanclose + spanclose + spanoutfive + spaninr + sparkthreess + spanclose + spanclose +  spanoutsix + spaninr + stimethreess + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreess + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreess + anchorclose + spanclose + spanint + sboardrfourtysevenanchoru + sboardthreess + anchorclose + spanclose + spanclose + spanclose +                    loclose + mainclose +          mainvv  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +         spanoutthree + spaninr + sbrandthreett + spanclose + spanclose + spanoutfour + spaninrvv + snumberthreett + spanclose + spanclose + spanoutone + spaninr + cntdbatt + spanclose + spanclose + spanouttwo + spaninr + sroutethreett + spanclose + spanclose + spanoutfive + spaninr + sparkthreett + spanclose + spanclose +  spanoutsix + spaninr + stimethreett + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreett + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreett + anchorclose + spanclose + spanint + sboardrfourtyeightanchorv + sboardthreett + anchorclose + spanclose + spanclose + spanclose +                   loclose + mainclose +          mainww  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +          spanoutthree + spaninr + sbrandthreeuu + spanclose + spanclose + spanoutfour + spaninrww + snumberthreeuu + spanclose + spanclose + spanoutone + spaninr + cntdbauu + spanclose + spanclose + spanouttwo + spaninr + sroutethreeuu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeuu + spanclose + spanclose +  spanoutsix + spaninr + stimethreeuu + spanclose + spanclose + loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreeuu + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreeuu + anchorclose + spanclose + spanint + sboardrfourtynineanchorw + sboardthreeuu + anchorclose + spanclose + spanclose + spanclose +                 loclose + mainclose +          mainxx  +        routea + fifethroute + stitlee +  spanclose  + leftloa + spanoutthree + spanina + titlespan + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespan + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +      loclose  + rightsloa    +            spanoutthree + spaninr + sbrandthreevv + spanclose + spanclose + spanoutfour + spaninrxx + snumberthreevv + spanclose + spanclose + spanoutone + spaninr + cntdbavv + spanclose + spanclose + spanouttwo + spaninr + sroutethreevv + spanclose + spanclose + spanoutfive + spaninr + sparkthreevv + spanclose + spanclose +  spanoutsix + spaninr + stimethreevv + spanclose + spanclose +  loclose + bottomsloa +   spanouteight + spaninr + spanink +  abopn + anka + spc + hreef + equol + lrsqm + psroutethreevv + lrsqm + spc + aidi + equol + lrsqm + calllinkid + lrsqm + abclsn + smovethreevv + anchorclose + spanclose + spanint + sboardrfifetyanchorx + sboardthreevv + anchorclose + spanclose + spanclose + spanclose +    loclose + mainclose +     formclose + "</body>" + "</html>";

 
let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "componed.html";
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
	res.send("<div style='text-align: center; color:green;'>Destiny Buses Status Updated Successfully!<br/><a href='http://localhost:3000/users/dashboards/componedb' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div> ");
};

});

module.exports = router
