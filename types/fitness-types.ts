export type FClass = {
  name: string;
  startsAt: string;
  duration: number;
};

export type FutureClasses = Required<{
  [K in keyof FClass as K extends "startsAt" ?  "willStartsAt" : K]: FClass[K];
}>;

export type CurrClient = {
  name: string;
  age: number | "-";
  gender: "male" | "female" | "test";
  timeLeft: string;
};

export type ExClient = Omit<CurrClient, "timeLeft"> & { makeCallFor: Date };
export type FutureClient = Pick<CurrClient, "name"> & { makeCallFor: Date };

export type FitnessClub = Required<{
  clubName: string;
  location: string;
  classes: FClass[];
  futureClasses: FutureClasses[];
  currClients: CurrClient[];
  exClients: ExClient[];
  futureClients: FutureClient[];
}>;

