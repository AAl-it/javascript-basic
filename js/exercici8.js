function calculadora(operador, valor1, valor2) {
    var operador=document.getElementById("sel_ope").value;
    var valor1=document.getElementById("in_valor1").value;
    var valor2=document.getElementById("in_valor2").value;
    var operacio=valor1+operador+valor2+ " = ";
    
    
    switch(operador) {
                    case "+":
                        resultat = parseFloat(valor1) + parseFloat(valor2);
                        break;
                    case "-":
                        resultat = valor1 - valor2;
                        break;
                    case "*":
                        resultat = valor1 * valor2;
                        break;
                    }
                
                    alert(operacio+resultat);
    
    }