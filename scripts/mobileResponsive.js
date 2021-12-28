const NAVListItems = document.querySelectorAll('.NavbarListItem');
console.log(NAVListItems)
let ArrayNavListItems = [];


NAVListItems.forEach((link)=>{
    ArrayNavListItems.push(link)
});
let reversedListNAV = ArrayNavListItems.reverse(); 
console.log(reversedListNAV)
const navSlide = () => {
    const buttoN = document.querySelector('.container-lines');
    const nav = document.querySelector('.grid-ul-header');
    
    // NAVListItems.reverse();
    
    // Toggle nav
    buttoN.addEventListener('click', () => {
        nav.classList.toggle('header-active')

        
        


        // Animation li
        console.log(reversedListNAV)

        reversedListNAV.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
                console.log("dd")
            }else{
                link.style.animation = `navListFade 500ms ease forwards ${index / 7 + 0.5}s`;
                console.log("ee")
            }
            
        });

    // buttoN Animation
    buttoN.classList.toggle('toggle');

    });



}

navSlide();
