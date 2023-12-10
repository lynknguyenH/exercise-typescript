class Publication{
    private title: string;
    private author: string;
    private publishedYear: string;
    private pulisher: string;
    private priceOfTag: number;

    constructor (title: string, author: string, publishedYear: string, pulisher: string, priceOfTag: number){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.pulisher = pulisher;
        this.priceOfTag = priceOfTag;
    }
    printInformation() {
        console.log("title: " + this.title, "\n",
                    "author" + this.author, "\n",
                    "publishedYear" + this.publishedYear, "\n",
                    "publisher" + this.pulisher, "\n",
                    "priceOfTag" + this.priceOfTag, "\n",)
    }

}

class Book extends Publication{
    private genre: string;

    constructor (title: string, author: string, publishedYear: string, pulisher: string, priceOfTag: number,genre: string){
        super(title, author, publishedYear, pulisher, priceOfTag);
        this.genre = genre;
    }

    printInformation(): void {
        super.printInformation();
        console.log("genre: " + this.genre);
    }
} 

class Library{
    private books: Book;

    constructor (books: Book){
        this.books = books;
    }

    getPublication(){
        return this.books;
    }

    printPulicationList(){
        console.log(this.getPublication());
    }
}

let publication = new Publication("Immune","Philipp Dettmer","2021","Random House",18.29);
let books = new Book("Immune","Philipp Dettmer","2021","Random House",18.29, "Diseases & Physical Ailments");
let library = new Library(books);
library.printPulicationList();