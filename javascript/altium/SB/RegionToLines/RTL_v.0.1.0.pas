// Полигон состоит как правило из региона, если что-то не строится, то значит туда входят Track, Arc или Fill(Квадрат)
// Лучше строить линии через Region, потому что полигон - это заданные координаты полигона, а Region - реальный полигон со всеми правилами и зазорами
// Всякие старые строки в RTL_PCBscale.pas

var
   Board      : IPCB_Board;

Procedure DrawTrack(TX1 : integer, TX2 : integer, TY1 : integer, TY2 : integer);
Var
    Track         : IPCB_Track;
begin
     Track             := PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
     Track.X1          := TX1;
     Track.Y1          := TY1;
     Track.X2          := TX2;
     Track.Y2          := TY2;
     Track.Layer       := eTopOverlay;
     Track.Width       := MMsToCoord(0.25);
     Board.AddPCBObject(Track);
end;

Procedure RTLTrack(Prim : IPCB_Track);
Var
   Track         : IPCB_Track;
begin
   ShowMessage('WARNING! ScaleTrack(Prim : IPCB_Track)');
   Track           := PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
   Track.x1        := Prim.x1;
   Track.x2        := Prim.x2;
   Track.y1        := Prim.y1;
   Track.y2        := Prim.y2;
   Track.Width     := Int(Prim.Width);
   Track.Width     := MMsToCoord(0.25);
   Track.Layer     := eTopOverlay;
   Board.AddPCBObject(Track);
end;

Procedure RTLArc(Prim : IPCB_Arc);
Var
     Arc           : IPCB_Arc;
begin
     ShowMessage('WARNING! ScaleArc(Prim : IPCB_Arc)');
     Arc           := PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
     Arc.XCenter   := Prim.XCenter;
     Arc.YCenter   := Prim.YCenter;
     Arc.Radius    := Prim.Radius;
     Arc.LineWidth := MMsToCoord(0.25);
     Arc.Layer     := eTopOverlay;
     Board.AddPCBObject(Arc);
end;

Procedure RTLFill(Prim : IPCB_Fill);
begin
     ShowMessage('WARNING! ScaleFill(Prim : IPCB_Fill)');
end;

Procedure RTLRegion(Prim : IPCB_Region);
var
   i, j : Integer;
   Contour : IPCB_Contour;
   X1, X2, Y2, Y1  : Integer;
begin
      Contour := PCBServer.PCBContourFactory;
      X1 := 0;
      X2 := 0;
      Y2 := 0;
      Y1 := 0;
      i := 0;
      j := 0;
   for i := 0 to Prim.MainContour.Count do
   begin
      j := i + 1;
      X1 := Int(Prim.MainContour.x[i]);
      Y1 := Int(Prim.MainContour.y[i]);



      If j = Prim.MainContour.Count then
      begin
           j := 0;
           X2 := Int(Prim.MainContour.x[j]);
           Y2 := Int(Prim.MainContour.y[j]);
      end
      else
      begin
           X2 := Int(Prim.MainContour.x[j]);
           Y2 := Int(Prim.MainContour.y[j]);
      end;

      DrawTrack(X1, X2, Y1, Y2);
   end;

   Prim.SetOutlineContour(Contour);
   Contour.Clear;
   Prim.GraphicallyInvalidate;
end;

Procedure RTLPoly(Polygon : IPCB_Polygon);
var
   i    : Integer;
   Iter : IPCB_GroupIterator;
   Prim : IPCB_Primitive;

begin
     Iter := Polygon.GroupIterator_Create;
     Prim := Iter.FirstPCBObject;
     While Prim <> nil do
     begin
          Prim.BeginModify;
          case Prim.ObjectId of
               eTrackObject         : RTLTrack(Prim);
               eArcObject           : RTLArc(Prim);
               eRegionObject        : RTLRegion(Prim);
               eFillObject          : RTLFill(Prim);
               ePolyObject          : RTLPoly(Prim);    // Если не работает, то закомментировать
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

   ShowMessage('RTL_v.0.1.0');
   for i := 0 to Board.SelectecObjectCount - 1 do
   begin
      Prim := Board.SelectecObject[i];

      if ((Prim.InComponent or Prim.InCoordinate or Prim.InDimension or Prim.InPolygon) = False) then
      begin
         Prim.BeginModify;
         case Prim.ObjectId of
              eTrackObject                : RTLTrack(Prim);
              eArcObject                  : RTLArc(Prim);
              eFillobject                 : RTLFill(Prim);
              eRegionObject               : RTLRegion(Prim);
              ePolyObject                 : RTLPoly(Prim);
         end;
         Prim.EndModify;
         Prim.GraphicallyInvalidate;
      end;
   end;
   Board.ViewManager_FullUpdate;
   ShowMessage('Script end');
end;
