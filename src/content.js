

var unlocked = 'waiting';
var correct_pw = '';

chrome.storage.local.get(function (data) {

    correct_pw = data.password;

});

Verify();


function Lock() {


    chrome.storage.local.set({ key: 'false' }, function () {


    });

}

function Unlock() {


    chrome.storage.local.set({ key: 'true' }, function () {



    });

}

function Verify() {

    chrome.storage.local.get(function (data) {

        console.log(data.key);
        unlocked = data.key;

    });

}


setTimeout(() => {
console.log(unlocked)
while (unlocked != "true") {
    let pass = window.prompt("Type the password:");
    console.log(unlocked);
    if (pass == correct_pw) {
        Unlock();
        break;
    }
    Verify();
}

}, 100);






