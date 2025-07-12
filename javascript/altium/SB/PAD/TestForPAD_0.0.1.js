function PlacePAD(PPAD)
{
         //ShowMessage('1PPAD.x = ' + PPAD.x + 'PPAD.y = ' + PPAD.y);
         var PPAD;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PPAD);
         PPAD = PCBServer.GetCurrentPCBPad;
}

function PlaceVia(PVia)
{
         var PVia;
         var Board = PCBServer.GetCurrentPCBBoard;
         Board.AddPCBObject(PVia);
         PVia = PCBServer.GetCurrentPCBVia;
}

function Start()
         {
         var Board = PCBServer.GetCurrentPCBBoard;
         if (Board == null)
              {ShowMessage('There are no board');}
         else
              {
              ShowMessage('Test_v.0.0.1');

              var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);

              //Round PAD's
              var i = 80;
              while(i < 90)
                      {
                      var num = i;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eRoundHole;
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(100);
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              var i = 80;
              while(i < 90)
                      {
                      var num = i;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eRoundHole;
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(105);
                      PlacePAD(Pad);
                      i = i + 4;
                      }


              //Slot PAD'S
              //Pad.Rotation
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSlotHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(100);
                      Pad.Rotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSlotHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(105);
                      Pad.Rotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              //Pad.HoleRotation
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSlotHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(110);
                      Pad.HoleRotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSlotHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(115);
                      Pad.HoleRotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }

              //Square PAD'S
              //Pad.Rotation
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSquareHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(200);
                      Pad.Rotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSquareHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(205);
                      Pad.Rotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              //Pad.HoleRotation
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSquareHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(210);
                      Pad.HoleRotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }
              var i = 100;
              while(i < 826)
                      {
                      var num = i;
                      var rot = i - 461;
                      var Pad = PCBServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_Default);
                      Pad.HoleType = eSquareHole;
                      Pad.HoleSize = MMsToCoord(2);
                      Pad.HoleWidth = MMsToCoord(3);
                      Pad.x = MMsToCoord(num);
                      Pad.y = MMsToCoord(215);
                      Pad.HoleRotation = rot;
                      PlacePAD(Pad);
                      i = i + 4;
                      }

              }
              ShowMessage("Script end");
         }
