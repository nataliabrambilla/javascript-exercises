const colors = ['Red', 'black', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randonColor = getRandorColor()
    document.body.style.background = colors[randonColor]
    color.textContent = colors[randonColor]
})

function getRandorColor() {
    return Math.floor(Math.random() * colors.length)
}