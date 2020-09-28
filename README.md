#### Browser Compatibility

This lib supports all browsers that are [ES5-compliant](http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

#### How working?
Its like with Jquery or Vue

States = Variables
SetState = Change Variables states

#### Documentation

## Event Listeners (event)

```
Mouse

Nome do evento	Momento do disparo

auxclick	

Um botão, ou dispositivo apontador (não primário) do dispositivo foi clicado e solto de um elemento.


click	Um botão, ou dispositivo apontador (QUALQUER, mas em breve será apenas primário) foi clicado e solto.

contextmenu	O botão direito do mouse foi clicado (antes do menu de contexto aparecer)

dblclick	Um elemento foi clicado duas vezes em um intervalo de tempo curto

mousedown	O mouse, ou dispositivo apontador está pressionando um elemento

mouseenter	O mouse, ou dispositivo apontador está acima de um elemento que tem um listener ativo

mouseleave	O mouse, ou dispositivo apontador foi removido do elemento com um listener

mousemove	O mouse está se movendo enquanto está acima de um elemento com listener

mouseover	O mouse foi movido para um elemento com um listener, ou em um de seus filhos

mouseout	O mouse foi removido do elemento, ou de algum filho contendo um listener

mouseup	O botão do mouse ou dispositivo foi solto

pointerlockchange	O botão foi bloqueado ou liberado

pointerlockerror	Não foi possível bloquear o dispositivo por motivo técnico ou de permissão

select	Algum texto está sendo selecionado

wheel	Foi detectada rotação no scroll do mouse
```


#### States
```
Você pode atualizar as States em ./state.js

Alterando algum State
```

```
setState(State, função), precisa retornar o valor para setar
```

#### States set example
```javascript
lib().setState("vezes", function(){
        return state.vezes >= 5 ? 0 : state.vezes++
})
```

#### Example
```javascript
lib("element").on('click', function({
    //Code here
}))
```

Next soon
