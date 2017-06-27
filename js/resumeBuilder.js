/*
This is empty on purpose! Your code to build the resume will go here.

############    Projeto currículo online - fundamentos de javascript - nanodegree frontend.     ############
*/
var bio = {
    name: "Carolinne Machado",
    role: "A little child learning to live",
    contacts: { //objeto
        mobile: "(62)99999-9999",
        email: "email.teste@email.com",
        github: "https://github.com/carolinne",
        // twitter: "secret xD",
        location: "Goiânia"
    },
    welcomeMessage: "Welcome! lorem ipsum",
    skills: ["read", "sleep", "eat", "play videogame"],
    biopic: "images/fry.jpg",

    // propriedade-função display para anexar dados da experiência 'profissional' ao currículo
    // ou fora do objeto, por notação de ponto: bio.display = function() { ... }
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBiopic + formattedWelcome);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#header").append(formattedSkills);
        });
    }
};
// OUTRA FORMA DE FAZER O DISPLAY:
// bio.display = function() { 
//  var formattedName = HTMLheaderName.replace("%data%", bio.name);
//  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//  $("#header").prepend(formattedName);
//  $("#header").prepend(formattedRole);
// };
bio.display();


var education = {
    schools: [ // array de objetos
        {
            name: "UFG",
            location: "goiania - goias",
            degree: "curso superior",
            majors: ["Sistemas de Informação", "testinho"],
            dates: "2010-2016",
            url: "www.google.com"
        }
    ],
    onlineCourses: [ // array de objetos
        {
            title: "Learn HTML & CSS",
            school: "Codecademy",
            dates: "2016",
            url: "https://www.codecademy.com/learn/web"
        },
        {
            title: "Javascript",
            school: "Codecademy",
            dates: "2016",
            url: "https://www.codecademy.com/learn/javascript"
        },
        {
            title: "Learn Sass",
            school: "Codecademy",
            dates: "2016",
            url: "https://www.codecademy.com/learn/learn-sass"
        },
        {
            title: "Desenvolvedor Web Frontend",
            school: "Udacity",
            dates: "in progress",
            url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }
    ],
    display: function() {
        education.schools.forEach(function(escola) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", escola.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", escola.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", escola.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", escola.dates);

            $(".education-entry:last").append(formattedName + formattedLocation + formattedDegree + formattedDates);

            escola.majors.forEach(function(major) {
                var formattedMajors = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajors);
            });
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(curso) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", curso.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", curso.school);
            var formattedDatesOnline = HTMLonlineDates.replace("%data%", curso.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", curso.url);

            $(".education-entry:last").prepend(formattedTitle + formattedSchool + formattedDatesOnline + formattedUrl);
        });
    }
};
education.display();


var work = {
    jobs: [ // array de objetos
        {
            employer: "CERCOMP",
            title: "Suporte técnico",
            location: "CERCOMP - UFG",
            dates: "2012 - 2014",
            description: "Serviço de suporte técnico para os computadores, periféricos, e assessórios da UFG."
        },
        {
            employer: "LabTIME",
            title: "Web dev",
            location: "LabTIME - UFG",
            dates: "in progress",
            description: "Desenvolvimento de telas em HTML e CSS."
        }
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
        });
    }
};
work.display();


var projects = {
    projects: [ // array de objetos
        {
            title: "teste",
            dates: "2016",
            description: "teste do projeto frontend.",
            images: ["images/cynda.png",
                "./images/pikachu.jpg"
            ]
        }
    ],
    display: function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(project) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

            project.images.forEach(function(img) {
                var formattedImg = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedImg);
            });
        });
    }
};
projects.display();

$("#mapDiv").append(googleMap);