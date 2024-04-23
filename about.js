function trprog(event) {
    let pg = document.getElementsByClassName('progress-bar')[0];
    let a=parseInt(event[1])
    let v = 16.6 * a;
    let m=v.toString()
    pg.style.width =  m+"%";
    for (let i = 1; i <= a; i++){
        let b = document.getElementById("a" + i.toString());
        b.style.opacity = 1;
    };
    for (let i = 5; i > a; i--){
        let b = document.getElementById("a" + i.toString());
        b.style.opacity = 0.5;
    };
    let x = document.getElementsByClassName('carousel-item')[0];
    x.style.removeProperty('display');
}
