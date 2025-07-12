//Sript must be used in psb file!

//Metallization
function PlaceArcs(PPad, Radius)
{
        var Board = PCBServer.GetCurrentPCBBoard;

        var PPadArc1             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc2             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc3             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc4             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc5             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc6             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc7             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var PPadArc8             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);

        PPadArc1.XCenter         = PPad.x;
        PPadArc1.YCenter         = PPad.y;
        PPadArc1.Layer           = eTopOverlay;
        PPadArc1.Radius          = Radius;
        PPadArc1.LineWidth       = MMsToCoord(0.25);
        PPadArc1.StartAngle      = 348.750;
        PPadArc1.EndAngle        = 11.250;

        PPadArc2.XCenter         = PPad.x;
        PPadArc2.YCenter         = PPad.y;
        PPadArc2.Layer           = eTopOverlay;
        PPadArc2.Radius          = Radius;
        PPadArc2.LineWidth       = MMsToCoord(0.25);
        PPadArc2.StartAngle      = 33.750;
        PPadArc2.EndAngle        = 56.250;

        PPadArc3.XCenter         = PPad.x;
        PPadArc3.YCenter         = PPad.y;
        PPadArc3.Layer           = eTopOverlay;
        PPadArc3.Radius          = Radius;
        PPadArc3.LineWidth       = MMsToCoord(0.25);
        PPadArc3.StartAngle      = 78.750;
        PPadArc3.EndAngle        = 101.250;

        PPadArc4.XCenter         = PPad.x;
        PPadArc4.YCenter         = PPad.y;
        PPadArc4.Layer           = eTopOverlay;
        PPadArc4.Radius          = Radius;
        PPadArc4.LineWidth       = MMsToCoord(0.25);
        PPadArc4.StartAngle      = 123.750;
        PPadArc4.EndAngle        = 146.250;

        PPadArc5.XCenter         = PPad.x;
        PPadArc5.YCenter         = PPad.y;
        PPadArc5.Layer           = eTopOverlay;
        PPadArc5.Radius          = Radius;
        PPadArc5.LineWidth       = MMsToCoord(0.25);
        PPadArc5.StartAngle      = 168.750;
        PPadArc5.EndAngle        = 191.250;

        PPadArc6.XCenter         = PPad.x;
        PPadArc6.YCenter         = PPad.y;
        PPadArc6.Layer           = eTopOverlay;
        PPadArc6.Radius          = Radius;
        PPadArc6.LineWidth       = MMsToCoord(0.25);
        PPadArc6.StartAngle      = 213.750;
        PPadArc6.EndAngle        = 236.250;

        PPadArc7.XCenter         = PPad.x;
        PPadArc7.YCenter         = PPad.y;
        PPadArc7.Layer           = eTopOverlay;
        PPadArc7.Radius          = Radius;
        PPadArc7.LineWidth       = MMsToCoord(0.25);
        PPadArc7.StartAngle      = 258.750;
        PPadArc7.EndAngle        = 281.250;

        PPadArc8.XCenter         = PPad.x;
        PPadArc8.YCenter         = PPad.y;
        PPadArc8.Layer           = eTopOverlay;
        PPadArc8.Radius          = Radius;
        PPadArc8.LineWidth       = MMsToCoord(0.25);
        PPadArc8.StartAngle      = 303.750;
        PPadArc8.EndAngle        = 326.250;

        Board.AddPCBObject(PPadArc1);
        Board.AddPCBObject(PPadArc2);
        Board.AddPCBObject(PPadArc3);
        Board.AddPCBObject(PPadArc4);
        Board.AddPCBObject(PPadArc5);
        Board.AddPCBObject(PPadArc6);
        Board.AddPCBObject(PPadArc7);
        Board.AddPCBObject(PPadArc8);
}

function SBVia(Via)
{
    var Arc;
    var Board = PCBServer.GetCurrentPCBBoard;
    if (Board != Null)
        {
        Arc            = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        Arc.XCenter    = Via.x;
        Arc.YCenter    = Via.y;
        Arc.Layer      = eTopLayer;
        Arc.Radius     = Via.HoleSize/2;
        Arc.LineWidth  = MMsToCoord(0.8);
        Arc.StartAngle = 0;
        Arc.EndAngle   = 360;

        Board.AddPCBObject(Arc);

        var ViaTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        ViaTrack1.X1         = Via.x;
        ViaTrack1.Y1         = Via.y;
        ViaTrack1.X2         = Via.x;
        ViaTrack1.Y2         = Via.y + Via.Size;
        ViaTrack1.Width      = MMsToCoord(0.25);
        ViaTrack1.Layer      = eTopOverlay;

        ViaTrack2.X1         = Via.x;
        ViaTrack2.Y1         = Via.y;
        ViaTrack2.X2         = Via.x;
        ViaTrack2.Y2         = Via.y - Via.Size;
        ViaTrack2.Width      = MMsToCoord(0.25);
        ViaTrack2.Layer      = eTopOverlay;

        ViaTrack3.X1         = Via.x;
        ViaTrack3.Y1         = Via.y;
        ViaTrack3.X2         = Via.x + Via.Size;
        ViaTrack3.Y2         = Via.y;
        ViaTrack3.Width      = MMsToCoord(0.25);
        ViaTrack3.Layer      = eTopOverlay;

        ViaTrack4.X1         = Via.x;
        ViaTrack4.Y1         = Via.y;
        ViaTrack4.X2         = Via.x - Via.Size;
        ViaTrack4.Y2         = Via.y;
        ViaTrack4.Width      = MMsToCoord(0.25);
        ViaTrack4.Layer      = eTopOverlay;

        Board.AddPCBObject(ViaTrack1);
        Board.AddPCBObject(ViaTrack2);
        Board.AddPCBObject(ViaTrack3);
        Board.AddPCBObject(ViaTrack4);

        PlaceArcs(Via, Via.Size/2);
        }
}

//Function for one Pad
function SBPad(Pad)
{
   var Board = PCBServer.GetCurrentPCBBoard;
   if (Board != Null)
       {
        if (Pad.HoleType != eSquareHole)
                 {
                 //For Round pad
                 if (Pad.HoleType != eSlotHole)
                                  {
                                  var Arc        = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
                                  Arc.XCenter    = Pad.x;
                                  Arc.YCenter    = Pad.y;
                                  Arc.Layer      = eTopLayer;
                                  Arc.Radius     = Pad.HoleSize/2;
                                  Arc.LineWidth  = MMsToCoord(0.8);
                                  Arc.StartAngle = 0;
                                  Arc.EndAngle   = 360;

                                  Board.AddPCBObject(Arc);
                                  PlaceArcs(Pad, Pad.TopXSize/2);
                                  }
                 //For Slot pad
                 else
                                  {
                                  var Arc1             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
                                  var Arc2             = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
                                  Arc1.XCenter         = (-(Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  Arc1.YCenter         = -( Pad.HoleWidth/2 - Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                                  Arc1.XCenter         = Arc1.XCenter + Pad.x;
                                  Arc1.YCenter         = Arc1.YCenter + Pad.y;

                                  Arc1.Layer           = eTopLayer;
                                  Arc1.Radius          = Pad.HoleSize/2;
                                  Arc1.LineWidth       = MMsToCoord(0.25);
                                  Arc1.StartAngle      = (Pad.HoleRotation+Pad.Rotation)+90;
                                  Arc1.EndAngle        = (Pad.HoleRotation+Pad.Rotation)-90;

                                  Arc2.XCenter         = (  Pad.HoleWidth/2 - Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  Arc2.YCenter         = (  Pad.HoleWidth/2 - Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                                  Arc2.XCenter         = Arc2.XCenter + Pad.x;
                                  Arc2.YCenter         = Arc2.YCenter + Pad.y;

                                  Arc2.Layer           = eTopLayer;
                                  Arc2.Radius          = Pad.HoleSize/2;
                                  Arc2.LineWidth       = MMsToCoord(0.25);
                                  Arc2.StartAngle      = (Pad.HoleRotation+Pad.Rotation)-90;
                                  Arc2.EndAngle        = (Pad.HoleRotation+Pad.Rotation)+90;

                                  Board.AddPCBObject(Arc1);
                                  Board.AddPCBObject(Arc2);

                                  //SlotHoleTrack Up
                                  var SlotHoleTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                                  var SlotHoleTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

                                  SlotHoleTrack1.X1         = (Pad.HoleSize/2-Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack1.Y1         = (Pad.HoleSize/2-Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack1.X2         = (-(Pad.HoleSize/2-Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack1.Y2         = (-(Pad.HoleSize/2-Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                                  SlotHoleTrack1.X1         = SlotHoleTrack1.X1 + Pad.x;
                                  SlotHoleTrack1.Y1         = SlotHoleTrack1.Y1 + Pad.y;
                                  SlotHoleTrack1.X2         = SlotHoleTrack1.X2 + Pad.x;
                                  SlotHoleTrack1.Y2         = SlotHoleTrack1.Y2 + Pad.y;

                                  SlotHoleTrack1.Width      = MMsToCoord(0.25);
                                  SlotHoleTrack1.Layer      = eTopLayer;

                                  //SlotHoleTrack Down
                                  SlotHoleTrack2.X1         = (-(Pad.HoleSize/2-Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack2.Y1         = (-(Pad.HoleSize/2-Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack2.X2         = (Pad.HoleSize/2-Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))   + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                                  SlotHoleTrack2.Y2         = (Pad.HoleSize/2-Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))   - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                                  SlotHoleTrack2.X1         = SlotHoleTrack2.X1 + Pad.x;
                                  SlotHoleTrack2.Y1         = SlotHoleTrack2.Y1 + Pad.y;
                                  SlotHoleTrack2.X2         = SlotHoleTrack2.X2 + Pad.x;
                                  SlotHoleTrack2.Y2         = SlotHoleTrack2.Y2 + Pad.y;

                                  SlotHoleTrack2.Width      = MMsToCoord(0.25);
                                  SlotHoleTrack2.Layer      = eTopLayer;

                                  Board.AddPCBObject(SlotHoleTrack1);
                                  Board.AddPCBObject(SlotHoleTrack2);
                                  }
                  }

        //For square pad with rotation hole with pad rotation
        else
                 {
                 var SquareTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                 var SquareTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                 var SquareTrack3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                 var SquareTrack4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

                 //SquareTrack Up
                 SquareTrack1.X1         = (Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack1.Y1         = (Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack1.X2         = (-(Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack1.Y2         = (-(Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                 SquareTrack1.X1         = SquareTrack1.X1 + Pad.x;
                 SquareTrack1.Y1         = SquareTrack1.Y1 + Pad.y;
                 SquareTrack1.X2         = SquareTrack1.X2 + Pad.x;
                 SquareTrack1.Y2         = SquareTrack1.Y2 + Pad.y;

                 SquareTrack1.Width      = MMsToCoord(0.25);
                 SquareTrack1.Layer      = eTopLayer;

                 //SquareTrack Right
                 SquareTrack2.X1         = (Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack2.Y1         = (Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack2.X2         = (Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))   + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack2.Y2         = (Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))   - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                 SquareTrack2.X1         = SquareTrack2.X1 + Pad.x;
                 SquareTrack2.Y1         = SquareTrack2.Y1 + Pad.y;
                 SquareTrack2.X2         = SquareTrack2.X2 + Pad.x;
                 SquareTrack2.Y2         = SquareTrack2.Y2 + Pad.y;

                 SquareTrack2.Width      = MMsToCoord(0.25);
                 SquareTrack2.Layer      = eTopLayer;

                 //SquareTrack Left
                 SquareTrack3.X1         = (-(Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack3.Y1         = (-(Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack3.X2         = (-(Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack3.Y2         = (-(Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                 SquareTrack3.X1         = SquareTrack3.X1 + Pad.x;
                 SquareTrack3.Y1         = SquareTrack3.Y1 + Pad.y;
                 SquareTrack3.X2         = SquareTrack3.X2 + Pad.x;
                 SquareTrack3.Y2         = SquareTrack3.Y2 + Pad.y;

                 SquareTrack3.Width      = MMsToCoord(0.25);
                 SquareTrack3.Layer      = eTopLayer;

                 //SquareTrack Down
                 SquareTrack4.X1         = (Pad.HoleWidth/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack4.Y1         = (Pad.HoleWidth/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4))  - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack4.X2         = (-(Pad.HoleWidth/2))*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) + (Pad.HoleSize/2)*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));
                 SquareTrack4.Y2         = (-(Pad.HoleWidth/2))*parseFloat(Math.sin(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4)) - (Pad.HoleSize/2)*parseFloat(Math.cos(Pad.HoleRotation/57.296+Pad.Rotation/57.296).toFixed(4));

                 SquareTrack4.X1         = SquareTrack4.X1 + Pad.x;
                 SquareTrack4.Y1         = SquareTrack4.Y1 + Pad.y;
                 SquareTrack4.X2         = SquareTrack4.X2 + Pad.x;
                 SquareTrack4.Y2         = SquareTrack4.Y2 + Pad.y;

                 SquareTrack4.Width      = MMsToCoord(0.25);
                 SquareTrack4.Layer      = eTopLayer;

                 Board.AddPCBObject(SquareTrack1);
                 Board.AddPCBObject(SquareTrack2);
                 Board.AddPCBObject(SquareTrack3);
                 Board.AddPCBObject(SquareTrack4);
                 }

        //Place track's (not optimazed) каждая из 4 линий 3/4 от диаметра металлизации или 1,5 радиуса
        var Track1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        if(Pad.HoleType == eRoundHole)
                          {
                          Track1.X1         = Pad.x;
                          Track1.Y1         = Pad.y;
                          Track1.X2         = Pad.x;
                          if(Pad.TopXSize   > Pad.HoleSize)                             {Track1.Y2         = Pad.y + 3*Pad.TopXSize/4;}
                          else                                                          {Track1.Y2         = Pad.y + Pad.HoleSize;}
                          Track1.Width      = MMsToCoord(0.25);
                          Track1.Layer      = eTopOverlay;

                          Track2.X1         = Pad.x;
                          Track2.Y1         = Pad.y;
                          Track2.X2         = Pad.x;
                          if(Pad.TopXSize   > Pad.HoleSize)                             {Track2.Y2         = Pad.y - 3*Pad.TopXSize/4;}
                          else                                                          {Track2.Y2         = Pad.y - Pad.HoleSize;}
                          Track2.Width      = MMsToCoord(0.25);
                          Track2.Layer      = eTopOverlay;

                          Track3.X1         = Pad.x;
                          Track3.Y1         = Pad.y;
                          if(Pad.TopXSize   > Pad.HoleSize)                             {Track3.X2         = Pad.x + 3*Pad.TopXSize/4;}
                          else                                                          {Track3.X2         = Pad.x + Pad.HoleSize;}
                          Track3.Y2         = Pad.y;
                          Track3.Width      = MMsToCoord(0.25);
                          Track3.Layer      = eTopOverlay;

                          Track4.X1         = Pad.x;
                          Track4.Y1         = Pad.y;
                          if(Pad.TopXSize   > Pad.HoleSize)                             {Track4.X2         = Pad.x - 3*Pad.TopXSize/4;}
                          else                                                          {Track4.X2         = Pad.x - Pad.HoleSize;}
                          Track4.Y2         = Pad.y;
                          Track4.Width      = MMsToCoord(0.25);
                          Track4.Layer      = eTopOverlay;
                          }
        else
                          {
                          Track1.X1         = Pad.x;
                          Track1.Y1         = Pad.y;
                          Track1.X2         = Pad.x;
                          if(Pad.HoleWidth  > Pad.HoleSize)                             {Track1.Y2         = Pad.y + Pad.HoleWidth;}
                          else                                                          {Track1.Y2         = Pad.y + Pad.HoleSize;}
                          Track1.Width      = MMsToCoord(0.25);
                          Track1.Layer      = eTopOverlay;

                          Track2.X1         = Pad.x;
                          Track2.Y1         = Pad.y;
                          Track2.X2         = Pad.x;
                          if(Pad.HoleWidth  > Pad.HoleSize)                             {Track2.Y2         = Pad.y - Pad.HoleWidth;}
                          else                                                          {Track2.Y2         = Pad.y - Pad.HoleSize;}
                          Track2.Width      = MMsToCoord(0.25);
                          Track2.Layer      = eTopOverlay;

                          Track3.X1         = Pad.x;
                          Track3.Y1         = Pad.y;
                          if(Pad.HoleWidth  > Pad.HoleSize)                             {Track3.X2         = Pad.x + Pad.HoleWidth;}
                          else                                                          {Track3.X2         = Pad.x + Pad.HoleSize;}
                          Track3.Y2         = Pad.y;
                          Track3.Width      = MMsToCoord(0.25);
                          Track3.Layer      = eTopOverlay;

                          Track4.X1         = Pad.x;
                          Track4.Y1         = Pad.y;
                          if(Pad.HoleWidth  > Pad.HoleSize)                             {Track4.X2         = Pad.x - Pad.HoleWidth;}
                          else                                                          {Track4.X2         = Pad.x - Pad.HoleSize;}
                          Track4.Y2         = Pad.y;
                          Track4.Width      = MMsToCoord(0.25);
                          Track4.Layer      = eTopOverlay;
                          }

        Board.AddPCBObject(Track1);
        Board.AddPCBObject(Track2);
        Board.AddPCBObject(Track3);
        Board.AddPCBObject(Track4);
        }
}

//Function for one Component
function SBComponent(Component)
{
         var Iter = Component.GroupIterator_Create();
         var Prim = Iter.FirstPCBObject;
         while (Prim != null)
         {
                     Prim.BeginModify;
                     {
                                      switch (Prim.ObjectID)
                                      {
                                             case ePadObject: SBPad(Prim);
                                             break;
                                             default:
                                             break;
                                      }
                     }
                     Prim.EndModify;
                     Prim.GraphicallyInvalidate;
                     Prim = Iter.NextPCBObject;
         }
         Component.GroupIterator_Destroy(Iter);
}

function Start()
{
         var Prim = PCBServer.IPCB_Primitive;
         var Board = PCBServer.GetCurrentPCBBoard;

         if ((Board.SelectecObjectCount == 0)||(Board == null))
         {ShowMessage('There are no selected objects');}
         else
         {
                      ShowMessage('SB_v.0.4.1');
                      for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
                      {
                               Prim = Board.SelectecObject(i);
                               Prim.BeginModify();
                               switch (Prim.ObjectID)
                               {
                                      case ePadObject: SBPad(Prim);
                                      break;
                                      case eComponentObject: SBComponent(Prim);
                                      break;
                                      case eViaObject: SBVia(Prim);
                                      break;
                                      default:
                                      break;
                               }
                               Prim.EndModify();
                               Prim.GraphicallyInvalidate();
                               //Remove Pad's, Via's and component's
                               if(Prim.ObjectID == ePadObject)             {Board.RemovePCBObject(Prim);}
                               if(Prim.ObjectID == eViaObject)             {Board.RemovePCBObject(Prim);}
                               if(Prim.ObjectID == eComponentObject)       {Board.RemovePCBObject(Prim);}
                      }
         }
         Board.ViewManager_FullUpdate();
         ShowMessage("Script end");
}
