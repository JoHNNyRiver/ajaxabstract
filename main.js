/*
* author: João Luís Ribeiro <joaoluis@ibaro.com.br>
* version: 2.0.0
* description: Ajaxabstract é uma bibliteca que usa XMLHttpRequest como abstração para facilitar o dia a dia do desenvolvedor web
*/
const Ajax = (function () {
  const methods = ['get', 'post', 'put', 'delete']
  const scope = {}

  /**
   * helperHttp é uma função privada para auxilio dos metodos post, put, get e delete
   * @param  {string}     method recebe um string indicando o metodo a ser usado
   * @param  {variable}   uri recebe outro parametro
   * @param  {Function}   cb callback da resposta retornada pelo metodos
   * @param  {object}     data recebe um objeto por padrão é nulo
   * @return {object}       retorna um objeto como resposta no callback
   */
  const helperHttp = (method, uri, cb, data = null) => {
    const xhr = new window.XMLHttpRequest()

    xhr.open(method, uri, true)

    if (scope.headers && typeof data !== 'object') {
      xhr.setRequestHeader(scope.headers.contentType, scope.headers.application)
    }

    xhr.onprogress = (data) => {
      scope.progress = data
    }

    xhr.onerror = () => {
      console.clear()
      cb(null, {message: `Erro ao estabelecer conexão com ${uri}`, status: xhr.status})
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        let mimiType = xhr.getResponseHeader('Content-Type')
        let parser = null

        switch (mimiType) {
          case 'application/json':
            parser = JSON.parse(xhr.responseText)
            break
          case 'text/html':
            const parserDom = new DOMParser()
            parser = parserDom.parseFromString(xhr.responseText, 'text/html')
            break
          case 'application/xml':
            const parserXML = new DOMParser()
            parser = parserXML.parseFromString(xhr.responseText, 'application/xml')
            break
          default:
            parser = false
        }

        cb({
          data: xhr.responseText,
          parsed: parser,
          status: xhr.status,
          statusText: xhr.statusText,
          time: scope.progress,
          mimitype: mimiType},
        null)
      } else {
        cb(null, {message: xhr.responseText, status: xhr.status, time: scope.progress})
      }
    }

    xhr.send(data)
  }

  /**
   * configuração para envio de chave (opcional) metodo encadeado
   * @param  {object} options.target recebe o formulario e atribui a scopo publico
   * @param  {object} options.key    chave de acesso ou de atenticação
   * @return {function}     retorna a propria função
   */
  scope.settings = function ({target = 0, key = null}) {
    const form = document.forms[target] ? document.forms[target] : document.querySelector(target)

    if (key) form.insertAdjacentHTML('beforeend', `<input type="hidden" value="${key}" name="key">`)
    scope.target = form
    return this
  }

  /**
   * Configuração do cabeçalho da requesição
   * @param  {string} contentType recebe otipo de conteudo
   * @param  {string} application recebe otipo da aplicação
   * @return {function}  retorna a propria função
   */
  scope.setHeader = function (contentType, application) {
    scope.headers = {}
    scope.headers['contentType'] = contentType
    scope.headers['application'] = application
    return this
  }

  /**
   * Metodo de requesição post, put, get e delete
   * @param  {array} method itera sobre o array de metodos
   * @return {function}  retorna a propria função
   */
  methods.forEach(method => {
    scope[method] = (uri, body = null, cb) => {
      const data = (body instanceof FormData) ? body : JSON.stringify(body)

      if (typeof body === 'function') {
        cb = body
      }

      helperHttp(method, uri, cb, data)
      return this
    }
  })

  return scope
})()

// exportando
export default Ajax
