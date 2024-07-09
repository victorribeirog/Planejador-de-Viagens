import fastify from "fastify"
import cors from '@fastify/cors'
import { createTrip } from "./routes/create-trips"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trips";

const app = fastify()

app.register(cors,{
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)

app.listen({port: 3333}).then(()=>{
    console.log('Server running!')
})