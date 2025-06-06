function buscaCep() {
  const input = document.getElementById('cep');
  const cep = input.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        document.getElementById('resultado').innerHTML = `<p><strong>CEP não encontrado.</strong></p>`;
      } else {
        const logradouro = data.logradouro || 'Não disponível';
        const bairro = data.bairro || 'Não disponível';
        const cidade = data.localidade || 'Não disponível';
        const uf = data.uf || 'Não disponível';

        document.getElementById('resultado').innerHTML = `
          <p><strong>🏠 Logradouro:</strong> ${logradouro}</p>
          <p><strong>📍 Bairro:</strong> ${bairro}</p>
          <p><strong>🏙️ Cidade:</strong> ${cidade}</p>
          <p><strong>🗺️ UF:</strong> ${uf}</p>
        `;
      }

      input.value = '';
    })
    .catch(error => {
      console.error("Erro:", error);
      document.getElementById('resultado').innerHTML = `<p><strong>Erro ao buscar CEP.</strong></p>`;
    });
}
