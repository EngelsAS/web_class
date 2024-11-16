function preencherValores(valores) {
  document.getElementById("cep").textContent = `CEP: ${valores.cep}`;
  document.getElementById(
    "logradouro"
  ).textContent = `Logradouro: ${valores.logradouro}`;
  document.getElementById(
    "estado"
  ).textContent = `Estado: ${valores.estado} - ${valores.uf}`;
  document.getElementById("bairro").textContent = `Bairro: ${valores.bairro}`;
  document.getElementById(
    "localidade"
  ).textContent = `Localidade: ${valores.localidade}`;
}

async function getCep() {
  const cepInput = document.getElementById("cep_input");
  const cepValue = cepInput.value.replace(/[^0-9]/g, "");

  if (cepValue.length === 8) {
    try {
      console.log(cepValue);
      const resp = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
      const data = await resp.json();

      console.log(data);

      preencherValores(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Preencha o CEP corretamente antes de pesquisar.");
  }
}
