function visaNej(){
    var menu = document.querySelector(".nej")
    menu.classList.toggle("show")
;
};
    var btn = document.querySelector("#buttonNej")
    btn.addEventListener("click",function () {visaNej(); setTimeout(visaNej, 5000)}
    )

    function visaJa(){
        var menu = document.querySelector(".ja")
        menu.classList.toggle("show")
    ;
    };
        var btn1 = document.querySelector("#buttonJa")
        btn1.addEventListener("click",function () {visaJa(); setTimeout(visaJa, 5000)}
        )