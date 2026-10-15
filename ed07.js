/* ED07 — shared behaviour: nav, language toggle (EN/PT-BR), load reveal */
(function(){
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var I18N = {
    en:{
      "nav.home":"Home","nav.journey":"The Journey","nav.race":"Race Chapters",
      "nav.partner":"Become a Partner","nav.shop":"Shop","nav.about":"About",
      "cta.partner":"Become a partner","cta.bar":"Back the climb before the world catches on.",

      "home.sub":"They told a ten-year-old to dream smaller. He didn't listen. This is Enrique, chasing Formula 1 from a kart in England, and a family building the impossible in plain sight.",
      "home.id":"Honda Cadet 200.  Hastings, England.  Road to Formula 1.",
      "home.see":"See the journey",
      "home.next":"Where to next",
      "home.journey.d":"The grind nobody posts. The garage, the cold mornings, the real climb.",
      "home.race.d":"Every lap, filmed. The wins, the knocks, the comebacks.",
      "home.partner.d":"Put your brand inside a story people are rooting for.",
      "home.shop.d":"Wear the movement. Every piece pays for the next race.",
      "home.bng.k":"Built, Not Given",
      "home.bng.t":"He funds the dream himself.",
      "home.bng.p1":"Karting costs more than most families can carry, and nobody wrote this one a cheque. A ten-year-old could have quit. Instead, Enrique got to work. He prints and sells his own 3D toys, dragons and keychains, and the Built, Not Given hoodies and tees take it further. What started on a school desk is a real business, and every single sale buys another lap toward Formula 1.",
      "home.bng.p2":"Nobody handed him this. He is earning it, one lap and one sale at a time. That is what Built, Not Given means.",
      "home.bng.btn":"Visit the shop",

      "jr.kicker":"In the workshop",
      "jr.title":"He builds it himself.",
      "jr.lede":"Formula 1 is engineering long before it is glory. Enrique wraps his own kart and learns every part by hand, so he understands the machine he trusts at full speed.",
      "art.1":"First helmet","art.2":"First gloves","art.3":"First race suit",
      "art.4":"First trophy","art.5":"First steering wheel","art.6":"First kart",
      "jr.note":"High-resolution photography of each piece is on its way.",
      "ev.kicker":"Trackside",
      "ev.title":"Life in the paddock.",
      "ev.lede":"The part nobody films: cold mornings, oily hands, the long drives home. This is where the dream is actually built.",
      "ev.note":"Shot across real race weekends.",
      "jr.cta":"The journey so far. Now follow it, race by race.",
      "jr.cta.btn":"Race Chapters",

      "shop.hero":"Wear the movement.",
      "shop.lede":"This is not merch, it is fuel. Every hoodie, tee and 3D print you buy pays for another lap toward Formula 1. Wear the belief, fund the climb.",
      "wear.title":"Hoodies & Tees",
      "wear.desc":"Black and white hoodies and tees. T07 on the front, Built, Not Given across the back. Worn by a family who means it.",
      "print.title":"3D Prints",
      "print.desc":"Dragons, keychains and limited editions, printed by Enrique himself. Own a piece of the climb.",
      "shop.btn":"Shop on Etsy",
      "shop.note":"Printed and shipped on demand.",

      "partners.label":"Early partners",
      "p.hero":"You are not sponsoring a kart.",
      "p.hero2":"You are buying visibility.",
      "p.lede":"People do not root for logos. They root for people. Enrique is a ten-year-old chasing Formula 1 against the odds, and audiences are falling for the story. Put your brand inside it, on our Instagram today, with live shows on YouTube and TikTok coming. Three channels, one story people actually care about.",
      "p.see":"See the packages","p.talk":"Talk to us",
      "p.packages":"The packages",
      "p.month":"/ month","p.season":"/ season","p.seasononly":"Season only","p.choose":"Choose",
      "p.founding.t":"Founding Partner",
      "p.founding.d":"Lock the 2027 season now and the pre-season, November 2026 to January 2027, is on us. Prices only climb as the audience grows. The brands that back a driver before the world notices are the ones the story remembers.",
      "p.pay.t":"How payment works",
      "p.pay.m.t":"Monthly","p.pay.m.d":"Full price, cancel anytime with 30 days notice.",
      "p.pay.s.t":"Full season, paid upfront","p.pay.s.d":"Pay ten months, get two free. The best rate, locked in as a founder.",
      "p.addons.t":"Add-ons for any package","p.addons.cta":"Ask us about add-ons",
      "p.cta.t":"Be part of the story before everyone else.","p.cta.pack":"Download the pack",

      "rc.h1":"Every lap tells a story.",
      "rc.lede":"The wins, the crashes, the comebacks, filmed and real. Watch the story unfold on Instagram, with live shows on YouTube and TikTok coming.",
      "rc.live.t":"Follow every lap","rc.live.d":"New clips from race weekends, training and the workshop, every week.",
      "rc.live.btn":"Follow on Instagram","rc.watch":"Watch on Instagram","rc.soon":"Coming soon",
      "rc.note":"New clips coming soon. Follow on Instagram so you don't miss them.",

      "ab.h1":"Ten years old. One plan. No plan B.",
      "ab.sub":"This is Enrique. A school bag, a cat at home, and a dream the world calls impossible. He decided to build it anyway, and to pay for it himself.",
      "ab.b1.t":"A normal life, lived on purpose.",
      "ab.b1.p":"On the outside, an ordinary ten-year-old: school, homework, his cat. On the inside, a focus most adults never find. Every cold 5am start, every lap in the rain, is one more brick toward Formula 1.",
      "ab.b2.t":"He funds the dream himself.",
      "ab.b2.p":"Karting is brutally expensive, and nobody wrote this family a cheque. So Enrique did something about it. He started printing and selling toys and keychains to friends at school. That school desk became a small shop online, and every order buys another set of tyres, another shot at the dream.",
      "ab.b2.btn":"Visit the shop",
      "ab.pull":"He didn't wait to be given anything.",
      "ab.pull2":"That is what Built, Not Given means.",
      "ab.end.t":"This is just the start line.",
      "ab.end.p":"The dream is big. The plan is real. Karting now, F4 in a few years, step by step to Formula 1. You can watch it from the stands, wear the movement, or put your name on the climb and build it with us.",
      "ab.gal.kicker":"Off the track",
      "ab.gal.t":"Just a kid, really.",
      "ab.gal.lede":"A big dream does not mean a strange life. It means a full one.",
      "ab.gal.1":"With his sister Laura","ab.gal.2":"On the climbing wall","ab.gal.3":"Family bike ride",
      "ab.gal.4":"Ice cream stop","ab.gal.5":"Family","ab.gal.6":"With mum",
      "ab.gal.note":"High-resolution photos coming soon.",

      "foot.follow":"Follow the journey","foot.rights":"All rights reserved."
    },
    pt:{
      "nav.home":"Início","nav.journey":"A Jornada","nav.race":"Capítulos de Corrida",
      "nav.partner":"Seja um Parceiro","nav.shop":"Loja","nav.about":"Sobre",
      "cta.partner":"Seja um parceiro","cta.bar":"Apoie a subida antes de todo mundo perceber.",

      "home.sub":"Disseram a um menino de dez anos pra sonhar menor. Ele não deu ouvidos. Esse é o Enrique, atrás da Fórmula 1 num kart na Inglaterra, e uma família construindo o impossível à vista de todos.",
      "home.id":"Honda Cadet 200.  Hastings, Inglaterra.  Rumo à Fórmula 1.",
      "home.see":"Veja a jornada",
      "home.next":"Por onde seguir",
      "home.journey.d":"O trabalho que ninguém posta. A garagem, as manhãs frias, a subida de verdade.",
      "home.race.d":"Cada volta, filmada. As vitórias, as quedas, as viradas.",
      "home.partner.d":"Coloque sua marca dentro de uma história pela qual as pessoas torcem.",
      "home.shop.d":"Vista o movimento. Cada peça paga a próxima corrida.",
      "home.bng.k":"Built, Not Given",
      "home.bng.t":"Ele mesmo banca o sonho.",
      "home.bng.p1":"Kart custa mais do que a maioria das famílias aguenta, e ninguém passou um cheque pra essa. Um menino de dez anos poderia ter desistido. Em vez disso, o Enrique foi à luta. Ele imprime e vende os próprios brinquedos 3D, dragões e chaveiros, e os moletons e camisetas Built, Not Given levam isso adiante. O que começou numa carteira de escola virou um negócio de verdade, e cada venda compra mais uma volta rumo à Fórmula 1.",
      "home.bng.p2":"Ninguém deu nada de bandeja. Ele está conquistando, uma volta e uma venda de cada vez. É isso que Built, Not Given significa.",
      "home.bng.btn":"Ver a loja",

      "jr.kicker":"Na oficina",
      "jr.title":"Ele mesmo constrói.",
      "jr.lede":"Fórmula 1 é engenharia muito antes de ser glória. O Enrique adesiva o próprio kart e aprende cada peça na mão, pra entender a máquina em que confia a toda velocidade.",
      "art.1":"Primeiro capacete","art.2":"Primeiras luvas","art.3":"Primeiro macacão",
      "art.4":"Primeiro troféu","art.5":"Primeiro volante","art.6":"Primeiro kart",
      "jr.note":"As fotos em alta resolução de cada peça estão a caminho.",
      "ev.kicker":"Na pista",
      "ev.title":"A vida nos bastidores.",
      "ev.lede":"A parte que ninguém filma: manhãs frias, mãos sujas de graxa, a viagem longa de volta pra casa. É aqui que o sonho é construído de verdade.",
      "ev.note":"Registrado em fins de semana de corrida reais.",
      "jr.cta":"A jornada até aqui. Agora acompanhe, corrida a corrida.",
      "jr.cta.btn":"Capítulos de Corrida",

      "shop.hero":"Vista o movimento.",
      "shop.lede":"Isto não é produto, é combustível. Cada moletom, camiseta e impressão 3D que você compra paga mais uma volta rumo à Fórmula 1. Vista a crença, financie a subida.",
      "wear.title":"Moletons e Camisetas",
      "wear.desc":"Moletons e camisetas preto e branco. T07 na frente, Built, Not Given nas costas. Vestido por uma família que leva a sério.",
      "print.title":"Impressões 3D",
      "print.desc":"Dragões, chaveiros e edições limitadas, impressos pelo próprio Enrique. Tenha um pedaço da subida.",
      "shop.btn":"Comprar na Etsy",
      "shop.note":"Impresso e enviado sob demanda.",

      "partners.label":"Primeiros parceiros",
      "p.hero":"Você não está patrocinando um kart.",
      "p.hero2":"Você está comprando visibilidade.",
      "p.lede":"As pessoas não torcem por logos. Torcem por pessoas. O Enrique é um menino de dez anos atrás da Fórmula 1 contra todas as probabilidades, e o público está se apaixonando pela história. Coloque sua marca dentro dela, no nosso Instagram hoje, com lives no YouTube e no TikTok chegando. Três canais, uma história pela qual as pessoas realmente se importam.",
      "p.see":"Ver os pacotes","p.talk":"Fale com a gente",
      "p.packages":"Os pacotes",
      "p.month":"/ mês","p.season":"/ temporada","p.seasononly":"Só temporada","p.choose":"Escolher",
      "p.founding.t":"Parceiro Fundador",
      "p.founding.d":"Feche a temporada 2027 agora e a pré-temporada, de novembro de 2026 a janeiro de 2027, é por nossa conta. Os preços só sobem conforme o público cresce. As marcas que apoiam um piloto antes de todo mundo perceber são as que a história lembra.",
      "p.pay.t":"Como funciona o pagamento",
      "p.pay.m.t":"Mensal","p.pay.m.d":"Preço cheio, cancela quando quiser com 30 dias de aviso.",
      "p.pay.s.t":"Temporada à vista","p.pay.s.d":"Pague dez meses, ganhe dois. A melhor tarifa, travada como fundador.",
      "p.addons.t":"Add-ons para qualquer pacote","p.addons.cta":"Fale com a gente sobre add-ons",
      "p.cta.t":"Faça parte da história antes de todo mundo.","p.cta.pack":"Baixar o pack",

      "rc.h1":"Cada volta conta uma história.",
      "rc.lede":"As vitórias, as batidas, as viradas, filmadas e reais. Acompanhe a história no Instagram, com lives no YouTube e no TikTok chegando.",
      "rc.live.t":"Acompanhe cada volta","rc.live.d":"Clipes novos dos fins de semana de corrida, treinos e oficina, toda semana.",
      "rc.live.btn":"Seguir no Instagram","rc.watch":"Assistir no Instagram","rc.soon":"Em breve",
      "rc.note":"Clipes novos em breve. Siga no Instagram pra não perder.",

      "ab.h1":"Dez anos. Um plano. Sem plano B.",
      "ab.sub":"Esse é o Enrique. Uma mochila, um gato em casa, e um sonho que o mundo chama de impossível. Ele decidiu construir mesmo assim, e pagar por ele sozinho.",
      "ab.b1.t":"Uma vida normal, vivida com propósito.",
      "ab.b1.p":"Por fora, um menino comum de dez anos: escola, lição, o gato. Por dentro, um foco que a maioria dos adultos nunca encontra. Cada largada às 5 da manhã no frio, cada volta na chuva, é mais um tijolo rumo à Fórmula 1.",
      "ab.b2.t":"Ele mesmo banca o sonho.",
      "ab.b2.p":"Kart é absurdamente caro, e ninguém passou um cheque pra essa família. Então o Enrique fez algo a respeito. Começou a imprimir e vender brinquedos e chaveiros pros amigos na escola. Aquela carteira de escola virou uma lojinha online, e cada pedido compra mais um jogo de pneus, mais uma chance no sonho.",
      "ab.b2.btn":"Conheça a loja",
      "ab.pull":"Ele não esperou ninguém dar nada.",
      "ab.pull2":"É isso que Built, Not Given quer dizer.",
      "ab.end.t":"Isto é só a linha de largada.",
      "ab.end.p":"O sonho é grande. O plano é real. Kart agora, F4 em alguns anos, passo a passo até a Fórmula 1. Você pode acompanhar da arquibancada, vestir o movimento, ou colocar seu nome na subida e construir com a gente.",
      "ab.gal.kicker":"Fora da pista",
      "ab.gal.t":"No fundo, só uma criança.",
      "ab.gal.lede":"Um sonho grande não significa uma vida estranha. Significa uma vida cheia.",
      "ab.gal.1":"Com a irmã, Laura","ab.gal.2":"Na escalada","ab.gal.3":"Passeio de bike em família",
      "ab.gal.4":"Hora do sorvete","ab.gal.5":"Família","ab.gal.6":"Com a mãe",
      "ab.gal.note":"Fotos em alta em breve.",

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
        '<div class="fc-btns">'+fbtn(SOCIAL.instagram,SVG.instagram,"Instagram")+'</div>';
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
