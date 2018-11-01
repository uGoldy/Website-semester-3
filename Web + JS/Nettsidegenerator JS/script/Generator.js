// Genereator for Website (Array's)

//Variables


//Arrays
let shopping = ['Iphone', 'Nokia', '' ]


//test
const Film = {
    init: function (title, price, year) {
        this.title = title;
        this.price = price;
        this.year = year;
    },
    
    describe: function () {
        let descripton = this.title + " " + this.price + "$" + " (" + this.year + ")";
        return descripton;
    }
};

const film1 = Object.create(Film);
film1.init("Jurassic Park", 99, 1993);

const film2 = Object.create(Film);
film2.init("Titanic", 99, 1997);

const film3 = Object.create(Film);
film3.init("Toy Story", 99, 1995);

let films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
              console.log(film.describe());
              });