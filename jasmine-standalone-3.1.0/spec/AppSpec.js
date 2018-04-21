describe("js-allonge", function() {
    describe("cap-one" , function(){
        it('evaluating an expression values', function(){
            expect(2==='2').toBe(false);
            expect((2 + 2 === 4) === (2 !== 5)).toBe(true);
        });
        it('evaluating an expression arrays', function(){
            var array1=[1,2];
            var array2=[1,2];
            expect([2,1,5]!=[2,1,5]).toBe(true);
            expect(array1===array2).toBe(false);
            expect(array1===array2).toEqual(false);
        });
    });
    describe("toEqual", function() {
        it("works for simple literals and variables", function() {
            var a = 12;
            expect(a).toEqual(12);
        });
        
        it("objects", function() {
            var obj1 = {
                a: 12,
                b: 34
            };
            var obj2 = {
                a: 12,
                b: 34
            };
          expect(obj1).toEqual(obj2);
        });
    });
    describe('functions', function(){
        function foo(value){
            return(function(copy){
                return copy === value;
            })(value)
        }
        foo(NaN);
    });
});
