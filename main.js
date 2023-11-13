
//the heart of the view application

const app = Vue.createApp({
    data(){
        return{
            product: 'Forno Brisa',
            image: 'assets/images/sourdough.png',
            link : 'https://www.fornobrisa.it/it/2-forno-brisa',
            inventory: 8,
            ingredients : ['Ingredienti:','Farine Biologiche', 'Acqua Filtrata','Pasta Madre', 'Sale Integrale']
        }
    }
})