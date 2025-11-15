type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;
type WithOutStock = Omit<Product, "color">;
type ProductWithColor = Required<Product>;

const ProductWithColor = {
  id: 222,
  name: "Bike",
  price: "220000 Tk",
  stock: 65456,
  color: "Black",
};

type OptionalProduct = Partial<Product>;
type ProductReadonly = Readonly<Product>;
const emptyObj: Record<string, unknown> = {};
const Product1 = {
  id: 2655,
  name: "Car",
  price: "2500000",
};
