let friends = ['Ashley', 'Anam', 'Fehzan', 'James', 'John'];


function sing(){
    let i = 0;
    while (i < friends.length) {
        let div = document.createElement('div');
        div.className = ('friend');
        let h3 = document.createElement('h3');
        
        document.body.appendChild(div);
        div.appendChild(h3);
        let upper = friends[i].toUpperCase();
        let h3text = document.createTextNode(upper + ':');

        h3.appendChild(h3text);

        for (count = 99; count >= 0; count--) {
            let oneless = count - 1;
            console.log(count + " lines of code in the file, " + count + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + oneless + " lines of code in the file");
        };
        i++;
    };
};

let singbutton = document.querySelector('button');

singbutton.addEventListener('click', sing);
