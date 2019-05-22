let lowercase = document.querySelector("#lowercase")
let uppercase = document.querySelector("#uppercase")
let capitalize = document.querySelector("#capitalize")
let inherit = document.querySelector("#inherit")
let donate = document.querySelector("a.donate")
let twitter = document.querySelector("a.twitter")

const buttonOnClick = (theCase) => {
  chrome.storage.sync.get("ytMode", function(data) {
    selectedMode = data.ytMode

    if (selectedMode === theCase) {
      if (document.getElementById("plzstopyelling")) {
        document.getElementById("plzstopyelling").remove()
      }

      var style = document.createElement("style")
      style.id = "plzstopyelling"
      style.innerHTML = `
                  * {
                      text-transform: ${theCase}!important
                  }
                `
      var body = document.querySelector("body")

      body.parentNode.insertBefore(style, body)
    }
  })
}

lowercase.addEventListener("click", () => {
  chrome.storage.sync.set({ ytMode: "lowercase" })

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
    
    chrome.storage.sync.get('ytMode', function(data) {
      selectedMode = data.ytMode;
      
      if (selectedMode === "lowercase") {

        if (document.getElementById('plzstopyelling')) {
          document.getElementById('plzstopyelling').remove()
          }

        var style = document.createElement("style")
        style.id = "plzstopyelling"
        style.innerHTML = \`
                  * {
                      text-transform: lowercase!important
                  }
                  \` 
        var body = document.querySelector("body")

        body.parentNode.insertBefore(style, body)

      }
    
    })
    `
    })
  })
})

uppercase.addEventListener("click", () => {
  chrome.storage.sync.set({ ytMode: "uppercase" })

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
    
    chrome.storage.sync.get('ytMode', function(data) {
      selectedMode = data.ytMode;
      
      if (selectedMode === "uppercase") {

        if (document.getElementById('plzstopyelling')) {
          document.getElementById('plzstopyelling').remove()
          }

        var style = document.createElement("style")
        style.id = "plzstopyelling"
        style.innerHTML = \`
                  * {
                      text-transform: uppercase!important
                  }
                  \` 
        var body = document.querySelector("body")

        body.parentNode.insertBefore(style, body)

      }
    
    })
    `
    })
  })
})

capitalize.addEventListener("click", () => {
  chrome.storage.sync.set({ ytMode: "capitalize" })

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
    
    chrome.storage.sync.get('ytMode', function(data) {
      selectedMode = data.ytMode;
      
      if (selectedMode === "capitalize") {

        if (document.getElementById('plzstopyelling')) {
          document.getElementById('plzstopyelling').remove()
          }

        var style = document.createElement("style")
        style.id = "plzstopyelling"
        style.innerHTML = \`
                  * {
                      text-transform: capitalize!important
                  }
                  \` 
        var body = document.querySelector("body")

        body.parentNode.insertBefore(style, body)

      }
    
    })
    `
    })
  })
})

inherit.addEventListener("click", () => {
  chrome.storage.sync.set({ ytMode: "inherit" })

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
    
    chrome.storage.sync.get('ytMode', function(data) {
      selectedMode = data.ytMode;
      
      if (selectedMode === "inherit") {

        if (document.getElementById('plzstopyelling')) {
          document.getElementById('plzstopyelling').remove()
          }

        var style = document.createElement("style")
        style.id = "plzstopyelling"
        style.innerHTML = \`
                  * {
                      text-transform: inherit!important
                  }
                  \` 
        var body = document.querySelector("body")

        body.parentNode.insertBefore(style, body)

      }
    
    })
    `
    })
  })
})

donate.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.create({ url: "https://paypal.me/brunocrosier" })
  })
})

twitter.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.create({ url: "https://twitter.com/bruno_crosier" })
  })
})
