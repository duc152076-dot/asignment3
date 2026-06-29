// ==========================================
// TÍNH NĂNG 1: XÁC THỰC EMAIL ẨN/HIỆN THÔNG TIN
// ==========================================
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");

// Biểu thức chính quy Regex để kiểm tra định dạng email tiêu chuẩn
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailForm.addEventListener("submit", function (event) {
    // Hãm phanh ngăn chặn hành vi reload trang mặc định của form
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    emailError.textContent = "";

    // Kiểm tra ô trống
    if (emailValue === "") {
        emailError.textContent = "Vui lòng nhập Email của bạn.";
        return;
    }

    // Kiểm tra định dạng Regex
    if (!regex.test(emailValue)) {
        emailError.textContent = "Hãy nhập email đúng định dạng (Ví dụ: anhnd@funix.edu.vn).";
        return;
    }

    // Email hợp lệ: Ẩn form nhập liệu, hiển thị khối thông tin cá nhân
    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
});


// ==========================================
// TÍNH NĂNG 2: ĐÓNG/MỞ NGHỀ NGHIỆP (DOM TRAVERSE)
// ==========================================

// 1. Tìm tất cả các nút View More của 6 khối thẻ lý lịch
const viewButtons = document.querySelectorAll(".view-btn");

// 2. Lắng nghe hành động click trên từng nút bấm
viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        
        // KỸ THUẬT DOM TRAVERSE:
        // - Từ nút bấm, di chuyển ngược lên tìm thẻ .card cha gần nhất bọc nó
        const currentCard = button.closest(".card");
        // - Từ thẻ .card cha đó, di chuyển xuôi xuống tìm vùng nội dung .control-box con tương ứng bên trong
        const controlBox = currentCard.querySelector(".control-box");

        // 3. Đóng/Mở vùng nội dung lập tức dựa vào class "hide"
        if (controlBox.classList.contains("hide")) {
            controlBox.classList.remove("hide"); // Hiện nội dung
            button.innerHTML = '<i class="fa fa-caret-up"></i> View Less'; // Đổi chữ và hướng mũi tên lên
        } else {
            controlBox.classList.add("hide"); // Ẩn nội dung
            button.innerHTML = '<i class="fa fa-caret-down"></i> View More'; // Trả lại ban đầu
        }
    });
}); 