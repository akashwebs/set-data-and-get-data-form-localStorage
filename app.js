const getInputValue = idName => {

    return document.getElementById(idName).value;
}

document.getElementById('send-button').addEventListener('click', () => {

    const bookName = getInputValue('book-name-input');
    const priceInput = parseInt(getInputValue('input-price'));
    displayBookAndPrice(bookName, priceInput);

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