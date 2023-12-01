import shuffleArray from './shuffleArray';
import afficherLogements from './afficherLogements';
import obtenirDateActuelle from './obtenirDateActuelle';
import Year from './year';
import displayCalendar from './displayCalendar';
import convertMoisEnLettre from './convertMoisEnLettre';
import turnLeft from './turnLeft';
import turnRight from './turnRight';
import convertMoisLettreEnInt from './convertMoisLettreEnInt';
import reglageAgenda from './reglageAgenda';
import getUrl from './getUrl';
import afficherLogementFocus from './AfficherLogementFocus';
import logements from './logements';
import getLogementsDisponibles from "./getLogementsDisponibles";

//peut être mettre isSearched dans le ls
let isSearched = false; 
//Transfert des logements dans le localStorage si le localStorage est vide
let localStorageLogements = JSON.parse(localStorage.getItem("logements"));
if(localStorageLogements===undefined || localStorageLogements===null){
localStorage.setItem("logements",JSON.stringify(logements));
}

if (document.title === 'Accueil') {
	afficherLogements(logements,isSearched);
}
console.log(localStorageLogements);

// OBTENTION DE LA DATE
let dateActuelle = obtenirDateActuelle();
let year = dateActuelle[2]; //int
let month = dateActuelle[1]; //int
let date = dateActuelle[0]; //int

// CREATION NOUVELLE ANNEE
let newYear = new Year(year, month, date);
let annéeDuDébut = year;

// CREATION DU CONTAINER POUR METTRE TOUS LES DIAPOS DEDANS
let diapoContainer = document.createElement('div');
diapoContainer.id = 'diapo_container';

// CREATION DU CALENDRIER
let total = '';
for (let i = annéeDuDébut; i < annéeDuDébut + 3; i++) {
	let newYear = new Year(i, month, date);

	let isBisextil = newYear.isThisYearBisextil();
	newYear.donnée[0].month[0].fevrier = isBisextil ? 29 : 28;

	for (let j = month; j < 13; j++) {
		let moisEnLettre = convertMoisEnLettre(newYear, j);
		let premierJourDuMois = newYear.getDay(newYear.donnée[0].year, j, 1); // 0 = lundi
		let containerTable = displayCalendar(
			newYear.donnée[0].year,
			moisEnLettre,
			date,
			premierJourDuMois,
			newYear
		);
		total += containerTable;
		let div1 = document.createElement('div');
		div1.className = 'mois';
		div1.appendChild(containerTable);
		diapoContainer.appendChild(div1);
	}
	month = 1;
}
document.querySelector('.modal_content').appendChild(diapoContainer);

/*---------- GESTION DES CLICKS-------------*/
// AFFICHER OU CACHER LE CALENDRIER
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('id') === 'btn-calendar') {
		let modal = document.querySelector('.modal');
		document.querySelector('.calendar').classList.add('bottom');
		modal.classList[1] === 'hidden'
			? modal.classList.remove('hidden')
			: modal.classList.add('hidden');
	}
});

let cpt = 0;
let nombreDeMois = diapoContainer.childElementCount;
// TOURNER A GAUCHE
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'arrow left-arrow') {
		cpt = turnLeft(cpt);
	}
});

// TOURNER A DROITE
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'arrow right-arrow') {
		cpt = turnRight(cpt, nombreDeMois);
	}
});

let depart = true;
let arrivee = false;
let startTime = [0, 0, 0]; // date-month-year
let endTime = [32, 13, 3000];



// RECHERCHE DANS LE CALENDRIER SELON PLAGE
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'joursSemaine') {
		let container = event.target.closest('table').parentElement;
		let date = parseInt(event.target.textContent); // ex : 1 2 3
		let year = parseInt(container.querySelector('.paraYear').textContent);
		let month = container.querySelector('.paraMonth').textContent;
		month = convertMoisLettreEnInt(newYear, month);
		if (depart) {
			let classDepart = 'choosenOneDepart';
			let classArrivee = 'choosenOneArrivee';
			startTime = reglageAgenda(
				event,
				endTime,
				classDepart,
				classArrivee,
				startTime,
				date,
				month,
				year
			);
			console.log(`depart time avant rechercher : ${startTime}`);
		}
		if (arrivee) {
			let classDepart = 'choosenOneDepart';
			let classArrivee = 'choosenOneArrivee';
			endTime = reglageAgenda(
				event,
				endTime,
				classArrivee,
				classDepart,
				startTime,
				date,
				month,
				year
			);
			console.log(`endTime avant rechercher : ${endTime}`);
		}
	}
});

// RECHERCHE DEPART
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'start btn') {
		depart = !depart;
		arrivee = false;

		document.querySelector('.end').style.backgroundColor = 'rgb(9, 1, 109)';
		let btnStart = document.querySelector('.start');
		depart
			? (btnStart.style.backgroundColor = 'green')
			: (btnStart.style.backgroundColor = 'rgb(9, 1, 109);');
	}
});

// RECHERCHE ARRIVEE
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'end btn') {
		arrivee = !arrivee;
		depart = false;
		document.querySelector('.start').style.backgroundColor = 'rgb(9, 1, 109)';

		let btnEnd = document.querySelector('.end');
		arrivee
			? (btnEnd.style.backgroundColor = 'purple')
			: (btnEnd.style.backgroundColor = 'rgb(9, 1, 109)');
	}
});

// RECHERCHE
document.addEventListener('click', (event) => {
	if (event.target.getAttribute('class') === 'search btn') {
		if(JSON.stringify(startTime)===JSON.stringify([0,0,0])){
			console.log("tu n'as pas encore choisit");
			alert("choisir une date de départ");
			return;
		}
		if(JSON.stringify(endTime) == JSON.stringify([32,13,3000])){
			alert("Choisir une date d'arrivée");
			return;
		}
		let date = {start:startTime,end:endTime};
		localStorage.setItem("date",JSON.stringify(date));

		isSearched = true;
		let storageContent = JSON.parse(localStorage.getItem("logements"));
		let logementsDisponibles = getLogementsDisponibles(storageContent,startTime,endTime);
		
		// chercher les logements qui sont disponibles
		afficherLogements(logementsDisponibles,isSearched);
	}
});

if (document.title === 'Focus') {
	let id = getUrl();
	let objectDate = JSON.parse(localStorage.getItem("date"));
	startTime=objectDate.start;
	endTime = objectDate.end;
	afficherLogementFocus(logements, id,startTime,endTime);
	document.addEventListener("click",(event)=>{
		if(event.target.getAttribute("id")==="btn-louer"){
			if(JSON.stringify(startTime)===JSON.stringify([0,0,0])){
				console.log("tu n'as pas encore choisit");
				alert("choisir une date de départ");
				return;
			}
			if(JSON.stringify(endTime) == JSON.stringify([32,13,3000])){
				alert("Choisir une date d'arrivée");
				return;
			}
			let localStorageLogements = JSON.parse(localStorage.getItem("logements"));
			for(let i=0;i<localStorageLogements.length;i++){
				if(localStorageLogements[i].id===id){
					localStorageLogements[i].reservation.push({arrivee:[{date:startTime[0],month:startTime[1],year:startTime[2]}],depart:[{date:endTime[0],month:endTime[1],year:endTime[2]}]})
					startTime = [0, 0, 0]; 
					endTime = [32, 13, 3000];
					window.location.href="../index.html";
				}
			}
			localStorage.setItem("logements",JSON.stringify(localStorageLogements));
		}
	});
}

document.addEventListener("click",(event)=>{
	if(event.target.getAttribute("class")==="close-calendar btn-red"){
		document.querySelector(".modal").classList.add("hidden");
	}
});