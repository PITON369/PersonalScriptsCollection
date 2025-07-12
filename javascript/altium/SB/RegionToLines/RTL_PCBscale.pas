// Полигон состоит как правило из региона, если что-то не строится, то значит туда входят Track, Arc или Fill(Квадрат)
// Лучше строить линии через Region, потому что полигон - это заданные координаты полигона, а Region - реальный полигон со всеми правилами и зазорами

var
   //X, Y       : TCoord;
   Board      : IPCB_Board;

Procedure DrawTrack(TX1 : integer, TX2 : integer, TY1 : integer, TY2 : integer);
Var
    Track         : IPCB_Track;
begin
     ShowMessage('DrawTrack');
     //ShowMessage(TX1);
     //ShowMessage(TX2);
     //ShowMessage(TY1);
     //ShowMessage(TY2);
     Track             := PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
     Track.X1          := TX1;
     Track.Y1          := TY1;
     Track.X2          := TX2;
     Track.Y2          := TY2;
     Track.Layer       := eTopLayer;
     Track.Width       := MMsToCoord(0.25);
     Board.AddPCBObject(Track);

end;

Procedure ScaleTrack(Prim : IPCB_Track);
begin
   ShowMessage('ScaleTrack(Prim : IPCB_Track)');
   Prim.x1    := X + Int(Prim.x1 - X);
   Prim.x2    := X + Int(Prim.x2 - X);
   Prim.y1    := Y + Int(Prim.y1 - Y);
   Prim.y2    := Y + Int(Prim.y2 - Y);
   Prim.Width := Int(Prim.Width);
   //ShowMessage('Prim.X1 = ');
   //ShowMessage(Prim.X1);
   //ShowMessage('Prim.Y1 =');
   //ShowMessage(Prim.Y1);
end;

Procedure ScaleArc(Prim : IPCB_Arc);
begin
     ShowMessage('ScaleArc(Prim : IPCB_Arc)');
     {Prim.XCenter   := X + Int(Prim.XCenter - X);
     Prim.YCenter   := Y + Int(Prim.YCenter - Y);
     Prim.Radius    := Int(Prim.Radius);
     Prim.LineWidth := Int(Prim.LineWidth);}
end;

Procedure ScaleFill(Prim : IPCB_Fill);
begin
     ShowMessage('ScaleFill(Prim : IPCB_Fill)');
     {Prim.X1Location := X + Int(Prim.X1Location - X);
     Prim.X2Location := X + Int(Prim.X2Location - X);
     Prim.Y1Location := Y + Int(Prim.Y1Location - Y);
     Prim.Y2Location := Y + Int(Prim.Y2Location - Y);}
end;

Procedure ScaleRegion(Prim : IPCB_Region);
var
   i, j : Integer;
   Contour : IPCB_Contour;
   X1, X2, Y2, Y1  : Integer;
   //Prim2   : IPCB_Region;
begin
      ShowMessage('ScaleRegion(Prim : IPCB_Region)');
      Contour := PCBServer.PCBContourFactory;
      //Prim2 := Prim.Replicate;
      X1 := 0;
      X2 := 0;
      Y2 := 0;
      Y1 := 0;
      i := 0;
      j := 0;
      // Соединение первой и последней точек
      {X1 := Int(Prim.MainContour.x[0]);
      Y1 := Int(Prim.MainContour.y[0]);
      X2 := Int(Prim.MainContour.x[Prim.MainContour.Count]);
      Y2 := Int(Prim.MainContour.y[Prim.MainContour.Count]); }
      {X1 := X + Int(Prim.MainContour.x[0] - X);
      Y1 := Y + Int(Prim.MainContour.y[0] - Y);
      X2 := X + Int(Prim.MainContour.x[Prim.MainContour.Count] - X);
      Y2 := Y + Int(Prim.MainContour.y[Prim.MainContour.Count] - Y);}

      {ShowMessage('X1 = ');
      ShowMessage(X1);
      ShowMessage('Y1 = ');
      ShowMessage(Y1);
      ShowMessage('X2 = ');
      ShowMessage(X2);
      ShowMessage('Y2 = ');
      ShowMessage(Y2);
      DrawTrack(X1, X2, Y1, Y2);}

      //ShowMessage('Xa = ');
      //ShowMessage(Xa);
      //ShowMessage('Ya =');
      //ShowMessage(Ya);

    //for i := 1 to Prim2.Holes[j].Count do
   //j := 1; //j := 2;
   for i := 0 to Prim.MainContour.Count do//for i := 1 to Prim.MainContour.Count do
   begin
      j := i + 1; 
      ShowMessage('i = ');
      ShowMessage(i);
      ShowMessage('j = ');
      ShowMessage(j);
      X1 := Int(Prim.MainContour.x[i]);//X1 := X + Int(Prim.MainContour.x[i] - X);
      Y1 := Int(Prim.MainContour.y[i]);//Y1 := Y + Int(Prim.MainContour.y[i] - Y);



      If j = Prim.MainContour.Count then
      begin
           j := 0;
           X2 := Int(Prim.MainContour.x[j]);
           Y2 := Int(Prim.MainContour.y[j]);
           //j := 0;
           //X2 := X + Int(Prim.MainContour.x[j] - X);
           //Y2 := Y + Int(Prim.MainContour.y[j] - Y);
      end
      else
      begin
           //j := 0;
           X2 := Int(Prim.MainContour.x[j]);
           Y2 := Int(Prim.MainContour.y[j]);
           //X2 := X + Int(Prim.MainContour.x[j] - X);
           //Y2 := Y + Int(Prim.MainContour.y[j] - Y);
      end;

      DrawTrack(X1, X2, Y1, Y2);
      //Contour.AddPoint(Xa, Ya);
      //ShowMessage('Xa = ');
      //ShowMessage(Xa);
      //ShowMessage('Ya =');
      //ShowMessage(Ya);
   end;


   Prim.SetOutlineContour(Contour);
   Contour.Clear;
   // Отверстия в полигоне
  { for j := 0 to Prim2.HoleCount - 1 do
   begin
      for i := 1 to Prim2.Holes[j].Count do
      begin
         Xa := X + Int(Prim2.Holes[j].x[i] - X);
         Ya := Y + Int(Prim2.Holes[j].y[i] - Y);
         Contour.AddPoint(Xa, Ya);
      end;
      Prim.GeometricPolygon.AddContourIsHole(Contour, True);
      Contour.Clear;
   end; }

   Prim.GraphicallyInvalidate;
end;

Procedure ScalePoly(Polygon : IPCB_Polygon);
var
   i    : Integer;
   Iter : IPCB_GroupIterator;
   Prim : IPCB_Primitive;
   //NewSegment : TPolySegment;
   {TX1  : Integer;
   TX2  : Integer;
   TY1  : Integer;
   TY2  : Integer;}

begin
     ShowMessage('ScalePoly(Polygon : IPCB_Polygon)');
     {ShowMessage('Polygon.Segments[0].vx = ');
     ShowMessage(Polygon.Segments[0].vx);

   For I := 0 To Polygon.PointCount Do
   begin
      NewSegment := TPolySegment;
      NewSegment.Kind := Polygon.Segments[I].Kind;
      If Polygon.Segments[I].Kind = ePolySegmentArc then
      begin
         NewSegment.cx := X + Int(Polygon.Segments[I].cx - X);
         NewSegment.cy := Y + Int(Polygon.Segments[I].cy - Y);
         NewSegment.Radius := Int(Polygon.Segments[I].Radius);
      end
      else
      begin
         NewSegment.vx := X + Int(Polygon.Segments[I].vx - X);
         NewSegment.vy := Y + Int(Polygon.Segments[I].vy - Y);

         //ShowMessage('NewSegment.cx = ');
         //ShowMessage(NewSegment.cx);
         //ShowMessage('NewSegment.vx = '); //Этот
         //ShowMessage(NewSegment.vx);
      end;
      Polygon.Segments[I] := NewSegment;
   end;}

   Iter := Polygon.GroupIterator_Create;

   Prim := Iter.FirstPCBObject;
   While Prim <> nil do
   begin
      Prim.BeginModify;
      case Prim.ObjectId of
         eTrackObject         : ScaleTrack(Prim);
         eArcObject           : ScaleArc(Prim);
         eRegionObject        : ScaleRegion(Prim);
      end;
      Prim.EndModify;
      Prim.GraphicallyInvalidate;
      Prim := Iter.NextPCBObject;
   end;
   Polygon.GroupIterator_Destroy(Iter);
   Polygon.GraphicallyInvalidate;
end;

procedure Start;
var
   i          : Integer;
   Prim       : IPCB_Primitive;
begin
   Board := PCBServer.GetCurrentPCBBoard;

   if Board = nil then exit;
   if Board.SelectecObjectCount = 0 then
   begin
      ShowMessage('There are no selected objects');
      exit;
   end;

   for i := 0 to Board.SelectecObjectCount - 1 do
   begin
      Prim := Board.SelectecObject[i];

      if ((Prim.InComponent or Prim.InCoordinate or Prim.InDimension or Prim.InPolygon) = False) then
      begin
         Prim.BeginModify;
         case Prim.ObjectId of
              eTrackObject                : ScaleTrack(Prim);
              eArcObject                  : ScaleArc(Prim);
              eFillobject                 : ScaleFill(Prim);
              eRegionObject               : ScaleRegion(Prim);
              ePolyObject                 : ScalePoly(Prim);
         end;
         Prim.EndModify;
         Prim.GraphicallyInvalidate;
      end;
   end;
   Board.ViewManager_FullUpdate;
end;
