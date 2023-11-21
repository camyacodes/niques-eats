require("dotenv").config();
const db = require("../config/connection");
const { User, Product, Order, DishType, ServingTime } = require("../models");
const { faker } = require("@faker-js/faker");

db.once("open", async () => {
  await User.deleteMany();

  // create user data
  const userData = [];
  // TO-DO ADD FIRST NAME LAST NAME
  for (let i = 0; i < 10; i += 1) {
    const first = faker.person.firstName();
    const last = faker.person.lastName();
    const username = faker.internet.userName({
      firstName: first,
      lastName: last,
    });
    const email = faker.internet.email({
      firstName: first,
      lastName: last,
    });
    const password = faker.internet.password();
    userData.push({ username, email, password });
  }

  const createdUsers = await User.insertMany(userData);

  console.log("users seeded");

  await DishType.deleteMany();

  const dishTypes = await DishType.insertMany([
    { name: "Entree" },
    { name: "Side" },
    { name: "Drink" },
    { name: "Dessert" },
  ]);
  console.log("Dish Types seeded");

  await ServingTime.deleteMany();

  const servingTimes = await ServingTime.insertMany([
    { name: "Brunch" },
    { name: "Dinner" },
  ]);
  console.log("Serving Times seeded");

  // await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { dishType: "Entree", servingTime: "Brunch" },
  //   { dishType: "Side", servingTime: "Brunch" },
  //   { dishType: "Drink", servingTime: "Brunch" },
  //   { dishType: "Entree", servingTime: "Dinner" },
  //   { dishType: "Side", servingTime: "Dinner" },
  //   { dishType: "Dessert", servingTime: "Dinner" },
  //   { dishType: "Drink", servingTime: "Dinner" },
  // ]);

  // console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    // BRUNCH Entree
    {
      name: "Salmon Croquettes",
      description: "Crispy bites with savory salmon twist",
      image: "salmon_croquette.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 17,
      quantity: 16,
    },
    {
      name: "Shrimp and Grits",
      description: "Southern delight with creamy grits",
      image: "shrimp-n-grits.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 18,
      quantity: 10,
    },
    {
      name: "Chicken and Waffles",
      description: "Crispy chicken on fluffy waffles",
      image: "chicken-waffle.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 15,
      quantity: 45,
    },
    {
      name: "Strawberry Cheesecake Stuffed French Toast",
      description: " Indulgent French toast with strawberry cheesecake",
      image: "Strawberry-Cheesecake-Stuffed-French-Toast.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 13,
      quantity: 45,
    },
    {
      name: "Steak and Eggs",
      description: "Hearty breakfast with succulent steak",
      image: "steak-n-egg.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 18,
      quantity: 45,
    },
    {
      name: "Breakfast Platter",
      description: "Sausage, bacon, eggs for fulfilling breakfast",
      image: "breakfast-platter.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 15,
      quantity: 10,
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes, a classic breakfast favorite",
      image: "pancakes.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[0]._id,
      price: 12,
      quantity: 10,
    },

    // BRUNCH SIDES
    {
      name: "Home Fries",
      description: "Crispy and seasoned potato delight",
      image: "home-fries.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 6,
      quantity: 10,
    },
    {
      name: "Fresh Fruit Cup",
      description: "Refreshing blend of seasonal fruits",
      image: "fruit-cup.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 4,
      quantity: 10,
    },
    {
      name: "Bacon",
      description: "Bacon fried to crispy perfection",
      image: "bacon.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 4,
      quantity: 10,
    },
    {
      name: "Biscuit",
      description: "Buttery and flaky, a comforting side",
      image: "Biscuits.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Parfait",
      description: "Layers of goodness with yogurt and granola",
      image: "parfaits.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 4,
      quantity: 10,
    },
    {
      name: "Sausage",
      description: "Turkey sausage grilled to perfection",
      image: "sausage.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[0]._id,
      price: 4,
      quantity: 10,
    },

    // BRUNCH DRINKS
    {
      name: "Apple Juice",
      description: "Apple Juice",
      image: "apple-juice.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Orange Juice",
      description: "Orange Juice",
      image: "orange-juice.png",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Lemonade",
      description: "Lemonade",
      image: "lemonade.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Ice Tea",
      description: "Ice Tea",
      image: "ice-tea.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Water Bottle",
      description: "Spring Water Bottle",
      image: "water.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[0]._id,
      price: 3,
      quantity: 10,
    },

    // BRUNCH DESSERTS
    {
      name: "Orange Roll",
      description: "Zesty citrus bliss in every bite.",
      image: "orange-roll.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[0]._id,
      price: 5,
      quantity: 15,
    },
    {
      name: "Coffee Cake",
      description: "Rich, moist, cinnamon-spiced delight.",
      image: "coffee-cake.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[0]._id,
      price: 4,
      quantity: 15,
    },
    {
      name: "Blueberry Scone",
      description: "Deliciously tender, bursting with blueberries.",
      image: "blueberry-scone.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[0]._id,
      price: 6,
      quantity: 15,
    },

    // DINNER Entree
    {
      name: "Gumbo",
      description: "Hearty and flavorful Cajun stew",
      image: "gumbo.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 21,
      quantity: 10,
    },
    {
      name: "Crab Stuffed Salmon",
      description: "Elegant salmon stuffed with crab",
      image: "crab-stuffed-salmon.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 25,
      quantity: 10,
    },
    {
      name: "Tuscan Shrimp Alfredo",
      description: "Creamy pasta with succulent shrimp",
      image: "tuscan-shrimp-alfredo.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 27,
      quantity: 10,
    },
    {
      name: "Rib-eye Steak",
      description: "Juicy steak grilled to perfection",
      image: "rib-eye-steak.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 27,
      quantity: 10,
    },
    {
      name: "Loaded Baked Potatoes",
      description: "Baked potatoes loaded with toppings",
      image: "loaded-baked-potato.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 10,
    },
    {
      name: "Pulled Pork Sandwich",
      description: "Tender pulled pork in savory sandwich",
      image: "pulled-pork-sandwich.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 23,
      quantity: 10,
    },
    {
      name: "Chicken Bacon Ranch Flatbread",
      description: " Flavorful flatbread with chicken and bacon",
      image: "chicken-bacon-ranch-flatbread.jpg",
      dishType: dishTypes[0]._id,
      servingTime: servingTimes[1]._id,
      price: 24,
      quantity: 10,
    },

    // DINNER SIDES
    {
      name: "Mac n Cheese",
      description: " Classic comfort, cheesy macaroni goodness",
      image: "mac-n-cheese.png",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[1]._id,
      price: 5,
      quantity: 15,
    },
    {
      name: "Grilled Brocolli",
      description: "Nutritious broccoli grilled to perfection",
      image: "brocolli.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[1]._id,
      price: 7,
      quantity: 15,
    },
    {
      name: "Mashed Potatoes",
      description: "Creamy and buttery comfort classic",
      image: "mashed-potatoes.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[1]._id,
      price: 5,
      quantity: 15,
    },
    {
      name: "Ceasar Sald",
      description: "Fresh and crisp with tangy dressing",
      image: "ceasar-salad.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[1]._id,
      price: 6,
      quantity: 15,
    },
    {
      name: "Brussel Sprouts",
      description: "Roasted with savory, crispy exterior",
      image: "brussel-sprouts.jpg",
      dishType: dishTypes[1]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 15,
    },

    // DINNER DESSERTS
    {
      name: "Red Velvet Cake",
      description: "Rich and velvety dessert delight",
      image: "Red-Velvet.png",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 15,
    },
    {
      name: "Chocolate Brownie",
      description: "Fudgy chocolatey brownie, sweet treat",
      image: "chocolate-brownie.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 15,
    },
    {
      name: "Beignets",
      description: " Light and fluffy New Orleans pastry",
      image: "beignets.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[1]._id,
      price: 6,
      quantity: 15,
    },
    {
      name: "Cheesecake bites",
      description: "Bite-sized delights for sweet indulgence",
      image: "strawberry-cheese-cake-bites.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 15,
    },
    {
      name: "Nutella Crossaint Bread Pudding",
      description: "Irresistible bread pudding infused with Nutella",
      image: "nutella-crossaint-bread-pudding.jpg",
      dishType: dishTypes[3]._id,
      servingTime: servingTimes[1]._id,
      price: 6,
      quantity: 15,
    },

    // DINNER DRINKS
    {
      name: "Ice Tea",
      description: "Ice Tea",
      image: "ice-tea.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[1]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Water Bottle",
      description: "Spring Water Bottle",
      image: "water.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[1]._id,
      price: 3,
      quantity: 10,
    },
    {
      name: "Arnold Palmer",
      description: "Refreshing iced tea and lemonade blend",
      image: "arnold-palmer-drink.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 10,
    },
    {
      name: "Strawberry Limeade",
      description: "Zesty limeade with fresh strawberry burst",
      image: "strawberry-limemade.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[1]._id,
      price: 5,
      quantity: 10,
    },
    {
      name: "Shirley Temple",
      description: "Sweet and fizzy mocktail delight",
      image: "shirley-temple.jpg",
      dishType: dishTypes[2]._id,
      servingTime: servingTimes[1]._id,
      price: 8,
      quantity: 10,
    },
  ]);

  console.log("products seeded");

  await Order.deleteMany();

  const orders = await Order.insertMany([
    {
      username: createdUsers[3].username,
      address: "123 jefferson lane",
      address2: "Apt 2",
      email: createdUsers[3].email,
      firstName: "Test",
      city: "Orlando",
      state: "Florida",
      lastName: "testlast",
      phone: "5555555555",
      zipCode: "32697",
      products: [
        products[0]._id,
        products[6]._id,
        products[3]._id,
        products[7]._id,
      ],
      total: "33",
    },
    {
      username: createdUsers[0].username,
      address: "456 jefferson lane",
      address2: "Apt 6",
      email: createdUsers[0].email,
      firstName: "Test",
      city: "Orlando",
      state: "Florida",
      lastName: "testlast",
      phone: "5555555555",
      zipCode: "32697",
      products: [products[1]._id, products[5]._id],
      total: "15",
    },
  ]);

  await User.updateOne(
    { username: createdUsers[3].username },
    { $push: { orders: orders[0]._id } }
  );

  await User.updateOne(
    { username: createdUsers[0].username },
    { $push: { orders: orders[1]._id } }
  );

  console.log("orders seeded");

  process.exit();
});
