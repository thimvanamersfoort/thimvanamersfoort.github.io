const typedText = document.querySelector('#typed-text');
const defaultText = document.querySelector('#default-text');

function type() {
  var typewriter = new Typewriter(typedText, { //eslint-disable-line no-undef
    delay: 50,
  }); 

  typewriter
    .typeString('./hello_world.exe')
    .pauseFor(750)
    .callFunction( () => {
      defaultText.style.display = "none";
      document.querySelector('.Typewriter__wrapper').innerText = "";
      typedText.classList.remove('text-[#f9f1a5]');
      typedText.classList.add('text-white');
    })
    .pauseFor(750)

    .typeString('<b>Hello World.</b>').pauseFor(400)

    .pasteString('<br>').pauseFor(400)
    .pasteString('<br>').pauseFor(400)

    .typeString('Mijn naam is Thim van Amersfoort.')
    .pasteString('<br>').pauseFor(800)
    .typeString('Een Junior Software developer met interesses in netwerktechnologie, Native App development en Full Stack Web Development.')

    .pasteString('<br>').pauseFor(400)
    .pasteString('<br>').pauseFor(400)

    .typeString('Op deze website zal je mijn laatste projecten vinden, met links naar de bijpassende broncode.')

    .pasteString('<br>').pauseFor(400)
    .pasteString('<br>').pauseFor(400)

    .typeString('De broncode van deze website vind je <a href="https://github.com/thimvanamersfoort/thimvanamersfoort.github.io" class="underline" target="_blank">hier</a>.')

    .pasteString('<br>').pauseFor(400)
    .pasteString('<br>').pauseFor(400)

    .typeString('Groetjes, Thim')
    .pasteString('<br>').pauseFor(400)
    .typeString('🚀🚀')

    .pauseFor(2000)

    .callFunction( () => {
      defaultText.style.display = "inline";
      document.querySelector('.Typewriter__wrapper').innerText = "";
      typedText.classList.add('text-[#f9f1a5]');
      typedText.classList.remove('text-white');
      typedText.innerText = "";
    })

    .start();
 
  typewriter = null;
}

type();

setInterval(() => {
  type();
}, 35000);