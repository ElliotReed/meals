import { meals } from "./meals.js"
import { mealPlan } from "./mealPlan.js"

const todaysMealsContainer = document.querySelector("[data-today]")

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weeks = 2;
const date = new Date();
let day = weekday[date.getDay()].toLowerCase();
const currentWeek = 0;
const currentWeekMeals = mealPlan[currentWeek];
const todaysMeals = currentWeekMeals[day];

function getMeal(mealId) {
  return meals.filter(meal => (meal.id == mealId))[0];
}

function getAvatarElement(mealPlanMeal) {
  const avatarElement = document.createElement('div');
  avatarElement.classList.add('avatar-container');
  const avatar = document.createElement('img');
  avatar.src = `images/${mealPlanMeal.eater}.jpg`;
  const eater = document.createElement('p');
  eater.textContent = mealPlanMeal.eater;
  avatarElement.append(avatar, eater);
  return avatarElement
}

function getLocationElement(mealPlanMeal) {
  const locationElement = document.createElement('p');
  locationElement.textContent = mealPlanMeal.location;
  const locationSpan = document.createElement('span');
  locationSpan.textContent = 'for';
  locationElement.prepend(locationSpan);
  return locationElement;
}

function getMealNameElement(meal) {
  const mealNameElement = document.createElement('h4');
  mealNameElement.classList.add('meal__name');
  mealNameElement.textContent = meal.name;
  return mealNameElement;
}

function getIngredientsComponent(meal) {
  const ingredientsElement = document.createElement('section');
  const ingredientsHeading = document.createElement('h5');
  const ingredientsList = document.createElement('ul');


  ingredientsElement.classList.add('ingredients');
  ingredientsHeading.classList.add('ingredients__heading');
  ingredientsHeading.textContent = "Ingredients:";

  meal.recipe.ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.append(li);
  });

  ingredientsElement.append(ingredientsHeading, ingredientsList);

  return ingredientsElement;
}

function getDirectionsComponent(meal) {
  const directionsSection = document.createElement('section');
  const directionsHeading = document.createElement('h5');
  const directionsList = document.createElement('ol');

  directionsSection.classList.add('directions');
  directionsHeading.classList.add('directions__heading');
  directionsHeading.textContent = "Directions:";

  meal.recipe.directions.map(direction => {
    const li = document.createElement('li');
    li.textContent = direction;
    directionsList.append(li);
  })

  directionsSection.append(directionsHeading, directionsList);

  return directionsSection;
}

function getMealSectionElement({ title } = {}) {
  const mealSectionElement = document.createElement('section');
  mealSectionElement.classList.add('meals-container');
  const sectionTitle = document.createElement('h3');
  sectionTitle.textContent = title;
  mealSectionElement.append(sectionTitle);
  return mealSectionElement;
}

function getMealCards(mealKey) {
  const mealCardsContainer = document.createElement('div');

  todaysMeals[mealKey].map(mealPlanMeal => {
    const meal = getMeal(mealPlanMeal.mealId);

    const card = document.createElement('div');
    card.classList.add('card');
    const cardLabelElement = document.createElement('div')
    cardLabelElement.classList.add('card__label')

    const avatarElement = getAvatarElement(mealPlanMeal);
    const mealNameElement = getMealNameElement(meal);
    const locationElement = getLocationElement(mealPlanMeal);
    const ingredientsElement = getIngredientsComponent(meal);
    const directionsElement = getDirectionsComponent(meal);

    cardLabelElement.append(mealNameElement, locationElement);

    card.append(avatarElement, cardLabelElement, ingredientsElement, directionsElement);
    mealCardsContainer.append(card);
  });

  return mealCardsContainer;
}

function buildMealSections(todaysMeals) {
  const mealKeys = Object.keys(todaysMeals);

  const mealSections = mealKeys.map(mealKey => {
    const mealSectionElement = getMealSectionElement({ title: mealKey });
    const mealCardsContainer = getMealCards(mealKey);
    mealSectionElement.append(mealCardsContainer);
    return mealSectionElement;
  });

  const sections = mealSections.map(section => todaysMealsContainer.append(section))
  return sections;

}

function fillTodaysMealContainer() {
  const dayElement = document.createElement('h2');
  dayElement.textContent = day;
  todaysMealsContainer.append(dayElement);
  buildMealSections(todaysMeals, todaysMealsContainer);
}

fillTodaysMealContainer()