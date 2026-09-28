/* ============================================================
   CONFINI RESTAURANT — main.js (home)
   Legge tutto da window.CONFINI (assets/js/data.js)
   ============================================================ */
(function(){
  "use strict";
  var D = window.CONFINI;
  if(!D){ return; }
  var B = D.business;

  var tel = "tel:" + B.telefonoIntl;
  var wa  = function(msg){ return "https://wa.me/" + B.telefonoIntl.replace(/[^0-9]/g,"") + (msg ? "?text=" + encodeURIComponent(msg) : ""); };
  var addrFull = B.indirizzo + ", " + B.cap + " " + B.citta + " " + B.provincia;

  function $(s,c){ return (c||document).querySelector(s); }
  function set(id, prop, val){ var el = document.getElementById(id); if(el){ el[prop] = val; } }

  /* ---------- LINK dinamici ---------- */
  set("btnPrenota","href", B.prenotazioneUrl);
  set("sbBook","href", B.prenotazioneUrl);
  set("btnChiama","href", tel);
  set("sbCall","href", tel);
  set("telLink","href", tel); set("telLink","textContent", B.telefono);
  set("telFoot","href", tel); set("telFoot","textContent", B.telefono);
  set("waLink","href", wa("Ciao Confini! Vorrei qualche informazione."));
  set("waBooking","href", wa("Ciao Confini! Vorrei prenotare un tavolo."));
  var wbe = document.getElementById("waBooking"); if(wbe){ wbe.target="_blank"; wbe.rel="noopener"; }
  set("waEventi","href", wa("Ciao Confini! Vorrei informazioni per un evento / una cena privata."));
  var we = document.getElementById("waEventi"); if(we){ we.target="_blank"; we.rel="noopener"; }
  set("addrLink","href", B.mapsLink);
  set("mapsLink2","href", B.mapsLink);
  set("igLink","href", B.instagram);
  set("fbLink","href", B.facebook);
  var yEl = document.getElementById("year"); if(yEl){ yEl.textContent = new Date().getFullYear(); }

  /* ---------- HEADER scroll ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll(){ if(window.scrollY > 40){ header.classList.add("scrolled"); } else { header.classList.remove("scrolled"); } }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  /* ---------- BURGER / nav mobile ---------- */
  var burger = document.getElementById("burger");
  if(burger){
    burger.addEventListener("click", function(){
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true":"false");
      burger.setAttribute("aria-label", open ? "Chiudi menu":"Apri menu");
    });
    document.querySelectorAll("#navMobile a").forEach(function(a){
      a.addEventListener("click", function(){ document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded","false"); });
    });
  }

  /* ---------- PIATTI IN EVIDENZA ---------- */
  var grid = document.getElementById("dishGrid");
  if(grid){
    var byName = {};
    D.menuCibo.forEach(function(c){ c.items.forEach(function(it){ byName[it.name] = it; }); });
    var html = "";
    (D.evidenza||[]).forEach(function(nm){
      var it = byName[nm]; if(!it){ return; }
      var tag = (it.tags && it.tags.indexOf("specialita")>-1) ? '<span class="d-tag">Specialità</span>' : '';
      html += '<article class="dish"><div class="d-top"><h3>'+it.name+'</h3><span class="d-price">'+it.price+'</span></div>'+
              '<p>'+it.desc+'</p>'+tag+'</article>';
    });
    grid.innerHTML = html;
  }

  /* ---------- GALLERIA (marquee, immagini duplicate per loop) ---------- */
  var track = document.getElementById("marqueeTrack");
  if(track && D.galleria){
    function imgTag(g){
      return '<picture><source srcset="'+g.webp+'" type="image/webp">'+
             '<img src="'+g.jpg+'" alt="'+g.alt+'" width="'+g.w+'" height="'+g.h+'" loading="lazy" draggable="false"></picture>';
    }
    var set1 = D.galleria.map(imgTag).join("");
    // Duplico due volte per uno scorrimento continuo e fluido
    track.innerHTML = set1 + set1;
  }

  /* ---------- ORARI + APERTO ORA ---------- */
  function fmt(min){
    var m = min % 1440;                       // normalizza oltre mezzanotte
    var h = Math.floor(m/60), mm = m%60;
    return (h<10?"0":"")+h+":"+(mm<10?"0":"")+mm;
  }
  function dayData(dow){ for(var i=0;i<D.orari.length;i++){ if(D.orari[i].giorno===dow){ return D.orari[i]; } } return null; }

  function computeStatus(now){
    var dow = now.getDay();
    var mins = now.getHours()*60 + now.getMinutes();
    // 1) fasce di oggi
    var today = dayData(dow);
    if(today){
      for(var i=0;i<today.fasce.length;i++){
        var o=today.fasce[i][0], c=today.fasce[i][1];
        if(mins>=o && mins < Math.min(c,1440)){
          return {open:true, close:c, msg:"Aperto ora · fino alle "+fmt(c)};
        }
      }
    }
    // 2) spillover dal giorno precedente (chiusura oltre mezzanotte)
    var prev = dayData((dow+6)%7);
    if(prev){
      for(var j=0;j<prev.fasce.length;j++){
        var pc = prev.fasce[j][1];
        if(pc>1440 && mins < (pc-1440)){
          return {open:true, close:pc, msg:"Aperto ora · fino alle "+fmt(pc)};
        }
      }
    }
    // 3) chiuso: trova prossima apertura
    for(var add=0; add<8; add++){
      var d = (dow+add)%7;
      var dd = dayData(d); if(!dd){ continue; }
      for(var k=0;k<dd.fasce.length;k++){
        var oo = dd.fasce[k][0];
        if(add===0 && mins>=oo){ continue; } // già passata oggi
        var when = (add===0) ? "oggi" : (add===1 ? "domani" : dd.label.toLowerCase());
        return {open:false, msg:"Chiuso · riapre "+when+" alle "+fmt(oo)};
      }
    }
    return {open:false, msg:"Chiuso"};
  }

  var now = new Date();
  var st = computeStatus(now);
  var pill = document.getElementById("statusPill");
  if(pill){
    pill.classList.add(st.open ? "open":"closed");
    pill.querySelector(".txt").innerHTML = "<strong>"+(st.open?"Aperto":"Chiuso")+"</strong> — "+st.msg.replace(/^(Aperto ora|Chiuso)\s·\s/,"");
  }

  // Lista orari (ordine lun→dom, oggi evidenziato)
  var order = [1,2,3,4,5,6,0];
  var hl = document.getElementById("hoursList");
  if(hl){
    var todayDow = now.getDay();
    var rows = order.map(function(dow){
      var dd = dayData(dow); if(!dd){ return ""; }
      var times = dd.fasce.map(function(f){ return fmt(f[0])+"–"+fmt(f[1]); }).join(" · ");
      var cls = dow===todayDow ? " today":"";
      return '<div class="h-row'+cls+'"><span class="h-day">'+dd.label+'</span><span class="h-time">'+times+'</span></div>';
    }).join("");
    hl.innerHTML = rows;
  }

  /* ---------- JSON-LD Restaurant schema ---------- */
  var dayMap = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
  var ohs = D.orari.map(function(o){
    return o.fasce.map(function(f){
      return { "@type":"OpeningHoursSpecification", "dayOfWeek":dayMap[o.giorno],
               "opens":fmt(f[0]), "closes": (f[1]>=1440? fmt(f[1]) : fmt(f[1])) };
    });
  }).reduce(function(a,b){ return a.concat(b); },[]);

  var ld = {
    "@context":"https://schema.org",
    "@type":"Restaurant",
    "name":B.nomeCompleto,
    "image": location.origin + location.pathname.replace(/index\.html$/,"") + "assets/img/og-image.jpg",
    "servesCuisine":["Fusion","Italiana","Mediterranea","Giapponese","Spagnola"],
    "priceRange":B.priceRange,
    "telephone":B.telefonoIntl,
    "url": location.origin + location.pathname,
    "menu": location.origin + location.pathname.replace(/index\.html$/,"") + "menu.html",
    "acceptsReservations": B.prenotazioneUrl,
    "address":{ "@type":"PostalAddress","streetAddress":B.indirizzo,"postalCode":B.cap,"addressLocality":B.citta,"addressRegion":B.provincia,"addressCountry":"IT" },
    "geo":{ "@type":"GeoCoordinates","latitude":B.geo.lat,"longitude":B.geo.lng },
    "openingHoursSpecification":ohs,
    "sameAs":[B.instagram, B.facebook]
  };
  var ldEl = document.getElementById("ldjson");
  if(ldEl){ ldEl.textContent = JSON.stringify(ld); }

  /* ---------- REVEAL on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, {threshold:.14});
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add("in"); }); }

  /* ---------- Fallback video hero (se non parte) ---------- */
  var hv = document.querySelector(".hero video");
  if(hv){
    hv.play && hv.play().catch(function(){
      var fb = document.querySelector(".hero-fallback");
      if(fb){ fb.style.display="block"; }
      hv.style.display="none";
    });
  }
})();
