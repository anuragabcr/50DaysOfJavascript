const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentFAQ = button.closest(".faq");
    parentFAQ.classList.toggle("active");
  });
});
