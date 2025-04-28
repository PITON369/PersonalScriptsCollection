Sub MoveAndCopy()
'
' MoveAndCopy macros
'
' Hot keys: Ctrl+l
'
    Dim i As Integer

    ' Start from the currently active cell
    ActiveCell.Select

    For i = 1 To 105
        ' Check if the current cell is not empty
        If Not IsEmpty(ActiveCell) Then
            ' Cut the contents of the current cell
            Selection.Cut
            
            ' Move right one cell
            ActiveCell.Offset(0, 1).Select
            
            ' Move up one cell
            ActiveCell.Offset(-1, 0).Select
            
            ' Paste the cut content into the new cell
            ActiveSheet.Paste
            
            ' Move the selection left one cell
            ActiveCell.Offset(0, -1).Select
            
            ' Move down four cells
            ActiveCell.Offset(4, 0).Select
        Else
            ' If the cell is empty, just move down one cell
            ActiveCell.Offset(1, 0).Select
        End If
    Next i
End Sub

Sub CutRowsAndMoveDown()
    Dim i As Integer

    ' Start from the currently active cell
    ActiveCell.Select

    For i = 1 To 105
        ' Cut the current row
        ActiveCell.EntireRow.Delete
        
        ' Move down one row
        ' ActiveCell.Offset(1, 0).Select
        
        ' Cut the current row again
        ActiveCell.EntireRow.Delete
        
        ' Move down one row again
        ActiveCell.Offset(1, 0).Select
    Next i
End Sub
