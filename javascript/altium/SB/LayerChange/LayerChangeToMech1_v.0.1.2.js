//No Fill and Solid Region

function PlaceTrack(PTrack)
{
         var PTrack;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PTrack);
         PTrack = PCBServer.GetCurrentPCBTrack;
}

function LCTrack(Prim)
{
        var Track        = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);

        Track.X1         = Prim.X1;
        Track.Y1         = Prim.Y1;
        Track.X2         = Prim.X2;
        Track.Y2         = Prim.Y2;
        Track.Width      = Prim.Width;
        Track.Layer      = Prim.eMechanical1;

        PlaceTrack(Track);
        //Track = PCBServer.GetCurrentPCBTrack;
}

function PlaceArc(PArc)
{
         var PArc;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PArc);
         PArc = PCBServer.GetCurrentPCBArc;
}

function LCArc(Prim)
{
         var Arc;
         var Board = PCBServer.GetCurrentPCBBoard;
         if (Board != Null)
         {
                   Arc            = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
                   Arc.XCenter    = Prim.XCenter;
                   Arc.YCenter    = Prim.YCenter;
                   Arc.Layer      = eMechanical1;
                   Arc.Radius     = Prim.Radius;
                   Arc.LineWidth  = Prim.LineWidth;
                   Arc.StartAngle = Prim.StartAngle;
                   Arc.EndAngle   = Prim.EndAngle;
                   //Put this Arc in the Board object
                   //Arc = PCBServer.GetCurrentPCBArc;
                   PlaceArc(Arc);
         }
}

/*function PlaceString(PString)
{
         var PString;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PString);
         PString = PCBServer.GetCurrentPCBText;
} */

/*function LCString(Prim)
{
ShowMessage('function LCString(Prim)-Begin');
                   PString = PCBServer.PCBObjectFactory(eTextObject, eNoDimension, eCreate_Default);

                   PString.XLocation          = Prim.XLocation;
                   PString.YLocation          = Prim.YLocation;
                   PString.Layer              = eMechanical1;
                   PString.Text               = Prim.Text;
                   PString.TextKind           = Prim.TextKind;
                   PString.Size               = Prim.Size;
                   PString.Width              = Prim.Width;
                   //Board.AddPCBObject(PString);

                   PString = PCBServer.GetCurrentPCBText;
ShowMessage('function LCString(Prim)-End');
} */

function LCString(Prim)
{Prim.Layer = eMechanical1;}

function LCRegion(Prim)
{Prim.Layer = eMechanical1;}

//Dimension need select to visual replace to mech1 from F11
function LCDimension(Prim)
{Prim.Layer = eMechanical1;}

function Start()
{
         ShowMessage('LayerChangeToMech1_v.0.1.2');
         var Board = PCBServer.GetCurrentPCBBoard;
         if ((Board.SelectecObjectCount == 0)||(Board == null))
         {ShowMessage('There are no selected objects');}
         else
         {
             for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
             {
                 var Prim = Board.SelectecObject(i);
                 Prim.BeginModify();
                 switch (Prim.ObjectID)
                 {
                        case eTrackObject: LCTrack(Prim);
                        break;
                        case eArcObject: LCArc(Prim);
                        break;
                        case eTextObject: LCString(Prim);
                        break;
                        case eDimensionObject: LCDimension(Prim);
                        break;
                        case eRegionObject: LCRegion(Prim);
                        break;
                        default:
                        break;
                 }
                 //Remove's
                 if(Prim.ObjectID == eTrackObject)           {Board.RemovePCBObject(Prim);}
                 if(Prim.ObjectID == eArcObject)             {Board.RemovePCBObject(Prim);}
                 
             }
         }
         ShowMessage('End');
}

/*Change from 0.1.1
+region
+Remove region, Dimention
*/
