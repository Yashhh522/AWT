class infiniteSequence 
{
    constructor() 
    {
      this.current = 0;
    }
    next() 
    {
      return {
        value: this.current++,
        done: false,
      };
    }
}
const sequenceIterator = new infiniteSequence();
for(let i=0;i<10;i++) 
{
    console.log(sequenceIterator.next().value);
}
  