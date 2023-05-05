import { OBJEKTUMLISTA } from "./adatok.js"
import Termek from "./Termek.js";

class Termekek {
    #kedvencek = []
    constructor() {
        console.log(OBJEKTUMLISTA);
        const SZULOELEM = $("article");
        for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
            const tl = new Termek(OBJEKTUMLISTA[index], SZULOELEM);
        }
        $(window).on("elemKattintas", (event) => {
            this.#kedvencek.push(event.detail);
            console.log(this.#kedvencek)
        }
        )
    }
}
export default Termekek;
