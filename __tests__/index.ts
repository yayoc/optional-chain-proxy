import { optional } from "../src";

describe("optional-chain", () => {
  describe("object", () => {
    it("should return undefined when accessing undefined property", () => {
      const obj = {
        a: {
          b: {
            c: "foo"
          }
        }
      };
      const optionalObj = optional(obj);
      expect((optionalObj.a.b as any).d).toBeUndefined();
    });
  });
  describe("array", () => {
    it("should return undefined when accessing undefined property", () => {
      const arr = {
        a: [{ b: "foo" }]
      };
      const optionalArr = optional(arr);
      expect(optionalArr[10].b).toBeUndefined();
    });
  });
});
