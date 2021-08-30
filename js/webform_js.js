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
            '<tr>' +
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
    $(document).on("click", ".btn-edit", function () {
        var trHtml = $(this).parents('tr');
        if( trHtml.hasClass('edit-row')){
            trHtml.find('input').removeAttr('disabled');
            trHtml.find('.prd-name').removeClass('prd-name-none');
            trHtml.removeClass('edit-row');

        }else{
            trHtml.find('input').attr('disabled',true);
            trHtml.find('.prd-name').addClass('prd-name-none');
            trHtml.addClass('edit-row');
        }
    });

    //edit all 일괄 수정
    $(document).on("click", "#editAll", function () {
        var trHtml = $('tr');
        if(trHtml.hasClass('edit-row')){
            trHtml.find('input').removeAttr('disabled');
            trHtml.find('.prd-name').removeClass('prd-name-none');
            trHtml.removeClass('edit-row');
        }else{
            trHtml.find('input').attr('disabled',true);
            trHtml.find('.prd-name').addClass('prd-name-none');
            trHtml.addClass('edit-row');
        }
    });

    //delete item
    $(document).on("click", "#delete", function () {
        var trHtml = $(this)
            .parent()
            .parent();

        trHtml.remove(); //delete tr tag
    });
})

