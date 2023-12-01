const comparaisonDate = (depart, arrivee) => {
	if (
		arrivee[0] <= depart[0] &&
		arrivee[1] <= depart[1] &&
		arrivee[2] <= depart[2]
	) {
		console.log('choix impossible');
		return false;
	} else {
		return true;
	}
};
export default comparaisonDate;
