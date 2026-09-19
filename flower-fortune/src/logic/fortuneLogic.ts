import { flowerMap } from "../static/flowerMap";

/**
 * 花言葉をランダムに取り出す処理が入ったクラス
 */
class FortuneLogic {
    flowerName: string;
    flowerLanguage: string;
    flowerMap: Map<string, string>;
    
    constructor() {
        this.flowerName = '';
        this.flowerLanguage = '';
        this.flowerMap = flowerMap;
    }

    // setFlowerName(flowerName: string) {
    //     this.flowerName = flowerName;
    // }

    // setFlowerLanguage(flowerLanguage: string) {
    //     this.flowerLanguage = flowerLanguage;
    // }

    getFlowerName() {
        return this.flowerName;
    }

    getFlowerLanguage() {
        return this.flowerLanguage;
    }

    /**
     * discription:
     * ランダムな花言葉を選出
     * FortuneLogicの中のflowerLanguageとflowerNameに選出結果を設定する
     * @param: none;
     * @return: void;
     */
    allocateRandomFlowerLanguage(): void {
        const randomIndex = Math.floor(Math.random() * this.flowerMap.size);
        const mapKeys = [...this.flowerMap.keys()];
        const flowerName = mapKeys[randomIndex];
        let flowerLanguage = this.flowerMap.get(flowerName);
        this.flowerName = flowerName;
        // this.flowerLanguage = flowerLanguage;
        if(flowerLanguage == undefined) {
            flowerLanguage = '';
        }
        this.flowerLanguage = flowerLanguage;
    }
}

export { FortuneLogic } ;