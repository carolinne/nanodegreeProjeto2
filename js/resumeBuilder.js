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

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            $("#header").append(HTMLskills.replace("%data%", skill));
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
            majors: ["Sistemas de Informação"],
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
    ]
};
education.display = function() {
    education.schools.forEach(function(escola) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", escola.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", escola.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", escola.degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", escola.majors);
        var formattedDates = HTMLschoolDates.replace("%data%", escola.dates);

        $(".education-entry:last").append(formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors);
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
};
education.display();


var work = {
    jobs: [ // array de objetos
        {
            employer: "CERCOMP",
            title: "Suporte técnico",
            location: "CERCOMP - UFG",
            dates: "2012-2014",
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

            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer));
            $(".work-entry:last").append(HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
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
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function(project) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

        project.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });
    });
};
projects.display();

$("#mapDiv").append(googleMap);