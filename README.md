# shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
-----------------------------------------------
## Config firebase
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3rUlhNBmj2NiBM_Y7DK5pJl2ZjyerfiA",
    authDomain: "shopnow-ee6f4.firebaseapp.com",
    databaseURL: "https://shopnow-ee6f4.firebaseio.com",
    projectId: "shopnow-ee6f4",
    storageBucket: "shopnow-ee6f4.appspot.com",
    messagingSenderId: "837232379202",
    appId: "1:837232379202:web:b46854b98f4fc12260b4db",
    measurementId: "G-KPH3E1H838"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>





-----------------------------------
