const app = Vue.createApp({
    data(){
        // definite varaibles here
        return{
            frameworks: [{
                end: "Vue.js",
                descriptionPROS: ["Low Storage Requirements", "Simplicity", "Documentation", "Reactivity", "Components And Reusability", "Flexibility"],
                descriptionCONS: ["Language Barriers And Restricted Community", "Spoilt For Options", "Lack of Financial Support for Large-scale Projects", "Limited Resources"],
                img_url: "https://avatars.githubusercontent.com/u/6128107?s=280&v=4",
                show: true,
                },
                {
                end: "Flask", 
                descriptionPROS: ["Scalable", "Flexible", "Easy to Negotiate", "Lightweight", "Documentation"],
                descriptionCONS: ["Lack of Tools", "Difficult to get familiar with a larger Flask app", "Maintenance Costs"],
                img_url: "https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png",
                show: true,
                }]
            }
        },
    methods: {
        ShowDescription(frame){
            frame.show = !frame.show;
        }
    },

})


app.mount('#app')



