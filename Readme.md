# CHATAPP
ChatApp is a simplest AngularJs based real-time chat application. It uses Firebase Real-time database to store and retireve messages.

## Getting Started
Just clone the repo and start using the app. However you can always extend it to meet your unique requirements.

### Open source liberaries used
The following liberaries have been used for developing ChatApp:
 - [Google Firebase (Real-Time Database)](https://firebase.google.com/docs/database/) - For sending/retreiving messages in real-time.
 - [W3.CSS](https://www.w3schools.com/w3css/) - For styling.

### Understadung the Code

#### ```Index.html```
Mostly contains the script tags for included liberaries and then container for showing the messages in DOM. It behaves as the view of our Single Page Application.

#### ```controller.js```
As it's name suggests, it is the sole controller of our app. Note on the part where ```'firebase'``` is injected as dependency in controller. This is an important part.
First thing we do in controller declaration, is we make a refference of our Firebase DB as ```myDataRef.```
```$scope.userName``` get's the name of user to be used in chat. It is retrieved from the query parameter. So whenever you host the app, you'll have to have a ```name``` parameter in the query-url.

Rest of the code is quite understandable. Should you have any queries/suggestions, feel free to contact the auther.

## License

This project is licensed under the MIT License.

### Auther:
- **M. Zain Mohsin** from [Team Progomania.](https://www.facebook.com/progomania/)