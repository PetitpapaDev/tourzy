// 자주 묻는 질문 카테고리 선택
$(document).ready(function () {

    $(".use").hide();
    $(".pay").hide();
    $(".insure").hide();

    $(".table_select_car").css({
        "color": "#FFFFFF",
        "background": "#53BDB8",
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

        "color": "#53BDB8",
        "background": "#ffffff",
        "border": "1px solid #53BDB8"
    });

    $(".table_select_use").css({
        "color": "#53BDB8",
        "background": "#ffffff",
        "border": "1px solid #53BDB8"
    });

    $(".table_select_pay").css({
        "color": "#53BDB8",
        "background": "#ffffff",
        "border": "1px solid #53BDB8"
    });

    $(".table_select_insure").css({
        "color": "#53BDB8",
        "background": "#ffffff",
        "border": "1px solid #53BDB8"
    });

    if (type == "car") {

        $(".car").show();

        $(".table_select_car").css({
            "color": "#FFFFFF",
            "background": "#53BDB8",
            "border-radius": "10px"
        });
    }

    if (type == "use") {

        $(".use").show();

        $(".table_select_use").css({
            "color": "#FFFFFF",
            "background": "#53BDB8",
            "border-radius": "10px"
        });
    }

    if (type == "pay") {

        $(".pay").show();

        $(".table_select_pay").css({
            "color": "#FFFFFF",
            "background": "#53BDB8",
            "border-radius": "10px"
        });
    }

    if (type == "insure") {

        $(".insure").show();

        $(".table_select_insure").css({
            "color": "#FFFFFF",
            "background": "#53BDB8",
            "border-radius": "10px"
        });
    }
}
// 자주 묻는 질문 카테고리 선택