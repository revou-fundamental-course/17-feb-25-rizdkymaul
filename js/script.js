document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".image-slide");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    setInterval(nextSlide, 2500); // Geser otomatis setiap 2,5 detik
});

document.getElementById("send-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Menonaktifkan tombol kirim jika validasi belum terpenuhi.

    let isValid = true;

    // Proses Input Form
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destination = document.getElementById("destination").value;

    // Memvalidasi Nama
    if (name === "") {
        document.getElementById("error-name").innerText = "Name cannot be empty!, Please try Again";
        isValid = false;
    } else {
        document.getElementById("error-name").innerText = "";
    }

    // Memvalidasi Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("error-email").innerText = "Emails cannot be empty!, Please try Again";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("error-email").innerText = "Invalid email format!, Please use @";
        isValid = false;
    } else {
        document.getElementById("error-email").innerText = "";
    }

    // Memvalidasi destinasi
    if (destination === "") {
        document.getElementById("error-destination").innerText = "Choose a destination first!";
        isValid = false;
    } else {
        document.getElementById("error-destination").innerText = "";
    }

    // Proses semua valid, tampilkan alert
    if (isValid) {
        alert("Form submitted successfully!");
    }
});