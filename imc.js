async function calcularIMC(peso, altura) {
  const imc = peso / (altura ** 2);

  return {
    valor: imc.toFixed(1),
    classificacao: classificar(imc)
  };
}

function classificar(imc) {
  if (imc < 18.5) return { label: 'Magreza', cor: 'blue' };
  if (imc < 25) return { label: 'Normal', cor: 'green' };
  if (imc < 30) return { label: 'Sobrepeso', cor: 'orange' };
  return { label: 'Obesidade', cor: 'red' };
}

document.querySelector('#calcular').addEventListener('click', async () => {
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value);

  if (!peso || !altura) {
    alert("Preencha Peso e Altura");
    return;
  }

  const resultado = await calcularIMC(peso, altura);

  const el = document.querySelector('#resultado');
  el.innerHTML = `
  <span>IMC: ${resultado.valor}</span><br>
  <span>${resultado.classificacao.label}</span>
`;

el.style.color = resultado.classificacao.cor;
});