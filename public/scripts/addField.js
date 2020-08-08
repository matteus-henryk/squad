// procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField);


//Executar uma ação
function cloneField() {
  // Duplicar os campos, Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

  //Pagar os campos: Que campos?
  const fields = newFieldContainer.querySelectorAll('input');
  
  //para cada campo, limpar
  fields.forEach(function(field) {
    //pagar o field do momento e limpa ele
    field.value = ""
  })

  // Colocar na pagina: onde colocar?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
};

