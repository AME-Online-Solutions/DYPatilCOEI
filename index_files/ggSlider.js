$(document).on("click", ".gg-element", function() {
    var c = $(this);
    var f = $(this).prev().find("img");
    var b = $(this).next().find("img");
    $("#gg-screen").show();
    var a = $(".gg-element").length - 1;
    var g = $(".gg-element").index(c);

    function e() {
        if (a > 1) {
            if (g == 0) {
                return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div>'
            } else {
                if (g == a) {
                    return '<div class="gg-close gg-bt">&times</div><div class="gg-prev gg-bt">&larr;</div>'
                } else {
                    return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>'
                }
            }
        } else {
            return '<div class="gg-close gg-bt">&times</div>'
        }
    }
    e();
    var d = e();
    $("#gg-screen").html('<div class="gg-image"></div>' + d);
    $(".gg-image").html('<img src="' + $("img", this).attr("src") + '">');
    $("body").css("overflow", "hidden");
    $(document).on("click", ".gg-close", function() {
        $("#gg-screen").hide();
        $("body").css("overflow", "auto")
    });
    $("#gg-screen").on("click", function(h) {
        if (h.target == this) {
            $("#gg-screen").hide();
            $("body").css("overflow", "auto")
        }
    });
    $(document).on("click", ".gg-prev", function() {
        c = c.prev();
        f = c.find("img");
        var h = '<img src="' + f.attr("src") + '">';
        $(".gg-image").html(h);
        g = $(".gg-element").index(c);
        e();
        d = e();
        $("#gg-screen").html('<div class="gg-image">' + h + "</div>" + d)
    });
    $(document).on("click", ".gg-nxt", function() {
        c = c.next();
        b = c.find("img");
        var h = '<img src="' + b.attr("src") + '">';
        $(".gg-image").html(h);
        g = $(".gg-element").index(c);
        e();
        d = e();
        $("#gg-screen").html('<div class="gg-image">' + h + "</div>" + d)
    });
    $(document).on("keydown", function(j) {
        if (j.keyCode == 37 && g > 0) {
            c = c.prev();
            f = c.find("img");
            var i = '<img src="' + f.attr("src") + '">';
            $(".gg-image").html(i);
            g = $(".gg-element").index(c);
            e();
            d = e();
            $("#gg-screen").html('<div class="gg-image">' + i + "</div>" + d)
        } else {
            if (j.keyCode == 39 && g < a) {
                c = c.next();
                b = c.find("img");
                var h = '<img src="' + b.attr("src") + '">';
                $(".gg-image").html(h);
                g = $(".gg-element").index(c);
                e();
                d = e();
                $("#gg-screen").html('<div class="gg-image">' + h + "</div>" + d)
            }
        }
    })
});