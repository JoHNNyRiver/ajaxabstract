# AJAX ABSTRACT

Simples e eficiente biblioteca javascript que abstrai o uso do construtor XMLHttpRequest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

Javascript básico e vontade :)

```
import Ajax from 'ajaxabstrac'

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
npm install ajaxabstract-js
```

### É simples começar com AJAX ABSTRACT

Importe ajaxabstract do diretorio onde a biblioteca se encontra ou instancie na tag script

```
import Ajax from 'ajaxabstrac'


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

## Feito com

* Sublime Text - um incrivel editor de códigos
* ES6 - novas featerues no ecmascript 2015
* Carinho e vontade - Pois tudo na vida que é bem feito é assim que começa

## Authors

* **João Ribeiro** - *Front-end* - [Portfólio](https://johnnyriver.github.io/portfolio/)

Contribuidor [contributors](https://github.com/ibaro)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details