(()=>{"use strict";const e=(e,a)=>{let i=[...e],t="";if(a){for(let e=0;e<i.length;e++)t+=`\n\t\t\t<a href="../html/focus.html?id=${i[e].id}">\n    \t<article>\n\t\t<img class="logements_img" src="../images/${i[e].imageUrl}.jpg" alt="" />\n\t\t<p class="titre">${i[e].name}</p>\n\t\t<p class="type">${i[e].type}</p>\n\t\t<p class="prix"><span class="gras">${i[e].prix} €</span>&nbsp;par nuit</p>\n\t\t</article>\n\t\t</a>\n        `;document.querySelector(".photo_zone").innerHTML=t}else{for(let e=0;e<i.length;e++)t+=`\n     \n    \t<article>\n\t\t<img class="logements_img" src="../images/${i[e].imageUrl}.jpg" alt="" />\n\t\t<p class="titre">${i[e].name}</p>\n\t\t<p class="type">${i[e].type}</p>\n\t\t<p class="prix"><span class="gras">${i[e].prix} €</span>&nbsp;par nuit</p>\n\t\t</article>\n\t\n        `;document.querySelector(".photo_zone").innerHTML=t}},a=class{constructor(e,a,i){this.year=e,this.month=a,this.date=i,this.donnée=[{year:this.year,month:[{janvier:31,fevrier:28,mars:31,avril:30,mai:31,juin:30,juillet:31,aout:31,septembre:30,octobre:31,novembre:30,decembre:31}],day:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]}]}isThisYearBisextil(){return this.year%4==0&&this.year%100!=0||this.year%400==0}getDay(e,a,i){return new Date(e,a-1,i-1).getDay()}},i=(e,a,i,t,o)=>{const n=["Lun.","Mar.","Mer.","Jeu.","Ven.","Sam.","Dim."],r=o.donnée[0].month[0][a],l=t;let s=0,d=1,m=document.createElement("div");m.className="container";let c=document.createElement("div");c.className="divPara";let u=document.createElement("p"),p=document.createElement("p");u.className="paraMonth",p.className="paraYear";let b=document.createTextNode(`${a}`),g=document.createTextNode(` ${e}`);u.appendChild(b),p.appendChild(g),c.appendChild(u),c.appendChild(p),m.appendChild(c);let v=document.createElement("table"),q=document.createElement("thead"),y=document.createElement("tr");for(let e=0;e<n.length;e++){let a=document.createElement("th"),i=document.createTextNode(`${n[e]}`);a.appendChild(i),y.appendChild(a)}q.appendChild(y),v.appendChild(q);for(let e=0;e<6;e++){let e=document.createElement("tr");for(let a=0;a<n.length;a++){let a,i=document.createElement("td");s<l||d>r?a=document.createTextNode(""):(a=document.createTextNode(`${d}`),i.className="joursSemaine",d++),s++,i.appendChild(a),e.appendChild(i)}v.appendChild(e),m.appendChild(v)}return m},t=(e,a)=>{let i=e.donnée[0].month[0];return Object.keys(i)[a-1]},o=(e,a,i,t,o,n,r,l)=>{let s=!1;s=((e,a)=>!(a[0]<=e[0]&&a[1]<=e[1]&&a[2]<=e[2]&&(console.log("choix impossible"),1)))(o=[n,r,l],a),s&&(document.querySelectorAll("td").forEach((e=>{e.classList.remove(i)})),e.target.classList.add(i));let d=document.getElementsByTagName("td");return Array.from(d).some((e=>e.classList.contains(t)))&&Array.from(d).some((e=>e.classList.contains(i)))?document.querySelector(".search").style.backgroundColor="green":document.querySelector(".search").style.backgroundColor="rgb(9, 1, 109)",o},n=[{imageUrl:"1",reservation:[],voyageurs:2,id:"c52db0f2-e1b2-4e25-84f7-04085e2de230",name:"Maison en montagne",type:"particulier",prix:50,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"2",reservation:[],voyageurs:4,id:"bdcaac68-a668-4a03-846b-4c39c5d5e98c",name:"Maison en ville",type:"bla bla bla",prix:70,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"3",reservation:[],voyageurs:3,id:"7f888269-0446-4b17-a17d-f7a164cfb1bb",name:"Maison en campagne",type:"bla bla bla",prix:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"4",reservation:[],voyageurs:5,id:"9462562a-0d22-4085-950a-420666cd7686",name:"Maison bla bla bla...",type:"bla bla bla",prix:114,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"5",voyageurs:2,id:"c4f29181-e5cf-4bcf-ab0f-e94b609ad90e",name:"Maison bla bla bla...",type:"bla bla bla",prix:37,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"6",voyageurs:2,id:"8903715a-8a3c-427b-a23a-1f3c8712223c",name:"Maison bla bla bla...",type:"bla bla bla",prix:99,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"7",voyageurs:4,id:"fe74fe99-5d97-48bc-bb68-3db5356dcfd9",name:"Maison bla bla bla...",type:"bla bla bla",prix:88,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"8",voyageurs:6,id:"75aa0942-5747-4fc4-bccb-7d7749f231da",name:"Maison bla bla bla...",type:"bla bla bla",prix:312,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"9",voyageurs:7,id:"641d8b32-cb97-4d31-9759-7c972d1a660c",name:"Maison bla bla bla...",type:"bla bla bla",prix:120,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"10",voyageurs:1,id:"eea44b6c-c40c-4234-b0fa-e5631321d03d",name:"Maison bla bla bla...",type:"bla bla bla",prix:85,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"11",voyageurs:2,id:"5d57a029-01f3-48c7-ac28-2cfae745bb7f",name:"Maison bla bla bla...",type:"bla bla bla",prix:26,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"12",voyageurs:2,id:"a3e99f4a-8d04-4e17-a5ed-4ddee4594349",name:"Maison bla bla bla...",type:"bla bla bla",prix:78,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"13",voyageurs:2,id:"d8390e89-6159-4b28-a44d-5b7f249d30f6",name:"Maison bla bla bla...",type:"bla bla bla",prix:55,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"14",voyageurs:2,id:"983aa182-ca01-4871-8cd6-b767793b9b28",name:"Maison bla bla bla...",type:"bla bla bla",prix:47,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"15",voyageurs:2,id:"1c8f9931-777e-4165-bd99-d5d4447d6137",name:"Maison bla bla bla...",type:"bla bla bla",prix:41,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"16",voyageurs:2,id:"4eb475de-bda1-4066-ab21-0008edda4ae3",name:"Maison bla bla bla...",type:"bla bla bla",prix:66,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"17",voyageurs:2,id:"35fd2804-cd88-4b27-8fe0-cf745811c24b",name:"Maison bla bla bla...",type:"bla bla bla",prix:78,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"18",voyageurs:2,id:"35948450-4035-4169-8935-2764a5350f3c",name:"Maison bla bla bla...",type:"bla bla bla",prix:54,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"19",voyageurs:2,id:"30535c73-cecb-47c9-a560-a80c230dad13",name:"Maison bla bla bla...",type:"bla bla bla",prix:99,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"20",voyageurs:2,id:"fba5be3d-4261-4d30-b8f0-79cb188cad01",name:"Maison bla bla bla...",type:"bla bla bla",prix:13,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"21",voyageurs:2,id:"2b9eaa11-afdb-4c97-bc0e-c02f609611c8",name:"Maison bla bla bla...",type:"bla bla bla",prix:145,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"22",voyageurs:2,id:"2082b8c9-f7c4-4dde-889d-01a0a2bab019",name:"Maison bla bla bla...",type:"bla bla bla",prix:263,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"23",voyageurs:2,id:"0c38540a-a303-4676-bf4c-9b9fe99c788c",name:"Maison bla bla bla...",type:"bla bla bla",prix:45,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"24",voyageurs:2,id:"aa1af914-64b1-4aa3-9ec0-5741c5fdfc7b",name:"Maison bla bla bla...",type:"bla bla bla",prix:49,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"25",voyageurs:2,id:"b9bfa03e-b74d-4b96-aafe-b1849d746b88",name:"Maison bla bla bla...",type:"bla bla bla",prix:156,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"26",voyageurs:2,id:"d1e43252-47be-4231-844f-8d8befa09713",name:"Maison bla bla bla...",type:"bla bla bla",prix:147,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"27",voyageurs:2,id:"e924095b-82d6-49e9-88a1-a7e499d81cd4",name:"Maison bla bla bla...",type:"bla bla bla",prix:104,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"28",voyageurs:2,id:"bc77cc73-50e1-4816-ba78-7e6797f7aeb4",name:"Maison bla bla bla...",type:"bla bla bla",prix:89,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{imageUrl:"29",voyageurs:2,id:"8ffacac2-d719-408a-9f87-791ed11a332c",name:"Maison bla bla bla...",type:"bla bla bla",prix:18,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];let r=!1,l=JSON.parse(localStorage.getItem("logements"));null==l&&localStorage.setItem("logements",JSON.stringify(n)),"Accueil"===document.title&&e(n,r),console.log(l);let s=(()=>{let e=new Date,a=e.getFullYear(),i=e.getMonth()+1;return[e.getDate(),i,a]})(),d=s[2],m=s[1],c=s[0],u=new a(d,m,c),p=d,b=document.createElement("div");b.id="diapo_container";let g="";for(let e=p;e<p+3;e++){let o=new a(e,m,c),n=o.isThisYearBisextil();o.donnée[0].month[0].fevrier=n?29:28;for(let e=m;e<13;e++){let a=t(o,e),n=o.getDay(o.donnée[0].year,e,1),r=i(o.donnée[0].year,a,0,n,o);g+=r;let l=document.createElement("div");l.className="mois",l.appendChild(r),b.appendChild(l)}m=1}document.querySelector(".modal_content").appendChild(b),document.addEventListener("click",(e=>{if("btn-calendar"===e.target.getAttribute("id")){let e=document.querySelector(".modal");document.querySelector(".calendar").classList.add("bottom"),"hidden"===e.classList[1]?e.classList.remove("hidden"):e.classList.add("hidden")}}));let v=0,q=b.childElementCount;document.addEventListener("click",(e=>{"arrow left-arrow"===e.target.getAttribute("class")&&(v=(e=>(e<=0||(e--,console.log(e),document.getElementById("diapo_container").style.transform=`translateX(${-800*e}px)`),e))(v))})),document.addEventListener("click",(e=>{"arrow right-arrow"===e.target.getAttribute("class")&&(v=((e,a)=>(e++,console.log(e),e===a/2?e-1:(document.getElementById("diapo_container").style.transform=`translateX(${-800*e}px)`,e)))(v,q))}));let y=!0,x=!1,f=[0,0,0],h=[32,13,3e3];if(document.addEventListener("click",(e=>{if("joursSemaine"===e.target.getAttribute("class")){let a=e.target.closest("table").parentElement,i=parseInt(e.target.textContent),t=parseInt(a.querySelector(".paraYear").textContent),n=a.querySelector(".paraMonth").textContent;n=((e,a)=>{let i=Object.keys(e.donnée[0].month[0]);for(let e=0;e<i.length;e++)if(i[e]===a)return e+1})(u,n),y&&(f=o(e,h,"choosenOneDepart","choosenOneArrivee",f,i,n,t),console.log(`depart time avant rechercher : ${f}`)),x&&(h=o(e,h,"choosenOneArrivee","choosenOneDepart",f,i,n,t),console.log(`endTime avant rechercher : ${h}`))}})),document.addEventListener("click",(e=>{if("start btn"===e.target.getAttribute("class")){y=!y,x=!1,document.querySelector(".end").style.backgroundColor="rgb(9, 1, 109)",document.querySelector(".start").style.backgroundColor=y?"green":"rgb(9, 1, 109);"}})),document.addEventListener("click",(e=>{if("end btn"===e.target.getAttribute("class")){x=!x,y=!1,document.querySelector(".start").style.backgroundColor="rgb(9, 1, 109)",document.querySelector(".end").style.backgroundColor=x?"purple":"rgb(9, 1, 109)"}})),document.addEventListener("click",(a=>{if("search btn"===a.target.getAttribute("class")){if(JSON.stringify(f)===JSON.stringify([0,0,0]))return console.log("tu n'as pas encore choisit"),void alert("choisir une date de départ");if(JSON.stringify(h)==JSON.stringify([32,13,3e3]))return void alert("Choisir une date d'arrivée");let a={start:f,end:h};localStorage.setItem("date",JSON.stringify(a)),r=!0;let i=((e,a,i)=>{let t=[];function o(e,a,i){for(const t of e){const e=new Date(t.arrivee[0].year,t.arrivee[0].month-1,t.arrivee[0].date),o=new Date(t.depart[0].year,t.depart[0].month-1,t.depart[0].date),n=new Date(a[2],a[1]-1,a[0]),r=new Date(i[2],i[1]-1,i[0]);if(!(o<=n||e>=r))return!0}return!1}for(let n=0;n<e.length;n++)o(e[n].reservation,a,i)||t.push(e[n]);return t})(JSON.parse(localStorage.getItem("logements")),f,h);e(i,r)}})),"Focus"===document.title){let e=(U=window.location.href,new URL(U).searchParams.get("id")),a=JSON.parse(localStorage.getItem("date"));f=a.start,h=a.end,((e,a,i,t)=>{let o=[...e];console.log(i),console.log(t);let n=((e,a)=>{let i=new Date(e[2],e[1]-1,e[0]),t=new Date(a[2],a[1]-1,a[0])-i;return t/=864e5,t})(i,t),r=o.filter((e=>e.id===a)),l=n*r[0].prix,s=l+10,d=`\n  <div class="container_principal">\n  <p class="title">${r[0].name}</p>\n  <img src="../images/${r[0].imageUrl}.jpg" alt="" />\n  <p class="description_title">Description:</p>\n  <p class="description">${r[0].description}</p>\n  <p class="nbVoyageurs">${r[0].voyageurs} voyageurs max</p>\n</div>\n<div class="fiche_focus">\n  <div class="title">\n      <p>\n          <span class="prix">${r[0].prix}</span>&nbsp;<span class="money"\n              >€</span\n          >\n          par nuit\n      </p>\n  </div>\n  <div class="carré">\n      <div class="carré_when">\n          <div class="arrivee">\n              <p>Arrivée</p>\n              <p>${i[0]}/${i[1]}/${i[2]}</p>\n          </div>\n          <div class="depart">\n              <p>Départ</p>\n              <p>${t[0]}/${t[1]}/${t[2]}</p>\n          </div>\n      </div>\n      <div class="voyageurs">\n          <p>Voyageurs</p>\n          <p>1 voyageur</p>\n      </div>\n  </div>\n  <button id="btn-louer" class="btn">Louer</button>\n  <div class="calculs">\n      <div class="nuits">\n          <p>${r[0].prix} x ${n} nuits:</p>\n          <p>&nbsp;${l} €</p>\n      </div>\n      <div class="frais">\n          <div class="frais_booking">\n              <p>Frais de service booking</p>\n              <p>10 €</p>\n          </div>\n      </div>\n      <div class="total">\n          <p>Total: </p>\n          <p>&nbsp; ${s} €</p>\n      </div>\n  </div>\n</div>\n  `;document.querySelector(".focus").innerHTML=d})(n,e,f,h),document.addEventListener("click",(a=>{if("btn-louer"===a.target.getAttribute("id")){if(JSON.stringify(f)===JSON.stringify([0,0,0]))return console.log("tu n'as pas encore choisit"),void alert("choisir une date de départ");if(JSON.stringify(h)==JSON.stringify([32,13,3e3]))return void alert("Choisir une date d'arrivée");let a=JSON.parse(localStorage.getItem("logements"));for(let i=0;i<a.length;i++)a[i].id===e&&(a[i].reservation.push({arrivee:[{date:f[0],month:f[1],year:f[2]}],depart:[{date:h[0],month:h[1],year:h[2]}]}),f=[0,0,0],h=[32,13,3e3],window.location.href="../index.html");localStorage.setItem("logements",JSON.stringify(a))}}))}var U;document.addEventListener("click",(e=>{"close-calendar btn-red"===e.target.getAttribute("class")&&document.querySelector(".modal").classList.add("hidden")}))})();