var bio = {
	"name" : "Mohd Ejaz Siddiqui",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+919873446383",
		"email" : "mohdejazsiddiqui@gmail.com",
		"github" : "github.com/mejaz",
		"twitter" : "@itz_me_Ejaz",
		"location" : "Abul Fazal, New Delhi"
	},
	"welcomeMessage" : "Welcome to Ejaz's Page",
	"bioPic" : "images/fry.jpg",
	"skills" : [
		"HTML","CSS","JavaScript","JSON"
	],
	displayBio : function(){
			$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
			$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
			$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
			$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
			$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
			$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
			$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
			$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
			$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
			$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
			$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
			$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
			$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
			$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
			if (bio.skills.length > 0) {
				$("#header").append(HTMLskillsStart);
				for (var i = 0; i < bio.skills.length; i++){
					$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
				}
			}
			$("#main").prepend(internationalizeButton);
			$("#mapDiv").append(googleMap);
			$("#main").append(nav);
		}
};
var education = {
	"schools" : [
	{
		"name" : "IILM Academy of Higher Learning",
		"location" : "Greater Noida, India",
		"degree" : "B.Tech",
		"majors" : ["Electronics","Mathematics"],
		"date" : 2009,
		"url" : "wwww.iilm.com",
	},
	{
		"name" : "A.M.U.",
		"location" : "Aligarh, India",
		"degree" : "S.S.S.C",
		"majors" : ["PCM","Economics"],
		"date" : 2004,
		"url" : "wwww.amu.com"
	}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Java",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "www.udacity.com"
		}
	],
	displayEdu : function(){
		$("#education").append(HTMLschoolStart);
			for (var i in education.schools) {
				var sname = HTMLschoolName.replace("%data%",education.schools[i].name);
				var sdegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
				var nameAndDeg = sname + sdegree;
				$(".education-entry:last").append(nameAndDeg);
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].date));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors[0]));
		}
		$(".education-entry").append(HTMLonlineClasses);
		for (i in education.onlineCourses){
			var title = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var oschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var tschool = title + oschool;
			$(".education-entry:last").append(tschool);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
		}
	}
};
var work = {
	"jobs" : [
		{
			"employer" : "UHG",
			"title" : "Senior Test Engineer",
			"location" : "Sector 144, Noida, India",
			"dates" : "2014 - till date",
			"description" : "to decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto" +
			"decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decide"
		},
		{
			"employer" : "UHG",
			"title" : "Test Engineer",
			"location" : "Sector 144, Noida, India",
			"dates" : "2012 - 2014",
			"description" : "to decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto" +
			"decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decide"
		},
		{
			"employer" : "TechMahindra",
			"title" : "Technical Associate",
			"location" : "Sector 60, Noida, India",
			"dates" : "2010 - 2012",
			"description" : "to decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto" +
			"decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decideto decide"
		}
	],
	displayWork : function(){
		$("#workExperience").append(HTMLworkStart);
		for (var i in work.jobs){
			var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var emptitle = employer + title;
			$(".work-entry:last").append(emptitle);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		}
	}
};
var projects = {
	"projects" : [
		{
			"title" : "AT&T",
			"dates" : "2010-2012",
			"description" : "Worked on PDC.",
			"images" : [
				"images/Koala.jpg",
				"images/Penguins.jpg"
			]
		},
		{
			"title" : "Mainframes",
			"dates" : "2012-2015",
			"description" : "Worked on Mainframes.",
			"images" : [
				"images/Koala.jpg",
				"images/Penguins.jpg"
			]
		}
	],
	displayProjects : function(){
		for (var i in projects.projects) {
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[0]));
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[1]));
		}
	}
};
education.displayEdu();
bio.displayBio();
projects.displayProjects();
work.displayWork();
