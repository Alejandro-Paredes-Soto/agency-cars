const cars = [
    {
        id: 0,
        marca: 'Lamborghini',
        modelo: 'Veneno',
        color: 'gris',
        anio: 2020,
        precio: 2000000


    }

];
const edit = false;
function printCars(array) {
    const container = document.getElementById('contenido');
    container.innerHTML = '';
    array.forEach((item) => {
        const htmlUser = `<tr>
                            <td>${item.marca}</td>
                            <td>${item.modelo}</td>
                            <td>${item.color}</td>
                            <td>${item.anio}</td>
                            <td>${item.precio}</td>




                 <td>
     <button class="btn btn-danger" onclick="deleteCar(${item.id})">Eliminar</button>
 <button class="btn btn-warning" onclick="editCar(${item.id})">Actualizar</button>
                    </td>
                        </tr>`;
        container.innerHTML += htmlUser;
    });
}
const EDIT = 'Editar';
const CREATE = 'Agregar';


function addCars() {
    const inputMarca = document.getElementById('marca').value;
    const inputModelo = document.getElementById('modelo').value;
    const inputColor = document.getElementById('color').value;
    const inputAnio = document.getElementById('anio').value;
    const inputPrecio = document.getElementById('precio').value;


    const newUser = {
        id: generateId(),
        marca: inputMarca,
        modelo: inputModelo,
        color: inputColor,
        anio:inputAnio,
        precio:inputPrecio
    }

    cars.push(newUser);
    printCars(cars);
    
    
}

function generateId() {
    let n = 0;
    cars.forEach((item) => {
        if (item.id > n) {
            n = item.id;
        }
    });
    return n += 1;
}

function deleteCar(id) {
    const index = cars.findIndex((item) => item.id === id);
    cars.splice(index, 1);
    printCars(cars);
}

function editCar(id) {
    const index = cars.findIndex((item) => item.id === id);
    const car = cars[index];

    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo;
    document.getElementById('color').value = car.color;
    document.getElementById('anio').value = car.anio;
    document.getElementById('precio').value = car.precio;

    changeEditbutton(id);





}







function changeEditbutton(id) {
    const button = document.getElementById('btn-form');
    button.innerHTML = 'Editar'
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = id;
}

function changeCreatebutton() {
    const button = document.getElementById('btn-form');;
    button.innerHTML = 'Guardar'
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
}




function agendCar() {
    const btn = document.getElementById('btn-form');
    if (btn.textContent === EDIT) {

        updateCar(btn.value)

    } else {
        addCars();
    }
}

function updateCar(id) {
    cars[id].marca = document.getElementById('marca').value;
    cars[id].modelo = document.getElementById('modelo').value;
    cars[id].color = document.getElementById('color').value;
    cars[id].anio = document.getElementById('anio').value;
    cars[id].precio = document.getElementById('precio').value;

    printCars(cars);

}



function addImg(){

const cars_container= document.getElementById('cars-container');

const inputImg = document.getElementById('inputImg').value;

const html = `

<div class="col-md-4 mt-3">
<img class="img-fluid" src="${inputImg}">
</div>




`;

cars_container.innerHTML += html;
inputImg = '';



}


printCars(cars);
