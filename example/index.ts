import optional from "../src";

type User = {
  name?: {
    first: string;
  };
  id: number;
};

const user = {
  id: 1
};

const optionalUser = optional(user as User);
const firstName = optionalUser.name.first;
console.log(firstName); // undefined
