import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try{    
        const saltRounds = 10;  // how many times to run the hashing function
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;   // returns a promise with the password encrypted
    }
    catch (error){
        console.log(error);
    }
};

export const comparePassword = async (password,hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}