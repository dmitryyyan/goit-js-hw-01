function getElementWidth(content,padding,border){
  
    const result = Number.parseInt(content) + (Number.parseInt(padding)+Number.parseInt(padding)) + (Number.parseInt(border)+Number.parseInt(border));
    return result;
}
console.log(getElementWidth("50px", "8px", "4px"));

width = console.log(getElementWidth("60px", "12px", "8.5px"));

width = console.log(getElementWidth("200px", "0px", "0px"));

