async function PreencherForm (data) {
  document.getElementById('endereco').value = data.logradouro;
  document.getElementById('bairro').value = data.bairro;
  document.getElementById('cidade').value = data.localidade;
  document.getElementById('estado').value = data.uf;
}

const pesquisarCep = async() => {
  const cep = document.getElementById('cep').value
  const URL = `http://viacep.com.br/ws/${cep}/json/`
  
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Algum problema com a internet');
    }

    const data = await response.json();

  } catch (error) {
    console.error('Temos algum problema com a requisição:', error);
  }
  
  PreencherForm()
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep)