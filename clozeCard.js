module.exports = 

//flashcard class
class flashcard {
    constructor(text, cloze) {

        var words = text.split(' ');
        //console.log(words);
        var remove = cloze.split(' ');
        var error = false;
        var found = null;
        var spliced = '';

        for (var i = 0; i < remove.length; i++) {
            //console.log("Remove["+i+"] = " + remove[i]);
            found = words.indexOf(remove[i]);
            if (found == -1)
                error = true;
            //console.log("index of remove =" + found);
            if (!error)
                words.splice(found, 1, ".....");
            //console.log(words);
        }
        //console.log("before join: " + words);
        if (error)
            console.log(cloze + " is not within " + text);
        else {
            spliced = words.join(' ');

            this.full = text;
            this.partial = spliced;
            this.answer = cloze;
        }
    } //end constructor
    display() {
        console.log("Full: " + this.full);
        console.log("Partial: " + this.partial);
        console.log("Removed: " + this.answer);
    } //end display
}; //end flashcard