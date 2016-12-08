// Fix the following to allow chaining of the methods.
// Arithmetic(6).add(9).subtract(4).add(7).val() => 18


(function () {

   function Arithmetic(number) {
      this.value = number;
   }

   Arithmetic.val = function () {
      return this.value;
   };

   Arithmetic.add = function (number) {
      this.value += number;
   };

   Arithmetic.subtract = function (number) {
      this.value -= number;
   };

   window.Arithmetic = function (number) {
      return new Arithmetic(number);
   };



})();
