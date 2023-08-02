const cars_cards_list = document.querySelector('.cars-cads-list');
const cars_cards_list_items = [
  {
    picture_nubmer: 1,
    date: '09.03.2023',
    proces_name: 'Оклейка',
    car_name: 'Mc Laren Оклейка Khaki Green',
  },
  {
    picture_nubmer: 2,
    date: '20.02.2023',
    proces_name: 'Колёса',
    car_name: 'Porsche Panamere окрас дисков',
  },
  {
    picture_nubmer: 3,
    date: '02.03.2023',
    proces_name: 'Антихром',
    car_name: 'INFINITY Q50 Антихром',
  },
  {
    picture_nubmer: 4,
    date: '10.10.2023',
    proces_name: 'Дооснащение',
    car_name: 'BMW X7 Массаж',
  },
  {
    picture_nubmer: 5,
    date: '24.12.23',
    proces_name: 'Пошив салона',
    car_name: 'INFINITY Q50 Антихром',
  },
  {
    picture_nubmer: 6,
    date: '07.03.2023',
    proces_name: 'Доработка подвески',
    car_name: 'TLC 200 Доработка подвески',
  },
];
function murkup_main() {
  const dataitems = cars_cards_list_items.map(
    ({ picture_nubmer, date, proces_name, car_name }) => {
      if (picture_nubmer < 4) {
        return `<li class="cars-card">
        <a href="cards-page.html">
          <picture>
            <source
              srcset="
                project_pictures/Main_page/420/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-420-1x.jpg 1x,
                project_pictures/Main_page/420/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-420-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:519.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/420/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-420-1x.webp 1x,
                project_pictures/Main_page/420/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-420-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:519.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-540-1x.jpg 1x,
                project_pictures/Main_page/540/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-540-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-540-1x.webp 1x,
                project_pictures/Main_page/540/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-540-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-740-1x.jpg 1x,
                project_pictures/Main_page/740/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-740-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-740-1x.webp 1x,
                project_pictures/Main_page/740/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-740-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-1000-1x.jpg 1x,
                project_pictures/Main_page/1000/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-1000-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-1000-1x.webp 1x,
                project_pictures/Main_page/1000/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-1000-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-1440-2x.jpg 1x,
                project_pictures/Main_page/1440/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-1440-1x.jpg 2x
              "
              type="image/jpg"
              media="(min-width:1440px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-1440-1x.webp 1x,
                project_pictures/Main_page/1440/hero_cards/card_${picture_nubmer}/webP/hero-card${picture_nubmer}-1440-2x.webp 1x
              "
              type="image/webp"
              media="(min-width:1440px)"
            />

            <img
              class="car-picture"
              src="../project_pictures/Main_page/420/hero_cards/card_${picture_nubmer}/jpg/hero-card${picture_nubmer}-420-1x.jpg"
              alt=""
            />
          </picture>
          <div class="order-information">
            <p class="date">${date}</p>
            <p class="proces-name">${proces_name}</p>
            <p class="car-name">${car_name}</p>
          </div>
        </a>
      </li>`;
      }
      else if(picture_nubmer===4){
        return `<li class="cars-card addition-cards">
        <a href="cards-page.html">
          <picture>
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_4/jpg/hero-card4-540-1x.jpg 1x,
                project_pictures/Main_page/540/hero_cards/card_4/jpg/hero-card4-540-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_4/webP/hero-card4-540-1x.webp 1x,
                project_pictures/Main_page/540/hero_cards/card_4/webP/hero-card4-540-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_4/jpg/hero-card4-740-1x.jpg 1x,
                project_pictures/Main_page/740/hero_cards/card_4/jpg/hero-card4-740-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_4/webP/hero-card4-740-1x.webp 1x,
                project_pictures/Main_page/740/hero_cards/card_4/webP/hero-card4-740-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_4/jpg/hero-card4-1000-1x.jpg 1x,
                project_pictures/Main_page/1000/hero_cards/card_4/jpg/hero-card4-1000-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_4/webP/hero-card4-1000-1x.webp 1x,
                project_pictures/Main_page/1000/hero_cards/card_4/webP/hero-card4-1000-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_4/jpg/hero-card4-1440-2x.jpg 1x,
                project_pictures/Main_page/1440/hero_cards/card_4/jpg/hero-card4-1440-1x.jpg 2x
              "
              type="image/jpg"
              media="(min-width:1440px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_4/webP/hero-card4-1440-1x.webp 1x,
                project_pictures/Main_page/1440/hero_cards/card_4/webP/hero-card4-1440-2x.webp 1x
              "
              type="image/webp"
              media="(max-width:1440px)"
            />

            <img
              class="car-picture"
              src=" project_pictures/Main_page/540/hero_cards/card_4/jpg/hero-card4-540-1x.jpg"
              alt=""
            />
          </picture>
          <div class="order-information BMW-info">
            <p class="date">10.10.2023</p>
            <p class="proces-name">Дооснащение</p>
            <p class="car-name">BMW X7 Массаж</p>
          </div>
        </a>
      </li>`
      }
      else if(picture_nubmer===5){
        return `      <li class="cars-card addition-cards">
        <a href="cards-page.html">
          <picture>
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_5/jpg/hero-card5-540-1x.jpg 1x,
                project_pictures/Main_page/540/hero_cards/card_5/jpg/hero-card5-540-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_5/webP/hero-card5-540-1x.webp 1x,
                project_pictures/Main_page/540/hero_cards/card_5/webP/hero-card5-540-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_5/jpg/hero-card5-740-1x.jpg 1x,
                project_pictures/Main_page/740/hero_cards/card_5/jpg/hero-card5-740-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_5/webP/hero-card5-740-1x.webp 1x,
                project_pictures/Main_page/740/hero_cards/card_5/webP/hero-card5-740-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_5/jpg/hero-card5-1000-1x.jpg 1x,
                project_pictures/Main_page/1000/hero_cards/card_5/jpg/hero-card5-1000-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_5/webP/hero-card5-1000-1x.webp 1x,
                project_pictures/Main_page/1000/hero_cards/card_5/webP/hero-card5-1000-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_5/jpg/hero-card5-1440-2x.jpg 1x,
                project_pictures/Main_page/1440/hero_cards/card_5/jpg/hero-card5-1440-1x.jpg 2x
              "
              type="image/jpg"
              media="(min-width:1440px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_5/webP/hero-card5-1440-1x.webp 1x,
                project_pictures/Main_page/1440/hero_cards/card_5/webP/hero-card5-1440-2x.webp 1x
              "
              type="image/webp"
              media="(max-width:1440px)"
            />

            <img
              class="car-picture"
              src=" project_pictures/Main_page/540/hero_cards/card_5/jpg/hero-card5-540-1x.jpg"
              alt=""
            />
          </picture>
          <div class="order-information q50-information">
            <p class="date">24.12.23</p>
            <p class="proces-name">Пошив салона</p>
            <p class="car-name">INFINITY Q50 Антихром</p>
          </div>
        </a>
      </li>`
      }
      else if(picture_nubmer===6){
        return `      <li class="cars-card addition-cards">
        <a href="cards-page.html">
          <picture>
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_6/jpg/hero-card6-540-1x.jpg 1x,
                project_pictures/Main_page/540/hero_cards/card_6/jpg/hero-card6-540-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/540/hero_cards/card_6/webP/hero-card6-540-1x.webp 1x,
                project_pictures/Main_page/540/hero_cards/card_6/webP/hero-card6-540-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:739.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_6/jpg/hero-card6-740-1x.jpg 1x,
                project_pictures/Main_page/740/hero_cards/card_6/jpg/hero-card6-740-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/740/hero_cards/card_6/webP/hero-card6-740-1x.webp 1x,
                project_pictures/Main_page/740/hero_cards/card_6/webP/hero-card6-740-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:999.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_6/jpg/hero-card6-1000-1x.jpg 1x,
                project_pictures/Main_page/1000/hero_cards/card_6/jpg/hero-card6-1000-2x.jpg 2x
              "
              type="image/jpg"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1000/hero_cards/card_6/webP/hero-card6-1000-1x.webp 1x,
                project_pictures/Main_page/1000/hero_cards/card_6/webP/hero-card6-1000-2x.webp 2x
              "
              type="image/webp"
              media="(max-width:1439.9px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_6/jpg/hero-card6-1440-2x.jpg 1x,
                project_pictures/Main_page/1440/hero_cards/card_6/jpg/hero-card6-1440-1x.jpg 2x
              "
              type="image/jpg"
              media="(min-width:1440px)"
            />
            <source
              srcset="
                project_pictures/Main_page/1440/hero_cards/card_6/webP/hero-card6-1440-1x.webp 1x,
                project_pictures/Main_page/1440/hero_cards/card_6/webP/hero-card6-1440-2x.webp 1x
              "
              type="image/webp"
              media="(max-width:1440px)"
            />

            <img
              class="car-picture"
              src=" project_pictures/Main_page/540/hero_cards/card_6/jpg/hero-card6-540-1x.jpg"
              alt=""
            />
          </picture>
          <div class="order-information tlc-information">
            <p class="date">07.03.2023</p>
            <p class="proces-name">Доработка подвески</p>
            <p class="car-name">TLC 200 Доработка подвески</p>
          </div>
        </a>
      </li>`
      }
    }
  ).join("");
  cars_cards_list.insertAdjacentHTML("beforeend", dataitems)
}
murkup_main()
