import './Index.css'
const test = document.querySelector('input');

const validation = document.querySelector('#button');
const constraints ={
    email:[
        '[aA-zZ]+@+[aA-zZ]+.+[a-z]{3}',
        'The email you have input is invalid. x@x.xxx is the correct form',
    ],
    country:[],
    zip:[],
    password:[],
    passwordconfirm:[],
}
regex1 = new RegExp(constraints.email[0])
validation.addEventListener('click',(e)=>{
    document.querySelectorAll('input').forEach(element =>{
        input = element.value
        if(input == ''){
            each = `${element.id}`
        }
    })
    e.preventDefault()
})

