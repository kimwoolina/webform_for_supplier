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
        var nameHtml = tdHtml.eq(1).text();
        var supplyHtml = tdHtml.eq(3).text();
        var sellingHtml = tdHtml.eq(4).text();
        var vendorHtml = tdHtml.eq(5).text();

        var editable =
            '<td style="text-align: center;">' + idVal + '</td>' +
            '<td><input type="text" value="' + nameHtml + '" style="width:100%;"></td>' +
            '<td><i id="save" class="fa fa-pencil fa-border"></i></td>' +
            '<td><input type="text" value="' + supplyHtml + '" style="width:100%;"></td>' +
            '<td><input type="text" value="' + sellingHtml + '" style="width:100%;"></td>' +
            '<td><input type="text" value="' + vendorHtml + '" style="width:100%;"></td>';

        $(this).parent().parent().html(editable);
    });

    //save changes
    $(document).on("click", "#save", function () {
        var trHtml = $(this).parent().parent();

        var tdHtml = trHtml.children();

        var idStr = trHtml.attr('class');

        var strName = tdHtml.eq(1).children().val();
        var strSupply = tdHtml.eq(3).children().val();
        var strSelling = tdHtml.eq(4).children().val();
        var strVendor = tdHtml.eq(5).children().val();

        var saveChange =
            '<td style="text-align:center;">' + idStr + '</td>' +
            '<td><a href="#">' + strName + '</a></td>' +
            '<td><i id="edit" class="fa fa-pencil fa-border"></i></td>' +
            '<td>' + strSupply + '</td>' +
            '<td>' + strSelling + '</td>' +
            '<td>' + strVendor + '</td>';

        $(this).parent().parent().html(saveChange);
    });

    //edit all 일괄 수정
    $(document).on("click", "#editAll", function () {
        for (var i = 1; i < 12; i++) {
            var tdHtml = $("." + i).children();

            var nameHtml = tdHtml.eq(1).text();
            var supplyHtml = tdHtml.eq(3).text();
            var sellingHtml = tdHtml.eq(4).text();
            var vendorHtml = tdHtml.eq(5).text();

            var editable =
                '<td style="text-align: center;">' + i + '</td>' +
                '<td><input type="text" value="' + nameHtml + '" style="width:100%;"></td>' +
                '<td><i id="save" class="fa fa-pencil fa-border"></i></td>' +
                '<td><input type="text" value="' + supplyHtml + '" style="width:100%;"></td>' +
                '<td><input type="text" value="' + sellingHtml + '" style="width:100%;"></td>' +
                '<td><input type="text" value="' + vendorHtml + '" style="width:100%;"></td>';

            $("." + i).html(editable);
        }
        $(this).attr('id', 'saveAll');
    });

    //save All
    $(document).on("click", "#saveAll", function () {
        for (var i = 1; i < 12; i++) {
            var tdHtml = $("." + i).children();

            var strName = tdHtml.eq(1).children().val();
            var strSupply = tdHtml.eq(3).children().val();
            var strSelling = tdHtml.eq(4).children().val();
            var strVendor = tdHtml.eq(5).children().val();

            var saveChange =
                '<td style="text-align:center;">' + i + '</td>' +
                '<td><a href="#">' + strName + '</a></td>' +
                '<td><i id="edit" class="fa fa-pencil fa-border"></i></td>' +
                '<td>' + strSupply + '</td>' +
                '<td>' + strSelling + '</td>' +
                '<td>' + strVendor + '</td>';

            $("." + i).html(saveChange);
        }
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

