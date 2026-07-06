const person = {
    name:'Sejal',
    age:20,
    address:{
        city: 'KTM',
        state:'chitwan'

    },
    rollno:60
};


const {name, age, ...rest} = person 
console.log(name)
console.log(rest)


// spread operator syntax and used in (...) 

// object copy in js search this important 