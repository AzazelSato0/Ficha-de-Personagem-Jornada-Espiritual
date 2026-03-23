# 🌩️ Guia de Configuração - Cloud Storage (Firebase)

## Visão Geral
Sua ficha RPG agora tem suporte a **sincronização na nuvem usando Firebase**! Seus dados serão salvos automaticamente enquanto você joga.

## ✨ Recursos

- ✅ **Auto-save na nuvem** - Seus dados sincronizam automaticamente a cada 2 segundos
- ✅ **Sincronização em tempo real** - Acesse de qualquer dispositivo
- ✅ **Backup automático** - Nunca perca seus dados
- ✅ **Autenticação segura** - Email/senha ou login anônimo para testes
- ✅ **LocalStorage + Cloud** - Funciona offline e sincroniza quando conecta

---

## 🚀 Passo 1: Criar Projeto Firebase

### 1.1 Acessar Firebase Console
1. Vá para [console.firebase.google.com](https://console.firebase.google.com/)
2. Clique em **"Criar novo projeto"**

### 1.2 Configurar Novo Projeto
1. **Nome do Projeto**: Digite `FichaGozante` (ou o nome que preferir)
2. Desmarque "Ativar Google Analytics" (opcional)
3. Clique em **"Criar projeto"** e aguarde 2-3 minutos

### 1.3 Criar App Web
1. Na página do projeto, clique no ícone **`</>`** (Add App)
2. Escolha **Web** como plataforma
3. Digite um nome: `Ficha Gozante`
4. **Não marque** "Também configurar Hosting"
5. Clique em **"Registrar app"**

### 1.4 Copiar Credenciais
Você verá um código como:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDxxxxx...",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

---

## 🔧 Passo 2: Configurar Firestore Database

### 2.1 Criar Banco de Dados
1. No menu esquerdo, vá em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Iniciar em modo de teste"**
4. Selecione a região: **"us-central1"** (mais próxima do Brasil é `sa-east1` se disponível)
5. Clique em **"Ativar"**

### 2.2 Configurar Regras de Segurança
1. No Firestore, acesse a aba **"Regras"** (no topo)
2. Substitua o conteúdo todo por:

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

3. Clique em **"Publicar"**

### 2.3 Ativar Autenticação
1. No menu esquerdo, vá em **"Authentication"** (Autenticação)
2. Acesse a aba **"Provedores de conexão"**
3. Ative:
   - **Email/Senha** - Clique no email, ative e salve
   - **Anônimo** - Ative para testes

---

## 📝 Passo 3: Adicionar Credenciais ao Seu Projeto

### 3.1 Editar `firebase-config.js`
1. Abra o arquivo `firebase-config.js` na pasta do seu projeto
2. Substitua os valores em `FIREBASE_CONFIG` pelas credenciais que você copiou:

```javascript
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDxxxxx...",           // Cole aqui
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

3. Salve o arquivo (Ctrl+S)
4. **Pronto!** Recarregue seu navegador

---

## 🎮 Como Usar

### Conectar à Nuvem
1. Abra sua ficha no navegador
2. Clique em **"☁️ Conectar à Nuvem"** (no topo)
3. Escolha uma das opções:
   - **Email**: Crie uma conta ou faça login
   - **Anônimo (Teste)**: Teste sem criar conta

### Indicador de Status
- 🔴 **Vermelho pulsante** = Desconectado
- 🟢 **Verde sólido** = Conectado à nuvem
- ↻ **Girando** = Sincronizando

### Salvar e Carregar
Uma vez conectado, você terá dois botões novos:
- **☁️ Salvar na Nuvem** - Salva manualmente (automático a cada 2s)
- **☁️ Carregar da Nuvem** - Carrega a última versão salva

---

## 🔐 Segurança

### Sua Conta
- Use um email real (não será compartilhado)
- Crie uma senha forte (mínimo 6 caracteres)
- Seus dados estão protegidos e só acessíveis por você

### Dados na Nuvem
- Apenas **você** pode acessar seus registros
- Firebase protege com criptografia SSL/TLS
- Você pode deletar sua conta a qualquer momento

---

## ❓ Perguntas Frequentes

### P: Preciso de cartão de crédito?
**R:** Não! Firebase oferece uma camada gratuita generosa. Você pode testar sem nenhum custo.

### P: E se a nuvem cair?
**R:** Seus dados estão salvos em **localStorage** também! Você pode continuar trabalhando offline e sincronizar depois.

### P: Posso acessar de outro dispositivo?
**R:** Sim! Acesse com o mesmo email e senha. Sua ficha aparecerá automaticamente.

### P: Como faço backup?
**R:** Use o botão **"Baixar Ficha"** para exportar como JSON quando quiser.

### P: Posso ter múltiplas fichas?
**R:** Versão atual suporta 1 ficha por usuário. Versões futuras suportarão várias!

---

## 🆘 Resolução de Problemas

### Botão "Conectar à Nuvem" desaparece ao recarregar
**Solução:** Verifique se `firebase-config.js` está sendo carregado. Abra o console (F12) e procure por erros.

### "Erro ao sincronizar com a nuvem"
**Solução:** 
1. Verifique sua conexão de internet
2. Confirme que as regras do Firestore foram publicadas
3. Verifique se a autenticação está ativada

### Não consigo fazer login
**Solução:**
1. Verifique se ativou "Email/Senha" em Authentication
2. Se está testando, use a aba "Anônimo"
3. Confirme que o email é válido

### Dados não sincronizam
**Solução:**
1. Verifique se está conectado (indicador deve ser verde)
2. Aguarde 2 segundos de inatividade para sincronizar
3. Clique "☁️ Salvar na Nuvem" para forçar sincronização

---

## 📚 Referências

- [Firebase Console](https://console.firebase.google.com/)
- [Documentação Firebase](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)

---

## 💡 Dicas Extras

### Auto-Save
- **Não faça nada!** O auto-save cuida disso automáticamente
- Cada alteração sincroniza após 2 segundos de inatividade
- Um "✓" aparece quando salva com sucesso

### Testar Sincronização
1. Abra sua ficha em dois navegadores/abas
2. Mude algo em um deles
3. Veja a mudança aparecer no outro em tempo real!

### Gerenciar Dados
1. Acesse [console.firebase.google.com](https://console.firebase.google.com/)
2. Vá em "Firestore Database"
3. Você pode ver, editar ou deletar seus dados

---

**Perguntas? Problemas?** Consulte o console do navegador (F12 → Console) para mensagens de erro detalhadas.

**Divirta-se jogando!** 🎲⚔️
