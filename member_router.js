const express   = require('express');
const member    = express.Router();
const { getNameList, addNew, editInfo, deleteInfo } = require('./member_handler');

member.route('/')
.get(getNameList)
.post(addNew)

member.route('/:id')
.put(editInfo)
.delete(deleteInfo)

module.exports = member;