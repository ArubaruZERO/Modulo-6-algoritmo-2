 var randomPick = (n, min, max) => {
     result = [];
     var range = max - min + 1;
     var index = 0;
     while (index <= n - 1) {                       
         result[index]= Math.floor((Math.random() * range) + min);
         index++;
        
        
     }
   console.log(result)

 }

 randomPick(6, 1, 49); // Apuesta automática de la primitiva
 randomPick(15, 1, 15); // Escoge combinación de bolas de billar
 randomPick(1, 1, 6); // Tirada aleatoria de un dado