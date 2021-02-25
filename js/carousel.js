const section = document.querySelectorAll(".section")
const indicatorContainer = document.getElementsByClassName("indicator-container")[0]
var indicatorIndex
const options = { threshold: 0.5 }

createIndicators(indicatorContainer, section.length)

// Observer to find section visible in viewport
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    indicatorIndex = [...section].indexOf(entry.target)
    if (entry.isIntersecting) {
      indicatorContainer.children[indicatorIndex].classList.add("indicator--selected")
    }
    else{
      indicatorContainer.children[indicatorIndex].classList.remove("indicator--selected")
    }
  })
}, options)

section.forEach(function(article) {
  observer.observe(article)
})

// Move to section on indicator click
indicatorContainer.addEventListener('click', function(event) {
  indicatorContainer.childNodes.forEach(function(indicator, index) {
    if (indicator === event.target) {
      indicatorIndex = index
    }
  })
  section[indicatorIndex].scrollIntoView()
})

// Creates indicators equal to the amount of section
function createIndicators(container, indicatorAmount) {
  for (let index = 0; index < indicatorAmount; index++) {
    var span = document.createElement("span")
    span.classList.add("indicator")
    span.classList.add("cursor-pointer")
    container.appendChild(span)
  }
}
