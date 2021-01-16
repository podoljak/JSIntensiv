 // Task 5. Візьміть файл template1.html, підключіть до нього скрипт. 
 // Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
 // або document.getElementsByTagName :

 // Task 5.1. отримує текст з параграфа з id "content".

 let idContent = document.getElementById('content');
 //console.log(idContent);

 // Task 5.2. отримує текст з блоку з id "rules".

 let idRules = document.getElementById('rules');
 //console.log(idRules);

 // Task 5.3. замініть текст параграфа з id 'content' на будь-який інший.

 document.getElementById('content').innerHTML = 'Per aspera ad astra!';

 // Task 5.4. замініть текст параграфа з id 'rules' на будь-який інший.

 document.getElementById('rules').innerHTML = 'Quon lices Yovi non lices bovi.';

 // Task 5.5. змініть кожному елементу колір фону на червоний.

 document.body.style.backgroundColor = "red";

 // Task 5.6. змініть кожному елементу колір тексту на синій.

 document.body.style.color = "blue";

 // Task 5.7. отримати весь список класів елемента з id=rules і вивести їх в console.log.

 let clasById = document.getElementById('rules');
 console.log(clasById.classList);

 // Task 5.8. отримати всі елементи з класом fc_rules.

 let clasEl = document.getElementsByClassName('fc_rules');
 console.log(clasEl);

 // Task. 5.9. поміняти колір тексту у всіх елементів fc_rules на червоний.
 // (Замінив червоний на зелений щоб текст було видно на червоному тлі з Task 5.5.)

 let xxx = document.body.getElementsByClassName('fc_rules');
 for (let i of xxx) {
     i.style.color = 'green';
 }