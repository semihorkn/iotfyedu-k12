const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

const enhancementStyles=document.createElement('link');
enhancementStyles.rel='stylesheet'; enhancementStyles.href='enhancements.css';
document.head.appendChild(enhancementStyles);
const fitStyles=document.createElement('link');
fitStyles.rel='stylesheet'; fitStyles.href='fit-fixes.css?v=3';
document.head.appendChild(fitStyles);

const menu=$('.menu-toggle'),nav=$('.nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
$$('.nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(x=>io.observe(x));

const stepText=[
 'Öğrencinin ilgisini çeken gerçek yaşam problemi ya da senaryo ile öğrenme yolculuğu başlar.',
 'Fiziksel materyaller, sensörler, devreler ve dijital içerikler üzerinden özgürce keşif yapılır.',
 'Öğrenci topladığı veriyi, gözlemini veya oluşturduğu ürünü kendi cümleleriyle açıklar.',
 'Öğrenilenler yeni bir proje, tasarım, devre, kod veya model üzerinde uygulanır.',
 'Öğretmen; rubrik, proje çıktısı ve tamamlama verileriyle gelişimi panelden takip eder.'
];
$$('.steps button').forEach((b,i)=>b.onclick=()=>{$$('.steps button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('.step-detail b').textContent=`0${i+1} / 05`;$('.step-detail p').textContent=stepText[i]});

const grades=[
 ['K','Merak, gözlem ve<br>keşfin ilk adımları.','Gözlem, sınıflama, veri okuryazarlığı ve örüntü tanıma becerilerini oyun temelli etkinliklerle geliştirir.',['Gözlem','Sınıflama','Merak','Veri okuryazarlığı'],'#705cf6'],
 ['1–4','Temelleri kurar,<br>üretmeye başlar.','Fen keşifleri, temel kodlama, veri temelli devre tasarımı ve görsel programlama etkinlikleri sunar.',['Fen keşfi','Temel kodlama','Oyun tasarımı','Görsel programlama'],'#ff7650'],
 ['5–8','Veriyi toplar,<br>sistemi tasarlar.','IoT deneyleri, elektronik devreler, kodlama, 3D tasarım ve veri bilimi projeleriyle disiplinleri birleştirir.',['IoT','Elektronik','3D tasarım','Veri bilimi'],'#159f96'],
 ['9–12','Karmaşık problemleri<br>teknolojiyle çözer.','Python, yapay zekâ, veri bilimi, IoT otomasyonları ve gelişmiş elektronik projeleriyle portfolyo oluşturur.',['Python','Yapay zekâ','Otomasyon','Proje geliştirme'],'#0d2840']
];
$$('.grade-tabs button').forEach((b,i)=>b.onclick=()=>{const g=grades[i];$$('.grade-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('.grade-panel h3').innerHTML=g[1];$('.grade-panel p').textContent=g[2];$('.skill-tags').innerHTML=g[3].map(x=>`<span>${x}</span>`).join('');$('.grade-panel aside strong').textContent=g[0];$('.grade-panel aside').style.background=g[4]});

const courses=[
 ['Mini Lab ile Fen Bilimleri','fen','Fen Bilimleri','K–8','lab','Gerçek materyaller ve ölçüm araçlarıyla fen kavramlarını deneyerek öğren.'],
 ['Fen Bilimleri','fen','Fen Bilimleri','5–8','science','Deney, gözlem ve veri yorumlamayı bütünleştiren uygulamalı öğrenme yolu.'],
 ['Maarif Modeli','fen','Fen Bilimleri','5–8','compass','Türkiye Yüzyılı Maarif Modeli ile ilişkilendirilmiş etkinlik ve projeler.'],
 ['Fen Bilimleri Projeler','fen','Fen Bilimleri','5–8','project','Araştırma sorusundan ürün geliştirmeye uzanan disiplinler arası projeler.'],
 ['Cambridge Science Box','fen','Fen Bilimleri','K–8','cambridge','Cambridge Science çerçevesiyle hizalı deney ve keşif kutusu.'],
 ['App Inventor ile Mobil Kodlama','code','Bilgisayar Bilimleri','7–12','mobile','Blok tabanlı kodlamayla çalışan mobil uygulamalar tasarla.'],
 ['Scratch ile Kodlama','code','Bilgisayar Bilimleri','3–8','blocks','Hikâye, oyun ve animasyon üretirken algoritmik düşünmeyi geliştir.'],
 ['Scratch','code','Bilgisayar Bilimleri','3–8','sprite','Karakterleri, sahneleri ve olayları kodla; kendi dijital dünyanı kur.'],
 ['ScratchJr ile Kodlama','code','Bilgisayar Bilimleri','K–3','junior','Erken yaşta sıralama, olay ve döngü kavramlarını görsel kodlarla keşfet.'],
 ['Vibe Coding ile HTML/CSS Kodlama','code','Bilgisayar Bilimleri','7–12','web','Fikirlerini yapay zekâ desteğiyle çalışan web arayüzlerine dönüştür.'],
 ['Sense Miner & Easy Circuit ile Metin Tabanlı Kodlama','code','Bilgisayar Bilimleri','7–12','terminal','Sensör ve devreleri metin tabanlı kodla kontrol et.'],
 ['Sense Miner ve Easy Circuit ile Kodlama','code','Bilgisayar Bilimleri','5–8','circuit','Fiziksel devre, sensör verisi ve kodu aynı proje içinde buluştur.'],
 ['Easy Circuit ile Kodlama','code','Bilgisayar Bilimleri','4–8','chip','Elektronik bileşenleri kodlayarak çalışan sistemler geliştir.'],
 ['IoTBlock ile Kodlama','code','Bilgisayar Bilimleri','5–9','iot','Bağlı cihazları blok tabanlı araçlarla programla ve otomasyon kur.'],
 ['Kodu Game Lab ile Oyun Tasarımı','code','Bilgisayar Bilimleri','4–8','game','Oyun mekaniği, koşullar ve hedeflerle etkileşimli dünyalar tasarla.'],
 ['Desen Kodlama Etkinliği','code','Bilgisayar Bilimleri','K–4','pattern','Örüntüleri takip ederek sıralama ve temel algoritma becerisi kazan.'],
 ['IoTfy Code Studio ile Algoritmik Düşünme','code','Bilgisayar Bilimleri','K–8','algorithm','Adım, koşul ve döngülerle problem çözme stratejileri geliştir.'],
 ['Nesnelerin İnterneti (IoT)','code','Bilgisayar Bilimleri','7–12','network','Sensör, bağlantı ve otomasyonla akıllı sistemler tasarla.'],
 ['Güvenli ve Bilinçli Teknoloji Kullanımı','code','Bilgisayar Bilimleri','1–12','shield','Dijital dünyada güvenlik, etik, mahremiyet ve sağlıklı kullanım alışkanlığı kazan.'],
 ['Veri Biliminin Temelleri','ai','Veri Bilimi ve Yapay Zeka','6–12','data','Veriyi düzenle, görselleştir, örüntüleri keşfet ve yorumla.'],
 ['Sense Miner ile Veri Bilimi Projeleri - 1','ai','Veri Bilimi ve Yapay Zeka','6–9','chart','Gerçek sensör verileriyle ilk araştırma ve görselleştirme projelerini yap.'],
 ['Sense Miner ile Veri Bilimi Projeleri - 2','ai','Veri Bilimi ve Yapay Zeka','7–12','analytics','Çok değişkenli veriyi analiz ederek ileri düzey çıkarımlar üret.'],
 ['SnApp ile Veri Bilimi','ai','Veri Bilimi ve Yapay Zeka','5–9','snapp','Veri toplama ve modelleme adımlarını erişilebilir araçlarla uygula.'],
 ['İlkokul Veri Bilimi','ai','Veri Bilimi ve Yapay Zeka','1–4','primary','Tablo, grafik ve sınıflama etkinlikleriyle veri dilini öğren.'],
 ['Okul Öncesi Veri Bilimi','ai','Veri Bilimi ve Yapay Zeka','K','early','Oyunlarla eşleştir, sırala, sınıflandır ve örüntüyü fark et.'],
 ['Python ile Vibe Coding (AI)','ai','Veri Bilimi ve Yapay Zeka','8–12','python','Python ve yapay zekâ desteğiyle veri odaklı ürünler geliştir.'],
 ['Yapay Zeka Rehberi','ai','Veri Bilimi ve Yapay Zeka','5–12','brain','Yapay zekânın çalışma mantığını, kullanım alanlarını ve etiğini keşfet.']
];

const palette={fen:'aqua',code:'yellow',ai:'purple',iot:'coral'};
const iconMarkup=type=>`<div class="course-icon icon-${type}" aria-hidden="true"><span></span><i></i><b></b></div>`;
const cards=$('.cards');
cards.innerHTML=courses.map((c,i)=>`<article class="course ${palette[c[1]]} ${i>7?'catalog-hidden':''}" data-category="${c[1]}"><header><span>${c[2]}</span><b>${c[3]}</b></header><div class="visual premium-cover">${iconMarkup(c[4])}<small>IoTfy<em>Edu</em></small></div><h3>${c[0]}</h3><p>${c[5]}</p><footer>Okul + Ev <a href="#demo" aria-label="${c[0]} detayları">↗</a></footer></article>`).join('');
$('.filters').innerHTML=`<button class="active" data-filter="all">Tüm içerikler</button><button data-filter="fen">Fen Bilimleri</button><button data-filter="code">Bilgisayar Bilimleri</button><button data-filter="ai">Veri Bilimi ve Yapay Zeka</button>`;

let expanded=false, activeFilter='all';
function updateCatalog(){let shown=0;cards.classList.toggle('catalog-expanded',expanded);$$('.course').forEach(card=>{const match=activeFilter==='all'||card.dataset.category===activeFilter;const show=match&&(expanded||shown<5);card.hidden=!show;card.style.display=show?'flex':'none';if(match)shown++});const toggle=$('.show-more');toggle.textContent=expanded?'Kapat −':'Daha fazla gör ＋';toggle.setAttribute('aria-expanded',String(expanded));toggle.setAttribute('aria-controls','courseCatalog')}
$$('.filters button').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;$$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');expanded=false;updateCatalog()});
cards.id='courseCatalog';
$('.show-more').addEventListener('click',()=>{expanded=!expanded;updateCatalog();if(!expanded)$('.library').scrollIntoView({behavior:'smooth',block:'start'})});
updateCatalog();

const learningTitle=$('.learning h2');
learningTitle.innerHTML='Bilgiyi öğrenir,<br><em>keşfeder ve üretir.</em>';
$('.learning>div:first-child>p').textContent='IoTfyEdu, öğrencinin ihtiyaç duyduğu bilgiyi güçlü içeriklerle sunar; ardından bu bilgiyi deney, keşif ve üretimle kalıcı öğrenmeye dönüştürür.';

const processIcons=['material','training','content','progress'];
const processContent=[
 ['Materyal Gelir,<br>Kurulur','SenseMiner, Easy Circuit, SnApp veya Mini Lab materyalleri okula ulaşır. QR kodlu kurulum rehberleri ve yönlendirmelerle kısa sürede kullanıma hazır hale gelir.'],
 ['Öğretmen ve Yönetici<br>Eğitimleri Verilir','Öğretmenlere sınıf içi uygulama akışı, yöneticilere ise takip, raporlama ve sürdürülebilir kullanım süreçleri aktarılır.'],
 ['LMS’de Hazır<br>İçerik Açılır','Sınıf seviyesi ve öğrenme alanına göre dijital içerikler, etkinlik senaryoları, video-animasyonlar, AR/3D içerikler ve uygulama yönergeleri erişime açılır.'],
 ['Öğrenci Üretir,<br>Öğretmen Takip Eder','Öğrenci kod yazar, veri toplar, devre kurar, 3D model tasarlar veya proje geliştirir. Öğretmen tüm süreci panel üzerinden takip eder.']
];
$('.process .section-head>p').textContent='Teknik bilgi gerekmez. IoTfyEdu ekosistemi, fiziki ve dijital materyal tesliminden öğretmen eğitimine, LMS kullanımından öğrenci üretimine kadar okulun uygulama sürecini adım adım destekler.';
$$('.timeline article').forEach((article,i)=>{const old=article.querySelector('i');old.className=`process-icon ${processIcons[i]}`;old.innerHTML='<span></span><b></b>';article.querySelector('h3').innerHTML=processContent[i][0];article.querySelector('p').textContent=processContent[i][1]});

const packageIntro=$('.packages .section-head');
packageIntro.querySelector('h2').innerHTML='Okul İhtiyacına Göre<br><em>Paketler.</em>';
packageIntro.querySelector('p').textContent='IoTfyEdu paketleri; okulun hedeflediği öğrenme alanına, sınıf seviyesine ve uygulama kapsamına göre yapılandırılır. Paket detaylarında ilgili cihazlar, dijital ortamlar, içerikler ve öğretmen destek süreçleri açıklanır.';
const packageData=[
 {label:'01 / FEN BİLİMLERİ',icon:'science',title:'IoT Temelli<br>Fen Eğitimi Paketi',text:'Fen deneylerini sensörler, Mini Lab ve canlı veriyle uygulanabilir hale getirir.',items:['Bilim Laboratuvarı','SenseMiner','Mini Lab','IoT deneyleri','Fen bilimleri içerikleri','Öğretmen ve yönetici eğitimi','LMS üzerinden takip'],href:'#ecosystem'},
 {label:'02 / BİLGİSAYAR BİLİMLERİ',icon:'computing',title:'Bilgisayar<br>Bilimleri Paketi',text:'Kodlama, elektronik, 3D tasarım, oyun tasarımı ve mobil uygulama üretimi için hazırlanır.',items:['Easy Circuit','SnApp','Scratch','ScratchJr','Python ile Vibe Coding','Tinkercad ile 3D Tasarım','App Inventor','Kodu Game Lab','Diğer kodlama ve üretim içerikleri','LMS ve öğrenci erişimi'],href:'#library'},
 {label:'03 / BÜTÜNLEŞİK',icon:'integrated',title:'Bütünleşik Paket<br><small>Fen + Bilgisayar Bilimleri</small>',text:'Fen bilimleri, bilgisayar bilimleri, yapay zeka ve veri bilimini tek bir okul ekosisteminde birleştirir.',items:['Tüm IoTfyEdu ekosistemi','Bilim Laboratuvarı','SenseMiner','Easy Circuit','SnApp','Mini Lab','LMS','Öğretmen paneli','10.000+ online içerik','Yönetici raporları','Öğretmen ve yönetici eğitimleri'],href:'#demo',featured:true}
];
$('.package-grid').innerHTML=packageData.map(p=>`<article class="package${p.featured?' featured':''} reveal visible">${p.featured?'<span>En kapsamlı</span>':''}<small>${p.label}</small><i class="pkg-icon ${p.icon}" aria-hidden="true"><span></span><b></b><em></em></i><h3>${p.title}</h3><p>${p.text}</p><strong class="scope-title">İÇERİK KAPSAMI</strong><ul>${p.items.map(item=>`<li>${item}</li>`).join('')}</ul><a href="${p.href}">Paket Detaylarına Git ↗</a></article>`).join('');

const quotes=[
 ['Öğrenciler veriyi sadece ekranda görmedi; sensörden gelen gerçek veriyi ölçüp yorumladı. Fen dersi artık çok daha <em>görünür.</em>','AY','Ayşe Yılmaz','Fen Bilimleri Öğretmeni · İstanbul'],
 ['Kodlama ve elektronik devreleri aynı senaryoda birleştirmek öğrencilerin ilgisini ciddi şekilde <em>artırdı.</em>','MK','Mehmet Kaya','Bilişim Teknolojileri Öğretmeni · Ankara'],
 ['Öğretmen eğitimi, LMS ve raporlama sayesinde okul içinde uygulamayı yönetmek çok daha <em>kolay.</em>','SE','Selin Erdem','Okul Yöneticisi · İzmir']
];
let qi=0; function quote(){const q=quotes[qi];$('blockquote').innerHTML=q[0];$('.person>span').textContent=q[1];$('.person b').textContent=q[2];$('.person small').textContent=q[3];$('.quote-nav span').textContent=`0${qi+1} / 03`}
$$('.quote-nav button').forEach((b,i)=>b.onclick=()=>{qi=(qi+(i?1:-1)+3)%3;quote()});
$('.demo-form').onsubmit=e=>{e.preventDefault();$('.form-status').textContent='Teşekkürler! Talebiniz alındı; ekibimiz 48 saat içinde sizinle iletişime geçecek.';e.target.reset()};
if(matchMedia('(prefers-reduced-motion: reduce)').matches)$$('.reveal').forEach(x=>x.classList.add('visible'));
