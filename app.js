// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  




let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
   {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
     {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  }
]

document.getElementById("crdate").value = new Date().toISOString();

buildTable(users)
function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
              <td>${data[i].id}</td>
              <td>${data[i].createdDate}</td>
              <td> <span class='span-statut ${data[i].status == 'Validé' ? 'valide' : (data[i].status == 'Rejeté' ? 'rejected' : 'on-validation')}'>${data[i].status}</span></td>
              <td>${data[i].firstName}</td>
              <td>${data[i].lastName}</td>
              <td>${data[i].userName}</td>
              <td>${data[i].registrationNumber}</td>
              <td><div value='Delete' onclick="delUser(this)"><i class="bi bi-trash"></i></div></td>
            </tr>`
      table.innerHTML += row
    }
}

function delUser(User) {
    var u=User.parentNode.parentNode;
    u.parentNode.removeChild(u);
}

function addUser() {

  let id, status, firstName, lastName, userName, registrationNumber, createdDate;
  console.log(document.getElementById("status"));
  id = Math.floor(Math.random() * 1000000000);
  status = document.getElementById("status").value;
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  userName = document.getElementById("username").value;
  registrationNumber = document.getElementById("regnum").value;
  createdDate = document.getElementById("crdate").value;

  users.push ({
  "id":id,  
  "createdDate":createdDate,
  "status":status,
  "firstName":firstName,
  "lastName":lastName,
  "userName":userName,
  "registrationNumber":registrationNumber,
  });

  var tablee = document.getElementById('myTable');
  
  var roww = `<tr>
                <td>${id}</td>
                <td>${createdDate}</td>
                <td> <span id='status-color' class='span-statut ${status == 'Validé' ? 'valide' : (status == 'Rejeté' ? 'rejected' : 'on-validation')}'>${status}</span></td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${userName}</td>
                <td>${registrationNumber}</td>
                <td><div value='Delete' onclick="delUser(this)"><i class="bi bi-trash"></i></div></td>
              </tr>` ;

  tablee.innerHTML += roww;


document.getElementById("fname").value = "";
document.getElementById("lname").value  = "";
document.getElementById("username").value = "";
document.getElementById("regnum").value = "";
document.getElementById("crdate").value = new Date().toISOString();;
    
     
  
}