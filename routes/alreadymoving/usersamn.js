
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
router.get("/dashboards/componedbn", (req, res) => {

	res.render("users/dashboards/componedbn");

});

router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var bee = "jon";
var few = "sam";
/*Company One*/
/*//Already Moving Buses Memory //*/
var amcompname = req.body.amcompname;  
var firstroute = req.body.aroutea;
var secondroute = req.body.aroutee;
var thirdroute = req.body.aroutei;
var fourthroute = req.body.arouteo;
var fifethroute = req.body.arouteu;

var stimeone = req.body.stimeonea;
var srouteone = req.body.srouteonea;
var sbrandone = req.body.sbrandonea;
var snumberone = req.body.snumberonea;
var slocationone = req.body.slocationonea;
var sparkone = req.body.sparkonea;
var smoveone = req.body.smoveonea;
var cntdbaaa = req.body.cntdbaaa;
var sboardone = req.body.sboardonea;

var stimetwo = req.body.stimetwob;
var sroutetwo = req.body.sroutetwob;
var sbrandtwo = req.body.sbrandtwob;
var snumbertwo = req.body.snumbertwob;
var slocationtwo = req.body.slocationtwob;
var sparktwo = req.body.sparktwob;
var spnotwo = req.body.spnotwob;
var smovetwo = req.body.smovetwob;
var cntdbaab = req.body.cntdbaab;
var sboardtwo = req.body.sboardtwob;

var stimethree = req.body.stimethreea;
var sroutethree = req.body.sroutethreea;
var sbrandthree = req.body.sbrandthreea;
var snumberthree = req.body.snumberthreea;
var slocationthree = req.body.slocationthreea;
var sparkthree = req.body.sparkthreea;
var spnothree = req.body.spnothreea;
var smovethree = req.body.smovethreea;
var cntdbaa = req.body.cntdbaa;
var sboardthree = req.body.sboardthreea;

var stimethreeb = req.body.stimethreeb;
var sroutethreeb = req.body.sroutethreeb;
var sbrandthreeb = req.body.sbrandthreeb;
var snumberthreeb = req.body.snumberthreeb;
var slocationthreeb = req.body.slocationthreeb;
var sparkthreeb = req.body.sparkthreeb;
var spnothreeb = req.body.spnothreeb;
var smovethreeb = req.body.smovethreeb;
var cntdbab = req.body.cntdbab;
var sboardthreeb = req.body.sboardthreeb;

var stimethreec = req.body.stimethreec;
var sroutethreec = req.body.sroutethreec;
var sbrandthreec = req.body.sbrandthreec;
var snumberthreec = req.body.snumberthreec;
var slocationthreec = req.body.slocationthreec;
var sparkthreec = req.body.sparkthreec;
var spnothreec = req.body.spnothreec;
var smovethreec = req.body.smovethreec;
var cntdbac = req.body.cntdbac;
var sboardthreec = req.body.sboardthreec;

var stimethreed = req.body.stimethreed;
var sroutethreed = req.body.sroutethreed;
var sbrandthreed = req.body.sbrandthreed;
var snumberthreed = req.body.snumberthreed;
var slocationthreed = req.body.slocationthreed;
var sparkthreed = req.body.sparkthreed;
var spnothreed = req.body.spnothreed;
var smovethreed = req.body.smovethreed;
var cntdbad = req.body.cntdbad;
var sboardthreed = req.body.sboardthreed;

var stimethreee = req.body.stimethreee;
var sroutethreee = req.body.sroutethreee;
var sbrandthreee = req.body.sbrandthreee;
var snumberthreee = req.body.snumberthreee;
var slocationthreee = req.body.slocationthreee;
var sparkthreee = req.body.sparkthreee;
var spnothreee = req.body.spnothreee;
var smovethreee = req.body.smovethreee;
var cntdbae = req.body.cntdbae;
var sboardthreee = req.body.sboardthreee;

var stimethreef = req.body.stimethreef;
var sroutethreef = req.body.sroutethreef;
var sbrandthreef = req.body.sbrandthreef;
var snumberthreef = req.body.snumberthreef;
var slocationthreef = req.body.slocationthreef;
var sparkthreef = req.body.sparkthreef;
var spnothreef = req.body.spnothreef;
var smovethreef = req.body.smovethreef;
var cntdbaf = req.body.cntdbaf;
var sboardthreef = req.body.sboardthreef;

var stimethreeg = req.body.stimethreeg;
var sroutethreeg = req.body.sroutethreeg;
var sbrandthreeg = req.body.sbrandthreeg;
var snumberthreeg = req.body.snumberthreeg;
var slocationthreeg = req.body.slocationthreeg;
var sparkthreeg = req.body.sparkthreeg;
var spnothreeg = req.body.spnothreeg;
var smovethreeg = req.body.smovethreeg;
var cntdbag = req.body.cntdbag;
var sboardthreeg = req.body.sboardthreeg;

var stimethreeh = req.body.stimethreeh;
var sroutethreeh = req.body.sroutethreeh;
var sbrandthreeh = req.body.sbrandthreeh;
var snumberthreeh = req.body.snumberthreeh;
var slocationthreeh = req.body.slocationthreeh;
var sparkthreeh = req.body.sparkthreeh;
var spnothreeh = req.body.spnothreeh;
var smovethreeh = req.body.smovethreeh;
var cntdbah = req.body.cntdbah;
var sboardthreeh = req.body.sboardthreeh;

var stimethreei = req.body.stimethreei;
var sroutethreei = req.body.sroutethreei;
var sbrandthreei = req.body.sbrandthreei;
var snumberthreei = req.body.snumberthreei;
var slocationthreei = req.body.slocationthreei;
var sparkthreei = req.body.sparkthreei;
var spnothreei = req.body.spnothreei;
var smovethreei = req.body.smovethreei;
var cntdbai = req.body.cntdbai;
var sboardthreei = req.body.sboardthreei;

var stimethreej = req.body.stimethreej;
var sroutethreej = req.body.sroutethreej;
var sbrandthreej = req.body.sbrandthreej;
var snumberthreej = req.body.snumberthreej;
var slocationthreej = req.body.slocationthreej;
var sparkthreej = req.body.sparkthreej;
var spnothreej = req.body.spnothreej;
var smovethreej = req.body.smovethreej;
var cntdbaj = req.body.cntdbaj;
var sboardthreej = req.body.sboardthreej;

var stimethreek = req.body.stimethreek;
var sroutethreek = req.body.sroutethreek;
var sbrandthreek = req.body.sbrandthreek;
var snumberthreek = req.body.snumberthreek;
var slocationthreek = req.body.slocationthreek;
var sparkthreek = req.body.sparkthreek;
var spnothreek = req.body.spnothreek;
var smovethreek = req.body.smovethreek;
var cntdbak = req.body.cntdbak;
var sboardthreek = req.body.sboardthreek;

var stimethreel = req.body.stimethreel;
var sroutethreel = req.body.sroutethreel;
var sbrandthreel = req.body.sbrandthreel;
var snumberthreel = req.body.snumberthreel;
var slocationthreel = req.body.slocationthreel;
var sparkthreel = req.body.sparkthreel;
var spnothreel = req.body.spnothreel;
var smovethreel = req.body.smovethreel;
var cntdbal = req.body.cntdbal;
var sboardthreel = req.body.sboardthreel;

var stimethreem = req.body.stimethreem;
var sroutethreem = req.body.sroutethreem;
var sbrandthreem = req.body.sbrandthreem;
var snumberthreem = req.body.snumberthreem;
var slocationthreem = req.body.slocationthreem;
var sparkthreem = req.body.sparkthreem;
var spnothreem = req.body.spnothreem;
var smovethreem = req.body.smovethreem;
var cntdbam = req.body.cntdbam;
var sboardthreem = req.body.sboardthreem;

var stimethreen = req.body.stimethreen;
var sroutethreen = req.body.sroutethreen;
var sbrandthreen = req.body.sbrandthreen;
var snumberthreen = req.body.snumberthreen;
var slocationthreen = req.body.slocationthreen;
var sparkthreen = req.body.sparkthreen;
var spnothreen = req.body.spnothreen;
var smovethreen = req.body.smovethreen;
var cntdban = req.body.cntdban;
var sboardthreen = req.body.sboardthreen;

var stimethreeo = req.body.stimethreeo;
var sroutethreeo = req.body.sroutethreeo;
var sbrandthreeo = req.body.sbrandthreeo;
var snumberthreeo = req.body.snumberthreeo;
var slocationthreeo = req.body.slocationthreeo;
var sparkthreeo = req.body.sparkthreeo;
var spnothreeo = req.body.spnothreeo;
var smovethreeo = req.body.smovethreeo;
var cntdbao = req.body.cntdbao;
var sboardthreeo = req.body.sboardthreeo;

var stimethreep = req.body.stimethreep;
var sroutethreep = req.body.sroutethreep;
var sbrandthreep = req.body.sbrandthreep;
var snumberthreep = req.body.snumberthreep;
var slocationthreep = req.body.slocationthreep;
var sparkthreep = req.body.sparkthreep;
var spnothreep = req.body.spnothreep;
var smovethreep = req.body.smovethreep;
var cntdbap = req.body.cntdbap;
var sboardthreep = req.body.sboardthreep;

var stimethreeq = req.body.stimethreeq;
var sroutethreeq = req.body.sroutethreeq;
var sbrandthreeq = req.body.sbrandthreeq;
var snumberthreeq = req.body.snumberthreeq;
var slocationthreeq = req.body.slocationthreeq;
var sparkthreeq = req.body.sparkthreeq;
var spnothreeq = req.body.spnothreeq;
var smovethreeq = req.body.smovethreeq;
var cntdbaq = req.body.cntdbaq;
var sboardthreeq = req.body.sboardthreeq;

var stimethreer = req.body.stimethreer;
var sroutethreer = req.body.sroutethreer;
var sbrandthreer = req.body.sbrandthreer;
var snumberthreer = req.body.snumberthreer;
var slocationthreer = req.body.slocationthreer;
var sparkthreer = req.body.sparkthreer;
var spnothreer = req.body.spnothreer;
var smovethreer = req.body.smovethreer;
var cntdbar = req.body.cntdbar;
var sboardthreer = req.body.sboardthreer;

var stimethrees = req.body.stimethrees;
var sroutethrees = req.body.sroutethrees;
var sbrandthrees = req.body.sbrandthrees;
var snumberthrees = req.body.snumberthrees;
var slocationthrees = req.body.slocationthrees;
var sparkthrees = req.body.sparkthrees;
var spnothrees = req.body.spnothrees;
var smovethrees = req.body.smovethrees;
var cntdbas = req.body.cntdbas;
var sboardthrees = req.body.sboardthrees;

var stimethreet = req.body.stimethreet;
var sroutethreet = req.body.sroutethreet;
var sbrandthreet = req.body.sbrandthreet;
var snumberthreet = req.body.snumberthreet;
var slocationthreet = req.body.slocationthreet;
var sparkthreet = req.body.sparkthreet;
var spnothreet = req.body.spnothreet;
var smovethreet = req.body.smovethreet;
var cntdbat = req.body.cntdbat;
var sboardthreet = req.body.sboardthreet;

var stimethreeu = req.body.stimethreeu;
var sroutethreeu = req.body.sroutethreeu;
var sbrandthreeu = req.body.sbrandthreeu;
var snumberthreeu = req.body.snumberthreeu;
var slocationthreeu = req.body.slocationthreeu;
var sparkthreeu = req.body.sparkthreeu;
var spnothreeu = req.body.spnothreeu;
var smovethreeu = req.body.smovethreeu;
var cntdbau = req.body.cntdbau;
var sboardthreeu = req.body.sboardthreeu;

var stimethreev = req.body.stimethreev;
var sroutethreev = req.body.sroutethreev;
var sbrandthreev = req.body.sbrandthreev;
var snumberthreev = req.body.snumberthreev;
var slocationthreev = req.body.slocationthreev;
var sparkthreev = req.body.sparkthreev;
var spnothreev = req.body.spnothreev;
var smovethreev = req.body.smovethreev;
var cntdbav = req.body.cntdbav;
var sboardthreev = req.body.sboardthreev;

var stimethreew = req.body.stimethreew;
var sroutethreew = req.body.sroutethreew;
var sbrandthreew = req.body.sbrandthreew;
var snumberthreew = req.body.snumberthreew;
var slocationthreew = req.body.slocationthreew;
var sparkthreew = req.body.sparkthreew;
var spnothreew = req.body.spnothreew;
var smovethreew = req.body.smovethreew;
var cntdbaw = req.body.cntdbaw;
var sboardthreew = req.body.sboardthreew;

var stimethreex = req.body.stimethreex;
var sroutethreex = req.body.sroutethreex;
var sbrandthreex = req.body.sbrandthreex;
var snumberthreex = req.body.snumberthreex;
var slocationthreex = req.body.slocationthreex;
var sparkthreex = req.body.sparkthreex;
var spnothreex = req.body.spnothreex;
var smovethreex = req.body.smovethreex;
var cntdbax = req.body.cntdbax;
var sboardthreex = req.body.sboardthreex;

var stimethreey = req.body.stimethreey;
var sroutethreey = req.body.sroutethreey;
var sbrandthreey = req.body.sbrandthreey;
var snumberthreey = req.body.snumberthreey;
var slocationthreey = req.body.slocationthreey;
var sparkthreey = req.body.sparkthreey;
var spnothreey = req.body.spnothreey;
var smovethreey = req.body.smovethreey;
var cntdbay = req.body.cntdbay;
var sboardthreey = req.body.sboardthreey;

var stimethreez = req.body.stimethreez;
var sroutethreez = req.body.sroutethreez;
var sbrandthreez = req.body.sbrandthreez;
var snumberthreez = req.body.snumberthreez;
var slocationthreez = req.body.slocationthreez;
var sparkthreez = req.body.sparkthreez;
var spnothreez = req.body.spnothreez;
var smovethreez = req.body.smovethreez;
var cntdbaz = req.body.cntdbaz;
var sboardthreez = req.body.sboardthreez;

var stimethreeaa = req.body.stimethreeaa;
var sroutethreeaa = req.body.sroutethreeaa;
var sbrandthreeaa = req.body.sbrandthreeaa;
var snumberthreeaa = req.body.snumberthreeaa;
var slocationthreeaa = req.body.slocationthreeaa;
var sparkthreeaa = req.body.sparkthreeaa;
var spnothreeaa = req.body.spnothreeaa;
var smovethreeaa = req.body.smovethreeaa;
var cntdbaaaa = req.body.cntdbaaaa;
var sboardthreeaa = req.body.sboardthreeaa;

var stimethreebb = req.body.stimethreebb;
var sroutethreebb = req.body.sroutethreebb;
var sbrandthreebb = req.body.sbrandthreebb;
var snumberthreebb = req.body.snumberthreebb;
var slocationthreebb = req.body.slocationthreebb;
var sparkthreebb = req.body.sparkthreebb;
var spnothreebb = req.body.spnothreebb;
var smovethreebb = req.body.smovethreebb;
var cntdbabb = req.body.cntdbabb;
var sboardthreebb = req.body.sboardthreebb;

var stimethreecc = req.body.stimethreecc;
var sroutethreecc = req.body.sroutethreecc;
var sbrandthreecc = req.body.sbrandthreecc;
var snumberthreecc = req.body.snumberthreecc;
var slocationthreecc = req.body.slocationthreecc;
var sparkthreecc = req.body.sparkthreecc;
var spnothreecc = req.body.spnothreecc;
var smovethreecc = req.body.smovethreecc;
var cntdbacc = req.body.cntdbacc;
var sboardthreecc = req.body.sboardthreecc;

var stimethreedd = req.body.stimethreedd;
var sroutethreedd = req.body.sroutethreedd;
var sbrandthreedd = req.body.sbrandthreedd;
var snumberthreedd = req.body.snumberthreedd;
var slocationthreedd = req.body.slocationthreedd;
var sparkthreedd = req.body.sparkthreedd;
var spnothreedd = req.body.spnothreedd;
var smovethreedd = req.body.smovethreedd;
var cntdbadd = req.body.cntdbadd;
var sboardthreedd = req.body.sboardthreedd;

var stimethreeee = req.body.stimethreeee;
var sroutethreeee = req.body.sroutethreeee;
var sbrandthreeee = req.body.sbrandthreeee;
var snumberthreeee = req.body.snumberthreeee;
var slocationthreeee = req.body.slocationthreeee;
var sparkthreeee = req.body.sparkthreeee;
var spnothreeee = req.body.spnothreeee;
var smovethreeee = req.body.smovethreeee;
var cntdbaee = req.body.cntdbaee;
var sboardthreeee = req.body.sboardthreeee;

var stimethreeff = req.body.stimethreeff;
var sroutethreeff = req.body.sroutethreeff;
var sbrandthreeff = req.body.sbrandthreeff;
var snumberthreeff = req.body.snumberthreeff;
var slocationthreeff = req.body.slocationthreeff;
var sparkthreeff = req.body.sparkthreeff;
var spnothreeff = req.body.spnothreeff;
var smovethreeff = req.body.smovethreeff;
var cntdbaff = req.body.cntdbaff;
var sboardthreeff = req.body.sboardthreeff;

var stimethreegg = req.body.stimethreegg;
var sroutethreegg = req.body.sroutethreegg;
var sbrandthreegg = req.body.sbrandthreegg;
var snumberthreegg = req.body.snumberthreegg;
var slocationthreegg = req.body.slocationthreegg;
var sparkthreegg = req.body.sparkthreegg;
var spnothreegg = req.body.spnothreegg;
var smovethreegg = req.body.smovethreegg;
var cntdbagg = req.body.cntdbagg;
var sboardthreegg = req.body.sboardthreegg;

var stimethreehh = req.body.stimethreehh;
var sroutethreehh = req.body.sroutethreehh;
var sbrandthreehh = req.body.sbrandthreehh;
var snumberthreehh = req.body.snumberthreehh;
var slocationthreehh = req.body.slocationthreehh;
var sparkthreehh = req.body.sparkthreehh;
var spnothreehh = req.body.spnothreehh;
var smovethreehh = req.body.smovethreehh;
var cntdbahh = req.body.cntdbahh;
var sboardthreehh = req.body.sboardthreehh;

var stimethreeii = req.body.stimethreeii;
var sroutethreeii = req.body.sroutethreeii;
var sbrandthreeii = req.body.sbrandthreeii;
var snumberthreeii = req.body.snumberthreeii;
var slocationthreeii = req.body.slocationthreeii;
var sparkthreeii = req.body.sparkthreeii;
var spnothreeii = req.body.spnothreeii;
var smovethreeii = req.body.smovethreeii;
var cntdbaii = req.body.cntdbaii;
var sboardthreeii = req.body.sboardthreeii;

var stimethreejj = req.body.stimethreejj;
var sroutethreejj = req.body.sroutethreejj;
var sbrandthreejj = req.body.sbrandthreejj;
var snumberthreejj = req.body.snumberthreejj;
var slocationthreejj = req.body.slocationthreejj;
var sparkthreejj = req.body.sparkthreejj;
var spnothreejj = req.body.spnothreejj;
var smovethreejj = req.body.smovethreejj;
var cntdbajj = req.body.cntdbajj;
var sboardthreejj = req.body.sboardthreejj;

var stimethreekk = req.body.stimethreekk;
var sroutethreekk = req.body.sroutethreekk;
var sbrandthreekk = req.body.sbrandthreekk;
var snumberthreekk = req.body.snumberthreekk;
var slocationthreekk = req.body.slocationthreekk;
var sparkthreekk = req.body.sparkthreekk;
var spnothreekk = req.body.spnothreekk;
var smovethreekk = req.body.smovethreekk;
var cntdbakk = req.body.cntdbakk;
var sboardthreekk = req.body.sboardthreekk;

var stimethreell = req.body.stimethreell;
var sroutethreell = req.body.sroutethreell;
var sbrandthreell = req.body.sbrandthreell;
var snumberthreell = req.body.snumberthreell;
var slocationthreell = req.body.slocationthreell;
var sparkthreell = req.body.sparkthreell;
var spnothreell = req.body.spnothreell;
var smovethreell = req.body.smovethreell;
var cntdball = req.body.cntdball;
var sboardthreell = req.body.sboardthreell;

var stimethreemm = req.body.stimethreemm;
var sroutethreemm = req.body.sroutethreemm;
var sbrandthreemm = req.body.sbrandthreemm;
var snumberthreemm = req.body.snumberthreemm;
var slocationthreemm = req.body.slocationthreemm;
var sparkthreemm = req.body.sparkthreemm;
var spnothreemm = req.body.spnothreemm;
var smovethreemm = req.body.smovethreemm;
var cntdbamm = req.body.cntdbamm;
var sboardthreemm = req.body.sboardthreemm;

var stimethreenn = req.body.stimethreenn;
var sroutethreenn = req.body.sroutethreenn;
var sbrandthreenn = req.body.sbrandthreenn;
var snumberthreenn = req.body.snumberthreenn;
var slocationthreenn = req.body.slocationthreenn;
var sparkthreenn = req.body.sparkthreenn;
var spnothreenn = req.body.spnothreenn;
var smovethreenn = req.body.smovethreenn;
var cntdbann = req.body.cntdbann;
var sboardthreenn = req.body.sboardthreenn;

var stimethreeoo = req.body.stimethreeoo;
var sroutethreeoo = req.body.sroutethreeoo;
var sbrandthreeoo = req.body.sbrandthreeoo;
var snumberthreeoo = req.body.snumberthreeoo;
var slocationthreeoo = req.body.slocationthreeoo;
var sparkthreeoo = req.body.sparkthreeoo;
var spnothreeoo = req.body.spnothreeoo;
var smovethreeoo = req.body.smovethreeoo;
var cntdbaoo = req.body.cntdbaoo;
var sboardthreeoo = req.body.sboardthreeoo;

var stimethreepp = req.body.stimethreepp;
var sroutethreepp = req.body.sroutethreepp;
var sbrandthreepp = req.body.sbrandthreepp;
var snumberthreepp = req.body.snumberthreepp;
var slocationthreepp = req.body.slocationthreepp;
var sparkthreepp = req.body.sparkthreepp;
var spnothreepp = req.body.spnothreepp;
var smovethreepp = req.body.smovethreepp;
var cntdbapp = req.body.cntdbapp;
var sboardthreepp = req.body.sboardthreepp;

var stimethreeqq = req.body.stimethreeqq;
var sroutethreeqq = req.body.sroutethreeqq;
var sbrandthreeqq = req.body.sbrandthreeqq;
var snumberthreeqq = req.body.snumberthreeqq;
var slocationthreeqq = req.body.slocationthreeqq;
var sparkthreeqq = req.body.sparkthreeqq;
var spnothreeqq = req.body.spnothreeqq;
var smovethreeqq = req.body.smovethreeqq;
var cntdbaqq = req.body.cntdbaqq;
var sboardthreeqq = req.body.sboardthreeqq;

var stimethreerr = req.body.stimethreerr;
var sroutethreerr = req.body.sroutethreerr;
var sbrandthreerr = req.body.sbrandthreerr;
var snumberthreerr = req.body.snumberthreerr;
var slocationthreerr = req.body.slocationthreerr;
var sparkthreerr = req.body.sparkthreerr;
var spnothreerr = req.body.spnothreerr;
var smovethreerr = req.body.smovethreerr;
var cntdbarr = req.body.cntdbarr;
var sboardthreerr = req.body.sboardthreerr;

var stimethreess = req.body.stimethreess;
var sroutethreess = req.body.sroutethreess;
var sbrandthreess = req.body.sbrandthreess;
var snumberthreess = req.body.snumberthreess;
var slocationthreess = req.body.slocationthreess;
var sparkthreess = req.body.sparkthreess;
var spnothreess = req.body.spnothreess;
var smovethreess = req.body.smovethreess;
var cntdbass = req.body.cntdbass;
var sboardthreess = req.body.sboardthreess;

var stimethreett = req.body.stimethreett;
var sroutethreett = req.body.sroutethreett;
var sbrandthreett = req.body.sbrandthreett;
var snumberthreett = req.body.snumberthreett;
var slocationthreett = req.body.slocationthreett;
var sparkthreett = req.body.sparkthreett;
var spnothreett = req.body.spnothreett;
var smovethreett = req.body.smovethreett;
var cntdbatt = req.body.cntdbatt;
var sboardthreett = req.body.sboardthreett;

var stimethreeuu = req.body.stimethreeuu;
var sroutethreeuu = req.body.sroutethreeuu;
var sbrandthreeuu = req.body.sbrandthreeuu;
var snumberthreeuu = req.body.snumberthreeuu;
var slocationthreeuu = req.body.slocationthreeuu;
var sparkthreeuu = req.body.sparkthreeuu;
var spnothreeuu = req.body.spnothreeuu;
var smovethreeuu = req.body.smovethreeuu;
var cntdbauu = req.body.cntdbauu;
var sboardthreeuu = req.body.sboardthreeuu;

var stimethreevv = req.body.stimethreevv;
var sroutethreevv = req.body.sroutethreevv;
var sbrandthreevv = req.body.sbrandthreevv;
var snumberthreevv = req.body.snumberthreevv;
var slocationthreevv = req.body.slocationthreevv;
var sparkthreevv = req.body.sparkthreevv;
var spnothreevv = req.body.spnothreevv;
var smovethreevv = req.body.smovethreevv;
var cntdbavv = req.body.cntdbavv;
var sboardthreevv = req.body.sboardthreevv;

//compones out put structure;

var formopen = "<form name='major' id='majorfam' class='majoram' style='width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background-color:  !important;'>";
var formclose = "</form>";
var routeaamd = "<span class='routeaamd' id='routeaamd' style='width: auto; background-color: green; padding: 5px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both;'>";
var routea = "<span class='routea' id='routea' style='width: auto; background-color: green; padding: 5px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both;'>";
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
var spanoutone = "<span id='spanroneoutone' style='width: 15%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanouttwo = "<span id='spanroneouttwo' style='width: 17%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutthree = "<span id='spanroneoutthree' style='width: 20%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: left; display:'>";
var spanoutfour = "<span id='spanroneoutfour' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanoutfive = "<span id='spanroneoutfive' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: block;'>";
var spanouteight = "<span id='spanroneouteight' style='width: 16%; height: auto; margin: 0; padding: 0; border: none; float: right; clear: right; display: inline-block; block; background-color: ; text-align: center;'>";

var spanina = "<span id='spanina' style='width: auto; height: auto; padding: 8px 4px; margin: 0px 0 4px 0; display: block; background-color: pink; text-align: left;'>";
var spanine = "<span id='spanine' style='width: auto; height: auto; padding: 8px 2% 8px 16%; margin: 0px 0 2% 0; display: block; background-color: pink; text-align: left;'>";
var spanin = "<span id='spanin' style='width: auto; height: auto; padding:4px  0px; margin: 4px auto; display: block; background-color: ;'>";
var spaninrcmp = "<span id='spaninrcmp' class='spaninrcmp' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: inline-block;'>";
var spaninr = "<span id='spaninr' style='width: auto; height: auto; padding: 4px 0; margin: 4px auto; display: block;'>";
var spanink = "<span id='spanink' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: left; clear: left; text-align: right; background-color: ;'>";
var spanint = "<span id='spanint' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: right; clear: right; background-color: ;'>";
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


//track anchors
var sboardroneanchor = "<a href='../../schedules/public/trackinfon/tracka.html' name='sboardone' id='sboardone' style='height: auto; width: auto; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block; transform: translate(0%,0);'>";

var sboardrtwoanchor = "<a href='../../schedules/public/trackinfon/trackb.html' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthreeanchor = "<a href='../../schedules/public/trackinfon/trackc.html' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfouranchor = "<a href='../../schedules/public/trackinfon/trackd.html' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfiveanchor = "<a href='../../schedules/public/trackinfon/tracke.html' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixanchor = "<a href='../../schedules/public/trackinfon/trackf.html' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsevenanchor = "<a href='../../schedules/public/trackinfon/trackg.html' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreightanchor = "<a href='../../schedules/public/trackinfon/trackh.html' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineanchor = "<a href='../../schedules/public/trackinfon/tracki.html' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtenanchor = "<a href='../../schedules/public/trackinfon/trackj.html' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrelevenanchor = "<a href='../../schedules/public/trackinfon/trackk.html' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwelveanchor = "<a href='../../schedules/public/trackinfon/trackl.html' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirteenanchor = "<a href='../../schedules/public/trackinfon/trackm.html' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourteenanchor = "<a href='../../schedules/public/trackinfon/trackn.html' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifeteenanchor = "<a href='../../schedules/public/trackinfon/tracko.html' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixteenanchor = "<a href='../../schedules/public/trackinfon/trackp.html' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrseventeenanchor = "<a href='../../schedules/public/trackinfon/trackq.html' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreighteenanchor = "<a href='../../schedules/public/trackinfon/trackr.html' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineteenanchor = "<a href='../../schedules/public/trackinfon/tracks.html' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyanchor = "<a href='../../schedules/public/trackinfon/trackt.html' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyoneanchor = "<a href='../../schedules/public/trackinfon/tracku.html' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentytwoanchor = "<a href='../../schedules/public/trackinfon/trackv.html' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentythreeanchor = "<a href='../../schedules/public/trackinfon/trackw.html' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfouranchor = "<a href='../../schedules/public/trackinfon/trackx.html' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfiveanchor = "<a href='../../schedules/public/trackinfon/tracky.html' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysixanchor = "<a href='../../schedules/public/trackinfon/trackz.html' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysevenanchor = "<a href='../../schedules/public/trackinfon/trackaa.html' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyeightanchor = "<a href='../../schedules/public/trackinfon/trackbb.html' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentynineanchor = "<a href='../../schedules/public/trackinfon/trackcc.html' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyanchor = "<a href='../../schedules/public/trackinfon/trackdd.html' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyoneanchor = "<a href='../../schedules/public/trackinfon/trackee.html' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtytwoanchor = "<a href='../../schedules/public/trackinfon/trackff.html' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtythreeanchor = "<a href='../../schedules/public/trackinfon/trackgg.html' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfouranchor = "<a href='../../schedules/public/trackinfon/trackhh.html' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfiveanchor = "<a href='../../schedules/public/trackinfon/trackii.html' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysixanchor = "<a href='../../schedules/public/trackinfon/trackjj.html' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysevenanchor = "<a href='../../schedules/public/trackinfon/trackkk.html' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyeightanchor = "<a href='../../schedules/public/trackinfon/trackll.html' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtynineanchor = "<a href='../../schedules/public/trackinfon/trackmm.html' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyanchor = "<a href='../../schedules/public/trackinfon/tracknn.html' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyoneanchor = "<a href='../../schedules/public/trackinfon/trackoo.html' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtytwoanchor = "<a href='../../schedules/public/trackinfon/trackpp.html' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtythreeanchor = "<a href='../../schedules/public/trackinfon/trackqq.html' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfouranchor = "<a href='../../schedules/public/trackinfon/trackrr.html' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfiveanchor = "<a href='../../schedules/public/trackinfon/trackss.html' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysixanchor = "<a href='../../schedules/public/trackinfon/tracktt.html' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysevenanchor = "<a href='../../schedules/public/trackinfon/trackuu.html' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyeightanchor = "<a href='../../schedules/public/trackinfon/trackvv.html' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtynineanchor = "<a href='../../schedules/public/trackinfon/trackww.html' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifetyanchor = "<a href='../../schedules/public/trackinfon/trackxx.html' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";


//board anchors
var sboardroneanchora = "<a href='../../ccharges/public/componeccn.html' name='sboardone' id='sboardone' style='height: auto; width: auto; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;'>";

var sboardrtwoanchorb = "<a href='../../ccharges/public/componeccn.html' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthreeanchorc = "<a href='../../ccharges/public/componeccn.html' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfouranchord = "<a href='../../ccharges/public/componeccn.html' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfiveanchore = "<a href='../../ccharges/public/componeccn.html' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixanchorf = "<a href='../../ccharges/public/componeccn.html' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsevenanchorg = "<a href='../../ccharges/public/componeccn.html' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreightanchorh = "<a href='../../ccharges/public/componeccn.html' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineanchori = "<a href='../../ccharges/public/componeccn.html' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtenanchorj = "<a href='../../ccharges/public/componeccn.html' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrelevenanchork = "<a href='../../ccharges/public/componeccn.html' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwelveanchorl = "<a href='../../ccharges/public/componeccn.html' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirteenanchorm = "<a href='../../ccharges/public/componeccn.html' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourteenanchorn = "<a href='../../ccharges/public/componeccn.html' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifeteenanchoro = "<a href='../../ccharges/public/componeccn.html' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixteenanchorp = "<a href='../../ccharges/public/componeccn.html' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrseventeenanchorq = "<a href='../../ccharges/public/componeccn.html' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreighteenanchorr = "<a href='../../ccharges/public/componeccn.html' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineteenanchors = "<a href='../../ccharges/public/componeccn.html' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyanchort = "<a href='../../ccharges/public/componeccn.html' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyoneanchoru = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentytwoanchorv = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentythreeanchorw = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfouranchorx = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfiveanchory = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysixanchorz = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysevenanchora = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyeightanchorb = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentynineanchorc = "<a href='../../ccharges/public/componeccn.html' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyanchord = "<a href='../../ccharges/public/componeccn.html' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyoneanchore = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtytwoanchorf = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtythreeanchorg = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfouranchorh = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfiveanchori = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysixanchorj = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysevenanchork = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyeightanchorl = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtynineanchorm = "<a href='../../ccharges/public/componeccn.html' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyanchorn = "<a href='../../ccharges/public/componeccn.html' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyoneanchoro = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtytwoanchorp = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtythreeanchorq = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfouranchorr = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfiveanchors = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysixanchort = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysevenanchoru = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyeightanchorv = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtynineanchorw = "<a href='../../ccharges/public/componeccn.html' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifetyanchorx = "<a href='../../ccharges/public/componeccn.html' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";


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
var keydivs = "<div class='alldivs' style='background-color: ; padding: 4px;'>";
var divclose = "</div>";
var leftloaamd = "<div class='leftloaamd' id='leftloaamd' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloa = "<div class='leftloa' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloae = "<div class='leftloae' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var rightsloa = "<div class='rightsloa' style='width: 100%; background-color: brown; margin: 0; padding: 0; border: none;'>";
var bottomsloa = "<div class='bottomsloa' style=' width: 100%; margin: 0; padding: 0; border: none;'>";
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


var showschedule = "<!DOCTYPE html>" + "<html>" + "<head>" + "<meta charset='utf8'/>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" +"<link rel='stylesheet' href='../../css/main.css' media='screen and (min-width: 0px) and (max-width: 899px)'/>" +"<link rel='stylesheet' href='../../css/big.css' media='screen and (min-width: 900px) and (max-width: 4000px)'/>" + "<style>" + "</style>" + "<script>" + fn + spaceit + fnnamena +   openbrace + eef + openbracket + layoutna + equivalent + empty + closebracket + openbrace + layoutnas + equal + displayoffit + clsb + eelse + openbrace + layoutnas + equal + displayonit + closebrace + closebrace +           fn + spaceit + fnnamea +   openbrace + eef + openbracket + layoutan + equivalent + empty + closebracket + openbrace + layouta + equal + displayoffit + clsb + eelse + openbrace + layouta + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnameb +   openbrace + eef + openbracket + layoutbn + equivalent + empty + closebracket + openbrace + layoutb + equal + displayoffit + clsb + eelse + openbrace + layoutb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamec +   openbrace + eef + openbracket + layoutcn + equivalent + empty + closebracket + openbrace + layoutc + equal + displayoffit + clsb + eelse + openbrace + layoutc + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamed +   openbrace + eef + openbracket + layoutdn + equivalent + empty + closebracket + openbrace + layoutd + equal + displayoffit + clsb + eelse + openbrace + layoutd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamee +   openbrace + eef + openbracket + layouten + equivalent + empty + closebracket + openbrace + layoute + equal + displayoffit + clsb + eelse + openbrace + layoute + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamef +   openbrace + eef + openbracket + layoutfn + equivalent + empty + closebracket + openbrace + layoutf + equal + displayoffit + clsb + eelse + openbrace + layoutf + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameg +   openbrace + eef + openbracket + layoutgn + equivalent + empty + closebracket + openbrace + layoutg + equal + displayoffit + clsb + eelse + openbrace + layoutg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameh +   openbrace + eef + openbracket + layouthn + equivalent + empty + closebracket + openbrace + layouth + equal + displayoffit + clsb + eelse + openbrace + layouth + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamei +   openbrace + eef + openbracket + layoutin + equivalent + empty + closebracket + openbrace + layouti + equal + displayoffit + clsb + eelse + openbrace + layouti + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamej +   openbrace + eef + openbracket + layoutjn + equivalent + empty + closebracket + openbrace + layoutj + equal + displayoffit + clsb + eelse + openbrace + layoutj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamek +   openbrace + eef + openbracket + layoutkn + equivalent + empty + closebracket + openbrace + layoutk + equal + displayoffit + clsb + eelse + openbrace + layoutk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamel +   openbrace + eef + openbracket + layoutln + equivalent + empty + closebracket + openbrace + layoutl + equal + displayoffit + clsb + eelse + openbrace + layoutl + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamem +   openbrace + eef + openbracket + layoutmn + equivalent + empty + closebracket + openbrace + layoutm + equal + displayoffit + clsb + eelse + openbrace + layoutm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamen +   openbrace + eef + openbracket + layoutnnspn + equivalent + empty + closebracket + openbrace + layoutn + equal + displayoffit + clsb + eelse + openbrace + layoutn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameo +   openbrace + eef + openbracket + layouton + equivalent + empty + closebracket + openbrace + layouto + equal + displayoffit + clsb + eelse + openbrace + layouto + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamep +   openbrace + eef + openbracket + layoutpn + equivalent + empty + closebracket + openbrace + layoutp + equal + displayoffit + clsb + eelse + openbrace + layoutp + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameq +   openbrace + eef + openbracket + layoutqn + equivalent + empty + closebracket + openbrace + layoutq + equal + displayoffit + clsb + eelse + openbrace + layoutq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamer +   openbrace + eef + openbracket + layoutrn + equivalent + empty + closebracket + openbrace + layoutr + equal + displayoffit + clsb + eelse + openbrace + layoutr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnames +   openbrace + eef + openbracket + layoutsn + equivalent + empty + closebracket + openbrace + layouts + equal + displayoffit + clsb + eelse + openbrace + layouts + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamet +   openbrace + eef + openbracket + layouttn + equivalent + empty + closebracket + openbrace + layoutt + equal + displayoffit + clsb + eelse + openbrace + layoutt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameu +   openbrace + eef + openbracket + layoutun + equivalent + empty + closebracket + openbrace + layoutu + equal + displayoffit + clsb + eelse + openbrace + layoutu + equal + displayonit + closebrace + closebrace +        fn + spaceit + fnnamev +   openbrace + eef + openbracket + layoutvn + equivalent + empty + closebracket + openbrace + layoutv + equal + displayoffit + clsb + eelse + openbrace + layoutv + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnamew +   openbrace + eef + openbracket + layoutwn + equivalent + empty + closebracket + openbrace + layoutw + equal + displayoffit + clsb + eelse + openbrace + layoutw + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamex +   openbrace + eef + openbracket + layoutxn + equivalent + empty + closebracket + openbrace + layoutx + equal + displayoffit + clsb + eelse + openbrace + layoutx + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamey +   openbrace + eef + openbracket + layoutyn + equivalent + empty + closebracket + openbrace + layouty + equal + displayoffit + clsb + eelse + openbrace + layouty + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamez +   openbrace + eef + openbracket + layoutzn + equivalent + empty + closebracket + openbrace + layoutz + equal + displayoffit + clsb + eelse + openbrace + layoutz + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameaa +   openbrace + eef + openbracket + layoutaan + equivalent + empty + closebracket + openbrace + layoutaa + equal + displayoffit + clsb + eelse + openbrace + layoutaa + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamebb +   openbrace + eef + openbracket + layoutbbn + equivalent + empty + closebracket + openbrace + layoutbb + equal + displayoffit + clsb + eelse + openbrace + layoutbb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamecc +   openbrace + eef + openbracket + layoutccn + equivalent + empty + closebracket + openbrace + layoutcc + equal + displayoffit + clsb + eelse + openbrace + layoutcc + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamedd +   openbrace + eef + openbracket + layoutddn + equivalent + empty + closebracket + openbrace + layoutdd + equal + displayoffit + clsb + eelse + openbrace + layoutdd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameee +   openbrace + eef + openbracket + layouteen + equivalent + empty + closebracket + openbrace + layoutee + equal + displayoffit + clsb + eelse + openbrace + layoutee + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameff +   openbrace + eef + openbracket + layoutffn + equivalent + empty + closebracket + openbrace + layoutff + equal + displayoffit + clsb + eelse + openbrace + layoutff + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamegg +   openbrace + eef + openbracket + layoutggn + equivalent + empty + closebracket + openbrace + layoutgg + equal + displayoffit + clsb + eelse + openbrace + layoutgg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamehh +   openbrace + eef + openbracket + layouthhn + equivalent + empty + closebracket + openbrace + layouthh + equal + displayoffit + clsb + eelse + openbrace + layouthh + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameii +   openbrace + eef + openbracket + layoutiin + equivalent + empty + closebracket + openbrace + layoutii + equal + displayoffit + clsb + eelse + openbrace + layoutii + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamejj +   openbrace + eef + openbracket + layoutjjn + equivalent + empty + closebracket + openbrace + layoutjj + equal + displayoffit + clsb + eelse + openbrace + layoutjj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamekk +   openbrace + eef + openbracket + layoutkkn + equivalent + empty + closebracket + openbrace + layoutkk + equal + displayoffit + clsb + eelse + openbrace + layoutkk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamell +   openbrace + eef + openbracket + layoutlln + equivalent + empty + closebracket + openbrace + layoutll + equal + displayoffit + clsb + eelse + openbrace + layoutll + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamemm +   openbrace + eef + openbracket + layoutmmn + equivalent + empty + closebracket + openbrace + layoutmm + equal + displayoffit + clsb + eelse + openbrace + layoutmm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamenn +   openbrace + eef + openbracket + layoutnnn + equivalent + empty + closebracket + openbrace + layoutnn + equal + displayoffit + clsb + eelse + openbrace + layoutnn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameoo +   openbrace + eef + openbracket + layoutoon + equivalent + empty + closebracket + openbrace + layoutoo + equal + displayoffit + clsb + eelse + openbrace + layoutoo + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamepp +   openbrace + eef + openbracket + layoutppn + equivalent + empty + closebracket + openbrace + layoutpp + equal + displayoffit + clsb + eelse + openbrace + layoutpp + equal + displayonit + closebrace + closebrace +                 fn + spaceit + fnnameqq +   openbrace + eef + openbracket + layoutqqn + equivalent + empty + closebracket + openbrace + layoutqq + equal + displayoffit + clsb + eelse + openbrace + layoutqq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamerr +   openbrace + eef + openbracket + layoutrrn + equivalent + empty + closebracket + openbrace + layoutrr + equal + displayoffit + clsb + eelse + openbrace + layoutrr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamess +   openbrace + eef + openbracket + layoutssn + equivalent + empty + closebracket + openbrace + layoutss + equal + displayoffit + clsb + eelse + openbrace + layoutss + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamett +   openbrace + eef + openbracket + layoutttn + equivalent + empty + closebracket + openbrace + layouttt + equal + displayoffit + clsb + eelse + openbrace + layouttt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameuu +   openbrace + eef + openbracket + layoutuun + equivalent + empty + closebracket + openbrace + layoutuu + equal + displayoffit + clsb + eelse + openbrace + layoutuu + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamevv +   openbrace + eef + openbracket + layoutvvn + equivalent + empty + closebracket + openbrace + layoutvv + equal + displayoffit + clsb + eelse + openbrace + layoutvv + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameww +   openbrace + eef + openbracket + layoutwwn + equivalent + empty + closebracket + openbrace + layoutww + equal + displayoffit + clsb + eelse + openbrace + layoutww + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamexx +   openbrace + eef + openbracket + layoutxxn + equivalent + empty + closebracket + openbrace + layoutxx + equal + displayoffit + clsb + eelse + openbrace + layoutxx + equal + displayonit + closebrace + closebrace +              "</script>" + "</head>" + "<body class='amclass' style='background-color: ; margin: 0; padding: 0; border: none;' onload='openclosena() || openclosea() || opencloseb() || openclosec() || openclosed() || openclosee() || openclosef() || opencloseg() || opencloseh() || openclosei() || openclosej() || openclosek() || openclosel() || openclosem() || openclosen() || opencloseo() || openclosep() || opencloseq() || opencloser() || opencloses() || opencloset() || opencloseu() || openclosev() || openclosew() || openclosex() || openclosey() || openclosez() || opencloseaa() || openclosebb() || openclosecc() || openclosedd() || opencloseee() || opencloseff() || openclosegg() || openclosehh() || opencloseii() || openclosejj() || openclosekk() || openclosell() || openclosemm() || openclosenn() || opencloseoo() || openclosepp() || opencloseqq() || opencloserr() || openclosess() || openclosett() || opencloseuu() || openclosevv() || opencloseww() || openclosexx()'>" + formopen + mainzz +keydivs +spaninrcmp +  amcompname  + spanclose + divclose +keydivs + "Already Moving Buses" + divclose + mainclose  +   maina + routeaamd + firstroute + ampgt + ampgta + sect +  spanclose  + leftloaamd +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spanin + spaninr + sbrandone + spanclose + spanclose + spanclose + spanoutfour + spanin + spaninra + snumberone + spanclose + spanclose + spanclose + spanoutone + spanin + spaninr + cntdbaaa + spanclose + spanclose + spanclose + spanouttwo + spanin + spaninr + srouteone + spanclose + spanclose + spanclose + spanoutfive + spanin + spaninr + sparkone + spanclose + spanclose + spanclose +    loclose  +              bottomsloa      +  spanouteight + spanin + spanink +  sboardroneanchor + smoveone + anchorclose + spanclose + spanint + sboardroneanchora + sboardone + anchorclose + spanclose +   spanclose + spanclose    +      loclose   +     mainclose +                 mainb + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandtwo + spanclose + spanclose + spanoutfour + spaninrb + snumbertwo + spanclose + spanclose + spanoutone + spaninr + cntdbaab + spanclose + spanclose + spanouttwo + spaninr + sroutetwo + spanclose + spanclose + spanoutfive + spaninr + sparktwo + spanclose + spanclose +    loclose  +              bottomsloa      +  spanouteight + spaninr + spanink +  sboardrtwoanchor + smovetwo + anchorclose + spanclose + spanint + sboardrtwoanchorb + sboardtwo + anchorclose + spanclose + spanclose + spanclose +                 loclose   +     mainclose +                 mainc + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthree + spanclose + spanclose + spanoutfour + spaninrc + snumberthree + spanclose + spanclose + spanoutone + spaninr + cntdbaa + spanclose + spanclose + spanouttwo + spaninr + sroutethree + spanclose + spanclose + spanoutfive + spaninr + sparkthree + spanclose + spanclose +     loclose  +              bottomsloa      +  spanouteight + spaninr + spanink +  sboardrthreeanchor + smovethree + anchorclose + spanclose + spanint + sboardrthreeanchorc + sboardthree + anchorclose + spanclose + spanclose + spanclose  +                  loclose   +     mainclose +                 maind + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreeb + spanclose + spanclose + spanoutfour + spaninrd + snumberthreeb + spanclose + spanclose + spanoutone + spaninr + cntdbab + spanclose + spanclose + spanouttwo + spaninr + sroutethreeb + spanclose + spanclose + spanoutfive + spaninr + sparkthreeb + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfouranchor + smovethreeb + anchorclose + spanclose + spanint + sboardrfouranchord + sboardthreeb + anchorclose + spanclose + spanclose + spanclose +                     loclose   +     mainclose +                 maine + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreec + spanclose + spanclose + spanoutfour + spaninre + snumberthreec + spanclose + spanclose + spanoutone + spaninr + cntdbac + spanclose + spanclose + spanouttwo + spaninr + sroutethreec + spanclose + spanclose + spanoutfive + spaninr + sparkthreec + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfiveanchor + smovethreec + anchorclose + spanclose + spanint + sboardrfiveanchore + sboardthreec + anchorclose + spanclose + spanclose + spanclose +                     loclose   +     mainclose +                 mainf + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreed + spanclose + spanclose + spanoutfour + spaninrf + snumberthreed + spanclose + spanclose + spanoutone + spaninr + cntdbad + spanclose + spanclose + spanouttwo + spaninr + sroutethreed + spanclose + spanclose + spanoutfive + spaninr + sparkthreed + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrsixanchor + smovethreed + anchorclose + spanclose + spanint + sboardrsixanchorf + sboardthreed + anchorclose + spanclose + spanclose + spanclose +                    loclose   +     mainclose +                 maing + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreee + spanclose + spanclose + spanoutfour + spaninrg + snumberthreee + spanclose + spanclose + spanoutone + spaninr + cntdbae + spanclose + spanclose + spanouttwo + spaninr + sroutethreee + spanclose + spanclose + spanoutfive + spaninr + sparkthreee + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrsevenanchor + smovethreee + anchorclose + spanclose + spanint + sboardrsevenanchorg + sboardthreee + anchorclose + spanclose + spanclose + spanclose +                      loclose   +     mainclose +                 mainh + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreef + spanclose + spanclose + spanoutfour + spaninrh + snumberthreef + spanclose + spanclose + spanoutone + spaninr + cntdbaf + spanclose + spanclose + spanouttwo + spaninr + sroutethreef + spanclose + spanclose + spanoutfive + spaninr + sparkthreef + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardreightanchor + smovethreef + anchorclose + spanclose + spanint + sboardreightanchorh + sboardthreef + anchorclose + spanclose + spanclose + spanclose +                    loclose   +     mainclose +                 maini + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreeg + spanclose + spanclose + spanoutfour + spaninri + snumberthreeg + spanclose + spanclose +  spanoutone + spaninr + cntdbag + spanclose + spanclose + spanouttwo + spaninr + sroutethreeg + spanclose + spanclose + spanoutfive + spaninr + sparkthreeg + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrnineanchor + smovethreeg + anchorclose + spanclose + spanint + sboardrnineanchori + sboardthreeg + anchorclose + spanclose + spanclose + spanclose +                     loclose   +     mainclose +                 mainj + routea + firstroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +  loclose  +    rightsloa      +             spanoutthree + spaninr + sbrandthreeh + spanclose + spanclose + spanoutfour + spaninrj + snumberthreeh + spanclose + spanclose + spanoutone + spaninr + cntdbah + spanclose + spanclose + spanouttwo + spaninr + sroutethreeh + spanclose + spanclose + spanoutfive + spaninr + sparkthreeh + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrtenanchor + smovethreeh + anchorclose + spanclose + spanint + sboardrtenanchorj + sboardthreeh + anchorclose + spanclose + spanclose + spanclose +           loclose   +     mainclose +                  maink +     routeaamd + secondroute + ampgt + ampgta + sect +  spanclose  + leftloaamd +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreei + spanclose + spanclose + spanoutfour + spaninrk + snumberthreei + spanclose + spanclose + spanoutone + spaninr + cntdbai + spanclose + spanclose + spanouttwo + spaninr + sroutethreei + spanclose + spanclose + spanoutfive + spaninr + sparkthreei + spanclose + spanclose +    loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrelevenanchor + smovethreei + anchorclose + spanclose + spanint + sboardrelevenanchork + sboardthreei + anchorclose + spanclose + spanclose + spanclose +                         loclose   +     mainclose +                  mainl +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreej + spanclose + spanclose + spanoutfour + spaninrl + snumberthreej + spanclose + spanclose + spanoutone + spaninr + cntdbaj + spanclose + spanclose + spanouttwo + spaninr + sroutethreei + spanclose + spanclose + spanoutfive + spaninr + sparkthreej + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwelveanchor + smovethreej + anchorclose + spanclose + spanint + sboardrtwelveanchorl + sboardthreej + anchorclose + spanclose + spanclose + spanclose +                                        loclose   +     mainclose +                  mainm +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreek + spanclose + spanclose + spanoutfour + spaninrm + snumberthreek + spanclose + spanclose + spanoutone + spaninr + cntdbak + spanclose + spanclose + spanouttwo + spaninr + sroutethreek + spanclose + spanclose + spanoutfive + spaninr + sparkthreek + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrthirteenanchor + smovethreek + anchorclose + spanclose + spanint + sboardrthirteenanchorm + sboardthreek + anchorclose + spanclose + spanclose + spanclose +                 loclose   +     mainclose +                  mainn +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreel + spanclose + spanclose + spanoutfour + spaninrn + snumberthreel + spanclose + spanclose + spanoutone + spaninr + cntdbal + spanclose + spanclose + spanouttwo + spaninr + sroutethreel + spanclose + spanclose + spanoutfive + spaninr + sparkthreel + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrfourteenanchor + smovethreel + anchorclose + spanclose + spanint + sboardrfourteenanchorn + sboardthreel + anchorclose + spanclose + spanclose + spanclose +                 loclose   +     mainclose +                  maino +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreem + spanclose + spanclose + spanoutfour + spaninro + snumberthreem + spanclose + spanclose + spanoutone + spaninr + cntdbam + spanclose + spanclose + spanouttwo + spaninr + sroutethreem + spanclose + spanclose + spanoutfive + spaninr + sparkthreem + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrfifeteenanchor + smovethreem + anchorclose + spanclose + spanint + sboardrfifeteenanchoro + sboardthreem + anchorclose + spanclose + spanclose + spanclose +                 loclose   +     mainclose +                  mainp +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreen + spanclose + spanclose + spanoutfour + spaninrp + snumberthreen + spanclose + spanclose + spanoutone + spaninr + cntdban + spanclose + spanclose + spanouttwo + spaninr + sroutethreen + spanclose + spanclose + spanoutfive + spaninr + sparkthreen + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrsixteenanchor + smovethreen + anchorclose + spanclose + spanint + sboardrsixteenanchorp + sboardthreen + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +                  mainq +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +               spanoutthree + spaninr + sbrandthreeo + spanclose + spanclose + spanoutfour + spaninrq + snumberthreeo + spanclose + spanclose +  spanoutone + spaninr + cntdbao + spanclose + spanclose + spanouttwo + spaninr + sroutethreeo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeo + spanclose + spanclose +  loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrseventeenanchor + smovethreeo + anchorclose + spanclose + spanint + sboardrseventeenanchorq + sboardthreeo + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +                  mainr +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreep + spanclose + spanclose + spanoutfour + spaninrr + snumberthreep + spanclose + spanclose +  spanoutone + spaninr + cntdbap + spanclose + spanclose + spanouttwo + spaninr + sroutethreep + spanclose + spanclose + spanoutfive + spaninr + sparkthreep + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardreighteenanchor + smovethreep + anchorclose + spanclose + spanint + sboardreighteenanchorr + sboardthreep + anchorclose + spanclose + spanclose + spanclose +                                       loclose   +     mainclose +                  mains +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +               spanoutthree + spaninr + sbrandthreeq + spanclose + spanclose + spanoutfour + spaninrs + snumberthreeq + spanclose + spanclose + spanoutone + spaninr + cntdbaq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeq + spanclose + spanclose + loclose  +              bottomsloa      +     spanouteight + spaninr + spanink +  sboardrnineteenanchor + smovethreeq + anchorclose + spanclose + spanint + sboardrnineteenanchors + sboardthreeq + anchorclose + spanclose + spanclose + spanclose +             loclose   +     mainclose +                  maint +     routea + secondroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +                loclose  +    rightsloa      +              spanoutthree + spaninr + sbrandthreer + spanclose + spanclose + spanoutfour + spaninrt + snumberthreer + spanclose + spanclose + spanoutone + spaninr + cntdbar + spanclose + spanclose + spanouttwo + spaninr + sroutethreer + spanclose + spanclose + spanoutfive + spaninr + sparkthreer + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentyanchor + smovethreer + anchorclose + spanclose + spanint + sboardrtwentyanchort + sboardthreer + anchorclose + spanclose + spanclose + spanclose +          loclose   +     mainclose +           mainu +     routeaamd + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloaamd +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +         spanoutthree + spaninr + sbrandthrees + spanclose + spanclose + spanoutfour + spaninru + snumberthrees + spanclose + spanclose + spanoutone + spaninr + cntdbas + spanclose + spanclose + spanouttwo + spaninr + sroutethrees + spanclose + spanclose + spanoutfive + spaninr + sparkthrees + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentyoneanchor + smovethrees + anchorclose + spanclose + spanint + sboardrtwentyoneanchoru + sboardthrees + anchorclose + spanclose + spanclose + spanclose +             loclose   +     mainclose +           mainv +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +          spanoutthree + spaninr + sbrandthreet + spanclose + spanclose + spanoutfour + spaninrv + snumberthreet + spanclose + spanclose + spanoutone + spaninr + cntdbat + spanclose + spanclose + spanouttwo + spaninr + sroutethreet + spanclose + spanclose + spanoutfive + spaninr + sparkthreet + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentytwoanchor + smovethreet + anchorclose + spanclose + spanint + sboardrtwentytwoanchorv + sboardthreet + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +           mainw +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +       spanoutthree + spaninr + sbrandthreeu + spanclose + spanclose + spanoutfour + spaninrw + snumberthreeu + spanclose + spanclose +  spanoutone + spaninr + cntdbau + spanclose + spanclose + spanouttwo + spaninr + sroutethreeu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeu + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentythreeanchor + smovethreeu + anchorclose + spanclose + spanint + sboardrtwentythreeanchorw + sboardthreeu + anchorclose + spanclose + spanclose + spanclose +                      loclose   +     mainclose +           mainx +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      + spanoutthree + spaninr + sbrandthreev + spanclose + spanclose + spanoutfour + spaninrx + snumberthreev + spanclose + spanclose + spanoutone + spaninr + cntdbav + spanclose + spanclose + spanouttwo + spaninr + sroutethreev + spanclose + spanclose + spanoutfive + spaninr + sparkthreev + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentyfouranchor + smovethreev + anchorclose + spanclose + spanint + sboardrtwentyfouranchorx + sboardthreev + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +           mainy +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +       spanoutthree + spaninr + sbrandthreew + spanclose + spanclose + spanoutfour + spaninry + snumberthreew + spanclose + spanclose + spanoutone + spaninr + cntdbaw + spanclose + spanclose + spanouttwo + spaninr + sroutethreew + spanclose + spanclose + spanoutfive + spaninr + sparkthreew + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentyfiveanchor + smovethreew + anchorclose + spanclose + spanint + sboardrtwentyfiveanchory + sboardthreew + anchorclose + spanclose + spanclose + spanclose +                     loclose   +     mainclose +           mainz +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +  spanoutthree + spaninr + sbrandthreex + spanclose + spanclose + spanoutfour + spaninrz + snumberthreex + spanclose + spanclose + spanoutone + spaninr + cntdbax + spanclose + spanclose + spanouttwo + spaninr + sroutethreex + spanclose + spanclose + spanoutfive + spaninr + sparkthreex + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentysixanchor + smovethreex + anchorclose + spanclose + spanint + sboardrtwentysixanchorz + sboardthreex + anchorclose + spanclose + spanclose + spanclose +                     loclose   +     mainclose +           mainaa +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +  spanoutthree + spaninr + sbrandthreey + spanclose + spanclose + spanoutfour + spaninraa + snumberthreey + spanclose + spanclose + spanoutone + spaninr + cntdbay + spanclose + spanclose + spanouttwo + spaninr + sroutethreey + spanclose + spanclose + spanoutfive + spaninr + sparkthreey + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentysevenanchor + smovethreey + anchorclose + spanclose + spanint + sboardrtwentysevenanchora + sboardthreey + anchorclose + spanclose + spanclose + spanclose +                      loclose   +     mainclose +           mainbb +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      + spanoutthree + spaninr + sbrandthreez + spanclose + spanclose + spanoutfour + spaninrbb + snumberthreez + spanclose + spanclose + spanoutone + spaninr + cntdbaz + spanclose + spanclose + spanouttwo + spaninr + sroutethreez + spanclose + spanclose + spanoutfive + spaninr + sparkthreez + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentyeightanchor + smovethreez + anchorclose + spanclose + spanint + sboardrtwentyeightanchorb + sboardthreez + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +           maincc +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      +        spanoutthree + spaninr + sbrandthreeaa + spanclose + spanclose + spanoutfour + spaninrcc + snumberthreeaa + spanclose + spanclose + spanoutone + spaninr + cntdbaaaa + spanclose + spanclose + spanouttwo + spaninr + sroutethreeaa + spanclose + spanclose + spanoutfive + spaninr + sparkthreeaa + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrtwentynineanchor + smovethreeaa + anchorclose + spanclose + spanint + sboardrtwentynineanchorc + sboardthreeaa + anchorclose + spanclose + spanclose + spanclose +                      loclose   +     mainclose +           maindd +     routea + thirdroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa      + spanoutthree + spaninr + sbrandthreebb + spanclose + spanclose + spanoutfour + spaninrdd + snumberthreebb + spanclose + spanclose + spanoutone + spaninr + cntdbabb + spanclose + spanclose + spanouttwo + spaninr + sroutethreebb + spanclose + spanclose + spanoutfive + spaninr + sparkthreebb + spanclose + spanclose + loclose  +              bottomsloa      +    spanouteight + spaninr + spanink +  sboardrthirtyanchor + smovethreebb + anchorclose + spanclose + spanint + sboardrthirtyanchord + sboardthreebb + anchorclose + spanclose + spanclose + spanclose +        loclose   +     mainclose +          mainee +      routeaamd + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloaamd +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  +         spanoutthree + spaninr + sbrandthreecc + spanclose + spanclose + spanoutfour + spaninree + snumberthreecc + spanclose + spanclose + spanoutone + spaninr + cntdbacc + spanclose + spanclose + spanouttwo + spaninr + sroutethreecc + spanclose + spanclose + spanoutfive + spaninr + sparkthreecc + spanclose + spanclose +  loclose  +              bottomsloa      +  spanouteight + spaninr + spanink +  sboardrthirtyoneanchor + smovethreecc + anchorclose + spanclose + spanint + sboardrthirtyoneanchore + sboardthreecc + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +          mainff +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreedd + spanclose + spanclose + spanoutfour + spaninrff + snumberthreedd + spanclose + spanclose + spanoutone + spaninr + cntdbadd + spanclose + spanclose + spanouttwo + spaninr + sroutethreedd + spanclose + spanclose + spanoutfive + spaninr + sparkthreedd + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtytwoanchor + smovethreedd + anchorclose + spanclose + spanint + sboardrthirtytwoanchorf + sboardthreedd + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +          maingg +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreeee + spanclose + spanclose + spanoutfour + spaninrgg + snumberthreeee + spanclose + spanclose + spanoutone + spaninr + cntdbaee + spanclose + spanclose + spanouttwo + spaninr + sroutethreeee + spanclose + spanclose + spanoutfive + spaninr + sparkthreeee + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtythreeanchor + smovethreeee + anchorclose + spanclose + spanint + sboardrthirtythreeanchorg + sboardthreeee + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +          mainhh +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreeff + spanclose + spanclose + spanoutfour + spaninrhh + snumberthreeff + spanclose + spanclose + spanoutone + spaninr + cntdbaff + spanclose + spanclose + spanouttwo + spaninr + sroutethreeff + spanclose + spanclose + spanoutfive + spaninr + sparkthreeff + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtyfouranchor + smovethreeff + anchorclose + spanclose + spanint + sboardrthirtyfouranchorh + sboardthreeff + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +          mainii +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  +  spanoutthree + spaninr + sbrandthreegg + spanclose + spanclose + spanoutfour + spaninrii + snumberthreegg + spanclose + spanclose + spanoutone + spaninr + cntdbagg + spanclose + spanclose + spanouttwo + spaninr + sroutethreegg + spanclose + spanclose + spanoutfive + spaninr + sparkthreegg + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtyfiveanchor + smovethreegg + anchorclose + spanclose + spanint + sboardrthirtyfiveanchori + sboardthreegg + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +          mainjj +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreehh + spanclose + spanclose + spanoutfour + spaninrjj + snumberthreehh + spanclose + spanclose + spanoutone + spaninr + cntdbahh + spanclose + spanclose + spanouttwo + spaninr + sroutethreehh + spanclose + spanclose + spanoutfive + spaninr + sparkthreehh + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtysixanchor + smovethreehh + anchorclose + spanclose + spanint + sboardrthirtysixanchorj + sboardthreehh + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +          mainkk +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  +  spanoutthree + spaninr + sbrandthreeii + spanclose + spanclose + spanoutfour + spaninrkk + snumberthreeii + spanclose + spanclose + spanoutone + spaninr + cntdbaii + spanclose + spanclose + spanouttwo + spaninr + sroutethreeii + spanclose + spanclose + spanoutfive + spaninr + sparkthreeii + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtysevenanchor + smovethreeii + anchorclose + spanclose + spanint + sboardrthirtysevenanchork + sboardthreeii + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose +          mainll +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreejj + spanclose + spanclose + spanoutfour + spaninrll + snumberthreejj + spanclose + spanclose + spanoutone + spaninr + cntdbajj + spanclose + spanclose + spanouttwo + spaninr + sroutethreejj + spanclose + spanclose + spanoutfive + spaninr + sparkthreejj + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrthirtyeightanchor + smovethreejj + anchorclose + spanclose + spanint + sboardrthirtyeightanchorl + sboardthreejj + anchorclose + spanclose + spanclose + spanclose +               loclose   +     mainclose +          mainmm +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  +  spanoutthree + spaninr + sbrandthreekk + spanclose + spanclose + spanoutfour + spaninrmm + snumberthreekk + spanclose + spanclose + spanoutone + spaninr + cntdbakk + spanclose + spanclose + spanouttwo + spaninr + sroutethreekk + spanclose + spanclose + spanoutfive + spaninr + sparkthreekk + spanclose + spanclose +  loclose  +              bottomsloa      +  spanouteight + spaninr + spanink +  sboardrthirtynineanchor + smovethreekk + anchorclose + spanclose + spanint + sboardrthirtynineanchorm + sboardthreekk + anchorclose + spanclose + spanclose + spanclose +                loclose   +     mainclose  +          mainnn +      routea + fourthroute + ampgt + ampgta + sect +  spanclose  + leftloa +   spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +       loclose  +    rightsloa  + spanoutthree + spaninr + sbrandthreell + spanclose + spanclose + spanoutfour + spaninrnn + snumberthreell + spanclose + spanclose + spanoutone + spaninr + cntdball + spanclose + spanclose + spanouttwo + spaninr + sroutethreell + spanclose + spanclose + spanoutfive + spaninr + sparkthreell + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtyanchor + smovethreell + anchorclose + spanclose + spanint + sboardrfourtyanchorn + sboardthreell + anchorclose + spanclose + spanclose + spanclose +          loclose   +     mainclose +          mainoo +        routeaamd + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloaamd +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreemm + spanclose + spanclose + spanoutfour + spaninroo + snumberthreemm + spanclose + spanclose + spanoutone + spaninr + cntdbamm + spanclose + spanclose + spanouttwo + spaninr + sroutethreemm + spanclose + spanclose + spanoutfive + spaninr + sparkthreemm + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtyoneanchor + smovethreemm + anchorclose + spanclose + spanint + sboardrfourtyoneanchoro + sboardthreemm + anchorclose + spanclose + spanclose + spanclose +                 loclose   +     mainclose +          mainpp +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +         spanoutthree + spaninr + sbrandthreenn + spanclose + spanclose + spanoutfour + spaninrpp + snumberthreenn + spanclose + spanclose + spanoutone + spaninr + cntdbann + spanclose + spanclose + spanouttwo + spaninr + sroutethreenn + spanclose + spanclose + spanoutfive + spaninr + sparkthreenn + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtytwoanchor + smovethreenn + anchorclose + spanclose + spanint + sboardrfourtytwoanchorp + sboardthreenn + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainqq +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreeoo + spanclose + spanclose + spanoutfour + spaninrqq + snumberthreeoo + spanclose + spanclose + spanoutone + spaninr + cntdbaoo + spanclose + spanclose + spanouttwo + spaninr + sroutethreeoo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeoo + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtythreeanchor + smovethreeoo + anchorclose + spanclose + spanint + sboardrfourtythreeanchorq + sboardthreeoo + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainrr +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreepp + spanclose + spanclose + spanoutfour + spaninrrr + snumberthreepp + spanclose + spanclose + spanoutone + spaninr + cntdbapp + spanclose + spanclose + spanouttwo + spaninr + sroutethreepp + spanclose + spanclose + spanoutfive + spaninr + sparkthreepp + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtyfouranchor + smovethreepp + anchorclose + spanclose + spanint + sboardrfourtyfouranchorr + sboardthreepp + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainss +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreeqq + spanclose + spanclose + spanoutfour + spaninrss + snumberthreeqq + spanclose + spanclose + spanoutone + spaninr + cntdbaqq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeqq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeqq + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtyfiveanchor + smovethreeqq + anchorclose + spanclose + spanint + sboardrfourtyfiveanchors + sboardthreeqq + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          maintt +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreerr + spanclose + spanclose + spanoutfour + spaninrtt + snumberthreerr + spanclose + spanclose + spanoutone + spaninr + cntdbarr + spanclose + spanclose + spanouttwo + spaninr + sroutethreerr + spanclose + spanclose + spanoutfive + spaninr + sparkthreerr + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtysixanchor + smovethreerr + anchorclose + spanclose + spanint + sboardrfourtysixanchort + sboardthreerr + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainuu +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreess + spanclose + spanclose + spanoutfour + spaninruu + snumberthreess + spanclose + spanclose + spanoutone + spaninr + cntdbass + spanclose + spanclose + spanouttwo + spaninr + sroutethreess + spanclose + spanclose + spanoutfive + spaninr + sparkthreess + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtysevenanchor + smovethreess + anchorclose + spanclose + spanint + sboardrfourtysevenanchoru + sboardthreess + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainvv +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreett + spanclose + spanclose + spanoutfour + spaninrvv + snumberthreett + spanclose + spanclose + spanoutone + spaninr + cntdbatt + spanclose + spanclose + spanouttwo + spaninr + sroutethreett + spanclose + spanclose + spanoutfive + spaninr + sparkthreett + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtyeightanchor + smovethreett + anchorclose + spanclose + spanint + sboardrfourtyeightanchorv + sboardthreett + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainww +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreeuu + spanclose + spanclose + spanoutfour + spaninrww + snumberthreeuu + spanclose + spanclose + spanoutone + spaninr + cntdbauu + spanclose + spanclose + spanouttwo + spaninr + sroutethreeuu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeuu + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfourtynineanchor + smovethreeuu + anchorclose + spanclose + spanint + sboardrfourtynineanchorw + sboardthreeuu + anchorclose + spanclose + spanclose + spanclose +                  loclose   +     mainclose +          mainxx +        routea + fifethroute + ampgt + ampgta + sect +  spanclose  + leftloa +  spanoutthree + spanina + titlespan + "Bus Brand:" + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespana + "Number plate:" + spanclose + spanclose + spanclose + spanoutone + spanina + titlespana + "Conductor Name:" + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespan + "Phone Number:" + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespan + "Leaving Status:" + spanclose + spanclose + spanclose + spanouteight + spanine + titlespana + "<center>" + "Opinion:" + "</center>" + spanclose + spanclose + spanclose  +          loclose  +    rightsloa  +        spanoutthree + spaninr + sbrandthreevv + spanclose + spanclose + spanoutfour + spaninrxx + snumberthreevv + spanclose + spanclose + spanoutone + spaninr + cntdbavv + spanclose + spanclose + spanouttwo + spaninr + sroutethreevv + spanclose + spanclose + spanoutfive + spaninr + sparkthreevv + spanclose + spanclose + loclose  +              bottomsloa      +   spanouteight + spaninr + spanink +  sboardrfifetyanchor + smovethreevv + anchorclose + spanclose + spanint + sboardrfifetyanchorx + sboardthreevv + anchorclose + spanclose + spanclose + spanclose +  formclose + "</body>" + "</html>";

let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "componeamn.html";
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
	res.send("<div style='text-align: center; color:green;'>Already Moving Buses Status Updated Successfully!<br/><a href='https://travofast.herokuapp.com/usersamn/dashboards/componedbn' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div> ");
};

});

module.exports = router
