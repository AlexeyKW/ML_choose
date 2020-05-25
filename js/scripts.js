$("#taskType").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest, Elastic Net");
    }
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("Gradient Boosting machines, Random Forest, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (time=="Да")){
        $("#output").text("Markov Chain, LSTM, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("GWR, MGWR, Deep learning");
    }
});

$("#dataType").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest, Elastic Net");
    }
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("Gradient Boosting machines, Random Forest, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (time=="Да")){
        $("#output").text("Markov Chain, LSTM, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("GWR, MGWR, Deep learning");
    }
});

$("#isTime").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest, Elastic Net");
    }
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("Gradient Boosting machines, Random Forest, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (time=="Да")){
        $("#output").text("Markov Chain, LSTM, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("GWR, MGWR, Deep learning");
    }
});

$("#interp").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest, Elastic Net");
    }
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("Gradient Boosting machines, Random Forest, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (time=="Да")){
        $("#output").text("Markov Chain, LSTM, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("GWR, MGWR, Deep learning");
    }
});

$("#calcSpeed").change(function() {
    let task = $("#taskType option:selected").val();
    let data = $("#dataType option:selected").val();
    let time = $("#isTime option:selected").val();
    let interp = $("#interp option:selected").val();
    let speed = $("#calcSpeed option:selected").val();
    
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest, Elastic Net");
    }
    if ((task=="Регрессия") && (data=="Векторные данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("Gradient Boosting machines, Random Forest, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Да") && (speed=="Да")){
        $("#output").text("Линейная регрессия, Random Forest");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (time=="Да")){
        $("#output").text("Markov Chain, LSTM, Deep learning");
    }
    if ((task=="Регрессия") && (data=="Растровые данные") && (interp=="Нет") && (speed=="Нет")){
        $("#output").text("GWR, MGWR, Deep learning");
    }
});