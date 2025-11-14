type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type PoshPeopleVehicle = {
  bike: string;
  car: string;
  jet: string;
};

type checkVehicle<T> = T extends keyof PoshPeopleVehicle ? true : false;
