var form = document.getElementById("resume-form");
var resumeContent = document.getElementById("resume-content");
var resumePreview = document.getElementById("resume-preview");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n    <div class=\"glowing-box\" id=\"resume-name\">\n      <h3>".concat(name, "</h3>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-education\">\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-work\">\n      <h3>Work Experience</h3>\n      <p>").concat(work, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-skills\">\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </div>\n  ");
    resumeContent.innerHTML = resumeHTML;
    resumePreview.style.display = "block";
    document.querySelectorAll('.glowing-box').forEach(function (box) {
        box.addEventListener('click', function () {
            var p = this.querySelector('p');
            if (p) {
                p.contentEditable = "true";
                p.focus();
                p.addEventListener('blur', function () {
                    p.contentEditable = "false";
                });
            }
        });
    });
});
