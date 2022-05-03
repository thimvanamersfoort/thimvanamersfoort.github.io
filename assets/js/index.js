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

( () => {

  const template = document.querySelector('#templatePost');

  const posts = [ // Old to new
    {
      title: 'Bandersnatch',
      desc: 'Een multiple-choice Retro game, geschreven in C# en het .NET-Framework. Mijn allereerste serieuze software-development project.',
      date: '30 juni 2020',
      href: '/posts/bandersnatch.html'
    },
    {
      title: 'HSO Hertzinger Password generator',
      desc: 'Een simpele wachtwoordgenerator, geschreven in C# en .NET-Framework. In opdracht van HSO Hertzinger.',
      date: '24 November 2020',
      href: '/posts/password-generator.html'
    },
    {
      title: 'C# Screen rotation changer',
      desc: 'Een simpele applicatie die de rotatie van een (eventuele 2e) monitor wisselt. Maakt gebruik van de Windows System32-API. Inspiratie kwam uit behoefte door een persoonlijke monitoropstelling.',
      date: '26 december 2020',
      href: '/posts/rotation-changer.html'
    },
    {
      title: 'Windows Retro',
      desc: 'Een website die de ervaring moet mimieken van oude Windows-98 computers. Maakt gebruik van JQuery en PHP, en houdt gebruikersinformatie bij in client-side cookie storage.',
      date: '28 januari 2021',
      href: '/posts/windows-retro.html'
    },
    {
      title: 'De Wandelmannen Blog',
      desc: 'Een blog gecreërd voor een familielid. Geschreven in PHP, met een MySQL Database. Een van mijn eerste interacties met back-end development.',
      date: '7 augustus 2021',
      href: '/posts/wandelmannen.html'
    },
    {
      title: 'Git-Credential-Editor',
      desc: 'Een CLI-tool voor het wisselen tussen actieve Git referenties, opgeslagen in de Windows Credential Manager. Maakt gebruik van Powershell en NodeJS.',
      date: '29 september 2021',
      href: '/posts/git-credential-editor.html'
    },
    {
      title: 'Create-MVC-Template',
      desc: 'Een tool voor het genereren van een bestandssjabloon voor NodeJS-applicaties met een MVC-layout. Maakt gebruik van Vercel\'s PKG voor het creëren van executables.',
      date: '23 januari 2022',
      href: '/posts/create-mvc-template.html'
    },
    {
      title: 'Ambo Office Management System',
      desc: 'Een vrij recentelijk project van mij, dat de ontwikkeling behandelt van een compleet Office Management System, gericht op gebruik bij kleine tot middelgrote bedrijven.',
      date: '19 maart 2022',
      href: '/posts/ambo-oms.html'
    }
  ]

  posts.reverse();
  posts.forEach( (post, i) => {
    
    const node = template.cloneNode(true);

    node.querySelector('#templateTitle').innerHTML = post.title;
    node.querySelector('#templateDesc').innerHTML = post.desc;
    node.querySelector('#templateDate').innerHTML = post.date;

    node.removeAttribute('id');

    node.setAttribute('data-aos-delay', `${(i + 1) * 250}`)
    node.setAttribute('href', post.href);

    node.classList.remove('hidden');

    template.parentElement.appendChild(node);
  })

})();