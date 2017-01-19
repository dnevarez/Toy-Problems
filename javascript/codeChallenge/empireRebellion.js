// Alphabetize by the collection by each object name
// Return a collection of id's
// Append " - deceased" to the end of each object title
// Remove the first object in the collection
// Seperate the collection into two groups. Those loyal to the empire and those to the rebellion.

const collection = [
  { id: 1, name: "Han Solo", title: "Scruffy Looking Nerf Herder", allegiance: "rebellion" },
  { id: 2, name: "Darth Vader", title: "Sith Lord", allegiance: "empire" },
  { id: 3, name: "K-2SO", title: "Sass-bot", allegiance: "rebellion" },
  { id: 4, name: "Wilhuff Tarkin", title: "Grand Moff", allegiance: "empire" },
];

// Alphabetize by collection.name
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

collection.sort(compare)

// Return collection of id's
collection.map(x=> {return x.id})

// Append " - deceased" to the end of each object title
collection.forEach(x=> {return x.title += " - deceased"});

// Remove first object in collection
collection.shift();

// Seperate Collection into two groups. Returns an object.

const sep = c => {
  let rebellion = [],
      empire = [];
  c.forEach(x=> x.allegiance === 'rebellion' ? rebellion.push(x) : empire.push(x))
  return {
    rebellion: rebellion,
    empire: empire
  }
}

// This will keep the collection as an array of two arrays.
// const sep = c => {
//   let sepArr = [[],[]]
//   c.forEach(x=> x.allegiance === 'rebellion' ? sepArr[0].push(x) : sepArr[1].push(x))
//   return sepArr
// }


sep(collection)
