const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', (event) => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => tabContent.classList.remove('tab-content--active'))
    target.classList.add('tab-content--active')
    
    tabs.forEach(t => {
      t.classList.remove('tab--active')
    })
    tab.classList.add('tab--active')
  })
})