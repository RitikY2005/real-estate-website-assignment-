import { model, Schema } from "mongoose";


const amenitySchema=Schema({
    title:{
        type:String,
        required:[true,"Please provide title of amenity"]
    },
    description:{
        type:String,
        required:[true,"Please provide description of amentiy"]

    },
    image:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/1518/1518886.png"
    }
},{_id:true});

const faqsSchema=Schema({
    question:{
        type:String,
        required:[true,"Question cannot be empty"]
    },
    answer:{
        type:String,
        required:[true,"Answer cannot be empty"]
    }
},{_id:true});


const websiteContentSchema=Schema({
    heroSection:{
        title:{
            type:String,
            default:"This is the title of the section"
        },
        subtitle:{
            type:String,
            default:"This is the subtitle of the section"
        },

        image:{
            type:String,
            default:"https://static.vecteezy.com/system/resources/thumbnails/022/527/605/small/house-of-dream-idea-real-estate-illustration-ai-generative-free-photo.jpg"
        }

    },
    projectOverview:{
        description:{
            type:String,
            default:"This project is built for you , let's get you a deal"
        }
    },
    nearbyConnectivity:{
        description:{
            type:String,
            default:"School is 3km , near railway . There is a big airport nearby"
        }
    },

    amenities:{
        type:[amenitySchema],
        default:[]
    },
    aboutUs:{
        description:{
            type:String,
            default:"we are god actaully "
        }     
    },
    constructionUpdates:{
        label:{
            type:String,
            default:"Under construction"
        }
    },
    faqs:{
        type:[faqsSchema],
        default:[]
    }
},{
    timestamps:true
});


const websiteContentModel=model('websiteContent',websiteContentSchema);

export default websiteContentModel;