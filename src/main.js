function init(){
  const form = document.getElementById("regisztracio")
  const message = document.getElementById("message")
  
  form.addEventListener("submit", function(event){
    event.preventDefault()

    form.reset()

    message.innerHTML = `
        <div class="alert alert-success mt-3">
            Sikeres regisztráció
        </div>
    `;
  })

  
}





document.addEventListener("DOMContentLoaded", init)