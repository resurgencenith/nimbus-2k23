const Finals = [
    {
        name: "Sidharth Chaudhary",
        img: "https://drive.google.com/file/d/1Z3YUtPQJ8TTOCyu6qRkoXcybeLz31keD/view?usp=share_link",
    },
   

   
    {
        name: "Jatin Saini",
        img: "https://drive.google.com/file/d/1Hc1dPcRQDI0XjR5DPo8pu1CnDkOsJ1IC/view?usp=share_link",
    },
    
    {
        name: "Sourab Angral",
        img: "https://drive.google.com/file/d/1lLfZH7AlAjIiZ1wH7mdvU2rMnF7R2Akq/view?usp=share_link",
    },
  

]

const derive= Finals.map((person)=>{
    const arr=person.img.split('/')
    return {
        name:person.name,
        img: `https://drive.google.com/uc?export=view&id=${arr[5]}`
    }

})
console.log(derive)
export default derive;