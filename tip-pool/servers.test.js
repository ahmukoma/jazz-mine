describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

    //submitting server info
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
    
    //updating server table
    it('should add the new value + all previous values into the server table', function(){
        serverNameInput.value = "Sir Vaar";
        submitServerInfo();
        
        serverNameInput.value = "Sir Verr";
        submitServerInfo();
        
        expect(serverTbody.querySelectorAll("tr").length).toEqual(Object.keys(allServers).length);
    });
    
    it("Should create a 'delete' button cell in the row", function(){
        serverNameInput.value = "Dillet";
        submitServerInfo();
        
        
        expect(serverTbody.querySelectorAll("tr td").length).toEqual(3);
        
    });

  afterEach(function() {
    // teardown logic
      allServers = {};
      serverId = 0;
      serverTbody.innerHTML = "";
  });
});
