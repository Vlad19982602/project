//const obj = {
//    name: "John",
//    age: 25,
//    isMerries: false
//};

//console.log(obj.name);

//let array = ['p lum.png', 'orange.jpg', 'apple.bmp'];

//alert('Hello');

//const result = confirm("Are you here?"); //булевое значение

//const answer = prompt("Вам есть 18?", ""); //склеивание результата
//console.log(typeof(answer));

//const answer = +prompt("Вам есть 18?", ""); //объединение резулльтата
//console.log(typeof(answer + 5));

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Сколько вам лет?', '');
//answers[2] = prompt('Где вы работаете?', '');

//console.log(typeof(answers));

////////////////////////////////////////////////////////////

/////////////////Интерполяция

//const category = 'toys';

//console.log('https://someurl.com/' + category); //Concat

//console.log(`https://someurl.com/${category}`);
//const user = 'Vlad';
//alert(`Привет, ${user}`); //Кавычки с помощью тильды

//////////////////////////////////////////////////////////////

//console.log(4 + "5"); //45
//console.log(4 + +"5"); //9

//let inc = 10,
//    decr = 10;

//inc++;
//decr--;

//console.log(inc);
//console.log(decr);

//console.log(5%2);


//console.log(2*4 = 8); //Присваивание
//console.log(2*4 != 8); //Не равенство
//console.log(2*4 == 8); //Сравнивание
//console.log(2*4 === 8); //Строгое сравнивание

//const isChecked = true,
//    isClose = true;

//console.log(isChecked && isClose);
//console.log(isChecked || isClose);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const   a = prompt('Один из послежних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из послежних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);