function compute() {
    var data = document.getElementById("data").value
    eel.demo(data)(setValue) // call the demo function which we have created in the main.py file
    var keyword="apec"
    var noOfTweet=10
    var select=1
    eel.input(keyword, noOfTweet, select)(setValue)
}

function setValue(res) {
    document.getElementById("abc").src = res
}
