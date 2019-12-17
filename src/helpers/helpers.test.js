
import { asyncThing } from "./helpers";


describe("asyncThing function", () => {
    it("eventually resolves to 7", async () => {
        const expected = 7;
        await asyncThing(Function.prototype).then(res => {
          expect(res).toBe(expected);   
        });
    });

    it("eventually calls the callback", () => {
        const spy = jest.fn();
        // spy(); 
        expect (spy).not.toBeCalled(); // this should pass
        asyncThing(Function.prototype).then(res => {
            expect(spy).toBeCalled(); //should pass
        });
    });
});

