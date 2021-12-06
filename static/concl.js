const concl = Vue.createApp({
    data(){
        return{
            currentTab: 'Expectations',
            tabs: ['Expectations', 'Challenges', 'Impression']
            }
        },
    computed: {
        currentTabComp() {
            return 'tab-' + this.currentTab.toLowerCase()
        }

    }

    
})

concl.component('tab-expectations', {
    template: `<div class="concl-tab">
    <h2>Expectations</h2>
    <br>
            <p>Before beginning the project, our group conducted some research in terms of framework choice for both front-end and back-end development. </p>
            <br>
            <p>Many resources online recommended a Javascript framework for novice developers since it is powerful yet easy to pick up. For this reason, we decided to settle on Vue.js specifically, for it’s well written documentation, robust tool ecosystem, and readability.</p>
            <br>
            <p>For the back-end component of the website, we wanted to try out something that we had not yet used within class labs. Thus, we decided on using Flask due to it’s simplicity, which ultimately, results in concise code. </p>
            <br>
            <p>When deciding how to host our website, we wanted to use a platform that was secure and uncomplicated. Based on our research, Heroku was a cloud service provider that seemed to be flexible, reliable, user-friendly, and cost-effective. For these reasons, that is why we chose to use it. 
            </p>
            </div>`
    
})

concl.component('tab-challenges', {
    template: `<div class="concl-tab">
    <h2>Challenges</h2>
    <br>
            <p>Some of the challenges we encountered while completing are project include:</p>
             <ul>
                 <li>Finding as many resources for Vue.js 3 as compared to Vue.js 2, as the latter has been out longer than the new update.
                 </li>
                 <li>Incorporating our front-end and back-end frameworks together.
                 </li>
                 <li>Getting adjusted to using Javascript in addition to just regular HTML and CSS. Jumping between different types of syntax got a bit confusing at times.
                 </li>
                 <li>Styling the pages yet maintaining dynamic functionality was also somewhat of a learning curve.</li>
             </ul>
    </div>`
}), 

concl.component('tab-impression', {
    template: `<div class="concl-tab">
    <h2>Impression</h2>
    <br>
            <p>Overall, as a group we are happy and satisfied with the decisions we made in terms of framework and server choice. Although there were a few challenges that we encountered, we ultimately feel as though our transition to using these frameworks and technologies was fairly positive and natural.</p>
            <br>
            <p>Some positive points we came across:</p>
            <ul>
                <li>Both the frameworks we chose were incredibly easy to install, especially Vue.js because of the CDN option it provided for smaller scaled projects.
                </li>
                <li>The readability of both frameworks was also excellent.
                </li>
                <li>There are tons of online resources and tutorials in addition to detailed documentation for both Vue.js and Flask.
                </li>
            </ul>
    </div>`
    
}),


concl.mount("#concl")