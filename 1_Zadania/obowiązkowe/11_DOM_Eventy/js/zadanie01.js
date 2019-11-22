document.addEventListener("DOMContentLoaded", function () {
	var menu = document.querySelector("#menu");
	var paragraf = document.querySelector("p");

	menu.classList.add("menu");
	paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});
/*

1. Po przeniesieniu tagu script do head nie została dodana klasa menu do tagu z id menu. Również treść paragrafu nie została zmieniona.
Dzieje się tak gdyż skrypt został wykonany zanim treść strony została załadowana.

2. Dodanie eventu DOMContentLoaded poprawiło sytuację. Kod wewnątrz eventu zostaje wykonany zaraz po załadowaniu treści strony.

3. Nie ma żadnej różnicy czy plik ładujemy w sekcji head, czy na końcu strony, po dodaniu eventu DOMContentLoaded. Jedyna różnica jest taka, że przeglądarka nie będzie czekać na pobranie pliku js w sytuacji kiedy byłby on bardziej rozbudowany. Zalecane jest umieszczanie plików js na końcu strony.

*/