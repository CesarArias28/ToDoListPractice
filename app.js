let misTareas = [
    {
        id: 1,
        text: "Sacar al perro a pasear",
        completed: false,
        priority : "high"},
        {
        id: 2,
        text: "Hacer la compra",
        completed: false,
        priority : "medium"
        },
        {
        id: 3,
        text: "Limpiar la casa",
        completed: false,
        priority : "low"
        }  
]

misTareas.push({
    id: 4,
    text: "Estudiar Js",
    completed: false,
    priority : "high"
})


let tareaEncontrada = misTareas.find(item => item.id === 2)

let tareaEspecial = misTareas.find(item => item.id === 4);
tareaEspecial.completed = true;

let tareasFiltradas = misTareas.filter(item => item.id !== 3)

let listaDeTextos = misTareas.map(item => item.text)
console.log(misTareas);