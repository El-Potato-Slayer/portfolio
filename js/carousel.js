const articles = document.querySelectorAll(".article")
const indicatorContainer = document.getElementsByClassName("indicator-container")[0]
var indicatorIndex
const options = { threshold: 0.5 }

createIndicators(indicatorContainer, articles.length)

// Observer to find section visible in viewport
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    indicatorIndex = [...articles].indexOf(entry.target)
    if (entry.isIntersecting) {
      indicatorContainer.children[indicatorIndex].classList.add("indicator--selected")
    }
    else{
      indicatorContainer.children[indicatorIndex].classList.remove("indicator--selected")
    }
  })
}, options)

articles.forEach(function(article) {
  observer.observe(article)
})

// Move to section on indicator click
indicatorContainer.addEventListener('click', function(event) {
  indicatorContainer.childNodes.forEach(function(indicator, index) {
    if (indicator === event.target) {
      indicatorIndex = index -1
    }
  })
  articles[indicatorIndex].scrollIntoView()
})

// Creates indicators equal to the amount of articles
function createIndicators(container, indicatorAmount) {
  for (let index = 0; index < indicatorAmount; index++) {
    var span = document.createElement("span")
    span.className = "indicator"
    container.appendChild(span)
  }
}
