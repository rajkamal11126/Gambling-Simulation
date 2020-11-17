class Gambling {
    STAKE = 100;
    BET = 1;
    randomCheck = () => {
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkWinOrLoose = () => {
        if(this.randomCheck() === 1){
            console.log("Win");
        }
        else{
            console.log("Loose");
        }
    }
}
module.exports = new Gambling();
