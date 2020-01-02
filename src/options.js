function Lock() {


    chrome.storage.local.set({ key: 'false' }, function () {

    

    });

}

function SetPassword() {

    let new_pw = document.getElementById('password').value;

    chrome.storage.local.set({ password: new_pw }, function () {

      

    });

}



document.getElementById('lock').onclick = Lock;
document.getElementById('set').onclick = SetPassword;