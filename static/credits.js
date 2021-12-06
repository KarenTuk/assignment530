const listing = Vue.createApp({
    data(){
        return{
            hey: "hello",
            references: [
                {name: "Chart", link: "https://www.monterail.com/blog/vue-vs-react-2021"},
                {name: "Vue", link: "https://vuejs.org/"},
                {name: "Flask", link: "https://flask.palletsprojects.com/en/2.0.x/"},
                {name: "Heroku", link: "https://www.heroku.com/"}
            ]
            }

        }
})


listing.mount('#listings')
