$(document).ready(function(){
    $("#submitButton").click(function(e) {
                    var value = $("#searchField").val();
                    var everything;
                    everything = "<ul>";
                    console.log(value);
                    $('#searchField').text(value);
                    e.preventDefault();
                    var myurl = "https://en.wikipedia.org/w/api.php?action=query&prop=description&titles=London&format=json";
                    console.log(myurl);
                    $.ajax({
                        url: myurl,
                        datatype: "jsonp",
                        success: function(parsed_json) {
                            console.log(parsed_json);
                            var everything = "<ul>";
                            var myArray = parsed_json["items"];
                            $.each(myArray, function(i, item) {
                                console.log(myArray[i]);
                                everything += "<li> <a href=&quot;" + myArray[i].link+"&quot;>";
                                everything += myArray[i].title;
                                everything += "</a></li>";
                            })
                            everything += "</ul>";
                            console.log(everything);
                            $("#answers").html(everything);
                        }
                    });
 
    });
});