require('dotenv').config();
const db = require("../config/connection");
const { User, Product, Category, Order } = require("../models");
const { faker } = require("@faker-js/faker");

db.once("open", async () => {

	await User.deleteMany();

	// create user data
	const userData = [];
// TO-DO ADD FIRST NAME LAST NAME
	for (let i = 0; i < 10; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email({username});
		const password = faker.internet.password();
		userData.push({ username, email, password });
	}

	const createdUsers = await User.collection.insertMany(userData);

	console.log("users seeded");

	await Category.deleteMany();

	const categories = await Category.insertMany([
    { course: "Main Dishes", time: "Brunch" },
    { course: "Sides", time: "Brunch" },
    { course: "Drinks", time: "Brunch" },
    { course: "Main Dishes", time: "Dinner" },
    { course: "Sides", time: "Dinner" },
    { course: "Desserts", time: "Dinner" },
    { course: "Drinks", time: "Dinner" },
  ]);

	console.log("categories seeded");



	await Product.deleteMany();

	const products = await Product.insertMany([
		// BRUNCH MAIN DISHES
		{
			name: "Salmon Croquettes",
			description:
				"Crispy bites with savory salmon twist - Brunch",
			image: "salmon_croquette.jpg",
			category: categories[0],
			price: 17,
			quantity: 16,
		},
		{
			name: "Shrimp and Grits",
			description:
				"Southern delight with creamy grits - Brunch",
			image: "shrimp-n-grits.jpg",
			category: categories[0],
			price: 18,
			quantity: 10,
		},
		{
			name: "Chicken and Waffles",
			description:
				"Crispy chicken on fluffy waffles - Brunch",
			image: "chicken-waffle.jpg",
			category: categories[0],
			price: 15,
			quantity: 45,
		},
		{
			name: "Strawberry Cheesecake Stuffed French Toast",
			description:
				" Indulgent French toast with strawberry cheesecake - Brunch",
			image: "Strawberry-Cheesecake-Stuffed-French-Toast.jpg",
			category: categories[0],
			price: 13,
			quantity: 45,
		},
		{
			name: "Steak and Eggs",
			description:
				"Hearty breakfast with succulent steak - Brunch",
			image: "steak-n-egg.jpg",
			category: categories[0],
			price: 18,
			quantity: 45,
		},
		{
			name: "Breakfast Platter",
			description: "Sausage, bacon, eggs for fulfilling breakfast - Brunch",
			image: "breakfast-platter.jpg",
			category: categories[0],
			price: 15,
			quantity: 10,
		},
		{
			name: "Pancakes",
			description:
				"Fluffy pancakes, a classic breakfast favorite - Brunch",
			image: "pancakes.jpg",
			category: categories[0],
			price: 12,
			quantity: 10,
		},

		// BRUNCH SIDES
		{
			name: "Home Fries",
			description:
				"Crispy and seasoned potato delight - Brunch",
			image: "home-fries.jpg",
			category: categories[1],
			price: 6,
			quantity: 10,
		},
		{
			name: "Fresh Fruit Cup",
			description:
				"Refreshing blend of seasonal fruits - Brunch",
			image: "fruit-cup.jpg",
			category: categories[1],
			price: 4,
			quantity: 10,
		},
		{
			name: "Bacon",
			description: "Bacon fried to crispy perfection - Brunch",
			image: "bacon.jpg",
			category: categories[1],
			price: 4,
			quantity: 10,
		},
		{
			name: "Biscuit",
			description:
				"Buttery and flaky, a comforting side - Brunch",
			image: "Biscuits.jpg",
			category: categories[1],
			price: 3,
			quantity: 10,
		},
		{
			name: "Parfait",
			description:
				"Layers of goodness with yogurt and granola - Brunch",
			image: "parfaits.jpg",
			category: categories[1],
			price: 4,
			quantity: 10,
		},
		{
			name: "Sausage",
			description: "Turkey sausage grilled to perfection - Brunch",
			image: "sausage.jpg",
			category: categories[1],
			price: 4,
			quantity: 10,
		},

		// BRUNCH DRINKS
		{
			name: "Apple Juice",
			description: "Apple Juice - Brunch",
			image: "apple-juice.jpg",
			category: categories[2],
			price: 3,
			quantity: 10,
		},
		{
			name: "Orange Juice",
			description: "Orange Juice - Brunch",
			image: "orange-juice.png",
			category: categories[2],
			price: 3,
			quantity: 10,
		},
		{
			name: "Lemonade",
			description: "Lemonade - Brunch",
			image: "lemonade.jpg",
			category: categories[2],
			price: 3,
			quantity: 10,
		},
		{
			name: "Ice Tea",
			description: "Ice Tea - Brunch",
			image: "ice-tea.jpg",
			category: categories[2],
			price: 3,
			quantity: 10,
		},
		{
			name: "Water Bottle",
			description: "Spring Water Bottle - Brunch",
			image: "water.jpg",
			category: categories[2],
			price: 3,
			quantity: 10,
		},

		// DINNER MAIN DISHES
		{
			name: "Gumbo",
			description:
				"Hearty and flavorful Cajun stew - Dinner",
			image: "gumbo.jpg",
			category: categories[3],
			price: 21,
			quantity: 10,
		},
		{
			name: "Crab Stuffed Salmon",
			description:
				"Elegant salmon stuffed with crab - Dinner",
			image: "crab-stuffed-salmon.jpg",
			category: categories[3],
			price: 25,
			quantity: 10,
		},
		{
			name: "Tuscan Shrimp Alfredo",
			description:
				"Creamy pasta with succulent shrimp - Dinner",
			image: "tuscan-shrimp-alfredo.jpg",
			category: categories[3],
			price: 27,
			quantity: 10,
		},
		{
			name: "Rib-eye Steak",
			description:
				"Juicy steak grilled to perfection - Dinner",
			image: "rib-eye-steak.jpg",
			category: categories[3],
			price: 27,
			quantity: 10,
		},
		{
			name: "Loaded Baked Potatoes",
			description:
				"Baked potatoes loaded with toppings - Dinner",
			image: "loaded-baked-potato.jpg",
			category: categories[3],
			price: 8,
			quantity: 10,
		},
		{
			name: "Pulled Pork Sandwich",
			description:
				"Tender pulled pork in savory sandwich - Dinner",
			image: "pulled-pork-sandwich.jpg",
			category: categories[3],
			price: 23,
			quantity: 10,
		},
		{
			name: "Chicken Bacon Ranch Flatbread",
			description:
				" Flavorful flatbread with chicken and bacon - Dinner",
			image: "chicken-bacon-ranch-flatbread.jpg",
			category: categories[3],
			price: 24,
			quantity: 10,
		},

		// DINNER SIDES
		{
			name: "Mac n Cheese",
			description:
				" Classic comfort, cheesy macaroni goodness - Dinner",
			image: "mac-n-cheese.png",
			category: categories[4],
			price: 5,
			quantity: 15,
		},
		{
			name: "Grilled Brocolli",
			description:
				"Nutritious broccoli grilled to perfection - Dinner",
			image: "brocolli.jpg",
			category: categories[4],
			price: 7,
			quantity: 15,
		},
		{
			name: "Mashed Potatoes",
			description:
				"Creamy and buttery comfort classic - Dinner",
			image: "mashed-potatoes.jpg",
			category: categories[4],
			price: 5,
			quantity: 15,
		},
		{
			name: "Ceasar Sald",
			description:
				"Fresh and crisp with tangy dressing - Dinner",
			image: "ceasar-salad.jpg",
			category: categories[4],
			price: 6,
			quantity: 15,
		},
		{
			name: "Brussel Sprouts",
			description:
				"Roasted with savory, crispy exterior - Dinner",
			image: "brussel-sprouts.jpg",
			category: categories[4],
			price: 8,
			quantity: 15,
		},

		// DINNER DESSERTS
		{
			name: "Red Velvet Cake",
			description:
				"Rich and velvety dessert delight - Dinner",
			image: "Red-Velvet.png",
			category: categories[5],
			price: 8,
			quantity: 15,
		},
		{
			name: "Chocolate Brownie",
			description:
				"Fudgy chocolatey brownie, sweet treat - Dinner",
			image: "chocolate-brownie.jpg",
			category: categories[5],
			price: 8,
			quantity: 15,
		},
		{
			name: "Beignets",
			description:
				" Light and fluffy New Orleans pastry - Dinner",
			image: "beignets.jpg",
			category: categories[5],
			price: 6,
			quantity: 15,
		},
		{
			name: "Cheesecake bites",
			description:
				"Bite-sized delights for sweet indulgence - Dinner",
			image: "strawberry-cheese-cake-bites.jpg",
			category: categories[5],
			price: 8,
			quantity: 15,
		},
		{
			name: "Nutella Crossaint Bread Pudding",
			description:
				"Irresistible bread pudding infused with Nutella - Dinner",
			image: "nutella-crossaint-bread-pudding.jpg",
			category: categories[5],
			price: 6,
			quantity: 15,
		},

		// DINNER DRINKS
		{
			name: "Ice Tea",
			description: "Ice Tea - Dinner",
			image: "ice-tea.jpg",
			category: categories[6],
			price: 3,
			quantity: 10,
		},
		{
			name: "Water Bottle",
			description: "Spring Water Bottle - Dinner",
			image: "water.jpg",
			category: categories[6],
			price: 3,
			quantity: 10,
		},
		{
			name: "Arnold Palmer",
			description:
				"Refreshing iced tea and lemonade blend - Dinner",
			image: "arnold-palmer-drink.jpg",
			category: categories[6],
			price: 8,
			quantity: 10,
		},
		{
			name: "Strawberry Limeade",
			description:
				"Zesty limeade with fresh strawberry burst - Dinner",
			image: "strawberry-limemade.jpg",
			category: categories[6],
			price: 5,
			quantity: 10,
		},
		{
			name: "Shirley Temple",
			description:
				"Sweet and fizzy mocktail delight - Dinner",
			image: "shirley-temple.jpg",
			category: categories[6],
			price: 8,
			quantity: 10,
		},
	]);

  console.log("products seeded");
  
  await Order.deleteMany();

  const orders = await Order.insertMany([
	{
		address: "123 jefferson lane",
		address2: "Apt 2",
		email: "test@test.com",
		firstName: "Test",
		city: "Orlando",
		state: "Florida",
		lastName: "testlast",
		phone: "5555555555",
		zipCode: "32697",
		products: [
			"623fd7623abaf3b6fb149b40",
			"623fd7623abaf3b6fb149b41",
			"623fd7623abaf3b6fb149b43"
		  ],
		total: "33"
	},
]);

	console.log("orders seeded");



	process.exit();
});