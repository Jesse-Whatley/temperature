function getGPA (){
    //body of the function
    let name = prompt("Enter your name:");
    let grade101 =Number (prompt("Enter the first grade:"));
    let grade102 = Number (prompt("Enter the second grade:"));
    let gpa = (grade101 + grade102) / 2;
    
    document.getElementById("grades").innerHTML += 
    `<div>
        <p>${name}</p>
        <p>${gpa}</p>
    </div>`;
}

let total=0;
function productInfo() {
    let total=0;
    let productName = prompt("Enter product name:");
    let price = Number (prompt("Enter the price:"));
    let quantity = Number (prompt("Enter the quantity:"));
    let subtotal= price*quantity;

    total= total+subtotal;

    document.getElementById("productList").innerHTML += `<li>${productName} - $${subtotal.toFixed(2)}</li>`;

    document.getElementById("total").innerHTML = total.toFixed(2);
}



