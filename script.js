
  function calcularQuantidade() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const revestimento = document.getElementById('revestimento').value;

    const areaParede = altura * largura;

    const areasRevestimento = {
      tijolo6furos: 0.0551,
      tijolo8furos: 0.0361,
      tijolo9furos: 0.0456,
      bloco: 0.0646,
      pisoCeramico: .40,
      pisoMadeira: .150,
      pisoVinílico: 40.0,
      porcelanato: 1.45
      
    };

    const quantidadeItens = Math.ceil(areaParede / areasRevestimento[revestimento]);

    document.getElementById('resultado').innerHTML = (`A quantidade aproximada que você precisará é de: ${quantidadeItens} `);
  }

  

