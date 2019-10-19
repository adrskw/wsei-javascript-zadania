// Zadanie 0
// stworzenie funkcji "jeden"
function jeden() {

    // przypisanie do zmiennej "zmienna1" wartości 1
    var zmienna1 = 1;

    // stworzenie funkcji "dwa"
    function dwa() {

        // wyświetlenie wartości zmiennej "zmienna1"
        console.log(zmienna1);

        // przypisanie do zmiennej "zmienna2" wartości 3, zmienna jest widoczna tylko dla funkcji dwa
        var zmienna2 = 3;
    }

    // wywołanie funkcji "dwa"
    dwa();

    // wyświetlenie wartości zmiennej "zmienna2", zmienna nie jest widoczna
    //console.log(zmienna2);
}
// "zmienna2" nie jest widoczna w funkcji "jeden", ponieważ jest to zmienna lokalna widoczna tylko dla funkcji "dwa", która jest wewnątrz funkcji "jeden"
// wywołanie funkcji "jeden"
jeden();

// Zadanie 1
// stworzenie funkcji "sortArray"
function sortArray() {

    // stworzenie tablicy "points" z liczbami całkowitymi
    var points = [41, 3, 6, 1, 114, 54, 64];

    // sortowanie tablicy "points" za pomocą funkcji "sort"
    points.sort(function (a, b) {
        // sortowanie tablicy rosnąco poprzez badanie różnicy dwóch sąsiadujących elementów tablicy
        return a - b;
    });

    // zwracanie tablicy do funkcji
    return points;
}

// wywołanie funkcji "sortArray"
sortArray();