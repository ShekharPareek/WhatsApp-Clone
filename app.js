const userProfile = [
    {
        "id": 1,
        "username": "Alexgendra",
        "lastseen": "06:00AM",
        "sender":"Alexgendra",
        "lastmessage": "Are you there ?",
        "profileimg": "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDMwNjgzNDh8&ixlib=rb-4.0.3&q=85",
        "bageCount":"1"
    },
    {
        "id": 2,
        "username": "Rahul Sharma",
        "lastseen": "8:00PM",
        "sender":"Me",
        "lastmessage": "Hey bro?",
        "profileimg": "https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg",
    },
    {
        "id": 3,
        "username": "Naresh Tak",
        "lastseen": "11:00PM",
        "sender":"Naresh Tak",
        "lastmessage": "Chai pilo bhai",
        "profileimg": "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
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
    let toggleButton = document.querySelectorAll(".toggle-plus-btn");
    toggleButton.forEach(function(toggleitem){
         toggleitem.addEventListener("click",function(){
            toggleitem.classList.toggle("rotate-icon");
            let toolTip = document.querySelectorAll(".tool-tip");
            toolTip.forEach(function(tooltipitem){
                tooltipitem.classList.toggle("show");
            });
            });
    });

// Tab change of user Chat-message with it profile.

function tabChange(){
    let firstactiveTab = document.querySelector(".user-chat-window:nth-of-type(1)");
    firstactiveTab.style.display= "block";

    let firstprofileactive = document.querySelector(".active-profile");
    firstprofileactive.style.display ="flex";
      
      document.querySelectorAll('.user-info').forEach(function (element) {
    element.addEventListener("click",function(event){
        let target = this.id;
        console.log(target);
        document.querySelectorAll('.user-info').forEach(function(link) {
           
        });
       
        document.querySelectorAll('.user-chat-window').forEach(function (section) {
            section.style.display = 'none';
        });
        document.querySelectorAll(".profile-icon").forEach(function(section){
            section.style.display = 'none';
        });
        document.querySelector('[data-section="' + target + '"]').style.display = 'block';
        document.querySelector('[data-image="' + target + '"]').style.display = 'flex';
    });
});

}

tabChange();

// Dropd-down col-1
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

// Drop-down col-2

let dropdownbtn = document.querySelectorAll(".dropdownBtn2");
let dropdownright = document.querySelectorAll(".drop-downcol-2");

dropdownbtn.forEach(function(button) {
    button.addEventListener('click',dropDown2);
 

 function dropDown2 () {

    dropdownright.forEach(function(dropdowncontent){
        if (dropdowncontent.style.display === "block") {
            dropdowncontent.style.display = "none";
            button.classList.remove("active-li-top");
        } else {
            dropdowncontent.style.display = "block";
            button.classList.add("active-li-top");
        }
    });
    
};
});


//  Code for status show and hide

let statusActive = document.querySelectorAll(".status-show");

statusActive.forEach(function (statusItem) {
    statusItem.addEventListener("click", function () {
        // temporary remove 1st child border after seen status
       
        // Step-1: Show the status
        const statusModal = document.getElementById('statusModal');
        statusModal.classList.add("show-status");
        // Step-2: Status progress bar
        simulateLoading(() => {
            // Step-3: Close the status window
            setTimeout(() => {
                let statusModalElement = document.querySelector('.status-modal');
                statusModalElement.classList.remove("show-status");
                // Step-4: Remove the active status border from the user profile
                let profileBorder = document.querySelector(".profile-image");
                profileBorder.classList.remove("green-border");
            }, 800);
        });
    });
});

// Simulate loading progress
function simulateLoading(callback) {
    let progress = 0;
    const interval = setInterval(function () {
        if (progress < 100) {
            progress += 10;
            updateProgress(progress);
        } else {
            clearInterval(interval);
            callback();
        }
    }, 800);
}

// Simulate progress update
function updateProgress(progress) {
    const progressBar = document.querySelector('.status-bar-progress');
    progressBar.style.width = `${progress}%`;
}


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




    // Tab change of top nav bar


function topNavtab(){
    // Initall acive First child of tab and its content
     let tabchildFirst = document.querySelector('.tabs-container>li:nth-of-type(4)');
     tabchildFirst.classList.add("active-li-top");
    //  tab content 1st child
    let firstactiveTab = document.querySelector(".left-side-whatsappcontent>div:nth-of-type(1)");
    firstactiveTab.style.display= "block";
      
      document.querySelectorAll('.tabs-container>li').forEach(function (element) {
    element.addEventListener("click",function(event){
        let target = this.id;
        console.log(target);
        document.querySelectorAll('.tabs-container>li').forEach(function (tab){
            tab.classList.remove("active-li-top");
        }); 
                     this.classList.add("active-li-top");
        document.querySelectorAll('.left-side-whatsappcontent>div').forEach(function (section) {
            section.style.display = 'none';
        });
        document.querySelector('[data-attr="' + target + '"]').style.display = 'block';
    });
});

}
topNavtab();


// Search filter for chat MessageS;

let chatsearchBtn = document.querySelectorAll(".search-chat-btn li:nth-of-type(1)");
chatsearchBtn.forEach(function(btnitem){
    btnitem.addEventListener("click",function(){
  let searchBar = document.querySelectorAll(".search-bar input");
  searchBar.forEach(function(items){
    if(items.style.display === "none"){
        items.style.display ="block";
        btnitem.classList.add("active-li-top");
    }
    else{
        items.style.display = "none";
        btnitem.classList.remove("active-li-top");
    }
  });

    });
});


// Close chat 

let closeChatBtn = document.querySelectorAll(".close-chat");
closeChatBtn.forEach(function(closeitem){
    closeitem.addEventListener("click", function() {
        let chatCloseBanner = document.querySelectorAll('section[data-section="chatclose"]');
        chatCloseBanner.forEach(function(chatcloseitems){
            // Hide all sections
            let sections = document.querySelectorAll(".sections");
            sections.forEach(function(section){
                section.style.display="none";
            });
            chatcloseitems.style.display = "block";
        console.log("closed");
        });
        
    });
});
// Back button 
let backBtn = document.querySelectorAll(".back-btn");
backBtn.forEach(function (btnitem) {
    btnitem.addEventListener("click", function () {
        let parentofParent = btnitem.parentNode.parentElement;
        parentofParent.style.display = "none";
         
         document.querySelectorAll(".active-li-top").forEach(function (element) {
            element.classList.remove("active-li-top");
        });
        document.querySelector("#user-listingview").classList.add("active-li-top");
        document.querySelector('div[data-attr="user-listingview"]').style.display = "block";
    });
});







});




   
