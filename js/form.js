const d = document;

function formValidate() {
    d.addEventListener("submit", (e) => {
        e.preventDefault();

        // Simulando envio de formulario.
        const $formulario = d.querySelector("#formulario");
        fetch("https://formsubmit.co/ajax/jhojanebf@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json.message)
                alert(json.message)
                $formulario.reset();
            })
            .catch(err => {
                let message = err.statusText || "Ocurrió un error al enviar el formulario, intenta nuevamente";
                alert(err.status, message);
            })
    });
}

d.addEventListener("DOMContentLoaded", formValidate)