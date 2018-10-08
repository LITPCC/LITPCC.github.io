function getReq(url, callback){
    axios.get(url,  { 'headers': { 'Accept': 'application/vnd.github.mercy-preview+json'}})
        .then(function (response) {
            callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function load(){
    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    let url = 'https://api.github.com/search/repositories?q=topic:litpcc';
    getReq(url, displayProjects);
}
function displayProjects(data){
    data['items'].forEach(repo => {
        parseRepo(repo);
    });
}
function parseRepo(repoData){
    let projDesc = repoData['description'];
    if( projDesc == null){
        projDesc = "No description but you can check out the code!";
    }
    let projectTemplate = `
    <div style="height: fit-content;" class="card">
        <div class="project-header">
            <div class="project-avatar" style="background-image: url('${repoData['owner']['avatar_url']}');">
            </div>
            <div class="project-title">
                ${repoData['name']}
            </div>
        </div>
        <div class="project-user">
            <div class="container">
                ${repoData['owner']['login']}
            </div>
        </div>
        <div class="project-description">
        <div class="container">
            <p>
                ${projDesc}
            </p>
        </div>
        </div>
        <div class="card-action center">
            <a class="btn waves-effect" href="${repoData['html_url']}"} target="_blank";">SEE MORE</a>
        </div>
    </div>
    `;
    document.getElementById('project-gallery').insertAdjacentHTML("beforeend", projectTemplate);
}