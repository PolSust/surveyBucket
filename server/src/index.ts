import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import dotenv, { config } from "dotenv";
import { ExpressContext } from "apollo-server-express";

async function init(): Promise<void> {
	config({ path: "../../.env" });
	dotenv.config();

	mongoose.connect(process.env.MONGODB_URI!);

	const server = new ApolloServer({
		schema,
		context: ({ req, res }): ExpressContext => ({ req, res }),
	});

	const { url } = await server.listen();
	console.log(`🚀 Server ready at ${url}`);
}

init();
