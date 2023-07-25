const {test, expect} = require('@playwright/test')

test('drag and drop', async({page}) => {
// Crée une nouvelle page
// const page = await context.newPage();

 //go to url 
 
 await page.goto('https://demoqa.com/droppable/');
 await page.waitForTimeout(13000);

  // Sélectionne l'élément source à glisser et l'element cible
  const source = await page.$('#draggable');
  const target = await page.$('#droppable');
    
  // Effectue le drag and drop
  await source.dragAndDrop(target);
    await page.waitForTimeout(1000);




})