import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
    const { username, email, password} = req.body;
    
    //HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //CREATE A NEW USER AND SAVE TO DB
}

export const login = (req, res, next) => {
    res.send("login start!");
}

export const logout = (req, res, next) => {
    res.send("logout start!");
}