class calculate{

    constructor(x){
     this.x=x;
    }
       plus(y){
        this.x=this.x+y
        return this;
       }
       minus(z){
         this.x=this.x-z
         return this;      
        }
        divide(w){
            this.x=this.x/w 
            return this;
        }
        multiply(c){
            this(c)=this.x*c
            return this;
        }

      
}
var result = new CustomMatch(100).plus(2).minus(3).multiply(4).divide(24)
console.log(result);