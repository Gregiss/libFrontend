lib("button").on('click', function(){
    lib().setState("count", function(){
        return state.count < 5 ? state.count++ : 0
    })
})

lib().component(function(){
    return {
    nameComponent: "like",
    render: `
        <h1>Teste</h1>
    `,
    methods: {
        mouse: 'click',
        function: () => {
            alert("teste")
        }
    }
}
})