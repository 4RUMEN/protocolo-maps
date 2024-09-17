// Seleciona todos os nodes (cenas)
const nodes = document.querySelectorAll('.node');
let currentIndex = 0; // Índice da cena atual

// Função para mostrar o node atual
function showNode(index) {
    nodes.forEach((node, i) => {
        // Adiciona ou remove a classe 'active' com base no índice
        node.classList.toggle('active', i === index);
    });
}

// Inicializa a exibição com o primeiro node
showNode(currentIndex);

// Configura o botão "Próximo"
document.getElementById('next-btn').addEventListener('click', () => {
    // Avança para o próximo node
    currentIndex = (currentIndex + 1) % nodes.length;
    showNode(currentIndex);
});

// Configura o botão "Anterior"
document.getElementById('prev-btn').addEventListener('click', () => {
    // Volta para o node anterior
    currentIndex = (currentIndex - 1 + nodes.length) % nodes.length;
    showNode(currentIndex);
});
