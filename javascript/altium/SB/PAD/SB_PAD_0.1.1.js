//Sript must be used in psb file!

//Function for one Pad
function SBPad(Pad) {
ShowMessage("SBPad");

/*if (Pad.Mode = ePadMode_Simple)
   {
   Showmessage("ePadMode_Simple");
     Pad.TopXSize = Int(Pad.TopXSize * 2);
      Pad.TopYSize = Int(Pad.TopYSize * 2);
  }
   else if (Pad.Mode = ePadMode_LocalStack)
   {
   Showmessage("ePadMode_LocalStack");
   }
     */

      if (Board != Null)
    {
        //Create a Arc object
        ShowMessage("Arc_Begin");
        Arc           = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
       /* Arc.X1         = MMsToCoord(100);
        Arc.Y1         = MMsToCoord(100);
        Arc.X2         = MMsToCoord(70);
        Arc.Y2         = MMsToCoord(70);


        Prim.XCenter   := X + Int(Ratio * (Prim.XCenter - X));
        Prim.YCenter   := Y + Int(Ratio * (Prim.YCenter - Y));
        Prim.Radius    := Int(Prim.Radius * Ratio);
         Prim.LineWidth := Int(Prim.LineWidth * Ratio);

         */
        Arc.XCenter = Pad.XCenter;
        Arc.YCenter = Pad.YCenter;
        Arc.Radius = Pad.Radius;
        Arc.LineWidth = MMsToCoord(0.2);
        Arc.Layer  = eTopLayer;

        //Put this Arc in the Board object
        Board.AddPCBObject(Arc);
        Arc = PCBServer.GetCurrentPCBArc;
        ShowMessage("Arc_End");
    }

}



//Function for one Component
function SBComponent(Component) {
ShowMessage("SBComponent");
Iter = Component.GroupIterator_Create();
Prim = Iter.FirstPCBObject;
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

/*
function Start()
{
ShowMessage('Start1');
Prim = PCBServer.IPCB_Primitive;
ShowMessage('Start2');
Board = PCBServer.GetCurrentPCBBoard;
ShowMessage('Start3');
if ((Board.SelectecObjectCount == 0)||(Board == null))
   {ShowMessage('There are no selected objects');}
else {ShowMessage('Its works!')};

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
}
}
*/



 function Start() {
 ShowMessage('Start1');
 Board = PCBServer.GetCurrentPCBBoard;
 ShowMessage('Start2');
 if ((Board.SelectecObjectCount == 0)||(Board == null))
   {ShowMessage('There are no selected objects');}
 else {ShowMessage('Its works!')};
 }


/*
Procedure Start;
begin
   Board := PCBServer.GetCurrentPCBBoard;

   if Board = nil then exit;
   if Board.SelectecObjectCount = 0 then
   begin
      ShowMessage('There are no selected objects');
      exit;
   end;

   FormPCBscale.ShowModal;
end;
*/
