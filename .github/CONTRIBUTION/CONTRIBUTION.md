### Contributing.

 1. Create your **branch**: ```git checkout -b my-new-feature```

2. **Commit** your changes: ```git commit -m 'Add some feature'```

3. **Push** to the branch: ```git push origin my-new-feature```

4. Send a **Pull Request**

5. **Enjoy!**

### Setup locally.

1. Fork the repository.

    ``` https://github.com/Ignitus/Ignitus-client.git ```

2. Clone the repository.

    ``` git clone https://github.com/your_username/Ignitus-client.git ```

3. Cd into that root folder you just cloned locally.

    ``` cd Ignitus-client ```

4. Open terminal in the current folder and to install all dependencies type.

    ``` npm install ```

5. Now typing
    ``` npm start ```
    
6. Navigate to http://localhost:3000

### Docker Setup.

Run ```docker-compose up```
 
### Tools.

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

 ``` npm run lint ```
 
 ``` npm run lint:fix ```
 
 
**IMP:** 

* Please don't commit your ```package-lock.json``` until & unless you are not adding a new package.
* Please create a new branch from ```develop``` not from ```master```, and also create a pull request to ```develop``` not to ```master```.
* If you get any err similar to this ``` Node Sass could not find a binding for your current environment. ``` try switching node version to      ``` v8.16.2 ```.
