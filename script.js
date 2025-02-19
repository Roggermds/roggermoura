// Função para adicionar valores ao visor
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
// Função para limpar o visor
function clearDisplay() {
const display = document.getElementById('display');
display.value = '';

}

// Função para calcular o resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Usa a função eval para calular a expressão no visor
        display.value = eval(display.value);
    } catch (error) {
        // Em caso de erro (ex: divisão por zero), exibe "Erro"
        display.value = 'Erro';
        
    }
}