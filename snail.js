snail = function(array) {
    let result = [];
    // Input validation
    if (array.length==0){
        return [];
    } else if(array.length==1){
        if(result.length==0){
            return(array[0]);
        }
    }

    // Current position
    let currentX = 0;
    let currentY = 0;
    //Current array
    let currentArray = array; 

    for (let index = 0; index < array.length-2; index++) {
        if(callback(currentArray)=="*"){
            return result;
        }
        callback(currentArray);  
    }
    
    function callback(array){
        if(array.length==1){
            result.push(Number(array[0]));
            return "*";
        }
        // Right - 0, Bottom - 1, Left - 2, Top - 3
        for (let direction = 0; direction < 4; direction++) {
            switch (direction) {
                case 0:
                    for (currentX; currentX < array.length; currentX++) {
                        addToArray(array[currentY][currentX]); 
                        array[currentY][currentX] = "*";  
                    }
                    currentY++;
                    currentX--;
    
                    break;
                case 1:
                    for (currentY; currentY < (array.length-1); currentY++) {
                        addToArray(array[currentY][currentX]);   
                        array[currentY][currentX] = "*";
                    }

                    break;
                case 2:
                    for (currentX; currentX >= 0; currentX--) {
                        addToArray(array[currentY][currentX]);    
                        array[currentY][currentX] = "*";       
                    }
                    currentX++;
                    currentY--;
    
                    break;
                case 3:
                    for (currentY; currentY > 0; currentY--) {
                        addToArray(array[currentY][currentX]);   
                        array[currentY][currentX] = "*";
                    }    
                    break;
                default:
                    break;
            }
        }
        currentArray = getArray(array);
    }
    
    // Function which return arrays without "*"
    function getArray(array){
        let array2 = [];
        for (let i = 0; i < array.length; i++) {
            for (let k = 0; k < array.length; k++) {
                if(array[i][k]!="*"){
                    array2.push(array[i][k]);
                }
                
            }
        }
        let arrays = [];

        let size = Math.sqrt(array2.length);
        
        while (array2.length > 0){
            arrays.push(array2.splice(0, size));
        }
        return arrays;
    }

    function addToArray(arr){
        if (arr!="*"){
            result.push(arr);
        }
    }
 
    return result;
}