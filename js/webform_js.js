//enable toogle popover
$(function () {
    $('[data-toggle="popover"]').popover();
    //modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    //add item
    var id = 12;

    $(document).on("click", "#addBtn", function () {
        var addTrText =
            '<tr class = "' + id + '">' +
            '<td style="text-align: center;"><i id="delete" class="fa fa-trash fa-border"></i></td>' +
            '<td><input type="text" placeholder="새로 추가된 아이템" style="width:100%;"></input></td>' +
            '<td></td>' +
            '<td><input type="text" style="width:100%;"></input></td>' +
            '<td><input type="text" style="width:100%;"></input></td>' +
            '<td><input type="text" style="width:100%;"></input></td></tr>';
        $("#supTab > tbody:last").append(addTrText);

        id++;
    });

    //edit item
    $(document).on("click", "#edit", function () {
        var trHtml = $(this).parent().parent();

        var tdHtml = trHtml.children();

        var idVal = trHtml.attr('class');
        
        $("." + idVal + " " + ".editText").attr("readonly", false);

        tdHtml.eq(2).html('<i id="save" class="fa fa-pencil fa-border"></i>');
    });

    //save changes
    $(document).on("click", "#save", function () {
        var trHtml = $(this).parent().parent();

        var tdHtml = trHtml.children();

        var idStr = trHtml.attr('class');

        $("." + idStr + " " + ".editText").attr("readonly", true);

        tdHtml.eq(2).html('<i id="edit" class="fa fa-pencil fa-border"></i>');
    });

    //edit all 일괄 수정
    $(document).on("click", "#editAll", function () {
        $(".editText").attr("readonly", false);

        $(this).attr('id', 'saveAll');
    });

    //save All
    $(document).on("click", "#saveAll", function () {
        $(".editText").attr("readonly", true);

        $(this).attr('id', 'editAll');
    });

    //delete item
    $(document).on("click", "#delete", function () {
        var trHtml = $(this)
            .parent()
            .parent();

        trHtml.remove(); //delete tr tag
    });
})

