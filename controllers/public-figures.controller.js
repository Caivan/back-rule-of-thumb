require('../database/db.connection');
const { ObjectId } = require('mongodb');
const PublicFigure = require('../models/public-figure.model');

// CONTROLLER'S STATEMENT
const PublicFigureController = {};

// FIND AND RETURN ALL PUBLIC FIGURES
PublicFigureController.getAll = async function(req, res) {
    try{
            const publicFigures = await PublicFigure.find();
            res.json(publicFigures);
    }catch (err) {
            console.log(err);
            res.status(500).send({
                message: ('Error ocurred performing the query' + err)
            });
    }
};

// GET PUBLIC FIGURE BY ID
PublicFigureController.getById = async function(req, res) {
    const paramID = req.params.id;
    try{
        const publicFigure = await PublicFigure.findOne({ _id: ObjectId(paramID)});
        res.json(publicFigure);
    }catch (err){
        console.log(err);
        res.status(500).send({
            message: (`Error ocurred getting objecto whith id ${paramID}` + err)
        });
    } // END CATCH
};// END FUNCTION GET BY ID

// CREATE A NEW PUBLIC FIGURE
PublicFigureController.create = async function(req,res){
    if(req.body && (req.body.constructor === Object && Object.keys(req.body).length !== 0)) {
        console.log(req.body);
        const publicFigure = new PublicFigure(req.body);
        publicFigure.save((err,savedDoc)=>{
            if(err){
                console.log (err);
                res.status(500).send({
                    message: (`ERROR creating object` + err)
                });
            }
            res.send(savedDoc);
        });
    }else {
        res.status(400).send({
            message:'error, the request content body is empty'
        });
    }  
}; // END FUNCTION CREATE

// SEARCH AND RETURN RANDOM & ACTIVE VOTING PUBLIC FIGURE
PublicFigureController.getRandomActive = async function(req, res) {

    try{
        const publicFigure = await PublicFigure.aggregate(
            [
                { $match: {active: true} },
                { $sample: {size: 1} }
            ]
        );
        res.json(publicFigure[0]);
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }
}; // END Function RANDOM

PublicFigureController.update = async function(req,res){
    const paramID = req.params.id;
    if(req.body){
        console.log('Body REQ',req.body);
        PublicFigure.updateOne({_id: ObjectId(paramID)},req.body,(err,savedDoc)=>{
            if(err){
                console.log (err);
                res.status(500).send({
                    message: (`ERROR updating object ${err}`)
                });
            }
            res.send(savedDoc);
        });
    }else {
        res.status(400).send({
            message:'error, the request content body is empty'
        });
    }  
}; // END FUNCTION UPDATE

PublicFigureController.delete = async function(req,res){
    const paramID = req.params.id;
    if(paramID){
        PublicFigure.deleteOne({_id: ObjectId(paramID)},(err,savedDoc)=>{
            if(err){
                console.log (err);
                res.status(500).send({
                    message: (`ERROR deleting object ${err}`)
                });
            }
            res.send(savedDoc);
        });
    }else {
        res.status(400).send({
            message:'error, the request param is empty'
        });
    }  
}; // END FUNCTION DELETE

module.exports = PublicFigureController; 