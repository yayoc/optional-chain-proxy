import { optional } from "../src";

describe("optional-chain", () => {
  describe("object", () => {
    it("should return undefined when accessing to undefined property at inner most level", () => {
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
    it("should return undefined when accessing to undefined property at top level", () => {
      const obj = {};
      const optionalObj = optional(obj) as any;
      expect(optionalObj.a).toBeUndefined();
    });
    it("should return undefined when accessing to undefined property at middle level", () => {
      const obj = {
        a: {
          b: {
            c: "bar"
          }
        }
      };
      const optionalObj = optional(obj) as any;
      expect(optionalObj.a.z).toBeUndefined();
    });
    it("should return undefined when accessing to unknown index at middle level", () => {
      const obj = { a: [] };
      const optionalObj = optional(obj) as any;
      expect(optionalObj.a[1]).toBeUndefined();
    });

    it("should return proper values", () => {
      const obj = {
        a: {
          b: {
            c: "foo",
            d: "bar"
          },
          e: [
            {
              f: 100
            }
          ]
        }
      };
      const optionalObj = optional(obj);
      expect(optionalObj.a.b.c).toBe("foo");
      expect(optionalObj.a.b.d).toBe("bar");
      expect(optionalObj.a.e[0].f).toBe(100);
    });
  });
  describe("array", () => {
    it("should return undefined when accessing to unknown index", () => {
      const arr = {
        a: [{ b: "foo" }]
      };
      const optionalArr = optional(arr);
      expect(optionalArr[10].b).toBeUndefined();
    });
    it("should return undefined when accessing undefined property", () => {
      const arr = [];
      const optionalArr = optional(arr);
      expect(optionalArr[1]).toBeUndefined();
    });
  });
});
