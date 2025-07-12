//Sript must be used in psb file!

//Function for one Pad

function SBPad(Pad) {
ShowMessage("SBPad");
var Arc;
var Board = PCBServer.GetCurrentPCBBoard;
      if (Board != Null)
    {
        //Create a Arc object
        ShowMessage("Arc_Begin");
        Arc     = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        Arc.XCenter = Pad.x;
        //Arc.XCenter   = MMsToCoord(100);
        Arc.YCenter = Pad.y;
        //Arc.YCenter   = MMsToCoord(100);
        Arc.Layer   = eTopLayer;
        ShowMessage("Arc3");
        //Arc.Radius  = Pad.Radius;
        //ShowMessage("Arc4");
        //Arc.LineWidth = MMsToCoord(0.2);
        ShowMessage("Arc6");
        Arc.StartAngle = 0;
        Arc.EndAngle = 360;
        //Put this Arc in the Board object
        Board.AddPCBObject(Arc);
        ShowMessage("Arc7"); 
        Arc = PCBServer.GetCurrentPCBArc;
        ShowMessage("Arc_End");
    }

}



//Function for one Component
function SBComponent(Component) {
ShowMessage("SBComponent");
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
       ShowMessage("Prim.XCenter = " + Prim.XCenter);
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
}
