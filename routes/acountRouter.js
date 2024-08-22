const express = require('express');
const router = express.Router();

const {getuserall, getID, getName, getRole, getUName, getCusID, getCusName, getCusUName, getcustomerall} = require('../controllers/acountcontroller');


router.get('/api/user/all', getuserall);
router.get('/api/user/id', getID);
router.get('/api/user/name', getName);
router.get('/api/user/role', getRole);
router.get('/api/user/uname', getUName);

router.get('/api/customer/all', getcustomerall);
router.get('/api/customer/id', getCusID);
router.get('/api/customer/name', getCusName);
router.get('/api/customer/uname', getCusUName);

module.exports = router;
