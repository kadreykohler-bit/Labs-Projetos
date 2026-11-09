const button = document.getElementById("runPipeline");
const status = document.getElementById("status");

button.addEventListener("click", () => {
    status.textContent = "Demonstração do pipeline executada!";
    status.style.color = "green";
});