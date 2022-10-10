let ans
let compScore = 0
let userScore = 0

const computer = () => {
    
     let compArr = ['Rock', 'Paper', 'Scissors']
     let computerChoice = compArr[Math.floor(Math.random() * 3)]
     return computerChoice
    
}


const playUserClick = () => {
  
  let rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => result(rpsButton.value)
  })
}


const result = (userChoice) =>{

  playUserClick()

  let user = userChoice
  let comp = computer()
  
  let stats = "You : "+user+"   ||   Comp : " +comp
  stat.innerHTML = `<h3>${stats}<h3>`

if(comp==user)
{
   ans = "MATCH TIE"
   res.innerHTML = `<h2>${ans}<h2>`

}
else if(user=='Rock' && comp=='Scissors')
{
  userScore++
  ans = "USER WINS"
  res.innerHTML = `<h2>${ans}<h2>`
}
else if(user='Paper' && comp=='Rock')
{
  userScore++
  ans = "USER WINS"
  res.innerHTML = `<h2>${ans}<h2>`
}
else if(user=='Scissors' && comp=='Paper')
{
  userScore++
  ans = "USER WINS"
  res.innerHTML = `<h2>${ans}<h2>`
}
else
{
  compScore++
  ans = "COMP WINS"
  res.innerHTML = `<h2>${ans}<h2>`
}
score(compScore,userScore)

}

const score = (compScore,userScore) =>{
  if(compScore==0 && userScore==0)
  {
    return
  }
  else
  {
   scoreIs = "User : "+userScore+" || Comp : "+compScore
   scores.innerHTML = `<h4>${scoreIs}</h4>`
  }
}

const MainPlayFunction = () =>{

  playUserClick()

}

MainPlayFunction()

