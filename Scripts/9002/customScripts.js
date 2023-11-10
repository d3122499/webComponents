function ShowProgress() {

                    var strVin = document.getElementById("<%=objTextbox_strVin.ClientID %>").value;
            
                    if (strVin == null || strVin == '')
                        return;

                    setTimeout(function () {
                        var modal = $('<div />');
                        modal.addClass("modal");
                        $('body').append(modal);
                        var loading = $(".loading");
                        loading.show();
                        var top = Math.max($(window).height() / 2 - loading[0].offsetHeight / 2, 0);
                        var left = Math.max($(window).width() / 2 - loading[0].offsetWidth / 2, 0);
                        loading.css({ top: top, left: left });
                    }, 200);
                }

                $('form').live("submit", function () {
                ShowProgress();

                });