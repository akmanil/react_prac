import React from 'react'

function Class() {

    //It is the class method using constructor super 
    //constructor is used for creating classes in the java script
    //super is used the external class elements in other class acess it
    class car {
      constructor(Name) {
        this.brand =Name;
      }
        present(){
          return "Ihave a car" + this.brand
        }
    }
    class model extends car {
      constructor(model,Name){
        super(Name);
        this.model =model;
      }
      show(){
        return this.present() + "and the model is" + this.model
      }
    }
    const mycar =new model("HondaX45" , "Honda")
    return (
      <>
       <div className="container">
        {
          mycar.show()
        }
       </div>
      </>
    )
  }

    

export default Class
