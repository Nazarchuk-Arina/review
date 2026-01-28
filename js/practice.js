let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     } 
// }
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его", "");
    
//     if (a != null && b != null && a != ''&& b != '' && a.length >50 && b.length >50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//     }
//     }
// }

// rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();
// function showMyDB() {
//     if (personalMovieDB[privat] == false) {
//         console.log(personalMovieDB);
//     } else return;
// }

// function writeYourGenres() {
//     for (let index = 1; index <= 3; index++) {
//         const answer = prompt(`Ваш любимый жанр под номером ${index}`, "");
//         personalMovieDB.genres.push(answer);
//     }
//     return personalMovieDB;
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } 
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его", "");
        
        if (a != null && b != null && a != ''&& b != '' && a.length >50 && b.length >50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
        }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (personalMovieDB[privat] == false) {
            console.log(personalMovieDB);
        } else return;
    },
    writeYourGenres: function () {
        for (let index = 1; index <= 3; index++) {
            let genre = prompt(`Ваш любимый жанр под номером ${index}`, "");

            if (genre === "" || genre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres.push(genre); 
            }
            personalMovieDB.genres.forEach((item, i) => {console.log(`Любимый жанр ${i + 1} - это ${item}`);})
        }
        return personalMovieDB;
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};