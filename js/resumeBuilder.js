/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {"name" : "Hamzah Awnallah",
			"role" : "Front-End Developer",
			"contacts" : {
				"mobile" : "510-990-7674",
				"email" : "hamzah.awn@berkeley.edu",
				"github" : "Awnallah",
				"location" : "Richmond, CA"
			},
			"welcomemessage" : "I'm glad to see you in my page",
			"skills" : ["JavaScript", "HTML", "CSS", "jQuery", "Java", "MATLAB", "MCNP", "RELAP5"],
			"biopic" : "images/my_image.jpg",
			"display" : function (){

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);



var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage)

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
// $("#header").append(formattedContacts);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContactsr").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);
for (skill in bio.skills){
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#header").append(formattedSkills);
}



			}
			};

bio.display();




var education = {"schools" : [{ "name" : "UC Berkeley",
								"location" : "Berkeley, CA",
								"degree" : "B.S.",
								"majors" : ["Nuclear Engineering"],
								"dates" : "December 2015",
								"url" : '"http://www.nuc.berkeley.edu/" target="_blank"'}],
				"OnlineCourses" : [{"title" : "Front-End Web Developer Nanodegree",
									"school" : "Udacity",
									"date" : 2016,
									"url" : '"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" target="_blank"'}],
				"display" : function (){

					var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
					formattedSchoolName = formattedSchoolName.replace('"#"',education.schools[0].url)
					var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
					var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
					var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].majors);

					var formattedOnTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[0].title);
					var formattedOnSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[0].school);
					var formattedOnDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[0].date);
					formattedOnTitle = formattedOnTitle.replace('"#"', education.OnlineCourses[0].url);

					$("#education").append(HTMLschoolStart);
					$("#education").append(formattedSchoolName);
					$("#education").append(formattedSchoolDegree);
					$("#education").append(formattedSchoolDates);
					$("#education").append(formattedSchoolLocation);
					$("#education").append(formattedSchoolMajor);

					$("#education").append(HTMLonlineClasses);
					$("#education").append(formattedOnTitle);
					$("#education").append(formattedOnSchool);
					$("#education").append(formattedOnDates);
					//$("#education").append(formattedOnURL);

				}};

education.display();

var work = {"jobs" : [{"employer" : "Lawrence Berkeley National Lab",
						"title" : "Research Assistant in Low Dose Radiation",
						"url" : '"http://www.lbl.gov/" target="_blank"',
						"location" : "Berkeley, CA",
						"dates" : "summer 2015",
						"description" : "Calibrated X-ray machine, irradiated breast cells, and measured the dose. <br>" +
						" Oversaw data collection by adjusting focus and taking pictures of cells using a microscope."},
						{"employer" : "University of California, Berkeley ",
						"title" : "Research Assistant in Nuclear Forensics",
						"url" : '"http://metadata.berkeley.edu/nuclear-forensics/" target="_blank"',
						"location" : "Berkeley, CA",
						"dates" : "summer 2014",
						"description" : "Assembled a nuclear material property archive through data mining and web searching.<br>" +
 						"Manipulated common reactors fuel inventories and burn-ups in SCALE and analyzed results.<br>" +
 						"Presented the project at the National Conference Center in Washington D.C. to sponsors, Homeland security."},
 						{"employer" : "Jose Valdez Math Institute ",
						"title" : "Math Tutor",
						"url" : '"http://www.josevaldesmath.org/" target="_blank"',
						"location" : "Stockton, CA ",
						"dates" : "summer 2012",
						"description" : "Tutored and held exercise sessions for students on a full time basis.<br>" +
 						"Contributed to lecture material preparation.<br>" +
 						"Organized and oversaw math competitions for students and managed different activities."}],
			"display" : function(){

				for (job in work.jobs){
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
			}};


work.display();

var projects ={"projects" : [{"title" : "Preliminary Safety Analysis Report",
							  "dates" : "fall 2015",
							  "description" : "Evaluated in a team NuScale’s implementation of “10 C.F.R.” codes and developed a PSAR as a project for the safety course, complemented by different NRC mock interviews and a public meeting.",
							  "images" : "#"},
							  {"title" : "Polonium-210 Chemical Separation",
							  "dates" : "spring 2015",
							  "description" : "Dissolved various fish samples and chemically separated Po-210 for quantitative analysis by alpha radiation measurement.",
							  "images" : "#"},
							  {"title" : "Proton Eye Treatment Dose Distribution Simulation",
							  "dates" : "spring 2015",
							  "description" : "Simulated proton eye treatment model using MCNP to determine vertical and lateral dose distribution.",
							  "images" : "#"},
							  {"title" : "Hair Analysis",
							  "dates" : "spring 2012",
							  "description" : "Completed a special course study in chemistry where hair analysis of metals was completed using High Performance Liquid Chromatography (HPLC) and Atomic Absorption Spectroscopy (AAS).",
							  "images" : "#"}],
				"display" : function (){

					for (project in projects.projects){

					var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
					var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
					var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

					$("#projects").append(HTMLprojectStart);
					$("#projects").append(formattedProjectTitle);
					$("#projects").append(formattedProjectDates);
					$("#projects").append(formattedProjectDescription);
					//$("#projects").append(formattedProjectImage);

					if (projects.projects[project].images.length > 3){
						$("#projects").append(formattedProjectImage);
					}

				}

				}};

projects.display();
$("#mapDiv").append(googleMap);


// $("#main").append(internationalizeButton);
// inName(bio.name);

// function inName (name){
// 	name = name.toLowerCase();
// 	names = name.split(" ");
// 	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1);
// 	names[1] = names[1].toUpperCase();
// 	name = names.join(" ");
// 	console.log(name)
// }