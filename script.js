
const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        src: 'images/product2.jpg',
        get Sum() {
            return this.price * this.amount
        },
        get SumKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        src: 'images/product1.jpg',
        get Sum() {
            return this.price * this.amount
        },
        get SumKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 600,
        amount: 0,
        src: 'images/product3.jpg',
        get Sum() {
            return this.price * this.amount
        },
        get SumKcall() {
            return this.kcall * this.amount
        }
    }
}

// closest() - ojecti metodi bolib uni otab turgan elementga ulanadi
// getAttribute() - elementi lyuboy atributini olishga ishlatiladi

const btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        prepare(this)
    })
}

function prepare(element) {
    let parent = element.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')

    let sym = element.getAttribute('data-symbol')
    let amount = product[parentId].amount

    if (sym == '+') {
        amount++
    } else if (sym = '-' && amount > 0) {
        amount--
    }

    num.innerHTML = amount
    product[parentId].amount = amount
    price.innerHTML = product[parentId].Sum
    kcall.innerHTML = product[parentId].SumKcall

}

function timerExtra() {
    let timer = document.querySelector('.header__timer-extra')
    let speet = 0

    timer.innerHTML < 100 ? timer.innerHTML++ : timer.innerHTML = 100
    speet = timer.innerHTML < 40 ? 25 : timer.innerHTML < 80 ? 40 : 70

    setTimeout(function () {
        timerExtra()
    }, speet)
}

timerExtra()

const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
const pay = document.querySelector('.receipt__window-btn')

// strelichni funksiya - asosiy farqi ozini ichki tarkibi bomidi !

// let string = () => 'hello' - agar 1ta qatorga yozse return qllish shartamsa
/* let string = () => {
    return  'hello'
} */

addCart.addEventListener('click', () => {
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '25%'
    }, 50)

    let menu = ''
    let totalPrice = 0
    let totalKcall = 0

    for (const key in product) {

        if (product[key].amount) {
            menu += `${product[key].name} ${product[key].amount}x`
            totalPrice += product[key].Sum
            totalKcall += product[key].SumKcall

        }

    }

    receiptWindowOut.innerHTML = `${menu}\n\n\nTotal prise: ${totalPrice}sum\nTotal kcall: ${totalKcall}`
})


let mainProductImg = document.querySelectorAll('.main__product-info')
let view = document.querySelector('.view')
let viewImg = document.querySelector('.view img')
let viewClose = document.querySelector('.view__close')

for (let i = 0; i < mainProductImg.length; i++) {
    mainProductImg[i].addEventListener('dblclick', function () {

        img(this)
        view.style.display = 'flex'

        viewClose.addEventListener('click', function () {
            view.style.display = 'none'
        })


    })
}

function img(images) {
    let parent = images.closest('.main__product')
    let parentId = parent.getAttribute('id')
    console.log(product[parentId].img);
    viewImg.style.margin = 'auto'
    viewImg.src = product[parentId].src
}