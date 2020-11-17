class Gambling {

    // To check random value
    randomCheck = () => {
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    // To check win or loose
    checkWinOrLoose = () => {

        //local variables
        let STAKE = 100;
        let BET = 1;
        let lossLimit = STAKE / 2;
        let winLimit = STAKE + lossLimit;
        while (STAKE > lossLimit && STAKE < winLimit) {
            if (this.randomCheck() === 1) {
                STAKE = STAKE + BET;
            }
            else {
                STAKE = STAKE - BET;
            }
        }
        return STAKE;
    }
}
module.exports = new Gambling();
