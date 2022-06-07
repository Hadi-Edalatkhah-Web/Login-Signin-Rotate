const changeButton = document.getElementById("changeButton");
const container = document.getElementById("container");
const header = document.getElementById("header");
const button=document.getElementById("signinButton")
const forgetPass=document.getElementById("forgetPassword");
const changeStyleHandler = () => {
  if (header.innerText === "Login") {
    header.innerText = "Signin";
    button.innerText="Signin";
    forgetPass.style.display="none";

  } else if (header.innerText === "Signin") {
    {
    forgetPass.style.display="flex";
    header.innerText = "Login";
    button.innerText="Login";
     
    }
  }
};
const changeHandler = () => {
  if (changeButton.innerText == "Login") {
    changeButton.innerText = "Signin";

    container.style.transform = "rotate(360deg)";
    setTimeout(changeStyleHandler, 500);
  } else {
    changeButton.innerText = "Login";
    setTimeout(changeStyleHandler, 500);
    container.style.transform = "rotate(0deg)";
  }
};

changeButton.addEventListener("click", changeHandler);
