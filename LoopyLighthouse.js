let message = '';
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    message += 'Loopy';
  } 
  if (i % 4 === 0) {
    message += 'Lighthouse';
  }
  if (i % 3 === 0 || i % 4 === 0) {
    console.log(message);
  } else {
    console.log(i);
  }
  message = '';
}
