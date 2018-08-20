//maithri shetty
// date:10/08/2018

//main_function which is used to color the body

function main_function() {

    var body_color = document.getElementsByTagName("BODY")[0];
    body_color.classList.add("body_style");

    // main_section
    var section_data = document.getElementById('main_section');

    // green bar above the screen
    var hrorizontal_bar = document.createElement("DIV");
    section_data.appendChild(hrorizontal_bar);
    hrorizontal_bar.classList.add("green_bar");

    // logo devision
    var logo = document.createElement("DIV");
    section_data.appendChild(logo);
    logo.classList.add("logo");
    logo.innerHTML = "The Modernist";

    // discription of logo
    var sub_heading = document.createElement("SPAN");
    logo.appendChild(sub_heading);
    sub_heading.classList.add("sub_heading");
    sub_heading.innerHTML = "Free Psd Website Template";

    //menu bar
    var menu_bar=document.createElement("DIV");
    section_data.appendChild(menu_bar);
    menu_bar.classList.add("menus");

    //menu_list
    var menu_list=document.createElement("UL");
    menu_bar.appendChild(menu_list);
    menu_list.classList.add("menu_list");

    //listing menu items
    var menu_item=document.createElement("LI");
    menu_list.appendChild(menu_item);
    menu_item.classList.add("menu_item");
    
    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="HOME";
    menu_link.href="dom.html";

     //listing menu items
     var menu_item=document.createElement("LI");
     menu_list.appendChild(menu_item);
     menu_item.classList.add("menu_item");
    
    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="STYLEDEMO";
    menu_link.href="dom.html";

     //listing menu items
     var menu_item=document.createElement("LI");
     menu_list.appendChild(menu_item);
     menu_item.classList.add("menu_item");

    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="FULLWIDTH";
    menu_link.href="dom.html";

     //listing menu items
     var menu_item=document.createElement("LI");
     menu_list.appendChild(menu_item);
     menu_item.classList.add("menu_item");

    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="DROPDOWN";
    menu_link.href="dom.html";

     //listing menu items
     var menu_item=document.createElement("LI");
     menu_list.appendChild(menu_item);
     menu_item.classList.add("menu_item");

    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="PORTFOLIO";
    menu_link.href="dom.html";

     //listing menu items
     var menu_item=document.createElement("LI");
     menu_list.appendChild(menu_item);
     menu_item.classList.add("menu_item");

    // links to menu
    var menu_link=document.createElement("A");
    menu_item.appendChild(menu_link);
    menu_link.classList.add("link");
    menu_link.innerHTML="GALLERY";
    menu_link.href="dom.html";


    // hero_section
    var hero_section = document.createElement("DIV");
    section_data.appendChild(hero_section);
    hero_section.classList.add("left_content");


    // hero section heading
    var herosection_heading = document.createElement("H1");
    hero_section.appendChild(herosection_heading);
    herosection_heading.classList.add("h1");
    herosection_heading.innerHTML = " Cursus penati<br> saccum nulla.";

    // hero section text
    var herosection_text = document.createElement("P");
    hero_section.appendChild(herosection_text);
    herosection_text.classList.add("text_style");
    herosection_text.innerHTML = "Nullamlacus dui ipsum conseque loborrtis non euisque<br> morbi penas dapibulum orna.Urnaultrices quis<br> curabitur phasellentesque congue magnis vestibulum<br> quismodo nulla et feuglat adipiscinia pellentum leo.";

    // read more button
    var read_more=document.createElement("BUTTON");
    hero_section.appendChild(read_more);
    read_more.classList.add("readmore_button");
    read_more.innerHTML="Read More Here >>";

    // hero_section
    var right_section = document.createElement("DIV");
    section_data.appendChild(right_section);
    right_section.classList.add("right_content");

    // image section
    var image_part=document.createElement("IMAGE");
    right_section.appendChild(image_part);
    image_part.innerHTML="<img src='images/img.jpg' class='image'>";

}
