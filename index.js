const LetterA = document.getElementById("LetterA");
const LetterB = document.getElementById("LetterB");
const LetterC = document.getElementById("LetterC");
const Resultado = document.getElementById("Resultado");

function Calcular() {
    const a = Number(LetterA.value);
    const b = Number(LetterB.value);
    const c = Number(LetterC.value);


    //Verificar se os valores de a, b e c correspondem aos requisitos de serem diferentes de zero
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        window.alert("O valor de a, b e c devem ser números diferentes de zero.");
        Resultado.innerHTML = "Dicas: Uma incógnita sozinha representa o valor 1. Se ela não existe, talvez não seja uma equação de segundo grau.";
        return;
    }

    //Calculo Delta
    let Delta = (b**2) - 4 * (a * c);
    console.log(Delta); //Teste 1

    //Raiz quadrada Delta
    let RaizDelta = Math.sqrt(Delta);

    //Calculo X1 e X2
    let X1 = (-b + RaizDelta) / (2*a);
    console.log(X1); //Teste 2
    let X2 = (-b - RaizDelta) / (2*a);
    console.log(X2); //Teste 3

    //verificar valor do delta
    function verificarDelta (Delta) {
        if (Delta > 0) {
            return "A equação tem duas raízes reais e destintas!";
        }
        else if (Delta < 0) {
            X1 = '';
            X2 = '';
            return "A equação não tem raízes reais!";
        } else {
            return "A equação tem apenas uma raíz real!";
        }
    }

    //Render HTML
    Resultado.innerHTML = (
        `${verificarDelta(Delta)} <br>
        Delta: ${Delta} <br>  
        X1: ${X1} <br> 
        X2: ${X2}`
    )
}