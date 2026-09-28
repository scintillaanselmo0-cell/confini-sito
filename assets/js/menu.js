/* ============================================================
   CONFINI RESTAURANT — menu.js (pagina menu)
   Costruisce cibo, carta dei vini e birre da window.CONFINI.
   ============================================================ */
(function(){
  "use strict";
  var D = window.CONFINI; if(!D){ return; }
  var B = D.business;
  var telIntl = B.telefonoIntl.replace(/[^0-9]/g,"");

  function set(id,prop,val){ var el=document.getElementById(id); if(el){ el[prop]=val; } }
  set("hdrPrenota","href", B.prenotazioneUrl);
  set("navMobilePrenota","href", B.prenotazioneUrl);
  set("sbBook","href", B.prenotazioneUrl);
  set("sbCall","href", "tel:"+B.telefonoIntl);
  set("telFoot","href", "tel:"+B.telefonoIntl); set("telFoot","textContent", B.telefono);
  var y=document.getElementById("year"); if(y){ y.textContent=new Date().getFullYear(); }

  /* ---------- Header scroll + burger ---------- */
  var header=document.getElementById("siteHeader");
  function onScroll(){ if(window.scrollY>40){ header.classList.add("scrolled"); } else { header.classList.remove("scrolled"); } }
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
  var burger=document.getElementById("burger");
  if(burger){
    burger.addEventListener("click",function(){
      var open=document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded",open?"true":"false");
    });
    document.querySelectorAll("#navMobile a").forEach(function(a){ a.addEventListener("click",function(){ document.body.classList.remove("menu-open"); }); });
  }

  /* ---------- Costruzione sezioni ---------- */
  var esc = function(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); };

  function badgeFor(it){
    var out="";
    if(it.tags){
      if(it.tags.indexOf("specialita")>-1) out+='<span class="badge spec">Specialità</span>';
      if(it.tags.indexOf("vegetariano")>-1) out+='<span class="badge veg">Vegetariano</span>';
      if(it.tags.indexOf("piccante")>-1) out+='<span class="badge pic">Piccante</span>';
    }
    if(it.all && it.all.length){ it.all.forEach(function(a){ out+='<span class="badge all">'+esc(a)+'</span>'; }); }
    return out ? '<div class="m-badges">'+out+'</div>' : '';
  }

  function itemHTML(it){
    var terms=(it.name+" "+(it.desc||"")+" "+((it.all||[]).join(" "))+" "+((it.tags||[]).join(" "))).toLowerCase();
    return '<article class="m-item" data-terms="'+esc(terms)+'">'+
             '<div class="m-top"><span class="m-name">'+esc(it.name)+'</span>'+
             '<span class="m-dots"></span><span class="m-price">'+esc(it.price)+'</span></div>'+
             (it.desc?'<p class="m-desc">'+esc(it.desc)+'</p>':'')+
             badgeFor(it)+
           '</article>';
  }

  function catHTML(cat, id){
    var items=cat.items.map(itemHTML).join("");
    return '<section class="menu-cat" id="'+id+'" data-cat>'+
             '<h2>'+esc(cat.cat)+'</h2><div class="cat-orn"></div>'+
             '<div class="cat-items">'+items+'</div>'+
           '</section>';
  }

  var body=document.getElementById("menuBody");
  var tabsEl=document.getElementById("menuTabs");
  var tabs=[]; // {id,label}
  var htmlParts=[];

  // Cibo: una sezione per categoria (tab dedicata)
  var ciboTabLabels={ "Antipasti":"Antipasti", "Primi piatti":"Primi", "Secondi piatti":"Secondi" };
  D.menuCibo.forEach(function(cat,i){
    var id="cat-cibo-"+i;
    tabs.push({id:id, label: ciboTabLabels[cat.cat]||cat.cat});
    htmlParts.push(catHTML(cat,id));
  });

  // Vini: 4 sottocategorie, un'unica tab "Vini" che punta alla prima
  if(D.menuVini && D.menuVini.length){
    D.menuVini.forEach(function(cat,i){
      var id="cat-vini-"+i;
      if(i===0){ tabs.push({id:id, label:"Vini"}); }
      htmlParts.push(catHTML(cat,id));
    });
  }

  // Birre / bevande
  if(D.menuBevande && D.menuBevande.length){
    D.menuBevande.forEach(function(cat,i){
      var id="cat-bev-"+i;
      tabs.push({id:id, label: cat.cat});
      htmlParts.push(catHTML(cat,id));
    });
  }

  body.innerHTML = htmlParts.join("") + '<div class="no-results" id="noResults" style="display:none">Nessun risultato per la ricerca.</div>';
  tabsEl.innerHTML = tabs.map(function(t,i){
    return '<button role="tab" data-target="'+t.id+'"'+(i===0?' class="active"':'')+'>'+esc(t.label)+'</button>';
  }).join("");

  /* ---------- Tab: click -> scroll ---------- */
  var headerH = function(){ return (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'))||70); };
  tabsEl.addEventListener("click", function(e){
    var btn=e.target.closest("button[data-target]"); if(!btn){ return; }
    var target=document.getElementById(btn.getAttribute("data-target"));
    if(target){
      var top=target.getBoundingClientRect().top + window.scrollY - headerH() - 64;
      window.scrollTo({top:top, behavior:"smooth"});
    }
  });

  /* ---------- Tab attiva in base allo scroll ---------- */
  var tabButtons=Array.prototype.slice.call(tabsEl.querySelectorAll("button"));
  var targets=tabButtons.map(function(b){ return document.getElementById(b.getAttribute("data-target")); });
  function syncActiveTab(){
    var y=window.scrollY + headerH() + 90;
    var idx=0;
    for(var i=0;i<targets.length;i++){ if(targets[i] && targets[i].offsetTop<=y){ idx=i; } }
    tabButtons.forEach(function(b,i){ b.classList.toggle("active", i===idx); });
    // porta la tab attiva in vista nella barra
    var act=tabButtons[idx];
    if(act && act.scrollIntoView){ /* mantiene la tab visibile */
      var r=act.getBoundingClientRect(), pr=tabsEl.getBoundingClientRect();
      if(r.left<pr.left||r.right>pr.right){ tabsEl.scrollLeft += (r.left-pr.left) - 16; }
    }
  }
  window.addEventListener("scroll", syncActiveTab, {passive:true}); syncActiveTab();

  /* ---------- Ricerca ---------- */
  var search=document.getElementById("menuSearch");
  var noRes=document.getElementById("noResults");
  if(search){
    search.addEventListener("input", function(){
      var q=this.value.trim().toLowerCase();
      var totalVisible=0;
      document.querySelectorAll("[data-cat]").forEach(function(cat){
        var shown=0;
        cat.querySelectorAll(".m-item").forEach(function(it){
          var match = !q || it.getAttribute("data-terms").indexOf(q)>-1;
          it.style.display = match ? "" : "none";
          if(match) shown++;
        });
        cat.style.display = shown>0 ? "" : "none";
        totalVisible+=shown;
      });
      if(noRes){ noRes.style.display = totalVisible===0 ? "block":"none"; }
    });
  }
})();
