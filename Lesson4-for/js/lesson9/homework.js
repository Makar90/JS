console.log('JS Pattern commited lesson9');


let inp = document.querySelector('.inp1_1');
let out = document.querySelector('.out1_1');
let btn1 = document.querySelector('.btn1_1');

let sortOption = "notBuyedFirst";


let shopBin = [
    {
        productName: 'FuelBank',
        quantite: 1,
        piecePrice: 1000,
        totalPrice: function () {
            return this.quantite * this.piecePrice
        },
        buyed: true,
    },
    {
        productName: 'PowerBank',
        quantite: 2,
        piecePrice: 100,
        totalPrice: function () {
            return this.quantite * this.piecePrice
        },
        buyed: false,
    },
    {
        productName: 'iPhone',
        quantite: 4,
        piecePrice: 1000,
        totalPrice: function () {
            return this.quantite * this.piecePrice
        },
        buyed: true,
    },
    {
        productName: 'Mac',
        quantite: 3,
        piecePrice: 2000,
        totalPrice: function () {
            return this.quantite * this.piecePrice
        },
        buyed: false,
    },
    {
        productName: 'Mac M1',
        quantite: 7,
        piecePrice: 1500,
        totalPrice: function () {
            return this.quantite * this.piecePrice
        },
        buyed: false,
    },
]

function showShopBin(outShopBin, sort = sortOption) {
    //sortOption = sort;

    //render header for shop bin
    outShopBin.innerHTML = `
                            <p class="pHeaderTable">Назва продукту</p>
                            <p class="pHeaderTable">Кількість</p>
                            <p class="pHeaderTable">Ціна за одиницю</p>
                            <p class="pHeaderTable">
                                Сума
                                [
                                    <span class="sortBySumUp likeButton">up</span>
                                /
                                <span class="sortBySumDown likeButton">down</span>
                                ]
                            </p>
                            <p class="pHeaderTable">Куплений чи ні?</p>
                            <p class="pHeaderTable">Buy</p>
                            <p class="pHeaderTable">Del</p>
                            <p class="pHeaderTable">Add Quantity</p>
                            <p class="pHeaderTable">Del Quantity</p>
                            `;

    function getMarkupBinItem(array, arrayitemIndex) {
        let nameLinnTag = `<p class="productName likeButton">${array.productName}</p>`;
        let marckup1 = `<p>${array.quantite}</p>
                        <p>${array.piecePrice}</p>
                        <p>${array.totalPrice()}</p>
                        <p>${array.buyed}</p>
                        `;
        let buyButtonTag = `<button class="buy" id="${arrayitemIndex}">Buy</button>`;
        let marckup2 = `<button class="delete" id="${arrayitemIndex}">Delete</button>
                        <button class="addQuantity" id="${arrayitemIndex}">+</button>
                        <button class="delQuantity" id="${arrayitemIndex}">-</button>
                        `;
        if (array.buyed == false) {
            return nameLinnTag + marckup1 + buyButtonTag + marckup2;
        } else {
            return `<p>${array.productName}</p>` + marckup1 + `<p></p>` + marckup2;
        }
    }

    switch (sort) {
        case "notBuyedFirst": {
            //render products to the shop bin only not buyed
            shopBin.map((item, index) => {
                if (item.buyed == false) {
                    outShopBin.innerHTML += getMarkupBinItem(item, index);
                }

            });
            //render products to the shop bin only buyed
            shopBin.map((item, index) => {
                if (item.buyed == true) {
                    outShopBin.innerHTML += getMarkupBinItem(item, index);
                }
            });
            break;
        }
        case "expensiveFirst": {
            let bufArr = [];
            for (let i = 0; i < shopBin.length - 1; i++) {
                for (let j = i + 1; j < shopBin.length; j++) {
                    if (shopBin[i].totalPrice() < shopBin[j].totalPrice()) {
                        bufArr = shopBin[j];
                        shopBin[j] = shopBin[i];
                        shopBin[i] = bufArr;
                    }
                }
            }
            shopBin.map((item, index) => {
                outShopBin.innerHTML += getMarkupBinItem(item, index);
            })
            break;
        }
        case "cheapFirst": {
            let bufArr = [];
            for (let i = 0; i < shopBin.length - 1; i++) {
                for (let j = i + 1; j < shopBin.length; j++) {
                    if (shopBin[i].totalPrice() > shopBin[j].totalPrice()) {
                        bufArr = shopBin[j];
                        shopBin[j] = shopBin[i];
                        shopBin[i] = bufArr;
                    }
                }
            }
            shopBin.map((item, index) => {
                outShopBin.innerHTML += getMarkupBinItem(item, index);
            })
            break;
        }
        default: break;
    }

    //render footer for shop bin "Сумма всіх"
    outShopBin.innerHTML += `
                            <p class="pHeaderTable" style="text-transform: uppercase;">Сумма всіх:</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable">${shopBinSumProduct()}</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            `;

    //render footer for shop bin "Сумма придбаних"
    outShopBin.innerHTML += `
                            <p class="pHeaderTable" style="text-transform: uppercase;">Сумма придбаних:</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable">${shopBinSumProductOnlyBuyed()}</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            `;

    //render footer for shop bin "Сумма непридбаних"
    outShopBin.innerHTML += `
                            <p class="pHeaderTable" style="text-transform: uppercase;">Сумма непридбаних:</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable">${shopBinSumProductOnlyNotBuyed()}</p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            <p class="pHeaderTable"></p>
                            `;

    // recall with sort by sum expensiveFirst                    
    let sortBySumUp = outShopBin.querySelector('.sortBySumUp');
    sortBySumUp.onclick = () => {
        showShopBin(outShopBin, "expensiveFirst");
    }

    // recall with sort by sum cheapFirst                     
    let sortBySumDown = outShopBin.querySelector('.sortBySumDown');
    sortBySumDown.onclick = () => {
        showShopBin(outShopBin, "cheapFirst");
    }

    // buy product in a shop bin by click on a name
    productName = outShopBin.querySelectorAll('.productName');
    productName.forEach(
        element => {
            element.onclick = function () {
                if (confirm('Придбати?')) {
                    buyShopBinItemByName(element.textContent);
                    showShopBin(outShopBin);
                    return;
                };
            }
        });

    // buy product from shop bin  by click on a button
    let btnBuy = outShopBin.querySelectorAll('.buy');
    btnBuy.forEach(
        element => {
            element.onclick = function () {
                buyShopBinItemByName(shopBin[element.id].productName);
                showShopBin(outShopBin);
                return;
            }
        });

    // delete product from shop bin by click on a button (rewrite within new array)
    let btnDel = outShopBin.querySelectorAll('.delete');
    btnDel.forEach(
        btnElement => {
            btnElement.onclick = function () {
                let arrBuf = [];
                shopBin.forEach((ShopBinElement, ShopBinIndex) => {
                    if (ShopBinIndex != btnElement.id) {
                        arrBuf.push(ShopBinElement);
                    }
                })
                //shopBin = shopBin.splice(btnElement.id, 1);
                shopBin = arrBuf;
                showShopBin(outShopBin);
            }
        }
    );

    // add quantity product in shop bin by click on a button
    let btnAddQuantity = outShopBin.querySelectorAll('.addQuantity');
    btnAddQuantity.forEach(btnElement => {
        btnElement.onclick = function () {
            shopBin[btnElement.id].quantite++;
            shopBin[btnElement.id].buyed = false;
            showShopBin(outShopBin);
        }
    });

    // del quantity product in shop bin by click on a button
    let delQuantity = document.querySelectorAll('.delQuantity');
    delQuantity.forEach(btnElement => {
        btnElement.onclick = function () {
            if (shopBin[btnElement.id].quantite - 1 >= 0) {
                shopBin[btnElement.id].quantite--;
                shopBin[btnElement.id].buyed = false;
            } else {
                alert('Error! Product quantity - "0"')
            }
            showShopBin(outShopBin);
        }
    });

};

// check broduct as buy by the name
function buyShopBinItemByName(productName) {
    shopBin.forEach(
        element => {
            if (element.productName == productName) {
                element.buyed = true;
            }
        }
    )
};

function shopBinSumProduct() {
    let sum = 0;
    shopBin.forEach(
        element => {
            sum += element.totalPrice();
        })
    return sum;
};

function shopBinSumProductOnlyBuyed() {
    let sum = 0;
    shopBin.forEach(
        element => {
            if (element.buyed == true) {
                sum += element.totalPrice();
            }
        })
    return sum;
};

function shopBinSumProductOnlyNotBuyed() {
    let sum = 0;
    shopBin.forEach(
        element => {
            if (element.buyed != true) {
                sum += element.totalPrice();
            }
        })
    return sum;
};

let btnShowShopBin = document.querySelector('.btnShowShopBin');
btnShowShopBin.onclick = () => {
    let outShopBin = document.querySelector('.outShopBin');
    sortOption = "notBuyedFirst"
    showShopBin(outShopBin);
};







