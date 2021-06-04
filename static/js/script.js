

// portfolio Item filter 

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length;
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItems = portfolioItems.length;


      for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click",function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k<totalPortfolioItems; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                  portfolioItems[k].classList.remove("hide");
                  portfolioItems[k].classList.add("show");
                }
                else{
                  portfolioItems[k].classList.remove("show");
                  portfolioItems[k].classList.add("hide");
                }
                if (filterValue === "all") {
                  portfolioItems[k].classList.remove("hide");
                  portfolioItems[k].classList.add("show");
                }
              }
          
        })
      }
    


// portfolio LightBox 

const lightbox = document.querySelector(".lightbox"),
      lightboxClose = document.querySelector(".lightbox-close"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxcounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;;

for (let i = 0; i < totalPortfolioItems; i++) {
  portfolioItems[i].addEventListener("click", function() {
    itemIndex=i;
    changeItem();
    toggleLightbox();
  })
  
}

function nextItem() {
  if (itemIndex == totalPortfolioItems - 1) {
    itemIndex = 0;
  }
  else{
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortfolioItems - 1;
  }
  else{
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxcounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItems;;
}

// close lightbox 

lightbox.addEventListener("click",function(event) {
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightbox();
  }
})


// Aside Navbar

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click",function(){
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
      
    }
    this.classList.add("active");

    showSection(this);
  })
  
}

function showSection(element){
  console.log(element.getAttribute("href").split("#"))
}


