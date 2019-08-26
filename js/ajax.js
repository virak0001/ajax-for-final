var  url = "https://jsonplaceholder.typicode.com/users";
var list = document.querySelector('.list-group');
var syn = true;
var method = "GET";
var request = new XMLHttpRequest();
request.open(method, url, syn);
request.onload = () => {
    var data = JSON.parse(request.response);
    data.forEach(element => {
        const {id, name, username, email} = element;
        const {street, suite, city, zipcode} = element.address;
        const {lat, lng} = element.address.geo;
       if(element.id <= 30) {
        list.innerHTML += 
        `
            <div class="list-group">
                <div class="list-group-item list-group-item-active bg-success mt-5">
                    ${id}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${name}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${username}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${email}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${street}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${suite}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${city}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${zipcode}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${lat}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${lng}
                </div>
                <div class="list-group-item list-group-item-active">
                    ${element.company.name}
                </div>
            </div>
        `

       }
    });
}
request.send();

