var books = [
    {title: 'title1', author:'author1', stock:'in stock', price:'1 CHF'},
    {title: 'title2', author:'author2', stock:'sold out', price:'2 CHF'},
    {title: 'title3', author:'author3', stock:'in stock', price:'3 CHF' }
];

var html = books.map(function (element) {
    return '<li>' + element.title + ', '
                  + element.author + ', '
                  + element.stock + ', '
                  + element.price + ', ' + '</li>';  
  }).join('');

document.getElementById("getIt").innerHTML = html;

function addBook(titleN,authorN,stockN,priceN){
    const todo = new Object();
                todo.title=titleN;
                todo.author=authorN;
                todo.stock=stockN;
                todo.price=priceN;
    books.push(todo);
}