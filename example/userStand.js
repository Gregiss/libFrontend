lib("h3").addClass("red")

lib("h3").on("click", function(){
    if(lib("h3").hasClass("red")){
        lib("h3").removeClass("red")
    } else{
        lib("h3").addClass("red")
    }
    lib().setState("vezes", function(){
            return state.vezes >= 5 ? 0 : state.vezes++
    })
})

const like = lib().component(function(){
    return object = {
        nameComponent: 'like',
        state: {
            cliques: 0
        },
        render: `
        <button>
            HELLO
        </button>
        `,
        methods: () => {
            console.log(object.state.cliques)
            object.state.cliques++
        }
    }
})