console.log("Heloowsdj")

  // Import the functions you need from the SDKs you need//
      // Import the functions you need from the SDKs you need
            
      var trigger=document.getElementById("trigger");
      window.onload = function()
      {
      var trigger=document.getElementById("trigger");
      trigger.checked=true;
      connect();
      }

      async function connect() 
      {
        if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
       console.log('metamask is installed.')
        } else
       {
        console.log("No wallet");
       }
       console.log('wow')
      window.ethereum.request({
     method: "wallet_addEthereumChain",
      params: [{
      chainId: "1244",
     rpcUrls: ["https://rpc-test-1.archiechain.io"],
     chainName: "Archie Testnet",
      nativeCurrency: {
      name: "ARC",
      symbol: "ARC",
      decimals: 18
    },
    blockExplorerUrls: ["https://polygonscan.com/"]
  }]
});
      } 
