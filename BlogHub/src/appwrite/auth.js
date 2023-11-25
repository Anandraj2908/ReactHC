import { Client, Account, ID} from 'appwrite';
import conf from '../conf/conf'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //signUp functionality
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login(email,pasword)
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    //login functionality
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    //to check if anyone is loggedin or not
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrenUser :: error", error)
        }
        return null
    }

    //to logout
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService =  new AuthService();

export default authService
