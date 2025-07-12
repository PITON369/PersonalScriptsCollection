//У компонента центр должен быть в центре, иначе скрипт работать не будет.
//В библиотеке если элемнт двигается на x=x-n, то на плате его надо будет:
//при 0 градусах сдвинуть по х на +n;
//при 90 градусах сдвинуть по y на +n;
//при 180 градусах сдвинуть по х на -n;
//при 270 градусах сдвинуть по y на -n;
//при 360 градусах сдвинуть по х на +n.

var trigger1=0;
var trigger2=0;
var xMin=0;
var xMax=0;
var yMin=0;
var yMax=0;
var xComp=0;
var yComp=0;
var xMove=0;
var yMove=0;
var xPadMax=0;
var yPadMax=0;
var xPadMin=0;
var yPadMin=0;
var numberOfComponents = 0;

function SBTrack(PTrack)
{
if (PTrack.x1 > xMax)
{xMax = PTrack.x1;}
if (PTrack.x2 < xMin)
{xMin = PTrack.x2;}
if (PTrack.y1 > yMax)
{yMax = PTrack.y1;}
if (PTrack.y2 < yMin)
{yMin = PTrack.y2;}
}

function SBArc(PArc)
{
if (PArc.XCenter > (xMin+xMax)/2)
{xMax = PArc.XCenter;}
if (PArc.YCenter > (xMin+xMax)/2)
{yMax = PArc.YCenter;}

if (PArc.XCenter > (xMin+xMax)/2)
{xMin = PArc.XCenter;}
if (PArc.YCenter > (xMin+xMax)/2)
{yMin = PArc.YCenter;}
}

//Not worked
function SBPoly(PPoly)
{
if (PTrack.x1 > xMax)
{xMax = PTrack.x1;}
if (PTrack.x2 < xMin)
{xMin = PTrack.x2;}
if (PTrack.y1 > yMax)
{yMax = PTrack.y1;}
if (PTrack.y2 < yMin)
{yMin = PTrack.y2;}
//ShowMessage("SBPoly");
}

function MinXYTrack(PTrack)
{
xMin=PTrack.x1;
yMin=PTrack.y1;
}

function SBMoveTrack(PTrack)
{
PTrack.X1 = PTrack.X1 + xMove;
PTrack.Y1 = PTrack.Y1 + yMove;

PTrack.X2 = PTrack.X2 + xMove;
PTrack.Y2 = PTrack.Y2 + yMove;
}

function SBMoveArc(PArc)
{
PArc.XCenter = PArc.XCenter + xMove;
PArc.YCenter = PArc.YCenter + yMove;
}

function Calculate()
{
xMove = xComp - ((xMin + xMax)/2);
yMove = yComp - ((yMin + yMax)/2);
}

function SBCalculatePads(Pad)
{
if (Pad.x > xPadMax)
{xPadMax = Pad.x;}
if (Pad.x < xPadMin)
{xPadMin = Pad.x;}

if (Pad.y > yPadMax)
{yPadMax = Pad.y;}
if (Pad.y < yPadMin)
{yPadMin = Pad.y;}
}

function SBComponent(Component)
{
numberOfComponents++;
if ( trigger2 == 1 )
{
xPadMin = Component.x;
yPadMin = Component.y;
var Iter = Component.GroupIterator_Create();
var Prim = Iter.FirstPCBObject;
while (Prim != null)
{
Prim.BeginModify;
switch (Prim.ObjectID) {
case ePadObject: SBCalculatePads(Prim);
break;
default:
break;
}
Prim.EndModify;
Prim.GraphicallyInvalidate;
Prim = Iter.NextPCBObject;
}
Component.GroupIterator_Destroy(Iter);

xComp = (xPadMax+xPadMin)/2;
yComp = (yPadMax+yPadMin)/2;
}
else
{
xComp = Component.x;
yComp = Component.y;
}
}

function Main()
{
var Prim = PCBServer.IPCB_Primitive;
var Board = PCBServer.GetCurrentPCBBoard;

    if ((Board.SelectecObjectCount == 0)||(Board == null))
    {
    ShowMessage('Error! There are no selected objects');
    }
    else
    {
    if (trigger1 == 0)
    {
    ShowMessage('Remember about hidded names and center of component!');
    }

       //for to xMin and yMin
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID)
                          {
                          case eTrackObject: MinXYTrack(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }

       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID)
                          {
                          case eTrackObject: SBTrack(Prim);
                          break;
                          case eArcObject: SBArc(Prim);
                          break;
                          case eComponentObject: SBComponent(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }

       Calculate();
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID)
                          {
                          case eTrackObject: SBMoveTrack(Prim);
                          break;
                          case eArcObject: SBMoveArc(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }
Board.ViewManager_FullUpdate();
}
}

function Start()
{
trigger1 = 0;
Main();
if (numberOfComponents > 1)
       {
       ShowMessage("ERROR! More then one component!");
       }
numberOfComponents = 0;
}

function FastStart()
{
trigger1 = 1;
Main();
if (numberOfComponents > 1)
       {
       ShowMessage("ERROR! More then one component!");
       }
numberOfComponents = 0;
}

function PadStart()
{
trigger1 = 1;
trigger2 = 1;
Main();
if (numberOfComponents > 1)
       {
       ShowMessage("ERROR! More then one component!");
       }
trigger2 = 0;
numberOfComponents = 0;
}
