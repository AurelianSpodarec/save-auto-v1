const helperMath = {
    getRandomNumber(minValue:number, maxValue:number) {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }    
}

export default helperMath;
