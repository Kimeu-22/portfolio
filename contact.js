// const form = document.getElementById('contact-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const name = form.elements['name'].value;
//   const email = form.elements['email'].value;
//   const subject = form.elements['subject'].value;
//   const message = form.elements['message'].value;
  
//   const data = {
//     name,
//     email,
//     subject,
//     message
//   };
  
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'submit.php');
//   xhr.setRequestHeader('Content-Type', 'application/json');
  
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         console.log('Email sent successfully!');
//       } else {
//         console.error('Email failed to send');
//       }
//     }
//   };
  
//   xhr.send(JSON.stringify(
//     {
//         to: 'mikekimeu254@outlook.com',
//         data
//     }
//   ));
  
// });
