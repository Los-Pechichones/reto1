particlesJS(
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#18d441"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
)
/* window.addEventListener("resize", () => dblclickIntegrantes)
function dblclickIntegrantes(){
  const a_integrantes = document.getElementsByClassName("a-integrantes");
  for (let i = 0; i < a_integrantes.length; i++) {
    a_integrantes[i].addEventListener("click", (e) => {
      console.log(e.pointerType == "mouse")
      if (e.pointerType == "mouse"){e.preventDefault()} 
    });    
    a_integrantes[i].addEventListener("dblclick", (e) => e.view.open(a_integrantes[i].href, "_blank"));
  } 
} */
function funNombreIntegrante(nombre) {
  //nombre_integrante.innerHTML = nombre;
}

const img1 = document.getElementById("img1"), img2 = document.getElementById("img2"), img3 = document.getElementById("img3"), img4 = document.getElementById("img4");
const container_images = document.getElementsByClassName("container-images");
const nombre_integrante = document.getElementById("nombre-integrante");

//dblclickIntegrantes()

