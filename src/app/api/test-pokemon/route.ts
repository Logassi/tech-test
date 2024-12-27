import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
let pokemons = [];

export async function GET() {
  try {
    const response = await fetch(DATA_SOURCE_URL);

    const data = await response.json();
    pokemons = data["results"];

    //   return NextResponse.json(data);
    return NextResponse.json(pokemons);
  } catch (error) {
    console.log("Failed to fetch Pokemon : ", error);
    return;
  }
}
