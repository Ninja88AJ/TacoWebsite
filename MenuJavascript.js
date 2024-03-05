/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var $ = function (id) {
    return document.getElementById(id);
};

var orderTotal = 0.00;
var orderTable = $("customerOrder");
var activatedDescription = {
    itemName: "",
    isShown: false
};

//Onload function
window.onload = function() {
    $("PretzelTD").onclick = fnPretzelTD;
    $("DessertBD").onclick = fnDessertBD;
    $("BeefTD").onclick = fnBeefTD;
    $("HotTD").onclick = fnHotTD;
    $("SupremeTD").onclick = fnSupremeTD;
    $("BeefBD").onclick = fnBeefBD;
    $("BreakfastBD").onclick = fnBreakfastBD;
    $("SupremeBD").onclick = fnSupremeBD;
    $("PretzelTAdd").onclick = fnPretzelTAdd;
    $("DessertBAdd").onclick = fnDessertBAdd;
    $("BeefTAdd").onclick = fnBeefTAdd;
    $("HotTAdd").onclick = fnHotTAdd;
    $("SupremeTAdd").onclick = fnSupremeTAdd;
    $("BeefBAdd").onclick = fnBeefBAdd;
    $("BreakfastBAdd").onclick = fnBreakfastBAdd;
    $("SupremeBAdd").onclick = fnSupremeBAdd;
    resetActivatedDescription();
};


//Menu Item Details Functions
 
function fnRemoveItem(row) {
    let rowToDelete = row.parentNode;
    rowToDelete.deleteRow(row.rowIndex);
    fnUpdateTotal();
}
function fnUpdateTotal() {
    let currentTotal = 0;
    let table = $("customerOrder");
    for (var i = 1; i < table.rows.length; i++) {
        var costCell = table.rows[i].cells[1].innerHTML;
        var numericPiece = costCell.substring(1);
        
        var cellPrice = parseFloat(numericPiece);
        currentTotal += cellPrice;
    }
    if (i > 1) {
        $("customerTotal").innerHTML = "Total: $" + currentTotal.toFixed(2) + " + Tax(12%) = <u>$" + (currentTotal + (currentTotal * .12)).toFixed(2) + "</u>";
    } else {
        $("customerTotal").innerHTML = "*please add an item in order to calculate the total*";
    }
}

function fnPretzelTD() {
    toggleDescription("PretzelT", {
        row1: "<b>Pretzel Taco ($6.99):</b> Our prezel taco is as simple as it \n\
              sounds. We made a pretzel shell and put filled it the same \n\
              as the supreme taco (Beef, Cheese, Lettuce, Salsa, Sour Cream).",
        row2: "",
        row3: ""
    });
};
function fnPretzelTAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Pretzel Taco";
    price.innerHTML = "$6.99";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnDessertBD() {
    toggleDescription("DessertB", {
        row1: "<b>Dessert Burrito ($8.99):</b> The dessert burrito is filled with \n\
              your choice of ice cream (Chocolate, Vanilla, or Strawberry). It's \n\
              shell is basically what happens when you combine a crepe and tortilla. \n\
              Alongside the ice cream is rainbow sprinkles and chocolate chips. \n\
              Finally, the shell is drizzled in chocolate syrup made in-house.",
        row2: "",
        row3: ""
    });
};
function fnDessertBAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Dessert Burrito";
    price.innerHTML = "$8.99";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnBeefTD() {
    toggleDescription("BeefT", {
        row1: "",
        row2: "<b>Beef Taco ($4.99):</b> A hard shell taco containing beef, cheese, \n\
              and lettuce.",
        row3: ""
    });
};
function fnBeefTAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Beef Taco";
    price.innerHTML = "$4.99";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnHotTD() {
    toggleDescription("HotT", {
        row1: "",
        row2: "<b>Ultra Spicy Taco ($5.49):</b> This one is not for the faint of heart. \n\
                It includes all the same ingredients as the beef taco, but is \n\
                topped with an extremely spicy hot sauce. Be careful, as it is \n\
                much hotter than the hot sauces provided free with each order.",
        row3: ""
    });
};
function fnHotTAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Spicy Taco";
    price.innerHTML = "$5.49";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnSupremeTD() {
    toggleDescription("SupremeT", {
        row1: "",
        row2: "<b>Supreme Taco ($5.99):</b> The supreme taco is essentially the beef taco \n\
                with extra toppings. The additional ingredients are sour cream \n\
                and salsa (as well as lettuce, cheese, and beef).",
        row3: ""
    });
};
function fnSupremeTAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Supreme Taco";
    price.innerHTML = "$5.99";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnBeefBD() {
    toggleDescription("BeefB", {
        row1: "",
        row2: "",
        row3: "<b>Beef Burrito ($7.49):</b> Our beef burrito comes with beef, \n\
                salsa, lettuce, cheese, and black beans."
    });
};
function fnBeefBAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Beef Burrito";
    price.innerHTML = "$7.49";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnBreakfastBD() {
    toggleDescription("BreakfastB", {
        row1: "",
        row2: "",
        row3: "<b>Breakfast Burrito ($8.99):</b> Served at any time of day, our breakfast \n\
                burrito is one of our most popular items. It's filled with \n\
                cheesy scrambled eggs, hash browns, sausage, and bacon."
    });
};
function fnBreakfastBAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Breakfast Burrito";
    price.innerHTML = "$8.99";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function fnSupremeBD() {
    toggleDescription("SupremeB", {
        row1: "",
        row2: "",
        row3: "<b>Supreme Burrito ($9.49):</b> Similar to the supreme taco, it's just \n\
                a beef burrito with a few extras. These extras are a cheese \n\
                sauce, sour cream, and rice (as well as beef, lettuce, black beans, \n\
                and shredded cheese)."
    });
};
function fnSupremeBAdd() {
    let table = $("customerOrder");
    let newRow = table.insertRow(-1);
    let item = newRow.insertCell(0);
    let price = newRow.insertCell(1);
    let removeButton = newRow.insertCell(2);
    item.innerHTML = "Supreme Burrito";
    price.innerHTML = "$9.49";
    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function() {
        fnRemoveItem(newRow);
    };

    removeButton.appendChild(button);
    fnUpdateTotal();
}

function resetActivatedDescription() {
    activatedDescription.itemName = "";
    activatedDescription.isShown = false;
}

function toggleDescription(itemName, details) {
    var row1Details = $("Row1");
    var row2Details = $("Row2");
    var row3Details = $("Row3");
    
    if (activatedDescription.itemName === itemName && activatedDescription.isShown) {
        row1Details.innerHTML = "";
        row2Details.innerHTML = "";
        row3Details.innerHTML = "";
        row1Details.style.display = "none";
        row2Details.style.display = "none";
        row3Details.style.display = "none";
        activatedDescription.isShown = false;
    } else {
        row1Details.innerHTML = details.row1;
        row2Details.innerHTML = details.row2;
        row3Details.innerHTML = details.row3;
        activatedDescription.itemName = itemName;
        activatedDescription.isShown = true;
        
        toggleDescriptionStyles(row1Details);
        toggleDescriptionStyles(row2Details);
        toggleDescriptionStyles(row3Details);
    }
}

function toggleDescriptionStyles(rowDescription) {
    if (rowDescription.innerHTML !== "") {
        rowDescription.style.color = "rgb(59, 37, 11)";
        rowDescription.style.width = "65%";
        rowDescription.style.margin = "0 auto";
        rowDescription.style.padding = "20px";
        rowDescription.style.backgroundColor = "rgb(255, 222, 184)";
        rowDescription.style.border = "3px ridge rgb(59, 37, 11)";
        rowDescription.style.marginBottom = "50px";
        rowDescription.style.display = "block";
    } else {
        rowDescription.style.display = "none";
    }
}