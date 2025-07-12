function ScalePoly(Polygon)
{
//ShowMessage(Polygon.Segments[0].vx);
}

function RTL()
{

}

function Start()
{
         ShowMessage('SB_RTL_v.0.0.1');
         var Prim = PCBServer.IPCB_Primitive;
         var Board = PCBServer.GetCurrentPCBBoard;
         ShowMessage(typeof(Prim));
         if ((Board.SelectecObjectCount == 0)||(Board == null))
         {ShowMessage('There are no selected objects');}
         else
         {
                      for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
                      {
                               Prim = Board.SelectecObject(i);
                               Prim.BeginModify();
                               switch (Prim.ObjectID)
                               {
                                      case ePolyObject   : ScalePoly(Prim);
                                      break;
                                      case eRegionObject : RTL(Prim);
                                      break;
                                      default:
                                      break;
                               }
                               Prim.EndModify();
                               Prim.GraphicallyInvalidate();
                               //Remove Pad's, Via's and component's
                               //if(Prim.ObjectID == eRegionObject)
                      }
         }
         Board.ViewManager_FullUpdate();
         ShowMessage("Script end");
}
