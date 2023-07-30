export class Country {
  id: number;
  nom: string;
  population: number;
  superficie: string;
  continent: string;
  pib: number;
  image: string;

  constructor(id: number, nom: string, population: number, superficie: string, continent: string, pib: number, image: string) {
    this.id = id;
    this.nom = nom;
    this.population = population;
    this.superficie = superficie;
    this.continent = continent;
    this.pib = pib;
    this.image = image;
  }
}
