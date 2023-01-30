//This is Graphql Resolver File Where We Import All Function fro Other Respected Resolver File
const TestingResolver = require('./testingResolver')
module.exports = {
    Query:{
        testQueryResolver:(_,args) => TestingResolver.testQueryResolver(args),//In Every Resolver We Pass Arguments/Variables/Parameters from Schema to Resolvers through args
        inputExampleOne:(_,args) => TestingResolver.inputExampleOne(args),
        inputExampleTwo:(_,args) => TestingResolver.inputExampleTwo(args),
        outputExampleOne:(_,args) => TestingResolver.outputExampleOne(args),
        outputExampleTwo:(_,args) => TestingResolver.outputExampleTwo(args),
        outputExampleThree:(_,args) => TestingResolver.outputExampleThree(args),
        outputExampleFour:(_,args) => TestingResolver.outputExampleFour(args),
        fetchUserData:(_,args) => TestingResolver.fetchUserData(args)
    },
    Mutation:{
        testMutationResolver:(_,args) => TestingResolver.testMutationResolver(args),
        storeUserData:(_,args) => TestingResolver.storeUserData(args)
    }
}