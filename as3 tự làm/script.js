// tính năng ẩn thông tin cá nhânb
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
emailForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue = emailInput.value.trim();
    emailError.textContent = "";


    if (emailValue === "") {
        emailError.textContent = "Vui lòng nhập Email của bạn.";
        return;
    }


    if (!regex.test(emailValue)) {
        emailError.textContent = "Hãy nhập email đúng định dạng (Ví dụ: anhnd@funix.edu.vn).";
        return;
    }


    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
});


// tính năng ẩn thông tin nghề nghiệp

const viewButtons = document.querySelectorAll(".view-btn")
viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const currentCard = button.closest(".card");
        const controlBox = currentCard.querySelector(".control-box");
        if (controlBox.classList.contains("hide")) {
            controlBox.classList.remove("hide"); 
            button.innerHTML = '<i class="fa fa-caret-up"></i> View Less';
        } else {
            controlBox.classList.add("hide"); 
            button.innerHTML = '<i class="fa fa-caret-down"></i> View More';
        }
    });
}); 
