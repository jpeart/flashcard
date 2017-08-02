module.exports = 

//flashcard class
class flashcard {
    constructor(frontside, backside) {
        this.front = frontside;
        this.back = backside;
    } //end constructor
    display() {
        console.log("Front: " + this.front);
        console.log("Back: " + this.back);
    } //end display
}; //end flashcard