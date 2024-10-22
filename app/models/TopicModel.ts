import { model, models, Schema } from "mongoose";

// interface iTopicsData extends iTopics
 
const TopicModel= new Schema({
   title:{
    type:String,
   },
   description:{
    type:String,
   }
},
{
    timestamps: true,
}

)

const Topic = models.Topic || model("Topic", TopicModel);
export default Topic;