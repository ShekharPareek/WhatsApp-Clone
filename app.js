

const userProfile = [
    {
        "id": 1,
        "username": "Alexgendra",
        "lastseen": "06:00AM",
        "sender":"Alexgendra",
        "lastmessage": "Hii.. how are you?",
        "profileimg": "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDMwNjgzNDh8&ixlib=rb-4.0.3&q=85",
        "bageCount":"1"
    },
    {
        "id": 2,
        "username": "Rahul Sharma",
        "lastseen": "8:00PM",
        "sender":"Me",
        "lastmessage": "Phone utha le bro..",
        "profileimg": "https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg",
    },
    {
        "id": 3,
        "username": "Naresh Tak",
        "lastseen": "11:00PM",
        "sender":"Naresh Tak",
        "lastmessage": "Increment ho gya kya bhai ?",
        "profileimg": "c:\Users\Win10pro\Downloads\pexels-jack-winbow-1559486.jpg",
        "bageCount":"2"
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
                        <div class="bages">${item.bageCount}</div>
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


// Filter chat name is not working hear so put in the internal Script

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
    let firstactiveTab = document.querySelector(".user-chat:nth-of-type(1)");
    firstactiveTab.style.display= "flex";

    let firstprofileactive = document.querySelector(".active-profile");
    firstprofileactive.style.display ="flex";
      
      document.querySelectorAll('.user-info').forEach(function (element) {
    element.addEventListener("click",function(event){
        let target = this.id;
        console.log(target);
        document.querySelectorAll('.user-info').forEach(function(link) {
           
        });
       
        document.querySelectorAll('.user-chat').forEach(function (section) {
            section.style.display = 'none';
        });
        document.querySelectorAll(".profile-icon").forEach(function(section){
            section.style.display = 'none';
        });
        document.querySelector('[data-section="' + target + '"]').style.display = 'flex';
        document.querySelector('[data-image="' + target + '"]').style.display = 'flex';
    });
});

}

tabChange();


let dropdownBtn = document.querySelector(".drop-down-list");
let dropdown = document.querySelector(".drop-down");

dropdownBtn.addEventListener("click", function () {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        dropdownBtn.classList.remove("active-li-top");
    } else {
        dropdown.style.display = "block";
        dropdownBtn.classList.add("active-li-top");
    }
});


});





 // Code for bages count is found undefined 
 document.addEventListener("DOMContentLoaded", function() {
    let bagesUndefined = document.querySelectorAll(".bages");

    bagesUndefined.forEach(item => {
        if (item.textContent.trim() === "undefined") {
            item.style.display = 'none';
        } else {
            item.style.display = "block";
        }
    });
});




// Tab change of top nav bar


function topNavtab(){
    let firstactiveTab = document.querySelector(".users-list-view");
    firstactiveTab.style.display= "block";
      
      document.querySelectorAll('.list-menu').forEach(function (element) {
    element.addEventListener("click",function(event){
        let target = this.id;
        console.log(target);
        document.querySelectorAll('.left-side-whatsappcontent').forEach(function (section) {
            section.style.display = 'none';
        });
        document.querySelector('[data-attr="' + target + '"]').style.display = 'block';
    });
});

}
topNavtab();
