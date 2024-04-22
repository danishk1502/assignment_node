import BaseController from "./base.controller"

class UserController {
    private baseControler : typeof BaseController;
    constructor(){
        this.baseControler = BaseController;
    }

    async findById(id : string){
        try{
            if(!id){
                throw Error('id not found');
                
            }
            return "done";
        }
        catch(error){
            // console.log(error)
            return error;
        }
    }
}
export default new UserController();
