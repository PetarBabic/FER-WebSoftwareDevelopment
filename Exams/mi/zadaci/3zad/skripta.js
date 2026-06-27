async function getMinMax(firstFile, secondFile) {
    let promise1 = fetch(firstFile);
    let promise2 = fetch(secondFile);

    const tmp = await Promise.all([promise1, promise2])
    .then(
        function(result) {
            return result
        }
    )
    .then(
        function(result2) {
            console.log(result2)
        }
    )
    /*
    .then(([jsonContents1, jsonContents2]) => {
        let first = jsonContents1.json();

        console.log(first);
    })
    .catch(err => {
        console.log("An error occured while loading json");
        console.log(err)
    });
    */

    console.log(tmp)
}

getMinMax("first.json", "skripta.js")