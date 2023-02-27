// question 1//

function Instagram_post(Handle_of_the_author,content,An_image_link_posted_by_the_author_of_the_post,Number_of_views,Number_of_likes){
this.Handle_of_the_author = Handle_of_the_author
this.content = content
this.An_image_link_posted_by_the_author_of_the_post = An_image_link_posted_by_the_author_of_the_post
this.Number_of_views = Number_of_views
this.Number_of_likes = Number_of_likes
}
let An_image_link_posted_by_the_author_of_the_post = ('https://www.instagram.com/p/CmuuhZKqFTh/')
let Number_of_views = ('21')
let Number_of_likes = ('21')

// question 2//
let Handle_of_the_author = new Instagram_post('Esther_Oluwadamilola')
let content = ('Image')

// question 3a //
function CreatePerson(name, age,location) {
    return{
        name: name,
        age: age,
        location: location, 
    };
    
}
Const_musa = CreatePerson("musa", 19, "Lagos")
console.log(musa);

// question 3b //
function Jambscore(ENG, GOV, LIT, CRK){
    return{
        ENG: ENG,
        GOV: GOV,
        LIT: LIT,
        CRK: CRK,
    };
}
const musaJambscore = Jambscore(70, 85, 82, 94)
console.log(musaJambscore);
musa.scores = musaJambscore
console.log(musa);


// question 4 //
//Ways of cloning an object//
  
//1. Object-assign metthod
//eg-
const Person1 ={
    name: "Esther",
    age: 24,
    location: "Abuja",
};
const Person2 = Object.assign({}, Person1);
Person2.name = "Eniola";
Person2.age = 16;
Person2.location = "lagos";

console.log(Person1);
console.log(Person2);

//2. Spread-syntax method
//eg-
const Person3 = { ...Person1 };
Person3.name = "Oluwadamilola";
Person3.location = "Abuja";

console.log(Person1);
console.log(Person3);

//2. JDON-parse method
//eg-
const Person4 = JSON.parse(JSON.stringify(Person1));
Person4.name = "Joyce";
Person4.age = 27;

console.log(Person1);
console.log(Person4);



//question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (const value in presidentialCandidates) {
   console.log(presidentialCandidates[value] + 'is the presidential candidate of ' + value)   
   
  }

