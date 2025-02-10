document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const token = document.getElementById("token").value.trim();

    let response;

    if (token) {
        // Login via token
        response = await fetch("/Auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": token },
        });
    } else {
        if (!username || !password) {
            alert("Preencha o usuário e senha ou insira um token.");
            return;
        }

        response = await fetch("/Auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
    }

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        window.location.assign("/historico");
    } else {
        alert("Credenciais ou token inválidos!");
    }
});
