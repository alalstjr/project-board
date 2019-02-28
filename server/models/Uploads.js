import moongoose from 'mongoose';

const Schema = moongoose.Schema;

const uploadSchema = new Schema({
    id: String,
    name: String,
    type: String,
    size: String,
    path: String
});

const Uploads = moongoose.model('uploads', uploadSchema);

export default Uploads;