const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEME OF THE QUESTION COLLECTION
const Comment = new Schema ({
    authorName: String,
    text: String,
    publishedDate : Date
},{autoCreate: true})

const publicFigureSchema = new Schema ({
    name: String,
    publicationDate: Date,
    endVotingDate: Date, 
    description: String,
    qtyLikes: Number,
    qtyDislikes: Number,
    image: String,
    category: String,
    wikiUrl: String,
    votingText: String,
    heroImage: String,
    activeforHero: Boolean,
    comments:[Comment], 
},{autoCreate: true});

module.exports = mongoose.model('public-figures',publicFigureSchema);
