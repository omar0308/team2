const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
const toastTrigger1 = document.getElementById('liveToastBtn1')
const toastLiveExample1 = document.getElementById('liveToast1')
if (toastTrigger1) {
  toastTrigger1.addEventListener('click', () => {
    const toast1 = new bootstrap.Toast(toastLiveExample1)

    toast1.show()
  })
}
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', () => {
    const toast2 = new bootstrap.Toast(toastLiveExample2)

    toast2.show()
  })
}
const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', () => {
    const toast3  = new bootstrap.Toast(toastLiveExample3)

    toast3.show()
  })
}
const toastTrigger4 = document.getElementById('liveToastBtn4')
const toastLiveExample4 = document.getElementById('liveToast4')
if (toastTrigger4) {
  toastTrigger4.addEventListener('click', () => {
    const toast4 = new bootstrap.Toast(toastLiveExample4)

    toast4.show()
  })
}
const toastTrigger5 = document.getElementById('liveToastBtn5')
const toastLiveExample5 = document.getElementById('liveToast5')
if (toastTrigger5) {
  toastTrigger5.addEventListener('click', () => {
    const toast5 = new bootstrap.Toast(toastLiveExample5)

    toast5.show()
  })
}
const toastTrigger6 = document.getElementById('liveToastBtn6')
const toastLiveExample6 = document.getElementById('liveToast6')
if (toastTrigger1) {
  toastTrigger6.addEventListener('click', () => {
    const toast6 = new bootstrap.Toast(toastLiveExample6)

    toast6.show()
  })
}
const toastTrigger7 = document.getElementById('liveToastBtn7')
const toastLiveExample7 = document.getElementById('liveToast7')
if (toastTrigger7) {
  toastTrigger7.addEventListener('click', () => {
    const toast7 = new bootstrap.Toast(toastLiveExample7)

    toast7.show()
  })
}
function exemple(event){
    let idfenetre="b"+event[1];
    let x=document.getElementById(idfenetre);
    x.style.display="block";
    x.style.zIndex="5";

}
function exempleb(event){
    let idfenetre="b"+event[1];
    let x=document.getElementById(idfenetre);
    x.style.display="none";
    x.style.zIndex="5";

}
