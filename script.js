const faqs = document.querySelectorAll(".faq");

faqs.forEach(function (faq) {
  const header = faq.querySelector(".question");

  header.addEventListener("click", function () {
    faq.classList.toggle("active");

    faqs.forEach(function (item) {
      if (faq !== item) {
        item.classList.remove("active");
      }
    });
  });
});
