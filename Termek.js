class Termek{
    constructor(adat, szuloElem){
        this.#adat = adat;
        szuloElem.append(`<div class ="Termekek">
        <p>${adat.nev}</p><p>${adat.fajta}</p><p>${adat.ar}</p><button type="button" class="btn btn-primary">Hozzaad</button></div>`);
        this.#buttonELEM =("button");
        this.#buttonELEM.on("click", () =>{
        this.#allapot = true;
        this.elem.on("click",()=>{
         if(this.#allapot){
            this.esemenytrigger()
         }   
         this.#allapot = false;   
            
        })
        })
    }
    esemenyTrigger(){
        console.log("trigger",this.button)
        const esemeny = new CustomEvent("elemKattintas",{detail: this});
        window.dispatchEvent(esemeny);
    }
}

export default Termek;
