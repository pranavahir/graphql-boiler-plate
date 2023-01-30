//This is the Graphql Schema Files Where We Define Structure of Inputs(Parameter/Arguments/Variables) as well as Outputs.
/*
Graphql Schema Comments 

Single Line Comment 
-> # Comment1

Multiple Line Comment
"""
Comment1
Comment2
"""
*/

const { gql } = require("apollo-server-express");
module.exports = gql`
    type UserOutput{
        name:String
        age:String
    }
    type UserAddress{
        city:String
        state:String
    }
    type UserHobby{
        name:String
        description:String
    }
    type UserOutputDDeeplyNested{
        name:String
        age:Int
        address:UserAddress
        hobby:[UserHobby]
    }
    input UserInput{
        name:String
        age:Int
    }
    #Query -> For Fetching Data
    type Query{
        #Graphql Input Example 1 (We Can Define Directly)
        inputExampleOne(name:String,age:Int):String
        #Graphql Input Example 2 (We Can Nest it inside input Object)
        inputExampleTwo(userInput:UserInput):String
        #Graphql Output Example 1 (We Can Define Directly)
        outputExampleOne:String
        #Graphql Output Example 2 (We Can Nest it inside output Object)
        outputExampleTwo:UserOutput
        #Graphql Output Example 3 (Output Can also be in array)
        outputExampleThree:[UserOutput]
        #Graphql Output Example 4 (Output Can also be in Deeply Nested Way)
        outputExampleFour:UserOutputDDeeplyNested
        testQueryResolver:String
    }
    type Mutation{
        testMutationResolver:String
    }

`