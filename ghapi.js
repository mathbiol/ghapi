console.log('ghapi loaded ')

// https://developer.github.com/v3/repos/contents

GHAPI = function(){
    this.created=Date()
    GHAPI.dir.push(this) // register in directory
    this.get=function(q){return GHAPI.get(q)}
    //debugger

}
GHAPI.url='https://api.github.com/'
GHAPI.dir=[]
GHAPI.get=function(q){
    q=q||''
    return $.getJSON(this.url+q)
}
GHAPI.getFun=function(){
    this.get
}




gh = new GHAPI()

/* Things to try

gh.get().then(console.log) // get root operators



*/