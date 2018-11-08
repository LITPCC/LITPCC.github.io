let lastStored;
function getReq(url, callback){
    axios.get(url,  { 'headers': { 'Accept': 'application/vnd.github.mercy-preview+json'}})
        .then(function (response) {
            callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function whatjs(){
    let url = 'https://api.github.com/search/repositories?q=topic:litpcc';
    getReq(url, displayProjects);
    window.addEventListener("resize", restructure);
}
function displayProjects(data){
    document.getElementById('project-col-1').textContent = "";
    document.getElementById('project-col-2').textContent = "";
    document.getElementById('project-col-3').textContent = "";
    lastStored = data;
    data['items'].forEach((repo, index) => {
        parseRepo(repo, index);
    });
}
function parseRepo({description, homepage, owner, name, html_url}, index){
    let projDesc = description;
    if( projDesc == null){
        projDesc = "No description but you can check out the code!";
    }
    let projectTemplate = `
        <div class="card waves-effect">
            <div onclick="window.open('${html_url}', '_blank');">
                <div class="project-header">
                    <div class="project-avatar" style="background-image: url('${owner['avatar_url']}');">
                    </div>
                    <div class="project-title">
                        ${name.length>20?name.substr(0,17)+"...":name}
                    </div>
                </div>
                <div class="project-user">
                <div>
                    <div class="container">
                        ${owner['login']}
                    </div>
                </div>
                </div>
                <div class="project-description card-content">
                    <p>
                        ${projDesc}
                    </p>
                </div>
            </div>
            <div class="card-action center">
                <a class="btn waves-effect deep-purple lighten-2" href="${homepage==null?html_url:homepage}" target="_blank">View Homepage</a>
            </div>
        </div>
    `;
    if(getComputedStyle(document.getElementById('project-col-3')).display == "none"){
        document.getElementById('project-col-' + ((index%2)+1)).insertAdjacentHTML("beforeend", projectTemplate);
    }else{
        document.getElementById('project-col-' + (index%3+1)).insertAdjacentHTML("beforeend", projectTemplate);
    }

}
function restructure(){
    displayProjects(lastStored);
}