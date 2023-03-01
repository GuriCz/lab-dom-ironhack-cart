// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //Use product.querry for everything, so that it selects the children of the product thats being passed in
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  //use parse float to convert to a number
  let actualPrice = parseFloat(price.innerText);
  let updateSubtotal = actualPrice * quantity;
  subtotal.innerText = `${updateSubtotal}`;
  return updateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Selecting ALL subtotal and span elements
  const multipleProducts = document.querySelectorAll('.subtotal span');
  let finalTotal = 0;
  //CL shows us a node list of the two spans
  // console.log(multipleProducts);

  //for loop through this node list
  for (let i = 0; i < multipleProducts.length; i++) {
    const totals = multipleProducts[i];
    console.log(totals);

    //Calling parent node twice to get corresponding product element
    //then we call the function with that product element
    const product = totals.parentNode.parentNode;
    console.log(product)
    updateSubtotal(product)
    // return product
    finalTotal += parseFloat(totals.innerText);
    console.log(finalTotal)
    const totalElement = document.querySelector('#total-value span')
    totalElement.innerText = `${finalTotal}`;
  }
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
