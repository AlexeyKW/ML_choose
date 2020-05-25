$("#taskType").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (speed=="Да")){
        $("#output").text("Линейная регрессия");
    }
});