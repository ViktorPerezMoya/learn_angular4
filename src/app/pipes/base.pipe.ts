import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertirBase'
})

export class BasePipe implements PipeTransform{
    
    //este pipe va a transformar un numero decimal a una base determianda

    transform(value,base){
        let cociente = value/base;
        let resto = value%base;
        let str_result:string = this.convertirBase(resto,base)+"";
        while(cociente >= base){
            resto = cociente%base;
            cociente = cociente /base;
            console.log("resto: "+resto);
            console.log("cociente: "+cociente);
            str_result = this.convertirBase(resto,base)+str_result;
        }
        str_result = this.convertirBase(cociente,base)+str_result;

        return str_result;

    }

    private convertirBase(resto, base):any{
        if(base == 16){

            if(resto < 10){
                if(resto < 1){
                    return 0;
                }else if(resto < 2){
                    return 1;
                }else if(resto < 3){
                    return 2;
                }else if(resto < 4){
                    return 3;
                }else if(resto < 5){
                    return 4;
                }else if(resto < 6){
                    return 5;
                }else if(resto < 7){
                    return 6;
                }else if(resto < 8){
                    return 7;
                }else if(resto < 9){
                    return 8;
                }else if(resto < 10){
                    return 9;
                }
            }else{
                    
                if(resto < 11){
                    return "A";
                }else if(resto < 12){
                    return "B";
                }else if(resto < 13){
                    return "C";
                }else if(resto < 14){
                    return "D";
                }else if(resto < 15){
                    return "E";
                }else if(resto < 16){
                    return "F";
                }
            }
        }else{
            switch(base){
                case 2:
                    console.log("Convertirdor - resto:"+resto);
                    if(resto < 1){
                        return 0;
                    }else if(resto >= 1){
                        return 1;
                    }
                    break;
                case 8:
                    if(resto < 1){
                        return 0;
                    }else if(resto < 2){
                        return 1;
                    }else if(resto < 3){
                        return 2;
                    }else if(resto < 4){
                        return 3;
                    }else if(resto < 5){
                        return 4;
                    }else if(resto < 6){
                        return 5;
                    }else if(resto < 7){
                        return 6;
                    }else if(resto < 8){
                        return 7;
                    }
                    break;
            }
        }
    }
}