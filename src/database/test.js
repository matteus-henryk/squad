const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async(db) => {
  // Inserir dados

  proffyValue = { 
    name: "Matteus Henryk", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "9988744121", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    
  }

  classValue = {
    subject: 1, 
    cost: "20", 
    // o proffy id vira do banco de dados
  }

  classScheduleValues = [
    //class_id vira pelo bonco de dados, após  cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar os dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  //consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*,proffys.*
    FROM proffys 
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectClassesAndProffys)

  // o horaio que a pessoa trabalha, por exemplo é das 08:00 ate as 18:00
  // o horário do time_from (8H) precisa ser menor ou igual ap horário solicitado
  //o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `)
  // console.log(selectClassesSchedules)
})