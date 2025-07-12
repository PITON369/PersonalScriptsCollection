//Gulyaev Aleksandr 8-963-636-56-69

//Sript must be used in psb file!

//Function for placing String

function SBComponent(Component)
{
         for (var prop in Component)
                   {ShowMessage("prop: " + prop); }
         var PString;
         var Board = PCBServer.GetCurrentPCBBoard;
         if (Board != Null)
         {
                   PString = PCBServer.PCBObjectFactory(eTextObject, eNoDimension, eCreate_Default);
                   PString.XLocation = Component.x;
                   PString.YLocation = Component.y;
                   PString.Layer = eTopOverlay;
                   PString.Text = Component.Name.Text;
                   PString.TextKind = 1;//TrueTypeFont;
                   PString.Size = 1968500; //5 mm
                   //PString.Width = 2000000;  //nope!
                   Board.AddPCBObject(PString);

                   PString = PCBServer.GetCurrentPCBText;
         }
}

function Start()
{
         var Prim = PCBServer.IPCB_Primitive;
         var Board = PCBServer.GetCurrentPCBBoard;

         if ((Board.SelectecObjectCount == 0)||(Board == null)){ShowMessage('There are no selected objects');}
         else
         {
             ShowMessage('SB_v.0.0.1');

             for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
             {
                 Prim = Board.SelectecObject(i);
                 Prim.BeginModify();
                 switch (Prim.ObjectID)
                          {
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
