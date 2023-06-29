it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({
        amount: 10000,
        years: 5,
        rate: 3.99
    })).toEqual('184.12');
    
    expect(calculateMonthlyPayment({
        amount: 18019.27,
        years: 2,
        rate: 8.523
    })).toEqual('819.27');
});


it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({
        amount: 24000,
        years: 2,
        rate: 5.036
    })).toEqual('1053.30');
    
    expect(calculateMonthlyPayment({
        amount: 24000,
        years: 2,
        rate: 6.305
    })).toEqual('1067.00');
    
    expect(calculateMonthlyPayment({
        amount: 81900,
        years: 2,
        rate: 4.99808
    })).toEqual('3593.00');
});

/// etc
