let anything: any;
anything: "Boka";
anything as string;

const kgToGmConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split("");
    return `Converted output is : ${Number(value) * 1000}`;
  }
};

const result1 = kgToGmConverter(5) as number;
console.log(result1);

const result2 = kgToGmConverter("5 kg") as string;
console.log(result2);
