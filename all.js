const email = document.querySelector(".email");
const password = document.querySelector(".password");
const send = document.querySelector(".send");

send.addEventListener("click", function(e){
SignUp()
})

function SignUp(){
    if(email.value==""||password.value=="") {
        alert("資料不得為空");
        return;
    }
let obj = {};
obj.email = email.value;
obj.password = password.value;
console.log(obj);

  axios.post('https://hex-escape-room.herokuapp.com/api/user/signup',obj
  )
  .then(function (response) {
    alert(response.data.message);
    email.value = "";
    password.value = "";
  })
  .catch(function (error) {
    console.log(error);
  });
}

const loginAccount = document.querySelector(".login-account");
const loginPassword = document.querySelector(".login-password");
const loginSend = document.querySelector(".login-send");

loginSend.addEventListener("click", function(e){
LogIn()
})
function LogIn(){
    if(loginAccount.value==""||loginPassword.value=="") {
        alert("資料不得為空");
        return;
    }
let obj = {};
obj.email = loginAccount.value;
obj.password = loginPassword.value;
console.log(obj);

  axios.post('https://hex-escape-room.herokuapp.com/api/user/signin',obj
  )
  .then(function (response) {
    alert(response.data.message);
    loginAccount.value = "";
    loginPassword.value = "";
  })
  .catch(function (error) {
    console.log(error);
  });
}