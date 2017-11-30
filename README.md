# AJAX ABSTRACT

Simples e eficiente biblioteca javascript que abstrai o uso do construtor XMLHttpRequest

## Getting Started

Livre para usar

### Prerequisities

Javascript básico e vontade :)

```
import Ajax from 'ajaxabstracjs'

ou

import Ajax from './node_modules/ajaxabstractjs/ajaxabstractjs.js'

Ajax.get('yourUrl', (res, err) => {
	// heres go your logic
})
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
git clone git@github.com:JoHNNyRiver/ajaxabstract.git
```

ou

```
npm install ajaxabstractjs
```

### É simples começar com AJAX ABSTRACT

Importe ajaxabstract do diretorio onde a biblioteca se encontra ou instancie na tag script

```
import Ajax from 'ajaxabstracjs'

ou

import Ajax from './node_modules/ajaxabstractjs/ajaxabstractjs.js'

ou

<script src="./node_modules/ajaxabstractjs/ajaxabstractjs.min.js"></script>
<script src="YOUR SCRIPT JS"></script>


Ajax.get('yourUrl', (res, err) => {
	// heres go your logic
})

// retorna os dados em um objeto
document.forms[0].addEventListener('submit', event => {
  event.preventDefault()

  Ajax.post('yourUrl', new FormData(document.forms[0]), (response, err) => {
    if (err) throw new Error(err.message)
    console.log(response)
  })
})

//exemplo de retorno
{data: "{}", parsed: {…}, status: 200, statusText: "OK", time: ProgressEvent, …}

```

## Config Headers (exemplo)
```
import Ajax from './node_modules/ajaxabstractjs/ajaxabstractjs.js'

// Configurando o cabeçalho da requisição
Ajax.setHeader('Content-Type', 'application/*')

```

## Config Opcionais (exemplo)
```
import Ajax from './node_modules/ajaxabstractjs/ajaxabstractjs.js'

// Configurando o cabeçalho da requisição
Ajax.settings({target: 'here you info the form on dom', key: 'your key'})

// Depois no Dom
<form action="">
	<div class="inputGroup">
		<label for="name">Name</label>
		<input type="text" id="name" name="nm">
	</div>

	<input type="submit">

	<input type="hidden" value="YOUR KEY WILL GO HERE" name="key">
</form>

document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault()

  // Aqui sua key é enviada por meio do construtor FormData
  Ajax.post('yourUrl', new FormData(this), (response, err) => {
    if (err) throw new Error(err.message)
    console.log(response)
  })
})
```
## Feito com

* Sublime Text - um incrivel editor de códigos
* ES6 - novas featerues no ecmascript 2015
* Carinho e vontade - Pois tudo na vida que é bem feito é assim que começa

## Authors

* **João Ribeiro** - *Front-end* - [Portfólio](https://johnnyriver.github.io/portfolio/)

Contribuidor [contributors](https://github.com/ibaro)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
