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


let titulosUrgentes = misTareas.map(item => `Tarea: ${item.text}`)

let soloUrgentes = misTareas.filter(item => item.priority === "high")

tareaEspecial.completed = !tareaEspecial.completed

let tareasActualizadas = misTareas.map(item => 
    item.id === 1 ? { ...item, priority: "urgent" } : item
)   

let tareasFiltradas2 = misTareas.filter(item => !item.completed)
.map(item => ({...item, text: item.text.toUpperCase()}))


const actualizarPrioridad = (lista, idACambiar) => {
  return lista.map(item => 
    item.id === idACambiar ? {...item, priority: "urgent"} : item
  );
};


const usuario = "Juan";

const SaludoUsuario = () => {
  return (
    <header>
      <h1>Mi Gestor de Tareas</h1>
      <p>Bienvenido de nuevo, {usuario}</p>
    </header>
  );
};

const ListaDeTareas = () => {
  return (
    <ul>
      {misTareas.map(item => (
        <li>{item.text} - Prioridad: {item.priority}</li>
      ))}
    </ul>
  );
};




let stock = 5;
let mensaje = stock > 0 ? "Disponible" : "Agotado";





let puntos = 120;
let nivel = puntos >= 100 ? "Premium" : "Estandar";




let monitor = {
  id: 10,
  modelo: "UltraWide",
  precio: 300
};

let monitorRebajado = {...monitor, precio: 250 }; 

let preciosRebajados = carrito.map(item => item.precio / 2);


let carritoActualizado = carrito.map(item => ({ ...item, modelo: "oferta"}));

let carrito = [
  { producto: "Teclado", precio: 20 },
  { producto: "Monitor", precio: 200 },
  { producto: "Mouse", precio: 10 }
];

let productosCaros = carrito.filter(item => item.precio > 15)



