const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/firebase-auth-data-model
    const uid = user.uid;
    console.log("User is signed in:", uid);
    // ...
  } else {
    // User is signed out
    // ...
  }  
});

// unsubscribe from the listener when component unmounts to prevent memory leaks
return () => {
  unsubscribe();
};