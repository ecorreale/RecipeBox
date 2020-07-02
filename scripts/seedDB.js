const mongoose = require('mongoose');
const db = require('../models');

var bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipebox', {
  useNewUrlParser: true,
});

const userRecipeSeed = [
  {
    firstname: 'test',
    lastname: 'tester',
    email: 'test@test.com',
    password: bcrypt.hashSync('12345678', 8),
    recipes: [
      {
        name: 'Rosemary Citrus Chicken',
        ingredients: [
          {
            amount: '2',
            name: 'Chicken breasts',
          },
          {
            amount: '2 Tbsp',
            name: 'Lemon juice',
          },
          {
            amount: '2 Tbsp',
            name: 'Lime juice',
          },
          {
            amount: '2 Tbsp',
            name: 'Orange juice',
          },
          {
            amount: '1 Tbsp',
            name: 'Oil',
          },
          {
            amount: '3 Tbsp',
            name: 'Rosemary',
          },
          {
            amount: 'Pinch',
            name: 'Salt',
          },
        ],
        preptime: '5 min',
        cooktime: '30 min',
        equipment: [
          {
            name: 'Small bowl',
          },
          {
            name: 'Whisk',
          },
          {
            name: 'Plastic freezer bag',
          },
          {
            name: 'Grill',
          },
          {
            name: 'Tongs',
          },
        ],
        directions: [
          {
            order: '1',
            direction:
              'Whisk together ingredients in a small bowl until combined',
          },
          {
            order: '2',
            direction:
              'Combine the marinade with the chicken in a freezer bag and toss until evenly coated. Remove extra air and seal.',
          },
          {
            order: '3',
            direction:
              'Refrigerate for anywhere between 30 minutes to one day before use.',
          },
          {
            order: '4',
            direction: 'Heat grill to medium-high',
          },
          {
            order: '5',
            direction:
              'Grill for 18 minutes, flipping halfway through, until cooked through (165 degrees).',
          },
        ],
        serving: '2',
      },
      {
        name: 'Applesauce',
        ingredients: [
          {
            amount: '12',
            name: 'Large Apples',
          },
        ],
        preptime: '1 hour',
        cooktime: '11 hours',
        equipment: [
          {
            name: 'Large crockpot',
          },
          {
            name: 'Large soup pot or water canner',
          },
          {
            name: 'Canning grips',
          },
          {
            name: 'Pint jars',
          },
          {
            name: 'Lids for jars',
          },
          {
            name: 'Bands for jars',
          },
          {
            name: 'Magnetic lid wand',
          },
          {
            name: 'Canning funnel',
          },
          {
            name: 'Immersion blender',
          },
        ],
        directions: [
          {
            order: '1',
            direction: 'Wash apples',
          },
          {
            order: '2',
            direction: 'Peel, quarter, and core apples',
          },
          {
            order: '3',
            direction: 'Place apple quarters in crockpot',
          },
          {
            order: '4',
            direction: 'Cook apples on low for 11 hours',
          },
          {
            order: '5',
            direction:
              'About an hour before the apples are done, hand wash the jars lids, and bands',
          },
          {
            order: '6',
            direction: 'Bring water in soup pot to a boil',
          },
          {
            order: '7',
            direction:
              'Add the jars to the boiling water using the canning grips and sanitize for 20 minutes',
          },
          {
            order: '8',
            direction:
              'Remove the jarsusing the canning grips and place upside down on clean towels to dry',
          },
          {
            order: '9',
            direction:
              'Add the bands and lids to the boiling water and sanitize for 10 minutes',
          },
          {
            order: '10',
            direction:
              'Use the magnetic lid wand to remove bands and lids and place on clean towels to dry',
          },
          {
            order: '11',
            direction: 'Turn off the crockpot',
          },
          {
            order: '12',
            direction: 'Use the immersion blender to puree the cooked apples',
          },
          {
            order: '13',
            direction:
              'Use the canning funnel and a large ladleto fill up the jars leaving a 1/2 inch head space at the top',
          },
          {
            order: '14',
            direction:
              'Wipe the top of each jar to make sure they are clean and top with a lid and band',
          },
          {
            order: '15',
            direction: 'Tighten band until finger tight',
          },
          {
            order: '16',
            direction:
              'Place jars in boiling water with canning grips (removing water as needed). Make sure that the water covers the jar completely. Depending on the size of the pot you may need to do half of the jars at a time',
          },
          {
            order: '17',
            direction: 'Boil jars for 20 minutes',
          },
          {
            order: '18',
            direction:
              'Remove the jars using the canning grips and place on a clean towel',
          },
          {
            order: '19',
            direction:
              'Do not move the jars for 12 to 24 hours. If the jars do not seal after an hour, place them in the refrigerator once they are cool. These will need to be used within 2 weeks',
          },
          {
            order: '20',
            direction: 'Store jars in a dry cool location for up to 1 year',
          },
        ],
        serving: 'Makes 6 pints - 24 servings (1/2 cup per serving)',
      },
    ],
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userRecipeSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
