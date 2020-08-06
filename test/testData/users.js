import faker from "faker";
const englishLevel = [
  "Zero",
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper intermediate",
  "Advanced",
  "Proficient",
];
const countryName = [
  "United States",
  "United Kingdom",
  "Ukraine",
  "Slovenia",
  "Netherlands",
  "Belarus",
];

const user = {
  newUser: {
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: "17775551122",
    about: faker.lorem.sentence(),
    goals: faker.lorem.sentence(),
    englishLevel: faker.random.arrayElement(englishLevel),
    countryName: faker.random.arrayElement(countryName),
  },

  learner: {
    email: "learner@qa6.us",
    password: "learner",
    firstName: "LearnerFirst",
    lastName: "LearnerLast",
  },
};
export default user;
