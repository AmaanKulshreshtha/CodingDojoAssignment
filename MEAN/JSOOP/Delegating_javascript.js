function leadBootcamp(language, leader){
  var outcome = leader(language);
  console.log(outcome);
}


function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language]
  } else {
    return "Maybe not yet";
  }
}

leadBootcamp('Android',Mike);
leadBootcamp('Python',Mike);
