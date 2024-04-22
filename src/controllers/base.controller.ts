class BaseController {
    async errorHandler(){
        try{
            const number = 34;
            switch(number as any){
                case 1 : 
                    break;
                case 2 :
                    break;
                default:
                    console.log('case');
            }
        }
        catch(error){

        }
    }
}

export default new BaseController();