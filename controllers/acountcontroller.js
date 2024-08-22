const { getUser,getUserID, getUserName , getUserUName, getUserRole, getCustID, getCustName , getCustUName , getCustomer} = require('../models/acountModel');

const getuserall = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
            res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getUser(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
                res.status(402).send({'error':'Parameter incorrect format'});
            }
        }
       
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};



const getID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getUserID(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
               res.status(402).send({'error':'Parameter incorrect format'});
            }
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getUserName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};


const getRole = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getUserRole(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }
        }


    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getUserUName(param);
            res.json(user);
        }
       
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

//////

const getCusID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getCustID(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getCusName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getCustName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};


const getCusUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getCustUName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getcustomerall = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getCustomer(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }

        }

    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};



module.exports = {
    getuserall,
    getID,
    getName,
    getRole,
    getUName,
    getCusID,
    getCusName,
    getCusUName,
    getcustomerall
};
