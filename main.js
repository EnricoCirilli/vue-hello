
//the heart of the view application

const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Forno Brisa',
            image: 'assets/images/bianco.jpeg',
            link : 'https://www.fornobrisa.it/it/2-forno-brisa',
            inventory: 8,
            ingredients : ['Ingredienti:','Farine Biologiche', 'Acqua Filtrata','Pasta Madre', 'Sale Integrale'],
            variants: [
                {id: 2234, color:'bianco', image:'assets/images/bianco.jpeg'},
                {id: 2235, color:'integrale', image: 'assets/images/integrale.jpeg'},
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})