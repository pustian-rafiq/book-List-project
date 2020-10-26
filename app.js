

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const add_book = document.querySelector('#add-book');
const book_list = document.querySelector('#book-list');

add_book.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please add the field");
    }else{
        //create new row
        const newRow = document.createElement('tr');

        //create new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //create new author
          const newAuthor = document.createElement('th');
          newAuthor.innerHTML = author.value;
          newRow.appendChild(newAuthor);

          
        //create new year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        book_list.appendChild(newRow);
        //remove the value after submitting the value
        title.value="";
        author.value="";
        year.value="";
    }

});