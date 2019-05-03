  //Get element
  const txtemail = document.getElementById("txtemail");
  const txtpassword = document.getElementById("txtpassword");
  const btnlogin = document.getElementById("btnlogin");
  const btnsignup = document.getElementById("btnsignup");
  const btnlogout = document.getElementById("btnlogout");
  const btnLoginGoogle = document.getElementById("loginGoogle");
  const displayNameHTML = document.querySelector(".displayName");

  // login with google
  btnLoginGoogle.addEventListener('click', e => {
    alert("google login");
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
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

  // login event
  btnlogin.addEventListener('click', e => {
    //get email and pass
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  //signup event
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

  btnlogout.addEventListener('click', e => {
    firebase.auth().signOut();
    uid = 0;
    timeLocal = 0;
    todos = [];
    fillStorage();
  });

  // real time listener
  firebase.auth().onAuthStateChanged(fireBaseUser => {
    if(fireBaseUser)  {
      // display name
      if(!fireBaseUser.displayName) {
        var currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
        displayName: prompt("enter your name")
        }).then( e => {
          // alert(fireBaseUser.uid + fireBaseUser.displayName );
          displayNameHTML.innerHTML = fireBaseUser.displayName;
          firestorage(fireBaseUser.uid);
        });
      }
      
      else {
        displayNameHTML.innerHTML = `<span>${fireBaseUser.displayName}</span>`;
        // alert("fire storage called " + fireBaseUser.uid + fireBaseUser.displayName );
        firestorage(fireBaseUser.uid);
      }  
      
      // console.log(fireBaseUser);
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
      // alert("not logged in")
    }
      
  });
 
  // google signin option

  const provider = new firebase.auth.GoogleAuthProvider();
  