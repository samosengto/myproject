const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');


// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io("http://localhost:3000");

// Join chatroom
socket.emit('joinRoom', { username, room },);

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});


//

socket.emit('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message from server
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

//Prompt the user before leave chat room
document.getElementById('leave-btnx').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});
//Login form section:
function companyName() {
	document.getElementById('room').value = 'Global';
	
	
}
 function companyNamea() {
	document.getElementById('room').value = 'yy';
	
	
} 
  function companyNameb() {
	document.getElementById('room').value = 'Teso coach';
	
	
} 
 function companyNamec() {
	document.getElementById('room').value = 'Gateway';
	
	
} 
  function companyNamed() {
	document.getElementById('room').value = 'Kakise';
	
	
} 
 function companyNamee() {
	document.getElementById('room').value = 'Global';
	
	
}
 function companyNamef() {
	document.getElementById('room').value = 'Tausi';
	
	
} 
  function companyNameg() {
	document.getElementById('room').value = 'swift';
	
	
} 
 function companyNameh() {
	document.getElementById('room').value = 'Kingo';
	
	
} 
  function companyNamei() {
	document.getElementById('room').value = 'Pokopoko';
	
	
} 
function companyNamej() {
	document.getElementById('room').value = 'Kalita';
	
	
}
 function companyNamek() {
	document.getElementById('room').value = 'Trinity';
	
	
} 
  function companyNamel() {
	document.getElementById('room').value = 'Baby coach';
	
	
} 
 function companyNamem() {
	document.getElementById('room').value = 'Oxygen';
	
	
} 
  function companyNamen() {
	document.getElementById('room').value = 'Bismakan';
	
	
} 
function companyNameo() {
	document.getElementById('room').value = 'Link';
	
	
}
 function companyNamep() {
	document.getElementById('room').value = 'Modern';
	
	
} 
  function companyNameq() {
	document.getElementById('room').value = 'Nile';
	
	
} 
 function companyNamer() {
	document.getElementById('room').value = 'Comfort';
	
	
} 
  function companyNames() {
	document.getElementById('room').value = 'Gaga';
	
	
} 
function companyNamet() {
	document.getElementById('room').value = 'Gulu bus';
	
	
} 
  function companyNameu() {
	document.getElementById('room').value = 'GoodLuck';
	
	
} 
function companyNamev() {
	document.getElementById('room').value = 'Makome';
	
	
} 
function companyNamew() {
	document.getElementById('room').value = 'NMS';
	
	
} 
 function companyNamex() {
	document.getElementById('room').value = 'Mukano';
	
	
} 
function companyNamey() {
	document.getElementById('room').value = 'Cocacola';
	
	
} 
function companyNamez() {
	document.getElementById('room').value = 'Bukoola';
	
	
} 


 
  		document.getElementById('fan').addEventListener('click', () => {
  			
  		document.querySelector('.chat-sidebar').style.display = 'block';
  		document.querySelector('.chat-sidebar').style.clear = 'both';
  		
   	
 	}); 
  	
  	
  	
  
function unshowddwn() {
  	var y = window.matchMedia('(max-width: 700px)');
  	
  	if(y.matched) {
  		document.querySelector('.chat-sidebar').style.display = 'block';
  		document.querySelector('.messages').style.position = 'relative';
  	} else {
  		
  		document.querySelector('.chat-sidebar').style.display = 'none';
  	}
  
  }







