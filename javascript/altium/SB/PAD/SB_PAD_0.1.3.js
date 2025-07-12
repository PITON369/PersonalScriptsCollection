//Sript must be used in psb file!

//Function for one Pad
function SBPad(Pad) {
var Arc;
var Board = PCBServer.GetCurrentPCBBoard;
      if (Board != Null)
        {
        //Create a Arc object
        Arc            = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        Arc.XCenter    = Pad.x;
        Arc.YCenter    = Pad.y;
        Arc.Layer      = eTopLayer;
        Arc.Radius     = Pad.HoleSize/2;
        Arc.LineWidth  = MMsToCoord(0.2);
        Arc.StartAngle = 0;
        Arc.EndAngle   = 360;
        //Put this Arc in the Board object
        Board.AddPCBObject(Arc);
        Arc = PCBServer.GetCurrentPCBArc;
        //Place track's
        var Track1 = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);;
        var Track2 = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);;
        var Track3 = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);;
        var Track4 = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);;

        Track1.X1         = Pad.x;
        Track1.Y1         = Pad.y;
        Track1.X2         = Pad.x;
        Track1.Y2         = Pad.y + Pad.HoleSize;
        Track1.Width      = MMsToCoord(0.2);
        Track1.Layer      = eTopLayer;

        Track2.X1         = Pad.x;
        Track2.Y1         = Pad.y;
        Track2.X2         = Pad.x;
        Track2.Y2         = Pad.y - Pad.HoleSize;
        Track2.Width      = MMsToCoord(0.2);
        Track2.Layer      = eTopLayer;

        Track3.X1         = Pad.x;
        Track3.Y1         = Pad.y;
        Track3.X2         = Pad.x + Pad.HoleSize;
        Track3.Y2         = Pad.y;
        Track3.Width      = MMsToCoord(0.2);
        Track3.Layer      = eTopLayer;

        Track4.X1         = Pad.x;
        Track4.Y1         = Pad.y;
        Track4.X2         = Pad.x - Pad.HoleSize;
        Track4.Y2         = Pad.y;
        Track4.Width      = MMsToCoord(0.2);
        Track4.Layer      = eTopLayer;

        Board.AddPCBObject(Track1);
        Track1 = PCBServer.GetCurrentPCBTrack;
        Board.AddPCBObject(Track2);
        Track2 = PCBServer.GetCurrentPCBTrack;
        Board.AddPCBObject(Track3);
        Track3 = PCBServer.GetCurrentPCBTrack;
        Board.AddPCBObject(Track4);
        Track4 = PCBServer.GetCurrentPCBTrack;

        //Remove Pad
        //Board.RemovePCBObject(Pad);
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

//Replays all pads.

//Delete all pads.


function Start()
{
var Prim = PCBServer.IPCB_Primitive;
var Board = PCBServer.GetCurrentPCBBoard;
    if ((Board.SelectecObjectCount == 0)||(Board == null))
       {ShowMessage('There are no selected objects');}
       else {ShowMessage('Its works!');

       for (var i = 0; i < Board.SelectecObjectCount; i++)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case ePadObject: SBPad(Prim);
                          break;
                          case eComponentObject: SBComponent(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }
}
Board.ViewManager_FullUpdate();
ShowMessage("Script end");
}
