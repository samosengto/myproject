
const express = require("express");
const app = express();
app.use(express.static("routes"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set("view engine", "ejs");

const path = require("path");
const http = require("http");

const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const createAdapter = require("@socket.io/redis-adapter").createAdapter;
const redis = require("redis");
require("dotenv").config();
const { createClient } = redis;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

//login
const userRouterpath = require("./routes/userspath");
app.use("/userspath", userRouterpath);


//schedule
const userRoutera = require("./routes/schedules/usersa");
app.use("/usersa", userRoutera);

const userRouterb = require("./routes/schedules/usersb");
app.use("/usersb", userRouterb);

const userRouterc = require("./routes/schedules/usersc");
app.use("/usersc", userRouterc);

const userRouterd = require("./routes/schedules/usersd");
app.use("/usersd", userRouterd);

const userRoutere = require("./routes/schedules/userse");
app.use("/userse", userRoutere);

const userRouterf = require("./routes/schedules/usersf");
app.use("/usersf", userRouterf);

const userRouterg = require("./routes/schedules/usersg");
app.use("/usersg", userRouterg);

const userRouterh = require("./routes/schedules/usersh");
app.use("/usersh", userRouterh);

const userRouteri = require("./routes/schedules/usersi");
app.use("/usersi", userRouteri);

const userRouterj = require("./routes/schedules/usersj");
app.use("/usersj", userRouterj);

const userRouterk = require("./routes/schedules/usersk");
app.use("/usersk", userRouterk);

const userRouterl = require("./routes/schedules/usersl");
app.use("/usersl", userRouterl);

const userRouterm = require("./routes/schedules/usersm");
app.use("/usersm", userRouterm);

const userRoutern = require("./routes/schedules/usersn");
app.use("/usersn", userRoutern);

const userRoutero = require("./routes/schedules/userso");
app.use("/userso", userRoutero);

const userRouterp = require("./routes/schedules/usersp");
app.use("/usersp", userRouterp);

const userRouterq = require("./routes/schedules/usersq");
app.use("/usersq", userRouterq);

const userRouterr = require("./routes/schedules/usersr");
app.use("/usersr", userRouterr);

const userRouters = require("./routes/schedules/userss");
app.use("/userss", userRouters);

const userRoutert = require("./routes/schedules/userst");
app.use("/userst", userRoutert);

const userRouteru = require("./routes/schedules/usersu");
app.use("/usersu", userRouteru);

const userRouterv = require("./routes/schedules/usersv");
app.use("/usersv", userRouterv);

const userRouterw = require("./routes/schedules/usersw");
app.use("/usersw", userRouterw);

const userRouterx = require("./routes/schedules/usersx");
app.use("/usersx", userRouterx);


//parked buses
const ParkedUserRoutera = require("./routes/parked/usersparkeda");
app.use("/usersparkeda", ParkedUserRoutera);

const ParkedUserRouterb = require("./routes/parked/usersparkedb");
app.use("/usersparkedb", ParkedUserRouterb);

const ParkedUserRouterc = require("./routes/parked/usersparkedc");
app.use("/usersparkedc", ParkedUserRouterc);

const ParkedUserRouterd = require("./routes/parked/usersparkedd");
app.use("/usersparkedd", ParkedUserRouterd);

const ParkedUserRoutere = require("./routes/parked/usersparkede");
app.use("/usersparkede", ParkedUserRoutere);

const ParkedUserRouterf = require("./routes/parked/usersparkedf");
app.use("/usersparkedf", ParkedUserRouterf);

const ParkedUserRouterg = require("./routes/parked/usersparkedg");
app.use("/usersparkedg", ParkedUserRouterg);

const ParkedUserRouterh = require("./routes/parked/usersparkedh");
app.use("/usersparkedh", ParkedUserRouterh);

const ParkedUserRouteri = require("./routes/parked/usersparkedi");
app.use("/usersparkedi", ParkedUserRouteri);

const ParkedUserRouterj = require("./routes/parked/usersparkedj");
app.use("/usersparkedj", ParkedUserRouterj);

const ParkedUserRouterk = require("./routes/parked/usersparkedk");
app.use("/usersparkedk", ParkedUserRouterk);

const ParkedUserRouterl = require("./routes/parked/usersparkedl");
app.use("/usersparkedl", ParkedUserRouterl);

const ParkedUserRouterm = require("./routes/parked/usersparkedm");
app.use("/usersparkedm", ParkedUserRouterm);

const ParkedUserRoutern = require("./routes/parked/usersparkedn");
app.use("/usersparkedn", ParkedUserRoutern);

const ParkedUserRoutero = require("./routes/parked/usersparkedo");
app.use("/usersparkedo", ParkedUserRoutero);

const ParkedUserRouterp = require("./routes/parked/usersparkedp");
app.use("/usersparkedp", ParkedUserRouterp);

const ParkedUserRouterq = require("./routes/parked/usersparkedq");
app.use("/usersparkedq", ParkedUserRouterq);

const ParkedUserRouterr = require("./routes/parked/usersparkedr");
app.use("/usersparkedr", ParkedUserRouterr);

const ParkedUserRouters = require("./routes/parked/usersparkeds");
app.use("/usersparkeds", ParkedUserRouters);

const ParkedUserRoutert = require("./routes/parked/usersparkedt");
app.use("/usersparkedt", ParkedUserRoutert);

const ParkedUserRouteru = require("./routes/parked/usersparkedu");
app.use("/usersparkedu", ParkedUserRouteru);

const ParkedUserRouterv = require("./routes/parked/usersparkedv");
app.use("/usersparkedv", ParkedUserRouterv);

const ParkedUserRouterw = require("./routes/parked/usersparkedw");
app.use("/usersparkedw", ParkedUserRouterw);

const ParkedUserRouterx = require("./routes/parked/usersparkedx");
app.use("/usersparkedx", ParkedUserRouterx);

//already moving
const amUserRoutera = require("./routes/alreadymoving/usersama");
app.use("/usersama", amUserRoutera);

const amUserRouterb = require("./routes/alreadymoving/usersamb");
app.use("/usersamb", amUserRouterb);

const amUserRouterc = require("./routes/alreadymoving/usersamc");
app.use("/usersamc", amUserRouterc);

const amUserRouterd = require("./routes/alreadymoving/usersamd");
app.use("/usersamd", amUserRouterd);

const amUserRoutere = require("./routes/alreadymoving/usersame");
app.use("/usersame", amUserRoutere);

const amUserRouterf = require("./routes/alreadymoving/usersamf");
app.use("/usersamf", amUserRouterf);

const amUserRouterg = require("./routes/alreadymoving/usersamg");
app.use("/usersamg", amUserRouterg);

const amUserRouterh = require("./routes/alreadymoving/usersamh");
app.use("/usersamh", amUserRouterh);

const amUserRouteri = require("./routes/alreadymoving/usersami");
app.use("/usersami", amUserRouteri);

const amUserRouterj = require("./routes/alreadymoving/usersamj");
app.use("/usersamj", amUserRouterj);

const amUserRouterk = require("./routes/alreadymoving/usersamk");
app.use("/usersamk", amUserRouterk);

const amUserRouterl = require("./routes/alreadymoving/usersaml");
app.use("/usersaml", amUserRouterl);

const amUserRouterm = require("./routes/alreadymoving/usersamm");
app.use("/usersamm", amUserRouterm);

const amUserRoutern = require("./routes/alreadymoving/usersamn");
app.use("/usersamn", amUserRoutern);

const amUserRoutero = require("./routes/alreadymoving/usersamo");
app.use("/usersamo", amUserRoutero);

const amUserRouterp = require("./routes/alreadymoving/usersamp");
app.use("/usersamp", amUserRouterp);

const amUserRouterq = require("./routes/alreadymoving/usersamq");
app.use("/usersamq", amUserRouterq);

const amUserRouterr = require("./routes/alreadymoving/usersamr");
app.use("/usersamr", amUserRouterr);

const amUserRouters = require("./routes/alreadymoving/usersams");
app.use("/usersams", amUserRouters);

const amUserRoutert = require("./routes/alreadymoving/usersamt");
app.use("/usersamt", amUserRoutert);

const amUserRouteru = require("./routes/alreadymoving/usersamu");
app.use("/usersamu", amUserRouteru);

const amUserRouterv = require("./routes/alreadymoving/usersamv");
app.use("/usersamv", amUserRouterv);

const amUserRouterw = require("./routes/alreadymoving/usersamw");
app.use("/usersamw", amUserRouterw);

const amUserRouterx = require("./routes/alreadymoving/usersamx");
app.use("/usersamx", amUserRouterx);

//destiny buses
const destinyUserRoutera = require("./routes/destiny/usersda");
app.use("/usersda", destinyUserRoutera);

const destinyUserRouterb = require("./routes/destiny/usersdb");
app.use("/usersdb", destinyUserRouterb);

const destinyUserRouterc = require("./routes/destiny/usersdc");
app.use("/usersdc", destinyUserRouterc);

const destinyUserRouterd = require("./routes/destiny/usersdd");
app.use("/usersdd", destinyUserRouterd);

const destinyUserRoutere = require("./routes/destiny/usersde");
app.use("/usersde", destinyUserRoutere);

const destinyUserRouterf = require("./routes/destiny/usersdf");
app.use("/usersdf", destinyUserRouterf);

const destinyUserRouterg = require("./routes/destiny/usersdg");
app.use("/usersdg", destinyUserRouterg);

const destinyUserRouterh = require("./routes/destiny/usersdh");
app.use("/usersdh", destinyUserRouterh);

const destinyUserRouteri = require("./routes/destiny/usersdi");
app.use("/usersdi", destinyUserRouteri);

const destinyUserRouterj = require("./routes/destiny/usersdj");
app.use("/usersdj", destinyUserRouterj);

const destinyUserRouterk = require("./routes/destiny/usersdk");
app.use("/usersdk", destinyUserRouterk);

const destinyUserRouterl = require("./routes/destiny/usersdl");
app.use("/usersdl", destinyUserRouterl);

const destinyUserRouterm = require("./routes/destiny/usersdm");
app.use("/usersdm", destinyUserRouterm);

const destinyUserRoutern = require("./routes/destiny/usersdn");
app.use("/usersdn", destinyUserRoutern);

const destinyUserRoutero = require("./routes/destiny/usersdo");
app.use("/usersdo", destinyUserRoutero);

const destinyUserRouterp = require("./routes/destiny/usersdp");
app.use("/usersdp", destinyUserRouterp);

const destinyUserRouterq = require("./routes/destiny/usersdq");
app.use("/usersdq", destinyUserRouterq);

const destinyUserRouterr = require("./routes/destiny/usersdr");
app.use("/usersdr", destinyUserRouterr);

const destinyUserRouters = require("./routes/destiny/usersds");
app.use("/usersds", destinyUserRouters);

const destinyUserRoutert = require("./routes/destiny/usersdt");
app.use("/usersdt", destinyUserRoutert);

const destinyUserRouteru = require("./routes/destiny/usersdu");
app.use("/usersdu", destinyUserRouteru);

const destinyUserRouterv = require("./routes/destiny/usersdv");
app.use("/usersdv", destinyUserRouterv);

const destinyUserRouterw = require("./routes/destiny/usersdw");
app.use("/usersdw", destinyUserRouterw);

const destinyUserRouterx = require("./routes/destiny/usersdx");
app.use("/usersdx", destinyUserRouterx);

//current charges
const ccUserRoutera = require("./routes/ccharges/userscca");
app.use("/userscca", ccUserRoutera);

const ccUserRouterb = require("./routes/ccharges/usersccb");
app.use("/usersccb", ccUserRouterb);

const ccUserRouterc = require("./routes/ccharges/usersccc");
app.use("/usersccc", ccUserRouterc);

const ccUserRouterd = require("./routes/ccharges/usersccd");
app.use("/usersccd", ccUserRouterd);

const ccUserRoutere = require("./routes/ccharges/userscce");
app.use("/userscce", ccUserRoutere);

const ccUserRouterf = require("./routes/ccharges/usersccf");
app.use("/usersccf", ccUserRouterf);

const ccUserRouterg = require("./routes/ccharges/usersccg");
app.use("/usersccg", ccUserRouterg);

const ccUserRouterh = require("./routes/ccharges/userscch");
app.use("/userscch", ccUserRouterh);

const ccUserRouteri = require("./routes/ccharges/userscci");
app.use("/userscci", ccUserRouteri);

const ccUserRouterj = require("./routes/ccharges/usersccj");
app.use("/usersccj", ccUserRouterj);

const ccUserRouterk = require("./routes/ccharges/userscck");
app.use("/userscck", ccUserRouterk);

const ccUserRouterl = require("./routes/ccharges/usersccl");
app.use("/usersccl", ccUserRouterl);

const ccUserRouterm = require("./routes/ccharges/usersccm");
app.use("/usersccm", ccUserRouterm);

const ccUserRoutern = require("./routes/ccharges/usersccn");
app.use("/usersccn", ccUserRoutern);

const ccUserRoutero = require("./routes/ccharges/userscco");
app.use("/userscco", ccUserRoutero);

const ccUserRouterp = require("./routes/ccharges/usersccp");
app.use("/usersccp", ccUserRouterp);

const ccUserRouterq = require("./routes/ccharges/usersccq");
app.use("/usersccq", ccUserRouterq);

const ccUserRouterr = require("./routes/ccharges/usersccr");
app.use("/usersccr", ccUserRouterr);

const ccUserRouters = require("./routes/ccharges/usersccs");
app.use("/usersccs", ccUserRouters);

const ccUserRoutert = require("./routes/ccharges/userscct");
app.use("/userscct", ccUserRoutert);

const ccUserRouteru = require("./routes/ccharges/usersccu");
app.use("/usersccu", ccUserRouteru);

const ccUserRouterv = require("./routes/ccharges/usersccv");
app.use("/usersccv", ccUserRouterv);

const ccUserRouterw = require("./routes/ccharges/usersccw");
app.use("/usersccw", ccUserRouterw);

const ccUserRouterx = require("./routes/ccharges/usersccx");
app.use("/usersccx", ccUserRouterx);



const server = http.createServer(app);
const io = socketio(server);

// Set static folder

const botName = "Reception: ";


// Run when client connects
io.on("connection", (socket) => {
  console.log(io.of("/").adapter);
  socket.on("joinRoom" || "chatMessage", ({ username, room },) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);
 
    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to our travellers' Live chat talk , Let's talk, We are here for you!"));



    // Broadcast when a user connects
    
    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username + " ", msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
