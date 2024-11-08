window.onload = () => {

	const base = ' מספר הימים שענבר סירבה לבוא איתי לנאפיס ברצף:';
	
	const baseDate = new Date("11/02/2024");

	const goodDates = [
		new Date('11/06/2024')
	];

	const diffTime = Math.abs(Date.now() - goodDates[goodDates.length - 1]);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1); 
	
	const fullMessage = `${base} ${diffDays}`;
	
	const p = document.getElementById("message");
	p.textContent = fullMessage;
	const array = getDaysArray(baseDate, Date.now());
	
	const datesDiv = document.getElementById('dates');
	
	for(let i = 0; i < array.length; i++) {
		const dateDiv = document.createElement("div");
		
		const sign = (goodDates.findIndex(date => date.toDateString() == array[i].toDateString()) == -1) ?
			"❌" : "✔";
		const content = array[i].toLocaleDateString('heb-IL') + `: ${sign}`;
		dateDiv.textContent = content
		datesDiv.appendChild(dateDiv);
	}
};

const getDaysArray = function(start, end) {
    const arr = [];
    for(const dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};