var objectes = {"taula":0, "cadira":1, "ordinador":2, "llibreta":3};
for (var propietat in objectes){
    console.log("L'objecte " + propietat + " està a la posició " + objectes[propietat]);
  }