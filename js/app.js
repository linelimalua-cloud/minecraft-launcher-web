// Dados das versões do Minecraft
const versions = [
    {
        year: 2012,
        name: "1.2.5",
        description: "Release 1.2.5",
        id: "1.2.5"
    },
    {
        year: 2011,
        name: "1.0",
        description: "Release 1.0",
        id: "1.0"
    },
    {
        year: 2010,
        name: "Indev",
        description: "Minecraft Indev",
        id: "indev"
    },
    {
        year: 2009,
        name: "Infdev",
        description: "Minecraft Infdev",
        id: "infdev"
    }
];

// Elementos do DOM
const loginForm = document.getElementById('loginForm');
const versionsSection = document.getElementById('versionsSection');
const versionsGrid = document.getElementById('versionsGrid');
const loginSection = document.querySelector('.login-section');

// Event Listeners
loginForm.addEventListener('submit', handleLogin);

// Função de Login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Armazenar usuário localmente (simulado)
        localStorage.setItem('currentUser', username);
        
        // Mostrar seção de versões
        loginSection.style.display = 'none';
        versionsSection.style.display = 'block';
        
        // Carregar versões
        loadVersions();
        
        alert(`Bem-vindo, ${username}! 🎮`);
    }
}

// Função para carregar versões
function loadVersions() {
    versionsGrid.innerHTML = '';
    
    versions.forEach(version => {
        const card = document.createElement('div');
        card.className = 'version-card';
        card.innerHTML = `
            <h3>${version.name}</h3>
            <p>${version.year}</p>
            <p>${version.description}</p>
        `;
        
        card.addEventListener('click', () => handleVersionClick(version));
        versionsGrid.appendChild(card);
    });
}

// Função ao clicar em uma versão
function handleVersionClick(version) {
    alert(`Iniciando Minecraft ${version.name} (${version.year})...`);
    console.log(`Versão selecionada: ${version.id}`);
    
    // Aqui você pode adicionar lógica para iniciar o jogo
    // ou fazer download da versão
}

// Verificar se já está logado
window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
        loginSection.style.display = 'none';
        versionsSection.style.display = 'block';
        loadVersions();
    }
});