// Mariana Garnica
// garn0080
// November 12, 2019


 let link1 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json');
 let link2 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json');
 let Ulist = document.createElement('ul');

Promise.race([link1, link2])
.then(response => response.json() )
.then(result => {
  console.log('winner:', result);
  let data = result.data;
  if (result.type == "archer"){
  data.forEach(element => {
      return process1 ( element.first_name + " " + element.last_name  );
  })}else {
  data.forEach(element => {
      return process2 ( element.character );
  })
  }
})

.catch(err => {
  console.log('NOT FOUND', err);
})


let process1 = (elem) => {
  let p = document.createElement('p');
  p.textContent = JSON.stringify(elem);
  document.getElementById('output').appendChild(p);
}

let process2 = (elem) => {
  debugger;
  let list = document.createElement('li');
  list.textContent = JSON.stringify(elem);
  Ulist.appendChild(list);
  document.getElementById('output').appendChild(Ulist);
}



