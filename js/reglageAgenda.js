import comparaisonDate from './comparaisonDate';

//importer comparaisonDate()
const reglageAgenda = (
	event,
	arriveeTime,
	classDepart,
	classArrivee,
	departTime,
	date,
	month,
	year
) => {
	departTime = [date, month, year];

	//Un seul choix de départ
	let isDepartBeforeArrivee = false;
	isDepartBeforeArrivee = comparaisonDate(departTime, arriveeTime);
	if (isDepartBeforeArrivee) {
		document.querySelectorAll('td').forEach((td) => {
			td.classList.remove(classDepart);
		});
		event.target.classList.add(classDepart);
	}

	//Affiche rechercher en vert si l'utilisateur a finit de choisir
	let tds = document.getElementsByTagName('td');
	if (
		Array.from(tds).some((td) => td.classList.contains(classArrivee)) &&
		Array.from(tds).some((td) => td.classList.contains(classDepart))
	) {
		document.querySelector('.search').style.backgroundColor = 'green';
	} else {
		document.querySelector('.search').style.backgroundColor = 'rgb(9, 1, 109)';
	}
	return departTime;
};

export default reglageAgenda;
