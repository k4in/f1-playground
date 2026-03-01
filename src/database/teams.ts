export type Team = {
  name: string; // full name of the team;
  id: string; // short name of the team, one word (f.e. "mercedes", "ferrari", etc)
};

export const teams: Team[] = [
  { name: "Mercedes-AMG PETRONAS F1 Team", id: "mercedes" },
  { name: "Oracle Red Bull Racing", id: "redbull" },
  { name: "Scuderia Ferrari", id: "ferrari" },
  { name: "McLaren Mastercard F1 Team", id: "mclaren" },
  { name: "Aston Martin Aramco F1 Team", id: "astonmartin" },
  { name: "Alpine F1 Team", id: "alpine" },
  { name: "Williams Racing", id: "williams" },
  { name: "Visa Cash App Racing Bulls F1 Team", id: "racingbulls" },
  { name: "Audi Revolut F1 Team", id: "audi" },
  { name: "TGR Haas F1 Team", id: "haas" },
  { name: "Cadillac", id: "cadillac" },
];
