document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9FkBiGNDMBlp_A6Eq");

    const form = document.getElementById("contact-form");
    const messageBox = document.createElement("div");
    messageBox.classList.add("form-status");
    form.appendChild(messageBox);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        messageBox.textContent = "Sending...";
        messageBox.className = "form-status sending";

        emailjs
        .sendForm("service_zbkgiva", "template_p919ehn", this)
        .then(() => {
            messageBox.textContent = "Message sent successfully!";
            messageBox.className = "form-status success";
            this.reset();

            setTimeout(() => {
            messageBox.textContent = "";
            }, 4000);
        })
        .catch(() => {
            messageBox.textContent = "Failed to send message. Please try again.";
            messageBox.className = "form-status error";
        });
    });
});

