/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
    data.forEach(brand => {
        const brandDiv = document.createElement('div')
        brandDiv.classList.add('brand')

        const brandHeader = document.createElement('h1')
        brandHeader.appendChild(document.createTextNode(brand.brand))

        const modelList = document.createElement('ul')
        brand.models.forEach(car => {
            const carModel = document.createElement('li')
            carModel.appendChild(document.createTextNode(car))
            modelList.appendChild(carModel)
        })
        brandDiv.append(brandHeader, modelList)
        document.querySelector('#output').appendChild(brandDiv)
    })
})