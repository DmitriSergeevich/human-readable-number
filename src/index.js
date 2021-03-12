module.exports = function toReadable (number) {    
        const base = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty'
        };
        const dozens = { 
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety',
            1: 'one hundred'
        };
    
        let numberString = String(number);
        for(let i =0; i< numberString.length; i++){
            //                                                          Проверяем по готовым позициям
            if(number <= 20){
                return base[number]
            }
           
            //                                                              Комбинируем двузначные
            else if(number > 20 && number < 100){
              return  doubleDigit(numberString)
            }
            //                                                              Комбинирую трехначные
            else if(number >= 100){
                return tripleDigit(numberString)
            }            
        }
        function doubleDigit(str){
            if(str == '00'){
            return '';
            }else if(Number(str)<=20){
                return `${base[Number(str)]}`
            }else if(Number(str)>20 && str[1]==='0'){
                return `${dozens[str[0]]}`
            }
            return `${dozens[str[0]]} ${base[str[1]]}`
        } 
        function tripleDigit(str){
            if(str.slice(1,3) === '00'){
                return `${base[str[0]]} hundred`
            }
            
            //Трезначные возвращаются с подставленной тысячей и комбинацией из двузначных
            return  `${base[str[0]]} hundred ${doubleDigit(numberString.slice(1,3))}`
            
        }
        
    }