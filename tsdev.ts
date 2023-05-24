/**
*  Imports fonts from Google Fonts, by an array of font names
* 
* @param fonts - Array of strings containing font names
* 
* @returns nothing
*/
function importFonts(fonts: string[]): void{
         // Import fonts
         if(document.getElementById("fontImportElem")){
            document.getElementById("fontImportElem")!.remove();
        }

        let fontImportString: string = "@import url('https://fonts.googleapis.com/css2?";

        fonts!.forEach((fontName, i)=>{
            fontImportString += `${(i > 0) ? "&" : ""}family=${(fontName.trim()).replace(/\s/gi, "+")}:wght@100;200;300;400;500;600;700;800;900`;
        });
        fontImportString += "&display=swap');";
        
        document.querySelector("head")?.insertAdjacentHTML("beforeend", `
        <style id="fontImportElem">
            ${fontImportString}
        </style>`);
    }
