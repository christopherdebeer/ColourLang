var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    function get_index (letter) {
        for (i=0;i<alphabet.length;i++) {
            if(alphabet[i] == letter.toLowerCase()) { return i; }
        } 
        return false;
    }
    
    function colourise (text) {
        
        var sat = "";
        var colours = "";
        for (x=0; x < text.length; x++) {
            
            if (isNaN(parseInt(text[x]))) {
                if (text[x] == text[x].toUpperCase()) {
                    sat = "100%";
                } else {
                    sat = "50%";
                }
                
                var hue = ((get_index(text[x])+1) / 26) * 100 * 3.6;
                
                if (text[x] == " ") {
                    colours += "<span class='col' style='color: rgba(0,0,0,0);background-color:hsla(0," + sat + ",100%,1)'>" + text[x] + "</span>";
                } else {
                    colours += "<span class='col' style='color: rgba(0,0,0,0);background-color:hsla(" + hue.toString() + "," + sat + ",50%,1)'>" + text[x] + "</span>";
                }
            } else {
                
                var hue = "100%";
                var sat = "0%";
                var lightness = (parseInt(text[x]) / 10) + 0.1;
                
                colours += "<span class='col' style='color: rgba(0,0,0,0);background-color:rgba(0,0,0,"+lightness.toString()+")'>" + text[x] + "</span>";

            }
            
        }
        
        return colours;
        
        
    }
        
        $(document).ready( function () {
            
            $("#clear").click( function (e) {
               e.preventDefault();
               $("#original-text").val("");
               $("#output").html("");
               return false;
               
            });
            
           $("#translate").click( function (e) {
                e.preventDefault();
                var lines = $("#original-text").val().split("\n");
                $("#output").html("<h3>Output:</h3>");
                $.each( lines,function () {
                   console.log($(this)[0]);
                   $("#output").append(colourise($(this)[0]) + "<br />");
                });
                return false;
                
                //e.preventDefault();
                //var lines = $("#original-text").val().split('\n');
                //$("#output").html("<h3>Output:</h3>");
                //$.each(lines, function () {
                //    $("#ouput").append(colourise($(this)));
                //});
                //return false;
                
            });
           
            // trnaslate sections that have a colourlang class and insert after text to be translated
            
            $(".colourlang").each ( function () {
                _this = $(this).clone();
                $("<p>" + colourise($(this).text()) + "</p>").insertAfter($(this));
                
            });
            
           
        });