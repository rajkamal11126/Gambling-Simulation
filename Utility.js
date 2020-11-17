class Gambling {
    //constant variables
    STAKE = 100;
    BET = 1;
    win = 0;
    loss = 0;
    // To check random value
    randomCheck = () => {
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    // To check win or loose
    checkWinOrLoose = () => {
        
        //local variables
        let lossLimit = this.STAKE / 2;
        let winLimit = this.STAKE + lossLimit;
        while (this.STAKE > lossLimit && this.STAKE < winLimit) {
            if (this.randomCheck() === 1) {
                this.STAKE = this.STAKE + this.BET;
                this.win++;
            }
            else {
                this.STAKE = this.STAKE - this.BET;
                this.loss++;
            }
        }
        return this.STAKE;
    }

    //To calculate the loss and win amount for 20 days.
    amountWinOrLost = () => {
        for (let i = 0; i < 20; i++) {
            this.checkWinOrLoose();

        }
        console.log('Winning amount for 20 days: ' + this.win);
        console.log('loss amount for 20 days: ' + this.loss);
    }
}
module.exports = new Gambling();
