//dados
const subjects = [
 
  "Fortnite",
  "Minecraft",
  "Free Fire",
  "Call of Duty: Warzone",
  "League of Legends",
  "Apex Legends",
  "Counter-Strike: Global Offensive",
  "PUBG",
  "Dota 2",
  "GTA V",
]

const weekdays = [
 
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// funcionalidades 

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}