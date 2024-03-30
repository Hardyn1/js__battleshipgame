// результатом выпаолнения функия является случайное число от 0 до 1
// умножая на 5 получаем числа в диапазоне от 0 до 4 не включая 5
var randomLoc = Math.random() *5;
console.log(randomLoc);

// var location1 = 2,
// 		location2 = 3,
// 		location3 = 4, //coordinates
//     currentTry, // текущая попытка
//     hits = 0, // количество попаданий
//     amount = 0, // количество попыток
// 		isSunk = false; //потоплен или нет

// while(isSunk == false) {
// 	currentTry = prompt("Готовь орудие к бою ! Огонь");
// 	if(currentTry < 0 || currentTry > 6 ) {
// 		alert("Введени не корректное значение");
// 	} else {
// 		amount = amount + 1;
// 		if(
// 			currentTry == location1 ||
// 			currentTry == location2 ||
// 			currentTry == location3
// 		) {
// 			hits = hits + 1
// 			if(hits == 3) {
// 				isSunk = true;
// 				alert("Вы меткий стрелок потопили мой корабль !");
// 			}
// 		}
// 	}
// }

// var result = "Молодец потопили корабль за " + hits + " Выстрела ";
// alert(result);