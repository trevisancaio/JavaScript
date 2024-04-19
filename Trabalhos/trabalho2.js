function calculaMediaEnem() {
      let linguagens = 0;
      while (linguagens < 1 || linguagens > 1000) {
          linguagens = parseFloat(prompt("Entre com a nota em Linguagens (0-1000): "));
      }

      let cienciasHumanas = 0;
      while (cienciasHumanas < 1 || cienciasHumanas > 1000) {
          cienciasHumanas = parseFloat(prompt("Entre com a nota em Ciências Humanas (0-1000): "));
      }

      let cienciasNatureza = 0;
      while (cienciasNatureza < 1 || cienciasNatureza > 1000) {
          cienciasNatureza = parseFloat(prompt("Entre com a nota em Ciências da Natureza (0-1000): "));
      }

      let matematica = 0;
      while (matematica < 1 || matematica > 1000) {
          matematica = parseFloat(prompt("Entre com a nota em Matemática (0-1000): "));
      }


      let redacao = 0;
      while (redacao < 1 || redacao > 1000) {
          redacao = parseFloat(prompt("Entre com a nota em Redação (0-1000): "));
      }

      let media = (linguagens + cienciasHumanas + cienciasNatureza + matematica + redacao) / 5;
      alert("Sua média final é: " + media);

      if (media >= 450 && redacao > 0) {
          window.alert("Parabéns! Você está aprovado no Prouni e no Fies.");
      } else {
          window.alert("Infelizmente, você não está aprovado no Prouni e no Fies.");
      }
  }

  calculaMediaEnem();
