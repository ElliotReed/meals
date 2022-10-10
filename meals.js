const meals = [
  {
    id: 0,
    name: "Skip Meal",
    recipe: {
      ingredients: ["Nothing"],
      directions: ["Dont eat"],
    },
  },
  {
    id: 1,
    name: "Rice and Veggie Bowl",
    recipe: {
      ingredients: [
        "1/2 cup rice",
        "3/4 cup water",
        "2 cups veggies",
        "4 Ts. sauce",
        "3 shakes parmesean cheese",
      ],
      directions: [
        "Microwave rice and water for 8 minutes",
        "Add veggies, microwave for anoter 7 minutes",
        "Add sauce and cheese",
      ],
    },
  },
  {
    id: 2,
    name: "Oatmeal",
    recipe: {
      ingredients: ["Oats", "Fruit", "Brown Sugar", "Water"],
      directions: [
        "Mix oats and water. Ellie: 3/4 cup oats, 1 cup water. Daddy: 1 cup oats, 1 1/2 - 1 3/4 cup water",
        "Microwave for 2 min. 45 sec.",
        "Add fruit and brown sugar",
      ],
    },
  },
  {
    id: 3,
    name: "Nourish Bowl",
    recipe: {
      ingredients: [
        "Lettuce",
        "Bell Peppers",
        "Broccoli",
        "Cucumber",
        "Chicken",
        "Pineapple",
        "Peanuts",
      ],
      directions: ["Mix ingredients in a bowl"],
    },
  },
  {
    id: 4,
    name: "Chicken Wrap",
    recipe: {
      ingredients: ["Tortilla", "Chicken", "Lettuce", "Mustard"],
      directions: [],
    },
  },
  {
    id: 5,
    name: "Scrambled Eggs",
    recipe: {
      ingredients: ["4 Eggs", "Green Chile Sauce", "Cheese (50g)", "Yogurt", "Chips (20g)"],
      directions: [
        "Mix eggs in bowl with 3tbls water",
        "Microwave for 45 seconds, stir",
        "Microwave for 45 seconds, stir, add cheese",
        "Microwave for 45 seconds, stir",
        "Add Green Chiles",
        "Serve with yogurt and chips"
      ],
    },
  },
  {
    id: 6,
    name: "Rice Cakes with Peanut Butter",
    recipe: {
      ingredients: ["Rice cakes (2)", "Peanut butter", "Jelly", "Fruit cup", "Goldfish (20g)"],
      directions: ["Spread peanut butter and jelly on rice cakes"],
    },
  },
  {
    id: 7,
    name: "Cereal",
    recipe: {
      ingredients: ["Cereal", "Almond Milk", "Fruit"],
      directions: ["Mix ingredients"],
    },
  },
  {
    id: 8,
    name: "Daddy's Eggs",
    recipe: {
      ingredients: ["4 Eggs", "Black Beans", "Fruit", "Green Chile"],
      directions: [
        "Add 1 Tbl. water",
        "Microwave, stir and check every 45 seconds",
        "Mix in remaining ingredients",
      ],
    },
  },
  {
    id: 9,
    name: "Black Bean Veggie Burgers",
    recipe: {
      ingredients: [
        "2 Veggie Patties",
        "2 Tortillas",
        "Fruit",
        "Lettuce",
        "Chips (20 g)",
      ],
      directions: ["Microwave patties for 2:15 minutes", "Put on tortilla"],
    },
  },
  {
    id: 10,
    name: "Ramen Soup",
    recipe: {
      ingredients: [
        "Ramen Soup",
        "1/2 cups peas",
        "20 grams Crackers",
        "1 cup Water",
        "1 banana",
      ],
      directions: [
        "Microwave for 4:30 minutes",
        "Drain, stir in seasoning",
        "Add peas, stir",
        "Top with crackers",
        "Serve with banana"
      ],
    },
  },
  {
    id: 11,
    name: "Pasta",
    recipe: {
      ingredients: [
        "Spaghetti",
        "Bread",
        "Parmesean Cheese",
        "Garlic",
        "Dill Weed",
      ],
      directions: [
        "Microwave pasta for 15 minutes",
        "Strain and season",
        "add parmesean",
      ],
    },
  },
  {
    id: 12,
    name: "Mac & Cheese & Peas",
    recipe: {
      ingredients: ["2 cups Pasta shells", "1 cup Peas", "4 oz Cheese"],
      directions: [
        "Microwave pasta for 15 minutes",
        "Strain",
        "Put cheese in bowl and microwave for 1 minute",
        "Add pasta and stir",
        "Add peas and stir",
      ],
    },
  },
  {
    id: 13,
    name: "Canned Goodness",
    recipe: {
      ingredients: ["1 can goodness", "1 can goodness"],
      directions: ["Microwave pasta for 1.5 minutes"],
    },
  },
  {
    id: 14,
    name: "Salad",
    recipe: {
      ingredients: ["lettuce", "peas", "mini peppers", "hummus", "croutons"],
      directions: ["Put in bowl"],
    },
  },
  {
    id: 15,
    name: "Hot Dogs",
    recipe: {
      ingredients: [],
      directions: [],
    },
  },
  {
    id: 16,
    name: "Veggie Burgers",
    recipe: {
      ingredients: [
        "2 Veggie Patties",
        "Green Chile",
        "2 Buns",
        "Fruit",
        "Yogurt",
        "Lettuce",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patties for 2:15 minutes",
        "Put on tortilla",
      ],
    },
  },
  {
    id: 17,
    name: "Chimichangas",
    recipe: {
      ingredients: ["2 chimichangas", "Fruit", "Chips (20 g)"],
      directions: ["Microwave patties for 3:45 minutes"],
    },
  },
  {
    id: 18,
    name: "Cereal",
    recipe: {
      ingredients: ["Cereal"],
      directions: ["Put ceral and milk in bowl"],
    },
  },
  {
    id: 19,
    name: "Black Bean Wrap",
    recipe: {
      ingredients: ["2 tortillas", "Fruit", "Chips (20 g)"],
      directions: ["Microwave cheese for 1 minute"],
    },
  },
  {
    id: 20,
    name: "Turkey Sandwich with Chips",
    recipe: {
      ingredients: ["Bread (2 slices)", "Turkey (2 slices)", "Cheese (Pepperjack, 1 slice)", "Mustard", "Chips (20 g)", "Yoguhrt Raisins"],
      directions: ["Combine turkey, cheese and mustard on bread", "pack"],
    },
  },
  {
    id: 21,
    name: "Popcorn",
    recipe: {
      ingredients: ["Popcorn (1 bag)",],
      directions: ["Microwave for 2:20 seconds"],
    },
  },
  {
    id: 22,
    name: "Ellie's Nuggets",
    recipe: {
      ingredients: [
        "Chicken nuggets (10)",
        "Yogurt (activia)",
        "Sauce",
        "Salad (40g)",
        "Popcorn (1 bag)",
      ],
      directions: [
        "Microwave popcorn for 2:20 seconds",
        "Microwave nuggets for 3:30 minutes",
        "Serve with yogurt and salad"
      ],
    },
  },
  {
    id: 23,
    name: "Elliot's Nuggets",
    recipe: {
      ingredients: ["Chicken nuggets (15)", "Yogurt (activia)", "Sauce", "Salad (40g)", "Popcorn (1 bag)"],
      directions: ["Microwave popcorn for 2:20 seconds", "Microwave nuggets for 3:30 minutes", "Serve with yogurt and salad"],
    },
  },
  {
    id: 24,
    name: "Ellie's Veggie Burger",
    recipe: {
      ingredients: [
        "1 Griller Veggie Patty",
        "1 Bun",
        "Fruit",
        "Yogurt",
        "Pickle",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patty for 45 seconds, flip and 45 more",
        "Put burger on bun with condiments",
        "Serve with fruit & yogurt, pickle and chips",
      ],
    },
  },
  {
    id: 25,
    name: "Elliot's Veggie Burger",
    recipe: {
      ingredients: [
        "1 Black-bean Veggie Patty",
        "Green Chile",
        "1 Bun",
        "Pickle",
        "Fruit",
        "Yogurt",
        "Lettuce",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patty for 60 seconds, flip and 45 more",
        "Put burger on bun with green chile and lettuce",
        "Serve with fruit & yogurt, pickle and chips",
      ],
    },
  },
  {
    id: 26,
    name: "Ellie's canned goodness lunch",
    recipe: {
      ingredients: [
        "1 can goodnes",
        "1 bag fruit smiles",
      ],
      directions: [
        "Microwave according to directions",
        "Pack in thermos in insulated bag",
      ],
    },
  },
];

export { meals };