{
    const nav = document.getElementById("bottomNav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("navHidden");
        } else {
            nav.classList.remove("navHidden");
        }

        lastScrollY = window.scrollY;
    });
}