document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarMenu");
    const instance = bootstrap.Collapse.getInstance(menu);
    if (instance) instance.hide();
  });
});
