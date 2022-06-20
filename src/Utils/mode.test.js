import { setMode, getMode } from "./mode"

describe("Testing mode", () => {

    it("setMode: return className for Theme ", () => {

        const darkMode= false;
        const focus= true;
        const shortBreak= false;
        const longBreak= false;

        const finalMode = setMode(darkMode, focus, shortBreak, longBreak);
        const expectedMode = "focus"

        expect(finalMode).toBe(expectedMode)
    })

    it("getMode: return Mode Name for Tab Title ", () => {

        const focus= false;
        const shortBreak= true;
        const longBreak= false;

        const finalMode = getMode(focus, shortBreak, longBreak);
        const expectedMode = "Short Break"

        expect(finalMode).toBe(expectedMode)
    })

})