
// ==========================
// Troca para a tela do chat
// ==========================
function goToChat() {
  document.getElementById("onboarding-screen").classList.add("hidden");
  document.getElementById("chat-screen").classList.remove("hidden");
  mostrarSugestoes();
}

// ==========================
// Reseta o chat
// ==========================
function resetarChat() {
  document.getElementById("chat-area").innerHTML = "";
  mostrarSugestoes();
}

// ==========================
// Alterna tema claro/escuro
// ==========================
function toggleTheme() {
  document.body.classList.toggle("light");
}

// ==========================
// Sugestões iniciais de tópicos
// ==========================
function mostrarSugestoes() {
  const opcoes = [
    "Escalação",
    "O que é CS2",
    "Títulos",
    "História da FURIA"
  ];

  const container = document.getElementById("suggestions");
  container.innerHTML = "";

  opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => handleUserMessage(opcao);
    container.appendChild(botao);
  });
}

// ==========================
// Sugestões de jogadores (LINE NOVA 2025)
// ==========================
function mostrarJogadores() {
  const jogadores = [
    "yuurih",
    "KSCERATO",
    "FalleN",
    "molodoy",
    "YEKINDAR",
    "sidde"
  ];

  const container = document.getElementById("suggestions");
  container.innerHTML = "";

  jogadores.forEach(jogador => {
    const botao = document.createElement("button");
    botao.innerText = jogador;
    botao.onclick = () => handleUserMessage(jogador);
    container.appendChild(botao);
  });
}

// ==========================
// Recebe mensagem do usuário
// ==========================
function handleUserMessage(customMsg) {
  const input = document.getElementById("user-input");
  const msg = customMsg || input.value.trim();
  if (!msg) return;

  adicionarMensagemUsuario(msg);
  input.value = "";

  processarResposta(msg.toLowerCase());
}

// ==========================
// Exibe mensagem do usuário
// ==========================
function adicionarMensagemUsuario(msg) {
  const chat = document.getElementById("chat-area");
  const div = document.createElement("div");
  div.className = "message user";
  div.innerText = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ==========================
// Exibe resposta do bot
// ==========================
function adicionarMensagemBot(msg) {
  const chat = document.getElementById("chat-area");
  const div = document.createElement("div");
  div.className = "message bot";
  div.innerText = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ==========================
// Processa a mensagem e responde
// ==========================
function processarResposta(msg) {
  if (msg.includes("escalação") || msg.includes("jogadores")) {
    adicionarMensagemBot("Escolha um jogador para saber mais:");
    mostrarJogadores();

  } else if (msg.includes("yuurih")) {
    adicionarMensagemBot("👤 Nome: Yuri Boian (yuurih)\n🎂 Idade: 24 anos\n📅 Ingressou: 2017-11-08\n🌍 Nacionalidade: Brasil");

  } else if (msg.includes("kscerato")) {
    adicionarMensagemBot("👤 Nome: Kaike Cerato (KSCERATO)\n🎂 Idade: 24 anos\n📅 Ingressou: 2018-02-06\n🌍 Nacionalidade: Brasil");

  } else if (msg.includes("fallen")) {
    adicionarMensagemBot("👤 Nome: Gabriel Toledo (FalleN)\n🎂 Idade: 33 anos\n📅 Ingressou: 2023-07-03\n🌍 Nacionalidade: Brasil");

  } else if (msg.includes("molodoy")) {
    adicionarMensagemBot("👤 Nome: Danil Golubenko (molodoy)\n🎂 Idade: 21 anos\n📅 Ingressou: 2025-04-11\n🌍 Nacionalidade: Cazaquistão");

  } else if (msg.includes("yekindar")) {
    adicionarMensagemBot("👤 Nome: Mareks Gaļinskis (YEKINDAR)\n🎂 Idade: 24 anos\n📅 Ingressou: 2025-04-22 (stand-in)\n🌍 Nacionalidade: Letônia");

  } else if (msg.includes("sidde")) {
    adicionarMensagemBot("👤 Nome: Sidnei Macedo (sidde)\n🎂 Idade: 35 anos\n📅 Ingressou: 2024-07-09\n🌍 Nacionalidade: Brasil");

  } else if (msg.includes("cs2")) {
    adicionarMensagemBot("🎮 Counter-Strike 2 (CS2) é a nova versão do clássico jogo de tiro da Valve. Agora com motor Source 2, granadas dinâmicas e muito mais!");

  } else if (msg.includes("título") || msg.includes("campeonato")) {
    adicionarMensagemBot("🏆 A FURIA já participou de campeonatos como ESL Pro League, IEM e Majors. Em 2020, foi considerada uma das 3 melhores do mundo!");

  } else if (msg.includes("história")) {
    adicionarMensagemBot("📜 A FURIA foi fundada em 2017 e logo se destacou com seu estilo agressivo, estrutura profissional e uma legião de fãs no Brasil e no mundo.");

  } else {
    adicionarMensagemBot("Ainda estou aprendendo sobre esse tema. Tente outra pergunta ou escolha uma sugestão!");
    mostrarSugestoes();
  }
}
