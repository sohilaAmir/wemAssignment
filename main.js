const trendingSwiper = new Swiper(".trending__swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 50,
});

const testimonialSwiper = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.addEventListener('DOMContentLoaded', function () {


  const cardDetailsData = [
    {
      title: "Nike Air Force 1 '07",
      style: "Style: CW2288-111",
      price: "7495.00",
      image: "assets/trending-1.jpg",
    },
    {
      title: "Nike Zoom Vomero 5",
      style: "Style: FB9149-400",
      price: "14995.00",
      image: "assets/trending-2.jpg",
    },
    {
      title: "Nike Vomero 5",
      style: "Style: BV1358-002",
      price: "14995.00",
      image: "assets/trending-3.jpg",
    },
    {
      title: "Nike Air Max 90",
      style: "Style: FB9657-002",
      price: "11895.00",
      image: "assets/trending-4.jpg"

    },
    {
      title: "Nike Air Max 97",
      style: "Style: DC2190-001",
      price: "16995.00",
      image: "assets/trending-5.jpg"


    },
    {
      title: "Nike Air Max 97",
      style: "Style: DC2190-001",
      price: "16995.00",
      image: "assets/trending-6.jpg"


    },
    {
      title: "Nike Zoom Vomero 5",
      style: "Style: FB9149-400",
      price: "14995.00",
      image: "assets/trending-2.jpg",
    },
    {
      title: "Nike Vomero 5",
      style: "Style: BV1358-002",
      price: "14995.00",
      image: "assets/trending-3.jpg",
    },
    {
      title: "Nike Air Max 90",
      style: "Style: FB9657-002",
      price: "11895.00",
      image: "assets/trending-4.jpg"

    },
    {
      title: "Nike Air Max 97",
      style: "Style: DC2190-001",
      price: "16995.00",
      image: "assets/trending-5.jpg"


    },
    {
      title: "Nike Air Max 97",
      style: "Style: DC2190-001",
      price: "16995.00",
      image: "assets/trending-6.jpg"


    },



  ];

  const trendingContainer = document.querySelector('.swiper-wrapper');
  cardDetailsData.forEach((cardData) => {

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'trending__swiper-slide');


    const trendingCard = document.createElement('div');
    trendingCard.classList.add('trending__card');


    const imgElement = document.createElement('img');
    imgElement.src = cardData.image;
    imgElement.alt = 'trending';


    const cardContent = document.createElement('div');
    cardContent.classList.add('trending__card__content');


    const btnContainer = document.createElement('div');
    btnContainer.classList.add('trending__btns');

    const heartBtn = document.createElement('button');
    heartBtn.innerHTML = '<i class="ri-heart-3-fill"></i>';

    const shoppingBagBtn = document.createElement('button');
    shoppingBagBtn.innerHTML = '<i class="ri-shopping-bag-fill"></i>';

    btnContainer.appendChild(heartBtn);
    btnContainer.appendChild(shoppingBagBtn);


    const cardDetailsContainer = document.createElement('div');
    cardDetailsContainer.classList.add('trending__card__details');

    const titleElement = document.createElement('h4');
    titleElement.textContent = cardData.title;

    const styleElement = document.createElement('p');
    styleElement.textContent = cardData.style;

    const priceElement = document.createElement('h3');
    priceElement.textContent = cardData.price;

    cardDetailsContainer.appendChild(titleElement);
    cardDetailsContainer.appendChild(styleElement);
    cardDetailsContainer.appendChild(priceElement);


    cardContent.appendChild(btnContainer);
    cardContent.appendChild(cardDetailsContainer);

    trendingCard.appendChild(imgElement);
    trendingCard.appendChild(cardContent);

    slide.appendChild(trendingCard);

    trendingContainer.appendChild(slide);
  });

  function filterCards(searchTerm) {

    trendingContainer.innerHTML = '';


    const filteredCards = cardDetailsData.filter((cardData) =>
      cardData.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredCards.forEach((cardData) => {
      createTrendingCard(cardData);
    });
    initializeSwiper();
  }


  function initializeSwiper() {
    var swiper = new Swiper('.trending__swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.ri-arrow-right-s-line',
        prevEl: '.ri-arrow-left-s-line',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  initializeSwiper();
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    filterCards(searchInput);
  });
  function createTrendingCard(cardData) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'trending__swiper-slide');

    const trendingCard = document.createElement('div');
    trendingCard.classList.add('trending__card');

    const imgElement = document.createElement('img');
    imgElement.src = cardData.image;
    imgElement.alt = 'trending';

    const cardContent = document.createElement('div');
    cardContent.classList.add('trending__card__content');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('trending__btns');

    const heartBtn = document.createElement('button');
    heartBtn.innerHTML = '<i class="ri-heart-3-fill"></i>';

    const shoppingBagBtn = document.createElement('button');
    shoppingBagBtn.innerHTML = '<i class="ri-shopping-bag-fill"></i>';

    btnContainer.appendChild(heartBtn);
    btnContainer.appendChild(shoppingBagBtn);

    const cardDetailsContainer = document.createElement('div');
    cardDetailsContainer.classList.add('trending__card__details');

    const titleElement = document.createElement('h4');
    titleElement.textContent = cardData.title;

    const styleElement = document.createElement('p');
    styleElement.textContent = cardData.style;

    const priceElement = document.createElement('h3');
    priceElement.textContent = cardData.price;

    cardDetailsContainer.appendChild(titleElement);
    cardDetailsContainer.appendChild(styleElement);
    cardDetailsContainer.appendChild(priceElement);

    cardContent.appendChild(btnContainer);
    cardContent.appendChild(cardDetailsContainer);

    trendingCard.appendChild(imgElement);
    trendingCard.appendChild(cardContent);

    slide.appendChild(trendingCard);
    trendingContainer.appendChild(slide);
  }

});

