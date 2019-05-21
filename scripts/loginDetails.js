  //Get element
  const txtemail = document.getElementById("txtemail");
  const txtpassword = document.getElementById("txtpassword");
  const btnlogin = document.getElementById("btnlogin");
  const btnsignup = document.getElementById("btnsignup");
  const btnlogout = document.getElementById("btnlogout");
  const btnLoginGoogle = document.getElementById("loginGoogle");
  const displayNameHTML = document.querySelector(".displayName");
  const displayNameMenu = document.querySelector(".name b");

  // login with google .......................................................................
  btnLoginGoogle.addEventListener('click', e => {
     // loading animation
     loading();
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });
  //...........................................................................................
  // login event...............................................................................
  btnlogin.addEventListener('click', e => {
    // loading animation
    loading();
    //get email and pass
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  //...........................................................................................
  //signup event...............................................................................
  btnsignup.addEventListener('click', e => {
    //get email and pass
    // todo check email
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
//..............................................................................................
// function log out.............................................................................
  btnlogout.addEventListener('click', e => {
    firebase.auth().signOut();
    uid = 0;
    timeLocal = 0;
    todos = [];
    fillStorage();
  });
//...............................................................................................
// real time listener............................................................................
  firebase.auth().onAuthStateChanged(fireBaseUser => {
    if(fireBaseUser)  {
      // display name
      if(!fireBaseUser.displayName) {
        var currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
        displayName: prompt("enter your name")
        }).then( e => {
          displayNameHTML.innerHTML = fireBaseUser.displayName;
          firestorage(fireBaseUser.uid);
        });
        // loading animation for signUP
        loading();
      }      
      else {
        displayNameHTML.innerHTML = `<span>${fireBaseUser.displayName}</span>`;
        displayNameMenu.innerHTML = `<span>${fireBaseUser.displayName}</span>`;
        firestorage(fireBaseUser.uid);
      }  
      btnlogout.style.display = "inline-block";
      btnlogin.style.display = "none";
      btnsignup.style.display = "none";
      btnLoginGoogle.style.display = "none";
      txtemail.style.display = "none";
      txtpassword.style.display = "none";
    }
    else {
      btnlogout.style.display = "none";
      btnlogin.style.display = "inline-block";
      btnsignup.style.display = "inline-block";
      btnLoginGoogle.style.display = "inline-block";
      txtpassword.style.display = "inline-block";
      txtemail.style.display = "inline-block";
      displayNameHTML.innerHTML = ``;
    }    
  });
//..............................................................................................

  