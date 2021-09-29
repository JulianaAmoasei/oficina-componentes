## enviar produtos para a cozinha
- Enviar o pedido para o endpoint `lab-api-bq.herokuapp.com/orders`
- Lembrar de montar o objeto de acordo com o que está na documentação d API
- Montar a requisição do `fetch()` com as informações solicitadas no cabeçalho da requisição (não esquecer do token)
- O objeto tem que ser convertido para string antes de ser enviado
- Limpar o objeto do pedido atual após enviar

## `useEffect`
- É usado para controlar o ciclo de vida do componente
- https://pt-br.reactjs.org/docs/hooks-effect.html
- O segundo parâmetro (array) é opcional. Se não passar nada, o `useEffect()` é executado a cada render. Se passar `[]` é executado apenas no primeiro render e se quiser utilizar algum valor dentro do `useEffect()`, passe o valor dentro do array.

```js
const [ productsList, setProductsList ] = useState([])

useEffect(() => {
  const token = 'pegar o token do localStorage'

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: token },
  };

  fetch('lab-api-bq.herokuapp.com/products', requestOptions)
    .then((response) => response.json())
    .then((data) => setProductsList(data));
}, [token]);
```

## `useRef()`
- Atualiza valor de variável mas não renderiza novamente o componente
- Tem uma propriedade interna `.current` que guarda o valor atual
- https://pt-br.reactjs.org/docs/hooks-reference.html#useref
- https://medium.com/@guigaoliveira_/conhecendo-o-useref-do-react-9d67e66

