
//the heart of the view application

const app = Vue.createApp({
    data(){
        return{
            product: 'SourdoughBread',
            image: 'assets/images/sourdough.png',
            link : 'https://www.fornobrisa.it/it/2-forno-brisa',
            inStock: false
        }
    }
})