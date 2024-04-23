// counters
const speed = 1500;
function randomm(){
    document.querySelectorAll('.num').forEach(num => {
        const counterNumber = +num.getAttribute('countTo');
        
        const updateCount = setInterval(() =>{
            const divContent = +num.innerText;
            const increaseBy = counterNumber / speed;

            divContent < counterNumber ?
            num.innerHTML = Math.ceil(divContent + increaseBy):
            clearInterval(updateCount);
        }, 1)
    })
}


//const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const class1 = entry.target.querySelector('.num1');
      
  
//       if (entry.isIntersecting) {
//         console.log('hbbbj')
//         randomm();
//         return;}
        
    
//     });
//   });
// observer1.observe(document.querySelector('.num1'));


/* //////////////////////////////////////////////Louay///////////////////////////////////////////////////////////////// */
var item = document.getElementsByClassName('typer')[0];

item.addEventListener('animationend', switchAnimation);
let i = 0;

let listString = ['Strategy', 'Solutions', 'Intelligence', 'Success'];

function switchAnimation() {
    item.classList.remove('typer');
    item.innerHTML = listString[i];
    i++;
    if (i > 3) {
        i = 0;

    }
    void item.offsetWidth;
    item.classList.add('typer');
}
particlesJS("particles-js",
    {
        "particles": {
            "number": {
                "value": 80,
                "density":
                {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#14213d"
            },
            "shape": {
                "type": "circle", "stroke":
                {
                    "width": 0,
                    "color": "#14213d"
                },
                "polygon":
                {
                    "nb_sides": 5
                },
                "image":
                {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity":
            {
                "value": 0.5,
                "random": false,
                "anim":
                {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3, "random": true, "anim":
                {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked":
            {
                "enable": true,
                "distance": 150,
                "color": "#14213d",
                "opacity": 0.4,
                "width": 1
            },
            "move":
            {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false, "out_mode": "out",
                "bounce": false,
                "attract":
                {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events":
            {
                "onhover":
                {
                    "enable": true,
                    "mode": "repulse"
                }, "onclick":
                {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes":
            {
                "grab":
                {
                    "distance": 400,
                    "line_linked":
                    {
                        "opacity": 1
                    }
                },
                "bubble":
                {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse":
                {
                    "distance": 200, "duration": 0.4
                },
                "push":
                {
                    "particles_nb": 4
                },
                "remove":
                {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
/* ////////////////////////////////////////////////////////Louay////////////////////////////////////////////////////////////////////// */
//chouaib js start
var all_item_containers = $(".item_news");
var hasClicked = false;
$(document).on("click", ".item_news", function () {
    var clickedItemID = $(this).attr('id');
    $(".item_news").removeClass("expanded");
    $(this).addClass("expanded");
    clearInterval(activeInterval);
});

$(".ul_news").hover(function () {
    clearInterval(activeInterval);
    console.log(activeInterval);
});

var active_container = 1;

var activeInterval;

function intervalStart() {
    activeInterval = setInterval(function () {
        $(".item_news").removeClass("expanded");

        $(all_item_containers[active_container]).addClass("expanded");

        active_container += 1;

        if (active_container == 10) {
            active_container = 0
        }
    }, 2000)
};

intervalStart();
//chouaib js end
