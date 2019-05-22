const setCase = (theYtMode, theCase) => {
  selectedMode = theYtMode

  if (selectedMode === theCase) {
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
}

document.addEventListener("DOMContentLoaded", function() {
  chrome.storage.sync.get("ytMode", function(data) {
    if (!chrome.runtime.error) {
      selectedMode = data.ytMode

      setCase(selectedMode, selectedMode)

      // if (selectedMode === "lowercase") {

      //   var style = document.createElement("style")
      //   style.id='plzstopyelling'
      //   style.innerHTML = `
      //             * {
      //                 text-transform: lowercase!important
      //             }
      //             `
      //   var body = document.querySelector("body")

      //   body.parentNode.insertBefore(style, body)
      // }

      // if (selectedMode === "uppercase") {

      //   var style = document.createElement("style")
      //   style.id='plzstopyelling'
      //   style.innerHTML = `
      //             * {
      //                 text-transform: uppercase!important
      //             }
      //             `
      //   var body = document.querySelector("body")

      //   body.parentNode.insertBefore(style, body)
      // }

      // if (selectedMode === "capitalize") {

      //   var style = document.createElement("style")
      //   style.id='plzstopyelling'
      //   style.innerHTML = `
      //             * {
      //                 text-transform: capitalize!important
      //             }
      //             `
      //   var body = document.querySelector("body")

      //   body.parentNode.insertBefore(style, body)
      // }

      // if (selectedMode === "inherit") {

      //   var style = document.createElement("style")
      //   style.id='plzstopyelling'
      //   style.innerHTML = `
      //           * {
      //               text-transform: inherit!important
      //           }
      //           `

      //   // Get the first script tag
      //   var body = document.querySelector("script")

      //   // Insert our new styles before the first script tag
      //   body.parentNode.insertBefore(style, body)
      // }
    }
  })
})
