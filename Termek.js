class Termek {
    #adat;
    #divElem;
    #buttonELEM;
    #allapot;
    constructor(adat, szuloElem) {
        this.#adat = adat;
        szuloElem.append(`<div class ="Termekek">
        <p>${adat.nev}</p><p>${adat.fajta}</p><p>${adat.ar}</p><button type="button" class="btn btn-primary">Hozzaad</button></div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#buttonELEM = this.#divElem.children("button");
        this.#buttonELEM.on("click", () => {
            this.#allapot = true;
            this.#buttonELEM.on("click", () => {
                if (this.#allapot) {
                    this.esemenyTrigger()
                    console.log(this.#allapot)
                }
                this.#allapot = false;
                console.log(this.#allapot)

            })
        })

    }
    setElem(adat) {
        this.buttonElem.html(adat);
    }
    esemenyTrigger() {
        const esemeny = new CustomEvent("elemKattintas", { detail: this.#adat.id });
        window.dispatchEvent(esemeny);
    }
}

export default Termek;
