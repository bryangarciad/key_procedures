const contentList = [
  {
    section: 'Key Procedures',
    items: [
      {
        name: 'Design Verification and validation procedure - P40372',
        value: 'https://app.bom.com/items/detail-spec?item_id=1268290345&version_id=11975094278'
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
  
function start () {
  const wrapper = document.querySelector('.wrapper')
  
  contentList.forEach(article => {
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