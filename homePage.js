generateGreeting();

function generateGreeting() { //responsável por apresentar a mensagem de saudação com base no horário do dia
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Bom dia!";
    } else if (hours < 18) {
        greeting = "Boa tarde!";
    } else {
        greeting = "Boa noite!";
    }
    
    document.getElementById('greeting').textContent = greeting;
}
