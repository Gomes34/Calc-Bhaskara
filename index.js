const LetterA = document.getElementById("LetterA");
const LetterB = document.getElementById("LetterB");
const LetterC = document.getElementById("LetterC");
const Resultado = document.getElementById("Resultado");

function Calcular() {
    if (LetterA.value != 0 && LetterB.value != 0 && LetterC.value != 0) {
        //Calculo Delta
        let Delta = (LetterB.value**2) - 4 * (LetterA.value * LetterC.value);
        console.log(Delta); //Teste 1

        //Raiz quadrada Delta
        let RaizDelta = Math.sqrt(Delta);

        //Calculo X1 e X2
        let LetterX1 = (-LetterB.value + RaizDelta) / (2*LetterA.value);
        console.log(LetterX1); //Teste 2
        let LetterX2 = (-LetterB.value - RaizDelta) / (2*LetterA.value);
        console.log(LetterX2); //Teste 3

        //verificar valor do delta
        function verificarDelta (Delta) {
            if (Delta > 0) {
                return "A equação tem duas raízes reais e destintas!";
            }
            else if (Delta < 0) {
                LetterX1 = '';
                return "A equação não tem raízes reais!";
            } else {
                return "A equação tem apenas uma raíz real!";
            }
        }

        //Render HTML
        Resultado.innerHTML = (
            `${verificarDelta(Delta)} <br>
            Delta: ${Delta} <br>  
            X1: ${LetterX1} <br> 
            X2: ${LetterX2}`
        )
    } else  {
        window.alert("O valor de a, b e c devem necessariamente serem positivos.");
        Resultado.innerHTML = "Dicas: Uma incógnita sozinha representa o valor 1. Se ela não existe, talvez não seja uma equação de segundo grau."
    }
}