

const imgDiv = document.querySelector('about-page-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');







file.addEventListener('change', function(){

const chosenfile = this.files[0];

if (chosenfile) {

    const reader = new FileReader();

    reader.addEventListener('load', function(){

        img.setAttribute('src', reader.result);

    });

    reader.readAsDataURL(chosenfile);

}

})