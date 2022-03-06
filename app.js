const getInputValue = idName => {

    return document.getElementById(idName).value;
}

document.getElementById('send-button').addEventListener('click', () => {

    const bookName = getInputValue('book-name-input');
    const priceInput = parseInt(getInputValue('input-price'));
    displayBookAndPrice(bookName, priceInput);

    // get data with parse object from loaclsotre fn call
    getItemFromLocalSt();

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
    setDataToLocalStorage(bookName, price);

}
const rmvProduct = event => {
    event.target.parentNode.parentNode.remove()
}

const getItemFromLocalSt = () => {
    const getDataFromLocal = localStorage.getItem('bookStore');
    let bookStore;
    if (!getDataFromLocal) {
        bookStore = {};
    } else {
        bookStore = JSON.parse(getDataFromLocal);
    }
    return bookStore;

}

const setDataToLocalStorage = (name, price) => {
    const getObjectFromLocal = getItemFromLocalSt();
    getObjectFromLocal[name] = price;
    const strinfyData = JSON.stringify(getObjectFromLocal);
    localStorage.setItem('bookStore', strinfyData);

}