//Classes is ES6

class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;  
    }
    getSummary(){
        return this.title +" was written by "+ this.author + " in " + this.year; 
    }
    
    getAge(){
        const years = (new Date().getFullYear() - this.year);
        return this.title +" is " + years +" years old";
    }
    revise(newYear){
        this.year = newYear;
        this.revised= true;
    }
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

const book1= new Book('Book one','John Doe', '2013');

// console.log(book1);
// book1.revise('2020');
// console.log(book1);

console.log(Book.topBookStore());

//Magazine subclass

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}
//Instantiate Magazine


const mag1 = new Magazine('Mag One','John Doe','2018','Feb');

console.log(mag1);