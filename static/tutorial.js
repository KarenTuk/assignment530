const tutorial = Vue.createApp({
    data(){
        return{
            currentTab: 'html',
            tabs: ['html','css','vue', 'flask'],
            }
        },
    computed: {
        currentTabComp() {
            return 'tab-' + this.currentTab.toLowerCase()
        }

    }

    
})

tutorial.component('tab-html', {
    template: `<div class="fw-tab">
    <h2>Using HTML to make the Website <img src="https://cdn.discordapp.com/attachments/882142766669385730/917168943632900186/unknown.png" height="75" width="75"></h2>
    <br>
    <br>
    In this tutorial, we will use html, css, vue, and flask to create a random cat meme generator using a random cat api and a meme generator api. 
    <br>
    <br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917183922213883944/Screen_Shot_2021-12-05_at_5.41.23_PM.png">
            <br>
            <br>
            <p>First, set up the basic html file with the proper meta data and page title.</p>
               <br>
               <br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917183953495007302/Screen_Shot_2021-12-05_at_5.41.31_PM.png">
            <br>
            <br>
            <p>Next, add the script for using Vue in the html file. </p>
            <br>
            <br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917187164645752882/Screen_Shot_2021-12-05_at_5.54.16_PM.png">
            <br>
            <br>
            
            <p>
            In this picture, the code shows alot of extra tags that are included for aesthetic purposes (i.e. the header tag, the h1 tag, etc.). In
            this explanation, only the important functional parts of the code will be explained. Create a div tag and make the id=#app. This will correspond
            to the vue app that will be made in the javascript file. Inside the div tag, make a form tag and inside the tag, type @submit.prevent="submitForm".
            This is an event modifier that will prevent the page from getting navigated to the action url of the form, which we ommited, because we want 
            only the image to change when we press the submit button, not the page.  Next, label ur textboxes with the appropriate titles (i.e. top text, bottom text) and create input tags for the input text elements. Make sure 
            to include the v-model modifier to indicate which value corresponds to which in the javascript file. Then, create a submit button and close the form. 
            Create an img tag and type src:"image" in an image. The "image" url will be stored on the javascript file, and the colon means that its a template variable. 
            Finally, create a directory called "static" in your main directory create a file called Vue.js in it. Then, back in your html file, in the final script tag, make sure src equals url_for('static', filename='Vue.js') in a script tag.
            This will make the Vue.js file useable and bind it to the html file. 
           
            </p>
            </div>`
    
})  

tutorial.component('tab-css', {
    template: `<div class="fw-tab">
    <h2> CSS Styling <img src="https://cdn.discordapp.com/attachments/882142766669385730/917168878507921449/919826.png" height="75" width="75"> </h2>
    <br>
    <br>
    Make sure to put ur css file into the static folder. I called it "styles.css" and used <link rel="stylesheet" href="install.css"> in the head of the html
    file to make sure the styles will be applied to the elements on the webite. 
    <br>
    <br>
    <img src="https://cdn.discordapp.com/attachments/882142766669385730/917205114056482816/Screen_Shot_2021-12-05_at_7.05.35_PM.png">
    <br><br><p>These are some of the styles we used to add aesthetic value to the website. They do not change the actual functionality of the code.</p>
    <br>
    <img src="https://cdn.discordapp.com/attachments/882142766669385730/917205165650636800/Screen_Shot_2021-12-05_at_7.05.49_PM.png">
    </div>`
}), 

tutorial.component('tab-vue', {
    template: `<div class="fw-tab">
    <h2>Frontend: Vue.js <img class="vIcon" src="../static/vue-icon.svg" alt="Vue Icon"></h2>
    <br>
    <p>Make a file called "Vue.js" and put it in the static directory.</p><br><br>
    <img src="https://media.discordapp.net/attachments/882142766669385730/917210844591448074/Screen_Shot_2021-12-05_at_7.28.22_PM.png">
            <br><br>
    <p>In the Javascript file, create a new application instance and call it app. in the application instance, create a data function that will 
    store the values that will be typed in the input boxes. As well, put the url of an image png to be the starting image. </p>
            <br><br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917210877864849408/Screen_Shot_2021-12-05_at_7.28.30_PM.png">
    <br><br>
    <p>Create a method function, still within the application instance, that will use the top and bottom inputs to make new memes. it uses the /meow command
    that will be created in the flask file to generate a random cat image from the random cat api. And uses the top and bottom variables that store the values from
    the input boxes to create the meme with text. Then it replaces the current image on the screen with the new meme. Finally, close the application instance with the 
    appropriate curly brackets and use app.mount(#app) to make the program functional and bound to the html file.</p>
    
               </div>`
    
}),

tutorial.component('tab-flask', {
    template: `<div class="fw-tab">
    <h2>Backend: Flask <img class="fIcon" src="../static/flask-icon.svg" alt="Flask Icon"> </h2>
    <br><br>
    <img src="https://cdn.discordapp.com/attachments/882142766669385730/917218168546668554/Screen_Shot_2021-12-05_at_7.57.28_PM.png">
    <br><br>
            <p>First, import the required libraries from flask, like Flask, render_template, and request. Also import requests. 
            You might have to pip install requests from your terminal first. Next, initialize the app by typing "app = Flask(__name__)"
            Next, create a new app route, which will return a render_template of the starting html file. </p>
            <br><br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917218202923200532/Screen_Shot_2021-12-05_at_7.57.37_PM.png">
            <br><br>
            <p>Create a new app route, this one called '/meow', and make sure the methods are both "GET" and "POST". Define the function called meow(). 
            This is where we will generate random cat images from the cat api (example: resp = requests.get("https://api.thecatapi.com/v1/images/search")) gets the url, data=resp.json() sends a json response, and
            img_url=data[0]["url"] indexes the json to get a new cat url). Then you create new top and bottom variables to store the values of the top and bottom variables from the javascript file. Then to create the 
            final meme, we use the meme generation api that creates a meme based on a url. We concatenate the strings of the meme url, the cat url, and top and bottom strings to create the final image. Finally, we return the image and it will update the page accoundingly.</p>
            <br><br>
            <img src="https://cdn.discordapp.com/attachments/882142766669385730/917218227476639744/Screen_Shot_2021-12-05_at_7.57.43_PM.png">
            <br><br>
            <p>Finally, run the app using app.run in a if __name__=="__main__" if statement.</p>
    </div>`
    
}),


tutorial.mount("#tutorial")