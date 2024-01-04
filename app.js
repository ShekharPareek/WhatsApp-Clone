

const userProfile = [
    {
        "id": 1,
        "username": "Alexgendra",
        "lastseen": "06:00AM",
        "sender":"Alexgendra",
        "lastmessage": "Hii.. how are you?",
        "profileimg": "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDMwNjgzNDh8&ixlib=rb-4.0.3&q=85"
    },
    {
        "id": 2,
        "username": "Rahul Sharma",
        "lastseen": "8:00PM",
        "sender":"Me",
        "lastmessage": "Phone utha le bro..",
        "profileimg": "https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"
    },
    {
        "id": 3,
        "username": "Naresh Tak",
        "lastseen": "11:00PM",
        "sender":"Naresh Tak",
        "lastmessage": "Increment ho gya kya bhai ?",
        "profileimg": "https://sintranet.sunarctechnologies.com/web/image?model=hr.employee.public&id=424&field=avatar_128&unique=1703664966000"
    },
    {
        "id": 4,
        "username": "Code Harry",
        "lastseen": "01:00PM",
        "sender":"Me",
        "lastmessage": "Hello harry bhai..",
        "profileimg": "https://www.codewithharry.com/img/logo-blue.png"
    },

];

const userChat = [];
const submitBtn = document.getElementById("submit-btn");

function submitMessage () {
    const inputElement = document.getElementById("input_data");
    let chatData = inputElement.value;

    // To remove whitespace from the input 
    if (chatData.trim() !== "") {
    let chatEntry = {
        "time": new Date().toISOString(),
        "recivermessage": chatData,
        "recivername":"shekhar"
    };
    userChat.push(chatEntry);
    console.log(userChat);
    
    document.getElementById("input_data").value = "";

    let htmlContent = "";
    let chatContainer = document.querySelector(".chat-container");

    for(let i = 0; i < userChat.length; i++){
        const Element = userChat[i];

        htmlContent = `<div class="reciver-message-bar message-bar">${Element.recivermessage}<div class="name">${Element.recivername}</div></div>`;
    }

    if(chatContainer){
        let = dynamicData = document.createElement("div");
        dynamicData.classList.add("dynamic-data");
        dynamicData.innerHTML = htmlContent;
        chatContainer.appendChild(dynamicData);
        console.log(Element);
    }
    else{
        console.error("Element with class 'user-chat' not found.");
    }


   }
   else {
    alert("Please enter a message");
}
};


document.addEventListener("DOMContentLoaded", function () {


// for main-into-page
let container = document.querySelector(".main-loader-container");
let parentContainer = document.querySelector(".parent_container");
let fullwdtHeader = document.querySelector(".full-wdt-header");
setTimeout(() => {
    container.style.display = "none";
    parentContainer.style.display = "flex";
    fullwdtHeader.style.height = "100px";
}, 7000);

    function fetchData() {
        let chatbarContent = "";
        for (let i = 0; i < userProfile.length; i++) {
            const item = userProfile[i];
            chatbarContent += `
            <div class="chat-bar">
            <div id="${item.username}" class="user-info">
                <div class="profile-image">
                    <img src="${item.profileimg}" alt="">
                </div>
                <div class="chat-user-name-info">
                    <div class="chat-user-id">
                        <div class="user-name">${item.username}</div>
                        <div class="user-chat-time inactive-chat-msg">${item.lastseen}</div>
                    </div>
                    <div class="chat-message">
                        <div class="message-box">
                            <span class="name-sender">${item.sender}:</span>
                            <span class="sender-message">${item.lastmessage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
        };
    
        const chatListElement = document.querySelector(".chat-list");
        if (chatListElement) {
            chatListElement.innerHTML += chatbarContent;
        } else {
            console.error("Element with class 'chat-list' not found.");
        }
       

    }

    fetchData();



    // Toggle button tooltip for data send
    const toggleButton = document.getElementById("toggle-btn");
    toggleButton.addEventListener("click",function(){
    let toolTip = document.querySelector(".tool-tip");
    toggleButton.classList.toggle("rotate-icon");
        toolTip.classList.toggle("show");

    });




    // Upload profile Image & send Image data through send

// document.querySelector('.img-input').addEventListener('change', function() {
//     if (this.files && this.files[0]) {
//         var img = document.querySelector('.profile-image');
//         img.onload = () => {
//             URL.revokeObjectURL(img.src);  // no longer needed, free memory
//         }

//         img.src = URL.createObjectURL(this.files[0]);
//     }
// });

// Tab change of user Chat with it profile.

function tabChange(){
    let firstChat = document.querySelector(".user-chat:nth-of-type(1)");
    let leftChatcol = document.querySelector(".chat-left-col:nth-of-type(1)");
      firstChat.style.display= "flex";
      
      document.querySelectorAll('.user-info').forEach(function (element) {
    element.addEventListener("click",function(event){
        let target = this.id;
        console.log(target);
        document.querySelectorAll('.user-chat').forEach(function (section) {
            section.style.display = 'none';
        });
        document.querySelector('[data-section="' + target + '"]').style.display = 'flex';
    });
});
leftChatcol.style.display = "block";
 document.querySelectorAll(".list-items").forEach(function(item){
item.addEventListener("click",function(event){
 let element = this.id;
 console.log(element);
 document.querySelectorAll(".chat-left-col").forEach(function(listview){
    listview.style.display="none";
 });
 document.querySelector('[data-item="' + target + '"]').style.display = 'block';
});


 });
}

tabChange();

});




