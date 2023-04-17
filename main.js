/* Page Content*/
const homePageContent = `<h1> Welcome</h1>
<p id="my-id"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque aperiam ex est, soluta aliquid unde, saepe quae dolore sapiente ullam perspiciatis magni commodi dicta nulla quasi vero amet similique!</p>
<p class="my-class"></p>
<p class="two classes"></p>
<p class="two classes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eveniet, dicta, ad repudiandae autem sint aliquam error et esse perspiciatis sequi, tempore id. Laudantium, amet unde eum corrupti eos a.</p>

`;
const aboutPageContent = `<h1>About me</h1>
<p> Here you can write a little about your self</p>
`;

const hobbiesPageContent = `
<h1> My hobbies</h1>
<p> Here you can write a little about your hobbies</p>
`;
const contactPageContent=
`<h1> Contact me</h1>
<p> Contact me</p>
`;
/* Functions*/
// Grab elements 
const mainContent= document.querySelector("#main-content");
const navlinks= document.querySelectorAll("nav a");




//Add event listemers to all elements in navLinks

navlinks.forEach(link => {
 link.addEventListener("click",  event=> {
    event.preventDefault(); //prevent page reload
    const page = link.dataset.page; //Get the string from data-page attribute 
    setActiveNavLink(link); //Move the "active" class
    updatePageContent(page); //Render new page
 });

});
// Set the "active " class on the webpage we are currently on
//function setActiveNavLink(link)
//{
//for(nav of navlinks) {
//  nav.classList.remove ("active");
//
//  }
// link.classList.add("active");

//}
function setActiveNavLink(link)
{
   navlinks.forEach(link=> link.classList.remove("active"));
   link.classList.add("active");

}
// Update page content
function updatePageContent(page){
   switch(page){
      case "home":
         mainContent.innerHTML=homePageContent;
         break;
         case "about":
            mainContent.innerHTML= aboutPageContent;
            break;
            case "hobbies":
               mainContent.innerHTML=hobbiesPageContent;
               break;
            case "contact":
               mainContent.innerHTML = contactPageContent;
               break;
               default:
                  mainContent.innerHTML=homePageContent;
                  break;
               
   }
}

 // since we have an empty div and need some default contactPageContent
// we run this function once with out a property to get the default case of the switch
updatePageContent();




