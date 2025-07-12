//Sript must be used in psb file!

//Function's for placing object's

function PlaceArc(PArc)
{
         var PArc;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PArc);
         PArc = PCBServer.GetCurrentPCBArc;
}

function PlaceTrack(PTrack)
{
         var PTrack;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PTrack);
         PTrack = PCBServer.GetCurrentPCBTrack;
}

function SBVia(Via) {
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
        //Put this Arc in the Board object

        PlaceArc(Arc);

        var ViaTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var ViaTrack4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        ViaTrack1.X1         = Via.x;
        ViaTrack1.Y1         = Via.y;
        ViaTrack1.X2         = Via.x;
        ViaTrack1.Y2         = Via.y + Via.HoleSize;
        ViaTrack1.Width      = MMsToCoord(0.25);
        ViaTrack1.Layer      = eTopOverlay;

        ViaTrack2.X1         = Via.x;
        ViaTrack2.Y1         = Via.y;
        ViaTrack2.X2         = Via.x;
        ViaTrack2.Y2         = Via.y - Via.HoleSize;
        ViaTrack2.Width      = MMsToCoord(0.25);
        ViaTrack2.Layer      = eTopOverlay;

        ViaTrack3.X1         = Via.x;
        ViaTrack3.Y1         = Via.y;
        ViaTrack3.X2         = Via.x + Via.HoleSize;
        ViaTrack3.Y2         = Via.y;
        ViaTrack3.Width      = MMsToCoord(0.25);
        ViaTrack3.Layer      = eTopOverlay;

        ViaTrack4.X1         = Via.x;
        ViaTrack4.Y1         = Via.y;
        ViaTrack4.X2         = Via.x - Via.HoleSize;
        ViaTrack4.Y2         = Via.y;
        ViaTrack4.Width      = MMsToCoord(0.25);
        ViaTrack4.Layer      = eTopOverlay;

        PlaceTrack(ViaTrack1);
        PlaceTrack(ViaTrack2);
        PlaceTrack(ViaTrack3);
        PlaceTrack(ViaTrack4);
        }
}

//Function for one Pad
function SBPad(Pad) {
var Arc;
var Board = PCBServer.GetCurrentPCBBoard;
      if (Board != Null)
        {

        if (Pad.HoleType != eSquareHole)

        //Create a Arc object
        {
        //For round pad
        if (Pad.HoleType != eSlotHole)
        {
        Arc            = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        Arc.XCenter    = Pad.x;
        Arc.YCenter    = Pad.y;
        Arc.Layer      = eTopLayer;
        Arc.Radius     = Pad.HoleSize/2;
        Arc.LineWidth  = MMsToCoord(0.8);
        Arc.StartAngle = 0;
        Arc.EndAngle   = 360;
        //Put this Arc in the Board object

        PlaceArc(Arc);
         //Board.Track.Move(10000,5000);

        }
        //For Slot pad
        else {
        var Arc1        = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        var Arc2        = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);

        Arc1.XCenter    = Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2);
        Arc1.YCenter    = Pad.y; //- (Pad.HoleWidth/2 - Pad.HoleSize/2);

        /*Arc1.XCenter    = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2))*cos(Pad.Rotation/57.296);
        Arc1.YCenter    = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*sin(Pad.Rotation/57.296);
        */

        Arc1.Layer      = eTopLayer;
        Arc1.Radius     = Pad.HoleSize/2;
        Arc1.LineWidth  = MMsToCoord(0.25);
        Arc1.StartAngle = 90;
        Arc1.EndAngle   = 270;

        Arc2.XCenter    = Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2);
        Arc2.YCenter    = Pad.y; //+ (Pad.HoleWidth/2 - Pad.HoleSize/2);
        /*
        Arc2.XCenter    = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*cos(Pad.Rotation/57.296);
        Arc2.YCenter    = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*sin(Pad.Rotation/57.296);
        */
        Arc2.Layer      = eTopLayer;
        Arc2.Radius     = Pad.HoleSize/2;
        Arc2.LineWidth  = MMsToCoord(0.25);
        Arc2.StartAngle = 270;
        Arc2.EndAngle   = 90;

        //Put this Arc's in the Board object



        PlaceArc(Arc1);
        PlaceArc(Arc2);



        var SlotHoleTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var SlotHoleTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        //ShowMessage("Pad.x = " + Pad.x + " Pad.y = " + Pad.y + " Pad.Rotation = " + Pad.Rotation + " Pad.HoleWidth = " + Pad.HoleWidth + " Pad.HoleSize = " + Pad.HoleSize);
        //ShowMessage("Cos = " + parseFloat(cos(Pad.Rotation/57.296).toFixed(4)));
        //SlotHoleTrack1.X1         = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(cos(-Pad.Rotation/57.296).toFixed(4)) - (Pad.y - (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(sin(-Pad.Rotation/57.296).toFixed(4));

        //ShowMessage("Pad.x = " + Pad.x + " SlotHoleTrack1.X1 = " + SlotHoleTrack1.X1);

        //SlotHoleTrack1.Y1         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(sin(Pad.Rotation/57.296).toFixed(4)) + (Pad.y + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(cos(Pad.Rotation/57.296)).toFixed(4);

        //ShowMessage("Pad.y = " + Pad.y + " SlotHoleTrack1.Y1 = " + SlotHoleTrack1.Y1);

        //SlotHoleTrack1.X2         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(cos(Pad.Rotation/57.296).toFixed(4)) - (Pad.y + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(sin(Pad.Rotation/57.296).toFixed(4));

        //ShowMessage("Pad.x = " + Pad.x + " SlotHoleTrack1.X2 = " + SlotHoleTrack1.X2);

        //SlotHoleTrack1.Y2         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(sin(-Pad.Rotation/57.296).toFixed(4)) + (Pad.y + (Pad.HoleWidth/2 - Pad.HoleSize/2))*parseFloat(cos(-Pad.Rotation/57.296).toFixed(4));

        //ShowMessage("Pad.y = " + Pad.y + " SlotHoleTrack1.Y2 = " + SlotHoleTrack1.Y2);


        SlotHoleTrack1.X1         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack1.Y1         = (Pad.y + Pad.HoleSize/2)//(Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack1.X2         = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack1.Y2         = (Pad.y + Pad.HoleSize/2)//(Pad.HoleWidth - Pad.HoleSize));


        SlotHoleTrack1.Width      = MMsToCoord(0.25);
        SlotHoleTrack1.Layer      = eTopLayer;

        SlotHoleTrack2.X1         = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack2.Y1         = (Pad.y - Pad.HoleSize/2)//(Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack2.X2         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack2.Y2         = (Pad.y - Pad.HoleSize/2)//(Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack2.Width      = MMsToCoord(0.25);
        SlotHoleTrack2.Layer      = eTopLayer;

        //SlotHoleTrack2.Layer      = eBottomLayer;

        //ShowMessage("SHT1.X1 = " + SlotHoleTrack1.X1 + "SHT1.Y1 = " + SlotHoleTrack1.Y1 + "SHT1.X2 = " + SlotHoleTrack1.X2 + "SHT1.Y2 = " + SlotHoleTrack1.Y1 + "SHT2.X1 = " + SlotHoleTrack2.X1 + "SHT1.Y1 = " + SlotHoleTrack2.Y1 + "SHT1.X2 = " + SlotHoleTrack2.X2 + "SHT1.Y2 = " + SlotHoleTrack2.Y2);
        //ShowMessage("Pad.Rotation=" + Pad.Rotation + " Sin=" + (sin(Pad.Rotation/57.296)) + " cos=" + (cos(Pad.Rotation/57.296)) );
        //ShowMessage("Pad.x=" + Pad.x + " SHT1.X1=" + SlotHoleTrack1.X1 + " SHT1.X2=" + SlotHoleTrack1.X2 + " SHT2.X1=" + SlotHoleTrack2.X1 + " SHT2.X2=" + SlotHoleTrack2.X2 +  " Pad.y=" + Pad.y  + " SHT1.Y1=" + SlotHoleTrack1.Y1 + " SHT1.Y2=" + SlotHoleTrack1.Y2 + " SHT2.Y1=" + SlotHoleTrack2.Y1 + " SHT2.Y2=" + SlotHoleTrack2.Y2);



        PlaceTrack(SlotHoleTrack1);
        PlaceTrack(SlotHoleTrack2);

        /*
        OLD WORKS
        SlotHoleTrack1.X1         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack1.Y1         = (Pad.y + (Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack1.X2         = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack1.Y2         = (Pad.y + (Pad.HoleWidth - Pad.HoleSize));

        SlotHoleTrack1.Width      = MMsToCoord(0.25);
        SlotHoleTrack1.Layer      = eTopLayer;

        SlotHoleTrack2.X1         = (Pad.x - (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack2.Y1         = (Pad.y - (Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack2.X2         = (Pad.x + (Pad.HoleWidth/2 - Pad.HoleSize/2));
        SlotHoleTrack2.Y2         = (Pad.y - (Pad.HoleWidth - Pad.HoleSize));
        SlotHoleTrack2.Width      = MMsToCoord(0.25);
        SlotHoleTrack2.Layer      = eTopLayer;

        PlaceTrack(SlotHoleTrack1);
        PlaceTrack(SlotHoleTrack2);*/


        }
        }
        //For square pad
        else {

        var SquareTrack1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var SquareTrack2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var SquareTrack3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var SquareTrack4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        SquareTrack1.X1         = Pad.x - Pad.HoleSize/2;
        SquareTrack1.Y1         = Pad.y + Pad.HoleSize/2;
        SquareTrack1.X2         = Pad.x + Pad.HoleSize/2;
        SquareTrack1.Y2         = Pad.y + Pad.HoleSize/2;

        /*
        SquareTrack1.X1         = (Pad.x - Pad.HoleSize/2)+(Pad.x - Pad.HoleSize/2)*cos(Pad.x - Pad.HoleSize/2);
        SquareTrack1.Y1         = (Pad.y + Pad.HoleSize/2)+(Pad.y + Pad.HoleSize/2)*sin(Pad.y + Pad.HoleSize/2);
        SquareTrack1.X2         = (Pad.x + Pad.HoleSize/2)+(Pad.x + Pad.HoleSize/2)*cos(Pad.x + Pad.HoleSize/2);
        SquareTrack1.Y2         = (Pad.y + Pad.HoleSize/2)+(Pad.y + Pad.HoleSize/2)*sin(Pad.y + Pad.HoleSize/2);
        */

        SquareTrack1.Width      = MMsToCoord(0.25);
        SquareTrack1.Layer      = eTopLayer;

        SquareTrack2.X1         = Pad.x - Pad.HoleSize/2;
        SquareTrack2.Y1         = Pad.y + Pad.HoleSize/2;
        SquareTrack2.X2         = Pad.x - Pad.HoleSize/2;
        SquareTrack2.Y2         = Pad.y - Pad.HoleSize/2;
        SquareTrack2.Width      = MMsToCoord(0.25);
        SquareTrack2.Layer      = eTopLayer;

        SquareTrack3.X1         = Pad.x - Pad.HoleSize/2;
        SquareTrack3.Y1         = Pad.y - Pad.HoleSize/2;
        SquareTrack3.X2         = Pad.x + Pad.HoleSize/2;
        SquareTrack3.Y2         = Pad.y - Pad.HoleSize/2;
        SquareTrack3.Width      = MMsToCoord(0.25);
        SquareTrack3.Layer      = eTopLayer;

        SquareTrack4.X1         = Pad.x + Pad.HoleSize/2;
        SquareTrack4.Y1         = Pad.y + Pad.HoleSize/2;
        SquareTrack4.X2         = Pad.x + Pad.HoleSize/2;
        SquareTrack4.Y2         = Pad.y - Pad.HoleSize/2;
        SquareTrack4.Width      = MMsToCoord(0.25);
        SquareTrack4.Layer      = eTopLayer;

        PlaceTrack(SquareTrack1);
        PlaceTrack(SquareTrack2);
        PlaceTrack(SquareTrack3);
        PlaceTrack(SquareTrack4);
        }

        //Place track's
        var Track1        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track2        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track3        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        var Track4        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        Track1.X1         = Pad.x;
        Track1.Y1         = Pad.y;
        Track1.X2         = Pad.x;
        Track1.Y2         = Pad.y + Pad.HoleSize;
        Track1.Width      = MMsToCoord(0.25);
        Track1.Layer      = eTopOverlay;

        Track2.X1         = Pad.x;
        Track2.Y1         = Pad.y;
        Track2.X2         = Pad.x;
        Track2.Y2         = Pad.y - Pad.HoleSize;
        Track2.Width      = MMsToCoord(0.25);
        Track2.Layer      = eTopOverlay;

        Track3.X1         = Pad.x;
        Track3.Y1         = Pad.y;
        Track3.X2         = Pad.x + Pad.HoleSize;
        Track3.Y2         = Pad.y;
        Track3.Width      = MMsToCoord(0.25);
        Track3.Layer      = eTopOverlay;

        Track4.X1         = Pad.x;
        Track4.Y1         = Pad.y;
        Track4.X2         = Pad.x - Pad.HoleSize;
        Track4.Y2         = Pad.y;
        Track4.Width      = MMsToCoord(0.25);
        Track4.Layer      = eTopOverlay;

        PlaceTrack(Track1);
        PlaceTrack(Track2);
        PlaceTrack(Track3);
        PlaceTrack(Track4);
        //Track1.Rotation = 90;
        }
}

//Function for one Component
function SBComponent(Component) {
var Iter = Component.GroupIterator_Create();
var Prim = Iter.FirstPCBObject;
var dead = 0;
while (Prim != null)
{
Prim.BeginModify;
switch (Prim.ObjectID) {
case ePadObject: SBPad(Prim);
break;
default:
break;
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
       else {ShowMessage('Its works!');

       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
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
