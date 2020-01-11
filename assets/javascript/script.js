$("button").on("click", function () {
    

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=rM4PSxO1OQcIYPizJdQzldFxGuZUgWkZ"
    var term = $("#exampleFormControlInput1").val();
    var beginYear = $("#exampleFormControlInputBeginYear").val();
    var endYear = $("#exampleFormControlInputEndYear").val();


    if (beginYear != "") {
        var beginDateParam = "&begin_date=" + beginYear + "0101&";
        queryURL += beginDateParam;

    }
    else if (endYear != ""){
        var beginDateParam = "&begin_date=" + beginYear + "0101&" + endYear + "0101&";
        queryURL += beginDateParam
    }



    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;





        });
});
