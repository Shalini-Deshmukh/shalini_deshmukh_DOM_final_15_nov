/*sign up*/

async function submitData(event){
    event.preventDefault();
   
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('number').value
      const password = document.getElementById('password').value;
      
      console.log(name)
      const  profileData={
        name:name,
        email:email,
        phone:phone,
        password:password,
        
      }
     
     
      await localStorage.setItem('loginData', JSON.stringify(profileData));
      const url="login.html"
      window.open(url);
     
/*login page*/


}
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     console.log(password)
    // Check if the username and password match a stored user
    const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];

console.log(storedUsers)
    // const user = await storedUsers.find(
        
    //     (row) => {return row.email === email && row.password === password});
    // console.log(user)
   
    if (storedUsers.email === email && storedUsers.password === password) {
      alert('Login successful!');
      console.log(storedUsers)
      // You can redirect to another page or perform other actions after successful login
     // window.location.href="./reservation/index.html"; // Replace with the actual path of your profile
     const url="profile.html"
     window.open(url);
    
    } else { 
      alert('Invalid username or password');
    }
  }
      



/*reservation*/

const resevation = []
const resevation2 = []///samelet obkect {value:1}
 async function confirmResevation(){
   const date = document.getElementById("date").value
  const time =   document.getElementById("time").value
  
 await resevation.push(date)
 await resevation2.push(time)

const res={date,time}
await localStorage.setItem('booking', JSON.stringify(res));

}
console.log(resevation)
console.log(resevation2)


async function checkAvailability(){
    
    const date = document.getElementById("date").value
  const time =   document.getElementById("time").value

//   let result =
//   resevation.length === resevation2.length &&
//   resevation.every(function (element) {
//     return resevation2.indexOf(element) !== -1;
//   });
//   console.log(result) object.property //value

if(resevation.includes(date)&&resevation2.includes(time)){
  alert("select other date")
}
else{
  alert("click on confirm reservation and click on  profile page ")
  // const res={date,time}
  // await localStorage.setItem('booking', JSON.stringify(res));
  

   
}
 
    
   


  
}


/*profile*/
// function profileData(data){
//     console.log(data);
//     alert("he,lo")

// }
// export default profileData;
const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];
console.log(storedUsers)
storedUsers.name==undefined?document.getElementById("name").innerHTML=`<h1>click on sign up</h1>`:document.getElementById("name").innerHTML=`${storedUsers.name}`

const order = JSON.parse(localStorage.getItem('booking')) || [];
console.log(order)
const {date,time}=order;
console.log(date)
date==null?document.getElementById("date").innerHTML=`<a class="nav-link"  href="RESERVATION.HTML"><h1 style="margin-top:-1rem;color:red" >click me for booking </h1></a>` :document.getElementById("date").innerHTML=`${date}`