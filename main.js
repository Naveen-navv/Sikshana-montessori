let section_counter = document.querySelector('#number');
let counters = document.querySelectorAll('.counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 50);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(numbers);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(numbers);


  
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 2000,
    };

    const scrollRevealOption2 = {
        distance: "50px",
        origin: "top",
        duration: 2000,
    };

    const scrollRevealOption3 = {
        distance: "50px",
        origin: "left",
        duration: 2000,
    };

    const scrollRevealOption4 = {
        distance: "50px",
        origin: "right",
        duration: 2000,
    };



    ScrollReveal().reveal(".curi h4", {
        ...scrollRevealOption,
    });

    ScrollReveal().reveal(
        ".admis img, .curi p , .curi a, .about h3",
        {
            ...scrollRevealOption,
            delay: 100,
            interval: 200,
        }
    );

    ScrollReveal().reveal(
        ".ready h2, .ready button, .orange h2, .orange img, .ph4",
        {
            ...scrollRevealOption,
            delay: 100,
            interval: 500,
        }
    );

    ScrollReveal().reveal(
        ".card1 img, .card1 h2, .card1 h3,.card1 h4, .card2 img,.card2 h2, .card2 h3,.card2 h4, .card3 img, .card3 h2, .card3 h3, .card3 h4",
        {
            ...scrollRevealOption,
            delay: 100,
            interval: 200,
        }
    );

    ScrollReveal().reveal(
        ".ph2, .ph3",
        {
            ...scrollRevealOption2,
            delay: 100,
            interval: 500,
        }
    );

    ScrollReveal().reveal(
        ".ph1",
        {
            ...scrollRevealOption3,
            delay: 100,
            interval: 500,
        }
    );

    ScrollReveal().reveal(
        ".ph5, .ph6",
        {
            ...scrollRevealOption4,
            delay: 100,
            interval: 500,
        }
    );



    function empty() {
        var x;
        x = document.getElementById("name").value;
        if (x == "") {
            alert("Please enter a Name");
            return false;
        };
        var a;
        a = document.getElementById("phone").value;
        if (a == "") {
            alert("Please enter a Phone number to be contacted");
            return false;
        }
        var y;
        y = document.getElementById("email").value;
        if (y == "") {
            alert("Please enter a email");
            return false;
        };
        var z;
        z = document.getElementById("message").value;
        if (z == "") {
            alert("Please type a message");
            return false;
        };

        if (x !== "") {
            alert("Your details have been submitted. We will contact you shortly")
            return false;
        }


    }



