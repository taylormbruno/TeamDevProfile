const startHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style> 
        .header {
            background-color: rgb(215, 84, 89) !important; 
            height: 20vh; 
            width: 100%; 
            padding: 6% 0% 10% 0%;
        }
        #cardWrap {
            padding-top: 20px;
            width: 100vw;
            height: 80vh;
            text-align: center;
        }
        .card {
            width: 27vw !important;
            display: inline-block !important;
            text-align: justify !important;
        }
        .card-body {
            overflow-y: auto !important;
            max-height: 20vh !important;
        }
        .card-header {
            background-color:#0077F7 !important; 
            color:white;
        }
        .cardBod {
            border-radius: 3%; 
            padding: 5px;
            overflow-x: auto;
            height: 15vh;
        }
    </style>

    <script src="https://kit.fontawesome.com/d528fd69d4.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="header text-center text-white" style="background-color: rgb(215, 84, 89); height: 20vh; width: 100%; padding: 6% 0% 10% 0%;">
        <h1>My Team</h1>
    </div>
    <div class="container" id="cardWrap">
    `;

const endHTML = `</div>
    
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>`;

const fs = require("fs");

async function generateHTML(role, office, user, end) {
    if (role === "Manager") {
        await fs.appendFile(`./office${office}.html`, startHTML, 'utf8', (err) => {
            if (err) throw err; 
            console.log(`\n Created HTML: office${office}.html`);
        });
    }

    fs.appendFile(`./office${office}.html`, user, 'utf8', (err) => {
        if (err) throw err; 
        console.log(`\n Added: ${role} to office${office}.html`);
    });

    if (end === "No") {
        fs.appendFile(`./office${office}.html`, endHTML, 'utf8', (err) => {
            if (err) throw err; 
            console.log(`\n HTML: office${office}.html is complete`);
        });
    } 
}

module.exports = generateHTML;