const typeDefs = require('./src/api/graphql/Schemas/index') //Graphql Schema File
const resolvers = require('./src/api/graphql/Resolvers/index') //Graphql Resolver File
const cors = require('cors')
const express = require('express')
const { ApolloServer} = require('apollo-server-express'); //Graphql Apollo Server Express
const app = express();
const mongoose = require('mongoose')
const key = require('./config/keys') //Importing MongoDB URI
mongoose.set({strictQuery:true})
//Connecting MongoDB
mongoose.connect(key.URI,{useUnifiedTopology:true,useNewUrlParser:true},(error) => {
    if(error){
        throw error
    }
    console.log("MongoDB CONNECTED")
})
//Initiate Graphql Server Function
async function startServer() {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    await server.start();
    app.use(cors())
    server.applyMiddleware({ app });
  
    await new Promise(r => app.listen({ port: 4000 }, r).on('connection',(socket) => socket.setTimeout(1000*60*10)));
  
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  }
  
  startServer();