const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search states.json and filter it
const searchStates = async searchText =>{
    const res = await fetch('../data/states.json');
    const states = await res.json();

    //Get matches to current text input
    let matches = states.filter(states => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return states.name.match(regex) || states.abbr.match(regex);
    });

    if(searchText.length===0){
        matches=[];
        matchList.innerHTML='';
    }
    outputHtml(matches);

};

//Show results in html
const outputHtml = matches =>{
    if(matches.length>0){
        const html = matches.map(match=>`
            <div class="card card-body mb-1"
                <h4>${match.name} (${match.abbr})<span class="text-primary">${match.capital}</span>
                </h4>
                <small>Lat: ${match.lat} / Long: ${match.long}</small>
            </div>
        `).join('');
        console.log(html);
        matchList.innerHTML = html;
    }
}
search.addEventListener('input',()=> searchStates(search.value));