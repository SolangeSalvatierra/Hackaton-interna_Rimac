// // export const getFunc = () => {  
debugger;
export const getFunc = () => {  
  const db = firebase.firestore();
  db.collection('colaboradores').get().then((snapshot) => { 
    const arrObj = [];  
    snapshot.docs.forEach(doc => {
      const objDocum = {
        id: doc.id,
        data: doc.data()
      };   
      arrObj.push(objDocum);
    });
    arrObj.forEach((ele) => {
    //   buttonMenu(ele);
      console.log(ele);      
    });
    //  console.log(arrObj);
  });
};
getFunc();


