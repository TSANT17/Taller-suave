
import './App.css';
import { useState } from 'react';



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function segun_horas (){
  const rs = document.getElementById("segundos").value
  var hora,min,seg,m
  
    if(rs < 0){

      m = "No negativos"

    }else if(rs <=60){

      hora = 0
      min = 0
      seg = rs
      m ="el tiempo en segundos es:"+
      " horas:"+hora+
      " minutos:"+min+
      " segundos:"+seg 

    }else if(rs > 60){

      let p_min = Math.floor(rs/60)
      if(p_min > 60){

        hora = Math.floor(p_min/60)
        min = p_min-(hora*60)
        seg = rs-(p_min*60)
        
      }else{
        hora = 0
        min = p_min-(hora*60)
        seg = rs-(p_min*60)
      }
      m ="el tiempo es:"+
        " horas:"+hora+
        " minutos:"+min+
        " segundos:"+seg  
    }
    console.log(min)
    
  return(m)
}

function llamada () {
  const dur = document.getElementById("llamada").value
  let m
  if (dur < 0){
    m = "Error"
  }else if(dur <= 3){
    m = "La tiene un valor de $100"
  }else if(dur>3){
    let valor = 100 + (50*(dur-3))
    m = "La vale $"+valor
  }
  return(m)
}



function iguales(){
  let m
  let rep = 0
  const uno = document.getElementById("uno").value
  const dos = document.getElementById("dos").value
  const tres = document.getElementById("tres").value
  const arreglo = [uno, dos, tres]
  arreglo.forEach((numero, index) => {
    let p = arreglo[index]
    switch(index){
      case 0:
        if (p===arreglo[index+1] || p===arreglo[index+2]){
          rep++
        }
        break;
      case 1:
        if (p===arreglo[index+1] || p===arreglo[index-1]){
          rep++
        }
        break;
      case 3:
        if (p===arreglo[index-1] || p===arreglo[index-2]){
          rep++
        }
        break;
    }
  })
  m = "Hubieron "+rep+" numeros repetidos"
  return(m)
}

function menorMayor(){
  const lista = []
  const num = document.getElementById("numero").value
  for (var i = 0; i<= num; i++){
    lista.push(i)
  }
  return lista
}

function Impar(){
  const lista = []
  const num = document.getElementById("numeroImpar").value
  console.log(num)
  for (var i = 0; i<= num; i++){
    if(i%2!==0){
      lista.push(i)
    }
  }
  return lista
}

function salarios(lista){
  let salarios = []
  if(lista.length === 10){
    lista.forEach((salario) => {
      let s = salario+ (salario*0.08)
      salarios.unshift(s)
    })
  }else{
    const m = "Error hay "+lista.length+" salarios y deben ser 10"
    salarios.unshift(m)
  }

  return salarios

}

function dividir (){
  let lista = []
  for(let i = 0; i < 10; i++){
    let r = random(1,25)
    lista.unshift(r)
  }
  console.log(lista)
  const index = document.getElementById("index").value

  let numeros = []
  if (index < 0 || index > 10){
    let m = "Debe ser un numero entre 0 y 10"
    numeros.unshift(m)
  }else{
    let p = lista[index]
    lista.forEach((num) =>{
      let j = num/p
      numeros.unshift(j)
    })
  }

  return numeros
}

function tabla (){
  const div = document.getElementById("tabla")
  div.innerHTML = ""
  var table = document.createElement("table")

  

  const m = document.getElementById("columnas").value
  const n = document.getElementById("filas").value
  if(m <= 0 || n <= 0){
    var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
    div.appendChild(mensaje)
  }else{
    //filas
    for(let i = 0; i<n; i++){
      var fila = document.createElement("tr")
      for(let j = 0; j<m; j++){
        var celda = document.createElement("td")
        var texto = document.createTextNode(j)
        celda.appendChild(texto)
        fila.appendChild(celda)

      }
      table.appendChild(fila)
    }
    div.appendChild(table)
    table.setAttribute("border", "2")
  }
  
}

function tablaInput (){
  const div = document.getElementById("tablaInput")
  div.innerHTML = ""
  var table = document.createElement("table")

  

  const m = document.getElementById("columnasInput").value
  const n = document.getElementById("filasInput").value
  if(m <= 0 || n <= 0){
    var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
    div.appendChild(mensaje)
  }else{
    //filas
    for(let i = 0; i<n; i++){
      var fila = document.createElement("tr")
      for(let j = 0; j<m; j++){
        var celda = document.createElement("td")
        var texto = document.createElement("input")
        celda.appendChild(texto)
        fila.appendChild(celda)

      }
      table.appendChild(fila)
    }
    div.appendChild(table)
    table.setAttribute("border", "2")
  }
}
var text 

function calcularNota(){
    var estudiante = new Object();
    estudiante.nombre = document.getElementById("nombreEstudiante").value
    estudiante.nota1 = document.getElementById("nota1").value
    estudiante.nota2 = document.getElementById("nota2").value 
    estudiante.nota3 = document.getElementById("nota3").value
    const div = document.getElementById("11")
    const span = document.createElement("span")

    if (estudiante.nota1 >= 0.0 && estudiante.nota1 <= 5.0 &&
        estudiante.nota2 >= 0.0 && estudiante.nota2 <= 5.0 &&
        estudiante.nota3 >= 0.0 && estudiante.nota3 <= 5.0 ){
            estudiante.notaFinal = (parseFloat(estudiante.nota1)+parseFloat(estudiante.nota2)+parseFloat(estudiante.nota3))/3

            if (estudiante.notaFinal >= 3.0){
                    text = document.createTextNode("El estudiante "+estudiante.nombre+" paso la materia con " + estudiante.notaFinal)
            }
        }else{
                text = document.createTextNode("El estudiante "+estudiante.nombre+" no paso la materia con "+ estudiante.notaFinal)
        }
        span.appendChild(text)        
        div.appendChild(span)

}
    

function calcularSuma(){
  let numeros= []
  let sumaTotal = 0
  var nTd = document.createElement("td")
  const table = document.getElementById("tablaInput").children[0]
  const filas = table.children
  for (let tr of filas){
    var td = tr.children
    for(let input of td){
      var n = input.children[0].value
      numeros.push(n)
    }
  }
  numeros.forEach((num)=>{
    sumaTotal += parseFloat(num)
  })
  console.log(sumaTotal)

  var total = document.createTextNode(sumaTotal)
  nTd.appendChild(total)
  table.appendChild(nTd)
}
//trabajo

function App() {
  const [mensaje, setmensaje] = useState("");
  const [valorLlamada, setValorLLamada] = useState("$0.0")



  const [numerosMensaje, setNumeros] = useState("")


  const [menorMayorLista, setLista] = useState([])
  const [imparLista, setListaImpar] = useState([])
  const [listaSalarios, setSalarios] = useState([])
  const[salario, setSalario] = useState("")
  const[listaNumeros, setDivididos] = useState([])
  
  
  const calcularseg = () => {
    const msj = segun_horas()
    setmensaje(msj)
  }

  const CalcularLllamada = () => {
    const msj = llamada()
    setValorLLamada(msj) 
  }

  

  const calcularRept = () =>{
    const msj = iguales()
    setNumeros(msj)
  }

  const crearLista = () =>{
    setLista(menorMayor())
  }

  const crearListaImpar = () =>{
    setListaImpar(Impar())
  }

  const addSalario = () =>{
    setSalarios(list => [...list, salario])
    setSalario("")
  }

  const onSetSalario = (evt) =>{
    setSalario(evt.target.value)
  }

  const calcularSalario = () =>{
    setSalarios(salarios(listaSalarios))
  }

  const eliminarSalario = () =>{
    listaSalarios.shift()
  }

  const dividirNumeros = () =>{
    
    setDivididos(dividir())
  }

  const crearTabla = () =>{
    tabla()
  } 
  const crearTablaInput = () =>{
    tablaInput()
  }
  const suma = () =>{
    calcularSuma()
  }


  return (
    <>
      <h1>Taller Desarrollo web</h1>
      <h2>#1:</h2>
      <div>
        <span>Ingresar tiempo en segundos:</span>
        <input type="text" id='segundos'></input>
        <button onClick={calcularseg}>Calculo</button>
      </div>
      <span>{mensaje}</span>
      <h2>#2:</h2>
      <div>
        <span>Ingrese el tiempo </span>
        <input type="text" id='llamada'></input>
        <button onClick={CalcularLllamada}>Calcular</button>
      </div>
      <span>{valorLlamada}</span>
      
      <div id='11'>
      <h2>#11:</h2>
        <span>Ingrese el nombre </span>
        <input type='text' id="nombreEstudiante"></input>
        <span>Ingrese las notas</span>
        <input type='number' id='nota1'></input>
        <input type='number' id='nota2'></input>
        <input type='number' id='nota3'></input>
        
        </div>
        <button onClick={calcularNota}>calcular</button>
    <h2>#4:</h2>
      <div>
        <span>Ingrese tres numeros</span>
        <input type="text" id='uno'></input>
        <input type= "text" id="dos"></input>
        <input type= "text" id="tres"></input>
        <button onClick={calcularRept}>cargar</button>
      </div>
    <span>{numerosMensaje}</span>
    <h2>#5:</h2>
      <div>
        <span>Tamaño de la lista</span>
        <input type="text" id='numero'></input>
        <button onClick={crearLista}>crear</button>
      </div>
    <ol>{
      menorMayorLista.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>#6:</h2>
      <div>
        <span>Numero</span>
        <input type="text" id='numeroImpar'></input>
        <button onClick={crearListaImpar}>crear</button>
      </div>
    <ol>{
      imparLista.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>#7:</h2>
      <div>
        <span>Salario</span>
        <input type="text" value={salario} onChange = {(evt) => onSetSalario(evt)}></input>
        <button onClick={addSalario}>Añadir salario</button>
        <button onClick={calcularSalario}>Dividir salarios</button>
        <button onClick={eliminarSalario}>Eliminar primer salario</button>
      </div>
    <ol>{
      listaSalarios.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>#8:</h2>
      <div>
        <span>Ingrese un numero entre el 0 y 10</span>
        <input type="text" id='index'></input>
        <button onClick={dividirNumeros}>crear</button>
      </div>
    <ol>{
      listaNumeros.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>#9:</h2>
      <div>
        <span>Ingrese el tamaño  </span>
        <span>Filas:</span>
        <input type="text" id='filas'></input>
        <span>Columnas:</span>
        <input type="text" id='columnas'></input>
        <button onClick={crearTabla}>crear</button>
      </div>
      <div id='tabla'></div>
      <h2>#10:</h2>
      <div>
        <span>Ingrese el tamaño  </span>
        <span>Filas:</span>
        <input type="text" id='filasInput'></input>
        <span>Columnas:</span>
        <input type="text" id='columnasInput'></input>
        <button onClick={crearTablaInput}>crear</button>
        <button onClick={suma}>calcular</button>
      </div>
      <div id='tablaInput'></div>
    
    
    </>
  );
}

export default App;
