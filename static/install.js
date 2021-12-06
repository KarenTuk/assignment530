const install = Vue.createApp({
    data(){
        return{
            currentTab: 'Vue',
            tabs: ['Vue', 'Flask', 'Heroku'],
            }
        },
    computed: {
        currentTabComp() {
            return 'tab-' + this.currentTab.toLowerCase()
        }

    }

    
})

install.component('tab-vue', {
    template: `<div class="fw-tab">
    <h2>Frontend: Vue.js <img class="vIcon" src="../static/vue-icon.svg" alt="Vue Icon"></h2>
    <br>
            <p>Vue is a modern and versatile front end JavaScript framework that 
               can be implemented into a project multiple ways depending on the needs 
               of the developer.</p>
               <br>
            <p>There are 4 ways to add Vue.js to your project</p>
            <ol>
                <li>Import Vue as a CDN (content delivery network) package on the page.</li>
                <li>Download the JavaScript files and host them yourself.</li>
                <li>Install Vue using npm (node package manager).</li>
                <li>Use the official CLI provided by Vue to start a project.</li>
                <br>
            </ol>
            <p>For learning purposes and novice developers, the CDN method is recommended. 
               Thus, for the purpose of our project, we have also decided to go with this route.</p>
            <br>
            <h3>CDN Installation Method:</h3>
            <ol>
                <li>Create an HTML file.</li>
                <li>Within the head tag, copy the following script tag. Vue will be registered as a global variable.</li>
                <p>For Vue 3: &lt;script src="https://unpkg.com/vue@3.0.2"&gt;&lt;/script&gt;</p>
                <p>For Vue 2: &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"&gt;&lt;/script&gt;</p>
            </ol></div>`
})

install.component('tab-flask', {
    template: `<div class="fw-tab">
    <h2>Backend: Flask <img class="fIcon" src="../static/flask-icon.svg" alt="Flask Icon"> </h2>
    <br>
            <p>Flask is a python web framework designed to enable developers to create and scale web 
               apps easily and quickly.</p>
             <ol>
                 <li>Start by downloading the latest version of Python from https://www.python.org/downloads/</li>
                 <li>Check that Python is correctly installed by running the command ‘python --version’ into your Windows cmd or Mac terminal.</li>
                 <li>Install flask by running the command ‘pip install flask’ into your Windows cmd or Mac terminal once again.</li>
                 <li>Run the python command once again followed by import flask. If no error message occurs, then flask has correctly been installed.</li>
             </ol>
    </div>`
}), 

install.component('tab-heroku', {
    template: `<div class="fw-tab">
    <h2>Server-Side: Heroku <img class="fIcon" src="../static/heroku-icon.svg" alt="Heroku Icon"></h2>
    <br>
            <p>Heroku is a cloud platform service that supports several programming languages and allows developers to easily build, run, and operate applications in the cloud. In order to get it up and running, there are a few steps a user needs to follow.
            </p>
            <br>
             <ol>
                 <li>Download and install the Heroku CLI</li>
                 <li>Log in to your Heroku account and follow the prompts to create a new SSH public key using the command: $ heroku login
                 </li>
                 <li>Create a new Git repository in a new or existing directory, for example:
                    <ul> 
                        <li>$ cd project/</li>
                        <li>$ git init</li>
                        <li>$ heroku git:remote -a myProject</li>
                    </ul>
                </li>
                <li>Deploy your application. Commit your code to the repository and deploy it to Heroku using Git:
                <ul> 
                    <li>$ git add .</li>
                    <li>$ git commit -am “file”</li>
                    <li>$ git push heroku master</li>
                </ul>

             </ol>
    </div>`
    
}),


install.mount("#app")