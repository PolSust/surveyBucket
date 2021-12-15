import { JwtPayload, verify } from "jsonwebtoken";
import { Request } from "express";

export function decodedToken(
	req: Request,
	requireAuth = true
): string | JwtPayload | null {
	const authorisationHeader = req.headers.authorization;

	if (authorisationHeader) {
		const token = authorisationHeader.replace("Bearer", "");
		const decodedToken = verify(token, "asdasdasasd");
		return decodedToken;
	}

	if (requireAuth) {
		throw new Error("Authentication required");
	}

	return null;
}
