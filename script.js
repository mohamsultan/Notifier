function postMethod(postValue){
  var url =  "https://5urbj9fpre.execute-api.us-east-2.amazonaws.com/notifier"
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json', 'Access-Control-Allow-Origin');
  xhr.send(JSON.stringify(postValue));

}

function myFunction1() {
  var uname = document.getElementById("username1").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var pack = document.getElementById("package1").value;
  var post = {
    'username':uname,
    'email':email,
    'package':pack
  }
  console.log(post)
  postMethod(post)
}

function myFunction2() {
  var uname = document.getElementById("username2").value;
  var email = document.getElementById("exampleInputEmail2").value;
  var pack = document.getElementById("package2").value;
  var post = {
    'username':uname,
    'email':email,
    'package':pack
  }
  console.log(post)
  postMethod(post)
  
}

function myFunction3() {
  var uname = document.getElementById("username3").value;
  var email = document.getElementById("exampleInputEmail3").value;
  var pack = document.getElementById("package3").value;
  console.log(pack)
  console.log(uname);
  console.log(email);
  var post = {
    'username':uname,
    'email':email,
    'package':pack
  }
  console.log(post)
  postMethod(post)
}

function myFunction4() {
  var uname = document.getElementById("username4").value;
  var email = document.getElementById("exampleInputEmail4").value;
  var pack = document.getElementById("package4").value;
  console.log(pack)
  console.log(uname);
  console.log(email);
  var post = {
    'username':uname,
    'email':email,
    'package':pack
  }
  console.log(post)
  postMethod(post)
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


