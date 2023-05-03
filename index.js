let keyboardString = [
    [
        ['`', '`'],
        ["!", '1'],
        ["@", '2'],
        ['#', '3'],
        ["$", '4'],
        ["%", '5'],
        [':', '6'],
        ["?", '7'],
        ['*', '8'],
        ['(', '9'],
        [')', '0'],
        ['_', '-'],
        ['+', "="],
        ["", "Backspace"]
    ],
    [
        ['', 'Tab'],
        ['', 'Q'],
        ['', 'W'],
        ['', 'E'],
        ['', 'R'],
        ['', 'T'],
        ['', 'Y'],
        ['', 'U'],
        ['', 'I'],
        ['', 'O'],
        ['', 'P'],
        ['', '['],
        ['', "]"],
        ['/', '&#92;'],
        ['', 'DEL']
    ],
    [
        ['', 'Caps Lock'],
        ['', 'A'],
        ['', 'S'],
        ['', 'D'],
        ['', 'F'],
        ['', 'G'],
        ['', 'H'],
        ['', 'J'],
        ['', 'K'],
        ['', 'L'],
        ['', ';'],
        ['', "'"],
        ['', "Enter"]
    ],
    [
        ['', 'Shift'],
        ['', "&#92;"],
        ['', 'Z'],
        ['', 'X'],
        ['', 'C'],
        ['', 'V'],
        ['', 'B'],
        ['', 'N'],
        ['', 'M'],
        ['', '.'],
        ['', ','],
        ['', '/'],
        ['', "&#129045;"],
        ['', "SHIFT"]
    ],
    [
        ['', 'Ctrl'],
        ['', "Win"],
        ['', 'Alt'],
        ['', ' '],
        [' ', 'Alt'],
        [' ', 'Ctrl'],
        ['', '&#129044;'],
        ['', '&#129047;'],
        ['', '&#129046;']
    ]
]


function createContainer() {
    let container = document.createElement("div")
    container.classList.add("container")
    container.insertAdjacentHTML('afterbegin', `
        <textarea class="textarea" name="" id="" ></textarea>
        <div class="keyboard"></div>
    `)
    document.body.prepend(container)
}
function createKeys() {
    let keyboard = document.querySelector(".keyboard")
    let out = ''
    keyboardString.forEach(item => {
        let line = document.createElement("div")
        line.classList.add("line")
        for (let i = 0; i < item.length; i++) {
            out += `<div class="key">
                    <div class="small">${item[i][0]}</div>
                    <div class="main">${item[i][1]}</div>
                </div>`
        }
        line.innerHTML = out
        out = ""
        keyboard.append(line)
        keyboard.querySelectorAll(".key").forEach(item => {
            if (item.querySelector(".main").textContent == "Backspace") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == "Tab") {
                item.classList.add("spacial_btn")
                item.classList.add("tab")
            }
          
            if (item.querySelector(".main").textContent == "Shift") {
                item.classList.add("spacial_btn")
                item.classList.add("shift_left")
            }
            if (item.querySelector(".main").textContent == "SHIFT") {
                item.style.paddingLeft = 0
                item.style.paddingRight = 0
                item.classList.add("shift_right")
            }
            if (item.querySelector(".main").textContent == "DEL") {
                item.classList.add("spacial_btn")
                item.classList.add("del")
            }
            if (item.querySelector(".main").textContent == "Caps Lock") {
                item.classList.add("spacial_btn")
                item.classList.add("caps_lock")
            }
            if (item.querySelector(".main").textContent == "Enter") {
                item.classList.add("spacial_btn")
                item.classList.add("enter")
            }
            if (item.querySelector(".main").textContent == " ") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == ("&#129044;" || "&#129045;" || "&#129046;" || "&#129047;")) {
                item.classList.add("spacial_btn")
            }
    
            
        })
    })
}

createContainer()
createKeys()
