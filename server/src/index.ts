import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import dotenv, { config } from "dotenv";

async function init() {
	config({ path: "../../.env" });
	dotenv.config();

	mongoose.connect(process.env.MONGODB_URI!);

	const server = new ApolloServer({
		schema,
	});

	const { url } = await server.listen();
	console.log(`🚀 Server ready at ${url}`);
}

init();
