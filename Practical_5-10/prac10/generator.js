function* evenNoGenerator(count) 
{
    let current = 0;
    let generatedCount = 0;
  
    while(generatedCount<count) 
    {
      yield current;
      current += 2;
      generatedCount++;
    }
  }
  const evenGenerator = evenNoGenerator(5); 
  for (const evenNumber of evenGenerator) 
  {
    console.log(evenNumber);
  }
  