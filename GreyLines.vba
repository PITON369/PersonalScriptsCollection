Sub СераяЛиния()
'
' СераяЛиния Макрос
' Раскрашивает в серый цвет строки через одну
'
    Dim i As Integer
    
    Dim a As Integer
    a = MsgBox("10 это да, 5 это нет, 2 это отмена", 323, "Выбор кнопки")
    If a = 6 Then
    MsgBox "10 строк"
    For i = 1 To 10
    Selection.EndKey Unit:=wdLine, Extend:=wdExtend
    Options.DefaultHighlightColorIndex = wdGray25
    Selection.Range.HighlightColorIndex = wdGray25
    Selection.MoveDown Unit:=wdLine, Count:=2
    Selection.HomeKey Unit:=wdLine
    Next i
    
    ElseIf a = 7 Then
    MsgBox "5 строк"
    For i = 1 To 5
    Selection.EndKey Unit:=wdLine, Extend:=wdExtend
    Options.DefaultHighlightColorIndex = wdGray25
    Selection.Range.HighlightColorIndex = wdGray25
    Selection.MoveDown Unit:=wdLine, Count:=2
    Selection.HomeKey Unit:=wdLine
    Next i
    
    Else
    MsgBox "2 строки"
    Selection.EndKey Unit:=wdLine, Extend:=wdExtend
    Options.DefaultHighlightColorIndex = wdGray25
    Selection.Range.HighlightColorIndex = wdGray25
    Selection.MoveDown Unit:=wdLine, Count:=2
    Selection.HomeKey Unit:=wdLine
    Selection.EndKey Unit:=wdLine, Extend:=wdExtend
    Options.DefaultHighlightColorIndex = wdGray25
    Selection.Range.HighlightColorIndex = wdGray25
    Selection.MoveDown Unit:=wdLine, Count:=2
    Selection.HomeKey Unit:=wdLine
    End If
       
    
End Sub
