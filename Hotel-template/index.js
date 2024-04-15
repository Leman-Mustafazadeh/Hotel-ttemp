const header = document.querySelector("header");
const model = document.getElementById("model");
const videoWrap = document.querySelector(".video-wrap");
const findBtn = document.querySelector(".find-btn");
const findInput = document.querySelector(".find-form>input");
const serviceTitle = document.querySelector(".service-title");
const testTitle = document.querySelector(".test-title");
const findForm = document.querySelector(".find-form");
const show = document.querySelector(".show");
const sortByNameSelect = document.querySelector("#sort-by-name");
const blogTitle = document.querySelector(".blog-title");

const serviceBtn = document.querySelector(".service-head-btn>button");
const nextBtn = document.querySelector(".next");
const prewBtn = document.querySelector(".prev");
const serviceConta = document.querySelector(".serviceConta");
const addService = document.querySelector(".service-head-btn>button");
const formModal = document.querySelector(".formModal");
const formModalForm = document.querySelector(".formModalItem>form");
const forModalIcon = document.querySelector(".icon");
const forModalCategory = document.querySelector(".category");
const forModalTitle = document.querySelector(".title");
const forModalLink = document.querySelector(".link");
const backColor = document.querySelector(".backColor");
const addForm = document.querySelector(".formModalBtn>.add-formModal");
const cancelForm = document.querySelector(".formModalBtn>.cancel-formModal");

/* function scroll header backgroun-color  */
window?.addEventListener("scroll", function () {
  if (this.window.scrollY > 200) {
    header.style.backgroundColor = "gainsboro";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
/* function scroll end */

/* function modal header */
function openModel() {
  videoWrap.style.display = "flex";
}
model?.addEventListener("click", openModel);
videoWrap?.addEventListener("click", () => {
  videoWrap.style.display = "none";
});
/* function modal header end */

class Service {
  static idCounter = 1;
  constructor(icon, category, title, link) {
    this.icon = icon;
    this.category = category;
    this.title = title;
    this.link = link;
    this.id = Service.idCounter++;
    this.createdAt = moment()?.format("YYYY-MM-DD");
  }
}
let ourService = [
  new Service(
    "fa-solid fa-person-running",
    "Trekking",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
  new Service(
    "fa-regular fa-map",
    "The Map",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
  new Service(
    "fa-solid fa-business-time",
    "Suitcase",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
  new Service(
    "fa-solid fa-seedling",
    "Island Hoping",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
  new Service(
    "fa-solid fa-globe",
    "World Round",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
  new Service(
    "fa-solid fa-plane",
    "Travel with Plane",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Learn more"
  ),
];

function service(getService) {
  serviceTitle.innerHTML = "";
  getService?.map((item) => {
    serviceTitle.innerHTML += `
          <div class="service-item"> <i class="${item.icon}"></i>
          <h3>${item.category}</h3>
          <p>${item.title}</p>
          <span>${item.createdAt}</span>
         <a href="">${item.link}</a> </div>`;
  });
}
service(ourService);


addService?.addEventListener("click", () => {
  formModal.style.display = "flex";
  setTimeout(() => {
    formModal.style.opacity = "1";
  }, 600);
});

backColor?.addEventListener("click", () => {

  cancelModal();
});
const errorMsj = document.querySelector(".errorMsj2")
formModalForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (forModalIcon.value.trim() === "" || forModalCategory.value === "" || forModalTitle.value === "" || forModalLink.value === "") {
    errorMsj.innerHTML = "Please fill in the boxes."
  } else {
    ourService.push({
      icon: forModalIcon.value,
      category: forModalCategory.value,
      title: forModalTitle.value,
      link: forModalLink.value,
    });
    service(ourService);
    cancelModal();
  }

});

cancelForm?.addEventListener("click", () => {
  cancelModal();
});

function cancelModal() {
  setTimeout(() => {
    formModal.style.display = "none";
  }, 700);
  formModal.style.opacity = "0";
}

//   service(ourService)
// })

// Search Function
findForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let filterService = ourService.filter((item) =>
    item.category.toLowerCase().includes(findInput.value.toLowerCase())
  );
  service(filterService);
});
show?.addEventListener("click", () => {
  service(ourService);
});
//  Search Function End

// SORT FUNCTION START
function sortByName(value) {
  if (value == "a") {
    let tempsA = ourService.sort((a, z) =>
      a.category.localeCompare(z.category)
    );
    service(tempsA);
  } else if (value == "z") {
    let tempsZ = ourService.sort((a, z) =>
      z.category.localeCompare(a.category)
    );
    service(tempsZ);
  }
}
sortByNameSelect?.addEventListener("change", function () {
  sortByName(this.value);
});

//SORT FUNCTION FINISH

// BLOG POST START

class Blog {
  static id = 1;
  constructor(image, icon, h4, link) {
    this.image = image;
    this.icon = icon;
    this.h4 = h4.slice(0, 60);
    this.id = Blog.id++;
    this.link = link;
  }
}

let blog = [
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_1.jpg.webp",
    "fa-solid fa-ruler",
    "Behind the word fir en gi z mountains, far from the countries",
    "Read More"
  ),
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_3.jpg.webp",
    "fa-solid fa-ruler",
    "Far far away, m elx is a behind  the word mountains, far from the countries",
    "Read More"
  ),
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_2.jpg.webp",
    "fa-solid fa-ruler",
    "Lorem Lem ipson an the word mountains, far from the countries",
    "Read More"
  ),
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_4.jpg.webp",
    "fa-solid fa-ruler",
    "Far far away, behind the word mountains, far from the countries",
    "Read More"
  ),
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_1.jpg.webp",
    "fa-solid fa-ruler",
    "Far far away, behind the word mountains of Ra min, far from the countries",
    "Read More"
  ),
  new Blog(
    "https://preview.colorlib.com/theme/hotell/images/img_3.jpg.webp",
    "fa-solid fa-ruler",
    "Far far away au x lem an, behind the word mountains, far from the countries",
    "Read More"
  ),
];
const formBlogWrap = document.querySelector(".formBlogWrap");
const formBlogHead = document.querySelector(".formBlogHead");
const formBlogImg = document.querySelector(".formBlogImg");
const formBlogInput = document.querySelector(".formBlogInput");
const formBlogAdd = document.querySelector(".formBlogAdd");
const formBlogCancel = document.querySelector(".formBlogCancel");
const closeModal2 = document.querySelector(".closeModal2");
function getDetBlog(params) {
  blogTitle.innerHTML = "";
  getBlog.map((item) => {
    blogTitle += ``;
  });
}
function getBlog(getBlog) {
  blogTitle.innerHTML = "";
  getBlog.map((word) => {
    blogTitle.innerHTML += `
      <div class="blog-item">
      <div class="blog-img">
        <img src="${word.image}" alt=""/>
      </div>
      <p   class="blog-icon"><i id=${word.id} class="${word.icon}"></i></p>
      <div class="blog-read">
        <h4>${word.h4}
        </h4>
        <a href="">${word.link}</a>
      </div>
    </div>
      `;

    const blogIcons = document.querySelectorAll(".blog-icon");

    blogIcons?.forEach((blogIcon) => {
      blogIcon?.addEventListener("click", (e) => {
        const getId = Number(e.target.getAttribute("id"));
        blog.forEach((data) => {
          if (data.id === getId) {
            formBlogInput.value = data.h4;
            formBlogImg.src = data.image;
            formBlogHead.id = data.id;
          }
        });
        formBlogWrap.style.display = "flex";
      });
    });
    blog.forEach((item) => { });
    formBlogCancel?.addEventListener("click", () => {
      formBlogWrap.style.display = "none";
    });
    closeModal2?.addEventListener("click", () => {
      formBlogWrap.style.display = "none";
    });
  });
}
getBlog(blog);
const blogPrev = document.querySelector(".blog>.btn>.prev");
const blogNext = document.querySelector(".blog>.btn>.next");
const blogItem = document.querySelector(".blog-item").offsetWidth;

let count = 0;
blogNext?.addEventListener("click", () => {
  if (count < blogTitle.children.length - 3) {
    count++;
    blogTitle.style.transform = `translateX(-${count * (blogItem + 70)}px)`;
  }
});
blogPrev?.addEventListener("click", () => {
  if (count > 0) {
    count--;
    blogTitle.style.transform = `translateX(-${count * (blogItem + 70)}px)`;
  }
});

formBlogHead?.addEventListener("submit", (e) => {
  e.preventDefault();
  const getId = Number(e.target.getAttribute("id"));
  blog?.forEach((data) => {
    if (data.id === getId) {
      data.h4 = formBlogInput.value;
      formBlogWrap.style.display = "none";
      return blog;
    }
  });
  getBlog(blog);
});

// BLOG POST END

//TESTIMONIAL START

class Testimonials {
  static Teid = 1;
  constructor(icon, title, image, category, word) {
    this.id = Testimonials.Teid++;
    this.icon = icon;
    this.title = title;
    this.image = image;
    this.category = category;
    this.word = word;
  }
}
let testimonials = [
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_1.jpg.webp",
    "John Doe",
    "Creative Director"
  ),
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_2.jpg.webp",
    "John Doe",
    "Creative Director A"
  ),
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_3.jpg.webp",
    "John Doe",
    "Creative Director"
  ),
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_4.jpg.webp",
    "John Doe",
    "Creative Director"
  ),
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_2.jpg.webp",
    "John Doe",
    "Creative Director"
  ),
  new Testimonials(
    "fa-solid fa-quote-left",
    " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    "https://preview.colorlib.com/theme/hotell/images/person_1.jpg.webp",
    "John Doe",
    "Creative Director"
  ),
];
function getTest(getDetailBlog) {
  testTitle.innerHTML = "";
  getDetailBlog.map((item) => {
    testTitle.innerHTML += `
    <div  class="test-item">
    <i class="${item.icon}"></i>
    <p>${item.title}</p>
    <div class="test-wrap">
      <div class="test-img">
        <img
          src="${item.image}"
          alt=""
        />
      </div>
      <div class="test-word">
        <h4>${item.category}</h4>
        <h6>${item.word}</h6>
      </div>
      <button id=${item.id} class="testItem">Delete</button>
    </div>
    </div>
    `;
  });

  const deleteTest = document.querySelectorAll(".testItem");

  deleteTest?.forEach((item) => {
    item?.addEventListener("click", () => {
      testimonials = testimonials.filter(i => i.id != item.id)
      getTest(testimonials);
      Swal.fire("Deleted successfully!");
    })
  })
}
getTest(testimonials);


/* Slider */

const textPrev = document.querySelector(".testPrev ");
const textNext = document.querySelector(".testNext");
const textItem = document.querySelector(".test-item").offsetWidth;

let counterP = 0;
textNext?.addEventListener("click", () => {
  if (counterP < testTitle.children.length - 3) {
    counterP++;
    testTitle.style.transform = `translateX(-${counterP * (textItem + 70)}px)`;
  }
});
textPrev?.addEventListener("click", () => {
  if (counterP > 0) {
    counterP--;
    testTitle.style.transform = `translateX(-${counterP * (textItem + 70)}px)`;
  }
});



const testItemBtns = document.querySelectorAll(".testItemBtn")
const testItem = document.querySelector(".test-item")
testItemBtns?.forEach((testItemBtn) => {
  testItemBtn?.addEventListener("click", () => {
    testItem.remove()
  })
})


const formModalE = document.querySelector(".formModalE");
const addEmployee = document.querySelector(".addEmployee");
const backColor2 = document.querySelector(".backColor2");
const cancel2 = document.querySelector(".cancel-formModal2");
const formModalForm2 = document.querySelector(".formModalItem2>form");
const imaEmp = document.querySelector(".imaEmp");
const nameEmp = document.querySelector(".nameEmp");
const titleEmp = document.querySelector(".titleEmp");
const posEm = document.querySelector(".posEmp");


addEmployee?.addEventListener("click", () => {
  formModalE.style.display = "flex";
  setTimeout(() => {
    formModalE.style.opacity = "1";
  }, 600);
});

backColor2?.addEventListener("click", () => {
  cancelModal2();
});

imaEmp?.addEventListener("change", () => {
  if (imaEmp.files !== null) {
      const getFile = imaEmp.files[0];
      if (getFile) {
          const reader = new FileReader()

          reader.onload = function (e) {
              getIMg = e.target?.result
          }
          reader.readAsDataURL(getFile)

      }
  }
})

const errorMs2 = document.querySelector(".errorMsj2")
formModalForm2?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameEmp.value.trim() === "" || titleEmp.value.trim() === "" || posEm.value.trim() === "") {
    errorMs2.innerHTML = "Please fill in the boxes."
  } else {
    testimonials.push({
      category: nameEmp.value,
      icon: "fa-solid fa-quote-left",
      id: Math.floor(Math.random() * 1000),
      image: getIMg,
      title: titleEmp.value,
      word: posEm.value
    });
    getTest(testimonials)
    cancelModal2();
  }

});

cancel2?.addEventListener("click", () => {
  cancelModal2();
});

function cancelModal2() {
  setTimeout(() => {
    formModalE.style.display = "none";
  }, 700);
  formModalE.style.opacity = "0";
}







//TESTIMONIAL FINISH



/* slider next prew function */

const seviceItem = document.querySelector(".service-item").offsetWidth;
let counter = 0;
nextBtn.addEventListener("click", () => {
  if (counter < serviceTitle.children.length - 3) {
    counter++;
    serviceTitle.style.transform = `translateX(-${counter * (seviceItem + 55)
      }px)`;
  }
});

prewBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    serviceTitle.style.transform = `translateX(-${counter * seviceItem}px)`;
  }
});

// leman
// FAQ SECTION START
class Faq {
  constructor(h3, icon, title, word) {
    this.h3 = h3;
    this.icon = icon;
    this.title = title;
    this.word = word;
  }
}
let faq = [
  {
    h3: "Is it free?",
    icon: "fa-solid fa-chevron-down",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at thecoast of the Semantics, a large language ocean.",
    word: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    h3: "How to install this template?",
    icon: "fa-solid fa-chevron-down",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at thecoast of the Semantics, a large language ocean.",
    word: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    h3: "Where can i get help?",
    icon: "fa-solid fa-chevron-down",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at thecoast of the Semantics, a large language ocean.",
    word: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];
const freqRight = document.querySelector(".freq-right");
function getFaqs(getFaq) {
  freqRight.innerHTML = "";

  getFaq.map((item) => {
    freqRight.innerHTML += ` 
    
    <div class="freq-item">
    <div class="freqConta"></div>
      <h3>${item.h3}</h3>
      <i class="${item.icon}"></i>
    </div>
    <div class="freq-far">
      <p>${item.title}
      </p>
      <p>${item.word}
      </p>
    </div>
  `;



  });
  const freqItem = document.querySelectorAll(".freqConta");
  freqItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.parentNode.nextElementSibling.style.display === "" || e.target.parentNode.nextElementSibling.style.display === "none") {
        e.target.parentNode.nextElementSibling.style.display = "block";
      } else {
        e.target.parentNode.nextElementSibling.style.display = "none";
      }
    })
  })
  /*  up.forEach((item) => {
     item.addEventListener("click", (e)=>{
      
       
     })
   }) */
}
getFaqs(faq)


// FAQ SECTION END

