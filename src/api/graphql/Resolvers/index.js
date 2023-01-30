//This is Graphql Resolver File Where We Import All Function fro Other Respected Resolver File
const TestingResolver = require('./testingResolver')
module.exports = {
    Query:{
        testQueryResolver:(_,args) => TestingResolver.testQueryResolver(args),
        inputExampleOne:(_,args) => TestingResolver.inputExampleOne(args),
        inputExampleTwo:(_,args) => TestingResolver.inputExampleTwo(args),
        outputExampleOne:(_,args) => TestingResolver.outputExampleOne(args),
        outputExampleTwo:(_,args) => TestingResolver.outputExampleTwo(args),
        outputExampleThree:(_,args) => TestingResolver.outputExampleThree(args),
        outputExampleFour:(_,args) => TestingResolver.outputExampleFour(args),
    },
    Mutation:{
        testMutationResolver:(_,args) => TestingResolver.testMutationResolver(args)
    }
}