const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: 'Fluffy stacks of golden perfection, served with a generous drizzle of real maple syrup.'
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: 'A hearty combination of succulent beef patties, melted cheese, and crisp lettuce, sandwiched between toasted brioche buns.'
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: 'A monster-sized milkshake featuring rich vanilla ice cream, chocolate syrup, whipped cream, and colorful sprinkles.'
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: 'Farm-fresh eggs, crispy hash browns, savory sausage links, and sautéed vegetables for a hearty breakfast.'
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: 'Scrambled eggs, savory bacon, melted cheese, and zesty salsa wrapped in a warm tortilla.'
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: 'Layers of velvety Oreo-flavored mousse, crumbled cookies, and chocolate ganache for a dreamy dessert.'
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: 'A tower of crispy bacon strips served with a side of tangy barbecue sauce.'
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: 'Juicy beef patty, melted American cheese, fresh lettuce, tomato, and special sauce on a toasted sesame seed bun.'
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: 'When times get tough, the Quarantine Buddy is here to lift your spirits. This comforting bowl of creamy macaroni and cheese is studded with crispy bacon bits and a hint of garlic. It`s the ultimate comfort food that feels like a warm hug on a plate.'
  }
]

/*
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
*/

const names = menu.map((item) => item.title)
console.log(names)
