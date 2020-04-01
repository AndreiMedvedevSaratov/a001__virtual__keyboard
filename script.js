// Text area for output letters
const Output_Textarea = document.createElement('textarea');       


// Adding textarea for output
document.body.append(Output_Textarea);
Output_Textarea.classList.add('Output_Textarea');
Output_Textarea.setAttribute('readonly', 'readonly');


// Constant for keyboard
const Main_Area = document.createElement('div');


// Creating keyboard
Main_Area.classList.add('main_area');
document.body.append(Main_Area);


// Creating rows in keyboard
const Main_Area_Rows = new DocumentFragment();

for (let i = 0; i < 5; i++) 
    {
        const Main_Area_Row = document.createElement('div');

        Main_Area_Row.classList.add('Main_Area_Row');
        Main_Area_Rows.append(Main_Area_Row);   
    }

Main_Area.append(Main_Area_Rows);


// Creating buttons in each row
for (let i = 0; i < 5; i++) 
    {
    const Temp_Row = new DocumentFragment();
    for (let i = 0; i < 15; i++) 
        {
        const Key = document.createElement('div');

        Key.classList.add('Key');
        Temp_Row.append(Key);
        }
    Main_Area.children[i].append(Temp_Row);
    }


// Remove unnecessary buttons
Main_Area.children[0].children[0].remove();
Main_Area.children[2].children[0].remove();
Main_Area.children[2].children[1].remove();
Main_Area.children[3].children[0].remove();
Main_Area.children[4].children[0].remove();
Main_Area.children[4].children[1].remove();
Main_Area.children[4].children[2].remove();
Main_Area.children[4].children[3].remove();
Main_Area.children[4].children[4].remove();
Main_Area.children[4].children[5].remove();


// Create not usual buttons
Main_Area.children[0].children[13].classList.add('Backspace');
Main_Area.children[1].children[0].classList.add('Tab');
Main_Area.children[1].children[14].classList.add('Delete');
Main_Area.children[2].children[0].classList.add('CapsLock');
Main_Area.children[2].children[12].classList.add('Enter');
Main_Area.children[3].children[0].classList.add('LeftShift');
Main_Area.children[3].children[12].classList.add('Arrow');
Main_Area.children[3].children[13].classList.add('RightShift');
Main_Area.children[4].children[0].classList.add('Control');
Main_Area.children[4].children[1].classList.add('Windows');
Main_Area.children[4].children[2].classList.add('Alt');
Main_Area.children[4].children[3].classList.add('Space');
Main_Area.children[4].children[4].classList.add('Alt');
Main_Area.children[4].children[5].classList.add('Control');
Main_Area.children[4].children[6].classList.add('Arrow');
Main_Area.children[4].children[7].classList.add('Arrow');
Main_Area.children[4].children[8].classList.add('Arrow');





