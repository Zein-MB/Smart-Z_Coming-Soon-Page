let title = document.querySelector('h1');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entries, entry)
      title.classList.add('active')
    } else {
      title.classList.remove('active')
    }
  })
})

observer.observe(title);