function SBTrack(Prim)
{Prim.Layer = eKeepOutLayer;}

function SBArc(Prim)
{Prim.Layer = eKeepOutLayer;}

function SBString(Prim)
{Prim.Layer = eKeepOutLayer;}

function Start()
{
         ShowMessage('Start');
         var Board = PCBServer.GetCurrentPCBBoard;
         if ((Board.SelectecObjectCount == 0)||(Board == null))
         {ShowMessage('There are no selected objects');}
         else
         {
             ShowMessage('Its works!');

             for (var i = 0; i < Board.SelectecObjectCount; i++)
             {
                 var Prim = Board.SelectecObject(i);
                 Prim.BeginModify();
                 switch (Prim.ObjectID)
                 {
                        case eTrackObject: SBTrack(Prim);
                        break;
                        case eArcObject: SBArc(Prim);
                        break;
                        case eTextObject: SBString(Prim);
                        break;
                        default:
                        break;
                 }
             }
         }
}

