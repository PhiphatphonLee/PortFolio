let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')
window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })

function fadeOut1() {
    const textBox2 = document.querySelector('.textBox2');
    textBox2.style.opacity = '0';
    textBox2.style['pointer-events'] = 'none';

    const textBox3 = document.querySelector('.textBox3');
    textBox3.style.opacity = '0';
    textBox3.style['pointer-events'] = 'none';

    const textBox1 = document.querySelector('.textBox1')
    textBox1.style.opacity = '1';
    textBox1.style['pointer-events'] = 'all';
}

function fadeOut2() {
    const textBox1 = document.querySelector('.textBox1');
    textBox1.style.opacity = '0';
    textBox1.style['pointer-events'] = 'none';

    const textBox3 = document.querySelector('.textBox3');
    textBox3.style.opacity = '0';
    textBox3.style['pointer-events'] = 'none';

    const textBox2 = document.querySelector('.textBox2')
    textBox2.style.opacity = '1';
    textBox2.style['pointer-events'] = 'all';
}

function fadeOut3() {
    const textBox1 = document.querySelector('.textBox1');
    textBox1.style.opacity = '0';
    textBox1.style['pointer-events'] = 'none';

    const textBox2 = document.querySelector('.textBox2');
    textBox2.style.opacity = '0';
    textBox2.style['pointer-events'] = 'none';

    const textBox3 = document.querySelector('.textBox3')
    textBox3.style.opacity = '1';
    textBox3.style['pointer-events'] = 'all';
}