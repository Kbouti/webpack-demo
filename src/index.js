//Steps before modifying index.js:
//1. create git repo
//2. navigate to the folder you want your repo to live in
//3. clone repo (git clone (ssh))
//4. npm init -y
//5. npm install webpack webpack-cli --save-dev
//6. make src folder, and append child index.js, index.html
//7. boiler plate index and test js command





function component() {
    const element = document.createElement('div)');

    //Lodash, currently included via a script, is required for this line to work:
    element.innerHTML = `If all has gone well you're reading this on the screen. `;

    return element;
}

document.body.appendChild(component());