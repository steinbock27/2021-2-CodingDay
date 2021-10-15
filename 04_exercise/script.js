var books = [
    {title: 'title2', author:'author1', stock:'in stock', price:'1 CHF'},
    {title: 'title1', author:'author2', stock:'sold out', price:'2 CHF'},
    {title: 'title0', author:'author3', stock:'in stock', price:'3 CHF' }
];

books.sort((a, b) => a.title.localeCompare(b.title))

var html = books.map(function (element) {
    return '<li>' + element.title + ', '
                  + element.author + ', '
                  + element.stock + ', '
                  + element.price + ', ' + '</li>';  
  }).join('');


document.getElementById("getIt").innerHTML = html;

function addBook(){
    const todo = new Object();
                todo.title=prompt(`Title of book:`);
                todo.author=prompt(`Author:`);
                todo.stock=prompt('in stock or sold out?');
                todo.price=prompt('price? in CHF')
    books.push(todo);
    books.sort((a, b) => a.title.localeCompare(b.title))
    
                   var html = books.map(function (element) {
                    return '<li>' + element.title + ', '
                                  + element.author + ', '
                                  + element.stock + ', '
                                  + element.price + ', ' + '</li>';  
                  }).join('');
                
                document.getElementById("getIt").innerHTML = html;
}