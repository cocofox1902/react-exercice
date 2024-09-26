import React from "react";
import {
  PlanetWookiee,
  PersonWookiee,
  VehicleWookiee,
  FilmWookiee,
  StarshipWookiee,
} from "../typeWookiee";

const CardWookiee: React.FC<{ data: any; type: string }> = ({ data, type }) => {
  return (
    <>
      {data.map((cardData: any, index: number) => {
        switch (type) {
          case "planets":
            return (
              <PlanetCardWookiee
                key={index}
                planet={cardData as PlanetWookiee}
              />
            );
          case "people":
            return (
              <PersonCardWookiee
                key={index}
                person={cardData as PersonWookiee}
              />
            );
          case "vehicles":
            return (
              <VehicleCardWookiee
                key={index}
                vehicle={cardData as VehicleWookiee}
              />
            );
          case "films":
            return (
              <FilmCardWookiee key={index} film={cardData as FilmWookiee} />
            );
          case "starships":
            return (
              <StarshipCardWookiee
                key={index}
                starship={cardData as StarshipWookiee}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

const PersonCardWookiee: React.FC<{ person: PersonWookiee }> = ({ person }) => (
  <>
    <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
      <div className="px-6 py-4">
        <h2 className="text-4xl font-bold text-white">{person.whrascwo}</h2>
        <p className="text-gray-300">Acwoahrracao: {person.acwoahrracao} cm</p>
        <p className="text-gray-300">Scracc: {person.scracc} kg</p>
        <p className="text-gray-300">
          Acraahrc Oaooanoorc: {person.acraahrc_oaooanoorc}
        </p>
        <p className="text-gray-300">
          Corahwh Oaooanoorc: {person.corahwh_oaooanoorc}
        </p>
        <p className="text-gray-300">
          Worowo Oaooanoorc: {person.worowo_oaooanoorc}
        </p>
        <p className="text-gray-300">
          Rhahrcaoac Roworarc: {person.rhahrcaoac_roworarc}
        </p>
        <p className="text-gray-300">Rrrwowhwaworc: {person.rrwowhwaworc}</p>

        <DisplayLinks title="Wwahanscc" links={person.wwahanscc} />
        <DisplayLinks title="Howoacahoaanwoc" links={person.howoacahoaanwoc} />
        <DisplayLinks title="Caorarccacahakc" links={person.caorarccacahakc} />
      </div>
    </div>
  </>
);

const PlanetCardWookiee: React.FC<{ planet: PlanetWookiee }> = ({ planet }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{planet.whrascwo}</h2>
      <p className="text-gray-300">
        Rcooaoraaoahoowh Akworcahoowa: {planet.rcooaoraaoahoowh_akworcahoowa}
      </p>
      <p className="text-gray-300">
        Oorcrhahaoraan Akworcahoowa: {planet.oorcrhahaoraan_akworcahoowa} days
      </p>
      <p className="text-gray-300">
        Waahrascwoaoworc: {planet.waahrascwoaoworc}
      </p>
      <p className="text-gray-300">Oaanahscraaowo: {planet.oaanahscraaowo}</p>
      <p className="text-gray-300">Rrrcrahoahaoro: {planet.rrrcrahoahaoro}</p>
      <p className="text-gray-300">Aoworcrcraahwh: {planet.aoworcrcraahwh}</p>
      <p className="text-gray-300">
        Churcwwraoawo Ohraaoworc: {planet.churcwwraoawo_ohraaoworc}%
      </p>
      <p className="text-gray-300">
        Akooakhuanraaoahoowh: {planet.akooakhuanraaoahoowh}
      </p>

      <DisplayLinks title="Wwahanscc" links={planet.wwahanscc} />
      <DisplayLinks title="Rcwocahwawowhaoc" links={planet.rcwocahwawowhaoc} />
    </div>
  </div>
);

const VehicleCardWookiee: React.FC<{ vehicle: VehicleWookiee }> = ({
  vehicle,
}) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{vehicle.whrascwo}</h2>
      <p className="text-gray-300">Scoowawoan: {vehicle.scoowawoan}</p>
      <p className="text-gray-300">
        Scrawhhuwwraoaaohurcworc: {vehicle.scrawhhuwwraoaaohurcworc}
      </p>
      <p className="text-gray-300">
        Oaoocao: {vehicle.oaoocao_ahwh_oarcwowaahaoc} credits
      </p>
      <p className="text-gray-300">Anwowhrraoac: {vehicle.anwowhrraoac} m</p>
      <p className="text-gray-300">
        Scrak Cakwowowa: {vehicle.scrak_raaoscoocakacworcahwhrr_cakwowowa} km/h
      </p>
      <p className="text-gray-300">Oarcwooh: {vehicle.oarcwooh}</p>
      <p className="text-gray-300">
        Akraccwowhrrworcc: {vehicle.akraccwowhrrworcc}
      </p>
      <p className="text-gray-300">
        Oararcrroo Oaraakraoaahaoro: {vehicle.oararcrroo_oaraakraoaahaoro} kg
      </p>
      <p className="text-gray-300">
        Oaoowhchuscrarhanwoc: {vehicle.oaoowhchuscrarhanwoc}
      </p>
      <p className="text-gray-300">
        Howoacahoaanwo Oaanracc: {vehicle.howoacahoaanwo_oaanracc}
      </p>

      <DisplayLinks title="Wwahanscc" links={vehicle.wwahanscc} />
      <DisplayLinks title="Akahanooaoc" links={vehicle.akahanooaoc} />
    </div>
  </div>
);

const FilmCardWookiee: React.FC<{ film: FilmWookiee }> = ({ film }) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{film.aoahaoanwo}</h2>
      <p className="text-gray-300">
        Woakahcoowawo Ahwa: {film.woakahcoowawo_ahwa}
      </p>
      <p className="text-gray-300">Waahrcwooaaooorc: {film.waahrcwooaaooorc}</p>
      <p className="text-gray-300">Akrcoowahuoaworc: {film.akrcoowahuoaworc}</p>
      <p className="text-gray-300">
        Rcwoanworacwo Waraaowo: {film.rcwoanworacwo_waraaowo}
      </p>
      <p className="text-gray-300">
        Ooakwowhahwhrr Oarcraohan: {film.ooakwowhahwhrr_oarcraohan}
      </p>

      <DisplayLinks
        title="Oaacrarcraoaaoworcc"
        links={film.oaacrarcraoaaoworcc}
      />
      <DisplayLinks title="Akanrawhwoaoc" links={film.akanrawhwoaoc} />
      <DisplayLinks title="Caorarccacahakc" links={film.caorarccacahakc} />
      <DisplayLinks title="Howoacahoaanwoc" links={film.howoacahoaanwoc} />
      <DisplayLinks title="Cakwooaahwoc" links={film.cakwooaahwoc} />
    </div>
  </div>
);

const StarshipCardWookiee: React.FC<{ starship: StarshipWookiee }> = ({
  starship,
}) => (
  <div className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6 min-w-96">
    <div className="px-6 py-4">
      <h2 className="text-4xl font-bold text-white">{starship.whrascwo}</h2>
      <p className="text-gray-300">Scoowawoan: {starship.scoowawoan}</p>
      <p className="text-gray-300">
        Scrawhhuwwraoaaohurcworc: {starship.scrawhhuwwraoaaohurcworc}
      </p>
      <p className="text-gray-300">
        Oaoocao: {starship.oaoocao_ahwh_oarcwowaahaoc} credits
      </p>
      <p className="text-gray-300">Anwowhrraoac: {starship.anwowhrraoac} m</p>
      <p className="text-gray-300">
        Scrak Cakwowowa: {starship.scrak_raaoscoocakacworcahwhrr_cakwowowa} km/h
      </p>
      <p className="text-gray-300">Oarcwooh: {starship.oarcwooh}</p>
      <p className="text-gray-300">
        Akraccwowhrrworcc: {starship.akraccwowhrrworcc}
      </p>
      <p className="text-gray-300">
        Oararcrroo Oaraakraoaahaoro: {starship.oararcrroo_oaraakraoaahaoro} kg
      </p>
      <p className="text-gray-300">
        Oaoowhchuscrarhanwoc: {starship.oaoowhchuscrarhanwoc}
      </p>
      <p className="text-gray-300">
        Acroakworcwarcahhowo Rcraaoahwhrr:{" "}
        {starship.acroakworcwarcahhowo_rcraaoahwhrr}
      </p>
      <p className="text-gray-300">MGLT: {starship.MGLT}</p>
      <p className="text-gray-300">
        Caorarccacahak Oaanracc: {starship.caorarccacahak_oaanracc}
      </p>

      <DisplayLinks title="Wwahanscc" links={starship.wwahanscc} />
      <DisplayLinks title="Akahanooaoc" links={starship.akahanooaoc} />
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

export default CardWookiee;
