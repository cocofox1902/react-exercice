import React from "react";
import { Planet, Person, Vehicle, Film, Starship } from "../type";

const Card: React.FC<{ data: any; type: string }> = ({ data, type }) => {
  return (
    <>
      {data.map((cardData: any, index: number) => {
        switch (type) {
          case "planets":
            return <PlanetCard key={index} planet={cardData as Planet} />;
          case "people":
            return <PersonCard key={index} person={cardData as Person} />;
          case "vehicles":
            return <VehicleCard key={index} vehicle={cardData as Vehicle} />;
          case "films":
            return <FilmCard key={index} film={cardData as Film} />;
          case "starships":
            return <StarshipCard key={index} starship={cardData as Starship} />;
          default:
            return null;
        }
      })}
    </>
  );
};

const PersonCard: React.FC<{ person: Person }> = ({ person }) => (
  <>
    <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
      <div className="px-6 py-4">
        <h2 className="text-4xl font-bold text-white">{person.name}</h2>
        <p className="text-gray-300">Height: {person.height} cm</p>
        <p className="text-gray-300">Mass: {person.mass} kg</p>
        <p className="text-gray-300">Hair Color: {person.hair_color}</p>
        <p className="text-gray-300">Skin Color: {person.skin_color}</p>
        <p className="text-gray-300">Eye Color: {person.eye_color}</p>
        <p className="text-gray-300">Birth Year: {person.birth_year}</p>
        <p className="text-gray-300">Gender: {person.gender}</p>

        <DisplayLinks title="Films" links={person.films} />
        <DisplayLinks title="Vehicles" links={person.vehicles} />
        <DisplayLinks title="Starships" links={person.starships} />
      </div>
    </div>
  </>
);

const PlanetCard: React.FC<{ planet: Planet }> = ({ planet }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{planet.name}</h2>
      <p className="text-gray-300">Rotation Period: {planet.rotation_period}</p>
      <p className="text-gray-300">
        Orbital Period: {planet.orbital_period} days
      </p>
      <p className="text-gray-300">Diameter: {planet.diameter}</p>
      <p className="text-gray-300">Climate: {planet.climate}</p>
      <p className="text-gray-300">Gravity: {planet.gravity}</p>
      <p className="text-gray-300">Terrain: {planet.terrain}</p>
      <p className="text-gray-300">Surface Water: {planet.surface_water}%</p>
      <p className="text-gray-300">Population: {planet.population}</p>

      <DisplayLinks title="Films" links={planet.films} />
      <DisplayLinks title="Residents" links={planet.residents} />
    </div>
  </div>
);

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{vehicle.name}</h2>
      <p className="text-gray-300">Model: {vehicle.model}</p>
      <p className="text-gray-300">Manufacturer: {vehicle.manufacturer}</p>
      <p className="text-gray-300">Cost: {vehicle.cost_in_credits} credits</p>
      <p className="text-gray-300">Length: {vehicle.length} m</p>
      <p className="text-gray-300">
        Max Speed: {vehicle.max_atmosphering_speed} km/h
      </p>
      <p className="text-gray-300">Crew: {vehicle.crew}</p>
      <p className="text-gray-300">Passengers: {vehicle.passengers}</p>
      <p className="text-gray-300">
        Cargo Capacity: {vehicle.cargo_capacity} kg
      </p>
      <p className="text-gray-300">Consumables: {vehicle.consumables}</p>
      <p className="text-gray-300">Vehicle Class: {vehicle.vehicle_class}</p>

      <DisplayLinks title="Films" links={vehicle.films} />
      <DisplayLinks title="Pilots" links={vehicle.pilots} />
    </div>
  </div>
);

const FilmCard: React.FC<{ film: Film }> = ({ film }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{film.title}</h2>
      <p className="text-gray-300">Episode ID: {film.episode_id}</p>
      <p className="text-gray-300">Director: {film.director}</p>
      <p className="text-gray-300">Producer: {film.producer}</p>
      <p className="text-gray-300">Release Date: {film.release_date}</p>
      <p className="text-gray-300">Opening Crawl: {film.opening_crawl}</p>

      <DisplayLinks title="Characters" links={film.characters} />
      <DisplayLinks title="Planets" links={film.planets} />
      <DisplayLinks title="Starships" links={film.starships} />
      <DisplayLinks title="Vehicles" links={film.vehicles} />
      <DisplayLinks title="Species" links={film.species} />
    </div>
  </div>
);

const StarshipCard: React.FC<{ starship: Starship }> = ({ starship }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{starship.name}</h2>
      <p className="text-gray-300">Model: {starship.model}</p>
      <p className="text-gray-300">Manufacturer: {starship.manufacturer}</p>
      <p className="text-gray-300">Cost: {starship.cost_in_credits} credits</p>
      <p className="text-gray-300">Length: {starship.length} m</p>
      <p className="text-gray-300">
        Max Speed: {starship.max_atmosphering_speed} km/h
      </p>
      <p className="text-gray-300">Crew: {starship.crew}</p>
      <p className="text-gray-300">Passengers: {starship.passengers}</p>
      <p className="text-gray-300">
        Cargo Capacity: {starship.cargo_capacity} kg
      </p>
      <p className="text-gray-300">Consumables: {starship.consumables}</p>
      <p className="text-gray-300">
        Hyperdrive Rating: {starship.hyperdrive_rating}
      </p>
      <p className="text-gray-300">MGLT: {starship.MGLT}</p>
      <p className="text-gray-300">Starship Class: {starship.starship_class}</p>

      <DisplayLinks title="Films" links={starship.films} />
      <DisplayLinks title="Pilots" links={starship.pilots} />
    </div>
  </div>
);

const DisplayLinks: React.FC<{ title: string; links: string[] }> = ({
  title,
  links,
}) => (
  <>
    {links.length > 0 && (
      <>
        <h3 className="font-bold mt-4 text-white">{title}</h3>
        <ul className="list-disc list-inside">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  </>
);

export default Card;
