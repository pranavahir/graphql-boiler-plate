module.exports = {
    testQueryResolver: () => {
        return "Test Query is Working Properly"
    },
    /*
        Query for testQueryResolver ->
        query{
            testQueryResolver
        }
        Variables for testQueryResolver -> N/A
        Output for testQueryResolver -> 
        {
         "data": {
            "testQueryResolver": "Test Query is Working Properly"
                }
        }
    */
    testMutationResolver: () => {
        return "Test Mutation is Working Properly"
    },
    /*
    Query for testMutationResolver ->
    mutation{
         testMutationResolver
        }
    Variables for testMutationResolver -> N/A
    Output for testMutationResolver -> 
    {
     "data": {
        "testMutationResolver": "Test Mutation is Working Properly"
    }
    }
    */
    inputExampleOne: (args) => {
        return `Inputs is name:${args.name},age:${args.age}`
    },
    /*
    Query for inputExampleOne ->
    query($name: String, $age: Int){
        inputExampleOne(name: $name,age: $age)
    }
    Variables for inputExampleOne -> 
    {
     "name": "Pranav",
    "age": 24
    }
    Output for inputExampleOne -> 
    {
        "data": {
            "inputExampleOne": "Inputs is name:Pranav,age:24"
        }
    }
    */
    inputExampleTwo: (args) => {
        return `Inputs is name:${args.userInput.name},age:${args.userInput.age}`
    },
    /*
    Query for inputExampleTwo ->
    query($userInput: UserInput){
    inputExampleTwo(userInput: $userInput)
    }
    Variables for inputExampleTwo -> 
    {
    "userInput": {
    "age":24,
    "name":"Pranav"
    }
    }
    Output for inputExampleTwo -> 
    {
    "data": {
    "inputExampleTwo": "Inputs is name:Pranav,age:24"
    }
    }
    */
    outputExampleOne: () => {
        return "This is a Simple String Output"
    },
    /*
    Query for outputExampleOne ->
    query{
    outputExampleOne
    }
    Variables for outputExampleOne -> N/A
    Output for outputExampleOne -> 
    {
    "data": {
    "outputExampleOne": "This is a Simple String Output"
    }
    }
    */
    outputExampleTwo: () => {
        return {
            name: "Pranav",
            age: 24
        }
    },
    /*
    Query for outputExampleTwo ->
    query{
    outputExampleTwo {
    age
    name
    }
    }
    Variables for outputExampleTwo -> N/A
    Output for outputExampleTwo -> 
    {
    "data": {
    "outputExampleTwo": {
    "age": "24",
    "name": "Pranav"
    }
    }
    }
    */
    outputExampleThree: () => {
        return [
            {
                name: "Test1",
                age: 22
            },
            {
                name: "Test2",
                age: 24
            }
        ]
    },
    /*
    Query for outputExampleThree ->
    query{
    outputExampleThree {
    age
    name
    }
    }
    Variables for outputExampleThree -> N/A
    Output for outputExampleThree -> 
    {
    "data": {
    "outputExampleThree": [
    {
    "age": "22",
    "name": "Test1"
    },
    {
    "age": "24",
    "name": "Test2"
    }
    ]
    }
    }
    */
    outputExampleFour: () => {
        return {
            name: "Pranav",
            age: 24,
            address: {
                city: "Mumbai",
                state: "Maharashtra"
            },
            hobby: [
                {
                    name: "Playing Cricket",
                    description: "I Love Playing Cricket"
                },
                {
                    name: "Progamming",
                    description: "I Love Progamming"
                }
            ]
        }
    }
    /*
    Query for outputExampleFour ->
    query{
    outputExampleFour {
    age
    name
    address {
    city
    state
    }
    hobby {
    name
    description
    }
    }
    }
    Variables for outputExampleFour -> N/A
    Output for outputExampleFour -> 
    {
    "data": {
    "outputExampleFour": {
    "age": 24,
    "name": "Pranav",
    "address": {
    "city": "Mumbai",
    "state": "Maharashtra"
    },
    "hobby": [
    {
    "name": "Playing Cricket",
    "description": "I Love Playing Cricket"
    },
    {
    "name": "Progamming",
    "description": "I Love Progamming"
    }
    ]
    }
    }
    }
    */
}