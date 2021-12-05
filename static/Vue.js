const app = Vue.createApp({
  data() {
    return{
      top:'',
      bot:'',
      image:"https://cdn.discordapp.com/attachments/816011914206511165/916927953781260348/unknown.png"
    }
  },
  methods: {
    async submitForm(){
      const res = await fetch(`/meow?top=${this.top}&bot=${this.bot}`);
      const url = await res.text();
      this.image = url;
    }
  }
})

app.mount('#app')