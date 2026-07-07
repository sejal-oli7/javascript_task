// const arr =["Sejal", "SIta"]

// console.log(arr[0])





// const arr =["Sejal", "SIta"]
// const [data1, data2]= arr;
// console.log(data1, data2)




  // Array of user objects
const usersArray = [
  {
    id: 1,
    name: "Sejal",
    role: "Admin",
    active: true
  },
  {
    id: 2,
    name: "Aarav",
    role: "Developer",
    active: true
  },
  {
    id: 3,
    name: "Priya",
    role: "Designer",
    active: false
  },
  {
    id: 4,
    name: "Rohan",
    role: "Tester",
    active: true
  },
  {
    id: 5,
    name: "Anisha",
    role: "Manager",
    active: false
  },
  {
    id: 6,
    name: "Suman",
    role: "Developer",
    active: true
  },
  {
    id: 7,
    name: "Nisha",
    role: "HR",
    active: true
  },
  {
    id: 8,
    name: "Kiran",
    role: "Support",
    active: false
  },
  {
    id: 9,
    name: "Bibek",
    role: "Intern",
    active: true
  },
  {
    id: 10,
    name: "Sita",
    role: "Developer",
    active: false
  }
];

// map() goes through each object in the array.
// "item" represents the current object.
const users = usersArray.map((item) => {
  // Return a NEW object.
  return {
    // Copy all existing properties from item.
    ...item,

    // Add a new property called city.
    city: "Chitwan"
  };
});

// Print the original array.
console.log("Original Array:");
console.log(usersArray);

// Print the new array.
console.log("\nNew Array:");
console.log(users);


const activeUsers = usersArray.reduce((count, user) => {
  if (user.active) {
    count++;
  }
  return count;
}, 0);

console.log("Active Users:", activeUsers);



// map, reuce,filter, find 