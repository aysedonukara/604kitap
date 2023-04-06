let bookList=[];

const toggleModal=()=>{/*sepet ekranının gelip gitmesi için düzenleme*/
    const basketModalEl=document.querySelector(".basket_modal");
    basketModalEl.classList.toggle("active");/*sepeti kapatıp açmak için yaptık*/
};

/*kitap çağırma*/
const getBooks=()=>{/*kitapları jsondan çağıracağız burada*/
    fetch("./products.json")
    .then(res=>res.json())
    .then((books)=>(bookList=books));
};

getBooks();

const createBookItemsHtml=()=>{
    const bookListEl=document.querySelector(".book_list");
    let bookListHtml="";
    bookList.forEach(book=>{
        bookListHtml+=``;

    });

    bookListEl.innerHTML=bookListHtml;
};