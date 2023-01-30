const UserData = require('../../../model/UserData')
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
    },
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
    storeUserData: async (args) => {
        const userdata = new UserData({
            name: args.name,
            age: args.age,
            dob: args.dob,
            hobbies: [args.hobby],
            address: {
                city: args.city,
                state: args.state
            },
            familymembers: [
                {
                    relation: args.familymenberrelation,
                    name: args.familymembername
                }
            ]
        })
        const saveuserdata = await userdata.save()
        return saveuserdata
    },
    /*
    Query for storeUserData ->
mutation($age: Int, $city: String, $familymembername: String, $familymenberrelation: String, $hobby: String, $name: String, $state: String){
storeUserData(age: $age,city: $city,familymembername: $familymembername,familymenberrelation: $familymenberrelation,hobby: $hobby,name: $name,state: $state,){
    name
    isactive
    hobbies
    age
    address {
        city
        state
    }
    familymembers {
        name
        relation
    }
}
}
Variables for storeUserData -> 
{
"age": 24,
"city": "Mumbai",
"familymembername": "Jivraj",
"familymenberrelation": "father",
"hobby": "Cricket",
"name": "Pranav",
"state": "Maharashtra"
}
Output for storeUserData -> 
{
"data": {
"storeUserData": {
  "name": "Pranav",
  "isactive": true,
  "hobbies": [
    "Cricket"
  ],
  "age": 24,
  "address": {
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  "familymembers": [
    {
      "name": "Jivraj",
      "relation": "father"
    }
  ]
}
}
}
*/
    fetchUserData:async() => {
        const getalldata = await UserData.find()
        return getalldata
    }
        /*
    Query for fetchUserData ->
    query{
    fetchUserData {
        name
        age
        hobbies
        isactive
        address {
            city
            state
        }
        familymembers {
            name
            relation
        }
    }
}
    Variables for fetchUserData -> N/A
    Output for fetchUserData -> 
    {
  "data": {
    "fetchUserData": [
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      },
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      },
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      },
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      },
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      },
      {
        "name": "Pranav",
        "age": 24,
        "hobbies": [
          "Cricket"
        ],
        "isactive": true,
        "address": {
          "city": "Mumbai",
          "state": "Maharashtra"
        },
        "familymembers": [
          {
            "name": "Jivraj",
            "relation": "father"
          }
        ]
      }
    ]
  }
}
    */
}