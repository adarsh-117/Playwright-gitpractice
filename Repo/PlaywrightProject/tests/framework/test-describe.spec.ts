import {test ,expect} from '@playwright/test';

//test.describe
// It is used to create Test Groups (also known as test suites).
//It allows you to logically group related tests together into a single block. 
// It keep codebase organized,structures test reports,
// It allows to apply hooks, tags, or configurations to a specific batch of tests all at once.

test.describe('Login test suite',()=>{

    test('login with valid id and valid password' ,async ({page})=>{
        
        console.log("login with valid id and valid password");
        

    })
  test('login with invalid id and valid password' ,async ({page})=>{
        
         console.log("login with invalid id and valid password");

    })

     test('login with valid id and invalid password' ,async ({page})=>{
        
         console.log("login with valid id and invalid password");

    })

      test('login with invalid id and invalid password' ,async ({page})=>{
        
         console.log("login with invalid id and invalid password");

    })
});



test.describe('Signup suit', ()=>{

    test('Signup with email', async ({page})=>{
        console.log("signup with email");
        

    });

    test('login with mobile number' ,async({page})=>{

        console.log("signup with mobile number");

    });
}

);

test.describe('logout', ()=>{
    test('logout', async ({page})=>{
    console.log("Logout success..!");

    });
})