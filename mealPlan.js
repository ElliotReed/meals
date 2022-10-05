const mealPlan = [
  {
    monday: {
      breakfast: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        {
          eater: "eleanor",
          mealId: 6,
          location: "school",
        },
        { eater: "elliot", mealId: 6, },
      ],
      snack: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
      ],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16, location: "home",
        },
        { eater: "elliot", mealId: 16, location: "home", },
      ],
    },
    tuesday: {
      breakfast: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 10, location: "home", },
      ],
      snack: [
        {
          eater: "eleanor",
          mealId: 21, location: "home",
        },
      ],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16, location: "home",
        },
        { eater: "elliot", mealId: 16, location: "home", },
      ],
    },
    wednesday: {
      breakfast: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
      ],
      dinner: [
        {
          eater: "eleanor",
          mealId: 22, location: "home",
        },
        { eater: "elliot", mealId: 23, location: "home", },
      ],
    },
    thursday: {
      breakfast: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
      ],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16
        },
        { eater: "elliot", mealId: 16, location: "home", },
      ],
    },
    friday: {
      breakfast: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        {
          eater: "eleanor",
          mealId: 20,
          location: "school",
        },
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [
        {
          eater: "eleanor",
          mealId: 0, location: "home",
        },
      ],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16, location: "home",
        },
        { eater: "elliot", mealId: 16, location: "home", },
      ],
    },
    saturday: {
      breakfast: [
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16
        },
        { eater: "elliot", mealId: 16, location: "home", },
      ],
    },
    sunday: {
      breakfast: [
        { eater: "elliot", mealId: 0, location: "home", },
      ],
      lunch: [
        { eater: "elliot", mealId: 6, location: "home", },
      ],
      snack: [],
      dinner: [
        {
          eater: "eleanor",
          mealId: 16, location: "home",
        },
        { eater: "elliot", mealId: 16, location: "home", },
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