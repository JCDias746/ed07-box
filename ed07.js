/* ED07 — shared behaviour: nav, language toggle (EN/PT-BR), load reveal */
(function(){
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var I18N = {
    en:{
      "nav.home":"Home","nav.journey":"The Journey","nav.race":"Race Chapters",
      "nav.partner":"Become a Partner","nav.shop":"Shop","nav.about":"About",
      "cta.partner":"Become a partner","cta.bar":"Build it with us from the start.",

      "home.sub":"Enrique Dias is ten years old and races karts in the UK, chasing Formula 1. ED07 is the media brand built around that journey.",
      "home.id":"Honda Cadet 200.  Hastings, England.  Road to Formula 1.",
      "home.see":"See the journey",
      "home.next":"Where to next",
      "home.journey.d":"Pieces of the journey, object by object.",
      "home.race.d":"Every race, filmed. Watch it on YouTube.",
      "home.partner.d":"Put your brand inside a real story.",
      "home.shop.d":"Wear the movement. Hoodies, tees and 3D prints.",

      "jr.kicker":"The artefacts",
      "jr.title":"Pieces of the Journey.",
      "jr.lede":"Every object tells a story. Each one photographed like a museum exhibit.",
      "art.1":"First helmet","art.2":"First gloves","art.3":"First race suit",
      "art.4":"First trophy","art.5":"First steering wheel","art.6":"First kart",
      "jr.note":"High-resolution photography of each piece is on its way.",
      "ev.kicker":"Trackside",
      "ev.title":"Life in the paddock.",
      "ev.lede":"Training, the garage, the race days. The grind behind the glory.",
      "ev.note":"More photos from every race weekend, coming soon.",
      "jr.cta":"The journey so far. Now follow it, race by race.",
      "jr.cta.btn":"Race Chapters",

      "shop.hero":"Wear the movement.",
      "shop.lede":"Every piece funds the next race. Built, Not Given, on and off the track.",
      "wear.title":"Hoodies & Tees",
      "wear.desc":"Black and white hoodies and tees. T07 on the front, Built, Not Given across the back.",
      "print.title":"3D Prints",
      "print.desc":"Dragons, keychains and limited editions. Pieces of the journey, printed layer by layer.",
      "shop.btn":"Shop on Etsy",
      "shop.note":"Printed and shipped on demand.",

      "partners.label":"Early partners",
      "p.hero":"You are not sponsoring a kart.",
      "p.hero2":"You are buying visibility.",
      "p.lede":"ED07 is a growing media channel built around a ten-year-old racer. The kart pulls the crowd. What you buy is real exposure on our Instagram and YouTube, in front of families who follow every lap.",
      "p.see":"See the packages","p.talk":"Talk to us",
      "p.packages":"The packages",
      "p.month":"/ month","p.season":"/ season","p.seasononly":"Season only","p.choose":"Choose",
      "p.founding.t":"Founding Partner",
      "p.founding.d":"Book the 2027 season now and the pre-season, November 2026 to January 2027, is on us. The brands that come in early are the ones the story remembers.",
      "p.pay.t":"How payment works",
      "p.pay.m.t":"Monthly","p.pay.m.d":"Full price, cancel anytime with 30 days notice.",
      "p.pay.s.t":"Full season, paid upfront","p.pay.s.d":"Pay ten months, get two free. The best rate, locked in as a founder.",
      "p.addons.t":"Add-ons for any package","p.addons.cta":"Ask us about add-ons",
      "p.cta.t":"Let's build something together.","p.cta.pack":"Download the pack",

      "rc.lede":"Every race, filmed. The wins, the crashes, the comebacks. Watch it all on YouTube.",
      "rc.live.t":"We go live","rc.live.d":"Race weekends, training and Q&A, streamed on YouTube.",
      "rc.live.btn":"Watch live on YouTube","rc.watch":"Watch on YouTube","rc.soon":"Coming soon",
      "rc.note":"Videos go live as the season films. Subscribe on YouTube so you don't miss a lap.",

      "ab.h1":"Ten years old. One plan: Formula 1.",
      "ab.sub":"This is Enrique. A normal kid with a school bag, a cat and a dream most people would call impossible. He decided to build it anyway.",
      "ab.b1.t":"A normal life, lived on purpose.",
      "ab.b1.p":"Enrique goes to school, does his homework and plays like any ten-year-old. The difference is the focus. Every early morning, every cold training session, every lap is one more brick in the same plan: Formula 1.",
      "ab.b2.t":"He funds the dream himself.",
      "ab.b2.p":"Karting is expensive, really expensive. So Enrique did something about it. He started printing and selling little toys, keychains and fidget toys to his friends at school. What began on a school desk is now a small shop online, and every sale helps pay for the next race.",
      "ab.b2.btn":"Visit the shop",
      "ab.pull":"He didn't wait to be given anything.",
      "ab.pull2":"That is what Built, Not Given means.",
      "ab.end.t":"This is just the start line.",
      "ab.end.p":"The dream is big, but the plan is real. Karting now, F4 in a few years, and step by step to Formula 1. Watch it happen, wear the movement, or build it with us.",

      "foot.follow":"Follow the journey","foot.rights":"All rights reserved."
    },
    pt:{
      "nav.home":"Início","nav.journey":"A Jornada","nav.race":"Capítulos de Corrida",
      "nav.partner":"Seja um Parceiro","nav.shop":"Loja","nav.about":"Sobre",
      "cta.partner":"Seja um parceiro","cta.bar":"Construa com a gente desde o começo.",

      "home.sub":"Enrique Dias tem dez anos e corre de kart no Reino Unido, atrás da Fórmula 1. A ED07 é a marca de mídia construída em cima dessa jornada.",
      "home.id":"Honda Cadet 200.  Hastings, Inglaterra.  Rumo à Fórmula 1.",
      "home.see":"Veja a jornada",
      "home.next":"Por onde seguir",
      "home.journey.d":"Pedaços da jornada, objeto por objeto.",
      "home.race.d":"Cada corrida, filmada. Assista no YouTube.",
      "home.partner.d":"Coloque sua marca dentro de uma história real.",
      "home.shop.d":"Vista o movimento. Moletons, camisetas e impressões 3D.",

      "jr.kicker":"Os artefatos",
      "jr.title":"Pedaços da Jornada.",
      "jr.lede":"Cada objeto conta uma história. Cada um fotografado como peça de museu.",
      "art.1":"Primeiro capacete","art.2":"Primeiras luvas","art.3":"Primeiro macacão",
      "art.4":"Primeiro troféu","art.5":"Primeiro volante","art.6":"Primeiro kart",
      "jr.note":"As fotos em alta resolução de cada peça estão a caminho.",
      "ev.kicker":"Na pista",
      "ev.title":"A vida nos bastidores.",
      "ev.lede":"Treino, a garagem, os dias de corrida. O trabalho por trás do brilho.",
      "ev.note":"Mais fotos de cada fim de semana de corrida, em breve.",
      "jr.cta":"A jornada até aqui. Agora acompanhe, corrida a corrida.",
      "jr.cta.btn":"Capítulos de Corrida",

      "shop.hero":"Vista o movimento.",
      "shop.lede":"Cada peça financia a próxima corrida. Built, Not Given, dentro e fora da pista.",
      "wear.title":"Moletons e Camisetas",
      "wear.desc":"Moletons e camisetas preto e branco. T07 na frente, Built, Not Given nas costas.",
      "print.title":"Impressões 3D",
      "print.desc":"Dragões, chaveiros e edições limitadas. Pedaços da jornada, impressos camada por camada.",
      "shop.btn":"Comprar na Etsy",
      "shop.note":"Impresso e enviado sob demanda.",

      "partners.label":"Primeiros parceiros",
      "p.hero":"Você não está patrocinando um kart.",
      "p.hero2":"Você está comprando visibilidade.",
      "p.lede":"A ED07 é um canal de mídia em crescimento construído em cima de um piloto de dez anos. O kart atrai o público. O que você compra é exposição real no nosso Instagram e YouTube, na frente de famílias que acompanham cada volta.",
      "p.see":"Ver os pacotes","p.talk":"Fale com a gente",
      "p.packages":"Os pacotes",
      "p.month":"/ mês","p.season":"/ temporada","p.seasononly":"Só temporada","p.choose":"Escolher",
      "p.founding.t":"Parceiro Fundador",
      "p.founding.d":"Feche a temporada 2027 agora e a pré-temporada, de novembro de 2026 a janeiro de 2027, é por nossa conta. As marcas que entram cedo são as que a história lembra.",
      "p.pay.t":"Como funciona o pagamento",
      "p.pay.m.t":"Mensal","p.pay.m.d":"Preço cheio, cancela quando quiser com 30 dias de aviso.",
      "p.pay.s.t":"Temporada à vista","p.pay.s.d":"Pague dez meses, ganhe dois. A melhor tarifa, travada como fundador.",
      "p.addons.t":"Add-ons para qualquer pacote","p.addons.cta":"Fale com a gente sobre add-ons",
      "p.cta.t":"Vamos construir algo juntos.","p.cta.pack":"Baixar o pack",

      "rc.lede":"Cada corrida, filmada. As vitórias, as batidas, as viradas. Assista tudo no YouTube.",
      "rc.live.t":"A gente vai ao vivo","rc.live.d":"Fins de semana de corrida, treinos e perguntas, ao vivo no YouTube.",
      "rc.live.btn":"Assistir ao vivo no YouTube","rc.watch":"Assistir no YouTube","rc.soon":"Em breve",
      "rc.note":"Os vídeos entram conforme a temporada é filmada. Inscreva-se no YouTube pra não perder nenhuma volta.",

      "ab.h1":"Dez anos. Um plano: a Fórmula 1.",
      "ab.sub":"Esse é o Enrique. Um menino normal, com mochila, um gato e um sonho que a maioria chamaria de impossível. Ele decidiu construir mesmo assim.",
      "ab.b1.t":"Uma vida normal, vivida com propósito.",
      "ab.b1.p":"O Enrique vai pra escola, faz a lição e brinca como qualquer criança de dez anos. A diferença é o foco. Cada manhã cedo, cada treino no frio, cada volta é mais um tijolo no mesmo plano: a Fórmula 1.",
      "ab.b2.t":"Ele mesmo banca o sonho.",
      "ab.b2.p":"Kart é caro, muito caro. Então o Enrique fez algo a respeito. Começou a imprimir e vender brinquedinhos, chaveiros e fidget toys pros amigos na escola. O que começou numa carteira de escola hoje é uma lojinha online, e cada venda ajuda a pagar a próxima corrida.",
      "ab.b2.btn":"Conheça a loja",
      "ab.pull":"Ele não esperou ninguém dar nada.",
      "ab.pull2":"É isso que Built, Not Given quer dizer.",
      "ab.end.t":"Isto é só a linha de largada.",
      "ab.end.p":"O sonho é grande, mas o plano é real. Kart agora, F4 em alguns anos, e passo a passo até a Fórmula 1. Acompanhe, vista o movimento, ou construa com a gente.",

      "foot.follow":"Acompanhe a jornada","foot.rights":"Todos os direitos reservados."
    }
  };

  function getLang(){
    try{ var s=localStorage.getItem("ed07lang"); if(s==="en"||s==="pt") return s; }catch(e){}
    var n=(navigator.language||"en").toLowerCase();
    return n.indexOf("pt")===0 ? "pt" : "en";
  }
  function apply(lang){
    var dict=I18N[lang]||I18N.en;
    document.documentElement.setAttribute("lang", lang==="pt"?"pt-BR":"en");
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k=el.getAttribute("data-i18n");
      if(dict[k]!=null) el.textContent=dict[k];
    });
    document.querySelectorAll(".lang button").forEach(function(b){
      b.setAttribute("aria-pressed", String(b.dataset.lang===lang));
    });
    try{ localStorage.setItem("ed07lang",lang); }catch(e){}
    try{ window.dispatchEvent(new CustomEvent("ed07:lang",{detail:lang})); }catch(e){}
  }
  window.ED07lang = getLang;

  function initLang(){
    var cur=getLang();
    apply(cur);
    document.querySelectorAll(".lang button").forEach(function(b){
      b.addEventListener("click",function(){ apply(b.dataset.lang); });
    });
  }

  function initNav(){
    var nav=document.querySelector(".nav");
    var links=document.querySelector(".nav .links");
    var burger=document.querySelector(".burger");
    if(burger&&links){
      burger.addEventListener("click",function(){
        var open=links.classList.toggle("open");
        burger.setAttribute("aria-expanded",String(open));
      });
      links.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click",function(){links.classList.remove("open");burger.setAttribute("aria-expanded","false");});
      });
    }
    if(nav){
      var onScroll=function(){ nav.classList.toggle("solid", window.scrollY>24); };
      onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
    }
  }

  function initReveal(){
    requestAnimationFrame(function(){ document.body.classList.add("ready"); });
  }

  /* ---- follow CTA injected into every footer (update URLs here) ---- */
  var SOCIAL={
    instagram:"https://instagram.com/enriquedias07thunderlap",
    youtube:"#",
    tiktok:"#"
  };
  var SVG={
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.8 12 4.8 12 4.8s-7 0-8.9.6A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.3 1.7 3.7 3.9 3.9v2.7c-1.3.1-2.5-.3-3.9-1.1v5.9c0 4-2.9 6.6-6.5 5.9-2.7-.5-4-2-4.2-4.2-.3-3.1 2.4-5.6 5.6-5v2.9c-.4-.1-.8-.2-1.2-.1-1.1.1-1.8.8-1.7 1.9.1 1 .9 1.6 2 1.5 1.2-.1 1.8-.9 1.8-2.2V3z"/></svg>'
  };
  function fbtn(url,svg,name){ return '<a class="fl-btn" target="_blank" rel="noopener" href="'+url+'">'+svg+name+'</a>'; }
  function initFooter(){
    document.querySelectorAll("footer.footer").forEach(function(f){
      if(f.querySelector(".follow-cta")) return;
      var cta=document.createElement("div");
      cta.className="follow-cta";
      cta.innerHTML='<span class="fc-label" data-i18n="foot.follow">Follow the journey</span>'+
        '<div class="fc-btns">'+fbtn(SOCIAL.instagram,SVG.instagram,"Instagram")+fbtn(SOCIAL.youtube,SVG.youtube,"YouTube")+fbtn(SOCIAL.tiktok,SVG.tiktok,"TikTok")+'</div>';
      f.insertBefore(cta,f.firstChild);
      var soc=f.querySelector(".footer-row .socials"); if(soc) soc.remove();
    });
  }

  function initNavAbout(){
    document.querySelectorAll(".nav .links").forEach(function(links){
      if(links.querySelector('a[href="about.html"]')) return;
      var home=links.querySelector('a[href="index.html"]');
      var a=document.createElement("a");
      a.href="about.html"; a.setAttribute("data-i18n","nav.about"); a.textContent="About";
      if(location.pathname.split("/").pop()==="about.html") a.setAttribute("aria-current","page");
      if(home&&home.nextSibling) links.insertBefore(a, home.nextSibling); else if(home) links.appendChild(a);
    });
  }

  document.addEventListener("DOMContentLoaded",function(){
    initNavAbout(); initFooter(); initLang(); initNav(); initReveal();
  });
})();
