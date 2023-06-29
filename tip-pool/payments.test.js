describe('Testing payments', function(){
    beforeEach(function(){
        allPayments = {};
    });
    
    it('Submit a payment iteration into the object, and create HTML data for that object', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        
        submitPaymentInfo();
        
        expect(paymentTbody.querySelectorAll("tr").length).toEqual(1);
    });
    
    it("Create a payment data object of a set of inputs", function(){
        billAmtInput.value = 54;
        tipAmtInput.value = 19;
        
        expect(createCurPayment()).toEqual({
            billAmt: '54',
            tipAmt: '19',
            tipPercent: 35
        });
        
        billAmtInput.value = 100;
        tipAmtInput.value = 8;
        
        expect(createCurPayment()).toEqual({
            billAmt: '100',
            tipAmt: '8',
            tipPercent: 8
        });
    });
    
    it('Should create a new row for a given set of data, and create 4 cells', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        
        submitPaymentInfo();
        
        expect(paymentTbody.querySelectorAll("tr td").length).toEqual(4);
    });
    
    it("Should have a total summary of all processed payments", function(){
        billAmtInput.value = 34;
        tipAmtInput.value = 5;
        
        submitPaymentInfo();
        
        billAmtInput.value = 48;
        tipAmtInput.value = 12;
        
        submitPaymentInfo();
        
        expect(summaryTds[0].innerHTML).toBe("$82");
        expect(summaryTds[1].innerHTML).toBe("$17");
        expect(summaryTds[2].innerHTML).toBe("20%");
    });
    
    afterEach(function(){
        billAmtInput.value = "";
        tipAmtInput.value = "";
        paymentTbody.innerHTML = "";
        allPayments = {};
        
        summaryTds[0].innerText = "";
        summaryTds[1].innerText = "";
        summaryTds[2].innerText = "";
    });
});