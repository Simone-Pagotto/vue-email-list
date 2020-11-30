const app = new Vue({
    el:'#root',
    data:{
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails:[]
    },
    mounted(){
        for(let i=0; i<10; i++){
            axios.get(this.url).then((result) =>{
                console.log(result.data.response);
                this.emails.push(result.data.response);
            });
        }
        
    }
})
