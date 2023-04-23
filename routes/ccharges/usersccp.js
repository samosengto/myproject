
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
router.get("/dashboards/componedbp", (req, res) => {

	res.render("users/dashboards/componedbp");

});

router.post("/", (req, res ) => {
var saya = req.body.firstName;
var wewa = req.body.theName;
var bee = "jon";
var few = "sam";
/*Company One*/
/*//Schedule Memory //*/
var spaceta = " ";
 var cccompname = req.body.cccompname; 
var firstroute = req.body.origina;
var firstroutea = req.body.originaa;
var firstrouteb = req.body.originab;
var firstroutec = req.body.originac;
var firstrouted = req.body.originad;
var firstroutee = req.body.originae;
var firstroutef = req.body.originaf;
var firstrouteg = req.body.originag;
var firstrouteh = req.body.originah;
var firstroutei = req.body.originai;


var secondroute = req.body.originb;
var thirdroute = req.body.originc;
var fourthroute = req.body.origind;
var fifethroute = req.body.origine;

var stitlea = req.body.destinationa;
var stitleaa = req.body.destinationaa;
var stitleab = req.body.destinationab;
var stitleac = req.body.destinationac;
var stitlead = req.body.destinationad;
var stitleae = req.body.destinationae;
var stitleaf = req.body.destinationaf;
var stitleag = req.body.destinationag;
var stitleah = req.body.destinationah;
var stitleai = req.body.destinationai;



var stitleb = req.body.destinationb;
var stitlec = req.body.destinationc;
var stitled = req.body.destinationd;
var stitlee = req.body.destinatione;

var origintitlea = req.body.origintitlea;
var origintitleaa = req.body.origintitleaa;
var origintitleab = req.body.origintitleab;
var origintitleac = req.body.origintitleac;
var origintitlead = req.body.origintitlead;
var origintitleae = req.body.origintitleae;
var origintitleaf = req.body.origintitleaf;
var origintitleag = req.body.origintitleag;
var origintitleah = req.body.origintitleah;
var origintitleai = req.body.origintitleai;




var origintitleb = req.body.origintitleb;
var origintitlec = req.body.origintitlec;
var origintitled = req.body.origintitled;
var origintitlee = req.body.origintitlee;

var destinytitlea = req.body.destinytitlea;
var destinytitleaa = req.body.destinytitleaa;
var destinytitleab = req.body.destinytitleab;
var destinytitleac = req.body.destinytitleac;
var destinytitlead = req.body.destinytitlead;
var destinytitleae = req.body.destinytitleae;
var destinytitleaf = req.body.destinytitleaf;
var destinytitleag = req.body.destinytitleag;
var destinytitleah = req.body.destinytitleah;
var destinytitleai = req.body.destinytitleai;



var destinytitleb = req.body.destinytitleb;
var destinytitlec = req.body.destinytitlec;
var destinytitled = req.body.destinytitled;
var destinytitlee = req.body.destinytitlee;


var toacc = req.body.toa;
var toaacc = req.body.toaa;
var toabcc = req.body.toab;
var toaccc = req.body.toac;
var toadcc = req.body.toad;
var toaecc = req.body.toae;
var toafcc = req.body.toaf;
var toagcc = req.body.toag;
var toahcc = req.body.toah;
var toaicc = req.body.toai;



var tobcc = req.body.tob;
var toccc = req.body.toc;
var todcc = req.body.tod;
var toecc = req.body.toe;

var viaa = req.body.viaa;
var viaaa = req.body.viaaa;
var viaab = req.body.viaab;
var viaac = req.body.viaac;
var viaad = req.body.viaad;
var viaae = req.body.viaae;
var viaaf = req.body.viaaf;
var viaag = req.body.viaag;
var viaah = req.body.viaah;
var viaai = req.body.viaai;




var viab = req.body.viab;
var viac = req.body.viac;
var viad = req.body.viad;
var viae = req.body.viae;


var headingonea = req.body.croute;
var headingoneaa = req.body.croutea;
var headingoneab = req.body.crouteb;
var headingoneac = req.body.croutec;
var headingonead = req.body.crouted;
var headingoneae = req.body.croutee;
var headingoneaf = req.body.croutef;
var headingoneag = req.body.crouteg;
var headingoneah = req.body.crouteh;
var headingoneai = req.body.croutei;


var headingtwoa = req.body.cbrand;
var headingtwoaa = req.body.cbranda;
var headingtwoab = req.body.cbrandb;
var headingtwoac = req.body.cbrandc;
var headingtwoad = req.body.cbrandd;
var headingtwoae = req.body.cbrande;
var headingtwoaf = req.body.cbrandf;
var headingtwoag = req.body.cbrandg;
var headingtwoah = req.body.cbrandh;
var headingtwoai = req.body.cbrandi;


var headingthreea = req.body.cnumber;
var headingthreeaa = req.body.cnumbera;
var headingthreeab = req.body.cnumberb;
var headingthreeac = req.body.cnumberc;
var headingthreead = req.body.cnumberd;
var headingthreeae = req.body.cnumbere;
var headingthreeaf = req.body.cnumberf;
var headingthreeag = req.body.cnumberg;
var headingthreeah = req.body.cnumberh;
var headingthreeai = req.body.cnumberi;



var headingfoura = req.body.cfare;
var headingfouraa = req.body.cfarea;
var headingfourab = req.body.cfareb;
var headingfourac = req.body.cfarec;
var headingfourad = req.body.cfared;
var headingfourae = req.body.cfaree;
var headingfouraf = req.body.cfaref;
var headingfourag = req.body.cfareg;
var headingfourah = req.body.cfareh;
var headingfourai = req.body.cfarei;


var headingfivea = req.body.ctimea;
var headingfiveaa = req.body.ctimeaa;
var headingfiveab = req.body.ctimeab;
var headingfiveac = req.body.ctimeac;
var headingfivead = req.body.ctimead;
var headingfiveae = req.body.ctimeae;
var headingfiveaf = req.body.ctimeaf;
var headingfiveag = req.body.ctimeag;
var headingfiveah = req.body.ctimeah;
var headingfiveai = req.body.ctimeai;



var headingsixa = req.body.copinionsss;
var headingsixaa = req.body.copinionsssa;
var headingsixab = req.body.copinionsssb;
var headingsixac = req.body.copinionsssc;
var headingsixad = req.body.copinionsssd;
var headingsixae = req.body.copinionssse;
var headingsixaf = req.body.copinionsssf;
var headingsixag = req.body.copinionsssg;
var headingsixah = req.body.copinionsssh;
var headingsixai = req.body.copinionsssi;



var headingsevena = req.body.copinion;
var headingsevenaa = req.body.copiniona;
var headingsevenab = req.body.copinionb;
var headingsevenac = req.body.copinionc;
var headingsevenad = req.body.copiniond;
var headingsevenae = req.body.copinione;
var headingsevenaf = req.body.copinionf;
var headingsevenag = req.body.copiniong;
var headingsevenah = req.body.copinionh;
var headingsevenai = req.body.copinioni;







var headingoneb = req.body.crouteb;
var headingtwob = req.body.cbrandb;
var headingthreeb = req.body.cnumberb;
var headingfourb = req.body.cfareb;
var headingfiveb = req.body.ctimeab;
var headingsixb = req.body.copinionsssb;
var headingsevenb = req.body.copinionb;

var headingonec = req.body.croutec;
var headingtwoc = req.body.cbrandc;
var headingthreec = req.body.cnumberc;
var headingfourc = req.body.cfarec;
var headingfivec = req.body.ctimeac;
var headingsixc = req.body.copinionsssc;
var headingsevenc = req.body.copinionc;

var headingoned = req.body.crouted;
var headingtwod = req.body.cbrandd;
var headingthreed = req.body.cnumberd;
var headingfourd = req.body.cfared;
var headingfived = req.body.ctimead;
var headingsixd = req.body.copinionsssd;
var headingsevend = req.body.copiniond;

var headingonee = req.body.croutee;
var headingtwoe = req.body.cbrande;
var headingthreee = req.body.cnumbere;
var headingfoure = req.body.cfaree;
var headingfivee = req.body.ctimeae;
var headingsixe = req.body.copinionssse;
var headingsevene = req.body.copinione;

var chat = "Chat";
var stimeone = req.body.cropinionsaao;
var srouteone = req.body.crfarea;
var sbrandone = req.body.crroutea;
var snumberone = req.body.crbranda;
var sparkone = req.body.cropinionsa;
var smoveone = chat;
var cntdbaaa = req.body.crnumbera;
var sboardone = req.body.cropinionsaaa;

var stimetwo = req.body.cropinionsbbo;
var sroutetwo = req.body.crfareb;
var sbrandtwo = req.body.crrouteb;
var snumbertwo = req.body.crbrandb;
var sparktwo = req.body.cropinionsb;
var smovetwo = chat;
var cntdbaab = req.body.crnumberb;
var sboardtwo = req.body.cropinionsbbb;

var stimethree = req.body.cropinionscco;
var sroutethree = req.body.crfarec;
var sbrandthree = req.body.crroutec;
var snumberthree = req.body.crbrandc;
var sparkthree = req.body.cropinionsc;
var smovethree = chat;
var cntdbaa = req.body.crnumberc;
var sboardthree = req.body.cropinionsccc;

var stimethreeb = req.body.cropinionsddo;
var sroutethreeb = req.body.crfared;
var sbrandthreeb = req.body.crrouted;
var snumberthreeb = req.body.crbrandd;
var sparkthreeb = req.body.cropinionsd;
var smovethreeb = chat;
var cntdbab = req.body.crnumberd;
var sboardthreeb = req.body.cropinionsddd;

var stimethreec = req.body.cropinionseeo;
var sroutethreec = req.body.crfaree;
var sbrandthreec = req.body.crroutee;
var snumberthreec = req.body.crbrande;
var sparkthreec = req.body.cropinionse;
var smovethreec = chat;
var cntdbac = req.body.crnumbere;
var sboardthreec = req.body.cropinionseee;

var stimethreed = req.body.cropinionsffo;
var sroutethreed = req.body.crfaref;
var sbrandthreed = req.body.crroutef;
var snumberthreed = req.body.crbrandf;
var sparkthreed = req.body.cropinionsf;
var smovethreed = chat;
var cntdbad = req.body.crnumberf;
var sboardthreed = req.body.cropinionsfff;

var stimethreee = req.body.cropinionsggo;
var sroutethreee = req.body.crfareg;
var sbrandthreee = req.body.crrouteg;
var snumberthreee = req.body.crbrandg;
var sparkthreee = req.body.cropinionsg;
var smovethreee = chat;
var cntdbae = req.body.crnumberg;
var sboardthreee = req.body.cropinionsggg;

var stimethreef = req.body.cropinionshho;
var sroutethreef = req.body.crfareh;
var sbrandthreef = req.body.crrouteh;
var snumberthreef = req.body.crbrandh;
var sparkthreef = req.body.cropinionsh;
var smovethreef = chat;
var cntdbaf = req.body.crnumberh;
var sboardthreef = req.body.cropinionshhh;

var stimethreeg = req.body.cropinionsiio;
var sroutethreeg = req.body.crfarei;
var sbrandthreeg = req.body.crroutei;
var snumberthreeg = req.body.crbrandi;
var sparkthreeg = req.body.cropinionsi;
var smovethreeg = chat;
var cntdbag = req.body.crnumberi;
var sboardthreeg = req.body.cropinionsiii;

var stimethreeh = req.body.cropinionsjjo;
var sroutethreeh = req.body.crfarej;
var sbrandthreeh = req.body.crroutej;
var snumberthreeh = req.body.crbrandj;
var sparkthreeh = req.body.cropinionsj;
var smovethreeh = chat;
var cntdbah = req.body.crnumberj;
var sboardthreeh = req.body.cropinionsjjj;

var stimethreei = req.body.cropinionskko;
var sroutethreei = req.body.crfarek;
var sbrandthreei = req.body.crroutek;
var snumberthreei = req.body.crbrandk;
var sparkthreei = req.body.cropinionsk;
var smovethreei = chat;
var cntdbai = req.body.crnumberk;
var sboardthreei = req.body.cropinionskkk;

var stimethreej = req.body.cropinionsllo;
var sroutethreej = req.body.crfarel;
var sbrandthreej = req.body.crroutel;
var snumberthreej = req.body.crbrandl;
var sparkthreej = req.body.cropinionsl;
var smovethreej = chat;
var cntdbaj = req.body.crnumberl;
var sboardthreej = req.body.cropinionslll;

var stimethreek = req.body.cropinionsmmo;
var sroutethreek = req.body.crfarem;
var sbrandthreek = req.body.crroutem;
var snumberthreek = req.body.crbrandm;
var sparkthreek = req.body.cropinionsm;
var smovethreek = chat;
var cntdbak = req.body.crnumberm;
var sboardthreek = req.body.cropinionsmmm;

var stimethreel = req.body.cropinionsnno;
var sroutethreel = req.body.crfaren;
var sbrandthreel = req.body.crrouten;
var snumberthreel = req.body.crbrandn;
var sparkthreel = req.body.cropinionsn;
var smovethreel = chat;
var cntdbal = req.body.crnumbern;
var sboardthreel = req.body.cropinionsnnn;

var stimethreem = req.body.cropinionsoobg;
var sroutethreem = req.body.crfareo;
var sbrandthreem = req.body.crrouteo;
var snumberthreem = req.body.crbrando;
var sparkthreem = req.body.cropinionso;
var smovethreem = chat;
var cntdbam = req.body.crnumbero;
var sboardthreem = req.body.cropinionsooo;

var stimethreen = req.body.cropinionsppo;
var sroutethreen = req.body.crfarep;
var sbrandthreen = req.body.crroutep;
var snumberthreen = req.body.crbrandp;
var sparkthreen = req.body.cropinionsp;
var smovethreen = chat;
var cntdban = req.body.crnumberp;
var sboardthreen = req.body.cropinionsppp;

var stimethreeo = req.body.cropinionsqqo;
var sroutethreeo = req.body.crfareq;
var sbrandthreeo = req.body.crrouteq;
var snumberthreeo = req.body.crbrandq;
var sparkthreeo = req.body.cropinionsq;
var smovethreeo = chat;
var cntdbao = req.body.crnumberq;
var sboardthreeo = req.body.cropinionsqqq;

var stimethreep = req.body.cropinionsrro;
var sroutethreep = req.body.crfarer;
var sbrandthreep = req.body.crrouter;
var snumberthreep = req.body.crbrandr;
var sparkthreep = req.body.cropinionsr;
var smovethreep = chat;
var cntdbap = req.body.crnumberr;
var sboardthreep = req.body.cropinionsrrr;

var stimethreeq = req.body.cropinionssso;
var sroutethreeq = req.body.crfares;
var sbrandthreeq = req.body.crroutes;
var snumberthreeq = req.body.crbrands;
var sparkthreeq = req.body.cropinionss;
var smovethreeq = chat;
var cntdbaq = req.body.crnumbers;
var sboardthreeq = req.body.cropinionssss;

var stimethreer = req.body.cropinionstto;
var sroutethreer = req.body.crfaret;
var sbrandthreer = req.body.crroutet;
var snumberthreer = req.body.crbrandt;
var sparkthreer = req.body.cropinionst;
var smovethreer = chat;
var cntdbar = req.body.crnumbert;
var sboardthreer = req.body.cropinionsttt;

var stimethrees = req.body.cropinionsuuo;
var sroutethrees = req.body.crfareu;
var sbrandthrees = req.body.crrouteu;
var snumberthrees = req.body.crbrandu;
var sparkthrees = req.body.cropinionsu;
var smovethrees = chat;
var cntdbas = req.body.crnumberu;
var sboardthrees = req.body.cropinionsuuu;

var stimethreet = req.body.cropinionsvvo;
var sroutethreet = req.body.crfarev;
var sbrandthreet = req.body.crroutev;
var snumberthreet = req.body.crbrandv;
var sparkthreet = req.body.cropinionsv;
var smovethreet = chat;
var cntdbat = req.body.crnumberv;
var sboardthreet = req.body.cropinionsvvv;

var stimethreeu = req.body.cropinionswwo;
var sroutethreeu = req.body.crfarew;
var sbrandthreeu = req.body.crroutew;
var snumberthreeu = req.body.crbrandw;
var sparkthreeu = req.body.cropinionsw;
var smovethreeu = chat;
var cntdbau = req.body.crnumberw;
var sboardthreeu = req.body.cropinionswww;

var stimethreev = req.body.cropinionsxxo;
var sroutethreev = req.body.crfarex;
var sbrandthreev = req.body.crroutex;
var snumberthreev = req.body.crbrandx;
var sparkthreev = req.body.cropinionsx;
var smovethreev = chat;
var cntdbav = req.body.crnumberx;
var sboardthreev = req.body.cropinionsxxx;

var stimethreew = req.body.cropinionsyy;
var sroutethreew = req.body.crfarey;
var sbrandthreew = req.body.crroutey;
var snumberthreew = req.body.crbrandy;
var sparkthreew = req.body.cropinionsy;
var smovethreew = chat;
var cntdbaw = req.body.crnumbery;
var sboardthreew = req.body.cropinionsyyy;

var stimethreex = req.body.cropinionszz;
var sroutethreex = req.body.crfarez;
var sbrandthreex = req.body.crroutez;
var snumberthreex = req.body.crbrandz;
var sparkthreex = req.body.cropinionsz;
var smovethreex = chat;
var cntdbax = req.body.crnumberz;
var sboardthreex = req.body.cropinionszzz;

var stimethreey = req.body.cropinionsaaaa;
var sroutethreey = req.body.crfareaa;
var sbrandthreey = req.body.crrouteaa;
var snumberthreey = req.body.crbrandaa;
var sparkthreey = req.body.cropinionsaa;
var smovethreey = chat;
var cntdbay = req.body.crnumberaa;
var sboardthreey = req.body.cropinionsaaaaaa;

var stimethreez = req.body.cropinionsbbbb;
var sroutethreez = req.body.crfarebb;
var sbrandthreez = req.body.crroutebb;
var snumberthreez = req.body.crbrandbb;
var sparkthreez = req.body.cropinionsbb;
var smovethreez = chat;
var cntdbaz = req.body.crnumberbb;
var sboardthreez = req.body.cropinionsbbbbbb;

var stimethreeaa = req.body.cropinionscccc;
var sroutethreeaa = req.body.crfarecc;
var sbrandthreeaa = req.body.crroutecc;
var snumberthreeaa = req.body.crbrandcc;
var sparkthreeaa = req.body.cropinionscc;
var smovethreeaa = chat;
var cntdbaaaa = req.body.crnumbercc;
var sboardthreeaa = req.body.cropinionscccccc;

var stimethreebb = req.body.cropinionsdddd;
var sroutethreebb = req.body.crfaredd;
var sbrandthreebb = req.body.crroutedd;
var snumberthreebb = req.body.crbranddd;
var sparkthreebb = req.body.cropinionsdd;
var smovethreebb = chat;
var cntdbabb = req.body.crnumberdd;
var sboardthreebb = req.body.cropinionsdddddd;

var stimethreecc = req.body.cropinionseeee;
var sroutethreecc = req.body.crfareee;
var sbrandthreecc = req.body.crrouteee;
var snumberthreecc = req.body.crbrandee;
var sparkthreecc = req.body.cropinionsee;
var smovethreecc = chat;
var cntdbacc = req.body.crnumberee;
var sboardthreecc = req.body.cropinionseeeeee;

var stimethreedd = req.body.cropinionsffff;
var sroutethreedd = req.body.crfareff;
var sbrandthreedd = req.body.crrouteff;
var snumberthreedd = req.body.crbrandff;
var sparkthreedd = req.body.cropinionsff;
var smovethreedd = chat;
var cntdbadd = req.body.crnumberff;
var sboardthreedd = req.body.cropinionsffffff;

var stimethreeee = req.body.cropinionsgggg;
var sroutethreeee = req.body.crfaregg;
var sbrandthreeee = req.body.crroutegg;
var snumberthreeee = req.body.crbrandgg;
var sparkthreeee = req.body.cropinionsgg;
var smovethreeee = chat;
var cntdbaee = req.body.crnumbergg;
var sboardthreeee = req.body.cropinionsgggggg;

var stimethreeff = req.body.cropinionshhhh;
var sroutethreeff = req.body.crfarehh;
var sbrandthreeff = req.body.crroutehh;
var snumberthreeff = req.body.crbrandhh;
var sparkthreeff = req.body.cropinionshh;
var smovethreeff = chat;
var cntdbaff = req.body.crnumberhh;
var sboardthreeff = req.body.cropinionshhhhhh;

var stimethreegg = req.body.cropinionsiiii;
var sroutethreegg = req.body.crfareii;
var sbrandthreegg = req.body.crrouteii;
var snumberthreegg = req.body.crbrandii;
var sparkthreegg = req.body.cropinionsii;
var smovethreegg = chat;
var cntdbagg = req.body.crnumberii;
var sboardthreegg = req.body.cropinionsiiiiii;

var stimethreehh = req.body.cropinionsjjjj;
var sroutethreehh = req.body.crfarejj;
var sbrandthreehh = req.body.crroutejj;
var snumberthreehh = req.body.crbrandjj;
var sparkthreehh = req.body.cropinionsjj;
var smovethreehh = chat;
var cntdbahh = req.body.crnumberjj;
var sboardthreehh = req.body.cropinionsjjjjjj;

var stimethreeii = req.body.cropinionskkkk;
var sroutethreeii = req.body.crfarekk;
var sbrandthreeii = req.body.crroutekk;
var snumberthreeii = req.body.crbrandkk;
var sparkthreeii = req.body.cropinionskk;
var smovethreeii = chat;
var cntdbaii = req.body.crnumberkk;
var sboardthreeii = req.body.cropinionskkkkkk;

var stimethreejj = req.body.cropinionsllll;
var sroutethreejj = req.body.crfarell;
var sbrandthreejj = req.body.crroutell;
var snumberthreejj = req.body.crbrandll;
var sparkthreejj = req.body.cropinionsll;
var smovethreejj = chat;
var cntdbajj = req.body.crnumberll;
var sboardthreejj = req.body.cropinionsllllll;

var stimethreekk = req.body.cropinionsmmmm;
var sroutethreekk = req.body.crfaremm;
var sbrandthreekk = req.body.crroutemm;
var snumberthreekk = req.body.crbrandmm;
var sparkthreekk = req.body.cropinionsmm;
var smovethreekk = chat;
var cntdbakk = req.body.crnumbermm;
var sboardthreekk = req.body.cropinionsmmmmmm;

var stimethreell = req.body.cropinionsnnnn;
var sroutethreell = req.body.crfarenn;
var sbrandthreell = req.body.crroutenn;
var snumberthreell = req.body.crbrandnn;
var sparkthreell = req.body.cropinionsnn;
var smovethreell = chat;
var cntdball = req.body.crnumbernn;
var sboardthreell = req.body.cropinionsnnnnnn;

var stimethreemm = req.body.cropinionsoooo;
var sroutethreemm = req.body.crfareoo;
var sbrandthreemm = req.body.crrouteoo;
var snumberthreemm = req.body.crbrandoo;
var sparkthreemm = req.body.cropinionsoo;
var smovethreemm = chat;
var cntdbamm = req.body.crnumberoo;
var sboardthreemm = req.body.cropinionsoooooo;

var stimethreenn = req.body.cropinionspppp;
var sroutethreenn = req.body.crfarepp;
var sbrandthreenn = req.body.crroutepp;
var snumberthreenn = req.body.crbrandpp; 
var sparkthreenn = req.body.cropinionspp;
var smovethreenn = chat;
var cntdbann = req.body.crnumberpp;
var sboardthreenn = req.body.cropinionspppppp;

var stimethreeoo = req.body.cropinionsqqqq;
var sroutethreeoo = req.body.crfareqq;
var sbrandthreeoo = req.body.crrouteqq;
var snumberthreeoo = req.body.crbrandqq;
var sparkthreeoo = req.body.cropinionsqq;
var smovethreeoo = chat;
var cntdbaoo = req.body.crnumberqq;
var sboardthreeoo = req.body.cropinionsqqqqqq;

var stimethreepp = req.body.cropinionsrrrr;
var sroutethreepp = req.body.crfarerr;
var sbrandthreepp = req.body.crrouterr;
var snumberthreepp = req.body.crbrandrr;
var sparkthreepp = req.body.cropinionsrr;
var smovethreepp = chat;
var cntdbapp = req.body.crnumberrr;
var sboardthreepp = req.body.cropinionsrrrrrr;

var stimethreeqq = req.body.cropinionsssss;
var sroutethreeqq = req.body.crfaress;
var sbrandthreeqq = req.body.crroutess;
var snumberthreeqq = req.body.crbrandss;
var sparkthreeqq = req.body.cropinionsss;
var smovethreeqq = chat;
var cntdbaqq = req.body.crnumberss;
var sboardthreeqq = req.body.cropinionsssssss;

var stimethreerr = req.body.cropinionstttt;
var sroutethreerr = req.body.crfarett;
var sbrandthreerr = req.body.crroutett;
var snumberthreerr = req.body.crbrandtt;
var sparkthreerr = req.body.cropinionstt;
var smovethreerr = chat;
var cntdbarr = req.body.crnumbertt;
var sboardthreerr = req.body.cropinionstttttt;

var stimethreess = req.body.cropinionsuuuu;
var sroutethreess = req.body.crfareuu;
var sbrandthreess = req.body.crrouteuu;
var snumberthreess = req.body.crbranduu;
var sparkthreess = req.body.cropinionsuu;
var smovethreess = chat;
var cntdbass = req.body.crnumberuu;
var sboardthreess = req.body.cropinionsuuuuuu;

var stimethreett = req.body.cropinionsvvvv;
var sroutethreett = req.body.crfarevv;
var sbrandthreett = req.body.crroutevv;
var snumberthreett = req.body.crbrandvv;
var sparkthreett = req.body.cropinionsvv;
var smovethreett = chat;
var cntdbatt = req.body.crnumbervv;
var sboardthreett = req.body.cropinionsvvvvvv;

var stimethreeuu = req.body.cropinionswwww;
var sroutethreeuu = req.body.crfareww;
var sbrandthreeuu = req.body.crrouteww;
var snumberthreeuu = req.body.crbrandww;
var sparkthreeuu = req.body.cropinionsww;
var smovethreeuu = chat;
var cntdbauu = req.body.crnumberww;
var sboardthreeuu = req.body.cropinionswwwwww;

var stimethreevv = req.body.cropinionsxxxx;
var sroutethreevv = req.body.crfarexx;
var sbrandthreevv = req.body.crroutexx;
var snumberthreevv = req.body.crbrandxx;
var sparkthreevv = req.body.cropinionsxx;
var smovethreevv = chat;
var cntdbavv = req.body.crnumberxx;
var sboardthreevv = req.body.cropinionsxxxxxx;

//compones out put structure;

var formopen = "<form name='major' id='major' style='width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background-color: none !important; margin-top: -16px;' class='formcc'>";
var formclose = "</form>";
var routea = "<span class='routea' id='routea' style='width: auto; background-color: green !important; padding: 0px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both; min-height:0px; max-height:200px; height:auto; margin: 1px 0px;'>";
var routeaa = "<p class='routea' id='routea' style='width: auto; background-color: green !important; padding: 0px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both; min-height:0px; max-height: ; height:auto; margin: 30px 0px 0px 0px;'>";
var routeaaa = "<p class='routea' id='routeaa' style='width: auto; background-color: green !important; padding: 0px; font-size: normal; font-weight: normal; display: block; float: none; clear: both; min-height:0px; max-height: ; height:auto; margin: 30px 0px 0px 0px;'>";
var routeaae = "<p class='routea' id='routeae' style='width: auto; background-color: green !important; padding: 0px; font-size: 20px; font-weight: bold; display: block; float: none; clear: both; min-height:0px; max-height: ; height:auto; margin: 30px 0px 0px 0px;'>";
var routeaaae = "<p class='routea' id='routeaae' style='width: auto; background-color: green !important; padding: 0px; font-size: normal; font-weight: normal; display: block; float: none; clear: both; min-height:0px; max-height: ; height:auto; margin: 30px 0px 0px 0px;'>";


var routee = "<div class='routea' id='routee' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routei = "<div class='routei' id='routei' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routeo = "<div class='routeo' id='routeo' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";
var routeu = "<div class='routeu' id='routeu' style='width: auto; background-color: green !important; padding: 5px; font-size: 20px; font-weight: bold;'>";

var ampgt = " &gt;";
var ampgta = "&gt;";
var sect = " Route:";


var routclose = " </p> ";
var titlespan = "<span id='titlespan' style='width: auto; display: block; margin-left: 0%; background-color: ; margin: -3px 0 0 0; padding: 0; border: none;'>";
var titlespanhdit = "<span id='titlespan' style='width: auto; display: block; margin-left: 0%; background-color: ; margin: -3px 0 0 0; padding: 0; border: none; visibility: hidden;'>";
var titlespanhd = "<span id='fortitlehd' style='width: auto; display: block; margin-left: 0%; background-color: ; margin: -14px 0 0 0; padding: 0; border: none; font-family: papyrus, sans-serif;'>";
var titlespanhdy = "<span id='fortitlehdy' style='width: auto; display: block; margin-left: 0%; background-color: ; margin: -7px 0 0 0; padding: 0; border: none; visibility: hidden;'>";
var titlespanshn = "<span id='fortitleshn' style='width: auto; display: block; margin-left: 0%; background-color: ; margin: -3px 0 0 0; padding: 0; border: none;'>";
var titlespana = "<span id='titlespana' style='width: auto; display: block; margin-left: 0.5%; margin: -3px 0 0 0; padding: 0; border: none;'>";
titlespanaes = "<span id='titlespanaes' style='width: auto; display: block; margin-left: 0.5%; text-align: center; margin: -3px 0 0 0; padding: 0; border: none;'>";

var spanoutthreeth = "<span id='spanroneoutthree' style='width: 170px; height: auto; margin: 0; padding: 0 0 0 5px; border: none; float: left; clear: left; display:inline;min-height: 0px; text-align: left; overflow: hidden; text-overflow: ellipsis;'>";
var spanoutfourth = "<span id='spanroneoutthreem' style='width: 70px; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display:inline;min-height: 0px; text-align: left; overflow: hidden; text-overflow: ellipsis; visibility: hidden;'>";
var spanoutoneth = "<span id='spanroneoutone' style='width: 200px; height: auto; margin: 0; padding: 0 0 0 5px; border: none; float: left; clear: right; display: inline;  min-height: 0px; text-align: left; overflow: hidden; text-overflow: ellipsis;'>";

var spanoutthreet = "<span id='spanroneoutthreel' style='width: 170px; height: auto; margin: 0; padding: 0; border: none; float: left; clear: left; display:inline;min-height: 0px; text-align: left; overflow: hidden; text-overflow: ellipsis;'>";
var spanoutfourt = "<span id='spanroneoutfour' style='width: 70px; height: auto; margin: 0; padding: 0; border: none; float: left; clear: none; display: inline; min-height: 0px; text-align: left; font-family: papyrus, sans-serif; font-weight: lighter; font-style: italic; overflow: hidden; text-overflow: ellipsis;'>";
var spanoutonet = "<span id='spanroneoutoner' style='width: 200px; height: auto; margin: 0; padding: 0; border: none; float: left; clear: right; display: inline;  min-height: 0px; text-align: left; overflow: hidden; text-overflow: ellipsis;'>";

var spanoutone = "<span id='spanroneoutone' style='width: 15%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: none; display: block;  min-height: 0px; background-color: violet;'>";
var spanouttwo = "<span id='spanroneouttwo' style='width: 17%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: none; display: block; min-height: 0px; background-color: violet; '>";
var spanoutthree = "<span id='spanroneoutthree' style='width: 20%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: left; display: block; min-height: 0px; background-color: violet;'>";
var spanoutfour = "<span id='spanroneoutfour' style='width: 16%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: none; display: block; min-height: 0px; background-color: violet;'>";
var spanoutfive = "<span id='spanroneoutfive' style='width: 8%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: none; display: block; min-height: 0px; background-color: violet;'>";
var spanoutsix = "<span id='spanroneoutsix' style='width: 8%; height: auto; margin: 0; padding: 5px 0; border: none; float: left; clear: none; display: block; min-height: 0px; background-color: violet;'>";
var spanouteight = "<span id='spanroneouteight' style='width: 16%; height: auto; margin: 0; padding: 5px 0; border: none; float: right; clear: right; display: inline-block; block; background-color: violet; text-align: center; min-height: 0px;'>";

var spanina = "<span id='spanina' style='width: auto; height: auto; padding: 8px 4px; margin: -5px 0 4px 0; display: block; background-color: pink; text-align: left;'>";
var spanine = "<span id='spanine' style='width: auto; height: auto; padding: 8px 2% 8px 16%; margin: -5px 0 2% 0; display: block; background-color: pink; text-align: left;'>";
var spanin = "<span id='spanin' style='width: auto; height: auto; padding:0px  0px; margin: 4px auto; display: block; background-color: ;'>";
var spaninrcmp = "<span id='spaninrcmp' class='spaninrcmp' style='width: auto; height: auto; padding: 0px; margin: 0px 0; display: inline-block;'>";
var spaninr = "<span id='spaninr' style='width: auto; height: auto; padding: 4px 0; margin: 4px auto; display: block; min-height: 0px;'>";
var spanink = "<span id='spanink' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: left; clear: left; text-align: right; background-color: ; min-height: 0px;'>";
var spanint = "<span id='spanint' style='width: 50%; height: auto; padding: 0px; margin: 4px auto; display: block; float: right; clear: right; background-color: ; min-height: 0px;'>";

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
//Board anchors
banchora = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorb = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorc = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchord = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchore = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorf = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorg = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorh = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchori = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorj = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchork = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorl = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorm = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorn = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoro = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorp = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorq = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorr = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchors = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchort = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoru = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorv = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorw = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorx = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchory = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorz = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoraa = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorab = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorac = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorad = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorae = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoraf = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorag = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorah = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorai = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoraj = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorak = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoral = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoram = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoran = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorao = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorap = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoraq = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorar = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoras = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorat = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorau = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorav = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchoraw = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";
banchorax = "<a href='../../msrc/paymentmethod.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='fobod'>";





//LiveChat anchors
var sboardroneanchor = "<a href='../../../publicts/index.html' name='sboardone' id='sboardone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;' class='folchat'>";

var sboardrtwoanchor = "<a href='' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthreeanchor = "<a href='' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfouranchor = "<a href='' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfiveanchor = "<a href='' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrsixanchor = "<a href='' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrsevenanchor = "<a href='' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardreightanchor = "<a href='' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrnineanchor = "<a href='' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtenanchor = "<a href='' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrelevenanchor = "<a href='' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwelveanchor = "<a href='' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirteenanchor = "<a href='' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourteenanchor = "<a href='' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfifeteenanchor = "<a href='' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrsixteenanchor = "<a href='' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrseventeenanchor = "<a href='' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardreighteenanchor = "<a href='' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrnineteenanchor = "<a href='' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentyanchor = "<a href='' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentyoneanchor = "<a href='' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentytwoanchor = "<a href='' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentythreeanchor = "<a href='' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentyfouranchor = "<a href='' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentyfiveanchor = "<a href='' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentysixanchor = "<a href='' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentysevenanchor = "<a href='' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentyeightanchor = "<a href='' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrtwentynineanchor = "<a href='' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtyanchor = "<a href='' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtyoneanchor = "<a href='' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtytwoanchor = "<a href='' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtythreeanchor = "<a href='' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtyfouranchor = "<a href='' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtyfiveanchor = "<a href='' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtysixanchor = "<a href='' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtysevenanchor = "<a href='' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtyeightanchor = "<a href='' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrthirtynineanchor = "<a href='' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtyanchor = "<a href='' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtyoneanchor = "<a href='' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtytwoanchor = "<a href='' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtythreeanchor = "<a href='' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtyfouranchor = "<a href='' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtyfiveanchor = "<a href='' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtysixanchor = "<a href='' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtysevenanchor = "<a href='' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtyeightanchor = "<a href='' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfourtynineanchor = "<a href='' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";

var sboardrfifetyanchor = "<a href='' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;' class='folchat'>";


//track anchors
var sboardroneanchora = "<a href='../../schedules/public/trackinfop/tracka.html' name='sboardone' id='sboardone' style='height: auto; width: auto; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin: 0px auto; display: inline-block;'>";

var sboardrtwoanchorb = "<a href='../../schedules/public/trackinfop/trackb.html' name='sboardtwo' id='sboardtwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthreeanchorc = "<a href='../../schedules/public/trackinfop/trackc.html' name='sboardthree' id='sboardthree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfouranchord = "<a href='../../schedules/public/trackinfop/trackd.html' name='sboardfour' id='sboardfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfiveanchore = "<a href='../../schedules/public/trackinfop/tracke.html' name='sboardfive' id='sboardfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixanchorf = "<a href='../../schedules/public/trackinfop/trackf.html' name='sboardsix' id='sboardsix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsevenanchorg = "<a href='../../schedules/public/trackinfop/trackg.html' name='sboardseven' id='sboardseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreightanchorh = "<a href='../../schedules/public/trackinfop/trackh.html' name='sboardeight' id='sboardeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineanchori = "<a href='../../schedules/public/trackinfop/tracki.html' name='sboardnine' id='sboardnine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtenanchorj = "<a href='../../schedules/public/trackinfop/trackj.html' name='sboardten' id='sboardten' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrelevenanchork = "<a href='../../schedules/public/trackinfop/trackk.html' name='sboardeleven' id='sboardeleven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwelveanchorl = "<a href='../../schedules/public/trackinfop/trackl.html' name='sboardtwelve' id='sboardtwelve' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirteenanchorm = "<a href='../../schedules/public/trackinfop/trackm.html' name='sboardthirteen' id='sboardthirteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourteenanchorn = "<a href='../../schedules/public/trackinfop/trackn.html' name='sboardfourteen' id='sboardfourteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifeteenanchoro = "<a href='../../schedules/public/trackinfop/tracko.html' name='sboardfifeteen' id='sboardfifeteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrsixteenanchorp = "<a href='../../schedules/public/trackinfop/trackp.html' name='sboardsixteen' id='sboardsixteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrseventeenanchorq = "<a href='../../schedules/public/trackinfop/trackq.html' name='sboardseventeen' id='sboardseventeen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardreighteenanchorr = "<a href='../../schedules/public/trackinfop/trackr.html' name='sboardeighteen' id='sboardeighteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrnineteenanchors = "<a href='../../schedules/public/trackinfop/tracks.html' name='sboardnineteen' id='sboardnineteen' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyanchort = "<a href='../../schedules/public/trackinfop/trackt.html' name='sboardtwenty' id='sboardtwenty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyoneanchoru = "<a href='../../schedules/public/trackinfop/tracku.html' name='sboardtwentyone' id='sboardtwentyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentytwoanchorv = "<a href='../../schedules/public/trackinfop/trackv.html' name='sboardtwentytwo' id='sboardtwentytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentythreeanchorw = "<a href='../../schedules/public/trackinfop/trackw.html' name='sboardtwentythree' id='sboardtwentythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfouranchorx = "<a href='../../schedules/public/trackinfop/trackx.html' name='sboardtwentyfour' id='sboardtwentyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyfiveanchory = "<a href='../../schedules/public/trackinfop/tracky.html' name='sboardtwentyfive' id='sboardtwentyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysixanchorz = "<a href='../../schedules/public/trackinfop/trackz.html' name='sboardtwentysix' id='sboardtwentysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentysevenanchora = "<a href='../../schedules/public/trackinfop/trackaa.html' name='sboardtwentyseven' id='sboardtwentyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentyeightanchorb = "<a href='../../schedules/public/trackinfop/trackbb.html' name='sboardtwentyeight' id='sboardtwentyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrtwentynineanchorc = "<a href='../../schedules/public/trackinfop/trackcc.html' name='sboardtwentynine' id='sboardtwentynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyanchord = "<a href='../../schedules/public/trackinfop/trackdd.html' name='sboardthirty' id='sboardthirty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyoneanchore = "<a href='../../schedules/public/trackinfop/trackee.html' name='sboardthirtyone' id='sboardthirtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtytwoanchorf = "<a href='../../schedules/public/trackinfop/trackff.html' name='sboardthirtytwo' id='sboardthirtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtythreeanchorg = "<a href='../../schedules/public/trackinfop/trackgg.html' name='sboardthirtythree' id='sboardthirtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfouranchorh = "<a href='../../schedules/public/trackinfop/trackhh.html' name='sboardthirtyfour' id='sboardthirtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyfiveanchori = "<a href='../../schedules/public/trackinfop/trackii.html' name='sboardthirtyfive' id='sboardthirtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysixanchorj = "<a href='../../schedules/public/trackinfop/trackjj.html' name='sboardthirtysix' id='sboardthirtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtysevenanchork = "<a href='../../schedules/public/trackinfop/trackkk.html' name='sboardthirtyseven' id='sboardthirtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtyeightanchorl = "<a href='../../schedules/public/trackinfop/trackll.html' name='sboardthirtyeight' id='sboardthirtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrthirtynineanchorm = "<a href='../../schedules/public/trackinfop/trackmm.html' name='sboardthirtynine' id='sboardthirtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyanchorn = "<a href='../../schedules/public/trackinfop/tracknn.html' name='sboardfourty' id='sboardfourty' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyoneanchoro = "<a href='../../schedules/public/trackinfop/trackoo.html' name='sboardfourtyone' id='sboardfourtyone' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtytwoanchorp = "<a href='../../schedules/public/trackinfop/trackpp.html' name='sboardfourtytwo' id='sboardfourtytwo' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtythreeanchorq = "<a href='../../schedules/public/trackinfop/trackqq.html' name='sboardfourtythree' id='sboardfourtythree' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfouranchorr = "<a href='../../schedules/public/trackinfop/trackrr.html' name='sboardfourtyfour' id='sboardfourtyfour' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyfiveanchors = "<a href='../../schedules/public/trackinfop/trackss.html' name='sboardfourtyfive' id='sboardfourtyfive' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysixanchort = "<a href='../../schedules/public/trackinfop/tracktt.html' name='sboardfourtysix' id='sboardfourtysix' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtysevenanchoru = "<a href='../../schedules/public/trackinfop/trackuu.html' name='sboardfourtyseven' id='sboardfourtyseven' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtyeightanchorv = "<a href='../../schedules/public/trackinfop/trackvv.html' name='sboardfourtyeight' id='sboardfourtyeight' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfourtynineanchorw = "<a href='../../schedules/public/trackinfop/trackww.html' name='sboardfourtynine' id='sboardfourtynine' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

var sboardrfifetyanchorx = "<a href='../../schedules/public/trackinfop/trackxx.html' name='sboardfifety' id='sboardfifety' style='height: auto; width: 40px; min-height: 0px; background-color: orange; border-radius: 3px/4px; padding: 0px 8px; text-decoration: none; margin-top: 0px; display: inline-block;'>";

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
var mainzz = "<main id='mainzz' class='mainzz' style='height: 200px; background-color: yellow; display: block; margin-top: 20px; padding: 0; border: none;'>";
var mainclose = "</main>";
var loclose = "</div>";
var leftloa = "<div class='leftloa' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var leftloae = "<div class='leftloae' style='width: 100%; margin: 0; padding: 0; border: none;'>";
var rightsloa = "<div class='rightsloa' style='width: 100%; background-color: brown; margin: 0; padding: 0; border: none;'>";
var bottomsloa = "<div class='bottomsloa' style=' width: 100%; margin: 0; padding: 0; border: none;'>";
var keydivs = "<div class='alldivs' style='background-color: ; padding: 4px;'>";
var divclose = "</div>";
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


var showcc = "<!DOCTYPE html>" + "<html>" + "<head>" + "<meta charset='utf8'/>" + "<meta name='viewport' content='width=device-width, initial-scale=1'/>" +"<link rel='stylesheet' href='../../css/main.css' media='screen and (min-width: 0px) and (max-width: 899px)'/>" +"<link rel='stylesheet' href='../../css/big.css' media='screen and (min-width: 900px) and (max-width: 4000px)'/>" + "<style>" + "</style>" + "<script>" + fn + spaceit + fnnamena +   openbrace + eef + openbracket + layoutna + equivalent + empty + closebracket + openbrace + layoutnas + equal + displayoffit + clsb + eelse + openbrace + layoutnas + equal + displayonit + closebrace + closebrace +           fn + spaceit + fnnamea +   openbrace + eef + openbracket + layoutan + equivalent + empty + closebracket + openbrace + layouta + equal + displayoffit + clsb + eelse + openbrace + layouta + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnameb +   openbrace + eef + openbracket + layoutbn + equivalent + empty + closebracket + openbrace + layoutb + equal + displayoffit + clsb + eelse + openbrace + layoutb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamec +   openbrace + eef + openbracket + layoutcn + equivalent + empty + closebracket + openbrace + layoutc + equal + displayoffit + clsb + eelse + openbrace + layoutc + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamed +   openbrace + eef + openbracket + layoutdn + equivalent + empty + closebracket + openbrace + layoutd + equal + displayoffit + clsb + eelse + openbrace + layoutd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamee +   openbrace + eef + openbracket + layouten + equivalent + empty + closebracket + openbrace + layoute + equal + displayoffit + clsb + eelse + openbrace + layoute + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamef +   openbrace + eef + openbracket + layoutfn + equivalent + empty + closebracket + openbrace + layoutf + equal + displayoffit + clsb + eelse + openbrace + layoutf + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameg +   openbrace + eef + openbracket + layoutgn + equivalent + empty + closebracket + openbrace + layoutg + equal + displayoffit + clsb + eelse + openbrace + layoutg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameh +   openbrace + eef + openbracket + layouthn + equivalent + empty + closebracket + openbrace + layouth + equal + displayoffit + clsb + eelse + openbrace + layouth + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamei +   openbrace + eef + openbracket + layoutin + equivalent + empty + closebracket + openbrace + layouti + equal + displayoffit + clsb + eelse + openbrace + layouti + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamej +   openbrace + eef + openbracket + layoutjn + equivalent + empty + closebracket + openbrace + layoutj + equal + displayoffit + clsb + eelse + openbrace + layoutj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamek +   openbrace + eef + openbracket + layoutkn + equivalent + empty + closebracket + openbrace + layoutk + equal + displayoffit + clsb + eelse + openbrace + layoutk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamel +   openbrace + eef + openbracket + layoutln + equivalent + empty + closebracket + openbrace + layoutl + equal + displayoffit + clsb + eelse + openbrace + layoutl + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamem +   openbrace + eef + openbracket + layoutmn + equivalent + empty + closebracket + openbrace + layoutm + equal + displayoffit + clsb + eelse + openbrace + layoutm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamen +   openbrace + eef + openbracket + layoutnnspn + equivalent + empty + closebracket + openbrace + layoutn + equal + displayoffit + clsb + eelse + openbrace + layoutn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameo +   openbrace + eef + openbracket + layouton + equivalent + empty + closebracket + openbrace + layouto + equal + displayoffit + clsb + eelse + openbrace + layouto + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamep +   openbrace + eef + openbracket + layoutpn + equivalent + empty + closebracket + openbrace + layoutp + equal + displayoffit + clsb + eelse + openbrace + layoutp + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameq +   openbrace + eef + openbracket + layoutqn + equivalent + empty + closebracket + openbrace + layoutq + equal + displayoffit + clsb + eelse + openbrace + layoutq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamer +   openbrace + eef + openbracket + layoutrn + equivalent + empty + closebracket + openbrace + layoutr + equal + displayoffit + clsb + eelse + openbrace + layoutr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnames +   openbrace + eef + openbracket + layoutsn + equivalent + empty + closebracket + openbrace + layouts + equal + displayoffit + clsb + eelse + openbrace + layouts + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamet +   openbrace + eef + openbracket + layouttn + equivalent + empty + closebracket + openbrace + layoutt + equal + displayoffit + clsb + eelse + openbrace + layoutt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameu +   openbrace + eef + openbracket + layoutun + equivalent + empty + closebracket + openbrace + layoutu + equal + displayoffit + clsb + eelse + openbrace + layoutu + equal + displayonit + closebrace + closebrace +        fn + spaceit + fnnamev +   openbrace + eef + openbracket + layoutvn + equivalent + empty + closebracket + openbrace + layoutv + equal + displayoffit + clsb + eelse + openbrace + layoutv + equal + displayonit + closebrace + closebrace +          fn + spaceit + fnnamew +   openbrace + eef + openbracket + layoutwn + equivalent + empty + closebracket + openbrace + layoutw + equal + displayoffit + clsb + eelse + openbrace + layoutw + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamex +   openbrace + eef + openbracket + layoutxn + equivalent + empty + closebracket + openbrace + layoutx + equal + displayoffit + clsb + eelse + openbrace + layoutx + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamey +   openbrace + eef + openbracket + layoutyn + equivalent + empty + closebracket + openbrace + layouty + equal + displayoffit + clsb + eelse + openbrace + layouty + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamez +   openbrace + eef + openbracket + layoutzn + equivalent + empty + closebracket + openbrace + layoutz + equal + displayoffit + clsb + eelse + openbrace + layoutz + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameaa +   openbrace + eef + openbracket + layoutaan + equivalent + empty + closebracket + openbrace + layoutaa + equal + displayoffit + clsb + eelse + openbrace + layoutaa + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamebb +   openbrace + eef + openbracket + layoutbbn + equivalent + empty + closebracket + openbrace + layoutbb + equal + displayoffit + clsb + eelse + openbrace + layoutbb + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamecc +   openbrace + eef + openbracket + layoutccn + equivalent + empty + closebracket + openbrace + layoutcc + equal + displayoffit + clsb + eelse + openbrace + layoutcc + equal + displayonit + closebrace + closebrace +             fn + spaceit + fnnamedd +   openbrace + eef + openbracket + layoutddn + equivalent + empty + closebracket + openbrace + layoutdd + equal + displayoffit + clsb + eelse + openbrace + layoutdd + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameee +   openbrace + eef + openbracket + layouteen + equivalent + empty + closebracket + openbrace + layoutee + equal + displayoffit + clsb + eelse + openbrace + layoutee + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameff +   openbrace + eef + openbracket + layoutffn + equivalent + empty + closebracket + openbrace + layoutff + equal + displayoffit + clsb + eelse + openbrace + layoutff + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamegg +   openbrace + eef + openbracket + layoutggn + equivalent + empty + closebracket + openbrace + layoutgg + equal + displayoffit + clsb + eelse + openbrace + layoutgg + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamehh +   openbrace + eef + openbracket + layouthhn + equivalent + empty + closebracket + openbrace + layouthh + equal + displayoffit + clsb + eelse + openbrace + layouthh + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameii +   openbrace + eef + openbracket + layoutiin + equivalent + empty + closebracket + openbrace + layoutii + equal + displayoffit + clsb + eelse + openbrace + layoutii + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamejj +   openbrace + eef + openbracket + layoutjjn + equivalent + empty + closebracket + openbrace + layoutjj + equal + displayoffit + clsb + eelse + openbrace + layoutjj + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamekk +   openbrace + eef + openbracket + layoutkkn + equivalent + empty + closebracket + openbrace + layoutkk + equal + displayoffit + clsb + eelse + openbrace + layoutkk + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamell +   openbrace + eef + openbracket + layoutlln + equivalent + empty + closebracket + openbrace + layoutll + equal + displayoffit + clsb + eelse + openbrace + layoutll + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamemm +   openbrace + eef + openbracket + layoutmmn + equivalent + empty + closebracket + openbrace + layoutmm + equal + displayoffit + clsb + eelse + openbrace + layoutmm + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamenn +   openbrace + eef + openbracket + layoutnnn + equivalent + empty + closebracket + openbrace + layoutnn + equal + displayoffit + clsb + eelse + openbrace + layoutnn + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameoo +   openbrace + eef + openbracket + layoutoon + equivalent + empty + closebracket + openbrace + layoutoo + equal + displayoffit + clsb + eelse + openbrace + layoutoo + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamepp +   openbrace + eef + openbracket + layoutppn + equivalent + empty + closebracket + openbrace + layoutpp + equal + displayoffit + clsb + eelse + openbrace + layoutpp + equal + displayonit + closebrace + closebrace +                 fn + spaceit + fnnameqq +   openbrace + eef + openbracket + layoutqqn + equivalent + empty + closebracket + openbrace + layoutqq + equal + displayoffit + clsb + eelse + openbrace + layoutqq + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamerr +   openbrace + eef + openbracket + layoutrrn + equivalent + empty + closebracket + openbrace + layoutrr + equal + displayoffit + clsb + eelse + openbrace + layoutrr + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamess +   openbrace + eef + openbracket + layoutssn + equivalent + empty + closebracket + openbrace + layoutss + equal + displayoffit + clsb + eelse + openbrace + layoutss + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamett +   openbrace + eef + openbracket + layoutttn + equivalent + empty + closebracket + openbrace + layouttt + equal + displayoffit + clsb + eelse + openbrace + layouttt + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameuu +   openbrace + eef + openbracket + layoutuun + equivalent + empty + closebracket + openbrace + layoutuu + equal + displayoffit + clsb + eelse + openbrace + layoutuu + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamevv +   openbrace + eef + openbracket + layoutvvn + equivalent + empty + closebracket + openbrace + layoutvv + equal + displayoffit + clsb + eelse + openbrace + layoutvv + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnameww +   openbrace + eef + openbracket + layoutwwn + equivalent + empty + closebracket + openbrace + layoutww + equal + displayoffit + clsb + eelse + openbrace + layoutww + equal + displayonit + closebrace + closebrace +              fn + spaceit + fnnamexx +   openbrace + eef + openbracket + layoutxxn + equivalent + empty + closebracket + openbrace + layoutxx + equal + displayoffit + clsb + eelse + openbrace + layoutxx + equal + displayonit + closebrace + closebrace +              "</script>" + "</head>" + "<body class='cchargeclass' style='background-color: ; margin: 0; padding: 0; border: none;' onload='openclosena() || openclosea() || opencloseb() || openclosec() || openclosed() || openclosee() || openclosef() || opencloseg() || opencloseh() || openclosei() || openclosej() || openclosek() || openclosel() || openclosem() || openclosen() || opencloseo() || openclosep() || opencloseq() || opencloser() || opencloses() || opencloset() || opencloseu() || openclosev() || openclosew() || openclosex() || openclosey() || openclosez() || opencloseaa() || openclosebb() || openclosecc() || openclosedd() || opencloseee() || opencloseff() || openclosegg() || openclosehh() || opencloseii() || openclosejj() || openclosekk() || openclosell() || openclosemm() || openclosenn() || opencloseoo() || openclosepp() || opencloseqq() || opencloserr() || openclosess() || openclosett() || opencloseuu() || openclosevv() || opencloseww() || openclosexx()'>" + formopen + mainzz +keydivs +spaninrcmp + cccompname  + spanclose + divclose +keydivs + "Current Charges" + divclose + mainclose  +  maina + routeaae + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaae +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +    leftloae +      spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +        rightsloa +  spanoutthree + spanin + spaninr + sbrandone + spanclose + spanclose + spanclose + spanoutfour + spanin + spaninr + snumberone + spanclose + spanclose + spanclose + spanoutone + spanin + spaninra + cntdbaaa + spanclose + spanclose + spanclose + spanouttwo + spanin + spaninr + srouteone + spanclose + spanclose + spanclose + spanoutfive + spanin + spaninr + sparkone + spanclose + spanclose + spanclose + loclose +      bottomsloa +  spanoutsix + spanin + spaninr + banchora +  stimeone + anchorclose + spanclose + spanclose + spanclose +  spanouteight + spanin + spaninr + spanink +  sboardroneanchor + smoveone + anchorclose + spanclose + spanint + sboardroneanchora + sboardone + anchorclose + spanclose + spanclose +   spanclose + spanclose+  loclose +   mainclose   +                mainb +   routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +     spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +  leftloa +  spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose   + loclose +         rightsloa +    spanoutthree + spaninr + sbrandtwo + spanclose + spanclose + spanoutfour + spaninr + snumbertwo + spanclose + spanclose + spanoutone + spaninrb + cntdbaab + spanclose + spanclose + spanouttwo + spaninr + sroutetwo + spanclose + spanclose + spanoutfive + spaninr + sparktwo + spanclose + spanclose + loclose +        bottomsloa +   spanoutsix + spaninr + banchorb +   stimetwo + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwoanchor + smovetwo + anchorclose + spanclose + spanint + sboardrtwoanchorb + sboardtwo + anchorclose + spanclose + spanclose + spanclose  + loclose +   mainclose +      mainc + routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +   leftloa + spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +   loclose +    rightsloa +   spanoutthree + spaninr + sbrandthree + spanclose + spanclose + spanoutfour + spaninr + snumberthree + spanclose + spanclose + spanoutone + spaninrc + cntdbaa + spanclose + spanclose + spanouttwo + spaninr + sroutethree + spanclose + spanclose + spanoutfive + spaninr + sparkthree + spanclose + spanclose +  loclose +    bottomsloa +   spanoutsix + spaninr + banchorc +   stimethree + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthreeanchor + smovethree + anchorclose + spanclose + spanint + sboardrthreeanchorc + sboardthree + anchorclose + spanclose + spanclose + spanclose  +   loclose +     mainclose +       maind +    routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +  leftloa +   spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +    loclose +        rightsloa +    spanoutthree + spaninr + sbrandthreeb + spanclose + spanclose + spanoutfour + spaninr + snumberthreeb + spanclose + spanclose + spanoutone + spaninrd + cntdbab + spanclose + spanclose + spanouttwo + spaninr + sroutethreeb + spanclose + spanclose + spanoutfive + spaninr + sparkthreeb + spanclose + spanclose + loclose +    bottomsloa +    spanoutsix + spaninr + banchord +   stimethreeb + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfouranchor + smovethreeb + anchorclose + spanclose + spanint + sboardrfouranchord + sboardthreeb + anchorclose + spanclose + spanclose + spanclose +   loclose +    mainclose +           maine +  routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +   leftloa +    spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  + loclose +        rightsloa +    spanoutthree + spaninr + sbrandthreec + spanclose + spanclose + spanoutfour + spaninr + snumberthreec + spanclose + spanclose + spanoutone + spaninre + cntdbac + spanclose + spanclose + spanouttwo + spaninr +  sroutethreec + spanclose + spanclose + spanoutfive + spaninr + sparkthreec + spanclose + spanclose +  loclose +   bottomsloa +   spanoutsix + spaninr + banchore +  stimethreec + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfiveanchor + smovethreec + anchorclose + spanclose + spanint + sboardrfiveanchore + sboardthreec + anchorclose + spanclose + spanclose + spanclose + loclose +       mainclose +    mainf +  routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +  leftloa +   spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +   loclose +      rightsloa +   spanoutthree + spaninr + sbrandthreed + spanclose + spanclose + spanoutfour + spaninr + snumberthreed + spanclose + spanclose + spanoutone + spaninrf + cntdbad + spanclose + spanclose + spanouttwo + spaninr + sroutethreed + spanclose + spanclose + spanoutfive + spaninr + sparkthreed + spanclose + spanclose + loclose +   bottomsloa +  spanoutsix + spaninr + banchorf +   stimethreed + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrsixanchor + smovethreed + anchorclose + spanclose + spanint + sboardrsixanchorf + sboardthreed + anchorclose + spanclose + spanclose + spanclose +  loclose +     mainclose +          maing +  routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +  leftloa +    spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +   loclose +      rightsloa +   spanoutthree + spaninr + sbrandthreee + spanclose + spanclose + spanoutfour + spaninr + snumberthreee + spanclose + spanclose + spanoutone + spaninrg + cntdbae + spanclose + spanclose + spanouttwo + spaninr + sroutethreee + spanclose + spanclose + spanoutfive + spaninr + sparkthreee + spanclose + spanclose +  loclose +       bottomsloa + spanoutsix + spaninr + banchorg +   stimethreee + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrsevenanchor + smovethreee + anchorclose + spanclose + spanint + sboardrsevenanchorg + sboardthreee + anchorclose + spanclose + spanclose + spanclose +   loclose +     mainclose +         mainh + routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +  leftloa +    spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +   loclose +      rightsloa +         spanoutthree + spaninr + sbrandthreef + spanclose + spanclose + spanoutfour + spaninr + snumberthreef + spanclose + spanclose + spanoutone + spaninrh + cntdbaf + spanclose + spanclose + spanouttwo + spaninr + sroutethreef + spanclose + spanclose + spanoutfive + spaninr + sparkthreef + spanclose + spanclose +   loclose +       bottomsloa +  spanoutsix + spaninr + banchorh +   stimethreef + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardreightanchor + smovethreef + anchorclose + spanclose + spanint + sboardreightanchorh + sboardthreef + anchorclose + spanclose + spanclose + spanclose +    loclose +     mainclose +        maini +  routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +   leftloa +  spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +      loclose +      rightsloa +      spanoutthree + spaninr + sbrandthreeg + spanclose + spanclose + spanoutfour + spaninr + snumberthreeg + spanclose + spanclose +  spanoutone + spaninri + cntdbag + spanclose + spanclose + spanouttwo + spaninr + sroutethreeg + spanclose + spanclose + spanoutfive + spaninr + sparkthreeg + spanclose + spanclose +   loclose +       bottomsloa +   spanoutsix + spaninr + banchori +   stimethreeg + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrnineanchor + smovethreeg + anchorclose + spanclose + spanint + sboardrnineanchori + sboardthreeg + anchorclose + spanclose + spanclose + spanclose +      loclose +     mainclose +        mainj +    routeaa + spanoutthreet + origintitlea + spanclose + spanoutfourth + toacc + spanclose + spanoutonet + destinytitlea + spanclose + routclose + routeaaa +  spanoutthreeth + firstroute + spanclose + spanoutfourt + toacc + spanclose + spanoutoneth + stitlea + spanclose + routclose +    leftloa +   spanoutthree + spanina + titlespanhd + viaa + spanclose + titlespanshn + headingonea + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingtwoa + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonea + spanclose + titlespana + headingthreea + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfoura + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonea + spanclose + titlespan + headingfivea + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonea + spanclose + titlespanhdit + headingsixa + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonea + spanclose + titlespanaes + headingsevena + spanclose + spanclose + spanclose  +      loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreeh + spanclose + spanclose + spanoutfour + spaninr + snumberthreeh + spanclose + spanclose + spanoutone + spaninrj + cntdbah + spanclose + spanclose + spanouttwo + spaninr + sroutethreeh + spanclose + spanclose + spanoutfive + spaninr + sparkthreeh + spanclose + spanclose +    loclose +       bottomsloa +  spanoutsix + spaninr + banchorj +   stimethreeh + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtenanchor + smovethreeh + anchorclose + spanclose + spanint + sboardrtenanchorj + sboardthreeh + anchorclose + spanclose + spanclose + spanclose +        loclose +     mainclose +        maink +    routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa +    spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +       loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreei + spanclose + spanclose + spanoutfour + spaninr + snumberthreei + spanclose + spanclose + spanoutone + spaninrk + cntdbai + spanclose + spanclose + spanouttwo + spaninr + sroutethreei + spanclose + spanclose + spanoutfive + spaninr + sparkthreei + spanclose + spanclose +    loclose +       bottomsloa +   spanoutsix + spaninr + banchork +   stimethreei + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrelevenanchor + smovethreei + anchorclose + spanclose + spanint + sboardrelevenanchork + sboardthreei + anchorclose + spanclose + spanclose + spanclose +      loclose +     mainclose +                mainl +    routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +      leftloa +       spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +  loclose +      rightsloa +                      spanoutthree + spaninr + sbrandthreej + spanclose + spanclose + spanoutfour + spaninr + snumberthreej + spanclose + spanclose + spanoutone + spaninrl + cntdbaj + spanclose + spanclose + spanouttwo + spaninr + sroutethreei + spanclose + spanclose + spanoutfive + spaninr + sparkthreej + spanclose + spanclose +    loclose +       bottomsloa +  spanoutsix + spaninr + banchorl +   stimethreej + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwelveanchor + smovethreej + anchorclose + spanclose + spanint + sboardrtwelveanchorl + sboardthreej + anchorclose + spanclose + spanclose + spanclose +      loclose +     mainclose +       mainm +            routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +    leftloa +  spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +            loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreek + spanclose + spanclose + spanoutfour + spaninr + snumberthreek + spanclose + spanclose + spanoutone + spaninrm + cntdbak + spanclose + spanclose + spanouttwo + spaninr + sroutethreek + spanclose + spanclose + spanoutfive + spaninr + sparkthreek + spanclose + spanclose +     loclose +       bottomsloa +  spanoutsix + spaninr + banchorm +   stimethreek + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirteenanchor + smovethreek + anchorclose + spanclose + spanint + sboardrthirteenanchorm + sboardthreek + anchorclose + spanclose + spanclose + spanclose +           loclose +     mainclose +         mainn  +     routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +    leftloa  +  spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +            loclose +      rightsloa +         spanoutthree + spaninr + sbrandthreel + spanclose + spanclose + spanoutfour + spaninr + snumberthreel + spanclose + spanclose + spanoutone + spaninrn + cntdbal + spanclose + spanclose + spanouttwo + spaninr + sroutethreel + spanclose + spanclose + spanoutfive + spaninr + sparkthreel + spanclose + spanclose + loclose +       bottomsloa + spanoutsix + spaninr + banchorn +   stimethreel + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourteenanchor + smovethreel + anchorclose + spanclose + spanint + sboardrfourteenanchorn + sboardthreel + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +         maino  +        routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa  +  spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +                loclose +      rightsloa +               spanoutthree + spaninr + sbrandthreem + spanclose + spanclose + spanoutfour + spaninr + snumberthreem + spanclose + spanclose + spanoutone + spaninro + cntdbam + spanclose + spanclose + spanouttwo + spaninr + sroutethreem + spanclose + spanclose + spanoutfive + spaninr + sparkthreem + spanclose + spanclose +  loclose +       bottomsloa + spanoutsix + spaninr + banchoro +   stimethreem + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfifeteenanchor + smovethreem + anchorclose + spanclose + spanint + sboardrfifeteenanchoro + sboardthreem + anchorclose + spanclose + spanclose + spanclose +           loclose +     mainclose +         mainp  +        routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose + leftloa  +   spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +          loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreen + spanclose + spanclose + spanoutfour + spaninr + snumberthreen + spanclose + spanclose + spanoutone + spaninrp + cntdban + spanclose + spanclose + spanouttwo + spaninr + sroutethreen + spanclose + spanclose + spanoutfive + spaninr + sparkthreen + spanclose + spanclose + loclose +       bottomsloa +  spanoutsix + spaninr + banchorp +   stimethreen + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrsixteenanchor + smovethreen + anchorclose + spanclose + spanint + sboardrsixteenanchorp + sboardthreen + anchorclose + spanclose + spanclose + spanclose +       loclose +     mainclose +         mainq  +            routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa  +    spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +                  loclose +      rightsloa +                 spanoutthree + spaninr + sbrandthreeo + spanclose + spanclose + spanoutfour + spaninr + snumberthreeo + spanclose + spanclose +  spanoutone + spaninrq + cntdbao + spanclose + spanclose + spanouttwo + spaninr + sroutethreeo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeo + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchorq +   stimethreeo + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrseventeenanchor + smovethreeo + anchorclose + spanclose + spanint + sboardrseventeenanchorq + sboardthreeo + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +         mainr  +             routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa  +  spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +                   loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreep + spanclose + spanclose + spanoutfour + spaninr + snumberthreep + spanclose + spanclose +  spanoutone + spaninrr + cntdbap + spanclose + spanclose + spanouttwo + spaninr + sroutethreep + spanclose + spanclose + spanoutfive + spaninr + sparkthreep + spanclose + spanclose +  loclose +       bottomsloa +   spanoutsix + spaninr + banchorr +   stimethreep + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardreighteenanchor + smovethreep + anchorclose + spanclose + spanint + sboardreighteenanchorr + sboardthreep + anchorclose + spanclose + spanclose + spanclose +             loclose +     mainclose +         mains  +                 routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +                   loclose +      rightsloa +                    spanoutthree + spaninr + sbrandthreeq + spanclose + spanclose + spanoutfour + spaninr + snumberthreeq + spanclose + spanclose + spanoutone + spaninrs + cntdbaq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeq + spanclose + spanclose +   loclose +       bottomsloa +   spanoutsix + spaninr + banchors +   stimethreeq + anchorclose + spanclose + spanclose +   spanouteight + spaninr + spanink +  sboardrnineteenanchor + smovethreeq + anchorclose + spanclose + spanint + sboardrnineteenanchors + sboardthreeq + anchorclose + spanclose + spanclose + spanclose +               loclose +     mainclose +         maint  +             routeaa + spanoutthreet + origintitleb + spanclose + spanoutfourth + tobcc + spanclose + spanoutonet + destinytitleb + spanclose + routclose + routeaaa +  spanoutthreeth + secondroute + spanclose + spanoutfourt + tobcc + spanclose + spanoutoneth + stitleb + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viab + spanclose + titlespanshn + headingoneb + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingtwob + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoneb + spanclose + titlespana + headingthreeb + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfourb + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoneb + spanclose + titlespan + headingfiveb + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoneb + spanclose + titlespanhdit + headingsixb + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoneb + spanclose + titlespanaes + headingsevenb + spanclose + spanclose + spanclose  +                  loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreer + spanclose + spanclose + spanoutfour + spaninr + snumberthreer + spanclose + spanclose + spanoutone + spaninrt + cntdbar + spanclose + spanclose + spanouttwo + spaninr + sroutethreer + spanclose + spanclose + spanoutfive + spaninr + sparkthreer + spanclose + spanclose + loclose +       bottomsloa +    spanoutsix + spaninr + banchort +   stimethreer + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentyanchor + smovethreer + anchorclose + spanclose + spanint + sboardrtwentyanchort + sboardthreer + anchorclose + spanclose + spanclose + spanclose +          loclose +     mainclose +            mainu  +       routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +    leftloa  +  spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +              loclose +      rightsloa +        spanoutthree + spaninr + sbrandthrees + spanclose + spanclose + spanoutfour + spaninr + snumberthrees + spanclose + spanclose + spanoutone + spaninru + cntdbas + spanclose + spanclose + spanouttwo + spaninr + sroutethrees + spanclose + spanclose + spanoutfive + spaninr + sparkthrees + spanclose + spanclose + loclose +       bottomsloa +    spanoutsix + spaninr + banchoru +   stimethrees + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentyoneanchor + smovethrees + anchorclose + spanclose + spanint + sboardrtwentyoneanchoru + sboardthrees + anchorclose + spanclose + spanclose + spanclose +              loclose +     mainclose +            mainv  +   routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +  leftloa  +  spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +        loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreet + spanclose + spanclose + spanoutfour + spaninr + snumberthreet + spanclose + spanclose + spanoutone + spaninrv + cntdbat + spanclose + spanclose + spanouttwo + spaninr + sroutethreet + spanclose + spanclose + spanoutfive + spaninr + sparkthreet + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchorv +   stimethreet + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentytwoanchor + smovethreet + anchorclose + spanclose + spanint + sboardrtwentytwoanchorv + sboardthreet + anchorclose + spanclose + spanclose + spanclose +      loclose +     mainclose +            mainw  +         routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +            loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreeu + spanclose + spanclose + spanoutfour + spaninr + snumberthreeu + spanclose + spanclose +  spanoutone + spaninrw + cntdbau + spanclose + spanclose + spanouttwo + spaninr + sroutethreeu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeu + spanclose + spanclose + loclose +       bottomsloa +  spanoutsix + spaninr + banchorw +   stimethreeu + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentythreeanchor + smovethreeu + anchorclose + spanclose + spanint + sboardrtwentythreeanchorw + sboardthreeu + anchorclose + spanclose + spanclose + spanclose +       loclose +     mainclose +            mainx  +        routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +        loclose +      rightsloa +                spanoutthree + spaninr + sbrandthreev + spanclose + spanclose + spanoutfour + spaninr + snumberthreev + spanclose + spanclose + spanoutone + spaninrx + cntdbav + spanclose + spanclose + spanouttwo + spaninr + sroutethreev + spanclose + spanclose + spanoutfive + spaninr + sparkthreev + spanclose + spanclose + loclose +       bottomsloa +  spanoutsix + spaninr + banchorx +   stimethreev + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentyfouranchor + smovethreev + anchorclose + spanclose + spanint + sboardrtwentyfouranchorx + sboardthreev + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +            mainy  +        routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +  leftloa  +    spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +         loclose +      rightsloa +             spanoutthree + spaninr + sbrandthreew + spanclose + spanclose + spanoutfour + spaninr + snumberthreew + spanclose + spanclose + spanoutone + spaninry + cntdbaw + spanclose + spanclose + spanouttwo + spaninr + sroutethreew + spanclose + spanclose + spanoutfive + spaninr + sparkthreew + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchory +   stimethreew + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentyfiveanchor + smovethreew + anchorclose + spanclose + spanint + sboardrtwentyfiveanchory + sboardthreew + anchorclose + spanclose + spanclose + spanclose +            loclose +     mainclose +            mainz  +      routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +  leftloa  +  spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +            loclose +      rightsloa +                 spanoutthree + spaninr + sbrandthreex + spanclose + spanclose + spanoutfour + spaninr + snumberthreex + spanclose + spanclose + spanoutone + spaninrz + cntdbax + spanclose + spanclose + spanouttwo + spaninr + sroutethreex + spanclose + spanclose + spanoutfive + spaninr + sparkthreex + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchorz +   stimethreex + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentysixanchor + smovethreex + anchorclose + spanclose + spanint + sboardrtwentysixanchorz + sboardthreex + anchorclose + spanclose + spanclose + spanclose +      loclose +     mainclose +            mainaa  +          routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +  leftloa  +  spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +             loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreey + spanclose + spanclose + spanoutfour + spaninr + snumberthreey + spanclose + spanclose + spanoutone + spaninraa + cntdbay + spanclose + spanclose + spanouttwo + spaninr + sroutethreey + spanclose + spanclose + spanoutfive + spaninr + sparkthreey + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchoraa +   stimethreey + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentysevenanchor + smovethreey + anchorclose + spanclose + spanint + sboardrtwentysevenanchora + sboardthreey + anchorclose + spanclose + spanclose + spanclose +          loclose +     mainclose +            mainbb  +         routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +           loclose +      rightsloa +            spanoutthree + spaninr + sbrandthreez + spanclose + spanclose + spanoutfour + spaninr + snumberthreez + spanclose + spanclose + spanoutone + spaninrbb + cntdbaz + spanclose + spanclose + spanouttwo + spaninr + sroutethreez + spanclose + spanclose + spanoutfive + spaninr + sparkthreez + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchorab +   stimethreez + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentyeightanchor + smovethreez + anchorclose + spanclose + spanint + sboardrtwentyeightanchorb + sboardthreez + anchorclose + spanclose + spanclose + spanclose +       loclose +     mainclose +            maincc  +          routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +            loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreeaa + spanclose + spanclose + spanoutfour + spaninr + snumberthreeaa + spanclose + spanclose + spanoutone + spaninrcc + cntdbaaaa + spanclose + spanclose + spanouttwo + spaninr + sroutethreeaa + spanclose + spanclose + spanoutfive + spaninr + sparkthreeaa + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchorac +   stimethreeaa + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrtwentynineanchor + smovethreeaa + anchorclose + spanclose + spanint + sboardrtwentynineanchorc + sboardthreeaa + anchorclose + spanclose + spanclose + spanclose +        loclose +     mainclose +            maindd  +            routeaa + spanoutthreet + origintitlec + spanclose + spanoutfourth + toccc + spanclose + spanoutonet + destinytitlec + spanclose + routclose + routeaaa +  spanoutthreeth + thirdroute + spanclose + spanoutfourt + toccc + spanclose + spanoutoneth + stitlec + spanclose + routclose +    leftloa  +   spanoutthree + spanina + titlespanhd + viac + spanclose + titlespanshn + headingonec + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingtwoc + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonec + spanclose + titlespana + headingthreec + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfourc + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonec + spanclose + titlespan + headingfivec + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonec + spanclose + titlespanhdit + headingsixc + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonec + spanclose + titlespanaes + headingsevenc + spanclose + spanclose + spanclose  +            loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreebb + spanclose + spanclose + spanoutfour + spaninr + snumberthreebb + spanclose + spanclose + spanoutone + spaninrdd + cntdbabb + spanclose + spanclose + spanouttwo + spaninr + sroutethreebb + spanclose + spanclose + spanoutfive + spaninr + sparkthreebb + spanclose + spanclose + loclose +       bottomsloa +  spanoutsix + spaninr + banchorad +   stimethreebb + anchorclose + spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtyanchor + smovethreebb + anchorclose + spanclose + spanint + sboardrthirtyanchord + sboardthreebb + anchorclose + spanclose + spanclose + spanclose +        loclose +     mainclose +             mainee  +     routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +    leftloa  +  spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +         loclose +      rightsloa +            spanoutthree + spaninr + sbrandthreecc + spanclose + spanclose + spanoutfour + spaninr + snumberthreecc + spanclose + spanclose + spanoutone + spaninree + cntdbacc + spanclose + spanclose + spanouttwo + spaninr + sroutethreecc + spanclose + spanclose + spanoutfive + spaninr + sparkthreecc + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchorae  + stimethreecc + anchorclose +  spanclose + spanclose + spanouteight + spaninr + spanink +  sboardrthirtyoneanchor + smovethreecc + anchorclose + spanclose + spanint + sboardrthirtyoneanchore + sboardthreecc + anchorclose + spanclose + spanclose + spanclose +          loclose +     mainclose +         mainff  +         routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +    leftloa  +   spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +          loclose +      rightsloa +              spanoutthree + spaninr + sbrandthreedd + spanclose + spanclose + spanoutfour + spaninr + snumberthreedd + spanclose + spanclose + spanoutone + spaninrff + cntdbadd + spanclose + spanclose + spanouttwo + spaninr + sroutethreedd + spanclose + spanclose + spanoutfive + spaninr + sparkthreedd + spanclose + spanclose +   loclose +       bottomsloa + spanoutsix + spaninr + banchoraf +   stimethreedd + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtytwoanchor + smovethreedd + anchorclose + spanclose + spanint + sboardrthirtytwoanchorf + sboardthreedd + anchorclose + spanclose + spanclose + spanclose +           loclose +     mainclose +             maingg  +         routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +           loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreeee + spanclose + spanclose + spanoutfour + spaninr + snumberthreeee + spanclose + spanclose + spanoutone + spaninrgg + cntdbaee + spanclose + spanclose + spanouttwo + spaninr + sroutethreeee + spanclose + spanclose + spanoutfive + spaninr + sparkthreeee + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchorag +   stimethreeee + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtythreeanchor + smovethreeee + anchorclose + spanclose + spanint + sboardrthirtythreeanchorg + sboardthreeee + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +             mainhh  +         routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +    leftloa  +  spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +           loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreeff + spanclose + spanclose + spanoutfour + spaninr + snumberthreeff + spanclose + spanclose + spanoutone + spaninrhh + cntdbaff + spanclose + spanclose + spanouttwo + spaninr + sroutethreeff + spanclose + spanclose + spanoutfive + spaninr + sparkthreeff + spanclose + spanclose +   loclose +       bottomsloa +  spanoutsix + spaninr + banchorah +   stimethreeff + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtyfouranchor + smovethreeff + anchorclose + spanclose + spanint + sboardrthirtyfouranchorh + sboardthreeff + anchorclose + spanclose + spanclose + spanclose +           loclose +     mainclose +             mainii  +        routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +   leftloa  +  spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +               loclose +      rightsloa +               spanoutthree + spaninr + sbrandthreegg + spanclose + spanclose + spanoutfour + spaninr + snumberthreegg + spanclose + spanclose + spanoutone + spaninrii + cntdbagg + spanclose + spanclose + spanouttwo + spaninr + sroutethreegg + spanclose + spanclose + spanoutfive + spaninr + sparkthreegg + spanclose + spanclose +   loclose +       bottomsloa +  spanoutsix + spaninr + banchorai +   stimethreegg + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtyfiveanchor + smovethreegg + anchorclose + spanclose + spanint + sboardrthirtyfiveanchori + sboardthreegg + anchorclose + spanclose + spanclose + spanclose +              loclose +     mainclose +             mainjj  +        routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +              loclose +      rightsloa +          spanoutthree + spaninr + sbrandthreehh + spanclose + spanclose + spanoutfour + spaninr + snumberthreehh + spanclose + spanclose + spanoutone + spaninrjj + cntdbahh + spanclose + spanclose + spanouttwo + spaninr + sroutethreehh + spanclose + spanclose + spanoutfive + spaninr + sparkthreehh + spanclose + spanclose +   loclose +       bottomsloa +  spanoutsix + spaninr + banchoraj +   stimethreehh + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtysixanchor + smovethreehh + anchorclose + spanclose + spanint + sboardrthirtysixanchorj + sboardthreehh + anchorclose + spanclose + spanclose + spanclose +             loclose +     mainclose +             mainkk  +        routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +           loclose +      rightsloa +             spanoutthree + spaninr + sbrandthreeii + spanclose + spanclose + spanoutfour + spaninr + snumberthreeii + spanclose + spanclose + spanoutone + spaninrkk + cntdbaii + spanclose + spanclose + spanouttwo + spaninr + sroutethreeii + spanclose + spanclose + spanoutfive + spaninr + sparkthreeii + spanclose + spanclose +   loclose +       bottomsloa + spanoutsix + spaninr + banchorak +   stimethreeii + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtysevenanchor + smovethreeii + anchorclose + spanclose + spanint + sboardrthirtysevenanchork + sboardthreeii + anchorclose + spanclose + spanclose + spanclose +       loclose +     mainclose +       mainll  +        routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +            loclose +      rightsloa +            spanoutthree + spaninr + sbrandthreejj + spanclose + spanclose + spanoutfour + spaninr + snumberthreejj + spanclose + spanclose + spanoutone + spaninrll + cntdbajj + spanclose + spanclose + spanouttwo + spaninr +  sroutethreejj + spanclose + spanclose + spanoutfive + spaninr + sparkthreejj + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchoral +   stimethreejj + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtyeightanchor + smovethreejj + anchorclose + spanclose + spanint + sboardrthirtyeightanchorl + sboardthreejj + anchorclose + spanclose + spanclose + spanclose +            loclose +     mainclose +             mainmm  +          routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose +   leftloa  +    spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +               loclose +      rightsloa +           spanoutthree + spaninr + sbrandthreekk + spanclose + spanclose + spanoutfour + spaninr + snumberthreekk + spanclose + spanclose + spanoutone + spaninrmm + cntdbakk + spanclose + spanclose + spanouttwo + spaninr + sroutethreekk + spanclose + spanclose + spanoutfive + spaninr + sparkthreekk + spanclose + spanclose +   loclose +       bottomsloa +  spanoutsix + spaninr + banchoram +   stimethreekk + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrthirtynineanchor + smovethreekk + anchorclose + spanclose + spanint + sboardrthirtynineanchorm + sboardthreekk + anchorclose + spanclose + spanclose + spanclose +        loclose +     mainclose +             mainnn +       routeaa + spanoutthreet + origintitled + spanclose + spanoutfourth + todcc + spanclose + spanoutonet + destinytitled + spanclose + routclose + routeaaa +  spanoutthreeth + fourthroute + spanclose + spanoutfourt + todcc + spanclose + spanoutoneth + stitled + spanclose + routclose + leftloa  +    spanoutthree + spanina + titlespanhd + viad + spanclose + titlespanshn + headingoned + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingtwod + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingoned + spanclose + titlespana + headingthreed + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfourd + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingoned + spanclose + titlespan + headingfived + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingoned + spanclose + titlespanhdit + headingsixd + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingoned + spanclose + titlespanaes + headingsevend + spanclose + spanclose + spanclose  +             loclose +      rightsloa +             spanoutthree + spaninr + sbrandthreell + spanclose + spanclose + spanoutfour + spaninr + snumberthreell + spanclose + spanclose + spanoutone + spaninrnn + cntdball + spanclose + spanclose + spanouttwo + spaninr + sroutethreell + spanclose + spanclose + spanoutfive + spaninr + sparkthreell + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchoran +   stimethreell + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtyanchor + smovethreell + anchorclose + spanclose + spanint + sboardrfourtyanchorn + sboardthreell + anchorclose + spanclose + spanclose + spanclose +        loclose +     mainclose +         mainoo +            routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +            loclose +      rightsloa +         spanoutthree + spaninr + sbrandthreemm + spanclose + spanclose + spanoutfour + spaninr + snumberthreemm + spanclose + spanclose + spanoutone + spaninroo + cntdbamm + spanclose + spanclose + spanouttwo + spaninr + sroutethreemm + spanclose + spanclose + spanoutfive + spaninr + sparkthreemm + spanclose + spanclose +  loclose +       bottomsloa + spanoutsix + spaninr + banchorao +   stimethreemm + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtyoneanchor + smovethreemm + anchorclose + spanclose + spanint + sboardrfourtyoneanchoro + sboardthreemm + anchorclose + spanclose + spanclose + spanclose +           loclose +     mainclose +         mainpp +         routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +   leftloa  +  spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +          loclose +      rightsloa +        spanoutthree + spaninr + sbrandthreenn + spanclose + spanclose + spanoutfour + spaninr + snumberthreenn + spanclose + spanclose + spanoutone + spaninrpp + cntdbann + spanclose + spanclose + spanouttwo + spaninr + sroutethreenn + spanclose + spanclose + spanoutfive + spaninr + sparkthreenn + spanclose + spanclose + loclose +       bottomsloa +   spanoutsix + spaninr + banchorap +   stimethreenn + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtytwoanchor + smovethreenn + anchorclose + spanclose + spanint + sboardrfourtytwoanchorp + sboardthreenn + anchorclose + spanclose + spanclose + spanclose +             loclose +     mainclose +         mainqq +              routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +           loclose +      rightsloa +          spanoutthree + spaninr + sbrandthreeoo + spanclose + spanclose + spanoutfour + spaninr + snumberthreeoo + spanclose + spanclose + spanoutone + spaninrqq + cntdbaoo + spanclose + spanclose + spanouttwo + spaninr + sroutethreeoo + spanclose + spanclose + spanoutfive + spaninr + sparkthreeoo + spanclose + spanclose +  loclose +       bottomsloa +  spanoutsix + spaninr + banchoraq +   stimethreeoo + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtythreeanchor + smovethreeoo + anchorclose + spanclose + spanint + sboardrfourtythreeanchorq + sboardthreeoo + anchorclose + spanclose + spanclose + spanclose +             loclose +     mainclose +         mainrr +             routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +   leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +       loclose +      rightsloa +          spanoutthree + spaninr + sbrandthreepp + spanclose + spanclose + spanoutfour + spaninr + snumberthreepp + spanclose + spanclose + spanoutone + spaninrrr + cntdbapp + spanclose + spanclose + spanouttwo + spaninr + sroutethreepp + spanclose + spanclose + spanoutfive + spaninr + sparkthreepp + spanclose + spanclose + loclose +       bottomsloa +  spanoutsix + spaninr + banchorar +   stimethreepp + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtyfouranchor + smovethreepp + anchorclose + spanclose + spanint + sboardrfourtyfouranchorr + sboardthreepp + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +         mainss +          routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +         loclose +      rightsloa +         spanoutthree + spaninr + sbrandthreeqq + spanclose + spanclose + spanoutfour + spaninr + snumberthreeqq + spanclose + spanclose + spanoutone + spaninrss + cntdbaqq + spanclose + spanclose + spanouttwo + spaninr + sroutethreeqq + spanclose + spanclose + spanoutfive + spaninr + sparkthreeqq + spanclose + spanclose +  loclose +       bottomsloa + spanoutsix + spaninr + banchoras +   stimethreeqq + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtyfiveanchor + smovethreeqq + anchorclose + spanclose + spanint + sboardrfourtyfiveanchors + sboardthreeqq + anchorclose + spanclose + spanclose + spanclose +               loclose +     mainclose +         maintt +             routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +        loclose +      rightsloa +      spanoutthree + spaninr + sbrandthreerr + spanclose + spanclose + spanoutfour + spaninr + snumberthreerr + spanclose + spanclose + spanoutone + spaninrtt + cntdbarr + spanclose + spanclose + spanouttwo + spaninr + sroutethreerr + spanclose + spanclose + spanoutfive + spaninr + sparkthreerr + spanclose + spanclose +  loclose +   bottomsloa + spanoutsix + spaninr + banchorat +   stimethreerr + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtysixanchor + smovethreerr + anchorclose + spanclose + spanint + sboardrfourtysixanchort + sboardthreerr + anchorclose + spanclose + spanclose + spanclose +          loclose +     mainclose +         mainuu +          routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +           loclose +      rightsloa +        spanoutthree + spaninr + sbrandthreess + spanclose + spanclose + spanoutfour + spaninr + snumberthreess + spanclose + spanclose + spanoutone + spaninruu + cntdbass + spanclose + spanclose + spanouttwo + spaninr + sroutethreess + spanclose + spanclose + spanoutfive + spaninr + sparkthreess + spanclose + spanclose + loclose +   bottomsloa +  spanoutsix + spaninr + banchorau +   stimethreess + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtysevenanchor + smovethreess + anchorclose + spanclose + spanint + sboardrfourtysevenanchoru + sboardthreess + anchorclose + spanclose + spanclose + spanclose +          loclose +     mainclose +         mainvv +              routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +  spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +         loclose +      rightsloa +         spanoutthree + spaninr + sbrandthreett + spanclose + spanclose + spanoutfour + spaninr + snumberthreett + spanclose + spanclose + spanoutone + spaninrvv + cntdbatt + spanclose + spanclose + spanouttwo + spaninr + sroutethreett + spanclose + spanclose + spanoutfive + spaninr + sparkthreett + spanclose + spanclose +  loclose +   bottomsloa + spanoutsix + spaninr + banchorav +   stimethreett + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtyeightanchor + smovethreett + anchorclose + spanclose + spanint + sboardrfourtyeightanchorv + sboardthreett + anchorclose + spanclose + spanclose + spanclose +         loclose +     mainclose +         mainww +        routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +   leftloa  +  spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +            loclose +      rightsloa +            spanoutthree + spaninr + sbrandthreeuu + spanclose + spanclose + spanoutfour + spaninr + snumberthreeuu + spanclose + spanclose + spanoutone + spaninrww + cntdbauu + spanclose + spanclose + spanouttwo + spaninr + sroutethreeuu + spanclose + spanclose + spanoutfive + spaninr + sparkthreeuu + spanclose + spanclose +  loclose +   bottomsloa + spanoutsix + spaninr + banchoraw +   stimethreeuu + anchorclose +  spanclose + spanclose +  spanouteight + spaninr + spanink +  sboardrfourtynineanchor + smovethreeuu + anchorclose + spanclose + spanint + sboardrfourtynineanchorw + sboardthreeuu + anchorclose + spanclose + spanclose + spanclose +               loclose +     mainclose +         mainxx +                 routeaa + spanoutthreet + origintitlee + spanclose + spanoutfourth + toecc + spanclose + spanoutonet + destinytitlee + spanclose + routclose + routeaaa +  spanoutthreeth + fifethroute + spanclose + spanoutfourt + toecc + spanclose + spanoutoneth + stitlee + spanclose + routclose +  leftloa  +   spanoutthree + spanina + titlespanhd + viae + spanclose + titlespanshn + headingonee + spanclose + spanclose + spanclose + spanoutfour + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingtwoe + spanclose + spanclose + spanclose + spanoutone + spanina + titlespanhdy + headingonee + spanclose + titlespana + headingthreee + spanclose + spanclose + spanclose + spanouttwo + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfoure + spanclose + spanclose + spanclose + spanoutfive + spanina + titlespanhdy + headingonee + spanclose + titlespan + headingfivee + spanclose + spanclose + spanclose + spanoutsix + spanina + titlespanhdy + headingonee + spanclose + titlespanhdit + headingsixe + spanclose + spanclose + spanclose + spanouteight + spanine + titlespanhdy + headingonee + spanclose + titlespanaes + headingsevene + spanclose + spanclose + spanclose  +        loclose +      rightsloa +        spanoutthree + spaninr + sbrandthreevv + spanclose + spanclose + spanoutfour + spaninr + snumberthreevv + spanclose + spanclose + spanoutone + spaninrxx + cntdbavv + spanclose + spanclose + spanouttwo + spaninr + sroutethreevv + spanclose + spanclose + spanoutfive + spaninr + sparkthreevv + spanclose + spanclose +   loclose +   bottomsloa + spanoutsix + spaninr + banchorax +   stimethreevv + anchorclose +  spanclose + spanclose +   spanouteight + spaninr + spanink +  sboardrfifetyanchor + smovethreevv + anchorclose + spanclose + spanint + sboardrfifetyanchorx + sboardthreevv + anchorclose + spanclose + spanclose + spanclose +   loclose +     mainclose +     formclose + "</body>" + "</html>";

let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "componeccp.html";
	}

	let file = __dirname + "/public/" + path;
      fs.writeFile(file, showcc, "utf8", (err) => {
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
	res.send("<div style='text-align: center; color:green;'>Current Charges Updated Updated Successfully!<br/><a href='https://travofast.herokuapp.com/usersccp/dashboards/componedbp' style='text-decoration: none; background-color: lightgrey; padding: 4px; display: inline-block; margin-top: 4px; border-radius: 2px/3px;'>OK</a></div> ");
};

});

module.exports = router
