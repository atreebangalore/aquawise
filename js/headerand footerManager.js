class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML='<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style="background-color: white">\n' +
            '    <div class="container">\n' +
            '        <a class="navbar-brand" href="https://www.atree.org" target="_blank"><img src="assets/img/navbar-logo_atree.png" alt="..." /></a>\n' +
            '        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\n' +
            '            \n' +
            '            <i class="fas fa-bars ms-1"></i>\n' +
            '        </button>\n' +
            '        <div class="collapse navbar-collapse" id="navbarResponsive">\n' +
            '            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0" >\n' +
            '           <li class="nav-item"><a id="nav-home" class="nav-link" href="index.html">Home</a></li>'+
            '<li class="nav-item"><a id="nav-about" class="nav-link" href="https://www.atree.org/water-and-soil-lab/" target="_blank">About US</a></li>'+
            '<li class="nav-item"><a id="nav-tools" class="nav-link" href="tools.html">The Tool</a></li>'+
            '<li class="nav-item team"><a id="nav-team" class="nav-link" href="team.html">Team</a></li>'+
            '<li class="nav-item team"><a id="nav-resources" class="nav-link" href="resources.html">Resources</a></li>'+
            '<li id="eng_ka" class="nav-item team" style="display: none"><a class="nav-link" onclick="change_lang()">Eng/Ka</a></li>'+
        '\n' +
            '\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</nav>\n'
    }

}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML='<footer class="footer py-4" style="background-color: #0b4e60;margin-bottom: 0; padding-bottom: 0">\n' +
            '\n' +
            '\n' +
            '    <div class="container">\n' +
            '        <div class="row align-items-center" style="justify-content: space-between">\n' +

            '            <img class="footer_logo"  src="assets/img/logos/aquawise_logof.png" alt="..." aria-label="Logo">' +
            '            <div class="col-lg-4 " style=" color: white; cursor: pointer"><p id="privacy_policy"><a style=" color: white; text-decoration: none" href ="https://drive.google.com/file/d/12AuWwxwIe735CR-lleTBvRyS5w3gooAC/view?usp=drive_link" >privacy policy</a></p>' +
            '                 <p id="contact_us"><a style=" color: white; text-decoration: none" href="https://forms.gle/qVcKPmHJYuVAZX9H9" >Contact US</a></p></div>\n' +

            '\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div style="width: 100%; margin-top: 50px; background-color: #026583; display: flex; justify-content: center">\n' +
            '        <div class="row container" style=" width: 100%">\n' +
            '            <div class="col-lg-4 text-lg-center" style="width: 100%; padding: 10px; color: white">&copy; 2024 | AquaWise | All Rights Reserved | Designed & developed by Sreekuttan V N and Shiva Subramanya </div>\n' +
            '\n' +
            '        </div>\n' +
            '    </div>\n' +
            '\n' +
            '</footer>'
    }
}

customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
