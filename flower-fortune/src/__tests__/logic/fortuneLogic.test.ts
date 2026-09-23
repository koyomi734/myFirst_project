import { FortuneLogic } from "../../logic/fortuneLogic";

describe("fortuneLogic test", () => {
    const fortuneLogic = new FortuneLogic();
    it("new fortuneLogic test", () => {
        expect(fortuneLogic).not.toBeNull();
    });

    it("fortuneLogic getter test",() => {
        expect(fortuneLogic.getFlowerName()).toBe("");
        expect(fortuneLogic.getFlowerLanguage()).toBe("");
    });

    it("allocateRandomFlowerLanguage test",() => {
        fortuneLogic.allocateRandomFlowerLanguage();
        expect(fortuneLogic.getFlowerName()).not.toBe("");
        expect(fortuneLogic.getFlowerLanguage()).not.toBe("");
    })
});