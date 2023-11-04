const mealPlan = [
  {
    sunday: {
      breakfast: [],
      lunch: [
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 12, location: "home",
        },
        { eater: "elliot", mealId: 12, location: "home", },
      ],
    },
    monday: {
      breakfast: [],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        {
          eater: "elliot",
          mealId: 10,
          location: 'home',
        },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 23, location: "home",
        },
        { eater: "elliot", mealId: 23, location: "home", },
      ],
    },
    tuesday: {
      breakfast: [],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [],
      dinner: [
        { eater: "elliot", mealId: 1, location: "home", },
      ],
    },
    wednesday: {
      breakfast: [],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 5, location: "home", },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 13, location: "home",
        },
        { eater: "elliot", mealId: 13, location: "home", },
      ],
    },
    thursday: {
      breakfast: [],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 4, location: "home", },
      ],
      snack: [],
      dinner: [

        { eater: "elliot", mealId: 11, location: "home", },
      ],
    },
    friday: {
      breakfast: [],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 2, location: "home", },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 17, location: "home",
        },
        { eater: "elliot", mealId: 17, location: "home", },
      ],
    },
    saturday: {
      breakfast: [],
      lunch: [
        { eater: "elliot", mealId: 4, location: "home", },
      ],
      snack: [],
      dinner: [
        { eater: "elliot", mealId: 1, location: "home", },
      ],
    },
  },
]

export { mealPlan };

// {
// breakfast: [0, 0, 0, 0, 0, 0, 0],
// lunch: [6, 14, 15, 2, 14, 0, 0, 6, 10, 15, 19, 18, 0, 0],
// snack: [0, 6, 7, 6, 7, 6, 0],
// dinner: [13, 0, 16, 0, 17, 0, 0, 12, 0, 16, 0, 17, 0, 0],
// }
// {

//   breakfast: [0, 0, 0, 0, 0, 0, 0],
//   lunch: [
//     {day: "Monday", mealId: 6},
//     14, 15, 2, 14, 0, 0, 6, 10, 15, 19, 18, 0, 0],
//     snack: [0, 6, 7, 6, 7, 6, 0],
//     dinner: [13, 0, 16, 0, 17, 0, 0, 12, 0, 16, 0, 17, 0, 0],
//  }