let xhttp = new XMLHttpRequest();
let json;
let totalData; // 총 데이터 수
let dataPerPage = 10; // 한 페이지에 나타낼 글 수
let pageCount = 10; // 페이징에 나타낼 페이지 수
let globalCurrentPage = 1; // 현재 페이지

xhttp.onreadystatechange = function () {

    if (xhttp.readyState == 4 && xhttp.status == 200) {

        json = JSON.parse(this.responseText);

        totalData = json.length;
    }
}

xhttp.open("GET", "news.json", true);
xhttp.send();

$(document).ready(function () {

    // 글 목록 표시 호출 (테이블 생성)
    displayData(1, dataPerPage);

    // 페이징 표시 호출
    paging(totalData, dataPerPage, pageCount, 1);
});

function paging(totalData, dataPerPage, pageCount, currentPage) {

    totalPage = Math.ceil(totalData / dataPerPage); //총 페이지 수

    if (totalPage < pageCount) {
        pageCount = totalPage;
    }

    let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
    let last = pageGroup * pageCount; // 화면에 보여질 마지막 페이지 번호

    if (last > totalPage) {
        last = totalPage;
    }

    let first = last - (pageCount - 1); // 화면에 보여질 첫번째 페이지 번호
    let next = last + 1;
    let prev = first - 1;

    let pageHtml = "";

    if (prev > 0) {

        pageHtml += "<li><a href='#news_page_th' id='prev'> 이전 </a></li>";
    }

    // 페이징 번호 표시 

    for (var i = first; i <= last; i++) {

        if (currentPage == i) {

            pageHtml += "<li class='on'><a href='#news_page_th' id='" + i + "'>" + i + "</a></li>";

        } else {

            pageHtml += "<li><a href='#news_page_th' id='" + i + "'>" + i + "</a></li>";
        }
    }

    if (last < totalPage) {

        pageHtml += "<li><a href='#news_page_th' id='next'> 다음 </a></li>";
    }

    $("#paging").html(pageHtml);
    let displayCount = "";
    displayCount = "현재 1 - " + totalPage + " 페이지 / " + totalData + "건";
    $("#displayCount").text(displayCount);

    // 페이징 번호 클릭 이벤트 
    $("#paging li a").click(function () {

        let $id = $(this).attr("id");
        selectedPage = $(this).text();

        if ($id == "next") selectedPage = next;
        if ($id == "prev") selectedPage = prev;

        // 전역변수에 선택한 페이지 번호를 담는다...
        globalCurrentPage = selectedPage;

        // 페이징 표시 재호출
        paging(totalData, dataPerPage, pageCount, selectedPage);

        // 글 목록 표시 재호출
        displayData(selectedPage, dataPerPage);
    });
}

// 현재 페이지(currentPage)와 페이지당 글 개수(dataPerPage) 반영
function displayData(currentPage, dataPerPage) {

    let txt = "";

    // Number로 변환하지 않으면 아래에서 +를 할 경우 스트링 결합이 되어버림.. 
    currentPage = Number(currentPage);
    dataPerPage = Number(dataPerPage);

    let cut = "";
    let date = "";
    let press = "";

    for (var i = (currentPage - 1) * dataPerPage; i < (currentPage - 1) * dataPerPage + dataPerPage; i++) {

        txt += "<li class='group'>";
        txt += "<table class='headline'>";
        txt += "<tr>";
        txt += "<td class='kind'>";
        txt += "<div class='round_box'>뉴 스</div>";
        txt += "</td>";

        press = json[i].press;

        if (press.includes("언론사 선정")) {

            cut = press.indexOf('언론사 선정');

            txt += "<td class='press'>[" + press.substring(0, cut) + "]</td>";

        } else {

            txt += "<td class='press'>[" + press + "]</td>";
        }

        txt += "<td class='title'><a href=" + json[i].url + " target='_blank'>" + json[i].title + "</a></td>";

        date = json[i].date;

        if (date.includes("단")) {

            cut = date.indexOf('단');

            // txt += "<td class='date'>" + date.substring(0, cut+1) + "<br />" + date.substring(cut+1) + "</td>";

            txt += "<td class='date'>" + date.substring(cut + 1) + "</td>";

        } else if (date.includes("TOP")) {

            cut = date.indexOf('P');

            // txt += "<td class='date'>" + date.substring(0, cut+1) + "<br />" + date.substring(cut+1) + "</td>";

            txt += "<td class='date'>" + date.substring(cut + 1) + "</td>";

        } else {

            txt += "<td class='date'>" + date + "</td>";
        }

        txt += "</tr>";
        txt += "</table>";
        txt += "</li>";
    }

    $("#news_page").html(txt);

    window.location.reload()
}

$("#dataPerPage").change(function () {

    dataPerPage = $("#dataPerPage").val();

    // 전역 변수에 담긴 globalCurrent 값을 이용하여 페이지 이동없이 글 표시개수 변경
    paging(totalData, dataPerPage, pageCount, globalCurrentPage);
    displayData(globalCurrentPage, dataPerPage);
});