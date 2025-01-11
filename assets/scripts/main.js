/* SCHERMATA DI CARICAMENTO */
const preloader = document.querySelector("[data-preaload]");

// Aggiunge un evento "load" al window, che viene attivato quando la pagina è completamente caricata.
window.addEventListener("load", function () {

  // Una volta che la pagina è caricata, aggiunge la classe 'loaded' all'elemento che ha l'attributo data-preaload
  preloader.classList.add("loaded");
  // Aggiunge la classe 'loaded' al body, per far partire eventuali animazioni CSS sul corpo della pagina.
  document.body.classList.add("loaded");

  /* AUTOSCRITTURA TESTO */
  // Oggetto che gestisce l'effetto di autoscrittura
  const typewriter = {
    typeValue: '',                // Il testo che viene scritto
    typeStatus: false,            // Stato che indica se il testo è in fase di scrittura o cancellazione
    typeArray: ['Web Developer', 'Economist'], // Le frasi da scrivere
    typingSpeed: 100,             // Velocità di scrittura (in millisecondi)
    erasingSpeed: 100,            // Velocità di cancellazione (in millisecondi)
    newTextDelay: 1250,           // Ritardo prima di cancellare il testo scritto
    typeArrayIndex: 0,            // Indice dell'array `typeArray` che tiene traccia della frase attuale
    charIndex: 0,                 // Indice del carattere attuale della frase
    typedTextElement: document.getElementById('typed-text'),  // L'elemento dove viene scritto il testo
    cursorElement: document.getElementById('cursor'),        // L'elemento del cursore

    // Funzione che aggiorna il testo nell'elemento e gestisce la visibilità del cursore
    updateTextContent() {
      this.typedTextElement.textContent = this.typeValue;
      // Aggiunge o rimuove la classe 'typing' dal cursore per gestire la sua visibilità
      this.cursorElement.classList.toggle('typing', this.typeStatus);
    },

    // Funzione che scrive il testo carattere per carattere
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex++;
        this.typeStatus = true;
        this.updateTextContent();
        setTimeout(() => this.typeText(), this.typingSpeed);  // Continua a scrivere il prossimo carattere
      } else {
        this.typeStatus = false;
        this.updateTextContent();
        setTimeout(() => this.eraseText(), this.newTextDelay); // Dopo un ritardo, inizia a cancellare il testo
      }
    },

    // Funzione che cancella il testo, carattere per carattere
    eraseText() {
      if (this.charIndex > 0) {
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        this.typeStatus = true;
        this.updateTextContent();
        setTimeout(() => this.eraseText(), this.erasingSpeed);  // Continua a cancellare il prossimo carattere
      } else {
        this.typeStatus = false;
        this.updateTextContent();
        // Passa alla prossima frase nell'array, o riparte da capo
        this.typeArrayIndex = (this.typeArrayIndex + 1) % this.typeArray.length;
        setTimeout(() => this.typeText(), this.typingSpeed + 1000);  // Ritardo prima di iniziare a scrivere di nuovo
      }
    },

    // Funzione che avvia il processo di scrittura
    start() {
      setTimeout(() => this.typeText(), this.newTextDelay + 200);  // Ritardo iniziale prima di cominciare a scrivere
    }
  };

  // Avvia l'effetto di autoscrittura
  typewriter.start();

  /* NASCONDI ID SEZIONI (Smooth Scroll) */
  const elements = document.querySelectorAll('[data-scroll-to]');
  elements.forEach(function(element) {
    // Aggiunge un listener per il click su ciascun elemento
    element.addEventListener('click', function(event) {
      event.preventDefault();  // Previene il comportamento di default (navigazione del link)
      const targetId = this.getAttribute('data-scroll-to');  // Ottiene l'id della sezione da raggiungere
      const targetElement = document.getElementById(targetId);  // Trova l'elemento corrispondente
      if (targetElement) {
        // Scorre dolcemente fino alla sezione di destinazione
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  /* ANIMAZIONE BACKGROUND HOME */
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,  // Numero di particelle
        "density": {
          "enable": true,
          "value_area": 1200  // Densità delle particelle
        }
      },
      "color": {
        "value": "#ffffff"  // Colore delle particelle
      },
      "shape": {
        "type": "triangle",  // Tipo di forma delle particelle
        "polygon": {
          "nb_sides": 5  // Numero di lati del triangolo
        }
      },
      "opacity": {
        "value": 0.2,  // Opacità delle particelle
        "random": false,
        "anim": {
          "enable": false,  // Animazione dell'opacità disabilitata
        }
      },
      "size": {
        "value": 5,  // Dimensione delle particelle
        "random": true,  // Le particelle sono di dimensioni casuali
      },
      "line_linked": {
        "enable": true,  // Le particelle saranno collegate da linee
        "distance": 150,  // Distanza massima tra due particelle per essere collegate
        "color": "#ffffff",  // Colore delle linee
        "opacity": 0.5,  // Opacità delle linee
        "width": 0.5  // Larghezza delle linee
      },
      "move": {
        "enable": true,  // Le particelle si muovono
        "speed": 5,  // Velocità delle particelle
        "direction": "none",  // Direzione casuale
        "out_mode": "bounce"  // Le particelle rimbalzano sui bordi del canvas
      }
    },
    "interactivity": {
      "detect_on": "canvas",  // Rilevamento degli eventi sul canvas
      "events": {
        "onhover": {
          "enable": true,  // Effetto al passaggio del mouse
          "mode": "bubble"  // Le particelle si espandono al passaggio del mouse
        },
        "onclick": {
          "enable": true,  // Effetto al click
          "mode": "repulse"  // Le particelle si respingono al click
        },
        "resize": true  // Adatta le particelle alla dimensione della finestra
      },
      "modes": {
        "bubble": {
          "distance": 400,  // Distanza di attivazione dell'effetto bubble
          "size": 7.5,  // Dimensione delle particelle in modalità bubble
          "duration": 2,  // Durata dell'effetto bubble
          "opacity": 0.8,  // Opacità durante l'effetto bubble
          "speed": 3  // Velocità dell'effetto bubble
        },
        "repulse": {
          "distance": 300  // Distanza di attivazione dell'effetto repulse
        },
        "push": {
          "particles_nb": 4  // Numero di particelle aggiunte in modalità push
        },
        "remove": {
          "particles_nb": 2  // Numero di particelle rimosse in modalità remove
        }
      }
    },
    "retina_detect": true  // Abilita il rilevamento della risoluzione retina
  });
  
});
