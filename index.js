window.onload = () => {

	const base = ' מספר הימים שענבר סירבה לבוא איתי לנאפיס מאז ה2.11:';
	
	const baseDate = new Date("11/02/2024");
	const dateDiff = Date.now() - baseDate;
	const diffTime = Math.abs(Date.now() - baseDate);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	
	const fullMessage = `${base} ${diffDays}`;
	console.log(fullMessage);
	
	const p = document.getElementById("message");
	p.textContent = fullMessage;
	console.log(p);
};
