const header1 = document.querySelector('h1')
const header3 = document.querySelector('h3')
const paragraph = document.querySelector('p')

console.log(header1)
console.log(header3)
console.log(paragraph)

const divs = document.querySelectorAll('div')

console.log(divs)

const newParagraph = document.getElementById('p2')

console.log(newParagraph.innerText)

newParagraph.innerText = 'Maybe Issa Paragraph ??'

console.log(newParagraph.innerText)

const image = document.querySelector('img') .src = 'https://i.ytimg.com/vi/vH8kYVahdrU/sddefault.jpg'

const newDiv = document.createElement('div.container')
newDiv.innerText = 'Issa New Div'
console.log(newDiv)

document.body.append(newDiv)