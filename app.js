const getInputValue = idName => {

    return document.getElementById(idName).value;
}


// get data form loaclStorage
const displayDataFormLoacl = () => {
    const response = JSON.parse(localStorage.getItem('bookStore'));
    response.forEach(e => {
        displayBookAndPrice(e.bookName, e.price);
    })
}

document.getElementById('send-button').addEventListener('click', () => {

    const bookName = getInputValue('book-name-input');
    const priceInput = parseInt(getInputValue('input-price'));
    displayBookAndPrice(bookName, priceInput);
    getItemFromLocalSt(bookName, priceInput);

    // get data with parse object from loaclsotre fn call

});
let count = 0;
const displayBookAndPrice = (bookName, price) => {
    const productList = document.getElementById('product-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${++count}</th>
        <td>${bookName}</td>
        <td>${price}</td>
        <td><button onclick='rmvProduct(event)' class="btn btn-danger">Remove</button></td>
    `
    productList.appendChild(tr);

}
const rmvProduct = event => {
    event.target.parentNode.parentNode.remove()
}

const getItemFromLocalSt = (name, price) => {

        let bookStore = JSON.parse(localStorage.getItem("bookStore") || "[]");
        bookStore.push({ bookName: name, price: price })
        const strinfyData = JSON.stringify(bookStore);
        localStorage.setItem('bookStore', strinfyData);
    }
    //   fetch data from loaclstorage
displayDataFormLoacl();