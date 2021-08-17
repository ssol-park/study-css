const count = document.querySelector('h2');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
  const value = parseInt(count.innerHTML);
  count.innerHTML = value + 1;
});

minus.addEventListener('click', () => {
  const value = parseInt(count.innerHTML);
  count.innerHTML = value - 1;
});
