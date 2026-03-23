# ⚡ Quick Start - Cloud (5 minutos)

## 1️⃣ Ir para Firebase
👉 [console.firebase.google.com](https://console.firebase.google.com/)

## 2️⃣ Criar Projeto
- Clique "Create Project"
- Nome: `FichaGozante`
- Clique em criar

## 3️⃣ Criar App Web
- Clique no ícone `</>` (Add App)
- Selecione Web
- Registre o app
- **Copie as credenciais que aparecerem**

## 4️⃣ Criar Firestore
- Menu esquerdo → "Firestore Database"
- Clique "Create Database"
- Modo de teste → Criar
- Aba "Rules" → Cole isto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/characters/{characterId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```
- Publicar

## 5️⃣ Ativar Auth
- Menu esquerdo → "Authentication"
- Clique em "Email/Password" → Ativar
- Clique em "Anonymous" → Ativar

## 6️⃣ Configurar seu Projeto
- Abra `firebase-config.js`
- Cole as credenciais copiadas no lugar de `SUA_API_KEY_AQUI`
- Salve (Ctrl+S)

## 7️⃣ Usar
- Recarregue seu navegador
- Clique "☁️ Conectar à Nuvem"
- Crie conta ou teste como Anônimo
- Pronto! ✅

---

## 🎯 Status Indicator
| Cor | Significado |
|-----|------------|
| 🔴 Pulsante | Desconectado |
| 🟢 Sólido | Conectado |
| ↻ | Sincronizando |

---

## 📱 Como Acessar de Outro Dispositivo
1. Abra seu navegador
2. Acesse a mesma URL
3. Clique "☁️ Conectar à Nuvem"
4. Use o **mesmo email e senha**
5. Sua ficha sincroniza automaticamente!

---

**Pronto? Comece:**
1. Abra `index.html` no navegador
2. Clique em "☁️ Conectar à Nuvem"
3. Escolha "Anônimo (Teste)" para testar primeiro
4. Faça mudanças na ficha
5. Veja as mudanças sincronizarem! 🎲
