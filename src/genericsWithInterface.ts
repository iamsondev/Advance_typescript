interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface smartWatchForJunior {
  heartRate: string;
  stopWatch: boolean;
}

interface smartWatchForSenior {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const juniorDeveloper: Developer<smartWatchForJunior> = {
  name: "Mr.junior",
  salary: 20000,
  device: {
    brand: "lenovo",
    model: "idea pad 320",
    releasedYear: "2018",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
  bike: null,
};
const seniorDeveloper: Developer<
  smartWatchForSenior,
  { brand: "yamaha"; engine: "150cc" }
> = {
  name: "Mr.Senior",
  salary: 200000,
  device: {
    brand: "lenovo",
    model: "idea pad 320",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
};
