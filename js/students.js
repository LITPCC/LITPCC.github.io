function displayEvents(){
    events.forEach((repo, index) => {
        parseRepo(repo, index);
    });
}
function parseRepo({name, organizer, date, images, location, link, description}, index){
    let eventTemplate = `
        <div class="card waves-effect">
            <div class="event-grid" onclick="window.open('${link}', '_blank');">
                <div class="event-person">
                    <div class="event-avatar" style="background-image: url('${images['avatar']}');">
                    </div>
                    <div class="event-person__name">
                        ${organizer}
                    </div>
                </div>
                <div class="event-description card-content">
                    <span>${name.length>40?name.substr(0,37)+"...":name}</span>
                    <br>
                    <br>
                    ${description.length>240?description.substr(0,237)+"... [LEARN MORE]":description}
                </div>
                <div class="event-splash" style="background-image: url('${images['splash']}'); background-color: black;">
                </div>
            </div>
            <div class="card-action">
                <a class="btn waves-effect deep-purple lighten-2" href="${link}" target="_blank">More Info</a>
                <div class="right" style="color: grey;">
                    ${date['start']} - ${date['end']}
                </div>
            </div>
        </div>
    `;
    document.getElementById('event-bulletin').insertAdjacentHTML('beforeend', eventTemplate);
}