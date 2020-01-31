// Render metadata to page

const userRace = {


    id: 'Race',
    title: 'The Human Race',
    map: {
        top: '89%',
        left: '44%'
    },
    image:'race.jpg',
    description:`
    Race and ethnicity are socially constructed categories that have tangible effects on the lives of individuals who are defined by how one perceives one's self and how one is perceived by others. It is important to acknowledge the social construction (i.e., created from prevailing social perceptions, historical policies, and practices) of the concepts of race and ethnicity because it has implications for how measures of race have been used and changed over time. Furthermore, the concept of race is complex, with a rich history of scientific and philosophical debate as to the nature of race (James, 2016). Racial and ethnic disparities are arguably the most obstinate inequities in health over time, despite the many strides that have been made to improve health in the United States. Moreover, race and ethnicity are extremely salient factors when examining health inequity (Bell and Lee, 2011; Smedley et al., 2008; Williams et al., 2010). Therefore, solutions for health equity need to take into account the social, political, and historical context of race and ethnicity in this country.

    Analyzed rates of upward and downward mobility across generations for racial groups, we quantify how their incomes change and predict their future earnings trajectories.`
    ,
    choices:[{
        
        id:'White',
        description:'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa; has no Hispanic or Latino origins.',
        result:'',
        health: 91,
        money:,
    },
    {
        id:'Black',
        description:'A person having origins in any of the black racial groups of Africa; has no Hispanic or Latino origins.',
        result:'',
        health:87,
        money:,
    },
    {   id:'Asian or Pacific Islander',
        description:'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam; has no Hispanic or Latino origins.',
        result:'',
        health:100,
        money:,
    }
    {   id:'Native American or Indian',
        description:'A person having origins in any of the original peoples of North and South America (including Central America) who maintains cultural identification through tribal affiliation or community attachment; has no Hispanic or Latino origins.',
        result:'',
        health:86,
        money:,
    }
    {   id:'Hispanic or Latino',
        description:'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.',
        result:'',
        health:96,
        money:,
    }
    {   id:'Two or More Races',
        description:'This applies only to those who are Non-Hispanic or Latino.',
        result:'',
        health:92,
        money:,
    }
    {   id:'Native Hawaiian or Other Pacific Islander',
        description:'A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands; has no Hispanic or Latino origins.',
        result:'',
        health:92,
        money:,
    }]
};

const genderIdenity = {


    id:'Gender',
    title:'Gender Identity',
    map: {
        top: '89%',
        left: '44%'
    },
    image:'Gender-Diversity.jpg',
    description:,
    
    choices:[{
        
        id:'Male',
        description:'',
        result:'',
        health:-5,
        money:,
    },
    {
        id:'Female',
        description:'',
        result:`
        Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female, but it also reflects behavioural differences between men and women.`,
        health:0,
        money:,
    },
    {   id:'Trans',
        description:'Trans-gender',
        result:'',
        health:,
        money:,
    }
    {
        id:'Gender-queer',
        description:'',
        result:'',
        health:,
        money:,
    },
    {
        id:'Non-binary',
        description:'',
        result:'',
        health:,
        money:,
    }],
};

const educationalAttainment = {


    id:'Education',
    title:'Degrees of Education',
    map: {
        top: '89%',
        left: '44%'
    },
    image:'education.png',
    description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
    The Fed study showed that income, earnings, and wealth increased with education levels.`,

    choices:[{
        
        id:'High-School',
        description:'',
        result:'',
        health:,
        money:,
    },
    {
        id:'Associate',
        description:'',
        result:'',
        health:,
        money:,
    },
    {   id:'Bachelors',
        description:'',
        result:'',
        health:,
        money:,
    }
    {  
        id:'Masters',
        description:'',
        result:'',
        health:,
        money:,
    }
    {
        id:'PhD',
        description:'',
        result:'',
        health:,
        money:,
    }
    {
        id:'Professional Degree',
        description:'',
        result:'',
        health:,
        money:,
    }]
};

const environmentalConditions = {


    id:'Geographic-Environmental-Conditions',
    title:"Environments of Success",
    map: {
        top: '89%',
        left: '44%'
    },
    image:'Geography.jpg',
    description:,
    
    choices:[{
        
        id:'West-coast',
        description:'',
        result:'',
        health:,
        money:,
    },
    {
        id:'East-coast',
        description:'',
        result:'',
        health:,
        money:,
    },
    {   
        id:'South',
        description:'',
        result:'',
        health:,
        money:,
    },
    {   
        id:'Mid-West',
        description:'',
        result:'',
        health:,
        money:,
    }]
};

const economicMobility = [

    Race,
    GenderIdentity,
    Education,
    environmentalConditions,

];

export default quests;

//Render a list of questions based on metadata
    //get the ul from the DOM
    // question results page pulls from metadata
    //loop through the questions
        // for each question...
        // get a question from the array
        // make li for the questions
    // quest detail page (quest-page)
    // quest list page (map)
   

// Write meta data (data rendering)
// Render STATE to page
    //complete questions
    //user profile -
    //results folder - index.html, messages.js,results.css,result.js, score.js