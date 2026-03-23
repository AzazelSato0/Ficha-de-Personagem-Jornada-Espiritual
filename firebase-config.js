// ===== CONFIGURAÇÃO DO FIREBASE =====
// IMPORTANTE: Customize este arquivo com suas credenciais do Firebase
// Veja o guia abaixo de como obter suas credenciais

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCgWdQXQQbLZ6E1jcH9sV7a8sbbTuZee_Y",
    authDomain: "jornada-espiritual-ficha.firebaseapp.com",
    projectId: "jornada-espiritual-ficha",
    storageBucket: "jornada-espiritual-ficha.firebasestorage.app",
    messagingSenderId: "323955634247",
    appId: "1:323955634247:web:5115b244bc36cc292e4162"
};
// Aguardar Firebase estar disponível antes de qualquer coisa
if (typeof firebase !== 'undefined') {
    // Firebase já está carregado
    console.log('Firebase carregado com sucesso');
} else {
    console.error('Firebase não conseguiu carregar. Verifique a conexão de internet.');
}
// ===== GUIA DE CONFIGURAÇÃO DO FIREBASE =====
/*
1. Acesse https://console.firebase.google.com/
2. Clique em "Criar novo projeto"
3. Digite um nome para o projeto (ex: "FichaGozante")
4. Seguindo os passos, crie o projeto
5. Na página do projeto, clique em "</>" para criar um app web
6. Copie as configurações fornecidas e substitua os valores acima
7. Depois, vá em "Firestore Database" e crie um banco de dados em modo de teste
8. Volte à página do projeto e copie as credenciais para cá

CONFIGURAÇÃO DE SEGURANÇA DO FIRESTORE:
- Acesse a seção "Firestore Database" → "Regras"
- Cole as regras abaixo para permitir leitura e escrita do usuário:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/characters/{characterId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}

*/
