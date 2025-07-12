(function() 
{
    var oWorksheet = Api.GetActiveSheet();
    // Rows
    for (var i = 1; i < 40; i += 2) {
        var rowOdd = i, rowEven = i + 1;
        oWorksheet.GetRange("B" + rowEven + ":F" + rowEven).SetFillColor(Api.CreateColorFromRGB(200, 200, 200));
    }
    for (var i = 2; i < 40; i += 2) {
        var rowOdd = i, rowEven = i + 1;
        oWorksheet.GetRange("B" + rowEven + ":F" + rowEven).SetFillColor(Api.CreateColorFromRGB(255, 255, 255));
    }
    for (var i = 1; i < 25; i += 2) {
        var rowOdd = i, rowEven = i + 1;
        oWorksheet.GetRange("H" + rowEven + ":I" + rowEven).SetFillColor(Api.CreateColorFromRGB(200, 200, 200));
    }
    // Colums
    oWorksheet.GetRange("B" + 1 + ":I" + 1).SetFillColor(Api.CreateColorFromRGB(400, 400, 400));
    oWorksheet.GetRange("A" + 2 + ":A" + 40).SetFillColor(Api.CreateColorFromRGB(400, 400, 400));
    oWorksheet.GetRange("G" + 2 + ":G" + 25).SetFillColor(Api.CreateColorFromRGB(400, 400, 400));


    let cells0 = Api.GetActiveSheet().GetRange('A1:F40');
    let color = Api.CreateColorFromRGB("black");
    cells0.SetBorders('Left', 'Thin', color);
    cells0.SetBorders('Right', 'Thin', color);
    cells0.SetBorders('Top', 'Thin', color);
    cells0.SetBorders('Bottom', 'Thin', color);
    cells0.SetBorders('InsideVertical', 'Thin', color);
    cells0.SetBorders('InsideHorizontal', 'Thin', color);
    
    let cells1 = Api.GetActiveSheet().GetRange('G1:I25');
    cells1.SetBorders('Left', 'Thin', color);
    cells1.SetBorders('Right', 'Thin', color);
    cells1.SetBorders('Top', 'Thin', color);
    cells1.SetBorders('Bottom', 'Thin', color);
    cells1.SetBorders('InsideVertical', 'Thin', color);
    cells1.SetBorders('InsideHorizontal', 'Thin', color);

})();

/*
let cells = Api.GetSheet('Лист1').GetRange('B1:D40');
let color = Api.CreateColorFromRGB(255, 255, 200);
cells.SetBorders('Left', 'Thin', color);
*/