// There's a 3 for 2 offer on mangoes. For a given price and quantity,
// calculate the total cost of the mangoes.

// My Answer

function mango(quantity, price){
  if (quantity <= 2) return quantity * price;
  else if (quantity % 3 === 0) {
    return (quantity * price) / 1.5
    }
  else {
    return (quantity - Math.floor(quantity / 3)) * price;
    }
}

// Best Answer

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}
