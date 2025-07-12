//var
   //X, Y       : TCoord;
   //Ratio      : Float;
   //Board      : IPCB_Board;

{Procedure TrackDraw(Region.X[I], Region.Y[I]);

Begin
     ShowMessage(Region.X[I]);
End;}

Procedure ScaleRegion(Prim : IPCB_Region);
var
   i, j : Integer;
   Contour : IPCB_Contour;
   Xa, Ya  : Integer;
   Prim2   : IPCB_Region;
begin
   ShowMessage('01');
   Contour := PCBServer.PCBContourFactory;
   Prim2 := Prim.Replicate;

   for i := 1 to Prim.MainContour.Count do
   begin
      Xa := X + Int({Ratio}2 * (Prim.MainContour.x[i] - X));
      Ya := Y + Int({Ratio}2 * (Prim.MainContour.y[i] - Y));
      Contour.AddPoint(Xa, Ya);
   end;
   ShowMessage('02');

   Prim.SetOutlineContour(Contour);
   Contour.Clear;

   for j := 0 to Prim2.HoleCount - 1 do
   begin
      for i := 1 to Prim2.Holes[j].Count do
      begin
         Xa := X + Int(Ratio * (Prim2.Holes[j].x[i] - X));
         Ya := Y + Int(Ratio * (Prim2.Holes[j].y[i] - Y));
         Contour.AddPoint(Xa, Ya);
      end;
      Prim.GeometricPolygon.AddContourIsHole(Contour, True);
      Contour.Clear;
      ShowMessage('03');

   end;

   Prim.GraphicallyInvalidate;
end;

Procedure RTLRegion(Region);

{Const
     N = 10;}
Var
    I         : Integer;
    //Region    : IPCB_Region;
    //BaseAngle : Double;
    //Contour   : IPCB_Contour;
Begin
    //Region := PCBServer.PCBObjectFactory(eRegionObject, eNoDimension,eCreate_Default);
    // Contour := Region.MainContour.Replicate;
    // Region.GeometricPolygon.AddContourIsHole(Nil, True);

    //Region.X;
    //Contour := Region.MainContour.Replicate;

    //Region.Layer             := eBottomLayer;
    //BaseAngle                := 2 * PI / N;
    //Contour.Count := N;

    //If N>
    ShowMessage(Region[1]);
    For I := 1 To Region.Count Do
    //I := 0;
    //while Region.X[I] do
    Begin
        //TrackDraw(Region.X[I], Region.Y[I]);
        ShowMessage('Work');
        ShowMessage(Region.X[I]);
        //TrackDraw(Region.X[I], Region.Y[I]);
        I := I + 1;
    End;

    //while Region.X[I]

    //If N

    //Contour.Translate(MilsToCoord(4500), MilsToCoord(4500));

    //Region.SetOutlineContour(Contour);

    // Add hole to region, hole must be totally contained within MainContour
    {
    If Region.HoleCount = 0 Then
       Region.GeometricPolygon.AddContourIsHole(Nil, True);

    BaseAngle := 2 * PI / (N Div 2);
    Region.Holes[0].Count := (N Div 2);
    For I := 1 To Region.Holes[0].Count Do
    Begin
        Region.Holes[0].X[I] := MilsToCoord(75 * Sin(I * BaseAngle));
        Region.Holes[0].Y[I] := MilsToCoord(75 * Cos(I * BaseAngle));
    End;
    Region.Holes[0].Translate(MilsToCoord(4500), MilsToCoord(4500));
    }

    Board.AddPCBObject(Region);
End;


procedure Start;
var
   Prim       : IPCB_Primitive;
   Board      : IPCB_Board;
   i          : integer;
begin

   Board := PCBServer.GetCurrentPCBBoard;
   ShowMessage('00');

   if Board = nil then exit;
   if Board.SelectecObjectCount = 0 then
   begin
      ShowMessage('There are no selected objects');
      exit;
   end;

   for i := 0 to Board.SelectecObjectCount - 1 do
   begin
      Prim := Board.SelectecObject[i];
      //if ((Prim.InComponent or Prim.InCoordinate or Prim.InDimension or Prim.InPolygon) = False) then
      begin
         Prim.BeginModify;
         case Prim.ObjectId of
              eRegionObject               : {RTLRegion}ScaleRegion(Prim);
         end;
         Prim.EndModify;
         Prim.GraphicallyInvalidate;
      end;
   end;
   Board.ViewManager_FullUpdate;
   //close;
end;

