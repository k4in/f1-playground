import type { Team } from "./teams";

export type DriverStatus = "hasContract" | "active" | "inactive" | "out" | "youth";

export type Driver = {
  name: string; // full name
  birthday: string; // "iso format"
  currentTeam: Team["id"]; // current team id - must be a valid team id
  nationality: string; // name of the country
  flag: string; // use the flag emoji of the drivers country
  status: DriverStatus;
};

export const drivers: Driver[] = [
  // McLaren
  {
    name: "Lando Norris",
    birthday: "1999-11-13",
    currentTeam: "mclaren",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    status: "hasContract",
  },
  {
    name: "Oscar Piastri",
    birthday: "2001-04-06",
    currentTeam: "mclaren",
    nationality: "Australia",
    flag: "🇦🇺",
    status: "hasContract",
  },

  // Red Bull
  {
    name: "Max Verstappen",
    birthday: "1997-09-30",
    currentTeam: "redbull",
    nationality: "Netherlands",
    flag: "🇳🇱",
    status: "hasContract",
  },
  {
    name: "Isack Hadjar",
    birthday: "2004-09-28",
    currentTeam: "redbull",
    nationality: "France",
    flag: "🇫🇷",
    status: "active",
  },

  // Ferrari
  {
    name: "Charles Leclerc",
    birthday: "1997-10-16",
    currentTeam: "ferrari",
    nationality: "Monaco",
    flag: "🇲🇨",
    status: "hasContract",
  },
  {
    name: "Lewis Hamilton",
    birthday: "1985-01-07",
    currentTeam: "ferrari",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    status: "active",
  },

  // Mercedes
  {
    name: "George Russell",
    birthday: "1998-02-15",
    currentTeam: "mercedes",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    status: "hasContract",
  },
  {
    name: "Kimi Antonelli",
    birthday: "2007-08-12",
    currentTeam: "mercedes",
    nationality: "Italy",
    flag: "🇮🇹",
    status: "active",
  },

  // Aston Martin
  {
    name: "Fernando Alonso",
    birthday: "1981-07-29",
    currentTeam: "astonmartin",
    nationality: "Spain",
    flag: "🇪🇸",
    status: "hasContract",
  },
  {
    name: "Lance Stroll",
    birthday: "1998-10-29",
    currentTeam: "astonmartin",
    nationality: "Canada",
    flag: "🇨🇦",
    status: "active",
  },

  // Alpine
  {
    name: "Pierre Gasly",
    birthday: "1996-02-07",
    currentTeam: "alpine",
    nationality: "France",
    flag: "🇫🇷",
    status: "active",
  },
  {
    name: "Franco Colapinto",
    birthday: "2003-05-27",
    currentTeam: "alpine",
    nationality: "Argentina",
    flag: "🇦🇷",
    status: "active",
  },

  // Williams
  {
    name: "Carlos Sainz",
    birthday: "1994-09-01",
    currentTeam: "williams",
    nationality: "Spain",
    flag: "🇪🇸",
    status: "active",
  },
  {
    name: "Alexander Albon",
    birthday: "1996-03-23",
    currentTeam: "williams",
    nationality: "Thailand",
    flag: "🇹🇭",
    status: "active",
  },

  // Racing Bulls
  {
    name: "Liam Lawson",
    birthday: "2002-02-11",
    currentTeam: "racingbulls",
    nationality: "New Zealand",
    flag: "🇳🇿",
    status: "active",
  },
  {
    name: "Arvid Lindblad",
    birthday: "2007-08-01",
    currentTeam: "racingbulls",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    status: "active",
  },

  // Audi
  {
    name: "Nico Hulkenberg",
    birthday: "1987-08-19",
    currentTeam: "audi",
    nationality: "Germany",
    flag: "🇩🇪",
    status: "active",
  },
  {
    name: "Gabriel Bortoleto",
    birthday: "2004-10-14",
    currentTeam: "audi",
    nationality: "Brazil",
    flag: "🇧🇷",
    status: "active",
  },

  // Haas
  {
    name: "Esteban Ocon",
    birthday: "1996-09-17",
    currentTeam: "haas",
    nationality: "France",
    flag: "🇫🇷",
    status: "active",
  },
  {
    name: "Oliver Bearman",
    birthday: "2005-05-08",
    currentTeam: "haas",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    status: "active",
  },

  // Cadillac
  {
    name: "Sergio Perez",
    birthday: "1990-01-26",
    currentTeam: "cadillac",
    nationality: "Mexico",
    flag: "🇲🇽",
    status: "active",
  },
  {
    name: "Valtteri Bottas",
    birthday: "1989-08-28",
    currentTeam: "cadillac",
    nationality: "Finland",
    flag: "🇫🇮",
    status: "active",
  },
];
