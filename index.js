class MyArray{

  constructor(){
    this.length=0;
    this.data={}
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data=item;
    this.length++;
    return this.length
  }
  pop(){
    lastItem=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index){
    item=this.data[index];
    shiftItem(index);
    return item;
  }
  shiftItem(index){
    for(let i=index;i<this.length-1;i++)    {
      this.data[i]=this.data[i+1]; 
    }
    delete this.data[length-1];
    this.length--;
  }
}
newArray=new MyArray();
newArray.push("hi");
newArray.push("uday");
console.log(newArray);