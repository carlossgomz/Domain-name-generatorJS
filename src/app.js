window.onload = function() {
  let domainGenerator = [];
  var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  let ext = [".com", ".net", ".us", ".io"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < ext.length; d++) {
          domainGenerator.push("  " + pronoun[a] + adj[b] + noun[c] + ext[d]);
        }
      }
    }
  }
  console.log(domainGenerator);
  document.getElementById("domain.results").innerHTML = domainGenerator;
};
