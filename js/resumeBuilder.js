// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Hamzah Awnallah",
    "role": "",
    "contacts": {
        "mobile": "510-990-7674",
        "email": "hamzah.awn@berkeley.edu",
        "github": "Awnallah",
        "location": "Richmond, CA"
    },
    "welcomemessage": "I'm glad to see you in my page",
    "skills": ["Python", "JavaScript", "HTML", "CSS", "jQuery", "Knockout JS", "Bootstrap" , "MATLAB", "ARM(Active Risk Manager)","P6 Primavera" ,  "MCNP", "RELAP5"],
    "biopic": "images/my_image.jpg",
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        //var formattedContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);



        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        // $("#header").append(formattedContacts);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContactsr").append(formattedLocation);
        $("#header").append(formattedPic);
       // $("#header").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (typeof bio.skills[skill] === "string") {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#header").append(formattedSkills);
            }
        }



    }
};






var education = {
    "schools": [
    {
        "name": "Georgia Tech",
        "location": "Berkeley, CA",
        "degree": "M.S.",
        "majors": ["Computer Science"],
        "dates": "In Progress",
        "url": '"https://www.omscs.gatech.edu/current-courses" target="_blank"'
    },
    {
        "name": "UC Berkeley",
        "location": "Berkeley, CA",
        "degree": "B.S.",
        "majors": ["Nuclear Engineering"],
        "dates": "December 2015",
        "url": '"http://www.nuc.berkeley.edu/" target="_blank"'
    }],
    "OnlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2016,
        "url": '"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" target="_blank"'
    }],
    "display": function() {


        function colleges(){
            for (var school in education.schools) {
                if (education.schools[school].hasOwnProperty("name")) {
                //var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);


                    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                    formattedSchoolName = formattedSchoolName.replace('"#"', education.schools[school].url);
                    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

                    $("#education").append(HTMLschoolStart);
                    $("#education").append(formattedSchoolName);
                    $("#education").append(formattedSchoolDegree);
                    $("#education").append(formattedSchoolDates);
                    $("#education").append(formattedSchoolLocation);
                    $("#education").append(formattedSchoolMajor);
                }
            }

    }
    colleges();


        var formattedOnTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[0].title);
        var formattedOnSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[0].school);
        var formattedOnDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[0].date);
        formattedOnTitle = formattedOnTitle.replace('"#"', education.OnlineCourses[0].url);

        $("#education").append(HTMLonlineClasses);
        $("#education").append(formattedOnTitle);
        $("#education").append(formattedOnSchool);
        $("#education").append(formattedOnDates);
        //$("#education").append(formattedOnURL);




    }
};



var work = {
    "jobs": [{
        "employer": "San Francisco Public Utilities Commission via CM Pros",
        "title": "Risk Analyst/ Program Controls Analyst",
        "url": '"http://www.sfwater.org/" target="_blank"',
        "location": "San Francisco, CA",
        "dates": "October 2016 - Present",
        "description": "• Led the risk management for the WSIP (Water System Improvement Program) and SSIP (Sewer System Improvement program). <br>" +
            "• Facilitated risk register meetings with PM’s, PE’s, construction managers, resident engineers and contractors. <br>" +
            "• Ran Monte Carlo simulations of risks in ARM (Active Risk Manager) and generated S-Curves, showing confidence levels for contingency values. <br>" +
            "• Prepared cover letters for the WSIP and SSIP programs. <br>" +
            "• Tracked and summarized trends and change orders of projects."

    },
    {
        "employer": "San Francisco Public Utilities Commission",
        "title": "Programmer Analyst Intern",
        "url": '"http://www.sfwater.org/" target="_blank"',
        "location": "San Francisco, CA",
        "dates": "June-September, 2016",
        "description": "• Automated generating appropriations tracking spreadsheet reports in python. <br>" +
            "• Prepared cover letters for the WSIP and SSIP programs. <br>" +
            "• Structured data in readable and maintainable format."

    },
    {
        "employer": "Lawrence Berkeley National Lab",
        "title": "Research Assistant in Low Dose Radiation",
        "url": '"http://www.lbl.gov/" target="_blank"',
        "location": "Berkeley, CA",
        "dates": "summer 2015",
        "description": "• Calibrated X-ray machine, irradiated breast cells, and measured the dose. <br>" +
            "• Oversaw data collection by adjusting focus and taking pictures of cells using a microscope."
    }, {
        "employer": "University of California, Berkeley ",
        "title": "Research Assistant in Nuclear Forensics",
        "url": '"http://metadata.berkeley.edu/nuclear-forensics/" target="_blank"',
        "location": "Berkeley, CA",
        "dates": "summer 2014",
        "description": "• Assembled a nuclear material property archive through data mining and web searching.<br>" +
            "• Manipulated common reactors fuel inventories and burn-ups in SCALE and analyzed results.<br>" +
            "• Presented the project at the National Conference Center in Washington D.C. to sponsors, Homeland security."
    }, {
        "employer": "Jose Valdez Math Institute ",
        "title": "Math Tutor",
        "url": '"http://www.josevaldesmath.org/" target="_blank"',
        "location": "Stockton, CA ",
        "dates": "summer 2012",
        "description": "• Tutored and held exercise sessions for students on a full time basis.<br>" +
            "• Contributed to lecture material preparation.<br>" +
            "• Organized and oversaw math competitions for students and managed different activities."
    }],
    "display": function() {

        for (var job in work.jobs) {
            if (work.jobs[job].hasOwnProperty("employer")) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                formattedEmployer = formattedEmployer.replace('"#"', work.jobs[job].url);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


                $("#workExperience").append(HTMLworkStart);
                $("#workExperience").append(formattedEmployer);
                $("#workExperience").append(formattedWorkTitle);
                $("#workExperience").append(formattedWorkDates);
                $("#workExperience").append(formattedWorkLocation);
                $("#workExperience").append(formattedWorkDescription);

            }

        }
    }
};




var projects = {
    "projects": [
    {"title": "Trading Agent (Q-Learner)  ",
        "url"  : '"http://awnallah.github.io/MapProject/" target="_blank"',
        "dates": "November 2017",
        "description": "• Implemented a Q-Learner, including a dyna-Q in python. <br>" +
                        "• Designed a market simulation environment, which takes in an order book (set of trades) and returns portfolio statistics . <br>" +
                        "• Developed a pipeline for technical indicators. <br>" +
                        "• Developed a learning environment for the Q-Learner, where technical indicators are discretized and a reward is given based on an action. <br>",
        "images": ['images/impact.PNG']

    },
    {"title": "Tree Learners",
        "url"  : '"http://awnallah.github.io/MapProject/" target="_blank"',
        "dates": "October 2017",
        "description": "• Implemented a Decision Tree Learner based on Quinlan's in python. <br>" +
                        "• Implemented a Random Decision Tree Learner based on Cutler's in python . <br>" +
                        "• Applied bagging, where manay learners were applied. <br>",
        "images": ['images/Figure_bags.PNG']

    },
    {"title": "Neighborhood Map Project ",
        "url"  : '"http://awnallah.github.io/MapProject/" target="_blank"',
        "dates": "April 2016",
        "description": "• Developed interactive, single-page, and responsive map application showing details about upcoming running and hiking events in a selected area. <br>" +
                        '• Utilized Knockout JS (MVVM), Google Maps API, and AJAX requests (Meetup and Forecast).',
        "images": ['images/map.PNG']

    },
    {"title": "Website Optimizaiton",
        "url"  : '"http://awnallah.github.io/frontend-nanodegree-mobile-portfolio" target="_blank"',
        "dates": "April 2016",
        "description": "• Optimized critical rendering path of given websites by eliminating forced re-flow, and other types of jank. <br>" +
                        '• Compressed resources using Grunt and achieved a PageSpeed Insights score above 90 for each sub-page.',
        "images": ['images/optimize.png']

    },
    {
        "title": "Frogger Game: Love, Despite the Bugs!",
        "url"  : '"http://awnallah.github.io/frontend-nanodegree-arcade-game" target="_blank"',
        "dates": "March 2016",
        "description": "• Built a clone of the classic Frogger game, using the game engine provided by Udacity.<br>" +
                        '• Applied Object-oriented JavaScript to create pseudo classes of entities in the game.',
        "images": ["images/game1.PNG"]
    }, {
        "title": "Preliminary Safety Analysis Report",
        "dates": "fall 2015",
        "description": "• Evaluated in a team NuScale’s implementation of “10 C.F.R.” codes and developed a PSAR as a project for the safety course, complemented by different NRC mock interviews and a public meeting.",
        "images": []
    }, {
        "title": "Polonium-210 Chemical Separation",
        "dates": "spring 2015",
        "description": "• Dissolved various fish samples and chemically separated Po-210 for quantitative analysis by alpha radiation measurement.",
        "images": []
    }, {
        "title": "Proton Eye Treatment Dose Distribution Simulation",
        "dates": "spring 2015",
        "description": "• Simulated proton eye treatment model using MCNP to determine vertical and lateral dose distribution.",
        "images": []
    }, {
        "title": "Hair Analysis",
        "dates": "spring 2012",
        "description": "• Completed a special course study in chemistry where hair analysis of metals was completed using High Performance Liquid Chromatography (HPLC) and Atomic Absorption Spectroscopy (AAS).",
        "images": []
    }],
    "display": function() {

        for (var project in projects.projects) {
            if (projects.projects[project].hasOwnProperty("title")) {

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                if(projects.projects[project].hasOwnProperty("url")){
                    formattedProjectTitle = formattedProjectTitle.replace('"#"', projects.projects[project].url);
                }
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
              //  var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

                $("#projects").append(HTMLprojectStart);
                $("#projects").append(formattedProjectTitle);
                $("#projects").append(formattedProjectDates);
                $("#projects").append(formattedProjectDescription);
                //$("#projects").append(formattedProjectImage);

                // if (projects.projects[project].images.length > 3) {
                //     $("#projects").append(formattedProjectImage);
                // }

                projects.projects[project].images.forEach(function (image){
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                    $("#projects").append(formattedProjectImage);
                });

            }
        }

    }
};



bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);