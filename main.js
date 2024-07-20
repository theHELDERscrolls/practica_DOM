const products = [
  {
    name: "Leather Armor",
    price: 125,
    stars: 2,
    seller: "Belethor",
    class: "Light Armor",
    classImg: "assets/img/cards_icon/light_armor.png",
    image: "assets/img/armadura/armor_leather.png",
  },
  {
    name: "Orcish Armor",
    price: 1000,
    stars: 4,
    seller: "Eorlund",
    class: "Heavy Armor",
    classImg: "assets/img/cards_icon/heavy_armor.png",
    image: "assets/img/armadura/armor_orcish.png",
  },
  {
    name: "Steel Plate Armor",
    price: 625,
    stars: 3,
    seller: "Ulfberth",
    class: "Heavy Armor",
    classImg: "assets/img/cards_icon/heavy_armor.png",
    image: "assets/img/armadura/armor_steel.png",
  },
  {
    name: "Elven Boots",
    price: 45,
    stars: 3,
    seller: "Elrindir",
    class: "Light Armor",
    classImg: "assets/img/cards_icon/light_armor.png",
    image: "assets/img/armadura/boots_elven.png",
  },
  {
    name: "Mage Boots",
    price: 20,
    stars: 2,
    seller: "Farengar",
    class: "Robe",
    classImg: "assets/img/cards_icon/robes.png",
    image: "assets/img/armadura/boots_mage.png",
  },
  {
    name: "Steel Cuffed Boots",
    price: 25,
    stars: 3,
    seller: "Ulfberth",
    class: "Heavy Armor",
    classImg: "assets/img/cards_icon/heavy_armor.png",
    image: "assets/img/armadura/boots_steel.png",
  },
  {
    name: "Leather Bracers",
    price: 25,
    stars: 2,
    seller: "Belethor",
    class: "Light Armor",
    classImg: "assets/img/cards_icon/light_armor.png",
    image: "assets/img/armadura/braces_leather.png",
  },
  {
    name: "Steel Imperial Gauntlets",
    price: 55,
    stars: 3,
    seller: "Ulfberth",
    class: "Heavy Armor",
    classImg: "assets/img/cards_icon/heavy_armor.png",
    image: "assets/img/armadura/braces_steel.png",
  },
  {
    name: "Thalmor Gloves",
    price: 30,
    stars: 4,
    seller: "Farengar",
    class: "Robe",
    classImg: "assets/img/cards_icon/robes.png",
    image: "assets/img/armadura/gloves_thalmor.png",
  },
  {
    name: "Elven Helmet",
    price: 110,
    stars: 5,
    seller: "Elrindir",
    class: "Light Armor",
    classImg: "assets/img/cards_icon/light_armor.png",
    image: "assets/img/armadura/helmet_elven.png",
  },
  {
    name: "Hide Helmet",
    price: 45,
    stars: 1,
    seller: "Belethor",
    class: "Light Armor",
    classImg: "assets/img/cards_icon/light_armor.png",
    image: "assets/img/armadura/helmet_hide.png",
  },
  {
    name: "Iron Helmet",
    price: 60,
    stars: 5,
    seller: "Ulfberth",
    class: "Heavy Armor",
    classImg: "assets/img/cards_icon/heavy_armor.png",
    image: "assets/img/armadura/helmet_iron.png",
  },
  {
    name: "Mage Hood",
    price: 10,
    stars: 1,
    seller: "Farengar",
    class: "Robe",
    classImg: "assets/img/cards_icon/robes.png",
    image: "assets/img/armadura/hood_mageblue.png",
  },
  {
    name: "Temple Priest Hood",
    price: 25,
    stars: 3,
    seller: "Arcadia",
    class: "Robe",
    classImg: "assets/img/cards_icon/robes.png",
    image: "assets/img/armadura/hood_priest.png",
  },
  {
    name: "Mage Robes",
    price: 25,
    stars: 3,
    seller: "Farengar",
    class: "Robe",
    classImg: "assets/img/cards_icon/robes.png",
    image: "assets/img/armadura/robe_mageblue.png",
  },
  {
    name: "Dwarven Shield",
    price: 225,
    stars: 4,
    seller: "Eorlund",
    class: "Shield",
    classImg: "assets/img/cards_icon/shield.png",
    image: "assets/img/armadura/shield_dwarven.png",
  },
  {
    name: "Nordic Shield",
    price: 335,
    stars: 5,
    seller: "Eorlund",
    class: "Shield",
    classImg: "assets/img/cards_icon/shield.png",
    image: "assets/img/armadura/shield_nordic.png",
  },
  {
    name: "Iron Shield",
    price: 335,
    stars: 2,
    seller: "Belethor",
    class: "Shield",
    classImg: "assets/img/cards_icon/shield.png",
    image: "assets/img/armadura/shield_iron.png",
  },
  {
    name: "Orcish Shield",
    price: 500,
    stars: 5,
    seller: "Eorlund",
    class: "Shield",
    classImg: "assets/img/cards_icon/shield.png",
    image: "assets/img/armadura/shield_orcish.png",
  },
  {
    name: "Steel Shield",
    price: 150,
    stars: 2,
    seller: "Ulfberth",
    class: "Shield",
    classImg: "assets/img/cards_icon/shield.png",
    image: "assets/img/armadura/shield_steel.png",
  },
  {
    name: "Dwarven Battleaxe",
    price: 300,
    stars: 4,
    seller: "Balimund",
    class: "Two handed",
    classImg: "assets/img/cards_icon/two_handed.png",
    image: "assets/img/armas/battleaxe_dwarven.png",
  },
  {
    name: "Iron Battleaxe",
    price: 55,
    stars: 2,
    seller: "Balimund",
    class: "Two handed",
    classImg: "assets/img/cards_icon/two_handed.png",
    image: "assets/img/armas/battleaxe_iron.png",
  },
  {
    name: "Elven Bow",
    price: 470,
    stars: 3,
    seller: "Elrindir",
    class: "Bow",
    classImg: "assets/img/cards_icon/arrow.png",
    image: "assets/img/armas/bow_elven.png",
  },
  {
    name: "Hunting Bow",
    price: 50,
    stars: 2,
    seller: "Elrindir",
    class: "Bow",
    classImg: "assets/img/cards_icon/arrow.png",
    image: "assets/img/armas/bow_hunting.png",
  },
  {
    name: "Long Bow",
    price: 30,
    stars: 1,
    seller: "Elrindir",
    class: "Bow",
    classImg: "assets/img/cards_icon/arrow.png",
    image: "assets/img/armas/bow_long.png",
  },
  {
    name: "Nordic Bow",
    price: 580,
    stars: 5,
    seller: "Elrindir",
    class: "Bow",
    classImg: "assets/img/cards_icon/arrow.png",
    image: "assets/img/armas/bow_nordic.png",
  },
  {
    name: "Orcish Bow",
    price: 150,
    stars: 4,
    seller: "Elrindir",
    class: "Bow",
    classImg: "assets/img/cards_icon/arrow.png",
    image: "assets/img/armas/bow_orcish.png",
  },
  {
    name: "Elven Dagger",
    price: 95,
    stars: 5,
    seller: "Lod",
    class: "Dagger",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/dagger_elve.png",
  },
  {
    name: "Steel GreatSword",
    price: 90,
    stars: 2,
    seller: "Balimund",
    class: "Two handed",
    classImg: "assets/img/cards_icon/two_handed.png",
    image: "assets/img/armas/greatsword_steel.png",
  },
  {
    name: "Orcish Mace",
    price: 105,
    stars: 5,
    seller: "Lod",
    class: "Mace",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/mace_orcish.png",
  },
  {
    name: "Detect Life",
    price: 332,
    stars: 3,
    seller: "Tolfdir",
    class: "Spell",
    classImg: "assets/img/cards_icon/spell.png",
    image: "assets/img/armas/spell_alteration.png",
  },
  {
    name: "Conjure Flame Atronach",
    price: 99,
    stars: 3,
    seller: "Tolfdir",
    class: "Spell",
    classImg: "assets/img/cards_icon/spell.png",
    image: "assets/img/armas/spell_conjuration.png",
  },
  {
    name: "Chain Lightning",
    price: 390,
    stars: 5,
    seller: "Faralda",
    class: "Spell",
    classImg: "assets/img/cards_icon/spell.png",
    image: "assets/img/armas/spell_destruction.png",
  },
  {
    name: "Invisibility",
    price: 625,
    stars: 5,
    seller: "Drevis Neloren",
    class: "Spell",
    classImg: "assets/img/cards_icon/spell.png",
    image: "assets/img/armas/spell_ilusion.png",
  },
  {
    name: "Repel Lesser Undead",
    price: 333,
    stars: 2,
    seller: "Colette Marence",
    class: "Spell",
    classImg: "assets/img/cards_icon/spell.png",
    image: "assets/img/armas/spell_restoration.png",
  },
  {
    name: "Staff of the Familiar",
    price: 926,
    stars: 1,
    seller: "Tolfdir",
    class: "Staff",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/staff_conjuration.png",
  },
  {
    name: "Staff of Fireballs",
    price: 1309,
    stars: 5,
    seller: "Faralda",
    class: "Staff",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/staff_destruction.png",
  },
  {
    name: "Staff of Mending",
    price: 613,
    stars: 3,
    seller: "Colette Marence",
    class: "Staff",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/staff_restoration.png",
  },
  {
    name: "Elven Sword",
    price: 235,
    stars: 5,
    seller: "Lod",
    class: "One handed",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/sword_elven.png",
  },
  {
    name: "Steel Sword",
    price: 45,
    stars: 2,
    seller: "Lod",
    class: "One handed",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/sword_steel.png",
  },
  {
    name: "Glass War Axe",
    price: 490,
    stars: 5,
    seller: "Lod",
    class: "War Axe",
    classImg: "assets/img/cards_icon/one_handed.png",
    image: "assets/img/armas/waraxe_glass.png",
  },
  {
    name: "Nordic Warhammer",
    price: 700,
    stars: 5,
    seller: "Balimund",
    class: "Two handed",
    classImg: "assets/img/cards_icon/two_handed.png",
    image: "assets/img/armas/warhammer_nordic.png",
  },
  {
    name: "Emerald",
    price: 600,
    stars: 5,
    seller: "Calcelmo",
    class: "Gem",
    classImg: "assets/img/cards_icon/gems.png",
    image: "assets/img/objetos/gem_emerald.png",
  },
  {
    name: "Flawless Garnet",
    price: 150,
    stars: 5,
    seller: "Calcelmo",
    class: "Gem",
    classImg: "assets/img/cards_icon/gems.png",
    image: "assets/img/objetos/gem_garnet.png",
  },
  {
    name: "Great Soul Gem",
    price: 100,
    stars: 5,
    seller: "Calcelmo",
    class: "Gem",
    classImg: "assets/img/cards_icon/gems.png",
    image: "assets/img/objetos/gem_greatersoul.png",
  },
  {
    name: "Blue Butterfly Wing",
    price: 2,
    stars: 3,
    seller: "Arcadia",
    class: "Ingredient",
    classImg: "assets/img/cards_icon/ingredients.png",
    image: "assets/img/objetos/ingredient_bluebutterflywing.png",
  },
  {
    name: "Bone Meal",
    price: 5,
    stars: 5,
    seller: "Arcadia",
    class: "Ingredient",
    classImg: "assets/img/cards_icon/ingredients.png",
    image: "assets/img/objetos/ingredient_bonemeal.png",
  },
  {
    name: "Dragon's Tongue",
    price: 5,
    stars: 2,
    seller: "Arcadia",
    class: "Ingredient",
    classImg: "assets/img/cards_icon/ingredients.png",
    image: "assets/img/objetos/ingredient_dragontongue.png",
  },
  {
    name: "Fire Salt",
    price: 50,
    stars: 5,
    seller: "Arcadia",
    class: "Ingredient",
    classImg: "assets/img/cards_icon/ingredients.png",
    image: "assets/img/objetos/ingredient_firesalt.png",
  },
  {
    name: "Potion of Plentiful Magicka",
    price: 69,
    stars: 4,
    seller: "Ahkari",
    class: "Magicka",
    classImg: "assets/img/cards_icon/potion.png",
    image: "assets/img/objetos/potion_magic.png",
  },
  {
    name: "Potion of Regeneration",
    price: 311,
    stars: 4,
    seller: "Ahkari",
    class: "Health",
    classImg: "assets/img/cards_icon/potion.png",
    image: "assets/img/objetos/potion_regeneration.png",
  },
  {
    name: "Potion of Vigorous Stamina",
    price: 95,
    stars: 3,
    seller: "Ahkari",
    class: "Stamina",
    classImg: "assets/img/cards_icon/potion.png",
    image: "assets/img/objetos/potion_stamina.png",
  },
];

/* Función para crear todos los elementos de cada tarjeta de la tienda */
function createShopCards(productsArray) {
  const shop = document.querySelector("#shop");
  for (const product of productsArray) {
    /* creamos un div */
    let div = document.createElement("div");
    div.className = "item_shop";

    /*=== ICON === */
    let icon = document.createElement("img");
    icon.className = "icon-item_shop";
    icon.src = product.classImg;
    icon.alt = "Class Icon";
    div.appendChild(icon);

    /*=== CLASS === */
    let rol = document.createElement("div");
    let rolText = document.createTextNode(product.class);
    rol.className = "class-item_shop";
    rol.appendChild(rolText);
    div.appendChild(rol);

    /*=== IMAGE === */
    let img = document.createElement("img");
    img.className = "image-item_shop";
    img.src = product.image;
    img.alt = "Product Image";
    div.appendChild(img);

    /*=== NAME === */
    let name = document.createElement("h3");
    let nameText = document.createTextNode(product.name);
    name.className = "name-item_shop";
    name.appendChild(nameText);
    div.appendChild(name);

    /*=== SELLER === */
    let seller = document.createElement("h4");
    let sellerText = document.createTextNode(product.seller);
    seller.className = "seller-item_shop";
    seller.appendChild(sellerText);
    div.appendChild(seller);

    /*=== RATING === */
    let divRating = document.createElement("div");
    divRating.className = "rating-item_shop";
    div.appendChild(divRating);

    /*=== PRICE === */
    let price = document.createElement("p");
    let priceValue = document.createTextNode(product.price + " €");
    price.className = "price-item_shop";
    price.appendChild(priceValue);
    div.appendChild(price);

    /*=== BUY BUTTON === */
    let buyButton = document.createElement("button");
    let buyButtonText = document.createTextNode("Add to chard");
    buyButton.className = "button-item_shop";
    buyButton.appendChild(buyButtonText);
    div.appendChild(buyButton);

    shop.appendChild(div);
  }
}

createShopCards(products);

/* Función para añadir estrellas según el valor de stars de cada objeto */
function addStarsToProducts(productsArray) {
  productsArray.forEach((product, index) => {
    const ratingDiv = document.querySelectorAll(".rating-item_shop")[index];

    for (let i = 0; i < product.stars; i++) {
      const starImg = document.createElement("img");
      starImg.className = "star-item_shop";
      starImg.src = "assets/img/cards_icon/star_full.png";
      starImg.alt = "Star";
      ratingDiv.appendChild(starImg);
    }
  });
}

addStarsToProducts(products); /* FUNCIONA :,) */

/* Función que atribuye un estilo específico a la carta de la tienda
según la clase que tenga el item */

function styleByClass() {
  const shopItems = document.querySelectorAll(".item_shop");

  shopItems.forEach((item) => {
    const classItems = item.querySelectorAll(".class-item_shop");

    classItems.forEach((classItem) => {
      if (
        classItem.textContent === "Heavy Armor" ||
        classItem.textContent === "Shield" ||
        classItem.textContent === "Two handed" ||
        classItem.textContent === "Mace" ||
        classItem.textContent === "War Axe" ||
        classItem.textContent === "Health"
      ) {
        item.classList.add("item_card_warrior");
      } else if (
        classItem.textContent === "Light Armor" ||
        classItem.textContent === "Bow" ||
        classItem.textContent === "One handed" ||
        classItem.textContent === "Dagger" ||
        classItem.textContent === "Stamina"
      ) {
        item.classList.add("item_card_thief");
      } else if (
        classItem.textContent === "Staff" ||
        classItem.textContent === "Spell" ||
        classItem.textContent === "Robe" ||
        classItem.textContent === "Magicka"
      ) {
        item.classList.add("item_card_mage");
      }
    });
  });
}

styleByClass();

/* Función para filtrar el array principal de productos y añadirlos
al main según el botón que se pulse. */

/*ALL*/
function filteredAll() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  products.sort((a, b) => a.name.localeCompare(b.name));
  createShopCards(products);
  addStarsToProducts(products);
  styleByClass();
}

document.querySelector(".filter_all").addEventListener("click", filteredAll);

/*WARRIOR*/
const filterByWarrior = [];
for (const product of products) {
  if (
    product.class === "Heavy Armor" ||
    product.class === "Shield" ||
    product.class === "Two handed" ||
    product.class === "Mace" ||
    product.class === "War Axe" ||
    product.class === "Health"
  ) {
    filterByWarrior.push(product);
  }
}

function filteredWarrior() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  createShopCards(filterByWarrior);
  addStarsToProducts(filterByWarrior);
  styleByClass();
}

document
  .querySelector(".filter_warrior")
  .addEventListener("click", filteredWarrior);

/*THIEF*/
const filterByThief = [];
for (const product of products) {
  if (
    product.class === "Light Armor" ||
    product.class === "Bow" ||
    product.class === "One handed" ||
    product.class === "Dagger" ||
    product.class === "Stamina"
  ) {
    filterByThief.push(product);
  }
}

function filteredThief() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  createShopCards(filterByThief);
  addStarsToProducts(filterByThief);
  styleByClass();
}

document
  .querySelector(".filter_thief")
  .addEventListener("click", filteredThief);

/*MAGE*/
const filterByMage = [];
for (const product of products) {
  if (
    product.class === "Staff" ||
    product.class === "Spell" ||
    product.class === "Robe" ||
    product.class === "Magicka"
  ) {
    filterByMage.push(product);
  }
}

function filteredMage() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  createShopCards(filterByMage);
  addStarsToProducts(filterByMage);
  styleByClass();
}

document.querySelector(".filter_mage").addEventListener("click", filteredMage);

/*RATING*/
function filteredRating() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  products.sort((a, b) => b.stars - a.stars);
  createShopCards(products);
  addStarsToProducts(products);
  styleByClass();
}

document
  .querySelector(".filter_rating")
  .addEventListener("click", filteredRating);

/*PRICE*/
function filteredPrice() {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";
  products.sort((a, b) => b.price - a.price);
  createShopCards(products);
  addStarsToProducts(products);
  styleByClass();
}

document
  .querySelector(".filter_price")
  .addEventListener("click", filteredPrice);
