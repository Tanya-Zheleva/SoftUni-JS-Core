function getModel() {
   let num1, num2, result;
   
   function init(num1Sel, num2Sel, resultSel) {
       num1 = $(num1Sel);
       num2 = $(num2Sel);
       result = $(resultSel);
   }
   
   function add() {
       let temp =  Number(num1.val()) +  Number(num2.val());
       result.val(temp);
   }
   
   function subtract() {
       let temp =  Number(num1.val()) -  Number(num2.val());
       result.val(temp);
   }

   let model = {init, add, subtract};

   return model;
}
