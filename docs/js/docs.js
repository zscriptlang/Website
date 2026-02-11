document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".copy-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      const pre = btn.nextElementSibling;
      const text = pre.innerText;

      navigator.clipboard.writeText(text);

      const old = btn.innerText;
      btn.innerText = "Copied!";

      setTimeout(() => {
        btn.innerText = old;
      }, 1200);

    });

  });

});
