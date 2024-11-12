/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET (request: Request): Promise<Response> {
    return new Response("Hola Mundo, esta es la API Rest")
}