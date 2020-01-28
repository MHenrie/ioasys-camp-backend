const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const mongoosastic = require('mongoosastic');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        es_indexed: true,
    },
    institution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution',
        required: true,
    },
    campus: {
        type: String,
        required: true,
        es_indexed: true,
    }
});

CourseSchema.plugin(mongoosastic, {

});
CourseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Course', CourseSchema);