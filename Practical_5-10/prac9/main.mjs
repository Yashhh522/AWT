const condition = true; // You can set this condition based on your logic

if (condition) 
{
  import('./module1.mjs').then((module) => {
    module.module1Function();
  }).catch((error) => {
    console.error('\nError loading module-1 : \n',error);
  });
} 
else 
{
  import('./module2.mjs').then((module) => {
    module.module2Function();
  }).catch((error) => {
    console.error('Error loading module-2 : \n',error);
  });
}
