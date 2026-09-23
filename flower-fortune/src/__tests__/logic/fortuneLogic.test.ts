import { FortuneLogic } from "../../logic/fortuneLogic";

describe("fortuneLogic test", () => {
    it("new fortuneLogic test", () => {
        const fortuneLogic = new FortuneLogic();
        expect(fortuneLogic).not.toBeNull();
    });
});