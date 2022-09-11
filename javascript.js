
//Regular Expressions 
//https://regex101.com/

 //^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$



// var text = 'is this interstig subject not Is ';
// var pattern = /is /gi;
// var result = text.match(pattern)

// console.log(result)

// var text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis perferendis corrupti officia laborum quibusdam harum voluptatem nobis unde adipisci, ipsam ad eos excepturi. Quo, iure fuga? Ex iste impedit voluptatum? ';
// var pattern = /do/gi;
// var result = text.match(pattern)

// console.log(result)

function validate(field,regex){
    if(regex.test(field.value){
        field.class
    })
}


const inputs = document.querySelectorAll('input');
    inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
        console.log(e.target.attributes.name.value)
        validate(e.target,patterns[e.target.attributes.name.value])
    })

})