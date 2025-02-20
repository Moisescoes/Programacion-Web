/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Currículum cargado correctamente");

    const emailLinks = document.querySelectorAll("a[href^='mailto']");
    emailLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const email = link.getAttribute("href").replace("mailto:", "");
            navigator.clipboard.writeText(email).then(() => {
                alert("Correo copiado al portapapeles: " + email);
            });
        });
    });
});
