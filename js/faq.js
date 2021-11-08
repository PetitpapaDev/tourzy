// 자주 묻는 질문 카테고리 선택
$(document).ready(function () {

    $(".use").hide();
    $(".pay").hide();
    $(".insure").hide();

    $(".table_select_car").css({
        "color": "#FFFFFF",
        "background": "#8AC63F",
        "border-radius": "10px"
    });
});

function setSelect(type) {

    var type = type;

    $(".car").hide();
    $(".use").hide();
    $(".pay").hide();
    $(".insure").hide();

    $(".table_select_car").css({

        "color": "#8AC63F",
        "background": "#ffffff",
        "border": "1px solid #8AC63F"
    });

    $(".table_select_use").css({
        "color": "#8AC63F",
        "background": "#ffffff",
        "border": "1px solid #8AC63F"
    });

    $(".table_select_pay").css({
        "color": "#8AC63F",
        "background": "#ffffff",
        "border": "1px solid #8AC63F"
    });

    $(".table_select_insure").css({
        "color": "#8AC63F",
        "background": "#ffffff",
        "border": "1px solid #8AC63F"
    });

    if (type == "car") {

        $(".car").show();

        $(".table_select_car").css({
            "color": "#FFFFFF",
            "background": "#8AC63F",
            "border-radius": "10px"
        });
    }

    if (type == "use") {

        $(".use").show();

        $(".table_select_use").css({
            "color": "#FFFFFF",
            "background": "#8AC63F",
            "border-radius": "10px"
        });
    }

    if (type == "pay") {

        $(".pay").show();

        $(".table_select_pay").css({
            "color": "#FFFFFF",
            "background": "#8AC63F",
            "border-radius": "10px"
        });
    }

    if (type == "insure") {

        $(".insure").show();

        $(".table_select_insure").css({
            "color": "#FFFFFF",
            "background": "#8AC63F",
            "border-radius": "10px"
        });
    }
}
// 자주 묻는 질문 카테고리 선택