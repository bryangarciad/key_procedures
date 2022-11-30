const contentList = [
  {
    section: 'Key Procedures',
    items: [
      {
        name: 'Design Verification and validation procedure - P40372',
        value: 'https://app.bom.com/items/detail-spec?item_id=1268290345&version_id=11975094278'
      },
      {
        name: 'Software Development - QSP045',
        value: ''
      },
      {
        name: 'Product Application Software Code Review Procedure - P41340',
        value: ''
      },
      {
        name: 'Software Coding Standards - DD002856',
        value: ''
      },
      

    ]
  },
  {
    section: 'Other References',
    items: [
      {
        name: 'Design Verification and validation procedure - P40372',
        value: 'https://app.bom.com/items/detail-spec?item_id=1268290345&version_id=11975094278'
      },
    ]
  },
]
  
async function start () {

  const req = await fetch('data.json')
  const data = await req.json()
  const wrapper = document.querySelector('.wrapper')
  /*const sections = data.map(section => section.section)
  const selector = document.querySelector('#sections')
  selector.innerHTML = sections.map(sectionString => `<option value=${sectionString.replace(/\s/g, '').toLowerCase()}>${sectionString}</option>`).join('')

const submitBtn = document.querySelector('#submit')
  submitBtn.addEventListener('click', () => {
    const sectionSelected = document.querySelector('#sections')?.value
    const name = document.querySelector('#name')?.value
    const value = document.querySelector('#value')?.value
    if (name && value) {
        const target = data.filter(section => section.section.replace(/\s/g, '').toLowerCase() === sectionSelected).pop()
        console.log(target)
        target.items.push({
        name: name,
        value: value
      })

      
    } else {
      alert('no empty fields wierdo')
    }
  })*/
  
  data.forEach(article => {
    const articleNode = document.createElement('article')
    articleNode.className = 'list'
    const headerNode = document.createElement('header')
    const mainNode = document.createElement('main')
    mainNode.className = 'list__items'
    
    headerNode.innerHTML = `<h1 class="list__title"><span class="leaderboard__title--top"></span><span class="leaderboard__title--bottom">${article.section}</span></h1>`

    const content = article.items.map(contentItem => {
      return `
       <article class="list__item">
        <span class="list__name">${contentItem.name}</span>
        <span class="list__value">
          <a href="${contentItem.value}">
            See Doc
          </a>
        </span>
      </article>
      `
    }).join('')

    mainNode.innerHTML = content
    articleNode.appendChild(headerNode)
    articleNode.appendChild(mainNode)
    wrapper.appendChild(articleNode)
  })
};

start();