"use strict";
class Publication {
    constructor(title, author, publishedYear, pulisher, priceOfTag) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.pulisher = pulisher;
        this.priceOfTag = priceOfTag;
    }
    printInformation() {
        console.log("title: " + this.title, "\n", "author" + this.author, "\n", "publishedYear" + this.publishedYear, "\n", "publisher" + this.pulisher, "\n", "priceOfTag" + this.priceOfTag, "\n");
    }
}
class Book extends Publication {
    constructor(title, author, publishedYear, pulisher, priceOfTag, genre) {
        super(title, author, publishedYear, pulisher, priceOfTag);
        this.genre = genre;
    }
    printInformation() {
        super.printInformation();
        console.log("genre: " + this.genre);
    }
}
class Library {
    constructor(books) {
        this.books = books;
    }
    getPublication() {
        return this.books;
    }
    printPulicationList() {
        console.log(this.getPublication());
    }
}
let publication = new Publication("Immune", "Philipp Dettmer", "2021", "Random House", 18.29);
let books = new Book("Immune", "Philipp Dettmer", "2021", "Random House", 18.29, "Diseases & Physical Ailments");
let library = new Library(books);
library.printPulicationList();
//# sourceMappingURL=exercise5.js.map