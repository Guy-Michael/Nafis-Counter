window.onload = () => {

	const base = ' מספר הימים שענבר סירבה לבוא איתי לנאפיס:';
	
	const baseDate = new Date("11/02/2024");
	const diffTime = Math.abs(Date.now() - baseDate);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	
	const fullMessage = `${base} ${diffDays}`;
	
	const p = document.getElementById("message");
	p.textContent = fullMessage;
	const array = getDaysArray(baseDate, Date.now());
	
	const datesDiv = document.getElementById('dates');
	
	for(let i = 0; i < array.length; i++) {
		console.log(array[i]);
		const dateDiv = document.createElement("div");
		const content =  new Date(array[i] - 1).toLocaleDateString('heb-IL') + ': ❌';
		dateDiv.textContent = content
		datesDiv.appendChild(dateDiv);
	}
};

const getDaysArray = function(start, end) {
    const arr = [];
    for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};