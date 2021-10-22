let principal = document.querySelector(".concesion");
let reiniciar = document.createElement("button");
reiniciar.innerHTML = "Reiniciar";
reiniciar.classList.toggle("reset");
document.body.appendChild(reiniciar);
let Iniciar = ()=> {

let boton = document.createElement("button");
let botonNo = document.createElement("button");
let question = document.createElement("p");
let outcome = document.createElement("p");

boton.classList.add("button");
question.textContent = "¿La persona tiene trabajo fijo?";
boton.innerHTML = "Sí";
botonNo.innerHTML = "No";

principal.appendChild(question);
principal.appendChild(boton);
principal.appendChild(botonNo);

principal.appendChild(outcome);

boton.addEventListener("click", () => {
  console.log("hello");
  boton.classList.toggle("hid");
  botonNo.classList.toggle("hid");
  let yes = document.createElement("p");
  yes.textContent = "Sí";
  principal.appendChild(yes);
  Moroso();
});



botonNo.addEventListener("click", () => {
  console.log("hello");
  boton.classList.toggle("hid");
  botonNo.classList.toggle("hid");
  let yes = document.createElement("p");
  yes.textContent = "No";
  principal.appendChild(yes);
  IngresoMayor1200();
});

let Moroso = () => {
  let question = document.createElement("p");
  question.textContent = "¿La persona es Morosa?";
  principal.appendChild(question);
  let boton = document.createElement("button");
    let botonNo = document.createElement("button");
    boton.innerHTML = "Sí";
    botonNo.innerHTML = "No";
    principal.appendChild(boton);
principal.appendChild(botonNo);
  
boton.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "Sí";
    principal.appendChild(yes);
    noConcederCredito();
    
  });

  botonNo.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "No";
    principal.appendChild(yes)
    IngresoMenor600();
  });
  
};
let IngresoMenor600 = () => {
    let question = document.createElement("p");
    question.textContent = "¿Sus ingresos son menores a 600?";
    principal.appendChild(question);
    let boton = document.createElement("button");
      let botonNo = document.createElement("button");
      boton.innerHTML = "Sí";
      botonNo.innerHTML = "No";
      principal.appendChild(boton);
  principal.appendChild(botonNo);

  boton.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "Sí";
    principal.appendChild(yes);
    noConcederCredito();
  });

  botonNo.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "No";
    principal.appendChild(yes)
    concederCredito();
  });
}


let IngresoMayor1200 = () => {
    let question = document.createElement("p");
    question.textContent = "¿Sus ingresos son mayores a 1200?";
    principal.appendChild(question);
    let boton = document.createElement("button");
      let botonNo = document.createElement("button");
      boton.innerHTML = "Sí";
      botonNo.innerHTML = "No";
      principal.appendChild(boton);
  principal.appendChild(botonNo);

  boton.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "Sí";
    principal.appendChild(yes);
    concederCredito();
  });

  botonNo.addEventListener("click", () => {
    console.log("hello");
    boton.classList.toggle("hid");
    botonNo.classList.toggle("hid");
    let yes = document.createElement("p");
    yes.textContent = "No";
    principal.appendChild(yes)
    noConcederCredito();
  });
}


let concederCredito = ()=> {
    let res = document.createElement("p");
    res.textContent = "Conceder crédito";
    res.classList.add('green');
    principal.appendChild(res);
}

let noConcederCredito = ()=> {
    let res = document.createElement("p");
    res.textContent = "No conceder crédito";
    res.classList.add('red');
    principal.appendChild(res);
}

}

Iniciar();

reiniciar.addEventListener('click', ()=> {
    principal.innerHTML= "";
    Iniciar();
})