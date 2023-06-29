describe("Testing miscellaneous functions in that perform calculations", function(){
    it("Should total all the payments in the object", function(){
        billAmtInput.value = 57;
        tipAmtInput.value = 13;
        submitPaymentInfo();
        
        billAmtInput.value = 34;
        tipAmtInput.value = 8;
        submitPaymentInfo();
        
        expect(sumPaymentTotal("billAmt")).toEqual(91)
        expect(sumPaymentTotal("tipAmt")).toEqual(21);
        expect(sumPaymentTotal("tipPercent")).toEqual(47);
    });
    
    it("Should return a percentage of tip based on the bill ammount", function(){
      expect(calculateTipPercent(100, 8)).toBe(8); 
      expect(calculateTipPercent(54, 19)).toBe(35); 
    });
    
    it("Should create a cell in a row with the given data", function(){
        /*billAmtInput.value = 8;
        tipAmtInput.value = 2;
        submitPaymentInfo();*/
        let localTr = document.createElement("tr");
        appendTd(localTr, 8);
        paymentTbody.append(localTr);
        expect(localTr.querySelector("td").innerHTML).toEqual("8");
    });
    
    afterEach(function(){
        summaryTds[0].innerText = "";
        summaryTds[1].innerText = "";
        summaryTds[2].innerText = "";
        paymentTbody.innerHTML = "";
    });
});