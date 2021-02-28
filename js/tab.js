// Tabs
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab-content')
let tabIndex = 0
let sliderIndex = 0
const totalSections = document.querySelectorAll('.slide').length/3
const slider = document.querySelectorAll('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')


tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabIndex = index
    resetSlider()
    let target = tabContents[index]
    tabContents.forEach(tabContent => tabContent.classList.remove('tab-content--active'))
    target.classList.add('tab-content--active')

    tabs.forEach(t => {
      t.classList.remove('tab--active')
    })
    tab.classList.add('tab--active')
  })
})

//Slider


rightArrow.addEventListener('click', function() {
  if (sliderIndex < totalSections - 1) {
    sliderIndex++ 
    leftArrow.classList.remove('hidden')
  }
  slider[tabIndex].style.transform = `translateX(calc((-100% * ${sliderIndex} )/ ${totalSections}))`
  if (sliderIndex === totalSections - 1) {
    rightArrow.classList.add('hidden')
  }
})

leftArrow.addEventListener('click', function() {
  if (sliderIndex > 0){
    sliderIndex--;
    rightArrow.classList.remove('hidden')
  }

  slider[tabIndex].style.transform = `translateX(calc((-100% * ${sliderIndex} )/ ${totalSections}))`
  if (sliderIndex === 0) {
    leftArrow.classList.add('hidden')
  }
})

function resetSlider() {
  sliderIndex = 0
  slider[tabIndex].style.transform = `translateX(calc((-100% * ${sliderIndex} )/ ${totalSections}))`
  leftArrow.classList.add('hidden')
  rightArrow.classList.remove('hidden')
}