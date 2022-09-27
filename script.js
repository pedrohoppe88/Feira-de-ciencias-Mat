function enviar(){
      let a = parseFloat(document.getElementById("a").value);
      let b = parseFloat(document.getElementById("b").value);
      let c = parseFloat(document.getElementById("c").value);

      let delta = (Math.pow(b,2)) - (4 * a * c);

      if (delta > 0) {
          let x1 = (-b + Math.sqrt(delta)) / (2 * a);
          let x2 = (-b - Math.sqrt(delta)) / (2 * a);
          var text = `As raízes são: ${x1} e ${x2}.`;
      }

      if (delta < 0) {
          var text = "Não ah uma raiz real! ";
      }
      
      if (delta == 0) {
          let x1 = (-b + Math.sqrt(delta)) / (2 * a);
          let x2 = x1;
          var text = `Uma raiz: ${x1}.`;
      }
      window.alert(text);
  }


